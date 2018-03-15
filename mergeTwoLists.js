/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
      return []; 
    }
    let result = new ListNode(), nextPtr = result;
    while(l1 !== null && l2 !== null){
        if (l1.val < l2.val){
            nextPtr.val = l1.val;
            l1 = l1.next;
        } else{
            nextPtr.val = l2.val;
            l2 = l2.next;
        }  
        let node = new ListNode();
        nextPtr.next = node;
        nextPtr = node;
    }
    
    
    while(l1 !== null){
        console.log("l1", l1.val);
        nextPtr.val = l1.val;
        l1 = l1.next;
        if (l1 !== null) {
          let node = new ListNode();
          nextPtr.next = node;
          nextPtr = node;
        }
    }
    
    while(l2 !== null){
        console.log("l2", l2.val);
        nextPtr.val = l2.val;
        l2 = l2.next;
        if (l2 !== null) {
          let node = new ListNode();
          nextPtr.next = node;
          nextPtr = node;
        }
    }
  
    console.log(printList(result));
    return result;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
  
  this.toString = () => {
    return this.val; 
  }
  
  this.getNext = () => {
    return this.next.toString(); 
  }
}
const ele1 = new ListNode(1);
const ele2 = new ListNode(2);
const ele3 = new ListNode(3);
const ele4 = new ListNode(4);
const ele5 = new ListNode(5);
const ele6 = new ListNode(6);

ele1.next = ele3;
ele3.next = ele5;
ele2.next = ele4;
ele4.next = ele6;

function printList(list){
  const arr = [];
  while (list !== null){
    arr.push(list.val);
    list = list.next;
  }
  console.log("arr", arr);
}

printList(ele1);
printList(ele2);

console.log("result", mergeTwoLists(ele1, ele2));


