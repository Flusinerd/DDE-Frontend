import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit, AfterViewInit {
  @ViewChild('term', { static: true }) terminal: NgTerminal;
  noDeleteCounter = 0;

  constructor(private readonly _socketService: SocketService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this._socketService.sshMessageSubject.subscribe((msg: string) => {
      this.terminal.write(msg);
      if (msg.toString().includes(':~$')) {
        this.noDeleteCounter = msg.length;
      }
    });
  }

  onKeyEvent($e): void {
    const printable = !$e.altKey && !$e.ctrlKey && !$e.metaKey;
    let msg: string;
    if ($e.domEvent.code === 'Enter') {
      msg = '\n';
    } else if ($e.domEvent.code === 'Backspace') {
      msg = '\b \b';
    } else if (printable) {
      msg = $e.key;
    }
    this._socketService.sendShellMessage(msg);
  }
}
