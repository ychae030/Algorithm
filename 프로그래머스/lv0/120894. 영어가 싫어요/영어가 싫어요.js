function solution(numbers) {
    let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    num.map((v, i) => numbers = numbers.replaceAll(v, i))
    return Number(numbers)
}