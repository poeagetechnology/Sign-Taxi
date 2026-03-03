// User profile service
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const updateUserProfile = async (userId, profileData) => {
  try {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
      ...profileData,
      updatedAt: new Date(),
    });
  } catch (error) {
    throw new Error(`Failed to update profile: ${error.message}`);
  }
};

export const getUserProfile = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (error) {
    throw new Error(`Failed to fetch profile: ${error.message}`);
  }
};

export const addSavedLocation = async (userId, location) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    const currentLocations = userDoc.data().savedLocations || [];

    await updateDoc(userDocRef, {
      savedLocations: [...currentLocations, location],
      updatedAt: new Date(),
    });
  } catch (error) {
    throw new Error(`Failed to save location: ${error.message}`);
  }
};

export const addPaymentMethod = async (userId, paymentMethod) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    const currentMethods = userDoc.data().paymentMethods || [];

    await updateDoc(userDocRef, {
      paymentMethods: [...currentMethods, paymentMethod],
      updatedAt: new Date(),
    });
  } catch (error) {
    throw new Error(`Failed to add payment method: ${error.message}`);
  }
};
