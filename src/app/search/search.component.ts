import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public spell: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSubmit(spell: string) {
    this.searchService.searchWord(spell);
  }

}
