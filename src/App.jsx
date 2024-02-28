import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import './App.css;';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Switch>
                    <Route path='/portfolio' component={PortfolioPage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/resume' component={ResumePage} />
                    <Route path='/' component={AboutMePage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;