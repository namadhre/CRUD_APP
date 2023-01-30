import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CreateProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            category: "",
            description: "",
            price: "",
            image: ""
        }

    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-8'>
                <h1 className='d-flex justify-content-center h1 mt-4'>Enter Product Details</h1>
                <form>
                    <div className="form-group row m-3">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" placeholder='Enter Title' onChange={(event) => {
                                this.setState({
                                    title: event.target.value
                                })
                            }} />
                        </div>
                    </div>
                    <div className="form-group row m-3">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="description" placeholder='Enter Description' onChange={(event) => {
                                this.setState({
                                    description: event.target.value
                                })
                            }} />
                        </div>
                    </div>
                    <div className="form-group row m-3">
                        <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="price" placeholder='Enter Price' onChange={(event) => {
                                this.setState({
                                    price: event.target.value
                                })
                            }} />
                        </div>
                    </div>
                    <div className="form-group row m-3">
                        <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="category" placeholder='Enter Category' onChange={(event) => {
                                this.setState({
                                    category: event.target.value
                                })
                            }} />
                        </div>
                    </div>
                    <div className="form-group row m-3">
                        <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="image" placeholder='Enter Image URL' onChange={(event) => {
                                this.setState({
                                    image: event.target.value
                                })
                            }} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-around mt-5'>
                        <Link to="/">
                            <button type="button" className="btn btn-light">Cancel</button>
                        </Link>
                        <Link to="/">
                            <button type="button" className="btn btn-success d-flex justify-content-center" onClick={() => {
                                this.props.handleClickCreate(this.state.title, this.state.description, this.state.price, this.state.category, this.state.image);
                            }}>Save</button>
                        </Link>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default CreateProduct;