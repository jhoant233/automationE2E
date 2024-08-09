export default class ParentPage {

  click(selector) {
    cy.get(selector).click({ force: true });
  }

  clickSelectorContainsText(selector, ContainsText) {
    cy.get(selector).contains(ContainsText).click({ force: true });
  }

  type(selector, text) {
    cy.get(selector).type(text)
  }

  wait(segundos) {
    let cantSegundos = segundos * 1000;
    cy.wait(cantSegundos);
  }

}





