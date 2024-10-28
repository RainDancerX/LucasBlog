/*
 * @Author: lucas Liu lantasy.io@gmail.com
 * @Date: 2024-10-27 15:06:19
 * @LastEditTime: 2024-10-28 01:46:37
 * @Description:
 */

import { Link } from '@tanstack/react-router';

export const Card = ({ title, description, slug }) => {
  return (
    <div id="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/post/$slug" params={{ slug }}>
        READ POST
      </Link>
    </div>
  );
};
