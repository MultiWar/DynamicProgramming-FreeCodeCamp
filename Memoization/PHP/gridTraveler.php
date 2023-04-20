<?php

function gridTraveler($m, $n, &$memo = []) {
    $key = "{$m},{$n}";
    
    if(array_key_exists($key, $memo)) return $memo[$key];
    
    if($m === 0 || $n === 0) return 0;
    if($m === 1 || $n === 1) return 1;
    
    $memo[$key] = gridTraveler($m - 1, $n, $memo) + gridTraveler($m, $n - 1, $memo);
    return $memo[$key];
}

print_r(gridTraveler(18, 18)); // 2333606220

?>