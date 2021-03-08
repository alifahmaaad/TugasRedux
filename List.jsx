import React ,{ useState }from 'react';
import {FlatList,Text, Button,View,TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addList, deleteList } from './redux/listAction';

const FoodList = () => {
  const [list, setList] = useState('')
  const dispatch = useDispatch();
  const deleteCurrent = (key) => dispatch(deleteList(key))
  const arrList = useSelector(state => state.listReducer.List)
  const submitList = (list) => dispatch(addList(list))
  return (
    <View>
    <TextInput
      value={list}
      placeholder='Name'
      onChangeText={(list) => setList(list)}
    />
    <Button onPress={() => {submitList(list) }} title="Submit"/>
  
    <FlatList 
    
      data={arrList}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={({item}) => <Text>{item.name}<Button style={{marginLeft:100}} title="hapus" onPress={() => deleteCurrent(item.key)}></Button></Text>}
      
    />
    </View>
  );
}


export default FoodList;