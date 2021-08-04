

// GET "https://api.jokes.one/joke/random" 

// https://api.jokes.one
// GET https://icanhazdadjoke.com/slack


const joke =document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

const generateJokes = () => {

    const setheader = {
        headers:{
            Accept : "application/json"
        }
    }
// http://api.population.io/

    fetch ('https://icanhazdadjoke.com',setheader)
    .then((res) => res.json() )
    .then((data ) => {
        joke.innerHTML=data.joke;
    }).catch((error) => {
        console.log(error);
    })
}



jokebtn.addEventListener('click',generateJokes);
generateJokes();
