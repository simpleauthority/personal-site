import readlineSync from 'readline-sync'
import slugify from 'slugify'
import { randomUUID } from 'node:crypto'
import * as path from 'node:path'
import * as fs from 'node:fs'

async function run() {
  const id = randomUUID()
  const title = readlineSync.question("Article title: ")
  let slug = slugify(title, { lower: true, strict: true })
  slug = slugify(readlineSync.question(`Slug (current: ${slug}): `, { defaultInput: slug }), { lower: true, strict: true })
  const description = readlineSync.question("Article description: ")
  const author = readlineSync.question("Author (default: Jacob Andersen): ", { defaultInput: "Jacob Andersen" })
  const coAuthors = []
  while (readlineSync.keyInYN("Add co-author?")) {
    const coAuthor = readlineSync.question("Co-author: ")
    if (coAuthor.trim().length !== 0) {
      coAuthors.push(coAuthor)
    }
  }

  const creationTime = new Date().getTime()

  const article: Article = {
    id,
    title,
    slug,
    description,
    author,
    coAuthors,
    created: creationTime,
    updated: creationTime
  }

  const articleDbPath = path.join(__dirname, "../src/app/blog/article-db.json")
  if (!fs.existsSync(articleDbPath)) {
    throw new Error("Article database does not exist. Please create the article-db.json file.")
  }

  const articles = JSON.parse(fs.readFileSync(articleDbPath, 'utf8')) as Article[]
  articles.push(article)
  fs.writeFileSync(articleDbPath, JSON.stringify(articles, null, 4))

  const articleDirectory = path.join(__dirname, `../src/app/blog`, slug)
  if (fs.existsSync(articleDirectory)) {
    throw new Error("Article directory with the same name already exists. Will not overwrite!")
  }

  fs.mkdirSync(articleDirectory, { recursive: true })

  const articleFile = path.join(articleDirectory, 'page.mdx')
  fs.writeFileSync(articleFile, `import { ArticleLayout } from '@/components/ArticleLayout'

export const article = {
  id: "${id}",
  title: "${title}",
  slug: "${slug}",
  description: "${description}",
  author: "${author}",
  coAuthors: [${coAuthors.map(coa => `"${coa}"`).join(", ")}],
  created: ${creationTime},
  /*regex_target*/updated: ${creationTime}
}

export default (props) => <ArticleLayout article={article} {...props} />

`)
}

run().catch(console.error)