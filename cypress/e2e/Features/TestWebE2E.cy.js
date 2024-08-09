import { InitialPage } from "../Pages/InitialPage"
import { DetailProduct } from "../Pages/DetailProduct"
import CartPage from "../Pages/CartPage"
import { Utilities } from "../Utilities/Utilities"
import { Assertions } from "../Utilities/Assertions"


let pageInitial = new InitialPage()
let pageDetailProduct = new DetailProduct()
let cartPage = new CartPage()
let methodUtilities = new Utilities()
let assertions = new Assertions()


describe('E2E Automation Web', () => {

    it('Add 2 products to cart', () => {

        cy.UrlDemoblaze()
        pageInitial.addProduct('Samsung galaxy s6')
        pageDetailProduct.addProduct()
        pageDetailProduct.selectButton('Home ')
        pageInitial.addProduct('Nokia lumia 1520')
        pageDetailProduct.addProduct()
        pageDetailProduct.selectButton('Home ')
        pageDetailProduct.selectButton('Cart')
        assertions.checkText('Samsung galaxy s6')
        assertions.checkText('Nokia lumia 1520')

    })

    it('view shopping cart', () => {

        cy.UrlDemoblaze()
        pageInitial.addProduct('Samsung galaxy s6')
        pageDetailProduct.addProduct()
        pageDetailProduct.selectButton('Home ')
        pageInitial.addProduct('Nokia lumia 1520')
        pageDetailProduct.addProduct()
        pageDetailProduct.selectButton('Home ')
        pageDetailProduct.selectButton('Cart')
        assertions.checkURL('/cart.html')

    })


    it('complete purchase form', () => {

        cy.UrlDemoblaze()
        pageInitial.addProduct('Samsung galaxy s6')
        pageDetailProduct.addProduct()
        pageDetailProduct.selectButton('Home ')
        pageInitial.addProduct('Nokia lumia 1520')
        pageDetailProduct.addProduct()
        pageDetailProduct.selectButton('Home ')
        pageDetailProduct.selectButton('Cart')
        cartPage.selectOrder()
        cartPage.enterName(methodUtilities.generateFullNameRandom())
        cartPage.enterCountry('Colombia')
        cartPage.enterCity('Medellin')
        cartPage.enterCard('Mastercard')
        cartPage.enterMonth('Agosto')
        cartPage.enterYear('2024')
        assertions.checkText('Place order')
        assertions.checkText('1180')
    })

    it('Finalize the purchase', () => {

        cy.UrlDemoblaze()
        pageInitial.addProduct('Samsung galaxy s6')
        pageDetailProduct.addProduct()
        pageDetailProduct.selectButton('Home ')
        pageInitial.addProduct('Nokia lumia 1520')
        pageDetailProduct.addProduct()
        pageDetailProduct.selectButton('Home ')
        pageDetailProduct.selectButton('Cart')
        cartPage.selectOrder()

        cartPage.enterName(methodUtilities.generateFullNameRandom())
        cartPage.enterCountry('Colombia')
        cartPage.enterCity('Medellin')
        cartPage.enterCard('Mastercard')
        cartPage.enterMonth('Agosto')
        cartPage.enterYear('2024')
        cartPage.clickOnButton('Purchase')
        assertions.checkText('Thank you for your purchase!')
        assertions.checkText('9/7/2024')
        cartPage.waitSeconds(2)
        cartPage.clickOnButtonOk()
        assertions.checkURL('/index.html')

    })

})







