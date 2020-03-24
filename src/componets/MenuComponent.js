import React from 'react';
import {Card,CardImgOverlay,CardImg,CardTitle} from 'reactstrap';


function Menu(props) {

    const menu = props.dishes.map((dish)=>{
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>props.onClick(dish)}>
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
        </div>
    );

    
}

export default Menu;