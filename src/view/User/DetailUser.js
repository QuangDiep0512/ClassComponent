import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handleClickBack = () => {
        this.props.history.push('/user')
    }
    render() {
        let { user } = this.state
        let emptyObject = Object.keys(user).length === 0
        return (
            <div>
                {
                    emptyObject === false &&
                    <div>
                        <p>Username: {user.first_name}{user.last_name}</p>
                        <p>Email: {user.email}</p>
                        <div>
                            <img src={user.avatar} alt="" />
                        </div>
                        <button name="button" type="button" onClick={() => this.handleClickBack()}>Back</button>
                    </div>
                }
            </div >
        )
    }
}

export default withRouter(DetailUser)