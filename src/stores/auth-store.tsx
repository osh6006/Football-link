import { create } from "zustand";

import { supabase } from "../libs/superbase-client";

import { Sport } from "../types";
import { Session } from "@supabase/supabase-js";

interface AuthState {
  step: number;
  minStep: number;
  maxStep: number;
  sports: Sport[];
  session: Session | null;
  setSession: (sesstion: Session | null) => void;
  setSports: (sport: Sport) => void;
  signIn: (provider: "google" | "github") => void;
  signOut: () => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  step: 1,
  minStep: 1,
  maxStep: 3,
  sports: [],
  session: null,
  setSports: (sport: Sport) =>
    set((state) => {
      const findIdx = state.sports.findIndex((el) => el.id === sport.id);
      if (findIdx !== -1) {
        return { sports: state.sports.filter((el) => el.id !== sport.id) };
      } else {
        return { sports: [...state.sports, sport] };
      }
    }),
  prevStep: () =>
    set((state) => {
      if (state.step === state.minStep) {
        return { step: 1 };
      }
      return { step: state.step - 1 };
    }),
  nextStep: () =>
    set((state) => {
      if (state.step === state.maxStep) {
        return { step: 3 };
      }
      return { step: state.step + 1 };
    }),
  signIn: async (provider) => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          redirectTo: `${window.location.origin}/auth`,
        },
      });
    } catch (error) {
      throw new Error(`${provider} signIn Error`);
    }
  },
  setSession: async (session) =>
    set(() => {
      return { session: session };
    }),
  signOut: async () => {
    await supabase.auth.signOut();
    set(() => {
      return { session: null };
    });
  },
}));
