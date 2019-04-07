// import statements
import React from 'react'
import { View, Text } from 'react-native'
import Button from '../button/Button';

export default class Counter extends React.Component {

    state = {
        count: 0
    }

    render() {
        console.log('render Counter.js')
        const {
            containerStyle,
            buttonStyle,
            buttonTextStyle,
            rowContainerStyle,
            counterTextStyle
        } = styles
        const { count } = this.state

        return (
            <View style={containerStyle}>
                <Text style={counterTextStyle}>
                    {count}
                </Text>

                <View style={rowContainerStyle}>
                    <Button
                        style={buttonStyle}
                        onClick={this.onDecreaseButtonClicked}>
                        <Text style={buttonTextStyle}>
                            Decrease
                        </Text>
                    </Button>

                    <Button
                        style={buttonStyle}
                        onClick={() => {
                            this.setState({ count: count + 1 })
                        }}>
                        <Text style={buttonTextStyle}>
                            Increase
                        </Text>
                    </Button>
                </View>
            </View>
        )
    }

    onDecreaseButtonClicked = () => {
        const { count } = this.state
        if (count > 0) {
            this.setState({ count: count - 1 })
        }
    }

}

const styles = {
    containerStyle: {
        width: '100%',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: '#34495e',
        width: 120,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    buttonTextStyle: {
        fontSize: 20,
        color: '#000'
    },
    rowContainerStyle: {
        flexDirection: 'row'
    },
    counterTextStyle: {
        fontSize: 30,
        color: 'black'
    }
}