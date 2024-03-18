function solution(num_list) {
    // const mul = num_list.reduce((acc, cur) => acc * cur, 1)
    // const sum = num_list.reduce((acc, cur) => acc + cur, 0)
    
    const [mul, sum] = num_list.reduce(([mulAcc, sumAcc], cur) => {
        return [mulAcc * cur, sumAcc + cur]
    }, [1, 0])
    
    return mul < sum ** 2 ? 1 : 0
}