import readlineSync from 'readline-sync'
import * as path from 'node:path'
import * as fs from 'node:fs'

async function run() {
  const now = new Date().getTime()

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

  articles = articles.filter(article => article.id !== article.id)
  article.updated = now
  articles.push(article)

  fs.writeFileSync(articleDbPath, JSON.stringify(articles, null, 4))

  const articleDirectory = path.join(__dirname, `../src/app/blog`, article.slug)
  if (!fs.existsSync(articleDirectory)) {
    throw new Error("Article directory does not exist. DB slug mismatch with filesystem slug?!")
  }

  const articleFile = path.join(articleDirectory, 'page.mdx')
  if (!fs.existsSync(articleFile)) {
    throw new Error("Article MDX file does not exist. This should not happen!")
  }

  let data = fs.readFileSync(articleFile, { encoding: 'utf8' })
  console.log(data)
  data = data.replace(/(\/\*regex_target\*\/updated: )(\d+)/, `$1${now}`)
  console.log(data)
  fs.writeFileSync(articleFile, data)
}

run().catch(console.error)