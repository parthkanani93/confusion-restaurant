import React from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponenet';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';




const mapStoretoProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
}


}

class Main extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        const HomePage = () => {
            return (
                <Home dishes={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotions={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
            );
        }

        const DishWithId = ({ match }) => {
            return (

                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );


        }
        return (
            <div>

                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>


                <Footer />

            </div>
        );
    }
}

export default withRouter(connect(mapStoretoProps)(Main));
