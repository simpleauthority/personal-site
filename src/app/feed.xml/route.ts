//import { Feed } from 'feed'

export const runtime = 'edge'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Jacob Andersen',
    email: 'jacob@jacobandersen.dev',
  }

  // let feed = new Feed({
  //   title: author.name,
  //   description: 'All of my long-form thoughts on life in the Philippines (especially for expats), software engineering, travel, and more, collected in chronological order.',
  //   author,
  //   id: siteUrl,
  //   link: siteUrl,
  //   image: `${siteUrl}/favicon.ico`,
  //   favicon: `${siteUrl}/favicon.ico`,
  //   copyright: `All rights reserved ${new Date().getFullYear()}`,
  //   feedLinks: {
  //     rss2: `${siteUrl}/feed.xml`,
  //   },
  // })

  // let articleIds = require
  //   .context('../blog', true, /\/page\.mdx$/)
  //   .keys()
  //   .filter((key) => key.startsWith('./'))
  //   .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

  // for (let id of articleIds) {
  //   let url = String(new URL(`/blog/${id}`, req.url))
  //   let html = await (await fetch(url)).text()
  //   let $ = cheerio.load(html)

  //   let publicUrl = `${siteUrl}/blog/${id}`
  //   let article = $('article').first()
  //   let title = article.find('h1').first().text()
  //   let date = article.find('time').first().attr('datetime')
  //   let content = article.find('[data-mdx-content]').first().html()

  //   assert(typeof title === 'string')
  //   assert(typeof date === 'string')
  //   assert(typeof content === 'string')

  //   feed.addItem({
  //     title,
  //     id: publicUrl,
  //     link: publicUrl,
  //     content,
  //     author: [author],
  //     contributor: [author],
  //     date: new Date(date),
  //   })
  // }

  // return new Response(feed.rss2(), {
  //   status: 200,
  //   headers: {
  //     'content-type': 'application/xml',
  //     'cache-control': 's-maxage=31556952',
  //   },
  // })
  return new Response("", {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
