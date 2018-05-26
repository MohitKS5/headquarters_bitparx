import { Injectable } from '@angular/core';
import * as converter from "json-2-csv"
import * as FileSaver from 'file-saver';

@Injectable()
export class JsontocsvService {

  constructor() { }

  excel = (json: any): void => {
    converter.json2csv(json, function(err, csv){
      const data = new Blob([csv], { type: "text/csv;charset=utf-8" });
      FileSaver.saveAs(data, 'data_export_' + new Date().getTime() + '.csv');
    });
  }

}
