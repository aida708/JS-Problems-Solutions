/*given an integer array num, return true if 
any value appears at least twice in the array and return false if every element is distinct
*/

var containsDuplicate = function(nums) {
    const map = new Map()  //CREATE a new map
    for(const n of nums) {  //iterate over el
    if(map.has(n)) return true;
    map.set(n, true)
}
return false
};

//method 2 
var constainDuplicate = function(nums){
    const  set = new Set(nums)
    return set.size !==nums.length;
}