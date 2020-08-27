import request from '@/utils/httpRequest'

const CONFIG_API = {
  login: request.adornUrl('/sys/login'),
  password: request.adornUrl('/sys/user/password')
}
/**
 * @name 注册
 * @param {*} data
 *
 */
export function password (data) {
  return request({
    url: CONFIG_API.password,
    method: 'post',
    data: request.adornData(data)
  })
}
export function login (data) {
  return request({
    url: CONFIG_API.login,
    method: 'post',
    data: request.adornData(data)
  })
}
