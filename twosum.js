var holder = [];

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[j] == target - nums[i]) {      
                return([i, j]);
            }
        }
    } 
};



var nums = [2, 11, 15, 7];
var target = 9;

twoSum(nums, target);