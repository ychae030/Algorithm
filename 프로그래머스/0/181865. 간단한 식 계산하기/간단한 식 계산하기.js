function solution(binomial) {
    return new Function(`return ${binomial.split(' ').reduce((a,b) => a + b)}`)()
}