import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import Axios from 'axios'
import carInventory from '../images/carInventory.png';

const style = {
    marginRight: 10
};
const img = {
    backgroundColor: "grey",
    height: '70px',
    width: '80px',
};
const border = {
    border: '0px solid white'
}
function List() {
    const [carName, setName] = useState("")
    const [Description, setDescription] = useState("")
    const [Colour, setColour] = useState("")
    const [Price, setPrice] = useState("")
    const [arrayList, setList] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [addCartModal, setAddCartModal] = useState(false)
    const [addProductModal, setAddProductModal] = useState(false)
    const [updateDes, setUpdateDes] = useState("")
    const [oldCarName, setOldCarName] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setList(response.data)
        })
    }, [])

    const submitDescription = () => {
        // window.location.reload(true)
        Axios.post(`http://localhost:3001/api/insert`, {
            carName: carName,
            description: Description,
            color: Colour,
            price: Price
        }).then(() => {
            alert('Success')
        })
    };
    const deleteDescription = (carName) => {
        Axios.delete(`http://localhost:3001/api/delete/${carName}`)
    }
    const updateDescription = () => {
        console.log(carName, Description, Colour, Price)
        Axios.put("http://localhost:3001/api/update", {
            carName: carName,
            description: Description,
            color: Colour,
            price: Price,
            oldCarName: oldCarName
        });
        setUpdateDes("")
    }

    return (
        <div>
            <div className="container">
                <button onClick={() => setAddProductModal(true)} className="btn btn-outline-secondary m-2 w-100">ADD PRODUCT</button>
                <div>
                    <Modal show={addProductModal}>
                        <Modal.Header>
                            ADD PRODUCT <button onClick={() => setAddProductModal(false)} className="ml-auto">x</button>
                        </Modal.Header>
                        <Modal.Body>
                            <form className="p-2">
                                <div className="form-group pb-2">
                                    <label className="pb-2" for="exampleInputName1">Name</label>
                                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" onChange={(e) => {
                                        setName(e.target.value)
                                    }}></input>
                                </div>
                                <div className="form-group pb-2">
                                    <label className="pb-2" for="exampleInputDescription1">Description</label>
                                    <input type="text" className="form-control" Name="description" id="exampleInputDescription1" onChange={(d) => {
                                        setDescription(d.target.value)
                                    }}></input>
                                </div>
                                <div className="form-group pb-2">
                                    <label className="pb-2" for="exampleInputColour1">Colour</label>
                                    <input type="text" className="form-control" id="exampleInputColour1" onChange={(c) => {
                                        setColour(c.target.value)
                                    }}></input>
                                </div>
                                <div className="form-group pb-2">
                                    <label className="pb-2" for="Price">Price</label>
                                    <input type="number" className="form-control" id="Price" onChange={(p) => {
                                        setPrice(p.target.value)
                                    }}></input>
                                </div>
                                <button type="submit" onClick={submitDescription} className="btn btn-outline-primary w-100">ADD PRODUCT</button>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row d-flex">
                            {arrayList.map((data) => {
                                return <div className="d-flex">
                                    <div className="col-1 m-1">
                                        <div className="add-media" style={img}>
                                            <input id="image" type="file" style={{ display: "none" }} />
                                            <label for="image"><img style={img} src={carInventory}></img></label>
                                        </div>
                                        {/* <button onClick={() => setAddCartModal(true)} className="btn btn-outline-secondary">Add</button> */}
                                    </div>
                                    <div className="col-9 m-1">
                                        Car Name:{data.carName} | Description : {data.Description} | Color : {data.Colour} | Price : {data.Price}
                                    </div>
                                    <div className="col-1 m-1"><button onClick={() => setModalShow(true)} className="btn btn-outline-secondary">Update</button>
                                        <div>
                                            <Modal show={modalShow}>
                                                <Modal.Header>
                                                    Update Description <button onClick={() => setModalShow(false)} className="ml-auto">x</button>
                                                </Modal.Header>
                                                <Modal.Body>

                                                    <form className="p-2">
                                                        <div className="form-group pb-2">
                                                            <label className="pb-2" for="exampleInputName1">New Car Name</label>
                                                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" onChange={(e) => {
                                                                setName(e.target.value);
                                                            }}></input>
                                                        </div>
                                                        <div className="form-group pb-2">
                                                            <label className="pb-2" for="exampleInputDescription1">Description</label>
                                                            <input type="text" className="form-control" Name="description" id="exampleInputDescription1" onChange={(e) => {
                                                                setDescription(e.target.value);
                                                            }}></input>
                                                        </div>
                                                        <div className="form-group pb-2">
                                                            <label className="pb-2" for="exampleInputColour1">Colour</label>
                                                            <input type="text" className="form-control" id="exampleInputColour1" onChange={(e) => {
                                                                setColour(e.target.value);
                                                            }}></input>
                                                        </div>
                                                        <div className="form-group pb-2">
                                                            <label className="pb-2" for="Price">Price</label>
                                                            <input type="number" className="form-control" id="Price" onChange={(e) => {
                                                                setPrice(e.target.value);
                                                            }}></input>
                                                        </div>
                                                        <div className="form-group pb-2">
                                                            <label className="pb-2" for="exampleInputName1">Old Car Name</label>
                                                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" onChange={(e) => {
                                                                setOldCarName(e.target.value)
                                                            }}></input>
                                                        </div>
                                                        <button type="submit" onClick={() => { updateDescription() }} className="btn btn-outline-primary w-100">Update</button>
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
                                                        <button style={style} onClick={() => setAddCartModal(false)} className="btn btn-outline-secondary">Close</button>
                                                        <button className="btn btn-outline-secondary">Add</button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className="col-1 m-1">
                                        <button onClick={() => { deleteDescription(data.carName) }} className="btn btn-outline-secondary">Delete</button>
                                    </div>
                                </div>
                            })}
                        </div>
                        {/* {this.state.description.des} , {this.state.description.color} */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default List;

