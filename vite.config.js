/*
 * @Author: lucas Liu lantasy.io@gmail.com
 * @Date: 2024-10-22 13:24:42
 * @LastEditTime: 2024-10-28 16:41:15
 * @Description:
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lucasblog/',
});
