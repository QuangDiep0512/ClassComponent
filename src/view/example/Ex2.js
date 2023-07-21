import React from 'react';

class Ex2 extends React.Component {
    state = {
        showJob: true
    }
    handleShowjob = (status) => {
        this.setState({
            showJob: status
        })
    }

    handleDeletejob = (job) => {
        this.props.deleteJob(job)
    }

    render() {
        let { jobs } = this.props
        let { showJob } = this.state
        return (
            <>
                {showJob && <button onClick={() => this.handleShowjob(false)}>Show</button>}

                {showJob === false &&
                    <>
                        {jobs.map((job) => {
                            return (
                                <div key={job.id}>
                                    {job.title} - {job.salary} <span onClick={() => this.handleDeletejob(job)}> X </span>
                                </div>
                            )
                        })}
                        < button onClick={() => this.handleShowjob(true)} > Hide</button>
                    </>}
            </>
        )
    }
}


export default Ex2;
