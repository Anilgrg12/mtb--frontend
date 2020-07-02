import React, { Component } from 'react'
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
        low:'',
        image_url:''
     }

    handleChanged = (event) => {
    //     if(event.target.name === 'image_url'){
    //         this.setState({
    //             [event.target.name]: event.target.files[0] 
    //     })
    // }
    //     else {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleSubmit = (e) => {
        e.preventDefault();
    
    fetch("http://localhost:3000/trails", {
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
            image_url:this.state.image_url


        })
    })

        .then(resp => resp.json())
        .then ((data) => this.setState({
            trails: [this.state.trails, data]
        })
        )
        
        this.resetForm();
        alert("Thanks for your contribution. Your Trail has beed added")
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
        image_url:''
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
            Trail Name: 
            <input type="text" name = "name" value = {this.state.name} placeholder = "Enter trail name" onChange = {this.handleChanged} />
            <br />
            <br />
            Trail Image:
            <input placeholder = "Upload trail image"  src = {this.state.image_url} name = "image_url" onChange = {this.handleChanged} />
            <br />
            <br />
            Difficulty:
            <select placeholder = "Select difficulty level" value = {this.state.difficulty} name = "difficulty" onChange = {this.handleChanged}>
            <option>Easy</option>
            <option>Intermediate</option>
            <option>Hard</option>
            </select>
            <br />
            <br />
            Rating:
            <select placeholder = "Enter Rating" value = {this.state.stars} name = "stars" onChange = {this.handleChanged}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            <br />
            <br />
            Length:
            <input type = "integer" name = "length" value = {this.state.length} placeholder = "Enter miles" onChange = {this.handleChanged}/> 
            <br />
            <br />
            Description:
            <input type="text"name = "description" value = {this.state.description} placeholder = "Enter the description" onChange = {this.handleChanged} />
            <br />
            <br />
            High:
            <input type="integer" name = "high"value = {this.state.high} placeholder = "Enter High" onChange = {this.handleChanged}/>
            <br />
            <br />
            Low:
            <input type="integer" name = "low"value = {this.state.low} placeholder = "Enter Low" onChange = {this.handleChanged}/>
            </label>
            <br/>
            <br />
            <input type="submit" value="Submit" onSubmit = {this.handleSubmit} />
            </form>
         </div>   
        </div>
    )
}
}
