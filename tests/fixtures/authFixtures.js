export const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: 'authenticated',
  uid: 12312,
  email: 'user@gmail.com',
  displayName: 'User',
  photoURL: 'https://user.jpg',
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: '123',
  email: 'demo@gmail.com',
  displayName: 'Demo User',
  photoURL: 'https://demouser.png',
};