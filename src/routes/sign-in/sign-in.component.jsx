import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase.utils"

const Signin=()=>{
     const logGoogleUser= async ()=>{
          const {user} =await signInWithGooglePopup();
          createUserDocumentFromAuth(user);
          // console.log(response);
     }

     return (
          <div>
               <h1>Sign In Page</h1>
               <button onClick={logGoogleUser}>
                    Sign in with Google Popup
               </button>
          </div>
     )
}

export default Signin