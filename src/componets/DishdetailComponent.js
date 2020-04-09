import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, ListGroup, ListGroupItem, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import Submitcomment from './submitcommentComponent'


function RenderDish(dish) {
    if (dish !== null) {
        return (
            <Card className="col-12 col-md-5 m-1">
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>

                </CardBody>

            </Card>

        );

    }
    else {
        return (
            <div></div>
        );
    }

}

function RenderComments(dish) {
    if (dish !== null) {
        return (
            <div>
                <div key={dish.id} >
                    <h1>Comments</h1>
                    {dish.map((comment) =>
                        <React.Fragment>
                            <ListGroup  >

                                <ListGroupItem>{comment.comment}</ListGroupItem>
                                <ListGroupItem>--{comment.author},{comment.date}</ListGroupItem>
                            </ListGroup>
                            
                        </React.Fragment>
                    )}
                    <Submitcomment />



                </div>
            </div>

        );

    }
    else {
        return (
            <div></div>
        );
    }
}



function DishDetail(props) {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>

                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {RenderDish(props.dish)}
                {RenderComments(props.comments)}
            </div>

        </div>
    );

}

export default DishDetail;