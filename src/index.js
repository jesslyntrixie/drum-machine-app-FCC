import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';





class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      volume: 1,
      sound: "",
      power: true,
      activeButton: null
    };
    this.dict= {
      "Q":"Heater 1",
      "W":"Heater 2",
      "E":"Heater 3",
      "A":"Heater 4",
      "S":"Clap",
      "D":"Open-HH",
      "Z":"Kick-n'-Hat",
      "X":"Kick",
      "C":"Closed-HH"
    }
    this.handleVolumeChange = this.handleVolumeChange.bind(this)
    this.playSound = this.playSound.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleVolumeChange(e){

    this.setState({
      volume: e.target.value
    });
    const display = document.getElementById("display");
    display.innerText = `Volume: ${Math.floor(e.target.value * 100)}`;
    setTimeout(()=>{
      display.innerText = "";
    }, 3000);
  }
  playSound(id){
    if(!this.state.power) return;
    this.setState({ activeButton: id });
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.volume = this.state.volume;
    sound.play();
    const display = document.getElementById("display");
    display.innerText = this.dict[id];

    // Reset active after 200ms (for visual feedback)
  setTimeout(() => {
    this.setState({ activeButton: null });
  }, 200);
  }
  toggleButton(){
    const display = document.getElementById("display");
    if (this.state.power){
      
      display.innerText = "Power Off"

      setTimeout(()=>{
        display.innerText = "";
      }, 2000);
    }
    else{
      display.innerText = "Power On"

      setTimeout(()=>{
        display.innerText = "";
      }, 2000);
    }
    this.setState( (prevState) =>
    ({power: !prevState.power})
    );
  }
  handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    if (this.dict[key]) { 
      this.playSound(key);
    }
  };
  


  render(){
    
    return(
      <div id="wrapper" class="container-fluid">
        <div id="whole-machine">
          <div id="drum-machine" class="container">
            {/* <div id="buttons-container" class="container"> */}
              <div class="row" id="row1">
                <div class="col-4">
                  <button id="q-button" onClick={() => {this.playSound("Q")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "Q" ? "active" : ""
  }`}>
                    Q
                    <audio id="Q" src ="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" class="clip"></audio>
                  </button>
                </div>
                <div class="col-4">
                  <button id="w-button" onClick={() => {this.playSound("W")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "W" ? "active" : ""
  }`}>
                    W
                    <audio id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" class="clip"></audio>
                  </button>
                </div>

                <div class="col-4">
                  <button id="e-button" onClick={() => {this.playSound("E")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "E" ? "active" : ""
  }`}>
                    E
                    <audio id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" class="clip"></audio>
                  </button>
                </div>
              </div>

              <div class="row" id="row2">
                <div class="col-4">
                  <button id="a-button" onClick={() => {this.playSound("A")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "A" ? "active" : ""
  }`}>
                    A
                    <audio id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" class="clip"></audio>
                  </button>
                </div>

                <div class="col-4">
                  <button id="s-button" onClick={() => {this.playSound("S")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "S" ? "active" : ""
  }`}>
                    S
                    <audio id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" class="clip"></audio>
                  </button>
                </div>

                <div class="col-4">
                  <button id="d-button" onClick={() => {this.playSound("D")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "D" ? "active" : ""
  }`}>
                    D
                    <audio id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" class="clip"></audio>
                  </button>
                </div>
              </div>

              <div class="row" id="row3">
                <div class="col-4">
                  <button id="z-button" onClick={() => {this.playSound("Z")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "Z" ? "active" : ""
  }`}>
                    Z
                    <audio id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" class="clip"></audio>
                  </button>
                </div>

                <div class="col-4">
                  <button id="x-button" onClick={() => {this.playSound("X")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "X" ? "active" : ""
  }`}>
                    X
                    <audio id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" class="clip"></audio>
                  </button>
                </div>

                <div class="col-4">
                  <button id="c-button" onClick={() => {this.playSound("C")}} disabled={!this.state.power} className={`drum-pad btn ${
    this.state.activeButton === "C" ? "active" : ""
  }`}>
                    C
                    <audio id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" class="clip"></audio>
                  </button>
                </div>
              </div>
            
          </div>
          <div id="control-container" class="container">
            <input type="range" min="0" max="1" step="0.01" onChange={this.handleVolumeChange} value={this.state.volume} disabled={!this.state.power} class="input-control"></input>
            <p id="display" class="container"></p>
            <button id="power-btn" onClick={this.toggleButton}>
              {this.state.power ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </div>
    )
  }
  

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
