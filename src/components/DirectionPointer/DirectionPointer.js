import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DirectionPointer extends Component {
    state = {}

    // Convert center based (cartesian) plane points to top left based plane points
    convertToTopLeftBasedPlane = (x, y) => {
        const { radius, padding } = this.props
        return {
            x: (radius + padding) + x,
            y: (radius + padding) - y,
        }
    }

    // Get x coordinate using radius and an angle in degrees
    getX = (radius, angle) => {
        return radius * Math.cos(angle * Math.PI / 180)
    }

    // Get y coordinate using radius and an angle in degrees
    getY = (radius, angle) => {
        return radius * Math.sin(angle * Math.PI / 180)
    }

    // Generate the pointer shape
    // The diameter will be the target size of the plane the image will be drawn into
    generatePointer = (radius, padding, rotate, pointerHeight) => {
        let head = this.convertToTopLeftBasedPlane(this.getX(radius, rotate), this.getY(radius, rotate))

        let tail = this.convertToTopLeftBasedPlane(this.getX(radius - pointerHeight, rotate), this.getY(radius - pointerHeight, rotate))

        let pointerPath = `M${head.x}, ${head.y}
                           L${tail.x}, ${tail.y}`

        return pointerPath
    }
    render() {
        const { radius, rotate, height, color, padding, markerWidth } = this.props
        /**
         * TODO:
         * Rotate via the path tag instead of drawing the svg
         * with given rotate value
         */
        const pointerPath = this.generatePointer(radius, padding, rotate, height)
        return (
            <svg
                height={(2 * radius) + (2 * padding)}
                width={(2 * radius) + (2 * padding)}
            >
                <g>
                    <path
                        d={pointerPath}
                        stroke={color}
                        strokeWidth={markerWidth}
                    />
                </g>
            </svg>
        )
    }
}

// Set default props
DirectionPointer.defaultProps = {
    radius: 100,
    rotate: 0,
    height: 10,
    color: 'black',
    padding: 0,
    markerWidth: 1,
}

DirectionPointer.propTypes = {
    radius: PropTypes.number,
    rotate: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    padding: PropTypes.number,
    markerWidth: PropTypes.number,
}

export default DirectionPointer