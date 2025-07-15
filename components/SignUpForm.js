import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SignUpForm({ email, password, onEmailChange, onPasswordChange, onRegister }) {
  return (
    <View>
      <TextInput
        placeholder='Correo electrónico'
        value={email}
        onChangeText={onEmailChange}
        autoCapitalize='none'
        style={styles.input}
      />
      <TextInput
        placeholder='Contraseña'
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.button}>
        <Button title='Registrarse' onPress={onRegister} color="#10B981" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#cbd5e1',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 8,
  },
});
