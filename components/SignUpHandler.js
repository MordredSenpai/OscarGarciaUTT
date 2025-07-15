import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export async function signUp(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}
