export interface TagsStore {
  tags: Tag[];

  setTags: (newTags: Tag[]) => void;
  setTag: (newTag: Tag) => void;
  clearTags: () => void;
}

export interface PostsStore {
  posts: Post[];

  setPosts: (newPosts: Post[]) => void;
  clearPosts: () => void;
}

interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
  postTags: PostTag[];
}

interface Comment {
  id: string;
  content: string;
  postId: string;
}

export interface PostTag {
  id: string;
  postId: string;
  tagId: string;
  tag: Tag;
}

export interface Tag {
  id: string;
  name: string;
}
