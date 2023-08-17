import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BreadcrumbService} from './breadcrumb.service';
import {BreadMenuItem} from "./breadcrumb.menuitem";

@Component({
  selector: 'app-breadcrumb',
  template: `

    <div class="ui-panelmenu">
      <div class="p-element max-w-full">
        <div class="p-breadcrumb p-component">
          <ul class="p-breadcrumb-list" >
            <li *ngFor="let item of this.getMenuItens()" class="p-element p-breadcrumb-home ng-star-inserted {{item.styleClass}}">
              <a class="{{item.icon}}" href="{{item.url}}">{{item.label}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  `,
  styles: [`
    .p-breadcrumb .p-breadcrumb-list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
    }


  `]
})
export class BreadcrumbComponent {//implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  menuItems: BreadMenuItem[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private breadService:BreadcrumbService) {}

  // ngOnInit(): void {
    // this.breadService.atualiza();
    // this.menuItems = this.breadService.atualiza();
    // console.log("breadcrumb init")
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => this.menuItems = this.createBreadcrumbs(this.activatedRoute.root));
  // }

  public getMenuItens(){
    // this.breadService.menuitem.subscribe(item => this.menuItems = item);
    console.log("getMenuItens")
    return this.breadService.mm;//this.menuItems;
  }
  //
  // ngOnDestroy(){
  //   console.log("ngOnDestroy() bread service");
  // }
  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked() bread service");
  // }
  // ngDoCheck(){
  //   console.log("ngDoCheck() bread service");
  // }
  // ngOnInit(){
  //   console.log("ngOnInit() bread service");
  // }
  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit() bread service");
  // }
  // ngAfterContentChecked(){
  //   console.log("ngAfterContentChecked() bread service");
  // }
  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit() bread service");
  // }
  // ngOnChanges(){
  //   console.log("ngOnChanges() bread service");
  // }

}
