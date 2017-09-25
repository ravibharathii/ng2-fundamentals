/**
 * Created by raviramamoorthy on 9/22/17.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumnail.component";
import {NavbarComponent} from "./events/nav/navbar.component";
import {EventService} from "./events/shared/event.service.tsc";
import {ToastrService} from "./common/toastr.service";

@NgModule({
    imports:[BrowserModule],
    providers:[EventService,ToastrService],
    declarations:[EventsAppComponent,EventsListComponent,EventThumbnailComponent,NavbarComponent],
    bootstrap:[EventsAppComponent]
})
export class AppModule{

}