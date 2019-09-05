import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../services/http/http.service';
import {CommonService} from '../../services/common/common.service';
import {response} from '../../services/common/common.namespec';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
 array = [

  ];

   app = document.querySelector('#carousel');
   storyArr: any;
   storyMain: any;
   artImg: any;
  isAutoPlay: any;
   storyTitle: any;
  constructor(
    private http: HttpService, private  commonService: CommonService,  private  router: Router , private  activeRouter: ActivatedRoute
  ) { }


  changeStory(item) {
    if (!item.isSelect) {
      this.storyArr.map(i => {
        return i.isSelect = false;
      });
      item.isSelect = true;
      this.storyMain = item.content;
      this.storyTitle = item.title;
    }
  }

  jumpActivity(id){
    this.router.navigate(['dactivity'], { queryParams:{id:id}  }).then(() => {
      window.location.reload();
    });
  }
  ngOnInit() {
    this.isAutoPlay = true;
    console.log( this.app);
    this.http.articles({type: 31, page: 1, size: 99}).subscribe((res: response) => {
           console.log(res);
      if (res.code === 0) {
        const arr = [];
        const data = res.data['articleList'];
        data.forEach(item => {
           arr.push(
             {
               url: JSON.parse(item.img).url,
               link:item.source
             }
           );
        });
        this.array = arr;
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });

    this.http.articles({type: 10, page: 1, size: 1}).subscribe((res: response) => {
      console.log(res);
      if (res.code === 0) {
        console.log(res.data);
        let data =  res.data.articleList;
        data.forEach(item => {
          item.img = JSON.parse(item.img).url;
        });
        this.artImg = data[0];
        console.log(this.artImg)
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });

    this.http.articles({type: 40, page: 1, size: 5}).subscribe((res: response) => {
      if (res.code === 0) {
        const arr = [];
        const data = res.data['articleList'];
        data.forEach(item => {
          item.img = JSON.parse(item.img).url;
          item.content = JSON.parse(item.content)[0]['value'];
        });
        console.log(data);
        this.storyArr = data;
        this.storyArr[0].isSelect = true;
        this.storyMain = this.storyArr[0].content;
        this.storyTitle = this.storyArr[0].title;

        console.log(this.storyArr)
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });


  }

}
