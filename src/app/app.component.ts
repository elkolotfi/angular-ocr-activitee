import { Component } from '@angular/core';
import {Post} from '../model/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    new Post('Mon premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Vestibulum et ligula quam. Nullam ultrices volutpat iaculis. ' +
      'Vestibulum ut tortor a lectus dignissim auctor in eget lectus.',
      5),
    new Post('Mon deuxième post',
      'Mauris pulvinar, quam quis gravida elementum, urna libero semper libero, et tristique massa felis ac ipsum. ' +
      'Morbi nec dolor sagittis, bibendum odio ut, suscipit mauris. ' +
      'Ut facilisis velit id justo consequat eleifend. ' +
      'Nullam placerat, quam id rhoncus varius, dolor massa placerat nisl, id viverra mauris sem ac nisi. ' +
      'Vivamus sollicitudin dictum congue. Integer dolor leo, viverra ac gravida aliquet, hendrerit eget velit. ' +
      'Curabitur eu risus vulputate, blandit libero et, sagittis sem. ' +
      'Nunc ullamcorper mi eget neque tempor, venenatis pulvinar libero pellentesque. ' +
      'In placerat luctus faucibus.',
      -4),
    new Post('Encore un post',
      'Nunc non tempor nibh. Pellentesque facilisis efficitur dui, sit amet pharetra quam pharetra at. ' +
      'Sed vel nulla tortor. Pellentesque faucibus, nisi in feugiat lobortis, lacus enim pretium ipsum, sed mattis magna lorem in erat.',
      0)
  ];
}
