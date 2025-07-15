import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { signIn } from './components/SignInHandler';
import { signUp } from './components/SignUpHandler';
import { signOut } from 'firebase/auth';
import { auth } from './components/firebaseConfig';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false); // Nuevo estado

  const handleLogin = async () => {
    try {
      const loggedUser = await signIn(email, password);
      setUser(loggedUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const newUser = await signUp(email, password);
      setUser(newUser);
      setShowRegister(false); // Oculta el formulario después de registrar
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {user ? (
          <>
            <Text style={styles.title}>Bienvenido 🎉</Text>
            <Text style={styles.user}>{user.email}</Text>
            <View style={styles.button}>
              <Button title="Cerrar sesión" onPress={handleLogout} color="#FF6B6B" />
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>Oscar´s Dev Login</Text>
            {!showRegister ? (
              <>
                <SignInForm
                  email={email}
                  password={password}
                  onEmailChange={setEmail}
                  onPasswordChange={setPassword}
                  onLogin={handleLogin}
                />
                <View style={styles.button}>
                  <Button title="Registrarse" onPress={() => setShowRegister(true)} color="#10B981" />
                </View>
              </>
            ) : (
              <>
                <SignUpForm
                  email={email}
                  password={password}
                  onEmailChange={setEmail}
                  onPasswordChange={setPassword}
                  onRegister={handleRegister}
                />
                <View style={styles.button}>
                  <Button title="Volver al login" onPress={() => setShowRegister(false)} color="#3B82F6" />
                </View>
              </>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Fondo oscuro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 18,
    width: '100%',
    maxWidth: 380,
    shadowColor: '#0ea5e9',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 2,
    borderColor: '#0ea5e9', // Borde azul
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0ea5e9', // Azul vibrante
    letterSpacing: 1,
    textShadowColor: '#38bdf8',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  user: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 28,
    color: '#334155',
    fontWeight: '500',
  },
  button: {
    marginTop: 14,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#0ea5e9',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
});
