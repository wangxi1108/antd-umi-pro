import request from '@/utils/myRequest'
// export function getLogin(params) {
//   return request({
//     url: `${tokenUrl}/JointLogin/Login`,
//     method: 'post',
//     data: params,
//   })
// }
// export function getToken (params) {
//   return request({
//     url: `${tokenUrl}/oauth/token`,
//     method: 'post',
//     data: params,
//     config: {
//       ignoreMsg: true,
//       ContentType: 'application/x-www-form-urlencoded',
//       getToken: true
//     },
//   })
// }

// export function getMenu (params) {
//   return request({
//     url: `${authUrl}/v1/menu/appMenus`,
//     method: 'get',
//     data: params,
//   })
// }

// export function userApp (userSysNo) {
//   return request({
//     url: `${authUrl}/v1/app/userApp`,
//     method: 'get',
//     data: {
//       userSysNo
//     }
//   })
// }


export function getToken(params) {
  return request({
    url: '/sys/login',
    method: 'post',
    data: params
  })
}

export function getMenu(parameter) {
  return request({
    url: '/sys/permission/getUserPermissionByToken',
    method: 'get',
    params:parameter
  })
}
