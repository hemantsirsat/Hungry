import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import InputFromUser from '../Component/InputFromUser';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// const MyRecipe = () => {
//     const [imageUpload, setImageUpload] = useState('Upload Image');
    
//     //Ask for permission and select image from local storage
//     const pickImage = async () => {
//         (async () => {
//             if (Platform.OS !== 'web') {
//               const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//               if (status !== 'granted') {
//                 alert('Sorry, we need camera roll permissions to make this work!');
//               }
//             }
//           })();  
//         let result = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.All,
//           allowsEditing: true,
//           aspect: [4, 6],
//           quality: 1,
//         });
        
//         if (!result.cancelled) {
//           setImageUpload(result.uri);
//         }
//       };
//     const bgImage = 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=353&q=80'
    
//     const renderContent = () => (
//         <View
//           style={{
//             backgroundColor: 'white',
//             padding: 16,
//             height: 450,
//           }}
//         >
//           <Text>Swipe down to close</Text>
//         </View>
//       );
    
//     return(
//         <View style={styles.viewStyle}>
//             <Image source={{uri:bgImage}} style={styles.bgImageStyle}/>
//             <View style={styles.formStyle}>
//                 <View style={styles.headerStyle}>
//                     <Text style={styles.headerTextStyle}>Add Your Recipe</Text>
//                 </View>
//                 <View style={styles.nameImageStyle}>
//                     <InputFromUser 
//                         placeHolder = 'Recipe Name'
//                     />

//                     <TouchableOpacity
//                         onPress={()=>pickImage()}
//                         style={styles.uploadImageStyle}
//                     >
//                         <View style={styles.uploadDetailsStyle}>
//                             <Text numberOfLines={1}>{imageUpload}</Text>
//                         </View>
//                     </TouchableOpacity>
//                     <InputFromUser
//                         placeHolder= 'Description'
//                     /> 
//                     <BottomSheet
//         // ref={sheetRef}
//         snapPoints={[450, 300, 0]}
//         borderRadius={10}
//         renderContent={renderContent}
//       />
//                 </View>
//             </View>
//         </View>
//     );
// }

export default function App() {
    const renderContent = () => (
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          height: 450,
        }}
      >
        <Text>Swipe down to close</Text>
      </View>
    );
  
    const sheetRef = React.useRef(null);
  
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: 'papayawhip',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            title="Open Bottom Sheet"
            onPress={() => sheetRef.current.snapTo(0)}
          />
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 300, 0]}
          borderRadius={10}
          renderContent={renderContent}
        />
      </>
    );
  }

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
    },
    // bgImageStyle:{
    //     height:'50%',
    //     opacity:10
    // },
    formStyle:{
        // position:'absolute',
        marginTop:-30,
        backgroundColor:'#FFF',
        flex:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    headerStyle:{
        justifyContent:'center',
        backgroundColor:'#DEDEDE',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingBottom:10
    },
    headerTextStyle:{
        alignSelf:'flex-start',
        fontWeight:'bold',
        fontSize:22,
        marginHorizontal:15,
        marginVertical:15
    },
    nameImageStyle:{

    },
    uploadImageStyle:{
        marginVertical:7,
        marginHorizontal:15,
        backgroundColor:'#deedee',
        padding:10,
        minHeight:45,
        borderRadius:7,
        justifyContent:'center'
    },
    uploadDetailsStyle:{
    },
});

// export default MyRecipe;