import ApiLogin from "../Pages/ApiLogin"
import ApiUserRegistration from "../Pages/ApiUserRegistration"
import { Assertions } from "../Utilities/Assertions"
import { Utilities } from "../Utilities/Utilities"

let apiUserRegistration = new ApiUserRegistration()
let assertions = new Assertions()
let apiLogin = new ApiLogin()
let methodUtilities = new Utilities()

let user = "user1212"
let password = "user1212"

describe('E2E Automation API', () => {


    it('create a new user in signup', () => {
        let userName = methodUtilities.generateRandomNumber() + user

        apiUserRegistration.createUser('/signup', userName, password).then((response) => {

            assertions.checkCodeStatus(response.status, 200)
            assertions.checkTextStatus(response.statusText, "OK")
            const parsedRequestBodyUserName = JSON.parse(response.requestBody);
            assertions.checkRequestBody(parsedRequestBodyUserName.username, user)
            const parsedRequestBodyPassword = JSON.parse(response.requestBody);
            assertions.checkRequestBody(parsedRequestBodyPassword.password, password)

        })
    });


    it('Try to create an existing user', () => {

        apiUserRegistration.createUser('/signup', 'TEST', password).then((response) => {
            assertions.checkRequestBody(response.body.errorMessage, 'This user already exist')

        })

    })

    it('Correct username and password in login', () => {

        apiLogin.loginSuccessful('/login', 'user1212', 'dXNlcjEyMTI=').then((response) => {

            assertions.checkCodeStatus(response.status, 200)
            const parsedRequestBodyUserName = JSON.parse(response.requestBody);
            assertions.checkRequestBody(parsedRequestBodyUserName.username, 'user1212')
            const parsedRequestBodyPassword = JSON.parse(response.requestBody);
            assertions.checkRequestBody(parsedRequestBodyPassword.password, 'dXNlcjEyMTI=')
            const authToken = response.body.split(': ')[1];
            assertions.checkRequestToken(authToken)

        })
    })

    it('Incorrect username and password in login', () => {

        apiLogin.loginSuccessful('/login', 'user1212', 'fasdfsd').then((response) => {

            assertions.checkCodeStatus(response.status, 200)
            const errorMessage = response.body.errorMessage;
            assertions.checkRequestBody(errorMessage, 'Wrong password.')
        })
    })

})

