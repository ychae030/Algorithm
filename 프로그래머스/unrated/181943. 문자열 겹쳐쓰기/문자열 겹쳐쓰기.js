function solution(my_string, overwrite_string, s) {
    const new_string = [...my_string]
    new_string.splice(s,overwrite_string.length,overwrite_string)
    return new_string.join('')
}