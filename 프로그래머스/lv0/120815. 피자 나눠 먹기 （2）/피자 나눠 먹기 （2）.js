const getLcm = (num1, num2) => {
 let lcm = 1;
 while(1){
   if(!(lcm % num1) && !(lcm % num2)) break;
   lcm++
 }   
  return lcm
}


const solution = (n) => getLcm(n, 6) / 6;