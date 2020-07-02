import React, { Component } from 'react'

export default class ProfilePage extends Component {
    state = {
        user: ''
    }

    componentDidMount(){
        let userId = 1
        // let userId = localStorage.getItem("user_id");
        fetch(`http://localhost:3000/users/${userId}`)
        .then(response => response.json())
        .then(profile => this.setState({
          user: profile.user
        }))
    }
    render() {
        console.log("mujiii",this.state)
        return (
            <div>
              <img src = {this.state.user.image} /> <br />
               Name: {this.state.user.name} Gurung <br />
               Age: 25 <br />
               Email address: {this.state.user.email} <br />
               Location: NewYork <br />
               Short Bio: I Love Mountain Biking!!!!!!!!!! <br />
            </div>
        )
    }
}
