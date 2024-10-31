/*
 * @Author: lucas Liu lantasy.io@gmail.com
 * @Date: 2024-10-27 14:53:55
 * @LastEditTime: 2024-10-30 17:11:05
 * @Description:
 */
import { PostsGrid } from '../../components/posts-grid';
import { useGithub } from '../../hooks/useGithub';

const data = [
  {
    title: 'Post 1',
    description: 'This is the first post',
    key: '1',
  },
  {
    title: 'Post 2',
    description: 'This is the second post',
    key: '2',
  },
  {
    title: 'Post 3',
    description: 'This is the third post',
    key: '3',
  },
  {
    title: 'Post 3',
    description: 'This is the third post',
    key: '3',
  },
];

export const Page = () => {
  const blogIndex = useGithub();

  return (
    <>
      <section id="header">
        {/* <h1>HEADER TITLE</h1> */}
        <h1>LUCAS'S BLOG</h1>
      </section>
      <div id="body">
        <h2>Blog</h2>
        {blogIndex === undefined && <p>Loading...</p>}
        {blogIndex && <PostsGrid data={blogIndex} />}
      </div>
    </>
  );
};
