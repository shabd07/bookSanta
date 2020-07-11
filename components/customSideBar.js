import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import firebase from 'firebase';
import{DrawerItems} from 'react-navigation-drawer'
 export default class CustomSideBarMenu extends Component{
     render(){
         return(
             <View style={{flex:1}}> 
             <View style={styles.drawerItemsContainer}>
                 <DrawerItems {...this.props}/>
                 <View style={styles.logOutContainer}>
                     <TouchableOpacity styles={styles.logOutButton}
                     onPress={()=>{
                         this.props.navigation.navigate('WelcomeScreen')
                         firebase.auth().signOut()
                     }}
                     >
                         <Text>Log Out</Text>
                     </TouchableOpacity>
                 </View>
             </View>
              </View>
         )
     }
 } 