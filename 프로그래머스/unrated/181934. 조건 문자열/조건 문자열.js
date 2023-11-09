// function evaluateOperation() {
    
// }

function solution(ineq, eq, n, m) {
    const operator = eq === '!' ? ineq : ineq + eq;
    let answer;
     switch (operator) {
        case ">":
            answer = n > m; break;
        case ">=":
            answer = n >= m; break;
        case "<":
            answer = n < m; break;
        case "<=":
            answer = n <= m; break;
        default:
            answer = '잘못된 연산자';
    }
    return answer ? 1 : 0
}