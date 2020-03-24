import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishselect(dish) {
        this.setState({
            selectedDish: dish
        });
    }





    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">confusion</NavbarBrand>
                    </div>
                </Navbar>

                <Menu dishes={this.state.dishes}
                    onClick={(dish) => {this.onDishselect(dish); }}/>
                <DishDetail
                     dish={this.state.selectedDish} />

            </div>
        );
    }
}

export default Main;
