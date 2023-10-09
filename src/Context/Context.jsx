import React, { createContext, useEffect, useState } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import app from "../../Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Context = ({ children }) => {
	const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)

	const EmailSignUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const EmailSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const provider = new GoogleAuthProvider();

	const GoogleSignIn = () => {
		return signInWithPopup(auth, provider);
	};

	const profile = (displayName) => {
		return updateProfile(auth.currentUser, {
			displayName: displayName,
		});
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
			setUser(CurrentUser);
            setLoading(false)

		});
		return () => unSubscribe();
	}, []);

	const obj = {
		EmailSignUp,
        loading,
		user,
		EmailSignIn,
		logOut,
		GoogleSignIn,
		profile,
	};
	return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export default Context;
