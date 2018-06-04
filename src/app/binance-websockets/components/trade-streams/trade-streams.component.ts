import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../../services';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {throttleTime} from 'rxjs/internal/operators';

@Component({
  selector: 'app-trade-streams',
  templateUrl: './trade-streams.component.html',
  styleUrls: ['./trade-streams.component.css']
})
export class TradeStreamsComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  fieldheaders = ['market', 'price change %', 'weighted avg', 'close trade Quantity', 'best bid price', 'best bid quantity', 'best ask price',
    'best ask quantity', 'open price', 'high price', 'low price'];
  fieldnames;
  dataSource = new MatTableDataSource([]);
  displayOrder = this.fieldheaders;
  fields = `
  s;
  P;
  w;
  Q;
  b;
  B;
  a;
  A;
  o;
  h;
  l
  `;

  constructor(private streamService: SocketService) {
    this.streamService.ticker.subscribe((res) => this.dataSource.data = JSON.parse(res.data));
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.fieldnames = this.fields.replace(/[\t\n ]/g, '')
      .split(';');

  }

  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
  }

}
