function solution(num_list, n) {
    return [...num_list.slice(n, num_list.length), ...num_list.slice(0,n)]
    // (n ~ 마지막) + (0 ~ n바로 앞)
}