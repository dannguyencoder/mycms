import React from 'react';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        console.log("props");
        console.log(props);
        const initialImage = props.initialImage ? props.initialImage : '';
        this.state = {
            avatar: initialImage
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (prevState.avatar !== nextProps.initialImage) {
    //         return {
    //             ...prevState,
    //             avatar: nextProps.initialImage
    //         }
    //     }
    //     return prevState;
    // }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        

        fetch('http://localhost:8080/uploadFile', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                console.log(body);
                this.setState({avatar: body.fileDownloadUri});
                console.log(this.state);
                this.props.changeHandler({avatar: body.fileDownloadUri});
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
        console.log('current avatar');
        console.log(this.state.avatar);
        console.log('current props avatar value initialImage');
        console.log(this.props.initialImage);
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
                <img className="ImageUploadPreview" src={this.props.initialImage} alt="Your Avatar"/>
            </React.Fragment>
        );
    }
}

export default ImageUpload;