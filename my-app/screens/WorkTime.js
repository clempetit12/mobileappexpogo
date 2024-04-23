
import { StyleSheet, Text, View, TouchableOpacity, Button, Pressable } from 'react-native'
import WorkTimeButton from '../components/WorkTimeButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastStatus, getWeekNumber } from './workTimeSlice';

 const WorkTime = () => {

  const API_URL = "http://10.0.2.2:8090/api/v1/workTime";
const dispatch = useDispatch();
const lastStatus = useSelector(state => state.workTime.lastStatus);
const weekNumber = useSelector(state => state.workTime.weekNumber);
const [currentDate, setCurrentDate] = "";


const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()+1).padStart(2, '0'); 
  console.log("day"+day)
  return `${year}-${month}-${day}`;
};


useEffect(() => {
    const currentDateValue = getCurrentDate();
  dispatch(getLastStatus());
  dispatch(getWeekNumber(currentDateValue
  ));
  console.log("weeknumber"+weekNumber)
  console.log("status"+ lastStatus)
}, [dispatch,lastStatus,weekNumber]);   





  
    
      return (
        <View style={styles.container}>

          <View style={styles.header}>
    

          </View>
    
        
          <Text style={styles.welcomeMessage}>Welcome Bianca</Text>
    
  
          <Text style={styles.date}>{getCurrentDate()}</Text>

          <Text style={styles.weekNumber}>Week Number : {weekNumber}</Text>
    
          <View style={styles.buttonsContainer}>
          <View style={styles.buttonsContainer}>
          <TouchableOpacity >
          <WorkTimeButton clocking="IN"  />
        </TouchableOpacity>
        <TouchableOpacity >
          <WorkTimeButton clocking="OUT" />
        </TouchableOpacity>
      </View>
        
      </View>

      <View style={styles.bottomBorder}></View>
      
          <Text style={styles.hoursWorked}>Total Hours Worked</Text>
          <Text style={styles.hours}> XX hours</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      logo: {
        width: 50,
        height: 50,
      },
      employeeImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      welcomeMessage: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
      date: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20,
      },
      weekNumber: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 40,
      },
      hoursWorked: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20
      },
      hours : {
        fontSize: 20,
        textAlign: 'center',

      },
      bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: 'black', 
        marginBottom: 10, 
      }
    });
    
    export default WorkTime;
    


