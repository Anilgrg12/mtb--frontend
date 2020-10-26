import React, { Component } from 'react'
import FavoriteCard from './FavoriteCard'
const TrailURL = "http://localhost:3000/trails"
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

export default class Favorite extends Component {
    
    state = {
        myFavs: []

    }
    componentDidMount() {
        document.body.style.backgroundColor = "black"
        let userId = localStorage.getItem("user_id");
       console.log("lado",this.state.myFavs)
        fetch(`http://localhost:3000/users/${userId}/add_trail`)
            .then(resp => resp.json())
            .then(data => this.setState({
                myFavs: data
            }))
    }

    deleteHandler = (e, trail_id) => {
        e.preventDefault()
         
        fetch(`http://localhost:3000/trails/${trail_id}`, { 
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify({ 
            trail_id: trail_id
        })
    })
        .then(resp => resp.json())
        .then(resp => {
            function filterFunction(trail) {
                return (trail.id != trail_id);
            }
            let filteredTrails = this.state.myFavs.filter(filterFunction);
            this.setState({
                myFavs: filteredTrails
            })
        })
    }
    
    // deleteHandler = (id) => {
    //     fetch(TrailURL + "/" + id, {
    //       method: "DELETE",
    //       headers: headers,
    //     })

    //       .then(
    //         this.setState({
    //           myFavs: this.state.myFavs.filter((trail) =>
    //             trail.id === id ? null : trail
    //           ),
    //         })
    //       )

    //       .catch((err) => console.log(err));
    //   };

    render() {
    
        console.log('mujiiii',this.state)
        return (
            <div>
                {this.state.myFavs.map((trail) => <FavoriteCard trail= {trail} deleteHandler = {this.deleteHandler} />
                    
                )}
            </div>
        )
    }
}


