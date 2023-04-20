<?php 

// Write a function `howSum(targetSum, numbers)` that 
// takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination
// of elements that add up to exactly the targetSum. If there is no combination
// that adds upp to the targetSum, then return null.

// If there are mupltiple possible combinations, you may return any one.

function howSum($targetSum, $numbers, &$memo = []) {
    if($targetSum === 0) return [];
    if(in_array($targetSum, $numbers)) return [$targetSum];
    if($targetSum < 0) return null;
    if(array_key_exists($targetSum, $memo)) return $memo[$targetSum];
    
    foreach($numbers as $num) {
        $remainder = $targetSum - $num;
        $componentsOfSum = howSum($remainder, $numbers, $memo);
        
        if(is_array($componentsOfSum)) {
            $memo[$remainder] = [$num, ...$componentsOfSum];
            return $memo[$remainder];
        }
    }
    
    $memo[$targetSum] = null;
    return null;
}

print_r(howSum(7, [2, 3])); // [2, 2, 3]
print_r("\n");
print_r(howSum(7, [5, 3, 5, 7])); // [7] or [3, 4]
print_r("\n");
echo howSum(7, [2, 4]) ?: "null"; // null
print_r("\n");
print_r(howSum(8, [2, 3, 5])); // [2, 2, 2, 2] or [3, 5]
print_r("\n");
echo howSum(300, [7, 14]) ?: "null"; // null

// m = target sum
// n = numbers.length

// BRUTE FORCE
// Time complexity: O(n^m * m)
// Space complexity: O(m)

// MEMOIZED
// Time complexity: O(n * m * m)
// Space complexity: O(m * m)


// NOTE THAT, ALTHOUGH WE REDUCED THE TIME COMPLEXITY BY A LOT, WE INCREASED SPACE COMPLEXITY A LITTLE
?>