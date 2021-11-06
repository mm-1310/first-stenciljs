import { Component, h, State } from '@stencil/core';

import { Md5 } from 'ts-md5/dist/md5'

@Component({
    tag: 'my-first-grid-component',
    styleUrl: 'my-first-grid-component.css',
    shadow: true,
})

export class MyFirstGridComponent {
    @State() url: string = 'https://gateway.marvel.com:443/v1/public/comics'
    @State() data: any

    async componentWillRender() {
        // let comicsList = []
        //DATA FOR HASH
        let publicKey = '89dd9f6152897008a59e0050cecf5713'
        let privateKey = 'e3e2db831d87d93f01ede25bfdc6bd0d46ac9fa6'
        let timeStamp = Date.now()

        let hash = Md5.hashStr(timeStamp + privateKey + publicKey)
        //END HASH

        try {
            const res = await fetch(this.url + `?limit=20&offset=10&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
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
            <div class="container">
                {comicsList.map((comic: any, i: number) => {
                    return(
                        <div class="comics" key={i}>
                            <p>ID: {comic.id}</p>
                            <p>Title: {comic.title}</p>
                            <p>Format: {comic.format}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}
