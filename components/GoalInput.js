import { useState } from 'react'
import {View,TextInput,StyleSheet, Button,Modal,Alert} from 'react-native'

const GoalInput = ({visible,onCancel,onAddGoal}) =>{
    const [input,setInput] = useState('')

    const addGoalHandler = () =>{
        if(input==''){
            Alert.alert(
                "Invalid Input",
                "Please Insert the some Text",
                [
                  {
                    text: "Cancel",
                    onPress: () => onCancel(),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => onCancel() }
                ]
              );
              return;
        }
        onAddGoal(input)
        setInput('')
    }

    return <Modal visible={visible} animationType="slide" >
     <View style={styles.inputContainer}>
                <TextInput placeholder='Enter Your Goal' style={styles.textInput} onChangeText={e => setInput(e)} value={input}/>
                <View style={styles.buttonContainer}>
                     <View style={styles.button}>
                    <Button title='CANCEL' color="red" onPress={()=>onCancel()}/>
                    </View>
                    <View style={styles.button}>
                    <Button title='ADD' onPress={()=>addGoalHandler()}/>
                    </View>
                </View>
    </View>
    </Modal>

}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    textInput:{
        borderColor:"black",
        borderWidth:1,
        padding:10,
        width:"80%",
        marginBottom:10
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        // borderWidth:2,
        // borderColor:"black",
        width:"60%"
    },
    button:{
        width:"40%"
    }
})


export default GoalInput