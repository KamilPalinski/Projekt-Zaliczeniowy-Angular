import { Component, OnInit } from "@angular/core";
import { MoveService } from "../services/move.service";
import { debounceTime } from 'rxjs/operators';
import { StorageService } from 'src/app/core/storage.service';

@Component({
  selector: "app-clients-finder",
  templateUrl: "./clients-finder.component.html",
  styleUrls: ["./clients-finder.component.scss"]
})
export class ClientsFinderComponent implements OnInit {
  moveList: any[] = [];

  constructor(private moveService: MoveService, 
     private storage: StorageService ) {}

  ngOnInit() {}

  searchMove(event): void {

    this.moveService.searchMovie(event.target.value)
    .pipe(debounceTime(1000))
    .subscribe(
      res => {
        this.moveList = res.results;
        console.log(this.moveList)
      },
      err => {
        console.warn("ups, not working");
      }
    )
  }

  addMoveToLocalStorage(item) {
    this.storage.setItem("MoveTitle", item);
    let text = `Move ${item} added to local storage`;
    window.alert(text);
  }
}
