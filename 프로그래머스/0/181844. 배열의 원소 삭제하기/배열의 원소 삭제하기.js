function solution(arr, delete_list) {
    return arr.filter(v => !delete_list.some(k => v === k))
}