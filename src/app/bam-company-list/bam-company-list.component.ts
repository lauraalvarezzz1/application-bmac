import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormModel } from '../model/form-model';
import { BmaCompanyService } from '../services/bma-company.service';

@Component({
  selector: 'app-bam-company-list',
  templateUrl: './bam-company-list.component.html',
  styleUrls: ['./bam-company-list.component.css']
})
export class BamCompanyListComponent implements OnInit {
  allParticipants: [];
  @Input() createdItem;
  data: any;
  displayedColumns: string[];
  dataSource = new MatTableDataSource<any>(this.data);
  userInfo: any;
  selection: any;

  constructor(public bmaCompanyService: BmaCompanyService,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.bmaCompanyService.getAllService().subscribe(response => {
      this.allParticipants = response;
    });
    console.log(this.allParticipants);
    this.data = this.allParticipants;
    this.displayedColumns = ['id', 'name', 'email', 'phone', 'city', 'position', 'actions'];
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  searchParticipant(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteParticipant(index: number, row: any) {
    // const dialogRef = this.dialog.open(RemoveDialogComponent, {
    //   data: {
    //     userInfo: row
    //   }
    // });
    // dialogRef.afterClosed().subscribe(data => {
    //   if (data) {
    //     let userId = row.id;
    //     this.participantsService.DeleteParticipant(userId).subscribe(() => {
    //       this.data.splice(index,1);
    //       this.dataSource = new MatTableDataSource<Participant>(this.data);
    //     });
    //   }
    // });
  }
  updateParticipant(row) {
    // const dialogRef = this.dialog.open(UpdateDialogComponent, {
    //   data: {
    //     userInfo: row
    //   }
    // });
    // dialogRef.afterClosed().subscribe(data => {
    //     //row.nombre = data.nombre;
    //     row.estado = data.state;
    // });
  }

  ngOnChanges(changes) {
    if (this.createdItem != undefined) {
      this.data.unshift(this.createdItem);
      this.dataSource = new MatTableDataSource<FormModel>(this.data);
      this.createdItem = undefined;
    } 
  }
}