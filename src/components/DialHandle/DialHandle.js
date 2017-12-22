import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DialHandle extends Component {
    state = {}

    getX = (radius, angle) => {
        return radius * Math.cos(angle * Math.PI / 180)
    }
    getY = (radius, angle) => {
        return radius * Math.sin(angle * Math.PI / 180)
    }

    getCircleSideCoordinates = (radius, grip) => {
        let gripAngle = 360 / grip
        let angleCollection = []
        for (var multiplier = 1; multiplier <= grip; multiplier++) {
            angleCollection.push({
                angle: gripAngle * multiplier,
                x: this.getX(radius, gripAngle * multiplier),
                y: this.getY(radius, gripAngle * multiplier),
            })
        }
        return angleCollection
    }

    generateHandlePath = (radius, endPoints) => {
        let handlePath = ``
        for (var index = 0; index < endPoints.length; index++) {
            if (!index)
                handlePath = `M${radius + endPoints[index].x},${radius - endPoints[index].y}`
            else
                handlePath += `A10,10 0 0 0 ${radius + endPoints[index].x},${radius - endPoints[index].y}`
        }

        // Close the path with a curve
        handlePath += `A10,10 0 0 0 ${radius + endPoints[0].x},${radius - endPoints[0].y}`

        return handlePath
    }

    render() {
        const { radius, grip, rotateOffset, color, style } = this.props
        return (
            <div style={{ width: radius * 2, height: radius * 2, ...styles.container, ...style }}>
                <svg height={radius * 2} width={radius * 2}>
                    <path
                        d={this.generateHandlePath(radius, this.getCircleSideCoordinates(radius-10, grip))}
                        stroke={color}
                        fill={color}
                        strokeWidth={1}
                        transform={`rotate(${(rotateOffset) * -1} ${radius} ${radius})`}
                    />
                </svg>
            </div>
        )
    }
}

const styles = {
    container: {
    }
}

// Default values for props
DialHandle.defaultProps = {
    radius: 100,
    grip: 50,
    color: 'black',
    rotateOffset: 90,
    style: {

    },
}

DialHandle.propTypes = {
    radius: PropTypes.number,
    grip: PropTypes.number,
    color: PropTypes.string,
    rotateOffset: PropTypes.number,
    style: PropTypes.object,
}

export default DialHandle