
import request from '@/utils/myRequest'

export function getList(parameter) {
  return request({
    url: '/bp/examinationPaper/list',
    method: 'get',
    params:parameter
  })
}
