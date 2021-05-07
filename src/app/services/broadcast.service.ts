import {Injectable, EventEmitter} from '@angular/core';

export interface BroadcastMessage {
    messagetype: string;
    messagedata: any;
}

@Injectable()
export class BroadcastService {

    /**
     * an event emitter that a component can subscribe to to receive events
     *
     * ```typescript
     * constructor(private broadcast: broadcast) {
     *   // subscribe to the broadcast service
     *   this.broadcast.message$.subscribe(message => {
     *       this.handleMessage(message);
     *   });
     *}
     * ```
     *
     */
    public message$: EventEmitter<BroadcastMessage> = new EventEmitter<BroadcastMessage>();

    /**
     *
     * a public function to briadcast a messase
     *
     * @param message an indicator for the type of message. Canbe any string
     * @param data the message data. Can be any object
     *
     * ```typescript
     * this.broadcast.broadcastMessage("model.loaded", {id: this.id, module: this.module, data: this.data});
     * ```
     */
    public broadcastMessage(message: string, data: any = {}): void {
        this.message$.emit({
            messagetype: message,
            messagedata: data
        });
    }
}
