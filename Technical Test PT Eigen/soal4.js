//4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN 
//CONTOH
/*
Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
*/

const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

function diagonalDifference(inputMatrix) {
    let diagonalPertama = 0
    let diagonalKedua = 0
    for (let i = 0; i < inputMatrix.length; i++) {
        diagonalPertama += inputMatrix[i][i]
        diagonalKedua += inputMatrix[i][inputMatrix.length - 1 - i]
    }
    return diagonalPertama - diagonalKedua
}

const finalResult = diagonalDifference(Matrix)
console.log(finalResult)