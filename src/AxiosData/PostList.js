import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMSG:" "
        }

    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            // console.log(response);
            this.setState({ posts: response.data })
        })
            .catch(error => {
                // console.log(error);
                this.setState({errorMSG:"Error while fetching data"})
            })
    }

    render() {
        const {posts ,errorMSG} = this.state
        return (
            <div> PostList
                {

                  posts.length?posts.map(Post =>
                    <h4 key={Post.id}>{Post.title}</h4>) : null
                   
                }
                {
                    errorMSG ? <h2>{errorMSG}</h2>: null

                }
             </div>
        )
    }
}

export default PostList
