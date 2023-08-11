import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
export default function Transactions(){
    const transactions = useSelector(state=>state.transactions)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.row}>
                    <Ionicons name="arrow-back-outline" size={24} color="#FFF"/>
                    <Text style={styles.headerText}>Transactions</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="menu" size={26} color="#FFF" style={{marginRight:10}}/>
                    <Entypo name="dots-three-vertical" size={20} color="#FFF" />
                </View>
            </View>
            <View style={styles.chips}>
                <Text style={styles.chip}>All</Text>
                <Text style={styles.chip}>Daily</Text>
                <Text style={styles.chip}>Weekly</Text>
                <Text style={styles.selectedChip}>Monthly</Text>
                <Text style={styles.chip}>Yearly</Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.miniHeader}>
                    <Entypo name="chevron-left" size={24} color="#FFF"/>
                    <Text style={styles.dateText}>{'01-Aug-2023 -> 31-Aug-2023'}</Text>
                    <Entypo name="chevron-right" size={24} color="#FFF"/>
                </View>
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
                            <Text>{item.type ==='income'?item.amount:'-'}</Text>
                            <Text>{item.type ==='expense'?item.amount:'---'}</Text>
                        </View>
                    )}
                />
            </View>
            <View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.mainButton,{backgroundColor:'green', marginRight:10}]}>
                        <Text style={styles.buttonText}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mainButton,{backgroundColor:'red'}]}>
                        <Text style={styles.buttonText}>Expense</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.summaryContainer}>
                <View style={styles.row}>
                    <View style={styles.summarySection}>
                        <Text style={[styles.summaryText,styles.incomeText]}>{'Total Income\n0'}</Text>
                    </View>
                    <View style={styles.summarySection}>
                        <Text style={[styles.summaryText,styles.expenseText]}>{'Total Expense\n0'}</Text>
                    </View>
                    <View style={styles.summarySection}>
                        <Text style={styles.summaryText}>{'Balance\n0'}</Text>
                    </View>
                </View>
                <Text style={styles.previousSummary}>Previous Balance    <Text style={styles.incomeText}>12000</Text></Text>
                <Text style={styles.previousSummary}>Balance    <Text style={styles.incomeText}>12000</Text></Text>
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