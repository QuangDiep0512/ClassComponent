import React from 'react';
import Ex2 from './Ex2';
import Addcomponent from './Addcomponent';
class Ex extends React.Component {
    state = {
        jobs: [
            {
                id: 1,
                title: 'JavaScript',
                salary: '200$'
            },
            {
                id: 2,
                title: 'PHP',
                salary: '200$'
            },
            {
                id: 3,
                title: 'Ruby',
                salary: '200$'
            }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            jobs: [...this.state.jobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.jobs
        currentJob = currentJob.filter((items) => items.id !== job.id)
        this.setState({
            jobs: currentJob
        })
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Addcomponent
                    addNewJob={this.addNewJob}
                />
                <Ex2
                    jobs={this.state.jobs}
                    deleteJob={this.deleteJob}
                />
            </div>
        )
    }
}

export default Ex;
