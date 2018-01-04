import React, { Component } from 'react'
import Header from '../Header/Header'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div style={styles.container}>
                <Header style={{position: 'absolute', width: '100vw'}}/>
                <div style={styles.envelope}>
                    <img src="https://png.icons8.com/color/96/lock-2.png" title="Lock" width="200" height="200" />
                    <img src="https://png.icons8.com/color/96/secured-letter.png" title="Secured Letter" width="200" height="200" />
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#4c8ef7',
    },
    envelope: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
}

export default HomePage