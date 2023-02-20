export interface IPost {
  id?: number;
  title?: string;
}

export class Post implements IPost {
  constructor(public id?: number, public title?: string) {}
}

export function getPostIdentifier(post: IPost): number | undefined {
  return post.id;
}
