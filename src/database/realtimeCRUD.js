import database from '@react-native-firebase/database';

export const addUserData = async (userData) => {
    try {
        const newUserRef = database().ref('/users').push();
        // Push a new user reference to the database, push generates a new id for the user
        // This generates a unique key for the new user
        await newUserRef.set(userData);// Set the user data at the new reference
        // This sets the user data at the new reference in the database
        console.log('User added successfully!');
    } catch (err) {
        console.error('Error adding user: ', err);
    }
};
export const getUserData = async () => {
    try {
        const snapshot = await database().ref('/users').once('value');
        // Once retrieves the data at the specified reference once
        // This retrieves the user data from the database
        const users = snapshot.val() ? Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })) : [];
        // Convert the snapshot to an object
        // Check if the snapshot has any data
        console.log(users);
        return users;
    } catch (err) {
        console.error('Error fetching users: ', err);
    }
};
export const updateUserData = async (userId, userData) => {
    try {
        await database().ref(`/users/${userId}`).update(userData);
        // Update the user data at the specified reference
        console.log('User updated successfully!');
    } catch (err) {
        console.error('Error updating user: ', err);
    }
};
export const deleteUserData = async (userId) => {
    try {
        await database().ref(`/users/${userId}`).remove();
        // Remove the user data at the specified reference
        console.log('User deleted successfully!');
    } catch (err) {
        console.error('Error deleting user: ', err);
    }
};
