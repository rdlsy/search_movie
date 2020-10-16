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
  API_ENDPOINT: 'https://www.filecity.co.kr/module/top100_test.php'
}

let today = new Date();

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

let formData = new FormData();
formData.append('tab', 'top100');
formData.append('tab2', 'BD_ALL');
formData.append('s_value', '');
formData.append('no_adult', 0);
formData.append('view', 'post');
formData.append('limit', 20);
formData.append('no_overlap', 0);
formData.append('down_chk', 0);
formData.append('sale', 0);
formData.append('sale2', 0);
formData.append('year', 0);
formData.append('poster_chk', 0);

const request = async (url) => {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    alert(error.msg);
    return { data: null };
  }
}

const request2 = async (url, form) => {
  try {
    const result = await axios
      .post(url, form)
      .then(response => {
        JSON.stringify(response, null, 2);
        return response.data.list;
      })
    return result;
  } catch (error) {
    alert(error.msg);
    return { data: null };
  }
}

const api = {
  //실시간 랭킹 (일별 박스오피스)
  fetchData: () => {
    return request(`${config1.API_ENDPOINT}?key=${config1.KEY}&targetDt=${setDate(today)}`);
  },
  //포스터
  fetchPoster: (name) => {
    return request(`${config2.API_ENDPOINT}&detail=Y&title=${name}&ServiceKey=${config2.KEY}`)
  },
  //실시간 랭킹 (파일시티)
  fetchRankCity: () => {
    return request2(`${config3.API_ENDPOINT}`, formData);
  }
}

export default api;