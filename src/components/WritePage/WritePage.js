import React, { Component } from 'react'
import Header from '../Header/Header'
import WriteTextArea from './WriteTextArea'

class WritePage extends Component {
    state = {}
    render() {
        return (
            <div style={styles.container}>
                <Header />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div style={styles.writeTextArea}>
                        <WriteTextArea />
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
    writeTextArea: {
        display: 'flex',
        height: '500px',
        width: '500px',
    }
}

export default WritePage