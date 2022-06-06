import GatewayCard from "../../src/components/GatewayCard";
import { Gateway } from "../../src/entities/entities";

let gwTest: Gateway = {
  _id: "123",
  devices: [],
  ipAddress: "21.12.3.45",
  name: "test gateway",
  serialNumber: "123s",
};

const onEdit = (gw) => {
  console.log({ gw });
};
describe("GatewayCard.cy.ts", () => {
  it("playground", () => {
    cy.mount(<GatewayCard gateway={gwTest} onEdit={onEdit} />);
    // cy.get("header").should("exist");
    // cy.findByText("count is: 0").click().click();
    // cy.findByText("count is: 2").should("exist");
  });
});
