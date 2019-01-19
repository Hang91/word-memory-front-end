import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public spell: string;
  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  onSubmit(spell: string) {
    this.serverService.search(spell)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
