import {EventEmitter2} from 'eventemitter2';

export const emitter = new EventEmitter2;

export function functionEmitter(){
    // "foo" est l'id de l'event
    emitter.emit('foo.message');
}