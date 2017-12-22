import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReduxComponentTemplate extends Component {
    state = {}
    render() {
        return (
            <div>

            </div>
        )
    }
}

const styles = {

}

const mapStateToProps = ({  }) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponentTemplate)