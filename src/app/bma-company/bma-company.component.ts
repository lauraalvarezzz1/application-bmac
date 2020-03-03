import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { BmaCompanyService } from '../services/bma-company.service';

@Component({
  selector: 'app-bma-company',
  templateUrl: './bma-company.component.html',
  styleUrls: ['./bma-company.component.css']
})
export class BmaCompanyComponent implements OnInit {
  applicantForm: any;
  userInfo: any;
  createdItem: any;
  firstFormGroup: any;
  secondFormGroup: any;
  isEditable = true;
  educationForm: any;
  militaryForm: any;
  employmentForm: any;
  refencesForm: any;
  constructor(private formBuilder: FormBuilder,
              public bmaCompanyService: BmaCompanyService,
              public dialog: MatDialog) {
    this.applicantForm = this.formBuilder.group({
      social: ['', Validators.required],
      first: ['', Validators.required],
      lastName: ['', Validators.required],
      dateBirth: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      apartment: ['', Validators.required],
      dateAvailable: ['', Validators.required],
      position: ['', Validators.required]
    });

    this.educationForm = this.formBuilder.group({
      addressCollege: ['', Validators.required],
      dateStartCollege: ['', Validators.required],
      dateEndCollege: ['', Validators.required],
      degreeCollege: ['', Validators.required],
      addressHightSchool: ['', Validators.required],
      dateStartHightSchool: ['', Validators.required],
      dateEndHightSchool: ['', Validators.required],
      degreeHightSchool: ['', Validators.required],
      addressOther: [''],
      dateStartOther: [''],
      dateEndOther: [''],
      degreeOther: [''],
    });

    this.militaryForm = this.formBuilder.group({
      branch: ['', Validators.required],
      explanation: ['', Validators.required],
      rank: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.employmentForm = this.formBuilder.group({
      address: ['', Validators.required],
      company: ['', Validators.required],
      startingSalary: ['', Validators.required],
      endingSalary: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      job: ['', Validators.required],
      phone: ['', Validators.required],
      reasonLeaving: ['', Validators.required],
      referenceValidation: ['', Validators.required],
      responsabilities: ['', Validators.required],
      supervisor: ['', Validators.required]
    });

    this.refencesForm = this.formBuilder.group({
      company: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      relationship: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.loadAllParticipants();
  }
  createParticipant() {
    // if (this.userForm.valid) {
    //   this.userInfo = {
    //     nombre: this.userForm.get('name').value,
    //     id: Math.floor((Math.random()*65)+100000),
    //     estado: this.userForm.get('state').value
    //   };
    //   console.log(this.userForm.get('state').value);
      // this.participantsService.createParticipant(this.userInfo).subscribe(response => {
      //   this.createdItem = this.userInfo;
      //   this.dialog.open(DialogComponent, {
      //     data: {
      //       userInfo: response,
      //       title: "Creado Exitosamente"
      //     }
      //   });
      //   this.userForm.reset();
      // });
    //}
  }
  loadAllParticipants() {
    this.bmaCompanyService.getAllService().subscribe(response => {
      this.userInfo = response;
    });
  }
}
