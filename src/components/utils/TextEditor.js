import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class TextEditor extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p>Enter your post here <b>...!</b></p>'),
        outputHTML: '<p></p>'
    }

    componentDidMount () {
        this.isLivinig = true
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount () {
        this.isLivinig = false
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState('<p>Your <b>post...!</b><p>')
        })
    }

    render () {

        const { editorState, outputHTML } = this.state

        return (
            <div>
                <div className="editor-wrapper">
                    <BraftEditor
                        language="en"
                        value={editorState}
                        onChange={this.handleChange}
                    />
                </div>
                <h5>HTML Output</h5>
                <div className="output-content">{outputHTML}</div>
            </div>
        )

    }

}