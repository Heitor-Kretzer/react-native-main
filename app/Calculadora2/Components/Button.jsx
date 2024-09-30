import { Pressable, View, Text, StyleSheet } from "react-native"

const Buttons = (props) => {

    return (
        <View style={styles.row}>
            <Pressable style={[props.styleOne, styles.button]} onPress={props.funcOne}>
                <Text style={styles.text}>{props.textOne}</Text>
            </Pressable>

            <Pressable style={[props.styleTwo, styles.button]} onPress={props.funcTwo}>
                <Text style={styles.text}>{props.textTwo}</Text>
            </Pressable>

            <Pressable style={[props.styleThree, styles.button]} onPress={props.funcThree}>
                <Text style={styles.text}>{props.textThree}</Text>
            </Pressable>

            <Pressable style={[props.styleFour, styles.button]} onPress={props.funcFour}>
                <Text style={styles.text}>{props.textFour}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 35,
        height: 35,
        display: 'flex',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center,',
        color: 'black'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center'
    },
})

export default Buttons