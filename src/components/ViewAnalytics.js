import axios from "axios"
import { React, useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

const analyticsRoute = "https://apd-webapp-backend.herokuapp.com/api/analytics"

function ViewAnalytics(props) {
    const [analytics, setAnalytics] = useState([])

    useEffect(() => {
        axios.get(
            analyticsRoute
        ).then((res) => {
            setAnalytics(res.data)
        }).catch((err) => {
            console.warn(err);
        })
    })

    console.log(analytics)

    return (
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewAnalytics;