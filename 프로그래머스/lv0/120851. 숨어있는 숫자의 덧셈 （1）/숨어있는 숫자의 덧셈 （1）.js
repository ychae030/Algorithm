function solution(my_string) {
    let arr = my_string.replace(/[^0-9]/g,"").split('');
    return arr.reduce((cur, acc) => cur + Number(acc), 0)
}