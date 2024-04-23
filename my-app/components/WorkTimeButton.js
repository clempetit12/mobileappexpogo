import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkTime } from '../screens/workTimeSlice';
import { FontAwesome5 } from '@expo/vector-icons';


import { StyleSheet, Text, View, TouchableOpacity, Button, Pressable } from 'react-native'

const WorkTimeButton = ({ clocking}) => {
    const dispatch = useDispatch();
    const [isClockInButtonDisabled, setIsClockInButtonDisabled] = useState(false);
    const lastStatus = useSelector(state => state.workTime.lastStatus);


    const API_URL = "http://10.0.2.2:8090/api/v1/workTime";

    const handlePress = () => {
        dispatch(addWorkTime({ clocking }));
        console.log("clic");
        setIsClockInButtonDisabled(true);
    };
 
    

 
    const buttonColor = isClockInButtonDisabled ? 'gray' : (clocking === 'IN' ? 'red' : 'green');
    
    return (
      <Pressable style={[styles.button, { backgroundColor: buttonColor }]} onPress={handlePress} disabled={isClockInButtonDisabled}>
        <Text style={styles.buttonText}>{`Clock ${clocking}`} </Text>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      height: 100,
      borderRadius: 10,
      marginBottom : 20
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
  });
  
  export default WorkTimeButton;