const urlBase = 'https://api.demoblaze.com'


export default class ApiUserRegistration {


    createUser(enpoint, user, password) {
        return cy.request({
            method: "POST",
            url: `${urlBase}${enpoint}`,
            body: {
                username: user,
                password: password
            },
            failOnStatusCode: false
        }).then((response) => {

            return response;
        });
    }


}