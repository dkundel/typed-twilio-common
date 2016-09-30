import { Promise } from 'es6-promise';

export class AccessManager {
  constructor(initialToken: string);
  identity: string | null;
  token: string;
  isExpired: boolean;
  expires: Date | null;
  updateToken(newToken: string): Promise<this>;
  on(event: 'error', callback: (err: Error) => void): this;
  on(event: 'tokenExpired', callback: (manager: AccessManager) => void): this;
  on(event: 'tokenUpdated', callback: (manager: AccessManager) => void): this;
}

export interface AccessManagerConstructor {
  new(initialToken: string): AccessManager;
}

export interface TwilioGlobal {
  AccessManager: AccessManagerConstructor;
}