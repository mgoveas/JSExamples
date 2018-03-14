function mergeSortedArrays(arr1, arr2) {
  let result = arr1.concat(arr2).sort((a, b) => (a - b));
  console.log("N log n", result)
  
  //O(n2)
  let result1 = arr1.reduce((acc, curr, idx) => {
    //console.log("outer index", idx);
    //add all elements less than or equal to this index
    const elements = arr2.filter((innerCurrent, innerIdx) => {
      //console.log("inner index", innerIdx);
      return (innerCurrent < curr && acc.indexOf(innerCurrent) < 0);
    })
    
    //add the element from first array
    return acc.concat(elements).concat(curr); 
  }, []);
  
  console.log("result",result);
  console.log("result1", result1);
  
  //O(n)
  let result2 = [], i=0, j=0, k=0;
  
  while(i < arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]){
      result2[k++] = arr1[i++]; 
    } else {
      result2[k++] = arr2[j++] 
    }
  }
  while (i < arr1.length){
    result2[k++] = arr1[i++]; 
  }
  
  while (j < arr2.length){
    result2[k++] = arr2[j++]; 
  }
  
  console.log("result2", result2);
  
}

const arr1 = [3, 4, 6, 10, 11, 15, 20];
const arr2 = [1, 5, 8, 12, 14, 17, 18, 19];
//choose the array with the higher last element first parameter
mergeSortedArrays(arr2, arr1);
