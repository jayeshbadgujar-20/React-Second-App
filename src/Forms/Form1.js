import React, { Component } from 'react'

export class Form1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FName: '',
            MName: '',
            LName: '',
            MobNO: '',
            Email: '',
            Area: '',
            date: '',
            gender: '',
            UName: '',
            Pass: '',
            education: '',
            check: ''
        }
    }

    handleFName = (event) => {
        this.setState({
            FName: event.target.value

        })
    }
    handleMName = (event) => {
        this.setState({
            MName: event.target.value

        })
    }
    handleLname = (event) => {
        this.setState({
            LName: event.target.value
        })
    }
    education = (event) => {
        this.setState({
            education: event.target.value
        })
    }
    handleNO = (event) => {
        this.setState({
            MobNO: event.target.value
        })
    }
    handleEmail = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    TextArea = (event) => {
        this.setState({
            Area: event.target.value
        })
    }
    ChangeDate = (event) => {
        this.setState({
            date: event.target.value
        })
    }
    ChangeGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    cd = (event) => {
        this.setState({
            check: event.target.value
        })
    }
    Username = (event) => {
        this.setState({
            UName: event.target.value
        })
    }
    Password = (event) => {
        this.setState({
            Pass: event.target.value
        })
    }
    handleSubmit = (event) => {
        document.write(`${this.state.FName}<br>
        ${this.state.MName}<br> 
        ${this.state.LName}<br>
        ${this.state.MobNO}<br>
        ${this.state.Email}<br>
        ${this.state.Area}<br>
        ${this.state.date}<br>
        ${this.state.gender}<br>
        ${this.state.education}<br>
        ${this.state.UName}<br>
        ${this.state.Pass}<br> 
        ${this.state.check}<br>
        `)
        alert("Form Submitted Successfully")
        event.preventDefault()
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>Registration  Form</div>
                    <div>
                        <label>FName::~</label>
                        <input type="text" value={this.state.FName}
                            onChange={this.handleFName} placeholder='Enter First Name'  required/>


                        <label>MName::~</label>
                        <input type="text" value={this.state.MName}
                            onChange={this.handleMName} placeholder='Enter Middle Name'  required/>

                        <label>LName::~</label>
                        <input type="text" value={this.state.LName}
                            onChange={this.handleLname} placeholder='Enter Last Name'  required/>
                    </div>
                    <br></br>
                    <div>
                        <label>Mob NO ::~</label>
                        <input type="number" value={this.state.MobNO}
                            onChange={this.handleNO} placeholder='Enter Mobile NO' required></input>


                        <label>Email ID ::~</label>
                        <input type="email" value={this.state.Email}
                            onChange={this.handleEmail} placeholder='Enter E-mail ID' required></input>
                    </div><br></br>





                    <div>
                        <label>Address ::~</label>
                        <textarea type='text' value={this.state.Area}
                            onChange={this.TextArea} placeholder='Enter Address' required></textarea>

                        <label>B Date ::~</label>
                        <input type="date" value={this.state.date}
                            onChange={this.ChangeDate} ></input>
                    </div><br></br>



                    <div>
                        <label>Gender::~</label>
                        <select value={this.state.gender}
                            onChange={this.ChangeGender} required>
                            <option value="select">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>

                        </select>
                        <label>Education::~</label>
                        <select value={this.state.education}
                            onChange={this.education} required>
                            <option value="select">Select Education</option>
                            <option selected value="MCA">MCA</option>
                            <option value="MBA">MBA</option>
                            <option value="BBA">BBA</option>
                            <option value="BCA">MCA</option>
                            <option value="BSc">BSc</option>
                        </select>
                    </div> <br></br>
                   <div>
                        <label>Username::~</label>
                        <input type="text" value={this.state.UName}
                            onChange={this.Username} placeholder='Enter User Name' required></input>
                        <label>PassWord::~</label>
                        <input type='password' value={this.state.Pass} id="password"
                            onChange={this.Password} placeholder='Enter password' required></input>
                    </div><br></br>
                    <div>
                        <input type='checkbox' value={this.state.check}
                            onChange={this.cd} required></input>
                        <label>I have agree terms and conditions</label>
                    </div>

                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Form1
