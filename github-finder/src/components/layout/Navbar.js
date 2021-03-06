import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    // defualt props
    static defaultProps={
        title :'Github Finder',
        icon:'fab fa-github'
    };

    //propTypes
    static propTypes ={
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                <i className={this.props.icon}></i> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar