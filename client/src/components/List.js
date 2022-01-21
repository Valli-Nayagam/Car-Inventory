import React from 'react'
import { Modal } from 'react-bootstrap'

const style = {
    marginRight: 10
};
class List extends React.Component {
    constructor() {
        super()
        this.state = {
            description: [
                {
                    des: 'Description',
                    color: 'Green',
                    name: 'car1',
                    isAdded: false
                },
                {
                    des: 'Description',
                    color: 'Green',
                    name: 'car2',
                    isAdded: false
                },
                {
                    des: 'Description',
                    color: 'Green',
                    name: 'car3',
                    isAdded: false
                },
                {
                    des: 'Description',
                    color: 'Green',
                    name: 'car4',
                    isAdded: false
                },
                {
                    des: 'Description',
                    color: 'Green',
                    name: 'car5',
                    isAdded: false

                },
                {
                    des: 'Description',
                    color: 'Green',
                    name: 'car6',
                    isAdded: false
                }
            ],
            show: false,
            addShow: false
        }
        console.log(this.state);
    }
    addToCart(name) {
        var cartArray = [];
        cartArray = this.state.description;
        console.log(cartArray);
        const index = this.state.description.findIndex((deleteDes) => { return name === deleteDes.name });
        // cartArray.slice(index, 1);
        // cartArray.isAdded = true;
        cartArray[index] = { ...cartArray[index], isAdded: true }
        this.setState({ description: cartArray[index] });
        // this.setState(prevState => ({
        //     description: prevState.description.map(
        //         des => (index ? Object.assign(des[index], { isAdded: true }) : '')
        //     )
        // }));
        console.log(cartArray);
    }
    updateDescription(name) {
        console.log(name);
        const index = this.state.description.findIndex((selectedDes) => { return name === selectedDes.name });
        this.setState({
            show: false
        })
    }
    deleteDes(name) {
        console.log(name);
        var desArray = [];
        desArray = this.state.description;
        const index = this.state.description.findIndex((deleteDes) => { return name === deleteDes.name });
        desArray.splice(index, 1);
        this.setState({ description: desArray });
        console.log(desArray);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card m-2 h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    {this.state.description.map(data => (
                                        <div className="row">
                                            <div className="col-2 m-2"><button onClick={() => this.setState({ addShow: true })} className="btn btn-outline-secondary">Add</button></div>
                                            <div className="col-6 m-2">{data.name} : {data.des}</div>
                                            <div className="col-1 m-2"><button onClick={() => this.setState({ show: true })} className="btn btn-outline-secondary">Update</button>
                                                <div>
                                                    <Modal show={this.state.show}>
                                                        <Modal.Header>
                                                            Update Description <button className="ml-auto" onClick={() => this.setState({ show: false })}>x</button>
                                                        </Modal.Header>
                                                        <Modal.Body>

                                                            <form className="p-2">
                                                                <div className="form-group pb-2">
                                                                    <label className="pb-2" for="exampleInputName1">Name</label>
                                                                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" defaultValue={data.name}></input>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="pb-2" for="exampleInputDescription1">Description</label>
                                                                    <input type="text" className="form-control" id="exampleInputDescription1" defaultValue={data.des}></input>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="pb-2" for="exampleInputColour1">Colour</label>
                                                                    <input type="text" className="form-control" id="exampleInputColour1" defaultValue={data.color}></input>
                                                                </div>
                                                                <button type="submit" onClick={() => this.updateDescription(data.name)} className="btn btn-outline-primary w-100">Update</button>
                                                            </form>
                                                        </Modal.Body>
                                                    </Modal>
                                                    <Modal show={this.state.addShow}>
                                                        <Modal.Header>
                                                            Add To Cart
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            Are you sure you want add to cart
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <div className="d-flex">
                                                                <button style={style} onClick={() => this.setState({ addShow: false })} className="btn btn-outline-secondary">Close</button>
                                                                <button onClick={() => this.addToCart(data.name)} className="btn btn-outline-secondary">Add</button>
                                                            </div>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </div>
                                            </div>
                                            <div className="col-1 m-2">
                                                <button onClick={() => this.deleteDes(data.name)} className="btn btn-outline-secondary">Delete</button>
                                                {data.isAdded ? (<span className="badge badge-sm">Incart</span>) : ''}
                                            </div>
                                        </div>
                                    ))}
                                    {/* {this.state.description.des} , {this.state.description.color} */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default List;