document.getElementById("joke-button") .addEventListener("click", generateJoke);
function generateJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((Response) => Response.json())
    .then((data) => {
        const jok =data.results[0];
        document.getElementById("joke").style.display="block";
    })
    .catch((error)=>{
        console.error("error fetching jok:",error);
    });
}