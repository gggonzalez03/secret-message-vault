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
            <div style={{width: radius * 2, height: radius * 2, ...styles.container, ...style}}>
                <svg height={radius * 2} width={radius * 2}>
                    <g>
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