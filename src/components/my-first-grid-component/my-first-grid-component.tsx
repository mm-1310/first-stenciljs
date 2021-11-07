import { Component, h, State, Prop } from '@stencil/core';

import { Md5 } from 'ts-md5/dist/md5'

@Component({
    tag: 'my-first-grid-component',
    styleUrl: 'my-first-grid-component.css',
    shadow: true,
})

export class MyFirstGridComponent {
    @Prop() url: string
    @Prop() apikey: string
    @Prop() privatekey: string

    @State() data: any

    async componentWillLoad() {
        //DATA FOR HASH
        let timeStamp = Date.now()
        let hash = Md5.hashStr(timeStamp + this.privatekey + this.apikey)
        //END HASH

        try {
            const res = await fetch(this.url + `?limit=20&offset=10&ts=${timeStamp}&apikey=${this.apikey}&hash=${hash}`)
            const data = await res.json()

            this.handleErrors(res)
            
            this.data = data
        } catch(err) {
            console.log(err)
        }
    }

    handleErrors(res) {
        if (!res.ok) {
            throw new Error(res.stausText)
        }
    }

    render() {
        let comicsList = this.data.data.results

        return (
            <ion-list class="container">
                {comicsList.map((comic: any, i: number) => {
                    return(
                        <ion-item class="comics" key={i}>
                            <ion-label>
                                <p>ID: {comic.id}</p>
                                <p>Title: {comic.title}</p>
                                <p>Format: {comic.format}</p>
                            </ion-label>
                        </ion-item>
                    )
                })}
            </ion-list>
        )
    }

}
