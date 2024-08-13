import SideSwipe from "@/components/SideSwipe";
import {User, onAuthStateChanged} from "firebase/auth"
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import React, { useEffect, useState } from "react";


export default function HomeScreen() {
  const [userSet, setScreenUser] = useState<User| null>(null);
  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user:any)=>{
      setScreenUser(user['uid'])
    })
  })

  return (
    <>
   <SideSwipe user={userSet}/>
   </>
  );
}