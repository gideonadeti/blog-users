import { useEffect, useState } from "react";

import axiosInstance from "../utils/axios-instance";
import { useTagsStore } from "../stores/tags";
import { usePostsStore } from "../stores/posts";
import Post from "./Post";

export default function Content() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { setTags } = useTagsStore();
  const { setPosts, posts } = usePostsStore();

  useEffect(() => {
    async function fetchData() {
      try {
        startFetch();

        const [postsResponse, tagsResponse] = await Promise.all([
          axiosInstance.get("/posts"),
          axiosInstance.get("/tags"),
        ]);

        setPosts(postsResponse.data.posts);
        setTags(tagsResponse.data.tags);
      } catch (error) {
        console.error(error);

        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setPosts, setTags]);

  function startFetch() {
    setError("");
  }

  {
    return (
      <div
        className="content p-3 overflow-y-auto"
        style={{ maxHeight: "90vh" }}
      >
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <ul className="list-group list-group-flush">
          {posts.length > 0 &&
            posts.map((post) => <Post key={post.id} post={post} />)}
        </ul>
      </div>
    );
  }
}
