<?php

// Write a function canSum(targetSum, numbers) that takes in
// a target sum and an array of numbers as arguments.
// the function needs to return a boolean indicating wether or not
// it is possible to generate the targetSum using numbers from the
// array. You may use the numbers as many times as needed and
// assume all the numbers are non-negative.
function canSum($targetSum, $numbers, &$memo = []) {
    if($targetSum === 0) return true;
    if(in_array($targetSum, $numbers)) return true;
    if($targetSum < 0) return false;
    if(array_key_exists($targetSum, $memo)) return $memo[$targetSum];
    
    foreach($numbers as $num) {
        $remainder = $targetSum - $num;
        $memo[$remainder] = canSum($remainder, $numbers, $memo);
        
        if($memo[$remainder] === true) {
            return true;
        }
    }
    
    return false;
}

echo canSum(7, [2, 3]) ? "true" : "false"; // true
print_r("\n");
echo canSum(7, [5, 3, 5, 7]) ? "true" : "false"; // true
print_r("\n");
echo canSum(7, [2, 4]) ? "true" : "false"; // false
print_r("\n");
echo canSum(8, [2, 3, 5]) ? "true" : "false"; // true
print_r("\n");
echo canSum(300, [7, 14]) ? "true" : "false"; // false

?>