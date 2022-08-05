import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
const GoalItem = ({title,onDelete,id}) => {
  return (
        <TouchableOpacity onPress={()=>onDelete(id)} >
        <View style={styles.listItem}>
            <Text>{title}</Text>
        </View>
        </TouchableOpacity>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:"#D8BFD8",
        marginVertical:10,
        borderColor:"black",
        borderWidth:1
    },
    pressed:{
        opacity:0.76
    }
})