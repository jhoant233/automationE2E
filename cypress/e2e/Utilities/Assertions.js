export class Assertions {


  checkText(texto) {
    cy.contains(texto).should('exist');
  }

  checkURL(URL) {
    cy.url().should('include', URL)
  }

  checkCodeStatus(response, status) {
    expect(response).to.eq(status);
  }

  checkTextStatus(response, statusText) {
    expect(response).to.contains(statusText);
  }

  checkRequestBody(response, text) {

    expect(response).to.contains(text);

  }

  checkRequestToken(token) {

    if (token) {
      console.log('session started');
    } else {
      console.log('session not started');

    }

  }


}



