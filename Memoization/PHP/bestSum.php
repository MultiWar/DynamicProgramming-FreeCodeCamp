<?php 

// Write a function `bestSum(targetSum, numbers)` that 
// takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest combination
// of elements that adds up to exactly the targetSum. If there is no combination
// that adds upp to the targetSum, then return null.

// If there are mupltiple possible combinations with the same length, you may return any one.

function bestSum($targetSum, $numbers, &$memo = []) {
    if($targetSum === 0) return [];
    if(in_array($targetSum, $numbers)) return [$targetSum];
    if($targetSum < 0) return null;
    if(array_key_exists($targetSum, $memo)) return $memo[$targetSum];

    $shortestCombination = null;
    
    foreach($numbers as $num) {
        $remainder = $targetSum - $num;
        $componentsOfSum = bestSum($remainder, $numbers, $memo);
        
        if(is_array($componentsOfSum)) {
            $newCombination = [$num, ...$componentsOfSum];
            
            if($shortestCombination === null || count($shortestCombination) > count($newCombination)) {
                $shortestCombination = $newCombination;
            }
        }
    }
    
    $memo[$targetSum] = $shortestCombination;
    return $shortestCombination;
}

print_r(bestSum(7, [5, 3, 5, 7])); // [7]
print_r("\n");
echo bestSum(7, [2, 4]) ?: "null"; // null
print_r("\n");
print_r(bestSum(8, [2, 3, 5])); // [3, 5]
print_r("\n");
print_r(bestSum(8, [1, 4, 5])); // [4, 4]
print_r("\n");
print_r(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
print_r("\n");
echo bestSum(300, [7, 14]) ?: "null"; // null

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