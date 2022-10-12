import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {jsPDF} from 'jspdf';
// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  // @ViewChild('content',{static:true}) el!:ElementRef
  @ViewChild('pdfTable', {static: false}) el!: ElementRef ;





  // movies = [
  //   'Episode I - The Phantom Menace',
  //   'Episode II - Attack of the Clones',
  //   'Episode III - Revenge of the Sith',
  //   'Episode IV - A New Hope',
  //   'Episode V - The Empire Strikes Back',
  //   'Episode VI - Return of the Jedi',
  //   'Episode VII - The Force Awakens',
  //   'Episode VIII - The Last Jedi',
  //   'Episode IX – The Rise of Skywalker',
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }


  // makepdf(){
  //   let pdf=new jsPDF();

  //   pdf.html(this.el.nativeElement,{
  //     callback:(pdf)=>{
  //       //save the pdf
  //       pdf.save("sample.pdf")
  //     }
  //   })
  // }


  // exportAsPDF(divId:any)
  //   {
  //       let data = document.getElementById('divId');
  //       html2canvas(data).then(canvas => {
  //       const contentDataURL = canvas.toDataURL('image/png')  // 'image/jpeg' for lower quality output.
  //       let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
  //       // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
  //       pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
  //       pdf.save('Filename.pdf');
  //     });
  //   }


  //  downloadAsPDF() {
  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element:any, renderer:any) {
  //       return true;
  //     }
  //   };

  //   const pdfTable = this.pdfTable.nativeElement;

  //   doc.FormHmtl(pdfTable.innerHTML, 15, 15, {
  //     width: 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('tableToPdf.pdf');
  // }

  makepdf()
  {
    let pdf =new jsPDF('p',"pt",'b1');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("demo.pdf");
      }
    })


  }
}
