import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
const TrailURL = "http://localhost:3000/trails"
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

export default class TrailForm extends Component{
    
    state = {
        name: '',
        description:'',
        length:'',
        difficulty:'',
        stars:'',
        high:'',
        location:'',
        low:'',
        image_url:'',
    
     }

    handleChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleSubmit = (e) => {
        e.preventDefault();
    
    fetch(TrailURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify ({
            name: this.state.name,
            description: this.state.description,
            length:this.state.length,
            difficulty:this.state.difficulty,
            stars:this.state.stars,
            high:this.state.high,
            low:this.state.low,
            comment:this.state.comment,
            location:this.state.location,
            image_url:this.state.image_url


        })
    })

        .then(resp => resp.json())
        .then ((data) => this.setState({
            trails: [this.state.trails, data]
        })
        )
        
        this.resetForm();
        // alert("Thank you for your contribution. Your trail has beed added")
        this.props.history.push('/')
    }

    resetForm = () => {
        this.setState({
        name: '',
        description:'',
        length:'',
        stars:'',
        difficulty:'',
        rating:'',
        high:'',
        low:'',
        image_url:'',
        location:''
        })

    }

    

    render(){
         console.log(this.state)

    return (
        <div className = "about-image">
        <img className = "about-create" src = "https://i.dmarge.com/2017/02/bontrager-960x580.jpg" />
        <div className = "about-form">
    <form onSubmit = {this.handleSubmit} >
            <label>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>           
            Trail Name: </Form.Label>
            <input type="text" size ="80" className = "form-control" name = "name" value = {this.state.name} placeholder = "Enter trail name" onChange = {this.handleChanged} />
            </Form.Group>
            <Form.Group>
            <Form.Label>
            Trail Image: </Form.Label>
            <Form.Control placeholder = "Upload trail image"  src = {this.state.image_url} name = "image_url" onChange = {this.handleChanged} />
            </Form.Group>
            <Form.Group>
            <Form.Label>
            Difficulty:</Form.Label>
            <div>
            <select className = "form-control" placeholder = "Select difficulty level" value = {this.state.difficulty} name = "difficulty" onChange = {this.handleChanged}>
            <option>Select difficulty level</option>
            <option>Easy</option>
            <option>Intermediate</option>
            <option>Hard</option>
            </select>
            </div>
            </Form.Group>
            <Form.Group>
            <Form.Label>
             Rating:</Form.Label>
            <select className = "form-control" placeholder = "Enter Rating" value = {this.state.stars} name = "stars" onChange = {this.handleChanged}>
            <option>Select your rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </Form.Group>
            <Form.Group>
            <Form.Label>
            Length: </Form.Label>
            <Form.Control type = "integer" name = "length" value = {this.state.length} placeholder = "Enter the distance" onChange = {this.handleChanged}/> 
            </Form.Group>
            <Form.Group>
            <Form.Label>
            Description: </Form.Label>
            <Form.Control type="text"  name = "description" value = {this.state.description} placeholder = "Enter the description" onChange = {this.handleChanged} />
            </Form.Group>
            <Form.Group>
            <Form.Label>
             High: </Form.Label>
            <Form.Control type="integer" name = "high"value = {this.state.high} placeholder = "Enter High" onChange = {this.handleChanged}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>
            Low:</Form.Label>
            <Form.Control type="integer" name = "low"value = {this.state.low} placeholder = "Enter Low" onChange = {this.handleChanged}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                                                  Submit
                                                        </Button>
         </label> 
            </form>
         </div>  
        </div>
    )
}
}
