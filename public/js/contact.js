// console.log("test")
// alert("ini adalah notifikasi alert")
// document.write("menuliskan di halman menggunakan document.write")

//3 jenis variabel 
// VAR ? Bisa di deklarasikan ulang dan bisa di ubah data/value nya 
// LET ? Tidak Bisa Di deklarasikan ulang, tapi bisa di ubah data/value nya 
// CONST ? Tidak Bisa di deklarasikan ulang dan tiddak bisa di ubah data valuenya

// jenis2 tipe data = STRING "string", NUMBER = 12345 , BOLEAN = true/false

// var lemari = "baju"
//     lemari = "celana"
// console.log(lemari)

// let pemerintah = "presiden"
//     pemerintah = "raja"
//  console.log(pemerintah)

// const persib = "bandung" 
// console.log(persib)
 
// Data type

// let nama = "marclok" //tipe data string
// let umur = 10        //tipe data number
// let udahNikah = true //tipe data boolean 

// // Nama saya marclok umur saya 10 tahun
// console.log("nama saya marclok umur saya 10 tahun")  
// console.log(`nama saya ${nama} umur saya ${umur} tahun`)
// console.log("nama saya", nama, "umur saya", umur, "tahun")
// console.log("nama saya " + nama + " umur saya " + umur + " tahun")

// operator bilangan

// let x = 10
// let y = 2

// let hasil = x - y
// console.log(hasil)

// let nilai = 90
     
//  if (nilai >= 90) {
//     console.log("kamu lulus")
//  } else {
//     console.log("kamu tidak lulus")
//  }

//membuat function  
// function hello() {
//     let x = 20 
//     let y = 2
//     let hasil = x+y 
//     console.log(hasil)
// }
// hello()

// function helloWord(x,y) {
//     console.log(x)
//     console.log(y)
//     let hasilnya = x*y
//     console.log(hasilnya)
// }
// helloWord(5,10)

// //camelCase

// function namaSaya(nama) {
//     console.log(nama)
// }
// namaSaya("Aldi kabuaya")

function submitData() {
    let nama = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (nama == "") {
        return alert("nama harus di isi!")
    } else if (email == "") {
        return alert("email harus di isi")
    } else if (phone == "") {
        return alert("phone harus di isi")
    } else if (subject == "") {
        return alert("subject harus di isi")
    } else if (message == "") {
        return alert("message harus di isi")
    }
    
    let penerimaEmail = "reefqe774@gmail.com"
     
    let a = document.createElement('a')
    a.href =`mailto:${penerimaEmail}?subject=${subject}&body=Halo, nama saya ${nama} ${message}. Silhakan kontak saya di nomer ${phone} Terima kasih`
    a.click()
    console.log(nama, email, phone, subject, message)

    let dataMasuk = {
        nama, email, phone, subject, message
    }
    console.log(dataMasuk)
}
