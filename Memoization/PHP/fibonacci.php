<?php 

function fib($n, &$memo = []) {
    if($n <= 2) return 1;
    if(array_key_exists($n, $memo)) return $memo[$n];
    
    $memo[$n] = fib($n - 1, $memo) + fib($n - 2, $memo);
    return $memo[$n];
}

print_r(fib(2)); // 1
print_r("\n");
print_r(fib(3)); // 2
print_r("\n");
print_r(fib(6)); // 8
print_r("\n");
print_r(fib(10)); // 55
print_r("\n");
print_r(fib(15)); // 610
print_r("\n");
print_r(fib(50)); // 12586269025


?>