import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import {Grid, Row} from 'react-bootstrap';
import update from 'react-addons-update'
//import './index.css';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          foodName: ''
        };
    }
    handleInput = (e) => {
        this.setState({
          foodName: e.target.value
        })
    }
    render(){
      return (
        <div>
            <FormGroup controlId="food-name">
            <FormControl
                type="text"
                value={this.state.foodName}
                placeholder="Enter food name"
                onChange={this.handleInput}
            />
            </FormGroup>
            <div className="btnSubmit">
            <Button
                bsStyle="success"
                type="submit"
                onClick={() => this.handleSubmit()}
            >
                Submit
            </Button>
            </div>
        </div>
      );
    }
}
  
export default ReviewForm;