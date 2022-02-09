import { Component } from "react";
import './ShopStyles.css';
import axios from "axios";

import Product from "./ProductElement";
import MenuElement from "./ShopMenuElement";
import GetProductElements from "../Services/ShopServices/GetProductElements";
import GetShopMenuElements from "../Services/ShopServices/GetShopMenuElements"

export default class ShopPage extends Component {

    // Class fields
    status:         number;
    pages:   Array<Product>;
    topics:         Array<MenuElement>
    response:       any

    // Constructor of class
    constructor(props: any) {

        super(props)

        this.status = 0;
        this.response = null
        this.pages = []
        this.topics = []

    } 

    // Life cycle methods
    componentDidMount() {
        this.response = this.getResponse();
    }

    // Methods
    getResponse() {
        return axios.get("https://localhost:44393/api/Shop/get-all")
        .then(response => this.setState(
            this.response   = response.data
        ))
    }

    parsejsonToProductList () {
        // Crutch for presentation getted JSON as products massive
        for (let i = 0; i <= this.response.body.length - 1; i++) {
            this.pages.push(
                new Product(
                    this.response.body[i].id, 
                    this.response.body[i].category, 
                    this.response.body[i].name, 
                    this.response.body[i].content, 
                    this.response.body[i].price, 
                    this.response.body[i].refTo
                )
            )
        }
    }
    
    parseProductListToMenuElements() {
        // Crutch for presentation getted ProductList as MenuElements massive
        let categories = new Array<string>();
        this.pages.forEach((curPage) => {
            if (categories.indexOf(curPage.Category) === -1) {
                categories.push(curPage.Category)
                this.topics.push(new MenuElement(1, curPage.Category, () => {}))
            }
            else {
                for (let i = 0; i < this.topics.length; i++) {
                    if (this.topics[i].category === curPage.Category) {
                        this.topics[i].count += 1;
                        break;
                    }
                }
            }
        })
    }

    render() {
        if (this.response !== null) {
            this.parsejsonToProductList()
            this.parseProductListToMenuElements();
        }
        let currentnewsdisplay = GetProductElements(this.pages);
        let currenttopics      = GetShopMenuElements(this.topics, "Test");
        return(
            <div className="shop">
                <p className="font-medium font-center font-bold">Наш магазин</p>
                <div className="shop-inside">
                    <div className="shop-menu">
                        {currenttopics}
                    </div>
                    <div className="shop-content">
                        {currentnewsdisplay}
                    </div>
                </div>
            </div>
        )
    }
}