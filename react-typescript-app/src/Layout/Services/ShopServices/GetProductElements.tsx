import Product, { ProductElement } from "../../ShopComponents/ProductElement";

export default function GetProductElements (from: Array<Product>) {
    var answer = from.map (
        (curObject) => {
            return (
                <ProductElement
                    ID = {curObject.ID}
                    Category = {curObject.Category}
                    Name = {curObject.Name}
                    Content = {curObject.Content}
                    Price = {curObject.Price}
                    RefTo = {curObject.RefTo}
                />
            )
        }
    );

    return answer;
}