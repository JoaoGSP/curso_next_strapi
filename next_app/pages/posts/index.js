import axios from 'axios';
import React from 'react'
import AllPosts from '../../components/AllPosts';

export default function Posts({ posts }) {
  return (
    <>
    <AllPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");
  console.log(postsRes.data.data[0].attributes.title)
  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
