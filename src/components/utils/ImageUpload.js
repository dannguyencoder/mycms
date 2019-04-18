import React from 'react';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
        console.log(data)

        fetch('http://localhost:3001/images/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                console.log(body);
                this.setState({imageURL: `http://localhost:3001/${body.file}`});
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input ref={(ref) => {
                        this.uploadInput = ref;
                    }} type="file"/>
                </div>
                <div>
                    <input ref={(ref) => {
                        this.fileName = ref;
                    }} type="text" placeholder="Enter the desired name of file"/>
                </div>
                <br/>
                <div>
                    <button onClick={this.handleUploadImage}>Upload</button>
                </div>
                <img src={this.state.imageURL} alt="img"/>
            </React.Fragment>
        );
    }
}

export default ImageUpload;