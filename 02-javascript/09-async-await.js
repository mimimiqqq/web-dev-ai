//콜백-순서를 지키려면 중첩
document.querySelector("#callback").addEventListener("click", () => {
  const result = document.querySelector("#callbackResult");
  result.textContent = "콜백 시작!";
  setTimeout(() => {
    result.textContent = "1초후 실행";
    setTimeout(() => {
      result.textContent = "2초후 실행";
    }, 1000);
  }, 1000);
});

//promise - "나중에 결과를 줄게" 라는 약속 객체
document.querySelector("#promise").addEventListener("click", () => {
  const result = document.querySelector("#promiseResult");
  result.textContent = "콜백 시작!";

  // resolve : 성공, reject : 실패
  // resolve(값) 성공하면 then으로 받음/ reject(에러 나서) -catch로 받음.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1초후 실행");
    }, 1000).then((data) => {
      result.textContent = data;
      return new Promise((resolve) => {
        setTimeout(() => resolve("2초후 실행"), 1000);
      });
    });
  });

  setTimeout(() => {
    result.textContent = "1초후 실행";
    setTimeout(() => {
      result.textContent = "2초후 실행";
    }, 1000);
  }, 1000);
});
//async / await - then 없이 위에서 아래로
//async 함수 안에서만 await 사용 가능
document.querySelector("#async").addEventListener("click", () => {
  const delay = (message) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(message), 1000);
    });
  };
  const result = document.querySelector("#asyAwaResult");
  result.textContent = "async 시작!";
  const response = delay("1초후 실행!");
  console.log(response);
  result.textContent = response;
});

//fetch - 서버에서 데이터 하나 가져오기
//자바스크립트에서 서버로 요청을 보내고 응답을 받을수 있도록 해주는 함수
document.querySelector("#fetch").addEventListener("click", () => {
  const result = document.querySelector("#setchResult");
  fetch("//api.tvmaze.com/shows/1");
  const data = response.json;
  console.log(data.image);
});


//Chart.js
//외부 라이브러리 사용법->API 문서 Getting Started / Installation
//->CDN ->예제 그대로 복사->내 데이터로
<div>
  <canvas id="myChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  const ctx = document.getElementById('myChart');
  
  const spending = [{category : "식비", amount : 320000  },
  {category : "교통", amount :85000},
  ];
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
 