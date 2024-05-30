import { computed } from '@angular/core';

import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

type SessionState = {
  isLoading: boolean;
  username: string;
  error: string;
};

const initialState: SessionState = {
  isLoading: false,
  username: '',
  error: '',
};

export const SessionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withMethods((store) => ({
    login(username: string, password: string, afterLogin: () => void): void {
      if (username === 'admin' && password === 'maestroreadmin') {
        patchState(store, { isLoading: false, username, error: '' });
        afterLogin();
        return;
      }

      patchState(store, {
        isLoading: false,
        error: 'Invalid username or password',
      });
    },

    logout(options: { afterLogout: () => void }): void {
      patchState(store, { isLoading: false, username: '', error: '' });

      options.afterLogout();
    },
  })),

  withComputed((store) => ({
    isLoggedIn: computed(() => store.username() !== ''),

    displayName: computed(() => store.username().toUpperCase()),
  }))
);
