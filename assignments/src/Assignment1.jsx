//Assignment 1
import { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this.changeName = this.changeName.bind(this); // bound changeName() to component
    }

    // Incorrect function
    changeName() {
        this.setState({ name: 'Charlie' }); // changed to setState() so that this.changeName would properly function
    }

    render() {
        const name = this.state.name //added constant for the state
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}
export default UserProfile;