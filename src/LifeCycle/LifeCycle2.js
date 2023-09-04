import React, { Component } from 'react'

export class LifeCycle2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Jayesh",
        }
        console.log("{{{{LifeCycle 2 Constructor}}}}");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("{{{{Lifecycle 2 getDerivedStateFromProps}}}}");
        return null;
    }
    componentDidMount() {
        console.log("{{{{LifeCycle 2 componentDidMount}}}}");
    }
    shouldComponentUpdate(){
        console.log("{{{{Lifecycle 2 shouldComponentUpdate}}}}");
        return  true
    }
    getSnapshotBeforeUpdate(){
        console.log("{{{{LifeCycle 2 getSnapshotBeforeUpdate}}}}");
        return null
    }
    componentDidUpdate(){
        console.log("{{{{Lifecycle 2 componentDidUpdate}}}}");
    }
    render() {
        console.log("{{{{Lifecycel 2 render method}}}}");

        return (

            <>
                <div> Lifecycle 2</div>
            </>

        )
    }
}

export default LifeCycle2
