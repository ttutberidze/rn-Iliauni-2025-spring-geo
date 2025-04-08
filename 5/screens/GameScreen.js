import { useState } from 'react'
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native'

const diceConfig = {
    1: require('../assets/dice/1.png'),
    2: require('../assets/dice/2.png'),
    3: require('../assets/dice/3.png'),
    4: require('../assets/dice/4.png'),
    5: require('../assets/dice/5.png'),
    6: require('../assets/dice/6.png'),
}

const GameScreen = () => {
    const [player1Dice, setPlayer1Dice] = useState(1)
    const [player2Dice, setPlayer2Dice] = useState(1)

    const [player1Score, setPlayer1Score] = useState(0)
    const [player2Score, setPlayer2Score] = useState(0)

    const roll = () => {
        const player1Dice = Math.floor(Math.random() * 6) + 1
        const player2Dice = Math.floor(Math.random() * 6) + 1

        setPlayer1Dice(player1Dice)
        setPlayer2Dice(player2Dice)

        if (player1Dice === player2Dice) {
            Alert.alert('ფრეა!', 'ორივემ გააგორა ' + player1Dice, [
                {
                    text: 'Ok',
                    cancelable: true
                }
            ])
        } else if(player1Dice > player2Dice) {
            setPlayer1Score((prev) => prev + 1)
        } else {
            setPlayer2Score((prev) => ++prev)
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.dices}>
                <View>
                    <Text style={styles.text}>Player 1</Text>
                    <Image 
                        style={styles.image} 
                        source={diceConfig[player1Dice]}
                    />
                    <Text style={styles.text}>{player1Score}</Text>
                </View>
                <View>
                    <Text style={styles.text}>VS</Text>
                </View>
                <View>
                    <Text style={styles.text}>Player 2</Text>
                    <Image 
                        style={styles.image} 
                        source={diceConfig[player2Dice]} 
                    />
                    <Text style={styles.text}>{player2Score}</Text>
                </View>
            </View>
            <Button title='Roll' onPress={roll} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120
    },
    dices: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    wrapper: {
        gap: 40,
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'comic',
        textAlign: 'center'
    }
})

export default GameScreen