import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

import * as apis from '../../apis/apis.js';

const mediaItems = apis.getAllImages();
const myUploadFn = (param) => {

    const serverURL = 'http://localhost:8080/uploadFile';
    const xhr = new XMLHttpRequest
    const fd = new FormData()

    const successFn = (response) => {
        // 假设服务端直接返回文件上传后的地址
        // 上传成功后调用param.success并传入上传后的文件地址
        const responseImageJSON = JSON.parse(xhr.responseText);
        param.success({
            url: `http://localhost:3002/${responseImageJSON.file}`,
            meta: {
                id: 'Replace this video id',
                title: 'Replace this video title',
                alt: 'Replace this video alt',
                loop: true, // 指定音视频是否循环播放
                autoPlay: true, // 指定音视频是否自动播放
                controls: true, // 指定音视频是否显示控制栏
                poster: 'http://replace.this.video.poster/image.png', // 指定视频播放器的封面
            }
        })
    };

    const progressFn = (event) => {
        // 上传进度发生变化时调用param.progress
        param.progress(event.loaded / event.total * 100)
    };

    const errorFn = (response) => {
        // 上传发生错误时调用param.error
        param.error({
            msg: 'unable to upload.'
        })
    };

    xhr.upload.addEventListener("progress", progressFn, false)
    xhr.addEventListener("load", successFn, false)
    xhr.addEventListener("error", errorFn, false)
    xhr.addEventListener("abort", errorFn, false)

    fd.append('file', param.file)
    xhr.open('POST', serverURL, true)
    xhr.send(fd)

};

const myValidateFn = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            file.size < 4096 * 100 ? resolve() : reject()
        }, 0)
    })
};

const acceptedMediaTypes = {
    image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
    video: 'video/mp4',
    audio: 'audio/mp3'
};

const mImageControls = [
    'float-left',
    'float-right',
    {
        text: 'Foo', // 指定控件文字，可传入jsx
        render: (mediaData) => {
        }, // 控件渲染函数，该属性指定时，text和onClick属性将被忽略
        onClick: (block) => {
        } // 指定控件点击后的回调，参数为当前图片的block对象
    },
    'link',
    'size',
    'remove'
];

export default class TextEditor extends React.Component {

    constructor(props) {
        super(props);
        const intialContent = props.initialContent ? props.initialContent : '';
        this.state = {
            editorState: BraftEditor.createEditorState(intialContent),
            outputHTML: intialContent,
            mediaItems: []
        }
    }

    componentDidMount() {
        this.isLivinig = true;
        this.getAllImages();
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //
    //     // if (prevState.outputHTML !== nextProps.initialContent) {
    //     //     return {
    //     //         ...prevState,
    //     //         outputHTML: nextProps.initialContent
    //     //     }
    //     // }
    //     // return prevState;
    //
    //     // if (prevState.editorState !== BraftEditor.createEditorState(nextProps.initialContent)) {
    //     //     return {
    //     //         ...prevState,
    //     //         editorState: BraftEditor.createEditorState(nextProps.initialContent)
    //     //     }
    //     // }
    //     // return prevState;
    // }

    getAllImages() {
        apis.getAllImages()
            .then(response => {
                this.setState({
                    mediaItems: response.data
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    mediaItems: []
                });
            });

    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML(),
            postContent: editorState.toHTML()
        })

        this.props.changeHandler({outputHTML: editorState.toHTML(), postContent: editorState.toHTML()});

    }

    // setEditorContentAsync = () => {
    //     this.isLivinig && this.setState({
    //         editorState: BraftEditor.createEditorState('<p>Your <b>post...!</b><p>')
    //     })
    // }

    render() {

        const {editorState, outputHTML, mediaItems} = this.state;
        // console.log("media items---------------");
        // console.log(mediaItems);

        console.log("current props");
        console.log(this.props.initialContent);
        console.log("current editor state");
        console.log(this.state.editorState.toHTML());

        return (
            <div>
                <div className="editor-wrapper">
                    <BraftEditor
                        language="en"
                        value={editorState}
                        onChange={this.handleChange}
                        media={{
                            uploadFn: myUploadFn,
                            validateFn: myValidateFn,
                            pasteImage: true,
                            accepts: acceptedMediaTypes
                            // items: mediaItems
                        }}
                        // media={{uploadFn: myUploadFn, validateFn: myValidateFn, pasteImage: true, accepts: acceptedMediaTypes}}
                        // media={{uploadFn: myUploadFn}}
                        // imageControls={mImageControls}
                    />
                </div>
                <h5>HTML Output</h5>
                <div className="output-content">{outputHTML}</div>
            </div>
        )
    }

}