import ParentPage from "../Utilities/ParentPage"

export class InitialPage extends ParentPage {

    buttonProducto = 'a[class="hrefch"]'

    addProduct(productName) {
        this.clickSelectorContainsText(this.buttonProducto, productName)
    }



}