 function sortColors(nums) {
    nums = nums.map(String);
    nums.sort((a , b) => (a + b) - (b + a));
    nums = nums.map(Number);
    return nums
};

console.log(sortColors([2,0,2,1,1,0]));