import React from 'react';
import './Todo.scss';
import FormTodo from './FormTodo'
import { toast } from 'react-toastify';
import Color from '../example/Color';

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 1, title: 'JavaScript' },
            { id: 2, title: 'PHP' },
            { id: 3, title: 'ReactJS' },
        ],
        listEdit: {}
    }

    addJob = (job) => {
        this.setState({
            listTodo: [...this.state.listTodo, job]
        })
    }

    handleClickDelete = (todo) => {
        let listJob = this.state.listTodo;
        let currentTodo = listJob.filter((items) => items.id !== todo.id)
        this.setState({
            listTodo: currentTodo
        })

        toast.success('Delete Successful!!!')
    }

    handleClickEdit = (todo) => {
        let { listEdit, listTodo } = this.state
        let emptyObject = Object.keys(listEdit).length === 0

        if (emptyObject === false && listEdit.id === todo.id) {
            let listEditCoppy = [...listTodo]
            let objIndex = listEditCoppy.findIndex((items => items.id === todo.id))
            listEditCoppy[objIndex].title = listEdit.title
            this.setState({
                listTodo: listEditCoppy,
                listEdit: {}
            })
            toast.success('Edit Successfull!!!')
            return;
        }

        this.setState({
            listEdit: todo
        })
    }

    handleOnchange = (event) => {
        let listEditCoppy = { ...this.state.listEdit }
        listEditCoppy.title = event.target.value
        this.setState({
            listEdit: listEditCoppy
        })
    }

    render() {
        let { listTodo, listEdit } = this.state
        let emptyObject = Object.keys(listEdit).length === 0
        return (
            <div className='formTodo'>
                <FormTodo
                    addJob={this.addJob}
                />
                {
                    listTodo.map((items, index) => {
                        return (
                            <div className='listTodo ' key={index} >
                                <ul>
                                    <li>
                                        <div className='listTitle'>
                                            {
                                                emptyObject ?
                                                    <div>
                                                        <span>
                                                            {index + 1} - {items.title}
                                                        </span>
                                                    </div>
                                                    :
                                                    <div className='inputtxt'>
                                                        {listEdit.id === items.id ?
                                                            <span>
                                                                {index + 1}<input type="text" value={listEdit.title}
                                                                    onChange={(event) => this.handleOnchange(event)}
                                                                />
                                                            </span>
                                                            :
                                                            <span>
                                                                {index + 1} - {items.title}
                                                            </span>
                                                        }
                                                    </div>
                                            }
                                            <div className='listBtn'>
                                                <span>
                                                    <button onClick={() => this.handleClickEdit(items)}>
                                                        {emptyObject === false && listEdit.id === items.id ?
                                                            'Save' : 'Edit'

                                                        }
                                                    </button>
                                                    <button onClick={() => { this.handleClickDelete(items) }}>
                                                        Delete
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}

export default Color(ListTodo);