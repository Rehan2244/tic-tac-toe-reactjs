import logo from './logo.svg';
import './App.css';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
var square={
  color: "black",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  fontSize:"30px",
  backgroundColor: "#A4A4A4",
  padding: "10px",
  margin:"10px",
  fontFamily: "Arial",
  width:"50px",
  height:"50px",
  content:"X"

}

var oSquare={
  color: "black",
  backgroundColor: "#A4A4A4",
  padding: "10px",
  margin:"10px",
  fontFamily: "Arial",
  width:"50px",
  height:"50px",
  content:"O"
}

var xSquare={
  color: "white",
  backgroundColor: "#A4A4A4",
  padding: "10px",
  margin:"10px",
  fontFamily: "Arial",
  width:"50px",
  height:"50px",
  content:""
}

const rowContainer={
  display:"flex",
  
  
}

const playArea={
  backgroundColor:"#B9B9B9",
  margin:"20px auto",
  padding:"10px",
  maxWidth:"250px"
  
}

const centerized={
  textAlign:"center"
}


class Square extends React.Component{

  
  render(){
    return(
      <div className={this.props.custClass} onClick={this.props.customClickEvent} id={this.props.customId} style={square}></div>
    )
  }
}
class App extends React.Component {
  tiles=["22","22","","","","","","",""]
  constructor(props){
      super(props);
      this.state={
        player:"X",
        moves:0,
        toggle:["","","","","","","","",""],
        finish:false
      }
      this.playersMove=this.playersMove.bind(this);
      this.clear=this.clear.bind(this)
  }
  componentWillMount(){
    toast("Welcome to Tic-tac-toe")
  }
  clear(){
    this.setState({moves:0,player:"X",finish:false,toggle:["","","","","","","","",""]})
    for(var i=0;i<9;i++){
      let element=document.getElementById(i)
      element.innerHTML=""
    }
  }
   playersMove(event){
     if(this.state.finish===false){
    // alert(event.target.id)
    // console.log(event.target.style )
    if(this.state.player==="X" && this.state.toggle[parseInt(event.target.id)]==="")
    {
      let el=document.getElementById(event.target.id)
      el.innerHTML="X"
      this.setState({player:"O",moves:this.state.moves+=1})
      this.state.toggle[event.target.id]="X"
      // this.setState({})
    }
    else if(this.state.player==="O" && this.state.toggle[parseInt(event.target.id)]==="")
    {
      let el=document.getElementById(event.target.id)
      el.innerHTML="O"
      this.setState({player:"X",moves:this.state.moves+=1})
      this.state.toggle[event.target.id]="O"

    }
    
    for(var i=0;i<9;i++){
      if(event.target.id===this.state.toggle[i]){
        this.state.toggle[i]=true;
      }
    }
  
console.log(this.state.toggle)

if(this.state.moves>2 ){
  if(this.state.toggle[0]==="O" && this.state.toggle[1]==="O" && this.state.toggle[2]==="O"){
    this.toasty("O is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[3]==="O" && this.state.toggle[4]==="O" && this.state.toggle[5]==="O"){
    this.toasty("O is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[6]==="O" && this.state.toggle[7]==="O" && this.state.toggle[8]==="O"){
    this.toasty("O is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[0]==="O" && this.state.toggle[4]==="O" && this.state.toggle[8]==="O"){
    this.toasty("O is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[6]==="O" && this.state.toggle[4]==="O" && this.state.toggle[2]==="O"){
    this.toasty("O is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[0]==="O" && this.state.toggle[3]==="O" && this.state.toggle[6]==="O"){
    this.toasty("O is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[1]==="O" && this.state.toggle[4]==="O" && this.state.toggle[7]==="O"){
    this.toasty("O is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[2]==="O" && this.state.toggle[5]==="O" && this.state.toggle[8]==="O"){
    this.toasty("O is winner")
    this.setState({finish:true})
  }




  else if(this.state.toggle[0]==="X" && this.state.toggle[1]==="X" && this.state.toggle[2]==="X"){
    this.toasty("X is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[3]==="X" && this.state.toggle[4]==="X" && this.state.toggle[5]==="X"){
    this.toasty("X is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[6]==="X" && this.state.toggle[7]==="X" && this.state.toggle[8]==="X"){
    this.toasty("X is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[0]==="X" && this.state.toggle[4]==="X" && this.state.toggle[8]==="X"){
    this.toasty("X is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[6]==="X" && this.state.toggle[4]==="X" && this.state.toggle[2]==="X"){
    this.toasty("X is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[0]==="X" && this.state.toggle[3]==="X" && this.state.toggle[6]==="X"){
    this.toasty("X is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[1]==="X" && this.state.toggle[4]==="X" && this.state.toggle[7]==="X"){
    this.toasty("X is winner")
    this.setState({finish:true})
  }
  else if(this.state.toggle[2]==="X" && this.state.toggle[5]==="X" && this.state.toggle[8]==="X"){
    this.toasty("X is winner")
    this.setState({finish:true})
  }

}
     }


    // this.state.toggle[0]=oSquare
    // alert(this.state.toggle[0].content)
    // this.state.toggle[0]="oSquare"



    // this.setState({player:"O"})
    // this.setState(state=>{

    //   this.state.tilesID[parseInt(event.target.id)]="X"
    //   alert(this.state.tilesID[parseInt(event.target.id)])
    //   const tilesChangesValue=this.state.tiles;
    //   state=tilesChangesValue
    // })
  }
  toasty(msg){
    toast.success(msg,{position: "top-right",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,})
  }
  
  render(){
  return (
  <div style={centerized} >
    <h4>Player:{this.state.player}</h4>
    <h4>Moves:{this.state.moves}</h4>
    <button onClick={this.clear}>clear</button>
  <div style={playArea}>
  <div style={rowContainer}>
    {/* <div id="das" style={square} onClick={this.playersMove}></div> */}
    <Square customId="0" customClickEvent={this.playersMove} />
    <Square customId="1" customClickEvent={this.playersMove} />
    <Square customId="2" customClickEvent={this.playersMove} />
  </div>
  <div style={rowContainer}>
    <Square customId="3" customClickEvent={this.playersMove} />
    <Square customId="4" customClickEvent={this.playersMove} />
    <Square customId="5" customClickEvent={this.playersMove} />
  </div>
  <div style={rowContainer}>
    <Square customId="6" customClickEvent={this.playersMove} />
    <Square customId="7" customClickEvent={this.playersMove} />
    <Square customId="8" customClickEvent={this.playersMove} />
  </div>
  </div>
  </div>
  );
  }
}

export default App;
