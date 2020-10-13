import axios from 'axios';

const config1 = {
  API_ENDPOINT: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
  KEY: '664383b11fdaa853a4884a63b0ae7cc4'
}
const config2 = {
  API_ENDPOINT: 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2',
  KEY: '229UV0UP2N545R3W7SN2'
}
const config3 = {
  API_ENDPOINT: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json',
  KEY: '664383b11fdaa853a4884a63b0ae7cc4'
}

let today = new Date();
let week = today.setDate(today.getDate() - 2);
week = new Date(week);

const setDate = (targetDate) => {
  let targetDt;
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate() - 1;
  if (month < 10) month = '0' + month;
  if (date < 10) date = '0' + date;
  targetDt = year + '' + month + '' + date;
  return targetDt;
}

const request = async (url) => {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    alert(error.msg);
    return { data: null };
  }
}

const api = {
  //실시간 랭킹
  fetchData: () => {
    return request(`${config1.API_ENDPOINT}?key=${config1.KEY}&targetDt=${setDate(today)}`);
  },
  //주간 랭킹
  fetchDataWeek: () => {
    return request(`${config3.API_ENDPOINT}?key=${config1.KEY}&targetDt=${setDate(week)}`);
  },
  //포스터
  fetchPoster: (name) => {
    return request(`${config2.API_ENDPOINT}&detail=Y&title=${name}&ServiceKey=${config2.KEY}`)
  }
}

export default api;