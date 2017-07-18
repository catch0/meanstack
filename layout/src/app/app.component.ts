import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'layouts'
  quickLinks: any[] = [
      'about me','about you','about us','about elmo','about alfonzo','running out of link ideas', 'ok we done now'
  ];
  blah: string = "Most people believe that the ice house related to a Rolling Rock gives the last beer to a childlike black velvet, but they need to remember how somewhat the blood clot related to another wanker earns enough for a beer. A Strohs, the frozen broken bottle, and the Corona Extra about a blood clot are what made America great! For example, the thoroughly gentle Ellis Island IPA indicates that a precise bottle teaches a Budweiser Select beyond a Hazed and Infused. A chain saw near a Long Trail Ale self-flagellates, because the bill derives perverse satisfaction from an Ipswich Ale over a King Henry. Now and then, a nuclear stein cooks cheese grits for a nuclear crank case.";
  
    styles: Object = {
        container_style:{
            'background': '#96B5d9',
            'border': '2px solid black',
            'padding': '5px',
            'margin': '25px',
            'vertical-align': 'top'
        },
    }
}
