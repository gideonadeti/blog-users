import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import formatDate from "../utils/format-date";
import { usePostsStore } from "../stores/posts";

export default function PostPage() {
  const { posts } = usePostsStore();
  const { postId } = useParams();

  if (!postId) {
    return <div>Post not found</div>;
  }

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-3">
      <div className="mb-3 d-flex">
        <small className="fw-semibold">{formatDate(post.updatedAt)}</small>
        <span className="mx-1">|</span>
        <span className="small ms-2">
          {post.postTags.map((postTag) => (
            <span key={postTag.id} className="badge text-bg-secondary me-1">
              {postTag.tag.name}
            </span>
          ))}
        </span>
        <small className="ms-auto">
          <Link to="/">Back </Link>
        </small>
      </div>

      <div>
        <div dangerouslySetInnerHTML={{ __html: post.title }} />
        <div
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </div>
    </div>
  );
}
