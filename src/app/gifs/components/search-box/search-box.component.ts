import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) { }

  // Tomamos una referencia Local
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag(): void {
    const newtag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newtag);

    this.tagInput.nativeElement.value = '';
  }
}
