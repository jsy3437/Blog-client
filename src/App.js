import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import BlogList from './pages/BlogList/BlogList';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/list" component={BlogList} />
					<Route exact path="/detail" component={BlogDetail} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
