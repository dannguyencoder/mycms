import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
// import { API_URL } from '../../../config'
// import './App.css'
const fetch = require("node-fetch")

export default class ComponentUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      images: ''
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

    var data = new FormData()
    this.setState({ uploading: true })
    files.map((file, i) => {
      data.append('file', file)
      console.log(file)
    })
    data.append('category', 'User')
    const url = "http://localhost:3001/image/image-upload";
    const getData = async url => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: data,

        });
        const json = await response.json();
        console.log(json)
        const lstImage = []
        json.images.map((image, i) => {
          const imageObj = {}
          imageObj.src = 'http://localhost:3001/images/' + image
          imageObj.public_id = 'id_' + i
          lstImage[i] = imageObj
        })
        console.log(lstImage)
        this.setState({
          images: lstImage
        })
        console.log(this.state.images)
      } catch (error) {
        console.log(error);
      }
    };
    getData(url);

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
        // case uploading:
        //   return <Spinner />
        case this.state.images.length > 0:
          return <Images images={this.state.images} removeImage={this.removeImage} />
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