import readlineSync from 'readline-sync'
import * as path from 'node:path'
import * as fs from 'node:fs'

async function run() {
  const articleDbPath = path.join(__dirname, "../src/app/blog/article-db.json")
  if (!fs.existsSync(articleDbPath)) {
    throw new Error("Article database does not exist. Please create the article-db.json file.")
  }

  let articles = JSON.parse(fs.readFileSync(articleDbPath, 'utf8')) as Article[]

  let article: Article | undefined = undefined
  do {
    const id = readlineSync.question("Article id: ")
    article = articles.find(article => article.id === id)
  } while (!article)

  if (!readlineSync.keyInYN("Are you sure you want to delete this article?")) {
    return
  }

  do {
    const slug = readlineSync.question(`Please type the slug to continue (${article.slug}): `)

    if (slug === article.slug) {
      break;
    }

    console.error("The slug you typed did not match. Try again.")
  } while (true)

  articles = articles.filter(article => article.id !== article.id)

  fs.writeFileSync(articleDbPath, JSON.stringify(articles, null, 4))

  const articleDirectory = path.join(__dirname, `../src/app/blog`, article.slug)
  if (fs.existsSync(articleDirectory)) {
    fs.rmSync(articleDirectory, { recursive: true, force: true })
  }
}

run().catch(console.error)