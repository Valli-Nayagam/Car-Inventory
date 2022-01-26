import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import Axios from 'axios'

const style = {
    marginRight: 10
};
const border = {
    border: 'none'
}
function List() {
    const [carName, setCarName] = useState("")
    const [arrayList, setList] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [addCartModal, setAddCartModal] = useState(false)

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setList(response.data)
        })
    }, [])

    const submitDescription = () => {
        // window.location.reload(true)
        Axios.post('http://localhost:3001/api/insert', {
        }).then(() => {
            alert('Success')
        })
    }
    const deleteDescription = (carName) => {
        Axios.delete(`http://localhost:3001/api/delete/${carName}`)
    }

    // state = {
    //     description: [
    //         {
    //             des: 'Description',
    //             color: 'Green',
    //             name: 'car1',
    //             isAdded: false
    //         },
    //         {
    //             des: 'Description',
    //             color: 'Green',
    //             name: 'car2',
    //             isAdded: false
    //         },
    //         {
    //             des: 'Description',
    //             color: 'Green',
    //             name: 'car3',
    //             isAdded: false
    //         },
    //         {
    //             des: 'Description',
    //             color: 'Green',
    //             name: 'car4',
    //             isAdded: false
    //         },
    //         {
    //             des: 'Desc
    //             color: 'Green',
    //             name: 'car5',
    //             isAdded: false

    //         },
    //         {
    //             des: 'Description',
    //             color: 'Green',
    //             name: 'car6',
    //             isAdded: false
    //         }
    //     ],
    //     show: false,
    //     addShow: false
    // }

    const addToCart = (name) => {
        // var cartArray = [];
        // cartArray = this.state.description;
        // console.log(cartArray);
        // const index = this.state.description.findIndex((deleteDes) => { return name === deleteDes.name });
        // cartArray.slice(index, 1);
        // cartArray.isAdded = true;
        // cartArray[index] = { ...cartArray[index], isAdded: true }
        // this.setState({ description: cartArray[index] });
        // this.setState(prevState => ({
        //     description: prevState.description.map(
        //         des => (index ? Object.assign(des[index], { isAdded: true }) : '')
        //     )
        // }));
        // console.log(cartArray);
    }
    
    const deleteDes = (name) => {
        // console.log(name);
        // var desArray = [];
        // desArray = this.state.description;
        // const index = this.state.description.findIndex((deleteDes) => { return name === deleteDes.name });
        // desArray.splice(index, 1);
        // this.setState({ description: desArray });
        // console.log(desArray);
    }
    return (
        <div>
            <div className="container">
                <div className="card m-2 h-100">
                    <div className="card-body" style={border}>
                        <div className="row">
                            <div className="col">
                                <div className="row d-flex">
                                    {arrayList.map((data) => {
                                        return <div className="d-flex">
                                            <div className="col-1 m-2"><button onClick={()=> setAddCartModal(true)} className="btn btn-outline-secondary">Add</button></div>
                                            <div className="col-9 m-2">
                                                Car Name:{data.carName} | Description : {data.Description} | Color : {data.Colour} | Price : {data.Price}
                                            </div>
                                            <div className="col-1 m-2"><button onClick={()=> setModalShow(true)} className="btn btn-outline-secondary">Update</button>
                                                <div>
                                                    <Modal show={modalShow}>
                                                        <Modal.Header>
                                                            Update Description <button onClick={()=> setModalShow(false)} className="ml-auto">x</button>
                                                        </Modal.Header>
                                                        <Modal.Body>

                                                            <form className="p-2">
                                                                <div className="form-group pb-2">
                                                                    <label className="pb-2" for="exampleInputName1">Name</label>
                                                                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" defaultValue={data.carName}></input>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="pb-2" for="exampleInputDescription1">Description</label>
                                                                    <input type="text" className="form-control" Name="description" id="exampleInputDescription1" defaultValue={data.Description}></input>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="pb-2" for="exampleInputColour1">Colour</label>
                                                                    <input type="text" className="form-control" id="exampleInputColour1" defaultValue={data.Colour}></input>
                                                                </div>
                                                                <div className="form-group pb-2">
                                                                    <label className="pb-2" for="Price">Price</label>
                                                                    <input type="text" className="form-control" id="Price" defaultValue={data.Price}></input>
                                                                </div>
                                                                <button type="submit" onClick={submitDescription()} className="btn btn-outline-primary w-100">Update</button>
                                                            </form>
                                                        </Modal.Body>
                                                    </Modal>
                                                    <Modal show={addCartModal}>
                                                        <Modal.Header>
                                                            Add To Cart
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            Are you sure you want add to cart
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <div className="d-flex">
                                                                <button style={style} onClick={()=> setAddCartModal(false)} className="btn btn-outline-secondary">Close</button>
                                                                <button onClick={addToCart()} className="btn btn-outline-secondary">Add</button>
                                                            </div>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </div>
                                            </div>
                                            <div className="col-1 m-2">
                                                <button onClick={()=>{deleteDescription(data.carName)}} className="btn btn-outline-secondary">Delete</button>
                                            </div>
                                        </div>
                                    })}
                                </div>
                                {/* {this.state.description.des} , {this.state.description.color} */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default List;

{/* <form className="p-2">
                                            <div className="form-group pb-2">
                                                <label className="pb-2" for="exampleInputName1">Name</label>
                                                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" onChange={(e) => {
                                                    setName(e.target.value)
                                                }}></input>
                                            </div>
                                            <div className="form-group pb-2">
                                                <label className="pb-2" for="exampleInputDescription1">Description</label>
                                                <input type="text" className="form-control" Name="description" id="exampleInputDescription1" onChange={(e) => {
                                                    setDescription(e.target.value)
                                                }}></input>
                                            </div>
                                            <div className="form-group pb-2">
                                                <label className="pb-2" for="exampleInputColour1">Colour</label>
                                                <input type="text" className="form-control" id="exampleInputColour1" onChange={(e) => {
                                                    setColour(e.target.value)
                                                }}></input>
                                            </div>
                                            <div className="form-group pb-2">
                                                <label className="pb-2" for="Price">Price</label>
                                                <input type="text" className="form-control" id="Price" onChange={(e) => {
                                                    setPrice(e.target.value)
                                                }}></input>
                                            </div>
                                            <button type="submit" onClick={submitDescription()} className="btn btn-outline-primary w-100">Update</button>
                                            {arrayList.map((val)=>{
                                                // return <h1>carName:{val.carName} | Description:{val.Description}</h1>
                                            })}
                                        </form> */}