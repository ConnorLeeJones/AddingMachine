import { Component, OnInit } from '@angular/core';
import { ConnorStack } from '../connor-stack';
import { Eval } from '../eval';
import { createElementCssSelector } from '@angular/compiler';
import { BoundText } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  thisEval = new Eval;
  value = '>';
  
  update(value: string) { 
    var answer = this.thisEval.run(value);
    var logNode = document.createElement('p');
    var logNode2 = document.createElement('p');
    var textnode = document.createTextNode(value);
    var answerNode: Text;
      if (Number.isNaN(answer)){
        answerNode= document.createTextNode('Invalid input, try again');
      } else {
        answerNode= document.createTextNode('>>' + String(answer)); 
      }
    
    logNode.appendChild(textnode);
    logNode2.appendChild(answerNode);
    document.getElementById('log').appendChild(logNode);
    document.getElementById('log').appendChild(logNode2);
    this.scrollToBottom();
  }



  scrollToBottom(): void {
    try {
      document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight;
    } catch(err) { }                 
  }

  constructor() { }

  ngOnInit() { }

}
