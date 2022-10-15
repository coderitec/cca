
let x = 20

if(x % 2 === 0){
    
if(x % 3 === 0 && x % 5 === 0){
    console.log('i love this')
}
else if((x % 7 === 0 && x % 11 === 0) || x % 3 !== 0){
    console.log('i admire this')
}
else{
    console.log('this is just a cool number')
}
}

else{
    console.log('this is an odd number')
}