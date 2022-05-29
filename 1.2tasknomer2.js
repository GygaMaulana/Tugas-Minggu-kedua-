const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

let hasil = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
console.log('nilai rata-rata =',hasil)

let i = hasil
{if ( (i  > 0) && ( i < 59)) 
    console.log( 'Grade = E ');
 else if (( i  > 60) && ( i < 69)) 
    console.log('Grade =  D '); 
 else if (( i  > 70) && (i < 79))  
    console.log ( 'Grade = C'); 
 else if (( i  > 80) && (i < 89 ))
    console.log (' Grade = B ');
 else if (( i  > 90) && (i < 100 ))
 console.log (' Grade = A ');
 else console.log ('Grade = Nilai Anda Tidak sesuai');
}
