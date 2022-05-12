import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class CatEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editCat: {
                name: "",
                age: "",
                enjoys: "",
                image: ""
            },
            submitted: false
        }
    }


    handleChange = (e) => {
        let { editCat } = this.state
        editCat[e.target.name] = e.target.value
        this.setState({ editCat: editCat })
    }

    handleSubmit = () => {
        this.props.editCat(this.state.editCat, this.props.cat.id)
        this.setState({ submitted: true })
    }

    render() {
        console.log(this.state.editCat)
        return (
            <>
                <h1>Prowlfile Update</h1>
                <>

                    <Form inline>
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.editCat.name}
                            />
                            <Label>Name</Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="age"
                                onChange={this.handleChange}
                                value={this.state.editCat.age}
                            />
                            <Label>Age</Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="enjoys"
                                onChange={this.handleChange}
                                value={this.state.editCat.enjoys}
                            />
                            <Label>Favorite Hobbies</Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="image"
                                onChange={this.handleChange}
                                value={this.state.editCat.image}
                            />
                            <Label>Link Your Prowlfile Pic</Label>
                        </FormGroup>
                        {' '}
                        <Button name="submit" onClick={this.handleSubmit}>
                            Final Answer
                        </Button>
                    </Form>

                    {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}

                </>
            </>
        );
    }
}

export default CatEdit;