import ParentPage from "../Utilities/ParentPage";

export default class CartPage extends ParentPage {

    buttonPlaceOrder = '[class="btn btn-success"]'
    fieldName = '#name'
    fieldCountry = '#country'
    fieldCity = '#city'
    fieldCard = '#card'
    fielMonth = '#month'
    fielYear = '#year'
    buttonPurchase = '[class="btn btn-primary"]'
    buttonOk = 'button[class="confirm btn btn-lg btn-primary"]'

    selectOrder() {
        this.click(this.buttonPlaceOrder)
    }

    enterName(fullName) {
        this.type(this.fieldName, fullName)
    }

    enterCountry(country) {
        this.type(this.fieldCountry, country)
    }

    enterCity(city) {
        this.type(this.fieldCity, city)
    }

    enterCard(card) {
        this.type(this.fieldCard, card)
    }

    enterMonth(month) {
        this.type(this.fielMonth, month)
    }

    enterYear(year) {
        this.type(this.fielYear, year)
    }

    clickOnButton(text) {
        this.clickSelectorContainsText(this.buttonPurchase, text)
    }

    clickOnButtonOk() {
        this.click(this.buttonOk)
    }

    waitSeconds(numberSeconds) {
        this.wait(numberSeconds)
    }



}