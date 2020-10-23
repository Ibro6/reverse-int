module.exports = function reverse (n) {
  const string = n.toString();
  const array = string.split('');
  const reverse = array.reverse();
  const joinReverse = reverse.join("");
  const parse =  parseInt(joinReverse, 10);
  return parse;
}
