import React,{Component} from 'react'
import {View,Animated,Text,StyleSheet,TextInput,TouchableOpacity, Alert,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import {DropDown} from 'react-native-material-dropdown' 
export default class Requestscreen extends Component{
    constructor(){
        super();
        this.state={
            dropdown:"",
            details:"",
            
        }
    }
    render(){
        var data=[{
            value:"books",
        },{
            value:"clothes",
        },{
            value:"stationary",
        }];
        return(
            <View>
                <DropDown 
                label="Items"
                data={data}
                />
                <TextInput placeholder="More details" onChangeText={(text)=>{
                    this.setState({text:this.state.details})
                }}/>
                <TouchableOpacity onPress={()=>{
                  
                }}><Text>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}