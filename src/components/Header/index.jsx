import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from "moti"

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; //android : IOS

export default function Header({ name }){
    return(
        <View style={styles.container}>
            {/*<View*/} 
            <MotiView 
                from={{
                  translateY: -150,
                  opacity: 0,      
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,  
                }}
                transition={{
                    type: "spring",
                    duration: 800,
                    dalay: 300, 
                }}
                style={styles.content}>

                    <MotiText 
                        from={{
                            translateX: -300
                        }}
                        animate={{
                            translateX: 0
                        }}
                        transition={{
                            type: "timing",
                            duration: 800,
                            delay: 800,
                        }}
                        style={styles.username}>{ name }
                    </MotiText>

                    <TouchableOpacity activeOpacity={0.9}  style={styles.buttonUser}>
                        <Feather name="user" size={27} color="#FFF"/> 
                    </TouchableOpacity>
            </MotiView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
        backgroundColor: '#8000ff',
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
   content: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between'
   },
   username: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: "bold",
   },
   buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44/2,
   }
})