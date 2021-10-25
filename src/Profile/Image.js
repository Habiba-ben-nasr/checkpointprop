import React from 'react'
import photo from '../photo.jpg'

const Image = (props) => {
    return (
        <div>

            <img src={photo} style={props.stylephoto} alt=""/>


        </div>
    )
}

export default Image
