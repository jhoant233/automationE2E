import ParentPage from "../Utilities/ParentPage"

export class DetailProduct extends ParentPage {

    buttonAddCart = '[class="btn btn-success btn-lg"]'
    buttonHome = '[class="nav-link"]'

    addProduct() {
        this.clickSelectorContainsText(this.buttonAddCart, 'Add to cart')
    }

    selectButton(buttonName) {
        this.clickSelectorContainsText(this.buttonHome, buttonName)
    }

}