import React from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import '../App.css'

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
               
                <Header/>
                <Menu dishes={this.state.dishes}
                    onClick={(dish) => {this.onDishselect(dish); }}/>
                <DishDetail
                     dish={this.state.selectedDish} />
                <Footer/>

            </div>
        );
    }
}

export default Main;
