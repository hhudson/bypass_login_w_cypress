context.skip("Method 2: Unit testing APEX", function () {
  const appUrl = "/apex/f?p=129826";
  const cookieName = "ORA_WWV_APP_129826";
  const restfulUrl = "[MISSING RESTFUL SERVICE]";
  var validSession;
  var appCookie;
  var authUrl;

  beforeEach(function () {
    cy.request(restfulUrl).then((response) => {
      console.log(response);
      validSession = response.body.app_session;
      console.log(validSession);
      appCookie = response.body.cookie_value;
      console.log(appCookie);
      cy.setCookie(cookieName, appCookie);
    });
  });

  it("visit home page", function () {
    authUrl = appUrl + "1:" + validSession;
    cy.visit(authUrl);
  });

  it("visit page 2", function () {
    authUrl = appUrl + "2:" + validSession;
    cy.visit(authUrl);
  });

  it("visit page 3", function () {
    authUrl = appUrl + "3:" + validSession;
    cy.visit(authUrl);
  });
});
