//3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
//CONTOH
/*
INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
*/

const INPUT = ['xc', 'dz', 'bbb', 'dz']
const QUERY = ['bbb', 'ac', 'dz']

function countWord(inputArray, queryArray) {
    let result = []
    queryArray.forEach((queryData)=> {
        let count = 0
        inputArray.forEach((inputData)=> {
            if (queryData === inputData) {
                count++
            }
        })
        result.push(count)
    })
    return result
}

const finalResult = countWord(INPUT, QUERY)
console.log(finalResult)