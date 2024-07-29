describe('Users feature', () => {

    function generateUniqueUsername() {
        const timestamp = new Date().getTime();
        return `adrian.aleman_${timestamp}`;
    }

    it("TC-001: BE | Users| Registrar un nuevo usuario", () => {
        const username = generateUniqueUsername();
        cy.request({
            method: "POST",
            url: "https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users",
            body: {
                username: username,
                firstName: "Adrian",
                lastName: "Aleman",
                password: "12345678Aa#",
                confirmPassword: "12345678Aa#"
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log(`Generated Username: ${username}`);
        });
    });
});