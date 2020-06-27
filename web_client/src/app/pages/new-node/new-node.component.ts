import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-node',
  templateUrl: './new-node.component.html',
  styleUrls: ['./new-node.component.css']
})
export class NewNodeComponent implements OnInit {
  isTemperatureStatus = true;
  isHumidityStatus = true;
  isNoStatus = true;
  isSo2Status = true;
  isBuipm25Status = true;
  constructor() { }

  ngOnInit(): void {
  }

}
