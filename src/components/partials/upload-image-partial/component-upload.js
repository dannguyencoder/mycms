import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
// import { API_URL } from '../../../config'
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
    var formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']
    files.forEach((file, i) => {

      // #2 Catching wrong file types on the client
      if (types.every(type => file.type !== type)) {
        console.log('file type is illegal ')
        return false
      }
      if (file.size > 150000) {
        console.log('file size is too large')
        return false
      }

    })


    this.setState({ uploading: true })



    formData.append('files', files)
    formData.append('asdas', 'asdsadas')


    for (var key of formData.keys()) {
      console.log(key);
    }

    for (var value of formData.values()) {
      console.log(value.length);
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    console.log('data')
    console.log(formData)
    fetch('http://localhost:3010/image/image-upload', {
      mode: 'no-cors',
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', JSON.stringify(response)));



  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  render() {
    const { uploading, images } = this.state

    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div>
        <div className='buttons'>
          {content()}
        </div>
      </div >
    )
  }
}