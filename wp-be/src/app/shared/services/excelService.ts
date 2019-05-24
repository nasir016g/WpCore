import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor(private httpClient: HttpClient) { }

  public exportExcel(excelFileName: string): void {
    this.getExcelFromServer()
      .subscribe(
        (blob) => {
          this.saveAsExcelFile(blob, excelFileName);
        },
        response => {
          console.log("POST in error", response);
        },
        () => {
          console.log("POST observable is now completed.");
        });;
  }

  getExcelFromServer(): Observable<Blob> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json'
    // });

    return this.httpClient.get<Blob>('https://localhost:5001/api/admin/webpage/download',
      {
        // headers: headers, 
        responseType: 'blob' as 'json'
      });
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }
}