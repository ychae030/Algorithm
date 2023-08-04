const multiply = (arr) => arr.reduce((cur,acc) => cur * acc, 1)

function solution(numbers) {
      let arr = numbers.sort((a,b) => a-b)
      return  Math.max(multiply(arr.slice(0, 2)), multiply(arr.slice(-2)))    
}
