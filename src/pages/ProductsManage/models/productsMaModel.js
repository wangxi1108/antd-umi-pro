import { query } from '@/services/user';

const ProductsMaModel = {
  namespace: 'productsMaModel',
  state: {
    pepleList: [],
    testName: '哇哈哈哈',
    queryParams: {
      pageIndex: 1,
      pageSize:2,
      name: '',
      age: '',
      status: '',
      startTime: '',
      endTime: ''
    }
  },
  effects: {
    // *getUsers (_, { call, put,select }) {
    //   const res = yield call(query );
    //   yield put({
    //     type: 'usersList',
    //     payload:res
    //   })
    // }
    *getUsers ({payload}, { call, put,select }) {
      const { queryParams } = yield select(state => state.productsMaModel)
      const res = yield call(query, {
        ...payload,
        ...queryParams
      } );                                           
      yield put({
        type: 'upState',
        payload: {
          pepleList:res,
          queryParams: {
            ...queryParams
          }
        }
      })
      console.log('queryParams',queryParams)
    }
  },
  reducers: {
    nameFun (state) {
      return {
        ...state,
        // testName:'瓦萨瓦萨'//  重定义的
      }
    },
    upState (state,{payload}) {
      // return {
      //   ...state,
      //   queryParams: {
      //     ...state.queryParams,
      //     ...payload
      //   }
      // }
      return {
        ...state,
        ...payload
      }
    },
    searchParamsChange (state, { payload }) {
      return {
        ...state,
        queryParams: {
          ...state.queryParams,
          ...payload
        }
      }
    },
    resetSearchParams (state, { payload }) {
      return {
        ...state,
        queryParams: {
          ...state.queryParams,
          name: '',
          age: '',
          status: '',
          startTime: '',
          endTime: ''
        }
      }
    }
  }
}

export default ProductsMaModel;