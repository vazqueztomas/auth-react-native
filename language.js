import {I18n} from 'aws-amplify';

I18n.setLanguage('es');

const dict = {
  es: {
    'Enter your username': 'Ingresa tu usuario',
    'Enter your password': 'Ingresa tu contraseña',
    'Sign Up': 'Registrate',
    'Please Sign In / Sign Up': 'Registrarse / Iniciar sesión',
    'Customized signup': 'Registrate',
    'Full Name': 'Nombre completo',
    'Reset your password': 'Reseteá tu contraseña',
    SEND: 'Resetear',
  },
};

I18n.putVocabularies(dict);
