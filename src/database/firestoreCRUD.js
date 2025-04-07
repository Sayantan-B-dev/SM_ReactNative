import firestore from '@react-native-firebase/firestore';

export const addUserData = async (userData) => {
  try {
    await firestore().collection('users').add(userData);
    // firestore() is a reference to the Firestore database
    // collection('users') specifies the collection where the data will be stored
    // add(userData) adds the user data to the collection
    // userData is an object containing the user's information
    console.log('User data added successfully!');
  } catch (error) {
    console.error('Error adding user data: ', error);
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
    } catch (error) {
        console.error('Error retrieving user data: ', error);

  };
export const getUserData = async (userId) => {  