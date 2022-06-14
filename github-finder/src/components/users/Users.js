import React, { Component } from 'react'
import { Spinner } from '../layout/Spinner'
import UserItem from './UserItem'
import PropTypes from 'prop-types';

class Users extends Component {
    static propTypes ={
        users: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    }
    
  render() {
    const {loading,users} = this.props;
    if(loading){
       return <Spinner/> 
    }else{
        return (
        <div style={userStyle}>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div> 
        )         
    }    
  }
}

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users