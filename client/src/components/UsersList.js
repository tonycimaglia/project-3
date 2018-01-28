import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class UsersList extends Component {
    render() {
        return(
            <div>
                {<h1>Users:</h1> }
                <div>
                    {this.props.users.map((user) => {
                        return (
<div key={user._id}>
    <Link to={`/users/${user._id}`}>{user.userName}</Link>
</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default UsersList