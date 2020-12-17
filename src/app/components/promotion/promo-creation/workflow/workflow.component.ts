import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  prevPage(): void {
    this.router.navigate(['promotion/locationselection']);
  }

}
