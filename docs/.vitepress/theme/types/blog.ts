export type Post =  {
  regularPath: string
  frontMatter: FrontMatter
}

export type PostMap = {
	key: string
	val: Post[]
}

type FrontMatter = {
	title: string
	description: string
	date: string
	category: string
	tags: string[]
}