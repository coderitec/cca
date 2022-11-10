function greetMe(){
    console.log('hello there')
}

// greetMe()

// function with parameter

function addTen(x){
    console.log(x + 10)
}
// addTen('franc')

// optional parameter
function divideEach(x, y=2){
    console.log(x / y)
}

// divideEach(20)
// divideEach(12, 4)

function greetHer(name = 'there'){
    console.log(`hello ${name}`)
}

// greetHer()
// greetHer('franc')

function arrIndex(arr){
    // create an empty arr
    // loop through the arr parameter
    // gets the index of each char in the arr
    // finds its index on the alphabet
    // push the index value into the empty arr
    // join it and log out the answer

    let arr2 = []
    let alp = 'abcdefghijklmnopqrstuvwxyz'
    for(let x = 0; x < arr.length; x++){
        if(arr[x] > 26){
            arr2.push('-')
        }
        else{
            arr2.push(alp[arr[x]])
        }
    }
    // console.log(arr2.join('').toUpperCase())

}

arrIndex([12,44,0, 29,17, 24,17])

function timesTwo(arr){
    console.log(arr.map(x => x * 2))
}

timesTwo([12,3,4, 84])

