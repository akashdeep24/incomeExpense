import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button, Modal, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';

export default function AddExpense() {
	const todayDate = new Date();
	const currentHour = todayDate.getHours();
	const currentMinute = todayDate.getMinutes();
	const [amount, setAmount] = useState('0');
	const [paymentMethod, setPaymentMethod] = useState('cash');
	const [category, setCategory] = useState('other');
	const [note, setNote] = useState('');
	const [date, setDate] = useState(format(todayDate, 'dd MM yyyy'));
	const [time, setTime] = useState(`${currentHour}:${currentMinute}`);
	const [showDate, setShowDate] = useState(false);
	const [showTime, setShowTime] = useState(false);
	const [showPaymentMethods, setShowPaymentMethods] = useState(false)
	const [showCategories, setShowCategories] = useState(false)
    const paymentMethodOptions = [
        'Bank',
        'Card',
        'Cash',
        'Others',
    ]
	const categoryOptions = [
        {
            icon:<FontAwesome name="plane" size={35} color="#16A1D9" />,
            label:'Air Tickets'
        },
        {
            icon:<MaterialIcons name="electric-rickshaw" size={35} color="#16A1D9" />,
            label:'Auto Rickshaw'
        },
        {
            icon:<MaterialIcons name="pedal-bike" size={35} color="#16A1D9" />,
            label:'Bike'
        },
        {
            icon:<Ionicons name="newspaper" size={35} color="#16A1D9" />,
            label:'Bills'
        },
        {
            icon:<MaterialIcons name="tv" size={35} color="#16A1D9" />,
            label:'Cable TV'
        },
        {
            icon:<FontAwesome name="tv" size={35} color="#16A1D9" />,
            label:'Car'
        },
        {
            icon:<FontAwesome name="plane" size={35} color="#16A1D9" />,
            label:'Air Tickets'
        },
        {
            icon:<MaterialIcons name="electric-rickshaw" size={35} color="#16A1D9" />,
            label:'Auto Rickshaw'
        },
        {
            icon:<MaterialIcons name="pedal-bike" size={35} color="#16A1D9" />,
            label:'Bike'
        },
    ]
	const onChangeValue = (key, value)=>{
		switch(key){
			case 'amount':
				setAmount(value)
				break;
			case 'paymentMethod':
				setPaymentMethod(value)
				ShowPaymentMethods()
				break;
			case 'category':
				console.log(value)
				setCategory(value)
				ShowCategories()
				break;
			case 'note':
				setNote(value)
				break;
			case 'date':
				setDate(value)
				setShowDate()
			case 'time':
				const currentHour = value.getHours();
				const currentMinute = value.getMinutes();
				const timeValue = `${currentHour}:${currentMinute}`
				setTime(timeValue)
				setShowTime()
		}
	}
	const showDatepicker = ()=>{
		setShowDate(!showDate)
	}
	const showTimepicker = ()=>{
		setShowTime(!showTime)
	}
	const ShowPaymentMethods = ()=>{
		setShowPaymentMethods(!showPaymentMethods)
	}
	const ShowCategories = ()=>{
		setShowCategories(!showCategories)
	}
  const submitTransaction = (amount, paymentMethod, category, date, time, note)=>{
		dispatch(addTransaction({type:'expense',amount:amount, paymentMethod:paymentMethod, category:category, date:date, time:time, note:note}))
		setAmount('0')
		setPaymentMethod('cash')
		setNote('')
		setCategory('other')
		setDate(format(todayDate, 'dd MM yyyy'))
		setTime(`${currentHour}:${currentMinute}`)
	}
	return (
		<View style={styles.main}>
			<View style={styles.field}>
				<Text style={styles.fieldTitle}>Amount</Text>
				<TextInput
					maxLength={10}
					onChangeText={value => onChangeValue('amount',value)}
					value={amount}
					style={{padding: 10}}
					keyboardType="numeric"
				/>
			</View>
			<View style={styles.field}>
				<Text style={styles.fieldTitle}>Payment Method</Text>
				<TextInput
					maxLength={10}
					onChangeText={value => onChangeValue('paymentMethod',value)}
					value={paymentMethod}
					style={{padding: 10}}
				/>
			</View>
			<View style={styles.field}>
				<Text style={styles.fieldTitle}>Category</Text>
				<TextInput
					maxLength={10}
					onChangeText={value => onChangeValue('category',value)}
					value={category}
					style={{padding: 10}}
					keyboardType="numeric"
				/>
			</View>	
			<View style={styles.field}>
				<Text style={styles.fieldTitle}>Notes</Text>
				<TextInput
					maxLength={200}
					onChangeText={value => onChangeValue('note',value)}
					value={note}
					style={{padding: 10}}
				/>
			</View>
			<View style={styles.field}>
				<Text style={styles.fieldTitle}>Date</Text>
				<TouchableOpacity style={styles.Date} onPress={showDatepicker}>
					<Text style={{fontSize:14, fontWeight:'bold'}}>{date}</Text>
				</TouchableOpacity>
				{showDate && (
					<DateTimePicker
						value={new Date()}
						mode='date'
						onChange={(event, val)=> event.type==='set'  ? onChangeValue('date',format(val,'dd MM yyyy' )) :showDatepicker}
						minimumDate={new Date()}
					/>
				)}
			</View>
			<View style={styles.field}>
				<Text style={styles.fieldTitle}>Time</Text>
				<TouchableOpacity style={styles.Date} onPress={showTimepicker}>
					<Text style={{fontSize:14, fontWeight:'bold'}}>{time}</Text>
				</TouchableOpacity>
				{showTime && (
					<DateTimePicker
						value={new Date()}
						mode='time'
						onChange={(event, val)=> event.type==='set'  ? onChangeValue('time',val) :showTimepicker}
						minimumDate={new Date()}
					/>
				)}
			</View>	
			<View style={styles.bottomBar}>
				<TouchableOpacity onPress={ShowPaymentMethods} style={styles.bottomButton}>
					<Text style={styles.fieldTitle}>Payment Method</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={ShowCategories} style={styles.bottomButton}>
					<Text style={styles.fieldTitle}>Category</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>submitTransaction()} style={[styles.bottomButton, {backgroundColor:'green'}]}>
					<Text style={[styles.fieldTitle, {color:'white'}]}>Submit</Text>
				</TouchableOpacity>
			</View>
			<Modal transparent visible={showPaymentMethods}>
				<View style={[StyleSheet.absoluteFillObject, styles.container]}>
					<View style={styles.paymentMethodOptionsContainer}>
						<View style={styles.header}>
							<AntDesign style={{marginRight:10}} name="wallet" size={24} color="#16A1D9"/>
							<Text style={styles.headerText}>Payment Mode</Text>
						</View>
						{
							paymentMethodOptions.map(paymentMethodOptions=>(
								<TouchableOpacity onPress={()=>{onChangeValue('paymentMethod',paymentMethodOptions)}} key={paymentMethodOptions}>
									<Text style={styles.paymentMethodOptions}>{paymentMethodOptions}</Text>
								</TouchableOpacity>
							))
						}
					</View>
				</View>
        	</Modal>
			<Modal transparent visible={showCategories}>
				<View style={[StyleSheet.absoluteFillObject, styles.categorycontainer]}>
					<View style={styles.categoryOptionsContainer}>
						<View style={styles.categoryheader}>
							<Text style={styles.categoryheaderText}>Category</Text>
						</View>
						<FlatList
							data={categoryOptions}
							numColumns={3}
							columnWrapperStyle={{justifyContent:'space-around', marginTop:20}}
							renderItem={({item,index})=>(
								<TouchableOpacity onPress={()=>{onChangeValue('category',item.label)}} style={styles.categorybutton}>
									<View style={styles.icon}>{item.icon}</View>
									<Text>{item.label}</Text>
								</TouchableOpacity>
							)}
						/>                    
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
  main:{
    justifyContent:'center',
    alignItems:'center'
  },
  field:{
    borderWidth:1,
    borderRadius:5,
    width:'90%',
    height:70,
    margin:15,
  },
  fieldTitle:{
	marginLeft:5,
	fontSize:16,
	color:'black',
	fontWeight:'bold'
  },
  Date:{
	width:150,
	height:30,
	borderWidth:1,
	borderRadius:3,
	margin:10,
	alignItems:'center',
	justifyContent:'center',
	backgroundColor:'#16A1D9'
  },
  bottomBar:{
	height:80,
	width:'99%',
	flexDirection:'row',
	justifyContent:'center',
	alignItems:'center'
  },
  bottomButton:{
	justifyContent:'center',
	alignItems:'center',
	borderWidth:1,
	height:80,
	width:'33%',
  },
  container:{
	backgroundColor:'rgba(0,0,0,0.5)',
	justifyContent:'flex-end',
},
header:{
	padding:10,
	flexDirection:'row',
	alignItems:'center',
	borderBottomWidth:1,
	borderBottomColor:'#B3B3B3',
},
paymentMethodOptionsContainer:{
	backgroundColor:'#FFF',
	width:'100%',
},
headerText:{
	fontSize:18,
},
paymentMethodOptions:{
	padding:10,
	paddingHorizontal:20,
	fontSize:16,
	borderBottomColor:'#B3B3B3',
	borderBottomWidth:0.5,
},
addNewContainer:{
	padding:10,
	borderTopWidth:0.5,
	borderTopColor:'#B3B3B3',
},
button:{
	backgroundColor:'#16A1D9',
	padding:10,
	width:'100%',
	alignItems:'center',
	justifyContent:'center',
},
addNewText:{
	fontSize:16,
	color:'#FFF',
},
categorycontainer:{
	backgroundColor:'rgba(0,0,0,0.5)',
	justifyContent:'flex-end',
},
categoryheader:{
	padding:10,
	flexDirection:'row',
	alignItems:'center',
	borderBottomWidth:1,
	borderBottomColor:'#B3B3B3',
},
categoryOptionsContainer:{
	backgroundColor:'#FFF',
	width:'100%',
},
categoryheaderText:{
	fontSize:18,
},
categorybutton:{
	alignItems:'center',
	justifyContent:'center',
}
})