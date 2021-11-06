import { newSpecPage } from '@stencil/core/testing';
import { MyFirstGridComponent } from '../my-first-grid-component';

describe('my-first-grid-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyFirstGridComponent],
      html: `<my-first-grid-component></my-first-grid-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-first-grid-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-first-grid-component>
    `);
  });
});
