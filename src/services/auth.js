// Import necessary functions from Firebase Modular SDK
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Firebase config (replace with your own Firebase config)
const firebaseConfig = {
    apiKey: 'AIzaSyBhDr4uTQwKKo2-GhynDFLgu_8ySzHQams',
    authDomain: 'sayantan-d1ae3.firebaseapp.com', // This was missing in the details you provided, it's usually in the format <project-id>.firebaseapp.com
    projectId: 'sayantan-d1ae3',
    storageBucket: 'sayantan-d1ae3.appspot.com', // Updated based on the storage bucket you provided
    messagingSenderId: '521390234968',
    appId: '1:521390234968:android:3d2fa52ed494011875592d', // Normally, you'd use this for an Android app, but you can get the appId for web in the Firebase console
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
