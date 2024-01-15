const myMind = '⠄⠄⠄⣀⠄⠄⠸⢒⢶⣷⣶⣶⣶⣶⣶⢖⠤⠄⠂⠄⢰⠄⠄\n⠄⠄⢠⣥⣠⣄⠄⢀⣙⢿⣿⣿⣿⣿⡿⣁⠠⠄⣰⣆⣤⣆⡀\n⠄⣠⣷⣫⢳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣺⣇\n⢰⣿⢣⣿⢹⣿⣿⣿⣿⣿⣿⡻⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⢿⣿⣿⣿⣸⣿⣿⣿⣿⣿⣿⣻⣝⣿⣿⣿⣿⣿⣿⣇⣿⡇⣿\n⠸⣿⣷⣿⣯⣻⣿⣿⣿⣿⣿⡿⡿⣿⣿⣿⣿⡿⣿⣾⣟⣽⡟\n⠄⠨⢹⣷⣿⣿⣷⣯⣿⢿⣖⡶⢲⣼⣿⢟⣽⣾⣿⠿⠊⠁⠄\n⠄⠄⠄⢭⣭⣵⣿⣿⣿⣯⣿⣿⣿⣿⣳⣿⣿⣿⣷⣶⠟⠁⠄\n⠄⠄⠄⠄⠘⠻⣿⣿⣿⣿⣷⠛⠉⣵⣿⣿⣿⣿⠟⠃⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⢹⣿⣿⣿⣿⠄⠄⣿⣿⣿⣿⡃⠄⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⠃⠄⠄⢸⣿⣿⣿⣇⠄⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⣼⣿⣿⣿⡏⠄⠄⠄⠘⣿⣿⣿⣿⡄⠄⠄⠄⠄\n⠄⠄⠄⠄⢸⣿⣿⣿⣿⡇⠄⠄⠄⠄⣿⣿⣿⣿⣧⠄⠄⠄⠄ ';
console.log(myMind);









document.getElementById("addButton").addEventListener("click", addHero);

let heroNames = [];
let heroClasses = [];
let heroContainer = [heroClasses, heroClasses];


function displayHeroes() {

    let heroesContainer = document.getElementById("heroesContainer");


    heroesContainer.innerHTML = '';


    for (let i = 0; i < heroNames.length; i++) {

        let heroDiv = document.createElement("div");


        heroDiv.innerHTML = `<h3>${heroNames[i]}</h3><p>${heroClasses[i]}</p>`;
        heroDiv.className = 'character';

        heroesContainer.appendChild(heroDiv);
    }
}





function addHero() {

    let nameInput = document.querySelector('[data-input="heroName"]');
    let classInput = document.querySelector('[data-input="heroClass"]');
    if(nameInput.value!="" &&classInput.value!=""){
        heroNames.push(nameInput.value);
        heroClasses.push(classInput.value);
    
        
        displayHeroes();
    
    
        nameInput.value = "";
        classInput.value = "";
        
    }
    
    
}














