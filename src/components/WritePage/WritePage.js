import React, { Component } from 'react'
import Header from '../Header/Header'
import WriteTextArea from './WriteTextArea'
import WriteRecipient from './WriteRecipient'

class WritePage extends Component {
    state = {}
    render() {
        return (
            <div style={styles.container}>
                <Header />
                <div style={{
                    display: 'flex',
                    height: '500px',
                }}>
                    <div style={styles.writeRecipientContainer}>
                        <div style={styles.writeRecipient}>
                            <WriteRecipient />
                        </div>
                    </div>
                    <div style={styles.writeTextAreaContainer}>
                        <div style={styles.writeTextArea}>
                            <WriteTextArea />
                        </div>
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
        width: '100%',
        height: '100%',
        backgroundColor: '#4c8ef7',
    },
    writeTextAreaContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flex: 2,
        margin: '1em',
    },
    writeTextArea: {
        display: 'flex',
        height: '100%',
        width: '500px',
    },
    writeRecipientContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        margin: '1em',
    },
    writeRecipient: {
    }
}

export default WritePage