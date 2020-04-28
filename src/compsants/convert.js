import React, { Component } from 'react'

export default class convert extends Component {
  
    state={value:'',value2:0}

   

    addValue=(evt)=>
    {
      evt.preventDefault();
      if((/\d/g).test(this.state.value) ){
        this.setState({value2:this.state.value})
       
      }

        else {
            alert("il faut que vous entrez un nombre")
           this.setState({value:""})
        
    }
    }
    reset=()=>{
        this.setState({value:""})
  
    }
   updateInput=(evt)=>{
     
      this.setState({value: evt.target.value}); 

        }
    
    render()
    {
      return (
          <div class="convert">
              <h1> Convert seconds to time</h1>
      <form >
      <input type="text" onChange={this.updateInput} placeholder="Seconds" value={this.state.value} /><br/>
      < h3>{ Math.floor(this.state.value2 / 3600)}:{Math.floor((this.state.value2 % 3600) / 60)}:{this.state.value2  % 60} </ h3>
      <input type="submit" onClick={this.addValue} value="Convert"/>
      <input type="submit" onClick={this.reset} value="Reset "/>

      
      </form>
      </div>
      )
  
   
 
    
}
}