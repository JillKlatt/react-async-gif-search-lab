import React from 'react';

const GifList = props => {
    //console.log(props)

    // if (this.props.gifs.length > 0){
    // let gifs = this.props.gifs
    

        return(
            <div>
                <ul>
                    {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
                </ul>
            </div>
        )
}

export default GifList