import React, {Component} from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import {API_URL} from '../../../config'
// import './App.css'

export default class ComponentUpload extends Component {

    state = {
        uploading: false,
        images: []
    }

    onChange = e => {
        const files = Array.from(e.target.files)
        if (files.length > 3) {
            const msg = 'Only 3 images can be uploaded at a time'
            console.log(msg)
            return false;
        }
        const types = ['image/png', 'image/jpeg', 'image/gif']
        files.forEach((file, i) => {

            // #2 Catching wrong file types on the client
            if (types.every(type => file.type !== type)) {
                console.log('file type is illegal ')
                return false
            }
            if (file.size > 150000000000000) {
                console.log('file size is too large')
                return false
            }
        })


        this.setState({uploading: true});

        const formData = new FormData();
        files.forEach((file, i) => {
            formData.append(i, file)
        });
        formData.append('a',files)
        console.log("================")
        console.log(files)
        fetch(`http://localhost:3001/image/image-upload`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(images => {
                this.setState({
                    uploading: false,
                    images
                })
            })


    }

    removeImage = id => {
        this.setState({
            images: this.state.images.filter(image => image.public_id !== id)
        })
    }

    render() {
        const {uploading, images} = this.state

        const content = () => {
            switch (true) {
                case uploading:
                    return <Spinner/>
                case images.length > 0:
                    return <Images images={images} removeImage={this.removeImage}/>
                default:
                    return <Buttons onChange={this.onChange}/>
            }
        }

        return (
            <div>
                <div className='buttons'>
                    {content()}
                </div>
            </div>
        )
    }
}