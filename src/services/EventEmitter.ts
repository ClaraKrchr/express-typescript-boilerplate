import {EventEmitter2} from 'eventemitter2';

export const emitter = new EventEmitter2;

export function functionEmitter(message: string){
    console.log("avant emit");
    emitter.emit('foo.message', message);
    console.log("apres emit");
}
