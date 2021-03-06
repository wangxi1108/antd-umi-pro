import Cookie from 'js-cookie';
import { message } from 'antd';
// import storage from '@/utils/storage'
import { getToken,getMenu} from '@/services/mylogin';

export default {
  namespace: 'myLoginMo',

  state: {
    token: '',
    userInfo:{},
    menuData:[]
  },

  effects: {
    // *getLoginData ({ payload }, { call, put }) {
    //   console.log('getLoginData-参数', payload)
    //   const res = yield call(getLogin, payload)
    //   console.log('getLoginData', res)
    // },
    *getTokenData ({ payload }, { call,put }) {
      // console.log('getTokenData-参数', payload)
      const res = yield call(getToken, payload)
      console.log('getTokenData', res) 
      if (res.success) {
        Cookie.set('token', res.result.token)
        yield put({ type: 'upUserInfo', payload: res.result.userInfo })
        return res.result
      }
      // if (callback) callback()
      
      //   // router.replace(payload.pathname)
    },
    // *getUserinfoData({ payload, callback }, { call, put }) {
    //   const res = yield call(getUserInfo)
    //   if (res.success) {
    //     storage.setItem({ userInfo: res.data })
    //   }
    //   if (callback) callback();

    // },
    *getMenuData ({ payload }, { call, put }) {
      console.log(111,payload)
      const response = yield call(getMenu, payload);
      console.log('菜单-',response)
      // yield put({
      //   type: 'save',
      //   payload: response,
      // });
      // if (callback) callback();
    }
  },

  reducers: {
    upUserInfo (state, action) {
      return {
        ...state,
        userInfo:action.payload
      }
    },
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
