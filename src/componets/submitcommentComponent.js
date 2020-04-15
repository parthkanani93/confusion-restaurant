import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Label, ModalBody, ModalHeader, Input } from 'reactstrap'

export default class Submitcomment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            name:'',
            comment:'',
            rating:''

        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
      this.toggleModal();
      this.props.addComment(this.props.dishId,event.rating,event.author,event.comment);
    }



    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-write fa-lg"></span>Submit Comment
              </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Rating</Label>
                                <Input type="select" name="select" id="exampleSelect" value={this.state. rating}
                                onChange={this.handleInputChange}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <Input type="text" id="name" name="name" value={this.state.name}
                                    placeholder="Your name" onChange={this.handleInputChange}  />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Comment</Label>
                                <Input type="textarea" name="comment" id="comment"
                                value={this.state.comment} onChange={this.handleInputChange}/>
                            </FormGroup>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
