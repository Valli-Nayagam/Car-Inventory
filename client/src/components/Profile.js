import React, { useState } from 'react'
import Axios from 'axios'

const cardStyle = {
    marginTop: 40
};
function Profile() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState(0)

    const submitProfile = () => {
        // window.location.reload(true)
        console.log(firstName,lastName,email,phoneNo);
        Axios.post(`http://localhost:3001/api/profile`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNo: phoneNo
        }).then(() => {
            alert('Success')
        })
    };
    return (
        <div>
            <div style={cardStyle} className="container">
                <h2>Welcome to KBS Inventory</h2><br />
                <div className="card">
                    <div className="card-body">
                        <form className="p-2">
                            <div className="form-group pb-2">
                                <label className="pb-2" for="exampleInputEmail1">First Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(f) => {
                                    setFirstName(f.target.value)
                                }} placeholder="Enter Your First Name" />
                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-2" for="exampleInputPassword1">Last Name</label>
                                <input type="text" className="form-control" onChange={(l) => { setLastName(l.target.value) }} placeholder="Enter Your Last Name" />
                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-2" for="exampleInputPassword1">Email Address</label>
                                <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Your Email" />
                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-2" for="exampleInputPassword1">Phone Number</label>
                                <input type="number" className="form-control" onChange={(p) => { setPhoneNo(p.target.value) }} placeholder="Enter Your Phone Number" />
                            </div>
                            <br />
                            <button type="submit" onClick={submitProfile()} className="btn btn-outline-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
