import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  showBodyForm: boolean = false;
  personal_info!: FormArray;
  getHeaders: any = [];

  header: string
  index:number;
  cName:string;
  C2name:string;

  LastName: string
  firstname: string
  MiddleName: string

  dob: string
  Gender: string

  FatherName:string
  Address:string

  color:any;

  values = [];

  panelOpenState = false;

  @ViewChild('pdfTable', {static: false}) el!: ElementRef ;



  constructor() { }

  ngOnInit(): void {
  }

  openBottomSheet() {
    console.log("Upload function working")
  }

  selectedFile = File;
  url = "";

  onFileSelected(event: any) {
    console.log(event)
    if(event.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
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
    let pdf =new jsPDF('p',"pt",'a2');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("demo.pdf");
      }
    })


  }
  add_more_input(){
  }

  addvalue(){
    this.values.push({value: ""});
  }

}
