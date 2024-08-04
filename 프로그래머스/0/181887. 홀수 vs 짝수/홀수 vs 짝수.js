function solution(num_list) {
    let [a,b] = [0,0]
    num_list.map((v,i) => i % 2 ? a+=v : b+=v)
    return Math.max(a,b)
}