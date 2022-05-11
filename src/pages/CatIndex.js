import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardTitle, Col } from 'reactstrap'

class CatIndex extends Component {
    render() {
        return (
            <>
                <h1>Big Cat Rolodex</h1>

                <br />

                <Col sm="6">
                    {this.props.cats && this.props.cats.map(cat => {
                        return (
                            <Card body key={`${cat.id}`}>
                                <CardTitle>
                                    <NavLink to={`/catshow/${cat.id}`} key={cat.id}><h4>{cat.name}</h4></NavLink>
                                </CardTitle>
                            </Card>
                        )
                    })}
                </Col>
                
            </>
        );
    }
}

export default CatIndex;