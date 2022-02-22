import { Component } from "react";
import './ShopStyles.css';
import axios from "axios";

import Product from "./ProductElement";
import MenuElement from "./ShopMenuElement";
import GetProductElements from "../Services/ShopServices/GetProductElements";
import GetShopMenuElements from "../Services/ShopServices/GetShopMenuElements"

export default class ShopPage extends Component {

    // Class fields

    status:                 number;
    currenttopic:           string;
    isFirstUpload:          boolean;

    pages:                  Array<Product>;
    topics:                 Array<MenuElement>
    
    response:               any
    currenttopics:          any
    currentnewsdisplay:     any

    // Constructor of class
    constructor(props: any) {

        super(props)

        this.status = 0;
        this.currenttopic  = "";
        this.isFirstUpload = true;

        this.pages = [];
        this.topics = [];

        this.response = null;
        this.currenttopics = null;
        this.currentnewsdisplay = null
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
                    this.response.body[i].count,
                    this.response.body[i].price, 
                    String(this.response.body[i].id)
                )
            )
        }
    }
    
    parseProductListToMenuElements() {
        // Crutch for presentation getted ProductList as MenuElements massive
        let categories = new Array<string>();
        this.topics.push(
            new MenuElement(
                // Topic count
                this.response.body.length, 
                // Topic name
                "All", 
                // Topic event
                () => this.setState(
                    this.currentnewsdisplay = this.selectShopElements("")
                )
            )
        )
        this.pages.forEach((curPage) => {
            if (categories.indexOf(curPage.Category) === -1) {
                categories.push(curPage.Category)
                this.topics.push(
                    new MenuElement(
                        1, 
                        curPage.Category, 
                        () => this.setState(
                            this.currentnewsdisplay = this.selectShopElements(curPage.Category)
                        )
                    )
                )
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

    selectShopElements = (category: string) => {
        var currentnewsdisplay
        if (category !== "") {
            const filter = this.pages.filter(ans => ans.Category === category);
            currentnewsdisplay = GetProductElements(filter)
        }
        else {
            currentnewsdisplay = GetProductElements(this.pages)
        }
        return currentnewsdisplay;
    }

    render() {

        if (this.response !== null ) {
            if (this.response.status !== 500 ) {
                if (this.isFirstUpload) {
                    this.parsejsonToProductList()
                    this.parseProductListToMenuElements();
                    this.currentnewsdisplay = this.selectShopElements(this.currenttopic);
                    this.isFirstUpload = false;
                }

                this.currenttopics = GetShopMenuElements(this.topics);

                return(
                    <div className="shop">
                        <p className="font-medium font-center font-bold">Наш магазин</p>
                        <div className="shop-inside">
                            <div className="shop-menu">
                                {this.currenttopics}
                            </div>
                            <div className="shop-content">
                                {this.currentnewsdisplay}
                            </div>
                        </div>
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
                    <p className="font-medium font-center font-bold font-red"> Ошибка соединения с сервером. </p>
                </div>
            )
        }
        
    }
}