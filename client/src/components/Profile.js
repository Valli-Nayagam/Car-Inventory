import React from 'react'

const cardStyle = {
    marginTop: 40
};
class Profile extends React.Component {
    render() {
        return (
            <div>
                <div style={cardStyle} className="container">
                    <h2>Welcome to KBS Inventory</h2><br />
                    <div className="card">
                        <div className="card-body">
                            <form className="p-2">
                                <div className="form-group pb-2">
                                    <label className="pb-2" for="exampleInputEmail1">First Name</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Your First Name" />
                                </div>
                                <div className="form-group pb-2">
                                    <label className="pb-2" for="exampleInputPassword1">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Last Name" />
                                </div>
                                <div className="form-group pb-2">
                                    <label className="pb-2" for="exampleInputPassword1">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                                </div>
                                <div className="form-group pb-2">
                                    <label className="pb-2" for="exampleInputPassword1">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Phone Number" />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
