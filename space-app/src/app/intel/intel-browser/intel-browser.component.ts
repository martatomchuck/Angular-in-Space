import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-intel-browser',
  templateUrl: './intel-browser.component.html',
  styleUrls: ['./intel-browser.component.css']
})
export class IntelBrowserComponent implements OnInit {

  options = [
    {name: 'ESA', url: 'http://www.esa.int/ESA'},
    {name: 'POLSA', url: 'https://www.polsa.gov.pl/pl'}
  ];

  source: SafeResourceUrl = null;


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

  selectSource(value: string) {
    this.source = value ? this.sanitizer.bypassSecurityTrustResourceUrl(value) : null;
  }

}
