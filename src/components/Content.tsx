import { useEffect, useState } from "react";

import axiosInstance from "../utils/axios-instance";
import { useTagsStore } from "../stores/tags";

export default function Content() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { setTags } = useTagsStore();

  useEffect(() => {
    async function fetchData() {
      try {
        startFetch();

        const [postsResponse, tagsResponse] = await Promise.all([
          axiosInstance.get("/posts"),
          axiosInstance.get("/tags"),
        ]);

        console.table(postsResponse.data.posts);
        setTags(tagsResponse.data.tags);
      } catch (error) {
        console.error(error);

        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setTags]);

  function startFetch() {
    setError("");
  }

  {
    return (
      <div
        className="content container-fluid py-3 overflow-y-auto"
        style={{ maxHeight: "90vh" }}
      >
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
    );
  }
}
