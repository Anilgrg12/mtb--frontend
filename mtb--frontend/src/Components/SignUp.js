import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
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
                <div class="form-group">
                     <label for="inputdefault">Name</label>
                         <input className ="form-control" id="inputdefault" name="name" type="text" placeholder="Name" value={name} onChange={this.handleChange} />
                  </div>

                  <div class="form-group">
                     <label for="inputdefault">Username</label>
                         <input className ="form-control" id="inputdefault" name="username" type="text" placeholder="Username" value={username} onChange={this.handleChange} />
                  </div>

                  <div class="form-group">
                     <label for="inputdefault">Email</label>
                         <input className ="form-control" id="inputdefault" name="email" type="text" placeholder="Email" value={email} onChange={this.handleChange} />
                  </div>

                  <div class="form-group">
                     <label for="inputdefault">Password</label>
                         <input className ="form-control" id="inputdefault" name="password_digest" type="password" placeholder="Password" value={password_digest} onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                     <label for="inputdefault">Image</label>
                         <input className ="form-control" id="inputdefault" name="image" placeholder="image url" src={image} onChange={this.handleChange} />
                  </div>
                  <Button variant="primary" type="submit">
                                                  Submit
                                                        </Button> 
                </form>        
            </div>
        )
    }
}
