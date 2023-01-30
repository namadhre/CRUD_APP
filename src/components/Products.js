import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Products.css';


class Products extends Component {

    render() {
        return (
            this.props.products.map((product) => (
                <li key={product.id} >
                    <div className="main-container-wrapper">
                        <div className="update-icon">
                            <h4>{product.category}</h4>
                        </div>
                        <div className="content-container">
                            <img src={product.image} alt={product.title}></img>
                            <h2>{product.title}</h2>
                            <p>{product.description.slice(0, 100) + "..."}</p>
                            <h3>${product.price}</h3>
                            <div className="rating">
                                <p>Rating: {product.rating.rate}</p>
                                <span>{"(" + product.rating.count + ")"}</span>
                            </div>
                        </div>
                        <div className="container">
                            <button className="update-btn" onClick={(event) => {
                                this.props.handleClickUpdate(event, product)
                            }
                            }>update<i className="fa-sharp fa-solid fa-pen-nib"></i>
                            </button>
                            <button className="delete-btn" onClick={() => {
                                this.props.handleClickDelete(product.id)
                            }}>
                                <i className="fa-solid fa-trash"></i>delete
                            </button>
                        </div>
                    </div>
                </li>
            ))
        )
    }
}


export default Products;