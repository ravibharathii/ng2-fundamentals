/**
 * Created by raviramamoorthy on 9/22/17.
 */

import {Component, OnInit} from '@angular/core'
import {EventService} from "./shared/event.service.tsc";
import {ToastrService} from "../common/toastr.service";
@Component({
    selector:'event-list',
    templateUrl:'app/events/events-list.component.html',
    styleUrls:['app/events/css/events-list.component.css']


})
export class EventsListComponent implements OnInit{

events:any[]
    constructor(private eventService:EventService,private toastrService:ToastrService){

}


ngOnInit(){
    this.events =  this.eventService.getEvents();
    console.log("dsfsdf")
}

    handleThumbnailClick(eventName){
    console.log("Event Name :"+eventName)
        this.toastrService.success(eventName);

    }




}