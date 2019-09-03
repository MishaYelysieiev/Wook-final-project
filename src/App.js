import React from 'react';
import {Link,Route} from "react-router-dom";
import {connect} from 'react-redux';
import {reducer as formReducer} from 'redux-form';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import CategorySection from './components/CategorySection/CategorySection';

import SubscribeSection from './components/SubscribeSection/SubscribeSection';


import './App.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <Route exact path='/' component={HomePage}/>
            <Route path='/category/' component={CategorySection}/>

            //PLACE FOR ALL ROUTES
             <SubscribeSection/>
                
            //PLACE FOR THE FOOTER SECTION
        </div>
    );
}

export default App;
