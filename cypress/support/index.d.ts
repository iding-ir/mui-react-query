declare namespace Cypress {
  interface Chainable {
    getByTestID(testID: string, ...args: any): Cypress.Chainable<void>;
    findByTestID(testID: string, ...args: any): Cypress.Chainable<void>;
    closestByTestID(testID: string, ...args: any): Cypress.Chainable<void>;
  }
}
