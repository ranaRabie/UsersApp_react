import React, { Component } from 'react';
import axios from 'axios';
let list = [];
class Welcome extends Component{
    constructor(props) {
        super(props);
        this.state = {users: [], viewInterestsList: [], noUsers: false};
    }
    componentDidMount() {
        this.getUsers();
    }
    // componentDidUpdate() {
    //   if(this.state.users.length === 0){
    //     this.state.noUsers = true;
    //     this.setState({noUsers: this.state.noUsers});
    //   }
    // }
    getUsers(){
        axios.get('/users.json')
          .then(response => {
            this.setState({users: response.data});
            this.calculateFollowersNumber();
            this.getInterests();
            this.sortUsers();
          })
          .catch(error => {
            console.log(error);
        });
    }
    getOccurrence(array, value) {
        return array.filter((v) => (v === value)).length;
    }
    calculateFollowersNumber(){
        let followers = this.state.users.map((user) => user.following).flat();
        let users = [...this.state.users];
        for(let i = 0; i < users.length; i++){
          let followersNum = this.getOccurrence(followers, this.state.users[i].id);
          let user = {...users[i]};
          user.followersCounetr = followersNum;
          users[i] = user;
          this.setState({users: users});
        }
    }
    sortUsers(){
        this.state.users.sort(function (a, b) {
          return b.followersCounetr - a.followersCounetr;
        });
        this.setState({users: this.state.users});
    }
    getInterests(){
        axios.get('/interests.json')
          .then(response => {
                let interests = response.data;
                let usersArr = this.state.users;
                for(let i = 0; i < usersArr.length; i++){
                  if(usersArr[i].interests){
                    for(let x = 0; x < interests.length; x++){  
                        for(let y = 0; y < usersArr[i].interests.length; y++){
                            if(usersArr[i].interests[y] === interests[x].id){
                                usersArr[i].interests[y] = interests[x].name;
                                this.setState({users: this.state.users});
                            }
                        }
                      }
                  }  
                }
          })
          .catch(error => {
            console.log(error);
        });
    }
    viewInterests(userId){
        if(list.includes(userId)){
          let idIndex = list.indexOf(userId);
          list.splice(idIndex, 1);
          this.setState({viewInterestsList: list});
        }else{
          list.push(userId);
          this.setState({viewInterestsList: list});
        }
    }
    deleteInterests(userId, userIndex){
        for(let i = 0; i < this.state.users.length; i++){
          if(this.state.users[i].id === userId){
            delete this.state.users[i].interests;
            this.setState({users: this.state.users});
            let index = list.indexOf(userIndex);
            list.splice(index, 1);
            this.setState({viewInterestsList: list});
          }
        }
    }
    deleteUser(userId){
        for(let i = 0; i < this.state.users.length; i++){
          if(this.state.users[i].id === userId){
            let index = this.state.users.indexOf(this.state.users[i]);
            this.state.users.splice(index, 1);
            this.setState({users: this.state.users});
            if(list.includes(userId)){
              let idIndex = list.indexOf(userId);
              list.splice(idIndex, 1);
              this.setState({viewInterestsList: list});
            }
          }
        }
      }

    render() {
        return (
          <div>
            <h1>Users</h1>
            <ul>
              {this.state.users.length > 0 ? '' : <li className="user-item no-user">no users found</li>}
              {this.state.users.map((user, usrIndex) => {
                return <li key={usrIndex} id={user.id} className="user-item">
                    <div className="user-head">
                      <h2>{user.name}</h2>
                      <p>Followers: {user.followersCounetr}</p>
                      {user.interests
                      ? <div className="interests-wrapper">
                        <div  className={"interests-list " + (this.state.viewInterestsList.includes(user.id) ? 'show' : 'hide')}>
                          {user.interests.map((interestItem, interestIndex) => {return <span className="interest-item" key={interestIndex}>{interestItem}</span>})}
                          <button onClick={() => this.deleteInterests(user.id, usrIndex)} className="link danger-link">Delete Interests</button>
                        </div>
                        </div>    
                      : ''
                      }
                    </div>
                    <div className="user-footer">
                      {user.interests
                      ? <button onClick={() => this.viewInterests(user.id)} className="btn dark-btn">
                        {this.state.viewInterestsList.includes(user.id) ? 'hide interests' : 'view interests'}
                        </button>    
                      : ''
                      }
                      <button onClick={() => this.deleteUser(user.id)} className="btn danger-btn">delete user</button>
                    </div>
                </li>
              })}
            </ul>
          </div>
        );
    }
}

export default Welcome;