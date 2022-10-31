

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a, b){return b - a});
    let max1 = nums[0];
    let second = 0;
    for (const e of nums){
        if(second < e && e < max1 )
        second = e
    } 
    return second;
}

