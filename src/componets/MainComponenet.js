import React from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponenet';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import '../App.css';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }






    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>

                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>


                <Footer />

            </div>
        );
    }
}

export default Main;
