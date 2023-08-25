function solution(num_list) {
    let even = 0, odd = 0;
    for(let num of num_list) {
        num % 2 ?  odd++ : even++
    }
    return [even, odd]
}