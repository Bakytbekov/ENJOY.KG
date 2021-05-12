import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import Home from './components/Home';
/* CRUD*/
// import AddTopics from './components/AddTopics/AddTopics';
import Admin from './components/Admin/Admin';
import TodoList from './components/TopicList/TopicList';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CreditCard from './components/Payment/CreditCard';
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
import FormOrder from './components/FormOrder/FormOrder';
import Viza from './components/Viza/Viza';



const Routes = () => {

    return (
        
        <AuthContextProvider>
        <BrowserRouter>
            <Navbar />  
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/list" component={TodoList}/>
                <Route exact path="/details/:id" component={TopicDetails} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/payment" component={CreditCard}/>
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={SignIn} />
                {/* korzina */}
                <Route exact path="/cart" component={Cart} />
                {/* <Route exact path="/form-order" component={FormOrder}/> */}
                <Route exact path="/viza" component={Viza}/>
            </Switch>
            <Footer />
        </BrowserRouter>
        </AuthContextProvider>

    );
};

export default Routes;
