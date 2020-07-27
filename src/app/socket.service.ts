import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SSHConfig } from './interfaces/sshconfig.interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  sshMessageSubject = new BehaviorSubject<string>('');

  constructor(private socket: Socket) {}

  connectToServer(sshConfig:SSHConfig){
    this.socket.emit('connectSSH', sshConfig);
    this.listenForShellMessage();
  }

  listenForShellMessage(){
    this.socket.on('connect', () => console.log('Connected to Server'));
    this.socket.on('sshmessage', (msg) => {
      this.sshMessageSubject.next(msg);
    })
  }

  sendShellMessage(msg: string){
    this.socket.emit('shellMessage', msg);
  }
}
