const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
console.log(array);
console.log(node);
console.log(obj);
console.log(bool);
// [ 'nodejs', {}, 10, true ]
// nodejs
// {}
// true
