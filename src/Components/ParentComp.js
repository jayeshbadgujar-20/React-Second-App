import React, { Component } from 'react'
// import RegComp from './RegComp'
import PureComp from './PureComp' 
import MemoComp from './MemoComp.js'


 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "John"
      }
    }
    
    componentDidMount(){
       setInterval(()=>{
        this.setState({
            name:'Victor '
        })
       }, 3000)  
    }
    render() {
        console.log(
            "----This is parent Component----"
        )
        return (
            <>
                <h3>This is ParentComp </h3>
              {/*  <RegComp  name={this.state.name}/> */}
                <PureComp name={this.state.name}/>
              
               <MemoComp />
            </>
        )
    }
}

export default ParentComp
