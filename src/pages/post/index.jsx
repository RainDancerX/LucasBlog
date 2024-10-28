/*
 * @Author: lucas Liu lantasy.io@gmail.com
 * @Date: 2024-10-27 15:01:03
 * @LastEditTime: 2024-10-28 16:56:33
 * @Description:
 */
import { useState, useEffect } from 'react';
import { useParams } from '@tanstack/react-router';
import { micromark } from 'micromark';

// console.log(micromark('## Hello, *world*!'));

export const Page = () => {
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  const { slug } = useParams({ strict: true });
  const [blogPost, setBlogPost] = useState(undefined);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/RainDancerX/info-6150-blog/contents/${slug}.md`,
        {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        }
      );
      const data = await response.json();
      const content = atob(data.content);
      setBlogPost(micromark(content));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <h1>Blog Post: {slug}</h1> */}
      <div id="content">
        {blogPost === undefined && <p>Loading...</p>}
        {blogPost && <div dangerouslySetInnerHTML={{ __html: blogPost }} />}
      </div>
    </>
  );
};
