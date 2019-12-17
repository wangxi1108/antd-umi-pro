import request from '@/utils/myRequest'
import config from '../../config/myweb.config'

const {tokenUrl} = config
const {authUrl} = config
// const {mockApi} = config
const api = config.omsApi

// 自己添加login
export function getLogin(params) {
  return request({
    url: `${tokenUrl}/JointLogin/Login`,
    method: 'post',
    data: params,
  })
}

export function getUserInfo (params) {
  return request({
    url: `${tokenUrl}/v1/account/getUserInfo`,
    method: 'get',
    data: params,
  })
}

export function getToken (params) {
  return request({
    url: `${tokenUrl}/oauth/token`,
    method: 'post',
    data: params,
    config: {
      ignoreMsg: true,
      ContentType: 'application/x-www-form-urlencoded',
      getToken: true
    },
  })
}

export function getMenu (params) {
  return request({
    url: `${authUrl}/v1/menu/appMenus`,
    method: 'get',
    data: params,
  })
}

export function userApp (userSysNo) {
  return request({
    url: `${authUrl}/v1/app/userApp`,
    method: 'get',
    data: {
      userSysNo
    }
  })
}

export function userPermission (params) {
  return request({
    url: `${api}/v1/controlpanel/permission/userAllPermissions`,
    method: 'get',
    data: params
  })
}

// 修改密码
export function updatePassword (params) {
  return request({
    url: `${api}/v1/controlpanel/sso/updatePassword`,
    method: 'post',
    data: params,
    config: {
      ignoreMsg: true
    }
  })
}
