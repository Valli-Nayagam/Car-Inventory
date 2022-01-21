import React, { Component } from 'react'

// const Login = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>                                                                                                                                                        
//             {props.children}
//         </div>
//     )
// }
class Login extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Using state in class',
            value: true
        }
    }

    change() {
        if (this.state.value) {
            this.setState
                ({
                    message: 'Changed Message',
                    value: false
                })
        } else {
            this.setState({
                message: 'Changed again',
                value: true
            })
        }
    }

    render() {
        return (
            <div className="loginForm p-2">
                <div className="card p-2">
                    <h3 className="heading">KBS INVENTORY</h3>
                {/* <img src={require("src/images/carInventory.png")} /> */}
                    <div className="card-body">
                        <form className="p-2">
                            <div className="form-group pb-2">
                                <label className="pb-2" for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-2" for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <div className="form-group pb-2 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <a>I Agree The Terms and Conditions</a>
                            </div>
                            <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
                {/* <h1>{this.state.message}</h1>
                <button onClick={() => this.change()} className="btn btn-outline-secondary">Click</button> */}
                {/* {this.props.name} */}
                {/* {this.props.children} */}
            </div>
        )
    }
}

// function Login() {
//     return <div className="container">
//     <h1>hello</h1>
//     </div>
// }

export default Login;