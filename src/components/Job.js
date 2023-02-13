import React from "react";
import { Card } from "react-bootstrap";
import allJobs from "../data/allJobs";

function Job(props) {
    const singleJob=allJobs.filter(job => job.name===props.name)[0] ;
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{singleJob.fullname} ({singleJob.name})</Card.Title>
                    <Card.Text>
                        {singleJob.type} Job
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Job;