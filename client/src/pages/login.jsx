import React from "react";
import Image from "next/image";
import {FcGoogle} from "react-icons/fc";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {firebaseAuth} from "@/utils/FirebaseConfig";
import {CHECK_USER_Route} from "@/utils/ApiRoutes";
import axios from "axios";
import {useRouter} from "next/router";
import {useStateProvider} from "@/context/StateContext";
import {reducerCases} from "@/context/constants";


function login() {
    const router = useRouter();

    const [{}, dispatch] = useStateProvider();
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const {user:{
            displayName: name,
            email: email,
            photoURL: profileImage,
        }} = await signInWithPopup(firebaseAuth, provider);
try {
    if (email) {
      const { data } = await axios.post(CHECK_USER_Route,{email});
      console.log({data})
          if(!data.status){

                dispatch({type: reducerCases.SET_NEW_USER, newUser: true,})
                dispatch({
                    type: reducerCases.SET_USER_INFO,
                    userInfo: {
                        name,
                        email,
                        profileImage,
                        status: "",
                    }
                });
              await router.push("/onboarding");
          }
    }
}catch (err){
    console.log(err)
}

    };
  return (
      <div className='flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6'>
       <div className='flex items-center justify-center gap-2 text-white'>
          <Image src="/Whatsapp.gif" alt='whatsapp' height={300} width={300}  />
          <span className='text-7xl'>
              Whatsapp Clone
          </span>
       </div>
          <button className='flex items-center justify-center gap-7 bg-search-input-container-background rounded-lg p-5'
            onClick={() => {handleLogin()}}
          >
              <FcGoogle className='text-4xl'/>
                <span className='text-white text-2xl'>Login with Google</span>
          </button>
      </div>
  );

}

export default login;
