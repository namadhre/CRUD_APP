import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            price: "",
            category: ""
        }
    }



    render() {
        return (
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-8'>
                    <h1 className='d-flex justify-content-center h1 mt-4'>Update Product Details</h1>
                    <form>
                        <div className="form-group row m-3">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="title" defaultValue={this.props.product.title} onChange={(event) => {
                                    console.log(event.target.value != "");
                                    this.setState({
                                        title: event.target.value,
                                    })
                                }} />
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="description" defaultValue={this.props.product.description} onChange={(event) => {
                                    this.setState({
                                        description: event.target.value
                                    })
                                }} />
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="price" defaultValue={this.props.product.price} onChange={(event) => {
                                    this.setState({
                                        price: event.target.value
                                    })
                                }} />
                            </div>
                        </div>
                        <div className="form-group row m-3">
                            <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="category" defaultValue={this.props.product.category} onChange={(event) => {
                                    this.setState({
                                        category: event.target.value
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
                                    this.props.handleClickUpdate(this.state.title, this.state.description, this.state.price, this.state.category, this.props.product.id, this.props.product.rating, this.props.product.image);
                                }}>Save</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateProduct;