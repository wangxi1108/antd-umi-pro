import { getList } from '@/services/safetyTest';

const SafetyTestModel = {
  namespace: 'safetyTestModel',
  state: {
    list:[]
  },
  
  // *getUsers ({payload}, { call, put,select }) {
  //   const { queryParams } = yield select(state => state.productsMaModel)
  //   const res = yield call(query, {
  //     ...payload,
  //     ...queryParams
  //   } );                                           
  //   yield put({
  //     type: 'upState',
  //     payload: {
  //       pepleList:res,
  //       queryParams: {
  //         ...queryParams
  //       }
  //     }
  //   })
  //   console.log('queryParams',queryParams)
  // }
  effects: {
    *getList ({ payload }, { call, put, select }) {
      const { queryParams } = yield select(state => state.safetyTestModel)
      const res = yield call(getList, {
        ...payload,
        ...queryParams
      })
      console.log('安全res',res)
    }
  }
}

export default SafetyTestModel;

