//2.Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
//CONTOH
/*
const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence) 
// mengerjakan: 11 character
*/

const sentence = "Mengerjakan dan menciptakan adalah hal yang berbeda"

//opsi pertama: tidak memperhitungkan jika ada 2 kata dengan jumlah huruf yang sama
function longest(inputString) {
    const arrayHuruf = inputString.split(" ")
    arrayHuruf.sort(function(a, b){return b.length - a.length});
    return `${arrayHuruf[0]}: ${arrayHuruf[0].length} character`
}

const finalResult = longest(sentence)
console.log(finalResult)

//opsi kedua: memperhitungkan jika ada 2 kata dengan jumlah huruf yang sama
function longest2(inputString) {
    const arrayHuruf = inputString.split(" ")
    arrayHuruf.sort(function(a, b){return b.length - a.length});
    const karakterTerpanjang = arrayHuruf[0].length
    const kataTerpanjang = arrayHuruf.filter(kata => kata.length === karakterTerpanjang)
    let result =  ''
    for (let i = 0; i < kataTerpanjang.length; i++) {
        result += `${arrayHuruf[i]}: ${arrayHuruf[i].length} character` + '\n'
    }
    return result
}

const finalResult2 = longest2(sentence)
console.log(finalResult2)