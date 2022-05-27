import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fin-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {


  listTabs: string[] = ["Lista Todo", "Crea Todo", "Cerca Todo"]

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  user_id: number = 0

  ngOnInit(): void {
    this.route.params.subscribe(
      result => {
        this.user_id = result['id']
        this.router.navigateByUrl("home/"+ this.user_id +"/list")
      }
    )
  }

  navbarClickHandler(menuChoice: number) {
    switch (menuChoice) {
      case 0:
        this.router.navigateByUrl("home/"+this.user_id+"/list")
        break
      case 1:
        this.router.navigateByUrl("home/"+this.user_id+"/form")
        break
      case 2:
        this.router.navigateByUrl("home/"+this.user_id+"/search")
        break
    }
  }

}
