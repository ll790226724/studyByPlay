import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http/http.service';
import {response} from '../services/common/common.namespec';
import {CommonService} from '../services/common/common.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
   total: number;
   size: number;
   artList: any;
   isSpinning: boolean;
   searhParams: any;
   page: any;

  constructor( private http: HttpService, private  commonService: CommonService , private router: Router, private  activeRouter: ActivatedRoute) { }

  jumpActivity(id) {
    this.router.navigate(['dactivity'], { queryParams: {id: id}  }).then(() => {
      window.location.reload();
    });
  }

  changePage(ev, type ): void {
    console.log(ev);
    this.page = ev;
    this.size = this.searhParams.size || 10;
    this.router.navigate(['activityList'], { queryParams:  {page: this.page , size: this.size} }).then(() => {
      window.location.reload();
    });
  }

  ngOnInit() {
    this.isSpinning = true;
    this.activeRouter.queryParams.subscribe(res => {
      this.searhParams = JSON.parse(JSON.stringify(res));
      this.searhParams.size = this.searhParams.size ? this.searhParams.size : 10;
      this.searhParams.page = this.searhParams.page ? this.searhParams.page : 1;

      this.http.articles( {  type : 10, page : this.searhParams.page, size : this.searhParams.size  }, ).subscribe( (res: response) => {
        if (res.code === 0) {
          res.data['articleList'].forEach((item) => {
            item.img = JSON.parse(item.img);
          });
          this.total = res.total;
          this.size = res.size;
          this.artList = res.data['articleList'];

        } else {
          this.commonService.messageProp('error', res.message);
        }

        this.isSpinning = false;
      });

    });






  }

}
