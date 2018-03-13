import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAQo4uHo8r_pYA0Tck8Sxz_9FeJHQGjYW4',
			authDomain: 'ng-recipe-book-7bc02.firebaseapp.com',
		});
	}
}





