/**
 * Created by raviramamoorthy on 9/22/17.
 */

import {Component} from '@angular/core'
@Component({
    selector:'event-list',
    templateUrl:'app/events/events-list.component.html'


})
export class EventsListComponent {
    event={
        id:1,
        name:'Angular Connect',
        date:'12/09/2017',
        time:'09:00 am',
        price:'599.00',
        location:{
            address:'49 N 400 W',
            city:'SLC',
            state:'UT'

        }

    }

}