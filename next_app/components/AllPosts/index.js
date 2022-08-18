import React from "react";
import PostsPreview from "../PostsPreview";

export default function AllPosts({ posts }) {
  function renderPostPreview() {
    return posts.map((post) => {
      return <PostsPreview post={post} key={post.id} />;
    });
  }
  return (
    <>
      <h2>All Posts</h2>
      {renderPostPreview()}
    </>
  );
}
