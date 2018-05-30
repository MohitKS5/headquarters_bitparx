import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JsontocsvService} from '../services/jsontocsv.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  @Input() fields: Array<string>;
  @Input() schema: string;
  @Input() dataSource;
  @Input() data;

  @Output() slider = new EventEmitter<tableIndex>();
  fieldnames: Array<Array<string>>;

  constructor(private j2c: JsontocsvService) {
  }

  ngOnInit() {
    this.fieldnames = this.schema.replace(/[\t\n ]/g, '')
      .split(';').map(val => val.split(','));
    console.log(this.fieldnames)
  }

  excel() {
    this.j2c.excel(this.data);
  }

  getVal(el, index) {
    return this.fieldnames[index].map((val) => el[val]).join(', ')
  }

  checkbool(el) {
    return typeof el == 'boolean'
  }

  syncIt(tupple: any,field: string,res: boolean) {
    this.slider.emit({
      tupple: tupple,
      field: field,
      value: res
    })

  }
}

export class tableIndex {
  tupple: any;
  field: string;
  value: boolean;
}
