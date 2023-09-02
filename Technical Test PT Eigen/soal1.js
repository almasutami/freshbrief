//1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const string = "NEGIE1";

//asumsi angka selalu berada di karakter terakhir

function reverseString(inputString) {
    const angka = inputString.slice(5)
    const huruf = inputString.slice(0, 5)
    
    const reverseHuruf = huruf.split("").reverse().join("")
    const result = `${reverseHuruf}${angka}`
    return result;
}

const finalResult = reverseString(string)
console.log(finalResult)