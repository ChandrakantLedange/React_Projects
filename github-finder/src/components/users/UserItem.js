import React from 'react'

// export class UserItem extends Component {
    // https://api.github.com/users
    // state = {
    //     id:'id',
    //     login:'mojombo',
    //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo"
    // }

//   render() {
//     const {login,avatar_url,html_url} = this.props.user;
//     return (
//       <div className='card text-center'>
//         <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/>
//         <h3>{login}</h3>
//         <div>
//             <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
//         </div>
//       </div>
//     )
//   }
// }


//stateless function component

const UserItem=(props)=>{
    const {login,avatar_url,html_url} = props.user;
    return (
      <div className='card text-center'>
        <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/>
        <h3>{login}</h3>
        <div>
            <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
        </div>
      </div>
    )
}
export default UserItem