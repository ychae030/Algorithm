function solution(s1, s2) {
    let cnt = 0;
    for(let el of s1){
        s2.includes(el) && cnt++;
    }
    return cnt
}