import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.scss']
})
export class DataBindComponent {
  title = "Data Binding"
  alt = 'This is Image'
  showAlert(){
    alert("hey it's works!!")
  }
  name: string = ''
  isAlert: boolean = false;
  message: string = 'Hello Tanaya';

  change(){
    if(this.isAlert){
      this.isAlert = false
    }else{
      this.isAlert = true
    }
  }

  btnn(){
    if(this.isDisabled == "this is active div"){
      this.isDisabled = "this is non active div"
    }else{
      this.isDisabled = "this is active div"
    }
  }

  isDisabled: string = "this is active div";

}
