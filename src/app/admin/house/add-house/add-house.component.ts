import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { House } from 'src/app/model/house';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent {

houseToSave = this.fbuild.group({
  houseType:['',[Validators.required]],
  rentPrice:['',[Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
  numBathrooms:['',[Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
  numBedrooms:['',[Validators.required,Validators.pattern(/^[1-9]\d*$/)]],
  address:['',[Validators.required]],
  city:['',[Validators.required]]
})

  constructor(private fbuild:FormBuilder){}

}
