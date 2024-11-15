// 姓名
export function nameReg(name: string) {
  // 允许字母、数字、中文、点和中间点
  const reg = /[^a-zA-Z0-9\u4E00-\u9FA5.·]/g;
  if (reg.test(name)) {
    return true;
  }
  return false;
}

// 身份证
export function IDReg(id: string) {
  const reg =
    /(^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/;
  if (reg.test(id)) {
    return true;
  }
  return false;
}

// 手机号
export function phoneReg(phone: string) {
  const reg = /^1[3-9]\d{9}$/;
  if (reg.test(phone)) {
    return true;
  }
  return false;
}

// 邮箱
export function emailReg(email: string) {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (reg.test(email)) {
    return true;
  }
  return false;
}

// URL
export function urlReg(url: string) {
  const reg =
    /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/?([a-zA-Z0-9._-]*)$/i;
  if (reg.test(url)) {
    return true;
  }
  return false;
}
