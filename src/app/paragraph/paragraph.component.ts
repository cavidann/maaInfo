import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  id: number;
  isOpen: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isOpen = false;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.router.events.subscribe(
      () => {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.isOpen = false;
      }
    );
  }

  setCondition() {
    this.isOpen = !this.isOpen;
  }

}
