import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export const addUserData = async (userData) => {
    try {
        await firestore().collection('users').add(userData);
        // firestore() is a reference to the Firestore database
        // collection('users') specifies the collection where the data will be stored
        // add(userData) adds the user data to the collection
        // userData is an object containing the user's information
        console.log('User data added successfully!',userData);
    } catch (err) {
        console.error('Error adding user data: ', err);
        Alert.alert('Error', err.message);
    }
};
export const getUserData = async () => {
    try {
        const userSnapshot = await firestore().collection('users').get();
        const userData = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        //userSnapshot is a snapshot of the documents in the collection
        // docs is an array of document snapshots
        // firestore() is a reference to the Firestore database
        // collection('users') specifies the collection from which to retrieve data
        // get() retrieves all documents in the collection
        // snapshot.docs contains an array of document snapshots
        // map() creates a new array with the document ID and data for each document
        console.log('User data retrieved successfully!');
        return userData;
    } catch (err) {
        console.log('Error retrieving user data: ', err);
    }
};
export const updateUserData = async (userId, updatedData) => {
    try {
        await firestore().collection('users').doc(userId).update(updatedData);
        // firestore() is a reference to the Firestore database
        // collection('users') specifies the collection where the data is stored
        // doc(userId) specifies the document to be updated
        // userId is the ID of the document to be updated
        // updatedData is an object containing the updated user information
        console.log('User data updated successfully!');
    } catch (err) {
        console.warn('Error updating user data: ', err);
    }
};
export const deleteUserData = async (userId) => {
    try {
        await firestore().collection('users').doc(userId).delete();
        // firestore() is a reference to the Firestore database
        // collection('users') specifies the collection where the data is stored
        // userId is the ID of the document to be deleted
        console.log('User data deleted successfully!');
    } catch (err) {
        console.warn('Error deleting user data: ', err);
    }
};
