// import React from 'react';
// import { useHistory } from 'react-router-dom';
import React, { Component } from 'react'

class Trails extends Component {
    
    
      handleTrail = (e) => {
            e.preventDefault()
            let user_id = localStorage.getItem("user_id")
            let trail_id = this.props.trail.id
            // debugger
    
            fetch("http://localhost:3000/fav_trails/", { 
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ 
                user_id: user_id,
                trail_id: trail_id
            })
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
        
        
        }
    render() {
        console.log("ghnata",this.props)
        const {id, name,difficulty,length,image_url} = this.props.trail
     return (
        <div className = "Trail-card">
        <img className = "image" src = {image_url} alt = {name}></img>
        Name: {name} <br />
        Difficulty: {difficulty} <br />
        Length: {length}
        <button className = "button" onClick = {() => this.props.history.push(`/trails/${id}`)}> Details </button>
        <button onClick = {this.handleTrail}>💚</button>
        <button className = "delete" onClick = {()=> this.props.deleteHandler(id)}>❌</button>

        </div>

    )
}
}
export default Trails;
