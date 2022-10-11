let a = 100; //전역변수

function sample() {
  let a = "내부의 A";
  let b = 200; //함수안에서 만든 함수를 지역변수
  console.log(a);
}

sample();
// console.log(b);
