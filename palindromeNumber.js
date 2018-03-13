var isPalindrome = function(x) {
    if (x <= 0 || x %10 == 0) return false; 
  
    let reversedNumber = 0;
  
    while (x > reversedNumber) {
        reversedNumber = (x % 10) + (reversedNumber * 10);
        x = Math.floor(x / 10);
    }
  
    return x === reversedNumber || x === Math.floor(reversedNumber/10) ;
}
