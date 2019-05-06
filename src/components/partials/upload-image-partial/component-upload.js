import React, { Component } from 'react'
// import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import * as apis from '../../utils/apis'

// import { API_URL } from '../../../config'
// import './App.css'

export default class ComponentUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // uploading: false,
      images: [{ public_id: '', src:'' }]
    };

    this.onChange = this.onChange.bind(this);
    this.getDataImage = this.getDataImage.bind(this);

  }
  getDataImage = async (data) => {
    return await apis.getDataImage(data).then(response => {
      const lstImage = []
      response.data.images.map((image, i) => {
        const imageObj = {}
        imageObj.src = 'http://localhost:3002/images/' + image
        imageObj.public_id = 'id_' + i
        lstImage[i] = imageObj
      })
      this.setState({
        images: lstImage
      })
    }).catch(error => {
      console.log(error);
    })
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    if (files.length > 3) {
      const msg = 'Only 3 images can be uploaded at a time'
      alert(msg)
      return false;
    }

    const types = ['image/png', 'image/jpeg', 'image/gif']
    files.forEach((file, i) => {

      // #2 Catching wrong file types on the client
      if (types.every(type => file.type !== type)) {
        alert('file type is illegal ')
        return false
      }
      if (file.size > 150000) {
        alert('file size is too large')
        return false
      }

    })

    var data = new FormData()
    this.setState({ uploading: true })
    files.map((file, i) => {
      data.append('file', file)
    })
    data.append('category', 'User')


    this.getDataImage(data);
  }



  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  render() {
    
    const { uploading, images } = this.state

    const content = () => {
      return <Images images={this.state.images} removeImage={this.removeImage} handleInputChange={this.props.handleInputChange} onChangeBtn={this.onChange} />

    }

    return (
      <div>
        <div className='buttons'>

        </div>
      </div >
    )
  }
}