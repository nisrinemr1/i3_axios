'use stict';
const URL_AGYFY = `https://api.agify.io/?name=___Name___&country_id=BE`;

const searchFrom = document.forms['searchFrom'];
const result = document.getElementById('result');

searchFrom.addEventListener('submit', function(event){
    //Désactive le comportement du fromulaire 
    event.preventDefault();

    //Récuperation de la valeur de l'input
    const name = searchFrom['queryName'].value;
    console.log(name);

    //Traitement -> Envoyer la requete ajax
    sendRequest(name);

    //Remise à zéro du formulaire
    searchFrom.reset();
    searchFrom['queryName'].focus();
})

const result = document.getElementById('result');

const sendRequest = function(name){

    if(!name || name.trim() === ''){
        //trim enleve tous les espaces vides!
        result.innerHTML = 'La demande n\'est pas correct!!';
        return;
    }

    const url = URL_AGYFY.replace('___Name___', url);
    console.log('Requete', url);

    axios.get(url)
        .then(function(response){
            //récuperer la reponse de ma requete
            console.log(response.data);
            const {name, age}= response.data;
            result.innerHTML = `L'age de ${name} est de ${age}`
        })
        .catch(function(error){
            console.log(error);
            result.innerHTML= 'Il y a une erreur :0';
        });
}
