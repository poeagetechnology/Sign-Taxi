import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sign up with email and password
  const signup = async (email, password, displayName, phoneNumber) => {
    try {
      setError(null);
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const createdUser = userCredential.user;

      // Update profile with display name
      await updateProfile(createdUser, {
        displayName: displayName,
      });

      // Save user data to Firestore
      const userDocRef = doc(db, "users", createdUser.uid);
      await setDoc(userDocRef, {
        uid: createdUser.uid,
        email: email,
        displayName: displayName,
        phoneNumber: phoneNumber,
        createdAt: new Date(),
        updatedAt: new Date(),
        rideHistory: [],
        savedLocations: [],
        paymentMethods: [],
      });

      setUser(createdUser);
      return createdUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Login with email and password
  const login = async (email, password) => {
    try {
      setError(null);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const loggedInUser = userCredential.user;

      // Fetch user data from Firestore
      const userDocRef = doc(db, "users", loggedInUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        setUserData(userDocSnap.data());
      }

      setUser(loggedInUser);
      return loggedInUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Logout
  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      setUser(null);
      setUserData(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Fetch user data from Firestore
  const fetchUserData = async (uid) => {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        setUserData(userDocSnap.data());
        return userDocSnap.data();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Update user profile
  const updateUserProfile = async (displayName, photoURL) => {
    try {
      setError(null);
      if (user) {
        await updateProfile(user, {
          displayName: displayName,
          photoURL: photoURL,
        });
        setUser((prev) => ({
          ...prev,
          displayName,
          photoURL,
        }));
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setUser(currentUser);
        if (currentUser) {
          await fetchUserData(currentUser.uid);
        } else {
          setUserData(null);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    userData,
    loading,
    error,
    signup,
    login,
    logout,
    fetchUserData,
    updateUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
