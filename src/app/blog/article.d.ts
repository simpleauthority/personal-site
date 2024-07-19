interface Article {
  id: string,
  title: string,
  slug: string,
  description: string,
  author: string,
  coAuthors: string[],
  created: number,
  updated: number
}