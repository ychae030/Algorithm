function solution(my_strings, parts) {
    return my_strings.map((v,i) => {
        const [begin, end] = [parts[i][0], parts[i][1]+1]
        return v.slice(begin,end)
    }).join('')
}