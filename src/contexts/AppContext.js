import { createContext } from 'react';

const AppContext = createContext({
  languageId: 'en',
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  phoneNumber: '',
  avatar: null,
  country: '',
  isInPublicDirectory: false,
  biography: '',
  teamId: null,
  onLanguageChange: () => {},
  onProfileChange: () => {},
});

AppContext.displayName = 'AppContext';
export default AppContext;
