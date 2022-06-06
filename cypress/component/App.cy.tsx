import App from "../../src/App";

describe("App.cy.ts", () => {
  it("playground", () => {
    cy.mount(<App />);
    cy.get("header").should("exist");
    cy.findByText("count is: 0").click().click();
    cy.findByText("count is: 2").should("exist");
  });
});
