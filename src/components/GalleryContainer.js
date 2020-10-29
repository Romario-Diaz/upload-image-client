import React, { useState } from 'react'
import List from './List'
import Upload from './Upload'

const GalleryContainer = () => {

    const [ images, setImages ] = useState([])

    return (
        <div className="container mt-3" >
            <div className="row">
                <div className="col-md-3">
                    <Upload 
                        setImages={setImages}
                        images={images}
                    />
                </div>
                <div className="col-md-9">
                    <List />
                </div>  
            </div>
        </div>
    )
}

export default GalleryContainer