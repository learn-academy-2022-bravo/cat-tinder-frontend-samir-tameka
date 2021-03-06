import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardText, CardTitle, Col } from 'reactstrap'

class CatShow extends Component {
 

    handleSubmit = () => {
        this.props.deleteCat(this.props.cat.id)
      }


    render() {

        let { cat } = this.props

        return (
            <>

                <h1>Ready to Mingle</h1>

                <br />

                <Col sm="6">
                    <Card body>
                        <CardTitle>Hi, my name is {cat && cat.name}!</CardTitle>
                        <img src={cat && cat.image} alt="adorable cat" />
                        <CardText>I am {cat && cat.age} years old. I enjoy {cat && cat.hobbies}.</CardText>

                        <NavLink to={cat && `/catedit/${cat.id}`}>
                            <Button name="update">Update Prowlfile</Button>
                        </NavLink>
                        

                        <NavLink to={cat && `/catindex`}>
                            <Button name="delete" 
                                    onClick={this.handleSubmit} 
                                    color="danger">
                                        Delete Prowlfile
                            </Button>
                        </NavLink>

                    </Card>
                </Col>
            </>
        );
    }
}

export default CatShow;