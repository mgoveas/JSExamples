var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    if (strs.length === 0) {
        return "";
    }
    for (let i=1; i < strs.length; i++){
        console.log(prefix);
        while(strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length === 0){
                return "";
            }
        }       
    }
    return prefix;
};


const strs = ['abcd', 'abc', 'abcde', 'ab', 'abab'];

console.log("result is"+longestCommonPrefix(strs));



//Recursive solution
function lcp(strs){
  if (strs === null || strs.length === 0) {
    return "";
  }
  return lowestComPrefix(strs, 0, strs.length - 1);
}

function lowestComPrefix(strs, l, r){
  if (l === r) {
    return strs[l]; 
  }
  const mid = Math.floor((l+r)/2);
  const leftCommonPrefix = lowestComPrefix(strs, l, mid);

  const rightCommonPrefix = lowestComPrefix(strs, mid+1, r);
  return findCommonPrefix(leftCommonPrefix, rightCommonPrefix);
}
    
function findCommonPrefix(left, right){
  let prefix = left;
  while (right.indexOf(prefix) < 0) {
    
    prefix = prefix.substring(0, prefix.length-1); 
    if (prefix.length === 0) {
      return "";
    }
  }
  return prefix;
}

console.log("result of recursion is"+lcp(strs));
