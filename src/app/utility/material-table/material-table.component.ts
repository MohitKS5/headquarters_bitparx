import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {JsontocsvService} from '../services/jsontocsv.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit,OnChanges {

  @Input() fields: Array<string>;
  @Input() schema: string;
  @Input() dataSource;
  @Input() data;
  dataSourceValues = new MatTableDataSource([]);
  show = false;

  @Output() slider = new EventEmitter<tableIndex>();
  fieldnames: Array<string>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private j2c: JsontocsvService) {
  }


  ngOnInit() {
    this.fieldnames = this.schema.replace(/[\t\n ]/g, '')
      .split(';');
    this.dataSource.subscribe((res) => this.dataSourceValues.data = res);
    this.dataSourceValues.paginator = this.paginator;
    this.dataSourceValues.sort = this.sort;
  }

  ngOnChanges(){
    this.dataSource.paginator = this.paginator;
  }

  excel() {
    this.j2c.excel(this.data);
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
