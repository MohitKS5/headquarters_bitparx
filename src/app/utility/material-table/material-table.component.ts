import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {JsontocsvService} from '../services/jsontocsv.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit{

  @Input() fields: Array<string>;
  @Input() schema: string;
  @Input() dataSource;
  @Input() data;
  fieldnames: Array<Array<string>>;
  constructor(private afs: AngularFirestore, private j2c: JsontocsvService) {
  }

  ngOnInit(){
    this.fieldnames = this.schema.replace(/[\t\n ]/g,'')
      .split(';').map(val => val.split(','));
    console.log(this.fieldnames)
  }
  excel() {
    this.j2c.excel(this.data);
  }

  getVal(el, index) {
    return this.fieldnames[index].map((val) => el[val]).join(', ')
  }
}
