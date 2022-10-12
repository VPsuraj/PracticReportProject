import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('pdfTable', {static: false}) el!: ElementRef ;

  constructor() { }

  ngOnInit(): void {
  }

  makepdf()
  {
    let pdf =new jsPDF('p',"pt",'b1');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save("demo.pdf");
      }
    })


  }

}
