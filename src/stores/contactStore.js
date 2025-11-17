import { create } from 'zustand';

export const useContactStore = create((set) => ({
  name: '',
  email: '',
  message: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setMessage: (message) => set({ message }),
  reset: () => set({ name: '', email: '', message: '' }),
}));