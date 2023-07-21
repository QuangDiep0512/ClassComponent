import React from 'react';
import Color from '../example/Color';
import { connect } from 'react-redux';
class Home extends React.Component {
    handleDeleteUser = (users) => {
        // console.log(users)
        this.props.deleteRedux(users);
    }
    handleAdd = () => {
        this.props.createRedux();
    }
    render() {
        console.log(this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <div style={{ textAlign: 'center' }}>
                <div>Welcome to REACTJS</div>
                <div>
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index) => {
                            return (
                                <div key={user.id}>
                                    {index + 1}- {user.name} <span onClick={() => { this.handleDeleteUser(user) }}>x</span>
                                </div>

                            )
                        })
                    }
                </div>
                <button onClick={() => this.handleAdd()}>Add User</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));