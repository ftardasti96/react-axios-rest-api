import React, {Component} from "react";
import "./App.css";
import axios from 'axios'

// const API_URL = 'localhost:8000';
const API_URL = 'http://jsonplaceholder.typicode.com';

class App extends Component {

  state = {
    user: []
  }
 componentDidMount(){
   const url = `${API_URL}/users/`;
   axios.get(url).then(response => response.data)
   .then((data)=>{
     this.setState({user:data});
     console.log(this.state.user);
     
   })
 }
 render(){
   return(
     <div className='container pt-5'>
       {this.state.user.map((u) => (
         <div className='card'>
           <div className="card-body">
               <h5 className="card-title">{u.name}</h5>
               <h6 className="card-subtitle mb-2 text-muted">
              {u.email}             
              </h6>
            </div>
         </div>
       ))}
     </div>
   )
 }
}

export default App;
