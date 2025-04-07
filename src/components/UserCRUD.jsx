import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  addUserData,
  getUserData,
  updateUserData,
  deleteUserData,
} from '../database/firestoreCRUD';
// addUserData and getUserData are functions that interact with the Firestore database

const UserCRUD = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getUserData();
      // getUserData is a function that retrieves user data from the Firestore database
      // It returns a promise that resolves to an array of user objects
      setUsers(fetchedUsers);
      // console.log(users);
      // console.log(users[0].id);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };
  useEffect(() => {
    fetchUsers();
    // fetchUsers is called when the component mounts to retrieve user data
    // It updates the users state with the fetched data
  }, []);
  const handleSubmit = async () => {
    if (!userEmail || !userName || !userPhone) {
      Alert.alert('Please fill in all fields');
      return;
    }
    const userData = {
      name: userName,
      email: userEmail,
      phone: userPhone,
    };
    try {
      if (userId) {
        await updateUserData(userId, userData);
        Alert.alert('User updated successfully!');
      } else {
        await addUserData(userData);
        Alert.alert('User added successfully!');
      }
      // If userId is not set, add a new user
      // userData is an object containing the user's information
      // It includes the email, name, and phone number entered by the user
      // addUserData is a function that adds a new user to the Firestore database
      // It takes the user data as an argument and returns a promise
      // The promise resolves when the data is successfully added
      setUserEmail('');
      setUserName('');
      setUserPhone('');
      setUserId(null);
      fetchUsers(); // Refresh the user list after adding/updating a user
      // fetchUsers is called to refresh the user list after adding or updating a user
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  };
  const handelDelete = async id => {
    try {
      await deleteUserData(id);
      Alert.alert('User deleted successfully!');
      fetchUsers(); // Refresh the user list after deleting a user
    } catch (error) {
      console.error('Error deleting user: ', error);
      Alert.alert('Error deleting user: ', error.message);
    }
  };
  const handleEdit = user => {
    setUserEmail(user.email);
    setUserName(user.name);
    setUserPhone(user.phone);
    setUserId(user.id); // Set the userId to the ID of the user being edited
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>{userId ? 'Edit User' : 'Add User'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={userName}
          onChangeText={setUserName}
          keyboardType="default"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={userEmail}
          onChangeText={setUserEmail}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={userPhone}
          onChangeText={setUserPhone}
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{userId ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>{item.email}</Text>
              <Text style={styles.cardSubtitle}>{item.phone}</Text>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEdit(item)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handelDelete(item.id)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyState}>No users found</Text>
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default UserCRUD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0F172A', // Dark navy
  },
  form: {
    backgroundColor: '#1E293B', // Dark card
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#F8FAFC', // Bright white
    marginBottom: 15,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#334155', // Muted blue-gray border
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#F1F5F9', // Light text
    backgroundColor: '#0F172A', // Input dark background
  },
  primaryButton: {
    backgroundColor: '#3B82F6', // Blue button
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F9FAFB',
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#1E293B', // Card dark
    padding: 18,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E2E8F0', // Lighter heading
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#94A3B8', // Subtle gray
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  editButton: {
    backgroundColor: '#22C55E', // Green
    paddingVertical: 10,
    borderRadius: 6,
    width: '48%',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#EF4444', // Red
    paddingVertical: 10,
    borderRadius: 6,
    width: '48%',
    alignItems: 'center',
  },
  emptyState: {
    textAlign: 'center',
    color: '#64748B', // Muted text
    fontSize: 16,
    marginTop: 40,
  },
  listContent: {
    paddingBottom: 40,
  },
});
