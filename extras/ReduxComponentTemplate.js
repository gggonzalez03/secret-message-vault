import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
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

ReduxComponentTemplate.defaultProps = {
    
}

ReduxComponentTemplate.propTypes = {

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