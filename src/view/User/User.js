import React from "react";
import axios from "axios"
import './User.scss';
import { withRouter } from "react-router-dom"

class User extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=1");
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleClickUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state
        return (
            <div className="content">
                <p>List Users</p>
                {
                    listUsers.map((items, index) => {
                        return (
                            <div className="listUser" key={index} onClick={() => this.handleClickUser(items)}>
                                {items.id} - {items.email} -{items.first_name + items.last_name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default withRouter(User);