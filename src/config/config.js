/**
 *
 * 配置项说明
 * baseURL: 配置api的地址
 * permission: //这里配置的是该项目可使用的菜单项, 内容对应nodes中的项目
**/
const config = {
  baseURL: 'http://localhost:3000/',
  permission: [
    'insider',
    'insider.group',
    'insider.manager',
    'article',
    'category'
  ]
}
export default config
