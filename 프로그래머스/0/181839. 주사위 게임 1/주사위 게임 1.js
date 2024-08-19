function solution(a, b) {
    switch((a%2) + (b%2)){
      case 0: return Math.abs(a-b) // 둘 다 짝수
      case 1: return 2*(a+b)       // 하나만 홀수
      case 2: return (a**2) + (b**2); // 둘다 홀수
    }
}