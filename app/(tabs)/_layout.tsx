import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {User, onAuthStateChanged} from "firebase/auth"
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user:any)=>{
      console.log("user:",user['uid'])
    })
  })

  const signIn = async () => {
    setLoading(true);
    try {
      const response: any = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      setUser(response["uid"]);
    } catch (err: any) {
      console.log(err);
      alert("Sign In failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response: any = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert('user created')
      setUser(response["uid"]);


    }  catch (err: any) {
      console.log(err);
      alert("Sign In failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };
  return user === null ? (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
      <Text style={styles.header}> Welcome to the Launch Academy </Text>
      
      <TextInput
        placeholder="Enter Email"
        autoCapitalize="none"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        value={password}
        style={styles.input}
        placeholder="Enter Password"
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity
            style={{ borderRadius: 5, backgroundColor: "red" }}
            onPress={signIn}
          >
            <Text style={styles.buttonPrimary}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={signUp}>
            <Text style={styles.buttonLink}>Register</Text>
          </TouchableOpacity>
        </>
      )}
      </KeyboardAvoidingView>
    </View>
  ) : (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Lessons",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "rocket" : "rocket-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="focus"
        options={{
          title: "Focus",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "eye" : "eye-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Pro Chat",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chatbubbles" : "chatbubbles-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="coach"
        options={{
          title: "60s Coach",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "stopwatch" : "stopwatch-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  buttonPrimary: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    padding: 20,
    borderRadius: 5,
    
  },
  buttonLink: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    padding: 20,
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 40
  }
});
