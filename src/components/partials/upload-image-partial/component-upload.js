import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
// import { API_URL } from '../../../config'
// import './App.css'

export default class ComponentUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      images: []
    };

    this.onChange = this.onChange.bind(this);
  }


  onChange = e => {
    const files = Array.from(e.target.files)
    if (files.length > 3) {
      const msg = 'Only 3 images can be uploaded at a time'
      console.log(msg)
      return false;
    }
    var data = new FormData()
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



    data.append('file', this.files)
    data.append('asdas', 'asdsadas')

    console.log(data.file)
    fetch('http://localhost:3010/image/image-upload', {
      mode: 'no-cors',
      method: 'POST',
      body: data,
      'htc': data
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