import {
  createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from '../Components/Login/Login/Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false)
  const [token, setToken] = useState('')
  //register
  const registerUser = (email, password,name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = {
          email,
          displayName: name,
          photoURL:
            "https://lh3.googleusercontent.com/a/AATXAJzGjwMoTx4c_G7bqu2ndWnOqtAkPxC4N4PClOI0=s96-c",
        };
        setUser(newUser);
        saveUser(email, name, 'POST')
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://lh3.googleusercontent.com/a/AATXAJzGjwMoTx4c_G7bqu2ndWnOqtAkPxC4N4PClOI0=s96-c",
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          });
        history.replace("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  //google login
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
        saveUser(result.user.email, result.user.displayName, "PUT");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);        
      }).finally(()=>setIsLoading(false));
  };
  //login
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  //manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken=> {
          setToken(idToken)
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  //logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  //save user 
  const saveUser = (email, displayName, method) => {
    const user = {email, displayName};
    fetch("https://agile-gorge-57234.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  }


  return {
    user,
    registerUser,
    logout,
    loginUser,
    token,
    admin,
    isLoading,
    authError,
    signInWithGoogle,
  };
}
export default useFirebase;