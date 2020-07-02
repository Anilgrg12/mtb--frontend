// import React, { Component } from 'react';
// import axios from 'axios'

// class Login extends Component {
  
//    state = { 
      
//       email: '',
//       password: ''
      
//      }

// handleChange = (event) => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   };

  
    
//   const LogIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();

//     // const doLogIn = (e) => {
//     //     e.preventDefault()
//     //     fetch ("http://localhost:3000/users/"+name)
//     //     .then(resp => resp.json())
//     //     .then(user => {
//     //         localStorage.setItem("name", JSON.stringify(user))

//     //     })
//     //     .then(resp => history.push("/"))
//     // }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         fetch("http://localhost:3000/sessions", {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//                 accepts: "application/json"
//             },
//             body: JSON.stringify({
//                 password: password,
//                 email: email,
//             })
//         })
//             .then(resp => resp.json())
//             .then(resp => {
//                 if (resp.errors) {
//                     console.log("erorr")
//                 }
//                 else {
//                     localStorage.setItem("user_id", resp.id);
//                     history.push("/");
//                 }

//             })
            

//     }
//   }
// render() {
//     const { email, password} = this.state
// return (
//     <div className = "about-image"> 
//                   <img className = "about" src ="https://trek.scene7.com/is/image/TrekBicycleProducts/b300_mtbMarqueeImage?$responsive-pjpg$&cache=on,on&wid=1920"></img>
//                         <div className = "login-input">
    
//                         <form onSubmit={this.handleSubmit}>
//                       <input
//                             placeholder="Enter email address"
//                             type="email"
//                             name="email"
//                             value={email}
                        
//                             onChange={this.handleChange}
//                           />
//                           <br />
                          
//                           <input 
//                             placeholder="Enter password"
//                             type="password"
//                             name="password"
//                             value={password}
                           
//                             onChange={this.handleChange}
//                           />
//                           <br />
//                           <div className = "login-buton">
//                             <button type="submit" >Log In</button>
//                           </div>
//                         </form>
//                     </div>
    
//      </div>
          
       
        
          
//     );
//   }
// }
// export default Login;
import React, { Component } from 'react'
// import { useHistory } from 'react-router-dom';


// const history = useHistory();
class Login extends Component {
    
    state = {
        email: '',
        password: ''
    }


    handleChange = (event) => { this.setState ({[event.target.name]: event.target.value})
        
    }

    
    submitHandler = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/sessions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({
                password: this.state.password,
                email: this.state.email
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.errors) {
                    console.log("erorr")
                }
                else {
                    localStorage.setItem("user_id", resp.id);
                    //   debugger
                    this.props.history.push("/");
                }

            })
            

    }
   
    render(){
    
        return (
    
                <div>
                    <form onSubmit={this.submitHandler}>
                        
                            Email: 
                            <input placeholder="Enter Email" value = {this.state.email} name = "email" onChange={this.handleChange} />
                        
                           Password: 
                        <input placeholder="Enter Password" type = "password" value = {this.state.password} name = "password" onChange= {this.handleChange}/>
                    
                        <button >Log In</button>
                    </form>
                </div>
           
    )
}
}

export default Login;