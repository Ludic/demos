import {Screen} from 'ludic'
import {LudicConnect} from 'ludic-connect'

window.lc = LudicConnect;

export default class LobbyScreen extends Screen {
  constructor() {
    super();
    this.lobbies = [];
    this.currentLobby = {};
    this.drawLobby();
  }

  drawLobby(){
    /* Hide the Canvas */
    this.ludicCanvasEl = document.getElementById("ludic");
    this.ludicCanvasEl.style.display = "none";

    /* Show Lobby Screen */
    this.lobbyScreenEl = document.getElementById("lobby-screen");
    this.lobbyScreenEl.style.display = "flex";

    /* Add Click Listeners to Buttons */
    this.createLobbyButton = document.getElementById("create-lobby");
    this.createLobbyButton.addEventListener("click", this.createLobby.bind(this));
    this.findLobbyButton = document.getElementById("find-lobby");
    this.findLobbyButton.addEventListener("click", this.findLobbies.bind(this));

    /* Get other important elements */
    this.lobbyList = document.getElementById("lobby-list");
  }

  createLobby(name, type){
    if(!this.creatingLobby){
      this.creatingLobby = true;
      LudicConnect.createLobby("demo-lobby").then(results => {
        /* console.log(results); */
        this.creatingLobby = false;
      });
    }
  }

  findLobbies(){
    LudicConnect.findLobbies("demo-lobby").then(results => {
      console.log(results);
      this.lobbies = results;
      this.updateLobbies(this.lobbies);
    });
  }

  joinLobby(e){
    let lobbyId = e.srcElement.id;
    this.lobbies.forEach(lobby => {
      if(lobby.id === lobbyId){
        LudicConnect.joinLobby(lobby, this.onLobbyJoined.bind(this));        
      }
    });
  }

  onLobbyJoined(){
    console.log("lobby joined");
  }

  updateLobbies(lobbies){
    lobbies.forEach(lobby => {
      let lobbyText = lobby.name + "   " + lobby.id;
      let lobbyDiv = document.createElement("div"); 
      let lobbyContent = document.createTextNode(lobbyText);
      lobbyDiv.className = "found-lobby";
      lobbyDiv.id = lobby.id;
      lobbyDiv.appendChild(lobbyContent); 

      lobbyDiv.addEventListener("click", this.joinLobby.bind(this));
      this.lobbyList.appendChild(lobbyDiv);
    });
  }

  update(delta, ctx){
    
  }
}
