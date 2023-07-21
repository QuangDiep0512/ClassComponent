import React, { Component } from 'react';

class Addcomponent extends Component {
    state = {
        title: '',
        salary: '',
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleOnclick = () => {
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
    }

    render() {
        // let { title, salary } = this.state
        return (
            <>
                <form >
                    <label htmlFor="fname">Job:</label><br />
                    <input type="text"
                        value={this.state.title}
                        onChange={(e) => this.handleTitle(e)}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text"
                        value={this.state.salary}
                        onChange={(e) => this.handleSalary(e)}
                    /><br />
                    <input type="button" value="Submit" onClick={() => this.handleOnclick()} />
                </form >
                {/* <p>Hoc ngon ngu {title} , hoc phi la {salary}</p> */}
            </>
        )
    }
}



export default Addcomponent;