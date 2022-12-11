// sum of first n natural numbers

const sumOfFirstNNumbers = function(n){
    return n * (n+1)/2;
}

console.log(sumOfFirstNNumbers(5));


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    return nums.filter((el) => el != val);
};

console.log(removeElement([3,2,2,3], 3));