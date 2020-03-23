import React, {Component} from 'react';
import {Card,CardBody,CardText,CardImgOverlay,CardImg,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish : null

        }
    }

    onDishselect(dish){
        this.setState({
            selectedDish :dish
        });
    }

   

    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>{
                        this.onDishselect(dish);
                    }}>
                        <CardImg  width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay >
                                <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        
                    </Card>
                    
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail dish={this.state.selectedDish} />
                    
                    
                </div>
            </div>
        );
    }
}

export default Menu;