describe('My First Test', () => {
	it('successfully loads', () => {
		cy.visit('/');
	});
	it('select light mode drop down', () => {
		cy.get('.rfdd')
			.eq(0)
			.as('firstDropDown');
		const optionSelect = name => {
			cy.get('@firstDropDown')
				.find('#select')
				.click();
			cy.get('@firstDropDown')
				.find('#list')
				.contains(name)
				.click();
		};
		optionSelect('Apple');
		optionSelect('Carrot');
		optionSelect('Banana');
		optionSelect('Grape');
		optionSelect('Orange');
	});
	it('select dark mode drop down', () => {
		cy.get('.rfdd')
			.eq(1)
			.as('secondDropDown');
		const optionSelect = name => {
			cy.get('@secondDropDown')
				.find('#select')
				.click();
			cy.get('@secondDropDown')
				.find('#list')
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
