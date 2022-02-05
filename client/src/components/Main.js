import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Profile from './Profile';
import List from './List'

const style = {
    marginRight: 10,
    color: 'black'
};
const color = {
    color: 'black',
    textDecoration: 'none'
};
class Main extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                        <i className="navbar-brand pl-2">KBS INVENTORY</i>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <button className="nav-item nav-link btn btn-warning" style={style}><Link style={color} to="/">Profile</Link></button>
                                <button className="nav-item nav-link btn btn-warning"><Link style={color} to="/list">List of cars</Link></button>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Profile />}></Route>
                            <Route exact path="/list" element={<List />}></Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Main;