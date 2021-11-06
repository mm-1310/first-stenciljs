import { Component, h } from '@stencil/core';

@Component({
    tag: 'my-first-grid-component',
    styleUrl: 'my-first-grid-component.css',
    shadow: true,
})

export class MyFirstGridComponent {
    render() {
        return <div>from my own</div> 
    }

}
