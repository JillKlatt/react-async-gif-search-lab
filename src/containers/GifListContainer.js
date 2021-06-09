import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state= {
        gifs: []
    }

    componentDidMount() {
        this.fetchGIFS()
    }

    fetchGIFS = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=qlm8X3Ir1Hw1Y4nSJFrdOu6DVCL7xXgG&tag=&rating=g`)
         .then(r => r.json())
         .then(({data})=> {
             this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url}) ) })
         })
    }


render() {
    return(
        <div>
            < GifSearch fetchGIFS={this.fetchGIFS}/>
            < GifList gifs={this.state.gifs}/>

        </div>
    )
}
}
export default GifListContainer

