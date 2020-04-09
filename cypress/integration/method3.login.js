context("Method 3: Unit testing APEX", function () {
  const appUrl = "/apex/f?p=129826:LOGIN::APEX_AUTHENTICATION=noauth";

  beforeEach(function () {
    cy.visit(appUrl);
  });

  it("visit home page", function () {
    cy.visit(appUrl.replace("LOGIN", 1));
  });
  it("visit page 2", function () {
    cy.visit(appUrl.replace("LOGIN", 2));
  });
  it.only("visit page 3", function () {
    cy.visit(appUrl.replace("LOGIN", 3));
  });
});
