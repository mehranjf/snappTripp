import React from "react";
import useApi from "./utility/useApi";
interface dataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const PostList: React.FC = () => {
  const { data, error, loading, refetch } = useApi<dataType[]>({
    url: "https://jsonplaceholder.typicode.com/posts",
    options: {
      method: "GET",
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {data && data.length
        ? data.slice(0, 10).map((item) => {
            return <h4 key={item.id}>{item.title}</h4>;
          })
        : null}
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default PostList;
