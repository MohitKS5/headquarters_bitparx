import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { JsontocsvService } from '../../../utility/services/jsontocsv.service'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-synchronicity',
  templateUrl: './synchronicity.component.html',
  styleUrls: ['./synchronicity.component.css']
})
export class SynchronicityComponent implements OnInit {

  constructor(private afs: AngularFirestore, private j2c: JsontocsvService) { }
  dataSource;
  data;
  ngOnInit() {
    // this.afs.collection('synchronicity').valueChanges().subscribe(
    //   (res) => {
    //     this.data = res;
    //     this.dataSource = new MatTableDataSource(Object.keys(res).map(k => res[k]))
    //   }
    // );
  }

  excel() {
    this.j2c.excel(this.data);
  }

}
