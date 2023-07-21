import React from 'react';
import { toast } from 'react-toastify';

class FormTodo extends React.Component {
    state = {
        title: ""
    }

    onChangeTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAdd = () => {
        if (!this.state.title) {
            toast.error('Not be empty!!!')
            return;
        }
        let add = {
            id: Math.floor(Math.random() * 10),
            title: this.state.title
        }
        this.props.addJob(add)

        toast.success('Insert Successfull!!!')

        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div className='forminput'>
                <input type="text" className='iputtxt1' title=''
                    onChange={(event) => this.onChangeTodo(event)}
                />
                <input type="button" value="Add" className='iputtxt2'
                    onClick={() => this.handleClickAdd()}
                />
            </div>
        )
    }
}

export default FormTodo;