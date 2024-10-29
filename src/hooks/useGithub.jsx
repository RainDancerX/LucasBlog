/*
 * @Author: lucas Liu lantasy.io@gmail.com
 * @Date: 2024-10-27 22:45:36
 * @LastEditTime: 2024-10-28 17:04:58
 * @Description:
 */

import { useState, useEffect } from 'react';

export const useGithub = () => {
  const [blogIndex, setBlogIndex] = useState(undefined);

  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

  const getData = async () => {
    let res = null;
    try {
      res = await fetch(
        'https://api.github.com/repos/RainDancerX/info-6150-blog/contents/index.json',
        {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        }
      );
      if (res.ok === false) {
        throw Error('Failed to fetch data from Github');
      }
    } catch (error) {
      console.log(error);
      throw Error('Failed to fetch data from Github');
    }
    const data = await res.json();
    const content = atob(data.content);
    setBlogIndex(JSON.parse(content));
  };

  useEffect(() => {
    getData();
  }, []);

  return blogIndex;

  //   const res = fetch(
  //     'https://api.github.com/repos/RainDancerX/info-6150-blog/contents/index.json',
  //     {
  //       headers: {
  //         Authorization: `Bearer ${githubToken}`,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => atob(data.content))
  //     .then((data) => {
  //       console.log(JSON.parse(data));
  //     })
  //     .catch((error) => console.log(error));
};
