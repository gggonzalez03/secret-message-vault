import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TurningDial extends Component {
    state = {}

    constructor() {
        super()
    }

    componentWillMount() {
        this.setState({
            lockAngle: 0,
            currentAngle: 0,
            knobRotation: this.props.knobRotation || 0,
        })
    }

    getX = (radius, angle) => {
        return radius * Math.cos(angle * Math.PI / 180)
    }
    getY = (radius, angle) => {
        return radius * Math.sin(angle * Math.PI / 180)
    }
    getCircleSideCoordinates = (radius, slices) => {
        let sliceAngle = 360 / slices
        let angleCollection = []
        for (var multiplier = 1; multiplier <= slices; multiplier++) {
            angleCollection.push({
                angle: sliceAngle * multiplier,
                x: this.getX(radius, sliceAngle * multiplier),
                y: this.getY(radius, sliceAngle * multiplier),
            })
        }
        return angleCollection
    }
    generateTicksPath = (radius, angleCollectionOuter, angleCollectionInner) => {
        let ticksPath = ``
        for (var index = 0; index < angleCollectionOuter.length; index++) {
            ticksPath += `M${radius + angleCollectionOuter[index].x},${radius - angleCollectionOuter[index].y}
                        L${radius + angleCollectionInner[index].x},${radius - angleCollectionInner[index].y}`
        }
        return ticksPath
    }

    // Coordinates of the mouse in a div and convert them
    // to (x, y) coordinates based on the radius of the dial
    getCoords(event) {
        const { radius } = this.props
        var bounds = event.target.getBoundingClientRect();
        var x = event.clientX - bounds.left - radius
        var y = (event.clientY - bounds.top - radius) * -1
        return {
            x: x,
            y: y,
        }
    }

    // This will set necessary angle offset while turning
    startTurn(angle) {
        /**
         * TODO:
         * Stop propagation such that dial labels do not fire an event
         */
        const { knobRotation } = this.state
        this.setState({
            lockAngle: angle, // This angle will be the reference (offset) for the NEXT turn
            currentAngle: knobRotation, // This angle will be the reference (offset) for THIS turn
            mouseDown: true,
        })
    }

    // Calculate the rotation of the knob based on the offsets set by startTurn
    turn(angle) {
        const { lockAngle, currentAngle } = this.state
        let knobRotation = angle - lockAngle + currentAngle

        // Keep angle value less than 360 but keep the right rotation
        if (knobRotation > 360)
            knobRotation = knobRotation % 360
        if (knobRotation < 0)
            knobRotation = knobRotation + 360

        this.setState({
            knobRotation: knobRotation,
        })
    }

    // Let the app know that the user already stopped turning
    endTurn() {
        this.setState({
            mouseDown: false,
        })
    }

    // Get angle of of (x, y) coordinates
    getAngle(x, y) {
        return Math.atan2(y, x) * 180 / Math.PI
    }
    render() {
        const { radius, tickHeight, slices, inBetweenSlicesTicksCount, color, step, rotateOffset, tickWidth, style } = this.props
        const { knobRotation } = this.state

        // Bigger ticks
        let angleCollectionOuter = this.getCircleSideCoordinates(radius, slices)
        let angleCollectionInner = this.getCircleSideCoordinates(radius - tickHeight, slices)

        // Smaller ticks
        let angleCollectionOuterBetween = this.getCircleSideCoordinates(radius - tickHeight / 4, slices * inBetweenSlicesTicksCount)
        let angleCollectionInnerBetween = this.getCircleSideCoordinates(radius - tickHeight / 2 - tickHeight / 4, slices * inBetweenSlicesTicksCount)

        // Tick labels
        let tickLabelCoordinateCollection = this.getCircleSideCoordinates(radius - tickHeight, slices)

        // Set the labels
        tickLabelCoordinateCollection = tickLabelCoordinateCollection.map((tick, index) => {
            let multiplier = index + 1
            return {
                ...tick,
                label: step * multiplier
            }
        })

        let bigTicks = this.generateTicksPath(radius, angleCollectionOuter, angleCollectionInner)
        let smallTicks = this.generateTicksPath(radius, angleCollectionOuterBetween, angleCollectionInnerBetween)
        return (
            <div style={{ width: radius * 2, height: radius * 2, ...styles.container, ...style }}
                onMouseDown={(event) => {
                    let coords = this.getCoords(event)
                    let angle = this.getAngle(coords.x, coords.y)
                    this.startTurn(angle)
                }}
                onMouseMove={(event) => {
                    if (this.state.mouseDown) {
                        let coords = this.getCoords(event)
                        let angle = this.getAngle(coords.x, coords.y)

                        this.turn(angle)
                    }
                }}
                onMouseUp={() => {
                    this.endTurn()
                }}
            >
                <svg height={radius * 2} width={radius * 2}>
                    <g
                        // knobRotation * -1 will correct the rotation turning it the other way
                        transform={`rotate(${knobRotation * -1} ${radius} ${radius})`}
                    >
                        <path
                            d={bigTicks}
                            stroke={color}
                            strokeWidth={tickWidth}
                        />
                        <path
                            d={smallTicks}
                            stroke={color}
                            strokeWidth={tickWidth}
                        />
                        {tickLabelCoordinateCollection.map(tick => (
                            <text
                                key={tick.angle}
                                x={radius + tick.x}
                                y={radius - tick.y}
                                fill={color}
                                textAnchor="middle"
                                alignmentBaseline="hanging"
                                fontSize={16}
                                transform={`rotate(${90 - tick.angle} ${radius + tick.x} ${radius - tick.y})`} // The angle of rotation and the origin(x,y)
                            >
                                {tick.label}</text>
                        ))}
                    </g>
                </svg>
            </div>
        )
    }
}

const styles = {
    container: {
        cursor: 'pointer',
        borderRadius: '50%',
    }
}


// Default values for props
TurningDial.defaultProps = {
    radius: 100,
    slices: 12,
    inBetweenSlicesTicksCount: 5,
    step: 10,
    tickHeight: 10,
    tickWidth: 1,
    color: 'black',
    rotateOffset: 0,
    style: {

    }
}

TurningDial.propTypes = {
    radius: PropTypes.number,
    slices: PropTypes.number,
    inBetweenSlicesTicksCount: PropTypes.number,
    step: PropTypes.number,
    tickHeight: PropTypes.number,
    tickWidth: PropTypes.number,
    color: PropTypes.string,
    rotateOffset: PropTypes.number,
    style: PropTypes.object,
}

export default TurningDial