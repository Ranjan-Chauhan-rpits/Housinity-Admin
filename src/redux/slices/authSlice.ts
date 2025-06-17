// slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Define the state shape
interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  userName: string | null;
  userEmail: string | null;
  profileImage: string | '';
  id: string | null;
  // role?: string | null; // Optional if needed later
}

// 2. Define the login payload structure
interface LoginPayload {
  token: string;
  userName: string;
  profileImage: string;
  userEmail: string;
  id: string;
  // role?: string;
}

// 3. Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  userName: null,
  profileImage: '',
  userEmail: null,
  id: null,
};

// 4. Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      const { token, userName, profileImage, userEmail, id } = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      state.userName = userName;
      state.profileImage = profileImage;
      state.userEmail = userEmail;
      state.id = id;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.userName = null;
      state.userEmail = null;
      state.id = null;
    },
  },
});

// 5. Export actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
