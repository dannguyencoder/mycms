import React from 'react';
import '../../styles/ImageUploadPreview.css';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        console.log("props");
        console.log(props);
        this.state = {
            avatar: props.initialImage
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.avatar !== nextProps.initialImage) {
            return {
                ...prevState,
                avatar: nextProps.initialImage
            }
        }
        return prevState;
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        // data.append('filename', this.uploadInput.files[0].name);
        // console.log("file--------------------");
        // console.log(this.uploadInput.files[0]);
        // console.log("data--------------------");
        // console.log(data);

        fetch('http://localhost:3001/images/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                console.log(body);
                this.setState({avatar: `http://localhost:3001/${body.file}`});
                console.log(this.state);
                this.props.changeHandler({avatar: `http://localhost:3001/${body.file}`});
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