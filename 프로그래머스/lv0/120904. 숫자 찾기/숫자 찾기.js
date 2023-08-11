function solution(num, k) {
    const index = [...('' + num)].findIndex(v => v === String(k));
    return index === -1 ? index : index + 1
}