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
 })

    