/**
 * Created by raviramamoorthy on 9/22/17.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    templateUrl:'app/events/event-thumbnail.html',
    styles:[`
        .thumbnail {min-height: 210px;}
        .green {color:green !important;}
        .blod {font-weight: bold;}
        `
    ]

})
export class EventThumbnailComponent{
    @Input () event:any
    @Output () eventClick= new EventEmitter()

    handleClickMe = function () {
        this.eventClick.emit(this.event)
    }

    getngClass(){
        if(this.event && this.event.time === '8:00 am'){
            return 'green '
        }
    }

}