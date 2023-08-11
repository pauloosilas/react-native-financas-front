import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

 const list = [
    {
        id: 1,
        label: 'Boleto de conta de luz',
        value: '300,90',
        date: '18/09/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Pix cliente X',
        value: '2.500,00',
        date: '17/09/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '16/09/2022',
        type: 1
    }
 ]

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Header name="Paulo Silas" />
      <Balance saldo="9.250,90" gastos="-527,00"/>
      <Actions />

      <Text style={styles.title}>Ultimas Movimentações </Text>

      <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false} //barra de rolagem
            renderItem={({item}) => <Movements data={item}/>}
            />  

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
   // marginLeft: 14,
  //  marginRight: 14,
  //  marginTop: 14,
  //  marginBottom: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
