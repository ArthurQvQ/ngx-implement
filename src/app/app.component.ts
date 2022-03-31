import { Component } from '@angular/core';
import { EQimaShadowLevel } from '@qima/ngx-qima'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-implement';
  public two: EQimaShadowLevel = EQimaShadowLevel.TWO;
}
