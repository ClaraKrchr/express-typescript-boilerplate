import {EventEmitter} from 'events';
import { TheMailer } from './mailer';


const mail = new TheMailer;
export class Event extends EventEmitter {
    constructor() {
        super();
        this.emit('ready');
    }

    public emitNewSensor(message: string): void {
        this.emit( "Message sensor", message);
        mail.mailer();
    }


}

