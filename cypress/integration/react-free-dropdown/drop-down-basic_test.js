describe('drop-down-basic', () => {
	it('successfully loads', () => {
		cy.visit('/');
	});
	it('drop-down-basic toggle', () => {
		cy.clock();
		cy.tick(2000);
		cy.get('#explorerdrop-down-basic').click();
	});
	it('select light mode sidebar item', () => {
		cy.get('#explorerdrop-down-basic--light-mode').click();
	});
	it('select dark mode drop down', () => {
		cy.get('#storybook-preview-iframe').then($iframe => {
			const $body = $iframe.contents().find('body');
			const optionSelect = name => {
				cy.wrap($body)
					.find('#select')
					.click();
				cy.wrap($body)
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
	it('select dark mode sidebar item', () => {
		cy.get('#explorerdrop-down-basic--dark-mode').click();
	});
	it('select light mode drop down', () => {
		cy.get('#storybook-preview-iframe').then($iframe => {
			const $body = $iframe.contents().find('body');
			const optionSelect = name => {
				cy.wrap($body)
					.find('#select')
					.click();
				cy.wrap($body)
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
});
