import React, { Component } from 'react'
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'

class WriteTextArea extends Component {

    state = {
        editorState: EditorState.createEmpty(),
    }

    onChange = (editorState) => {
        this.setState({ editorState })
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.writeTextAreaContainer}>
                    <div className='DraftEditor-editorContainer' style={styles.writeTextArea}>
                        <Editor
                            editorState={this.state.editorState}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
                <div style={styles.sendButtonContainer}>
                    <div style={styles.sendButton}>
                        Send
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    writeTextAreaContainer: {
        flex: 1,
        padding: '2em',
        backgroundColor: '#fff',
        borderRadius: '8px',
    },
    writeTextArea: {
        height: '100%',
        backgroundColor: '#fff',
    },
    sendButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1em',
    },
    sendButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '2px',
        backgroundColor: 'rgb(206, 68, 68)',
        color: 'white',
        cursor: 'pointer',
        padding: '.5em',
        margin: '.5em',
        marginTop: '1em',
        marginBottom: '1em',
    }
}

export default WriteTextArea