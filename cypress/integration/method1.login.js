context("Method 1: Unit testing APEX", () => {
  const appUrl = "/apex/f?p=129826";
  const cookieName = "ORA_WWV_APP_129826";
  const pUsername = "test_user";
  const pPassword = "Oradoc_db1";
  var loggedInPage;
  var appCookie;
  var pageUrl;

  before(function () {
    cy.visit(appUrl);
    cy.clearCookie("LOGIN_USERNAME_COOKIE");
    cy.get("[data-cy=username]")
      .clear()
      .should("be.empty")
      .type(pUsername)
      .should("have.value", pUsername);
    cy.get("[data-cy=password]")
      .should("be.empty")
      .type(pPassword)
      .should("have.value", pPassword);
    cy.get("[data-cy=sign_inButton]").click();
    cy.url()
      .should("contain", ":1:")
      .then(($url) => {
        loggedInPage = $url.replace("/__/", "/pls/apex/");
        cy.visit(loggedInPage); //necessary due to #redirectmalfunction
      });
    cy.getCookie(cookieName).then(($Cookie) => {
      appCookie = $Cookie.value;
    });
  });

  it("Visit page 2", () => {
    cy.setCookie(cookieName, appCookie);
    pageUrl = loggedInPage.replace(":1:", ":2:");
    cy.visit(pageUrl);
  });

  it("Visit page 3", () => {
    cy.setCookie(cookieName, appCookie);
    pageUrl = loggedInPage.replace(":1:", ":3:");
    cy.visit(pageUrl);
  });
});
