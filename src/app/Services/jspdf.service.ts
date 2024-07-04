import { Injectable } from '@angular/core';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class JspdfService {

  constructor() { 

  }
  public generatePdfFromHtml(elementId: string): void {
    const element = document.getElementById(elementId);

    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        const pdfOutput = doc.output('blob');
        saveAs(pdfOutput, 'example.pdf');
      });
    }
  }
}
