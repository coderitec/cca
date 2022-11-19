let greet = document.querySelector('.greet')


const greetPerson = () =>{
    if(new Date().getHours() < 12){
        greet.textContent = 'Good Morning'
    }
    else if(new Date().getHours() >= 12 && new Date().getHours() < 16 ){
        greet.textContent = 'Good Afternoon'
    }
    else{
        greet.textContent = 'Good evening'
    }

}
greetPerson()

console.log(greet)