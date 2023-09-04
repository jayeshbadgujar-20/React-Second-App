import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2';

export class LifeCycle1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Jayesh"
        }
        console.log("LifeCycle 1 Constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle 1 getDerivedStateFromProps");
        return null;
    }
    componentDidMount() {
        console.log("LifeCycle 1 componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("Lifecycle 1 shouldComponentUpdate");
        return  true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifeCycle 1 getSnapshotBeforeUpdate");
        return null
    }
    componentDidUpdate(){
        console.log("Lifecycle 1 componentDidUpdate");
    }
    changestate =()=>{
this.setState({
    name:"Shubham"
})
    }
    render() {
        console.log("Lifecycel 1 render method");

        return (

            <>
                <div> Lifecycle 1</div>
                <button type="button" onClick={this.changestate}>Update</button>
                <LifeCycle2 />
            </>

        )
    }
}

export default LifeCycle1
