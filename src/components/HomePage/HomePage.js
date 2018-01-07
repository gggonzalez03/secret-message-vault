import React, { Component } from 'react'
import Header from '../Header/Header'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div style={styles.container}>
                <Header />
                <div style={styles.envelope}>
                    <img src="https://png.icons8.com/color/96/lock-2.png" title="Lock" width="200" height="200" alt="lock icon"/>
                    <img src="https://png.icons8.com/color/96/secured-letter.png" title="Secured Letter" width="200" height="200" alt="envelope icon"/>
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
    envelope: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default HomePage