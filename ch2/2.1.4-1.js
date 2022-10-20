function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

// const add5 = (x, y) => return x+y;

// const add6 = (x, y) =>
//   console.log("중괄호 생략불가");
//   return x + y;

const add7 = (x, y) => ({x, y}); //객체를 리턴하면 소괄호는 필수, 안하면 바디가 함수인지 객체인지 구분 X


function not1(x) {
  return !x;
}

const not2 = x => !x;
