import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


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

                <div key={dish.comments.id}>
                    <h1>Comments</h1>
                    {dish.comments.map((comment) => 
                        <ListGroup className="col-12 col-md-5 m-1">
                           
                            <ListGroupItem>{comment.comment}</ListGroupItem>
                            <ListGroupItem>--{comment.author},{comment.date}</ListGroupItem>
                        </ListGroup>
                    )}
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
            {RenderDish(props.dish)}
            {RenderComments(props.dish)}

        </div>
    );
    
}

export default DishDetail;