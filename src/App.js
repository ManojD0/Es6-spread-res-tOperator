import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      marvel: ['hulk','thor'],
      Updatemarvel:[],
      Updatereverse:[],
      restOpretor:[],
      ObjectSpread :{
        name:"mano",
        age:55
      },
     
    };
  }
spreadOperator=()=>{
  var Update=[...this.state.marvel,'ironman'];
  var UpdateRevese=['ironman',...this.state.marvel];
  this.setState({
    Updatemarvel: Update,Updatereverse:UpdateRevese
  });
}
restOpretor=()=>{
  var [hulk,...rest]=this.state.marvel;
  this.setState({
    restOpretor:hulk
  });
}
ObjectSpread=()=>{
  var add={
    ...this.state.ObjectSpread,work:false
 
}
//ObejctRest
let {name}=this.state.ObjectSpread
console.log("fdhf",name)
//end------------rest
this.setState({
  ObjectSpread:add
});
}
  render() {
    return (
      <div>
        <h1>Javascript (ES6) Rest and Spread Operator...!</h1>
        <div style={{background:"lightgreen"}}>
          <h3>Array Methods</h3>
    <p>Spread Operator</p>
    <h2>{this.state.marvel}</h2>
    <h2><button onClick={this.spreadOperator}>spreadOperator</button>{this.state.Updatemarvel}<br></br>
   {this.state.Updatereverse}
    </h2>
    <h3 ><button onClick={this.restOpretor}>restOperator</button>{this.state.restOpretor}</h3>
    </div>
    <div style={{background:"orange"}}>
<h3>Object Method</h3>
    <h1><button onClick={this.ObjectSpread}>ObjectSpread</button>{this.state.ObjectSpread.work}{console.log(this.state.ObjectSpread)}</h1>
    </div>
      </div>
    );
  }
}

export default App;