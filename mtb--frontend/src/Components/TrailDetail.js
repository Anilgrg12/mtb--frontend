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
                                 <Carousel >  
                                     <Carousel.Item>  
                                            <img style={{"height":"410px","width":"600px"}}  
                                                 src={image_url} />
                                      </Carousel.Item  >  
                                            <Carousel.Item >  
                                                 <img style={{"height":"410px","width":"600px"}}  
                                                    src="https://cdn2.apstatic.com/photos/mtb/7020598_medium_1554927540.jpg"/>  
                                            </Carousel.Item>  
                                    <Carousel.Item >  
                                        <img style={{'height':"410px","width":"600px"}}  
                                            src="https://cdn2.apstatic.com/photos/mtb/7005240_medium_1554822697.jpg"  />  
                                    </Carousel.Item>  

                                    <Carousel.Item >  
                                        <img style={{'height':"410px","width":"600px"}}  
                                            src="https://cdn2.apstatic.com/photos/mtb/7013398_medium_1554845747.jpg"  />  
                                    </Carousel.Item>  
                                </Carousel>  
                </div>
                <div className = "player">
              <ReactPlayer width={600}
              url = "https://www.youtube.com/watch?v=cjnleymxcUk&t=3s"/>
              </div>
              </td>
              <div>
              <td className = "detailed-text">
              <div>Name: {name}</div> 
              <div>Difficulty: {difficulty}</div>
              <div className="detail-description">Description: {description} </div>
              <div>Elevation: <br />
                  High: {high} <br/>
                  Low: {low}
              </div>
              <div>State: {location} </div>
              <div>Address: 200-298 W 3rd St, Salida, CO 81201</div>
              <div>Rating: {stars}</div>
             
              {/* <div>Reviews: {comment}</div> */}
             <div>Reviews: </div>
              {this.state.reviews.map(review => <div>-{review.opinion}</div>)}
             
              Add Reviews:  <input onChange = {this.commentChange} name = "opinion" value={this.state.opinion} placeholder = "Enter review here" />
              <button className = "detail-button" onClick = {this.handledSubmit}>Submit</button>
              </td >
              </div>
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
