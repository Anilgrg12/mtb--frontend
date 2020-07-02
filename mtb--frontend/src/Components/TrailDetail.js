import React, { Component } from 'react'
const TrailAPI = "http://localhost:3000/trails"

export default class TrailDetail extends Component {
    state = {
        trail: null,
        comment: ''
    }

    commentChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   
    handledSubmit=(e)=>{
        e.preventDefault()
     const{comment}=this.state
        fetch(TrailAPI,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
                
                comment
            }) 
        })
        .then(this.setState({
            
            comment:'',
        }))
        .then(this.fetchComments)
    }
    fetchComments=()=>{
        fetch(TrailAPI)
        .then(resp=>resp.json())
        .then(data=>this.setState({posts:data}))
    }
        componentDidMount(){
           this.fetchComments()
        }
    


    
    componentDidMount() {
        
        // debugger
        // let id = 3
        let id = this.props.match.params.id
        fetch(`${TrailAPI}/${id}`)
        .then(resp => resp.json())
        .then(trail => this.setState({trail}))
    }
    
    renderTrail = () => {

        console.log(this.state)

        const{name,difficulty,description,length,high,low,location,comment,stars,image_url} = this.state.trail
       
        return (
          <div>
              <div> <img className = "detail-page" src = {image_url} /> </div>
              <div>Name:{name}</div> 
              <div>Difficulty:{difficulty}</div>
              <div>Description:{description} </div>
              <div>Elevation: <br />
                  High: {high} <br/>
                  Low: {low}
              </div>
              <div>Location: {location} </div>
              <div>Rating: {stars}</div>
              <div>Reviews: {comment}</div>
              Add Reviews:  <input onChange = {this.commentChange} name = "comment" value={this.state.comment} placeholder = "Enter review here" />
              <button onSubmit = {this.handledSubmit}>Submit</button>
          </div>
        )
    }

    render() {
        return (
            this.state.trail ? this.renderTrail() : <div> No Trail Selected</div>
        )
        
        
    }
}
