//console.log("hello world")

//var a = 12;

//console.log(a);

//operator pada aritmatika (* + - /)


// var r= 11;
// var r1 =12 ;


// var hasil = 3.14*(r * r1);
//  console.log(hasil)

// operator logika
 //|| &&

// benar || benar =true
//benar || salah = true
//salah || benar =true
//salah||salah=false

// benar && benar = true
// benar && salah =false
// salah %% benar =false
// salah && salah =false

// let nilai = 80;
// console.log(a)

// let nilai =90

// if(nilai > 50){
//     console.log("selamat kamu lulus");
// }else{
// console.log("kamu harus belajar lagi");}
// let nilai =90;

// if (nilai >= 90 && nilai <= 100){
//     console.log(nilai +"nilai sangat memuaskan");
// }else if(nilai >= 80 && nilai <= 89){
//     console.log(nilai + "nilai memuaskan");
// }else if(nilai >= 70 && nilai <=79){
//     console.log(nilai + "nilai cukup");
// }else{
//     console.log(nilai + "nilai kurang");
// }

// const email ="sw0137597 @gmail"
// const pass = 1122334455

// if( email == "sw0137597 @gmail"){
//     if(pass==="1122334455"){
//         console.log("kamu berhasil login")
//     }else{
//         console.log("password salah");
//     }else
//         console.log("email belum terdaftar");
//     }
// }


//switch case

// const warna = hitam;

// switch (warna) {
//     case "hitam":
//         console.log("warna hitsm");
//         break;
//     case "putih":
//         console.log("warnah putih");
//         break;
//         default;
//         console.log("tidak ada warna pilihan lain");
//         break;


//     default:
//         break;
// 
 
var pendapatan = 300000;
var komisi,jasa,total;

if (pendapatan >= 0 && pendapatan <=200000){
    jasa = 10000;
    komisi = 0.1* pendapatan;
}
else if (pendapatan <= 500000)
{
    jasa =200000;
    komisi =0.15* pendapatan;
}
else{
    jasa = 300000;
    komisi =0.2;
}
{
    total = komisi + jasa;
    console.log(jasa);
    console.log(komisi);
    console.log(total);
}


