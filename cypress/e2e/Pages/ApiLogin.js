const urlBase = 'https://api.demoblaze.com'

export default class ApiLogin {


    loginSuccessful(enpoint, user, password) {
        return cy.request({
            method: "POST",
            url: `${urlBase}${enpoint}`,
            body: {
                username: user,
                password: password
            },
        }).then((response) => {
            //console.log(response);

            return response;
        });
    }
}