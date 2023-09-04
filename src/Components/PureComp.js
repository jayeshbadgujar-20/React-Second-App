import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("This is pureComponent")
        return (
            <>
                <h3>PureComponent... my name is  {this.props.name}</h3>
            </>

        )
    }
}

export default PureComp
