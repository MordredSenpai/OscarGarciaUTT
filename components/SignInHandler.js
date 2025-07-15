import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export async function signIn(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}
