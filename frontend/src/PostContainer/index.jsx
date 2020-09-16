import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import ReviewForm from './ReviewForm'

class PostContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    blogPosts;
    componentDidMount(){
        axios.get('http://localhost:4000/api/post')
        .then( result =>blogPosts=result.blogPosts)
    }

    render(){

        const posts = this.state.blogPosts;
        return (
            <div>
            <Grid>
                <Row className="show-grid">
                <Col md={2}>
                </Col>
                <Col md={8}>
                    { posts!= undefined &&
                    posts.map( ({id,title,tags,content,author,comment},index) => (
                        <p>{title}</p>
                    ))}
                    {/* <ReviewForm /> */}
                </Col>
                <Col md={2}>
                </Col>
                </Row>
            </Grid>
            </div>
        );
        }
}

export default PostContainer