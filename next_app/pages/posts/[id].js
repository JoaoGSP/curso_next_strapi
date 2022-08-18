import axios from "axios";
import React from "react";
import MarkdownIt from 'markdown-it';

export default function PostPage({ post }) {
    const md = new MarkdownIt()
    const htmlContent = md.render(post.attributes.content)
  return (
    <article>
      <header>
        <h1>{post.attributes.title}</h1>
        <h4>{post.attributes.description}</h4>
      </header>
      <section dangerouslySetInnerHTML={{__html: htmlContent}} />
    </article>
  );
}

export async function getStaticProps({ params }) {
  const postRes = await axios.get(
    `http://localhost:1337/api/posts/${params.id}`
  );

  return {
    props: {
      post: postRes.data.data,
    },
  };
}

export async function getStaticPaths() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");
  const paths = postsRes.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
