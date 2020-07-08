import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import {Form,Button} from 'react-bootstrap'

export default class Contact extends Component {

    state = {
        userEmail: '',
        emailTitle: '',
        emailDetails: ''
    }

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value})
    }

    handleSubmit = (e)  => {
        e.preventDefault();
        emailjs
             .sendForm(
                 "gmail",
                 "aniltemplate",
                 ".contact-form-class",
                 "user_rbw9QiDYDAcStUmkBZnG3"
                 )
                 
                 this.setState({
                     userEmail: '',
                     emailTitle: '',
                     emailDetails:''
                 })
                  alert("Thank You. We will get back to you as soon as possible")
             
            }
        
        
             
             
             //  .then()
             //  .catch();
        // alert("Thank You. We will get back to you as soon as possible")
   

    render() {
        const {userEmail, emailTitle, emailDetails} = this.state
        return (
            <div id = "contact">
            {/* document.body.style.backgroundColor = "white" */}
              <Form className = "contact-form-class" onSubmit = {this.handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <br/>
                    <br/>
                    <br />
                 <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value = {userEmail} placeholder="Enter email" name = "userEmail" onChange = {this.handleChange}/>
                        <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                             </Form.Text>
                        </Form.Group>

                                 <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Subject</Form.Label>
                                                  <Form.Control type="title" value ={emailTitle} placeholder="Title" name = "emailTitle" onChange={this.handleChange} />
                                                          </Form.Group>
                                                
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Details</Form.Label>
                                                        
                                                       <Form.Control as="textarea" rows="5"  placeholder="Description in detail" value= {emailDetails} name = "emailDetails" onChange = {this.handleChange} />
                                                    </Form.Group>
                                                
                                            <br />
                                             <Button variant="primary" type="submit">
                                                  Submit
                                                        </Button>
                                                                    </Form>
                
            </div>
        )
    }
}
