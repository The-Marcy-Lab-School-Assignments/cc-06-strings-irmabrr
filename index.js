//write your code here
const reverseString = (string) => {
  // we are creating a new string which is empty bc as we work through our function it will save soemthing
  let empty = "";
  // for (let i = 0; i < string.lenth; i++) this would be h to o
  for (let i = string.length - 1; i >= 0; i--) {
    // string.lentgh-1 bc it will start us off at 5 instead of 4
    // i >= 0 becuase we are starting at the last index while decrementing (?)
    // when i turns into -1 it will stop
    //next piece is creating a new string
    empty += str[i];
    //this is building out a new string
    //it will go from being empty to having 'o'
  }
  return empty;
};

console.log(reverseString("hello"));
