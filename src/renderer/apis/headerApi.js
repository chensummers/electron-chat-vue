import request from "../http/request";
// 获取医疗机构
export function getHospitals(postData) {
    return request.post('/fosunhealth-doctor/open/auth/getHospitals', postData);
}