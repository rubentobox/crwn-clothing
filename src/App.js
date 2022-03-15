import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
        })
    }

    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<HomePage />} />
                        <Route path='shop' element={<ShopPage />} />
                        <Route path='sign-in' element={<SignInAndSignUpPage />} />
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default App;