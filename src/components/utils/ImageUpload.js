import React from 'react';
import '../../styles/ImageUploadPreview.css';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        

        fetch('http://localhost:3002/images/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                console.log(body);
                this.setState({avatar: `http://localhost:3002/${body.file}`});
                console.log(this.state);
                this.props.changeHandler({avatar: `http://localhost:3002/${body.file}`});
            });
        });
    }

    validateImageFile(imageFile) {
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!allowedExtensions.exec(imageFile.name)) {
            alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
            return false;
        }
        
        if (imageFile.size > 4000000) {
            alert('Please upload file less than 4MBs');
            return false;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input ref={(ref) => {
                        this.uploadInput = ref;
                    }} type="file"/>
                </div>
                <br/>
                <div>
                    <button onClick={this.handleUploadImage}>Upload</button>
                </div>
                <img className="ImageUploadPreview" src={this.state.avatar} alt="Your Avatar"/>
            </React.Fragment>
        );
    }
}

export default ImageUpload;