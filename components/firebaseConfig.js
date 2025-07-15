// components/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase con tus credenciales reales
const firebaseConfig = {
  apiKey: "AIzaSyAL6Whq2kS23m5Unex82lIiBNLqQLllEog",
  authDomain: "firstproyect-89712.firebaseapp.com",
  projectId: "firstproyect-89712",
  storageBucket: "firstproyect-89712.firebasestorage.app",
  messagingSenderId: "252693238041",
  appId: "1:252693238041:web:9658c98ac6d58a732cb588"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
