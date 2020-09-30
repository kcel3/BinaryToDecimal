import { AfterViewInit, Component, ElementRef, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import {ConvertService} from '../app/services/convert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Bin2D';
  form:any;
  a:number;
  b:number;
  mainLabel='Binary';
  convertLabel='Decimal';
  
  @Input() main;
  @Input() converted;

  constructor(private eRef:ElementRef,private formBuilder: FormBuilder,private convService:ConvertService){
    this.form=this.formBuilder.group({
      main:['',Validators.max(1)],
      converted:[''],
    });
  }
  ngAfterViewInit(){
    this.eRef.nativeElement.ownerDocument.body.style.backgroundColor="black";
  }
  
  Conv(){
    if(this.mainLabel=='Binary'){
    this.a=this.form.get('main').value;
    this.b=this.convService.ToDecimal(this.a);
    this.form.patchValue({
      converted:this.b
    })
    }else if(this.mainLabel=='Decimal'){
      this.a=this.form.get('main').value;
      this.b=this.convService.ToBinary(this.a);
      this.form.patchValue({
      converted:this.b
    })
    }
  }
  BinToDec(){
    this.mainLabel='Binary';
    this.convertLabel='Decimal';
  }
  DecToBin(){
    this.mainLabel='Decimal';
    this.convertLabel='Binary';
  }
}
