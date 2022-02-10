import { Component } from "react";
import axios from "axios";
import "./ShopStyles.css"
import Product from "./ProductElement";

export default class ProductPage extends Component {

    response:       any

    constructor(props: any) {

        super(props)
        
        this.response = null;
    } 

    // Life cycle method
    async componentDidMount() {
        this.response = await this.getResponse();
    }

    // Methods
    async getResponse() {
        return axios.get("https://localhost:44393/api/Shop/get/" + this.getCurrentPage())
        .then(response => this.setState(
            this.response   = response.data
        ))
    }

    getCurrentPage = () => {
        // Crutch for getting actual number of page
        return window.location.href.substr(window.location.href.lastIndexOf('/') + 1, window.location.href.length - 1)
    }

    render () {
        
        if (this.response !== null) {
            if (this.response.status !== 500 && this.response.body.length !== 0) {
                let currentProduct = new Product(
                    this.response.body[0].id, 
                    this.response.body[0].category, 
                    this.response.body[0].name, 
                    this.response.body[0].content, 
                    this.response.body[0].count,
                    this.response.body[0].price, 
                    String(this.response.body[0].id)
                )
                return (
                    <div className="product-page">
                        <p className="font-justify font-verysmall">
                            Категория товара: {currentProduct.Category}
                        </p>
                        <p className="font-medium font-center font-bold">
                            {currentProduct.Name}, цена {currentProduct.Price}
                        </p>
                        <p className="font-mediumsmall font-center font-bold">
                            Сейчас на складе: {currentProduct.Count}
                        </p>
                        <p className="font-mediumsmall font-justify">
                            {currentProduct.Content}
                        </p>
                    </div>
                )
            }
            else {
                return (
                    <div className="product-page">
                        <p className="font-medium font-center font-bold font-red"> Что-то пошло не так. </p>
                    </div>
                )
            }
        }
        
        else {
            return (
                <div className="product-page">
                    <p className="font-medium font-center font-bold font-red"> Возможно, товара не существует. </p>
                </div>
            )
        }

    }
}