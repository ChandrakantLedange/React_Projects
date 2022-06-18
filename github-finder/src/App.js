import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';


class App extends React.Component {
  state = {
    users:[],
    loading:false
  }
  async componentDidMount(){
    this.setState({loading:true});
    const res = await axios.get('https://api.github.com/users');
    this.setState({users:res.data,loading:false});
    console.log("data:",res.data)
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className='container'>
        <Search/>
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
 
}

export default App;
