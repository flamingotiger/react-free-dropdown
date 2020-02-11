describe('icon-custom-test', () => {
	it('successfully loads', () => {
		cy.visit('/');
	});
	it('icon-custom toggle', () => {
		cy.clock();
		cy.tick(2000);
		cy.get('#explorericon-custom').click();
	});
	it('select hidden icon category', () => {
		cy.get('#explorericon-custom--hidden-icon').click();
	});
	it('select png icon category', () => {
		cy.get('#explorericon-custom--use-png-icon').click();
	});
	it('select svg icon category', () => {
		cy.get('#explorericon-custom--use-svg-icon').click();
	});
});
