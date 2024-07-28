import React, { createContext, useState, useContext, ReactNode } from 'react';
import { signIn, signUp, signOut } from '../services/auth';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface User extends Omit<SupabaseUser, 'email'> {
  email: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    const authContext: AuthContextType = {
      user,
      signIn: async (email: string, password: string) => {
        try {
          const { data, error } = await signIn(email, password);
          if (error) throw error;
          setUser(data.user as User);
        } catch (error) {
          console.error('Sign in error:', error);
          throw error;
        }
        },
    signUp: async (email: string, password: string) => {
      try {
        const { data, error } = await signUp(email, password);
        if (error) throw error;
        setUser(data.user as User);
      } catch (error) {
        console.error('Sign up error:', error);
        throw error;
      }
    },
    signOut: async () => {
      try {
        await signOut();
        setUser(null);
      } catch (error) {
        console.error('Sign out error:', error);
        throw error;
      }
    },
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
