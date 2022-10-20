/**
 * 구조분해: 객체내부의 this가있는 함수를 넣을때 error,
 * author : Seongil-Yoon
 */
const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--; //TypeError: Cannot read properties of undefined (reading 'count')
    return this.status.count;
    // return 10; 
  },
};
const { getCandy, status: { count } } = candyMachine;
// console.log(candyMachine.getCandy());
console.log(count);