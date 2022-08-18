import React, { useEffect, useState } from "react";
import PostsPreview from "../PostsPreview";

export default function HomeLatestPosts({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 3));
  }, [posts]);

  function renderPostPreview (){
    return latestPosts.map((post)=>{
      return <PostsPreview post={post} key={post.id}/>
    })
  }
  return (
    <>
      <h2>Latest Posts</h2>
      {renderPostPreview()}
    </>
  );
}
