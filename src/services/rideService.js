// Ride booking service
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const bookRide = async (userId, rideDetails) => {
  try {
    const ridesCollection = collection(db, "rides");
    const docRef = await addDoc(ridesCollection, {
      userId,
      ...rideDetails,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    throw new Error(`Failed to book ride: ${error.message}`);
  }
};

export const getUserRides = async (userId) => {
  try {
    const ridesQuery = query(
      collection(db, "rides"),
      where("userId", "==", userId),
    );
    const querySnapshot = await getDocs(ridesQuery);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    throw new Error(`Failed to fetch rides: ${error.message}`);
  }
};

export const getRideDetails = async (rideId) => {
  try {
    const rideDoc = await getDoc(doc(db, "rides", rideId));
    if (rideDoc.exists()) {
      return {
        id: rideDoc.id,
        ...rideDoc.data(),
      };
    }
    return null;
  } catch (error) {
    throw new Error(`Failed to fetch ride details: ${error.message}`);
  }
};

export const updateRideStatus = async (rideId, status) => {
  try {
    await updateDoc(doc(db, "rides", rideId), {
      status,
      updatedAt: new Date(),
    });
  } catch (error) {
    throw new Error(`Failed to update ride: ${error.message}`);
  }
};

export const cancelRide = async (rideId) => {
  try {
    await updateDoc(doc(db, "rides", rideId), {
      status: "cancelled",
      cancelledAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    throw new Error(`Failed to cancel ride: ${error.message}`);
  }
};
