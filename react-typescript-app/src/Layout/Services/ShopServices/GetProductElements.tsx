import Product, { ProductElement } from "../../ShopComponents/ProductElement";

export default function GetProductElements (from: Array<Product>) {
    var answer = from.map (
        (curObject) => {
            var cutCategoryContent = curObject.Content.substr(0, 192)
            return (
                <ProductElement
                    ID = {curObject.ID}
                    Category = {curObject.Category}
                    Name = {curObject.Name}
                    Content = {cutCategoryContent}
                    Price = {curObject.Price}
                    RefTo = {curObject.RefTo}
                />
            )
        }
    );

    return answer;
}