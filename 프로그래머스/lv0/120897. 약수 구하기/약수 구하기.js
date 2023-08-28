function solution(n) {
    var answer = [];
    let i = 1;
    while(i <= n){
      n % i === 0 && answer.push(i);
      i++;
    }
    return answer;
}