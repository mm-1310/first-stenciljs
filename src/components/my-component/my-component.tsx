import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css',
    shadow: true,
})

export class MyComponent {
    @Prop() header: string;

    render() {
        return <div class="header">{this.header}</div>;
    }
}
