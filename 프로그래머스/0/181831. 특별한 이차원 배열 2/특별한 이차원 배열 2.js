function solution(arr) {
    const {length} = arr
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            if (arr[i][j] !== arr[j][i]) return 0
        }        
    }
    return 1
}