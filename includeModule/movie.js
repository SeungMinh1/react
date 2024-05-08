//1위 영화제목만 출력
// const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240507';

// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data.boxOfficeResult.dailyBoxOfficeList[0].movieNm))

async function movie(){
    const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240507';
    let result= await fetch(url);
    result = await result.json();
    return (result.boxOfficeResult.dailyBoxOfficeList[1].movieNm);

}

module.export = movie;

//movie();