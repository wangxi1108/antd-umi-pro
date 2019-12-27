import Cookie from 'js-cookie';
import { message } from 'antd';
// import storage from '@/utils/storage'
import { getToken} from '@/services/mylogin';

export default {
  namespace: 'myLoginMo',

  state: {
    token:''
  },

  effects: {
    // *getLoginData ({ payload }, { call, put }) {
    //   console.log('getLoginData-参数', payload)
    //   const res = yield call(getLogin, payload)
    //   console.log('getLoginData', res)
    // },
    *getTokenData ({ payload }, { call }) {
      // console.log('getTokenData-参数', payload)
      const res = yield call(getToken, payload)
      console.log('getTokenData', res) 
      if (res.success) {
        Cookie.set('token', res.result.token)
      }
      //   // router.replace(payload.pathname)
    }
    // *getUserinfoData({ payload, callback }, { call, put }) {
    //   const res = yield call(getUserInfo)
    //   if (res.success) {
    //     storage.setItem({ userInfo: res.data })
    //   }
    //   if (callback) callback();

    // },
    // *getMenuData({ payload, callback }, { call, put }) {
    //   const response = yield call(getMenu, payload);
    //   // yield put({
    //   //   type: 'save',
    //   //   payload: response,
    //   // });
    //   if (callback) callback();
    // },
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
