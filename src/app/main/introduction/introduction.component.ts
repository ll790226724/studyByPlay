import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../../services/http/http.service'
import { response } from '../../services/common/common.namespec';
import { CommonService } from '../../services/common/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  activeItem: number;
  binding: boolean;
  serial: '';
  itemsParams: any;
  valilistForm: FormGroup;//表单验证
  paramsData: { id: number; img: string; nick: string; birthday: number; mobile: string; age: number; sex: number; nowTime: number };
  constructor(private activeRouter: ActivatedRoute, private fb: FormBuilder, private route: Router, private http: HttpService, private commonService: CommonService, ) { }

  navbarList = [
    { name: '关于我们', icon: 'team' },
    { name: '联系我们', icon: 'book' },
    { name: '新闻动态', icon: 'mobile' },
  ];
  num: number
  changeItem = function (i: number, aItem: any) {
    this.num = i
    this.navbarList.map((item: { isClick: Boolean }) => {
      return item.isClick = false;
    });
    aItem.isClick = true;
    this.activeItem = i;
    sessionStorage.setItem('activeItem', i.toString())
    //  console.log(this.route.url)
  };
  color(): void {
    let activeItem = sessionStorage.getItem('activeItem') ? sessionStorage.getItem('activeItem') : 0
    this.navbarList[activeItem].isClick = true
  }
  dataList: any
  total: number
  //获取新闻页列表
  params = {
    type: 20,
    page: 1,
    size: 10
  }
  key: any
  // sure(e){
  //   this.key = e.key
  //   if(e.key == 'Backspace'){
  //     return
  //   }
  //  let reg = new RegExp('^[0-9]*$')
  //   if(reg.test(e.key)){
  //     this.params.page = e.key
  //   }else{
  //     this.commonService.messageProp('error','请输入数字')
  //   }
  // }

  pageTotal: number
  //第二种方法
  ofCouse() {
    let page: number
    this.activeRouter.queryParams.subscribe(res => {
      page = res.page
    })
    if (this.pageTotal > Math.ceil(this.total / 10) || this.pageTotal == page) {
      this.commonService.messageProp('error', '请勿输入正确的页数')
      return
    }
    this.params.page = this.pageTotal
    this.route.navigate(['introduction'], { queryParams: this.params }).then(() => {
      window.location.reload();
    });
  }

  //第一种方法
  // ofCouse(){
  //   let page:number
  //   this.activeRouter.queryParams.subscribe(res => {
  //    page = res.page
  //   })
  //   if(page == this.params.page ){
  //     this.commonService.messageProp('error','请勿输入当前页数')
  //     return
  //   }
  //   if(this.params.page == 1 && !this.key){
  //     this.commonService.messageProp('error','请输入页数')
  //     return
  //   }
  //   console.log(Math.ceil(this.total/10))
  //   if(this.params.page  > Math.ceil(this.total/10)){
  //     this.commonService.messageProp('error','请输入正确的页数')
  //     return
  //   }
  //   this.route.navigate(['introduction'], { queryParams: this.params }).then(() => {
  //     window.location.reload();
  //   });
  // }
  //分页
  change(num: any): void {
    this.params.page = num
    this.route.navigate(['introduction'], { queryParams: this.params }).then(() => {
      window.location.reload();
    });
  }
  jump(id): void {
    this.route.navigate(['newsDetail', id]).then((res) => {
    })
  }
  list() {
    this.http.articles(this.params).subscribe((resp: response) => {
      if (resp.code == 0) {
        console.log(resp)
        this.params.page = resp.page
        this.params.size = resp.size
        this.total = resp.total
        this.dataList = resp.data
        for (let i = 0; i < this.dataList.articleList.length; i++) {
          this.dataList.articleList[i].img = JSON.parse(this.dataList.articleList[i].img)
        }
        console.log(this.dataList.articleList)
      }
    })
  }
  //获取用户信息
  getPerson() {
    this.http.getPerson().subscribe((resp: response) => {
      if (resp.code == 0) {
        this.paramsData = resp.data;
        console.log(this.paramsData);
      }
    })
  }
  //查看报告
  look(): void {
    this.route.navigate(['TestingDet'], {}).then(() => {
      window.location.reload();
    });
  }
  ngOnInit() {
    this.activeRouter.queryParams.subscribe(res => {
      this.params.page = res.page || 1
    })
    this.activeItem = Number(sessionStorage.getItem('activeItem')) || 0;
    this.num = Number(sessionStorage.getItem('activeItem')) || 0;
    this.binding = false;
    this.getPerson();
    this.list()
    this.color()
  }

}
