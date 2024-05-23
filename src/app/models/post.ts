export interface Post {
  id: string,
  title: string,
  body: string,
  author: string,
  hidden: boolean,
  date: number
}

export interface PostAddDTO {
  title: string,
  body: string,
  author: string,
  hidden: boolean
}
