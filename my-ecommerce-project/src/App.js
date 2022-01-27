import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductContextProvider from './Global/productContext';
import CartContextProvider from './Global/cartContext';
import Footers from './components/Footers';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavbarUpdate from './components/NavbarUpdate';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';


function App() {
	const fetchUsers = async () => {
		try {
			const res = await fetch('/.netlify/functions/users');
			const data = await res.json();
			console.log('res: ', data);
		} catch (error) {
			console.log('your errors: ', error);
		}
	};
	useEffect(() => {
		fetchUsers();
	}, []);
	return (
		<>
		<div>
			
				<CartContextProvider>
					<Router>
						<NavbarUpdate />
						<Switch>
							<Route path='/' exact component={Products} />
							<Route path='/cart' exact component={Cart} />
							<Route path = "/SignUp" exact component = {SignUp} />
                            <Route path = "/Login" exact component = {Login} />
							<Route path = "/Men" exact component = {Men} />
							<Route path = "/women" exact component = {Women} />
							<Route path = "/Kids" exact component = {Kids} />
							
						</Switch>
					</Router>
				</CartContextProvider>
		
			
			<Footers />
		</div>
		
		</>
	);
}

export default App;
