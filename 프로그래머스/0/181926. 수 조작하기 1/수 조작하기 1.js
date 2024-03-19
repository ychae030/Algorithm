function solution(n, control) {
    let num = 0;
    for(let i of control){
      switch(i){
        case "w" : num += 1; break;
        case "s" : num -= 1; break;
        case "d" : num += 10; break;
        case "a" : num -= 10; break;
      }
    }
    return n + num;
}