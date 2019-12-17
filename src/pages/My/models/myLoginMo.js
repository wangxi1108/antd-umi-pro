import Cookie from 'js-cookie';
import { message } from 'antd';
import storage from '@/utils/storage'

import { getLogin, getToken, getUserInfo, getMenu } from '@/services/mylogin';

export default {
  namespace: 'myLoginMo',

  state: {
    siderFold: document.body.clientWidth < 1200,
    fixedHeader: false,
    isLogin: false,
    menuOpenKeys: [],
    menuList: [],
    originMenuData: [],
    authMap: {},
    authKeys: [], // 用户权限,默认新增了一个''权限,用户没有设置权限默认都可以访问
    menuRenderDone: false,
    activeTab: null,
    pwdShow: false,
    pageTabs: [],
  },

  effects: {
    *getLoginData ({ payload }, { call, put }) {
      console.log('getLoginData-参数', payload)
      const res = yield call(getLogin, payload)
      console.log('getLoginData', res)
    },
    *getTokenData ({ payload }, { call }) {
      console.log('getTokenData-参数', payload)
      
      const res = yield call(getToken, payload)
      return { success: false }
      // if (res.access_token) {
      //   Cookie.set('token', res.access_token)
      //   Cookie.set('token_type', res.token_type)
      //   // router.replace(payload.pathname)
      //   return { success: true }
      // } 
        // message.error('获取令牌失败，请重新登录')
        // return { success: false }
      
    },
    *getUserinfoData({ payload, callback }, { call, put }) {
      const res = yield call(getUserInfo)
      if (res.success) {
        storage.setItem({ userInfo: res.data })
      }
      if (callback) callback();

    },
    *getMenuData({ payload, callback }, { call, put }) {
      const response = yield call(getMenu, payload);
      // yield put({
      //   type: 'save',
      //   payload: response,
      // });
      if (callback) callback();
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
