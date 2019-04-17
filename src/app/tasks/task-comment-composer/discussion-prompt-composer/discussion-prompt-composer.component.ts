import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'discussion-prompt-composer',
  templateUrl: './discussion-prompt-composer.component.html',
  styleUrls: ['./discussion-prompt-composer.component.css']
})
export class DiscussionPromptComposerComponent implements OnInit {
  recordings: string[] = new Array<string>();
  audio: HTMLAudioElement;

  constructor() { }

  ngOnInit() {
    this.audio = <HTMLAudioElement>document.getElementById('audioDiscussionPlayer');
  }

  playRecording(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
  }

  onNewRecording(audioRecordingUrl: string) {
    this.recordings.push(audioRecordingUrl);
    console.log(this.recordings);
  }
}
