import React, { Component } from 'react'
import { connect } from 'react-redux'
import DialHandle from './DialHandle'

class DialHandleContainer extends Component {
    state = {}
    render() {
        const { rotate } = this.props
        return (
            <DialHandle
                color='#2572ed'
                radius={150}
                grip={60}
                rotateOffset={rotate}
            />
        )
    }
}

const mapStateToProps = ({ dial }) => {
    return {
        rotate: dial.rotate
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialHandleContainer)