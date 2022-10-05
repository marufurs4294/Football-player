function playerName(playerId){
    const playerNameElement = document.getElementById(playerId);
    const playerName = playerNameElement.innerText;
    return playerName; 
}

function playerStage(stage){
const playerStageElement = document.getElementById(stage);
const playerStage = document.createElement('li');
playerStage.innerText = player;
playerStageElement.appendChild(playerStage);
}
// 
function DisableNextButton(btnId) {
    
    document.getElementById(btnId).disabled = 'true';
      
}
//  
// Player
document.getElementById('select1').addEventListener('click', function(){
const player = playerName('messi');

const playerStageElement = document.getElementById('player-stage');
const playerStage = document.createElement('li');
playerStage.innerText = player;
playerStageElement.appendChild(playerStage);
const btnDisable =  DisableNextButton('select1');
})
document.getElementById("select2").addEventListener('click', function(){
    const player = playerName('neymar');
    
    
    const playerStageElement = document.getElementById('player-stage');
    const playerStage = document.createElement('li');
    playerStage.innerText = player;
    playerStageElement.appendChild(playerStage);
    const btnDisable =  DisableNextButton('select2');
    })
document.getElementById("select3").addEventListener('click', function(){
    const player = playerName('Mbappe');
    
    
    const playerStageElement = document.getElementById('player-stage');
    const playerStage = document.createElement('li');
    playerStage.innerText = player;
    playerStageElement.appendChild(playerStage);
    const btnDisable =  DisableNextButton('select3');
    })
document.getElementById("select4").addEventListener('click', function(){
    const player = playerName('renato');
    
    
    const playerStageElement = document.getElementById('player-stage');
    const playerStage = document.createElement('li');
    playerStage.innerText = player;
    playerStageElement.appendChild(playerStage);
    const btnDisable =  DisableNextButton('select4');
    })
document.getElementById("select5").addEventListener('click', function(){
    const player = playerName('ramos');
    
    
    const playerStageElement = document.getElementById('player-stage');
    const playerStage = document.createElement('li');
    playerStage.innerText = player;
    playerStageElement.appendChild(playerStage);
    const btnDisable =  DisableNextButton('select5');
    })
document.getElementById("select6").addEventListener('click', function(){
    const player = playerName('machado');
    
    
    const playerStageElement = document.getElementById('player-stage');
    const playerStage = document.createElement('li');
    playerStage.innerText = player;
    playerStageElement.appendChild(playerStage);
    const btnDisable =  DisableNextButton('select6');
    })
document.getElementById("select7").addEventListener('click', function(){
    const player = playerName('hakimi');
    
    
    const playerStageElement = document.getElementById('player-stage');
    const playerStage = document.createElement('li');
    playerStage.innerText = player;
    playerStageElement.appendChild(playerStage);
    const btnDisable =  DisableNextButton('select7');
    })
document.getElementById("select8").addEventListener('click', function(){
    const player = playerName('ekitike');
    
    
    const playerStageElement = document.getElementById('player-stage');
    const playerStage = document.createElement('li');
    playerStage.innerText = player;
    playerStageElement.appendChild(playerStage);
    const btnDisable =  DisableNextButton('select8');
    })
document.getElementById("select9").addEventListener('click', function(){
    const player = playerName('sarabia');

    const playerStageElement = document.getElementById('player-stage');
    const playerStage = document.createElement('li');
    playerStage.innerText = player;
    playerStageElement.appendChild(playerStage);
    const btnDisable =  DisableNextButton('select9');
    return btnDisable;
 })

// Budget

function inputElementById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValueString = inputElement.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}

// 

document.getElementById('calculate').addEventListener('click', function(){
    const perPlayerInput = inputElementById('per-player-budget');
    if(isNaN(perPlayerInput)){
        alert('Enter a valid Number');
        return;
    }
    const perPlayerexpense = document.getElementById('player-expense');
    const totalplayerexpenses = perPlayerInput * 5;
    perPlayerexpense.innerText = totalplayerexpenses;
})

// 

document.getElementById('calculate-total').addEventListener('click', function(){
    const perPlayerInput = inputElementById('per-player-budget');
 
    const perPlayerexpense = document.getElementById('player-expense');
    const totalplayerexpenses = perPlayerInput * 5;
    perPlayerexpense.innerText = totalplayerexpenses;

    const managerBudget = inputElementById('Manager');
    if(isNaN(managerBudget)){
        alert('Enter a valid Number');
        return;
    }
    const coachBudget = inputElementById('coach');
    if(isNaN(coachBudget)){
        alert('Enter a valid Number');
        return;
    }
    const totalCost = totalplayerexpenses + managerBudget + coachBudget;
    
    const totalExpences = document.getElementById('total-cost');
    totalExpences.innerText = totalCost;
    
})
