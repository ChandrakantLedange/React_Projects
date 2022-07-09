import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';


class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }
  // async componentDidMount(){
  //   this.setState({loading:true});
  //   const res = await axios.get('https://api.github.com/users');
  //   this.setState({users:res.data,loading:false});
  //   console.log("data:",res.data)
  // }

  //Search Github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`);

    this.setState({ users: res.data.items, loading: false });
    console.log("data:", res.data.items);
  }
  //clearUsers
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  }
  //set alert 
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg: msg, type: type }
    })

    setTimeout(() => {
      this.setState({ alert: null })
    }, 2000);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={this.state.loading} users={this.state.users} />
               
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
