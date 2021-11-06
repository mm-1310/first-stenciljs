import { newE2EPage } from '@stencil/core/testing';

describe('my-first-grid-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-first-grid-component></my-first-grid-component>');

    const element = await page.find('my-first-grid-component');
    expect(element).toHaveClass('hydrated');
  });
});
