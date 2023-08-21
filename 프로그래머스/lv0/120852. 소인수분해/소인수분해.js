function solution(n) {
    let i = 2;
    let answer = [];
    
    while(n >= 2){
        if(n % i === 0){
            answer.push(i)
            n = n / i;
        }
        else i++;
    }
    return [...new Set(answer)]
}