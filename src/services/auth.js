// Import necessary functions from Firebase Modular SDK
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Firebase config (replace with your own Firebase config)
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Auth instance
const auth = getAuth(app);

export const register = async (email, password) => {
    try {
        // Create a user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Send email verification
        await sendEmailVerification(userCredential.user);

        return userCredential.user;
    } catch (error) {
        let err;
        switch (error.code) {
            case 'auth/email-already-in-use':
                err = 'Email already in use';
                break;
            case 'auth/invalid-email':
                err = 'Invalid email address';
                break;
            case 'auth/operation-not-allowed':
                err = 'Operation not allowed';
                break;
            case 'auth/weak-password':
                err = 'Weak password';
                break;
            default:
                err = 'An unknown error occurred';
        }
        throw new Error(err);
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return { user, emailverified: user.emailVerified };//VERY IMPORTANT
    } catch (error) {
        let err;
        switch (error.code) {
            case 'auth/user-not-found':
                err = 'User not found';
                break;
            case 'auth/wrong-password':
                err = 'Wrong password';
                break;
            default:
                err = 'An unknown error occurred';
        }
        throw new Error(err);
    }
};
export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error signing out:', error);
    }
};
export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        let err;
        switch (error.code) {
            case 'auth/user-not-found':
                err = 'User not found';
                break;
            case 'auth/invalid-email':
                err = 'Invalid email address';
                break;
            default:
                err = 'An unknown error occurred';
        }
        throw new Error(err);
    }
};
