// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';

// export function Auth() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState<any>([]);

//   // Handle user state changes
//   function onAuthStateChanged(user:any) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }