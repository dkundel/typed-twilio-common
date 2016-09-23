import events = require('events');

declare module Twilio {
  export class AccessManager extends events.EventEmitter {
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
}

declare module "twilio-common" {
  export = Twilio;
}