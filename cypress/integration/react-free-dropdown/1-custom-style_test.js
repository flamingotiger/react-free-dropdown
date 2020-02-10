describe('custom-style-test', () => {
	it('successfully loads', () => {
		cy.visit('/');
	});
	it('custom-style toggle', () => {
		cy.clock();
		cy.tick(2000);
		cy.get('#explorercustom-style').click();
	});
	it('active options custom select and option style category', () => {
		cy.get('#explorercustom-style--custom-select-style-and-option-style').click();
	});
	it('active options custom select and option style', () => {
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
	it('hover custom style category', () => {
		cy.get('#explorercustom-style--custom-hover-style').click();
	});
	it('hover custom style', () => {
		cy.get('#storybook-preview-iframe').then($iframe => {
			const $body = $iframe.contents().find('body');
			cy.wrap($body)
				.find('#select')
				.click();
			const optionSelect = name => {
				cy.wrap($body)
					.find('#list')
					.contains(name)
					.trigger('mouseover');
			};
			optionSelect('Apple');
			optionSelect('Carrot');
			optionSelect('Banana');
			optionSelect('Grape');
			cy.wrap($body)
				.find('#list')
				.contains('Orange')
				.click();
		});
	});
	it('each option style custom category', () => {
		cy.get('#explorercustom-style--each-custom-option-style').click();
	});
	it('each option style custom', () => {
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
	it('custom style category', () => {
		cy.get('#explorercustom-style--custom-style').click();
	});
	it('custom style', () => {
		cy.get('#storybook-preview-iframe').then($iframe => {
			const $body = $iframe.contents().find('body');
			cy.wrap($body)
				.find('#select')
				.click();
			const optionSelect = name => {
				cy.wrap($body)
					.find('#list')
					.contains(name)
					.trigger('mouseover');
			};
			optionSelect('Apple');
			optionSelect('Carrot');
			optionSelect('Banana');
			optionSelect('Grape');
			cy.wrap($body)
				.find('#list')
				.contains('Orange')
				.click();
		});
	});
});
