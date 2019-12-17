// const ip = process.env.NODE_ENV === 'development' ? 'http://10.0.60.26:31380' : 'https://ztcloudtest.jwell56.com' // 谢威
// const ip = process.env.NODE_ENV === 'development' ? 'http://ztcloudtest.jwell56.com' : 'http://ztcloudtest.jwell56.com'
const ip = process.env.NODE_ENV === 'development' ? 'http://10.130.0.71:31380' : 'https://ztcloudtest.jwell56.com' // 金茂
const envUrl = process.env.NODE_ENV === 'development' ? 'http://221.237.162.142:32021' : 'https://mallcloudtest.jwell56.com'
const ssoUrl = process.env.NODE_ENV === 'development' ? 'http://221.237.162.142:32022/' : 'https://ssocloudtest.jwell56.com/'

export default {
  // 单点登录跳转url
  oauthUrl: `${ip}/sso/login`,
  grantType: 'authorization_code',
  clientId: 'jwell-oms',
  clientSecret: '123456',
  responseType: 'code',
  oauthScope: 'all',
  domainBase: 'operation',
  ssoUrl,

  // api url
  mockApi: 'http://localhost:3000',
  tokenUrl: `${ip}/sso`,
  authUrl: `${ip}/auth`,
  commonApi: `${ip}/common/v1`,
  authApi: `${ip}/auth/v1`,
  ssoApi: `${ip}/sso/v1`,
  omsApi: `${ip}/oms`,
  cmsApi: `${ip}/cms`,
  customerApi: `${ip}/customer`,

  // webconfig
  sysName: '运营后台',
  whiteList: ['/', '/404', '/Callback'],
  envUrl,
  sliderHidePath: ['/403', '/workbench'],
  pageTabHidePath: ['/403'],
  helpCentersystemId: 'jwell-buyer-system'
}
