import { React, Component } from "react";

class Form extends Component(){

   constructor(props){
    super(props)
        this.state ={

            FirstName:''
        
    }
   }

    render(){
        return(
            <form>
                <div>
            <input id="smallbox" placeholder="First Name" value={this.state.FirstName}/>
            <input id="smallbox" placeholder="Last Name"></input>
            <input id="bigbox" placeholder="Address 1"></input>
            <input id="bigbox" placeholder="Address 2" style = {{marginTop:"20px"}}></input>
            <br/>
            <select placeholder="Country">
                <option value="USA">
                    USA
                </option>

            </select>
            <input id="smallbox" placeholder="City"></input>
            <input id="smallbox" placeholder="Zip/Postal Code"></input>
            <input id="smallbox" placeholder="Phone Number"></input>
            </div>
            </form>
        )
    }
}

export default Form