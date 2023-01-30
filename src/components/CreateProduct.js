import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./CreateProduct.css"

class CreateProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            category: "",
            description: "",
            price: "",
            image: "",
            titleError: "",
            categoryError: "",
            priceError: "",
            descriptionError: "",
            imageError: "",
            successMessage: "",
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        let count = 0
        if (this.state.title.trim() === "") {
            this.setState({
                titleError: "Title can'b empty",
            });
        } else {
            this.setState({
                titleError: "",
            });
            count++;
        }

        if (this.state.description.trim() === "") {
            this.setState({
                descriptionError: "Description can't be empty",
            });
        } else {
            this.setState({
                descriptionError: "",
            });
            count++;
        }

        if (this.state.category === "1" || this.state.category === "") {
            this.setState({
                categoryError: "Please select Category",
            });
        } else {
            this.setState({
                categoryError: "",
            });
            count++;
        }

        if (this.state.price === "" || isNaN(this.state.price)) {
            this.setState({
                priceError: "Price can't be empty or only contains numbers",
            });
        } else {
            this.setState({
                priceError: "",
            });
            count++;
        }

        if (this.state.image === "") {
            this.setState({
                imageError: "Please provide a image url",
            });
        } else {
            this.setState({
                imageError: "",
            });
            count++;
        }

        if (count === 5) {
            this.setState({
                successMessage: "Successfull created product.",
            });
            this.props.handleClickCreate(this.state.title, this.state.description, this.state.price, this.state.category, this.state.image)
        } else {
            this.setState({
                successMessage: "",
            });
        }

    }


    render() {
        return (
            <div className='row d-flex justify-content-center create-product-container'>
                <div className='col-lg-8'>
                    <h1 className='d-flex justify-content-center h1 mt-4'>Enter Product Details</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row m-3">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="title" placeholder='Enter Title' onChange={(event) => {
                                    this.setState({
                                        title: event.target.value
                                    })
                                }} />
                                <p>{this.state.titleError}</p>
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="description" placeholder='Enter Description' onChange={(event) => {
                                    this.setState({
                                        description: event.target.value
                                    })
                                }} />
                                <p>{this.state.descriptionError}</p>
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="price" placeholder='Enter Price' onChange={(event) => {
                                    this.setState({
                                        price: event.target.value
                                    })
                                }} />
                                <p>{this.state.priceError}</p>
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                            <div className='col-sm-10'>
                                <select className="select form-control-lg drop-down col-sm-12">
                                    <option value="1" onClick={(event) => {
                                        this.setState({ category: event.target.value })
                                    }}>Select Category</option>
                                    <option value="2" onClick={(event) => {
                                        this.setState({ category: event.target.value })
                                    }}>Men's Clothing</option>
                                    <option value="3" onClick={(event) => {
                                        this.setState({ category: event.target.value })
                                    }}>Women's Clothing</option>
                                    <option value="4" onClick={(event) => {
                                        this.setState({ category: event.target.value })
                                    }}>Electronics</option>
                                    <option value="5" onClick={(event) => {
                                        this.setState({ category: event.target.value })
                                    }}>Jewelery</option>
                                </select>
                                <p>{this.state.categoryError}</p>
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
                                <p>{this.state.imageError}</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-5'>
                            <Link to="/">
                                <button type="button" className="btn btn-light">Cancel</button>
                            </Link>

                            <button type="submit" value="submit" className="btn btn-success d-flex justify-content-center">Save</button>

                        </div>
                    </form>
                    <div className='d-flex justify-content-center mt-5 success-container h1'>
                        <h1>{this.state.successMessage}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProduct;