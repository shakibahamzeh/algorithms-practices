function makeLargestNumber (nums) {
    nums = nums.map(String);
    nums.sort((a, b) => (b + a) - (a + b));
    let result = nums.join('');
    return result[0] === '0' ? '0' : result;
};

makeLargestNumber([5,10,85,30,311,1])