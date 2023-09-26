import { useLocalSearchParams, useNavigation } from 'expo-router';

import {Text , View , Image , StyleSheet , Pressable , ScrollView} from 'react-native' ;
import userJson from '../../../assets/data/user.json';
import {User} from '@/types' ;
import ExperienceListItem from '../../components/ExperienceListItem' ;
import { useLayoutEffect, useState } from 'react';
export default function UserProfile(){
    const [user , setUser] = useState<User>(userJson);
    const {id} = useLocalSearchParams() ; 
    const navigation = useNavigation();
    const onConnect = () =>{
      console.warn('Connect Presed') ;
    };
    useLayoutEffect(()=>{
      navigation.setOptions({title: user.name}) ;
    } , [user?.name] ) ;
    navigation.setOptions({title:user.name}) ;
    return (
        <ScrollView style= {styles.container} showsVerticalScrollIndicator= {false}>
            {/* header */}
              <View style = {styles.header}>
                {/* background image */}
                <Image source ={{uri: user.backImage}} style = {styles.backImage} />
                <View style ={styles.headerContent} >
                  {/* profile image */}
                <Image source ={{uri: user.image}} style = {styles.image} />
                {/* name and position */}
                <Text style= {styles.name} >{user.name}</Text>
                <Text style= {styles.position} >{user.position}</Text>
                {/* connnect button */}
                <Pressable onPress= {onConnect} style = {styles.button}  > 
                    <Text style = {styles.buttonText} >Connect</Text>
                </Pressable>
                </View>
              </View>  
            {/* about */}
            <View style = {styles.section} > 
              <Text style = {styles.sectionTitle}>About</Text>
             
              <Text style = {styles.paragraph}>{user.about}</Text>
            </View>
            {/* experience */}
            <View style = {styles.section} > 
              <Text style = {styles.sectionTitle}>Experience</Text>
              {user.experience?.map((experience=> <ExperienceListItem key={experience.id} experience = {experience} />))}
              
            </View>
        </ScrollView>
    );
} 

const styles = StyleSheet.create({
    container: {},
    header: {
      backgroundColor: 'white',
      marginBottom: 5 , 
    },
    backImage: {
      width: '100%' ,
      aspectRatio: 5/2 ,
      marginBottom: -60 , // transform tricky 
    },
    headerContent:{
      padding:10 ,
      paddingTop: 0,
    },
    image:{
      width: 100 ,
      aspectRatio: 1 ,
      borderRadius: 50 , 
      borderWidth: 3 , 
      borderColor: 'white' , 
    },
    name:{
      fontSize: 24 , 
      fontWeight: '500' ,
    },
    position:{

    },
    // button 
    button :{
      backgroundColor: 'royalblue' ,
      padding: 10 ,
      alignItems: 'center' , 
      borderRadius: 20 , 
      marginVertical: 10 , 
    },
    // button text 
    buttonText:{
      color: 'white' ,
      fontWeight: '600' ,
    } ,
    section:{
      backgroundColor: 'white' ,
      padding: 10 ,
      marginVertical: 5 , 

    },
    sectionTitle: {
      fontSize: 18 , 
      fontWeight: '600' ,
      marginVertical: 5 ,
    },
    paragraph:{
      lineHeight: 20 , 
    },

});


