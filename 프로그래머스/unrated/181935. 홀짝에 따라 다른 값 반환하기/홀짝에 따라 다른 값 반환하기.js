function getArr(remain, n){
    let arr = [];
    for(let i = 1; i <= n; i++){
       i % 2 === remain && arr.push(i)
    }
    return arr
}

function solution(n) {
    if(n % 2){
      return getArr(1, n).reduce((acc, cur) => acc + cur, 0)
    }else{
      return getArr(0, n).reduce((acc, cur) => acc + (cur ** 2), 0)
    }   
}