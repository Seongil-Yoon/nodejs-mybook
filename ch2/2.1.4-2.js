var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    var that = this; // relationship1을 가리키는 this를 that에 저장
    this.friends.forEach(function (friend) {
      // this.x = 100;
      console.log(that.name, friend);
      console.log(this.name, friend); //undefined, 상위 스포크의 this를 받으려면 화살표함수
    });
  },
};
relationship1.logFriends();

console.log("======================");
const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    this.friends.forEach(friend => {
      console.log(this.name, friend); //화살표함수는 상위 스코프의this를 물려받음
      // 함수가 자기만의 this를 가져야 된다면 일반 function()으로 선언해야된다.
    });
  },
};
relationship2.logFriends();

// 권장) this를 필요로하면 function으로, 그 외에는 화살표로 