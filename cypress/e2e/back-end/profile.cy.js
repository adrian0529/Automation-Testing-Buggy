import { getUserProfile } from "../../schemas/get-user-profile";

describe('Profile feature', () => {
    let authToken;

    before(() => {
        cy.request({
            method: 'POST',
            url: 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/oauth/token',
            body: {
                grant_type: 'password',
                username: 'adrian.aleman.10',
                password: '12345678Aa#',
            },
            headers: {
                'Accept': '*/*',
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            authToken = response.body.access_token;
            cy.log(`Access Token: ${authToken}`);
        });
    });
    
    it("TC-002: BE | Profile | Obtener la información del perfil del usuario", () => {

        cy.request({
            method: "GET",
            url: "https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users/profile",
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': 'application/json'
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            cy.validateSchema(getUserProfile, response.body);
            expect(response.body.username).to.not.be.empty;
            expect(response.body.firstName).to.not.be.empty;
            expect(response.body.lastName).to.not.be.empty;
        });
    });

    it("TC-003: BE | Profile| Actualizar la información del perfil del usuario", () => {

        cy.request({
            method: "PUT",
            url: "https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users/profile",
            body: {
                username: "adrian.aleman.10",
                firstName: "Adrian",
                lastName: "Aleman",
                genrer: "Male",
                age: "24",
                address: "adrian@gmail.com",
                phone: "3101234567",
                hobby: "Ver series",
                currentPassword: "",
                newPassword: "",
                newPasswordConfirmation: ""
            },
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});