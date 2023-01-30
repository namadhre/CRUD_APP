import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Loader from './components/Loader';
import CreateProduct from './components/CreateProduct';
import Header from './components/Header';

class App extends Component {

  constructor(props) {
    super(props);

    this.API_STATES = {
      LOADING: "loading",
      LOADED: "loaded",
      ERROR: "error",
    }

    this.state = {
      products: [],
      status: this.API_STATES.LOADING,
      errorMessage: "",
    }

    this.URL = 'https://fakestoreapi.com/products/'
  }

  fetchData = (url) => {
    this.setState({
      status: this.API_STATES.LOADING,
    }, () => {
      axios.get(url)
        .then((response) => {
          this.setState({
            status: this.API_STATES.LOADED,
            products: response.data,
          })

        })
        .catch((err) => {
          this.setState({
            status: this.API_STATES.ERROR,
            errorMessage: "An API error occured. Please try again in a few minutes.",
          })
        })
    })
  }

  componentDidMount = () => {
    this.fetchData(this.URL);
  }

  handleClickDelete = (id) => {
    let newProducts = this.state.products.filter((product) => {
      return product.id != id;
    });
    this.setState({
      products: newProducts,
    })
  }

  handleClickUpdate = (event, product) => {
    console.log(event);
    console.log(product);
  }


  handleClickCreate = (title, description, price, category, image) => {
    let newProduct = {};
    newProduct.title = title;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.category = category;
    newProduct.image = image;
    newProduct.id = this.state.products.length + 1;
    newProduct.rating = {
      rate: 0,
      count: 0
    }

    let newProducts = this.state.products;
    newProducts.unshift(newProduct);

    this.setState({
      products: newProducts,
    })

  }

  render() {

    return (
      <div className="App">
        {this.state.status === this.API_STATES.ERROR &&
          <div className='fetch-fail'>
            <h2> {this.state.errorMessage} </h2>
          </div>
        }

        {this.state.status === this.API_STATES.LOADING &&
          <Loader />
        }
        {this.state.status === this.API_STATES.LOADED && this.state.products.length === 0 &&
          <div className="no-data">
            <h2>No products available at the moment. Please try again.</h2>
          </div>
        }
        {this.state.status === this.API_STATES.LOADED && this.state.products.length > 0 &&
          <Router>
            <Header />
            <Switch>

              <Route path="/" exact>
                < div className="main-coontainer">
                  <ul>
                    <Products products={this.state.products}
                      handleClickDelete={this.handleClickDelete} />
                  </ul>
                </div>
              </Route>
              <Route path="/new-product">
                <CreateProduct handleClickCreate={this.handleClickCreate} />
              </Route>
            </Switch>
          </Router>
        }
      </div>
    );
  }
}

export default App;
