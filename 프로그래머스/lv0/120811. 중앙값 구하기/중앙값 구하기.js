function solution(array) {
    let answer = array.sort((a,b) => a - b) ;
    let index = ~~(array.length / 2);
    return answer[index];
}