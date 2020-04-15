import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Label,
    Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }
    handleSubmitComment(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" xs={12}>
                                    Rating
                </Label>
                                <Col xs={12}>
                                    <Control.select
                                        model=".rating"
                                        name="rating"
                                        id="rating"
                                        className="form-control"
                                        defaultValue="1"
                                    >
                                        <option selected>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="username" xs={12}>
                                    Your name
                </Label>
                                <Col xs={12}>
                                    <Control.text
                                        model=".username"
                                        id="username"
                                        name="username"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" xs={12}>
                                    Comment
                </Label>
                                <Col xs={12}>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        name="comment"
                                        rows="6"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs={12}>
                                    <Button type="submit" color="primary">
                                        Submit
                  </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function RenderComments({ comments,addComment, dishId }) {
    return (
        <div className="col-12 col-md-5 m-1">
            {comments && (
                <>
                    <h4> Comments </h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>
                                        --{comment.author},{' '}
                                        {new Intl.DateTimeFormat('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                        }).format(new Date(Date.parse(comment.date)))}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
            <CommentForm dishId={dishId} addComment={addComment} />
        </div>
    );
}

const Dishdetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Dishdetail;
