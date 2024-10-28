/*
 * @Author: lucas Liu lantasy.io@gmail.com
 * @Date: 2024-10-27 15:06:23
 * @LastEditTime: 2024-10-28 01:33:57
 * @Description:
 */

import { Card } from '../card/index';

export const PostsGrid = ({ data }) => {
  return (
    <div id="card-grid">
      {data.map(({ title, description, slug }, index) => {
        return (
          <Card
            key={slug}
            title={title}
            description={description}
            slug={slug}
          />
        );
      })}
    </div>
  );
};

// another easy way to pass props to Card component by using spread operator and destructuring
{
  /* <div id="card-grid">
  {data.map((cardData, index) => {
    return <Card key={slug} {...cardData} />;
  })}
</div>; */
}
