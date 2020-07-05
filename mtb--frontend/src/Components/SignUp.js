import React, { Component } from 'react'
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

export default class SignUp extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        password_digest: '',
        image: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value})
    }

    SignUp = (event) => {
        event.preventDefault()
          fetch("http://localhost:3000/users", {
             method: "POST",
             headers: headers,
            body: JSON.stringify({
              name: this.state.name,
              password_digest: this.state.password_digest,
              image: this.state.image,
              email: this.state.email, 
              username:this.state.username
            })
        })
            .then(resp => resp.json())
            .then(resp =>this.props.history.push('/login'))
    }


    render() {
        // console.log(this.state)
        const {name,username,email,password_digest,image} = this.state
        return (
            <div>
                <form onSubmit = {this.SignUp}> 
                   Name: <input name="name" placeholder="Name" value={name} onChange={this.handleChange}/> <br />              
                   Username: <input name="username" placeholder="Username" value={username} onChange={this.handleChange}/> <br />
                   Email: <input name="email" placeholder="email" value={email} onChange={this.handleChange}/> <br />
                   password_digest: <input name="password_digest" placeholder="password_digest" type="password" value={password_digest} onChange={this.handleChange} /> <br />               
                   Image: <input name="image" placeholder="image" src={image} onChange={this.handleChange}/>  <br />
                   <button >SignUp</button> 
                </form>        
            </div>
        )
    }
}
