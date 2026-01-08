import { version } from '../../../package.json';
export default {
  nav: [
  { text: '首页', link: '/' },
  { text: '查看文档', link: '/docs/docs1' }, 
  { text: '项目单页', link: '/pages' },
  { text: `最新版本 v ${version}`,
  items: [
  {text: '关于',link: '/docs/about', },
  {text: '贡献指南',link: '/docs/contribute', },
  {text: '版本更新日志',link: '/docs/CHANGELOG', },],},
  ]
};