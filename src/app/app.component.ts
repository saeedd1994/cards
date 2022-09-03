import {Component} from '@angular/core';
import {CardsDataModel} from "./model/cards-data.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: CardsDataModel[] = [
    {
      imageUrl: 'assets/images/tree.jpeg',
      title: 'neat tree',
      username: 'nature',
      content: 'saw my awesome tree during my hike today !'
    },
    {
      imageUrl: 'assets/images/mountain.jpeg',
      title: 'snowy mountain',
      username: 'claiming-lover',
      content: 'the best pics appear after hard claiming'
    },
    {
      imageUrl: 'assets/images/biking.jpeg',
      title: 'biking',
      username: 'sport man',
      content: 'I am really love biking in cloudy day'
    },
    {
      imageUrl: 'assets/images/tree.jpeg',
      title: 'neat tree',
      username: 'nature',
      content: 'saw my awesome tree during my hike today !'
    },
    {
      imageUrl: 'assets/images/mountain.jpeg',
      title: 'snowy mountain',
      username: 'claiming-lover',
      content: 'the best pics appear after hard claiming'
    }

  ]
}
