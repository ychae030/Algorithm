
const arrSum = (arr1, arr2) => {
    const acc = (arr) => arr.reduce((a,b) => a+b)
    return acc(arr1) > acc(arr2) ? 1 : acc(arr1) < acc(arr2) ? -1 : 0
}
function solution(arr1, arr2) {
    return arr1.length === arr2.length ? arrSum(arr1, arr2)  : arr1.length > arr2.length ? 1 : -1
}