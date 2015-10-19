<?php
// Devuelve true o false dependiendo si es 
// primo o no
function esPrimo($numero) {
 
    $primo = true;
    
    if ($numero == 0 || $numero == 1) {
        
        $primo = true;
        
    } else {
    
        for ($i = 2; $i < $numero; $i++) {
            
            if (($numero % $i) == 0) {
                $primo = false;
            }
        }
    }
    return $primo;
}
?>
