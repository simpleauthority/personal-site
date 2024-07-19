import articleDb from '@/app/blog/article-db.json'

export function getAllArticles(): Article[] {
  return (articleDb as Article[]).sort((a, z) => +new Date(z.created) - +new Date(a.created))
}
