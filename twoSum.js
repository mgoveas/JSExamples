const nums = [1,3,4,7];

let twoSum = function(nums, target) {
    
    let something = nums.filter((num, idx) => {
        const complements = nums.map((innerNum, innerIdx) => {
            return target - innerNum;       
        });
        return complements.indexOf(num) !== idx && complements.indexOf(num) !== -1
    });
    console.log(something);
};

twoSum(nums, 9);
