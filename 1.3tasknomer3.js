function printSegitiga(num) {
    let hasil = '';
    
    for (let a = 0 ; a < num; a++) { 
        let reset = 0;    
        for (let b = num ; b > a; b--) { 
            reset ++ ;
            hasil +=  reset ;   
        }
        reset = 0
        hasil += '\n';
    }
    return hasil;

}
console.log(printSegitiga(5));

