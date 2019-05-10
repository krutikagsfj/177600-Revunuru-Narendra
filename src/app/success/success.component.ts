import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  'bal':number=495
  balance:number
  
  linkForm: FormGroup;
submitted:boolean=false;
invalidlink:boolean=false;
constructor(private formBuilder:FormBuilder) { }
ngOnInit() {
this.linkForm=this.formBuilder.group({
  // validators for validaing input
gameprice:['',Validators.required]
});
}
onSubmit(){
  this.submitted=true;
  if(this.linkForm.invalid){
  return;
  }
  if(this.linkForm.controls.gameprice.value==105||this.linkForm.controls.gameprice.value==85||this.linkForm.controls.gameprice.value==200||
    this.linkForm.controls.gameprice.value==90)
  {
    console.log("Enjoy Your Ride")
  }
  else{
  this.invalidlink=true;
  alert("invalid login details");
  }

}}
