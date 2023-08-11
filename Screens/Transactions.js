import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Transactions({navigation}){
    const transactions = useSelector(state=>state.transactions)
    const getBalance = (transactions)=>{
        let totalBalance = transactions.reduce((accumulator, transaction) => {
            if(transaction.type === 'income'){
                return accumulator + transaction.amount;
            }
            else if(transaction.type === 'expense'){
                return accumulator - transaction.amount;
            }
          }, 0)
        return totalBalance
    }
    const getExpense = (transactions)=>{
        let expense = transactions.reduce((accumulator, transaction) => {
            if(transaction.type === 'expense'){
                return accumulator + transaction.amount;
            }
            else{
                return accumulator
            }
          }, 0)
        return expense
    }
    const getIncome = (transactions)=>{
        let income = transactions.reduce((accumulator, transaction) => {
            if(transaction.type === 'income'){
                return accumulator + transaction.amount;
            }
            else{
                return accumulator
            }
          }, 0)
        return income
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.tablerHeader}>
                    <Text style={styles.tableHeaderText}>Date</Text>
                    <Text style={styles.tableHeaderText}>Category</Text>
                    <Text style={[styles.tableHeaderText, styles.incomeText]}>Income</Text>
                    <Text style={[styles.tableHeaderText, styles.expenseText]}>Expense</Text>
                </View>
            </View>
            <View style={styles.listOfTrasaction}>
                <FlatList
                    data={transactions}
                    renderItem={({item,index})=>(
                        <View style={styles.transaction}>
                            <Text>{item.date}</Text>
                            <Text>{item.category}</Text>
                            <Text>{item.type ==='income'?item.amount:'---'}</Text>
                            <Text>{item.type ==='expense'?item.amount:'---'}</Text>
                        </View>
                    )}
                />
            </View>
            <View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={()=>navigation.navigate('AddIncome')} style={[styles.mainButton,{backgroundColor:'green', marginRight:10}]}>
                        <Text style={styles.buttonText}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('AddExpense')} style={[styles.mainButton,{backgroundColor:'red'}]}>
                        <Text style={styles.buttonText}>Expense</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.summaryContainer}>
                <View style={styles.row}>
                    <View style={styles.summarySection}>
                        <Text style={[styles.summaryText,styles.incomeText]}>{`Total Income\n ${getIncome(transactions)}`}</Text>
                    </View>
                    <View style={styles.summarySection}>
                        <Text style={[styles.summaryText,styles.expenseText]}>{`Total Expense\n ${getExpense(transactions)}`}</Text>
                    </View>
                    <View style={styles.summarySection}>
                        <Text style={styles.summaryText}>{`Balance\n ${getBalance(transactions)}`}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#16A1D9',
        padding:10,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
    },
    headerText:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
        color:'#FFF',
    },
    chips:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:10,
        backgroundColor:'#16A1D9',
    },
    chip:{
        backgroundColor:'#FFF',
        padding:2,
        paddingHorizontal:10,
        borderRadius:15,
        fontWeight:'bold',
        marginRight:10,
    },
    selectedChip:{
        padding:2,
        paddingHorizontal:10,
        borderRadius:15,
        fontWeight:'bold',
        marginRight:10,
        borderWidth:1,
        borderColor:'#FFF',
        color:'#FFF'
    },
    mainContainer:{
        padding:5,
        flex:1,
        backgroundColor:'#FFF',
    },
    miniHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#16A1D9',
        padding:5,
        paddingHorizontal:10,
    },
    dateText:{
        color:'#FFF',
    },
    tableHeaderText:{
        fontWeight:'bold',
    },
    incomeText:{
        color:'green'
    },
    expenseText:{
        color:'red'
    },
    tablerHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5,
        paddingHorizontal:10,
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFF',
    },
    mainButton:{
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        width:'45%',
        borderRadius:5,
    },
    summaryContainer:{
        marginTop:5,
        borderWidth:0.5,
        borderColor:'#000',
        alignSelf:'center',
        width:'95%',
    },
    summaryText:{
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center',
    },
    summarySection:{
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        borderWidth:0.5,
        borderColor:'#000',
        flex:1,
    },
    previousSummary:{
        fontWeight:'bold',
        fontSize:16,
        borderWidth:0.5,
        borderColor:'#000',
        textAlign:'right',
        paddingRight:10,
    },
    transaction:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:0.5
    },
    listOfTrasaction:{
        width:'100%',
        backgroundColor:'white'
    }
})