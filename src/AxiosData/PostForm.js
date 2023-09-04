import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: " ",
            title: " ",
            body: " "
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response =>{
            console.log("Response");
        })
        .catch(error =>{
            console.log("Something went Wrong")
        })
    }
    
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <>
                    <div> PostForm </div>

                    <form onSubmit={this.submitHandler}>
                        <div >
                            <label>UserId::</label>
                            <input type="text" name="userId" value={userId}
                                onChange={this.changeHandler} ></input>
                        </div>
                        <div>
                            <label>Title::</label>
                            <input type="text" name="title" value={title}
                                onChange={this.changeHandler} ></input>
                        </div>
                        <div>
                            <label>Body::</label>
                            <input type="text" name="body" value={body}
                                onChange={this.changeHandler} ></input>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </>
            </div>
        )
    }
}

export default PostForm

