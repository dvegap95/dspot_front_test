import App from "../../src/App";

describe("App.cy.ts", () => {
  it("playground", () => {
    cy.mount(<App />);
    cy.get("h3").should("exist");
    cy.findByText("Home Page").should("exist");
  });
});
