import * as path from 'node:path'
import * as fs from 'node:fs'

async function run() {
  const articleDbPath = path.join(__dirname, "../src/app/blog/article-db.json")
  if (!fs.existsSync(articleDbPath)) {
    throw new Error("Article database does not exist. Please create the article-db.json file.")
  }

  const articles = JSON.parse(fs.readFileSync(articleDbPath, 'utf8')) as Article[]
  for (const article of articles) {
    console.log(`(${article.id}) ${article.title}`)
  }
}

run().catch(console.error)