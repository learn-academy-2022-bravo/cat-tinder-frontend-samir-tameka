import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardTitle, Col, Row } from 'reactstrap'

class CatIndex extends Component {
    render() {
        return (
            <>
                <h1>Big Cat Rolodex</h1>

                <br />

                {this.props.cats && this.props.cats.map(cat => {
                    return (
                        <Row key={cat.id}>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>
                                        <NavLink to={`/catshow/${cat.id}`}><h4>{cat.name}</h4></NavLink>
                                    </CardTitle>
                                </Card>
                            </Col>
                        </Row>
                    )
                })}


            </>
        );
    }
}

export default CatIndex;