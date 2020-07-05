import React, { Component } from 'react'
import ReactPlayer from "react-player"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Trails from './Trails';
const TrailAPI = "http://localhost:3000/trails"

export default class TrailDetail extends Component {
    state = {
        trail: null,
        opinion: '',
        reviews: []    
    }

    commentChange = (event) => {this.setState({
        [event.target.name]: event.target.value})
    }
    
    
    handledSubmit=(e)=> {
        e.preventDefault()
        console.log("hellooo", this.state)
        let user_id = localStorage.getItem("user_id")
        let id = this.props.match.params.id
     fetch('http://localhost:3000/reviews', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
                user_id: user_id,
                trail_id: id,
                opinion: this.state.opinion,

            }) 
        })
        .then(resp =>resp.json())
        // .then(data =>console.log(data))
        .then(review => this.setState({reviews: [...this.state.reviews,review]}))
        // .then(data => this.setState({review: '', reviews:[...this.state.reviews,data]}))
        // .then(this.setState({
            
            //    reviews:'',
            // }))
            .then(this.setState({
                
                opinion:''
             }))
        }
    

    
    componentDidMount() {
        
        let id = this.props.match.params.id
        fetch(`${TrailAPI}/${id}`)
        .then(resp => resp.json())
        .then(trail => {
            this.setState({trail})
            this.setState({reviews: trail.reviews})

    })
     
}


    
    renderTrail = () => {

        console.log(this.state)

        const{name,difficulty,description,length,high,low,location,comment,stars,image_url,reviews} = this.state.trail
            return (
                <div className= "detailed-page">
                     <table>
                         <tr>
                             <td>
                                <div> 
                                 <Carousel>  
                                     <Carousel.Item>  
                                            <img style={{"height":"410px","width":"595px"}}  
                                                 src={image_url} />
                                      </Carousel.Item  >  
                                            <Carousel.Item >  
                                                 <img style={{"height":"410px","width":"595px"}}  
                                                    src="https://images.unsplash.com/photo-1548422392-679e1fc2eba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1984&q=80"/>  
                                            </Carousel.Item>  
                                    <Carousel.Item >  
                                        <img style={{'height':"410px","width":"595px"}}  
                                            src="https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_auto,f_auto/redbullcom/2016/02/16/1331777047411_1/a-pair-of-mountain-bikers-riding-in-the-dolomites-range-in-north-eastern-italy"  />  
                                    </Carousel.Item>  
                                </Carousel>  
                </div>
              <ReactPlayer 
              url = "https://www.youtube.com/watch?v=kzsK8_N5hHs"/>
              </td>
              <td className = "detailed-text">
              <div>Name: {name}</div> 
              <div>Difficulty: {difficulty}</div>
              <div>Description: {description} </div>
              <div>Elevation: <br />
                  High: {high} <br/>
                  Low: {low}
              </div>
              <div>Location: {location} </div>
              <div>Rating: {stars}</div>
              {/* <div>Reviews: {comment}</div> */}
             <div>Reviews: </div>
              {this.state.reviews.map(review => <div>-{review.opinion}</div>)}
             
              Add Reviews:  <input onChange = {this.commentChange} name = "opinion" value={this.state.opinion} placeholder = "Enter review here" />
              <button onClick = {this.handledSubmit}>Submit</button>
              </td >
              </tr>
              </table>
          </div>
        )
    }

    render() {
        return (
            this.state.trail ? this.renderTrail() : <div> No Trail Selected</div>
        )
        
        
    }
}
