function solution(myString) {
    const alpha='abcdefghijk';
    return [...myString].map(v => [...alpha].some(x => x === v) ? 'l' : v).join('')
}