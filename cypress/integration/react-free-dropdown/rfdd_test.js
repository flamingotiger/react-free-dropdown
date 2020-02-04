describe('My First Test', () => {
	it('select white mode drop down', () => {
		cy.visit('http://localhost:5000');
		const optionSelect = name => {
			cy.get('#select').click();
			cy.get('#list')
				.contains(name)
				.click();
		};
		optionSelect('Apple');
		optionSelect('Carrot');
		optionSelect('Banana');
		optionSelect('Grape');
		optionSelect('Orange');
	});
});
