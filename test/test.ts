const token = 'ACXXXXXX';
const accessManager = new Twilio.AccessManager(token);

console.log(accessManager);

import { AccessManager } from 'twilio-common';
const am = new AccessManager(token);