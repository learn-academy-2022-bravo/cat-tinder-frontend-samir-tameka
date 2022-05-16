import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class CatNew extends Component {
    constructor(props){
        super(props)
        this.state = {
          newCat: {
            name: "",
            age: "",
            hobbies: "",
            image: ""
          },
          submitted: false
        }
      }


      handleChange = (e) => {
        const { newCat } = this.state
        newCat[e.target.name] = e.target.value
        this.setState({newCat: newCat})
      }

      handleSubmit = () => {
        this.props.createCat(this.state.newCat)
        this.setState({submitted: true})
      }

    render() {
        console.log(this.state.newCat)
        return (
            <>
                <h1>Play &amp; Pay</h1>
                <>

                    <Form inline>
                        <FormGroup floating>
                            <Input
                               type="text"
                               name="name"
                               onChange={this.handleChange}
                            />
                            <Label>Name</Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="age"
                                onChange={this.handleChange}
                            />
                            <Label>Age</Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="hobbies"
                                onChange={this.handleChange}
                            />
                            <Label>Favorite Hobbies</Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="image"
                                onChange={this.handleChange}
                            />
                            <Label>Link Your Prowlfile Pic</Label>
                        </FormGroup>
                        {' '}
                        <Button name="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form>

                    {this.state.submitted && <Redirect to="/catindex" />}

                </>
            </>
        );
    }
}

export default CatNew;