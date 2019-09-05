import {AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {CommonService} from '../../../services/common/common.service';
import {ActivatedRoute, Router} from '@angular/router';
import {response} from '../../../services/common/common.namespec';
import set = Reflect.set;
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements AfterViewInit {
   isSpinning: boolean;
   itemId: any;
   tplModal: any;

  constructor(
    private  modalService : NzModalService ,
    private http: HttpService, private  commonService: CommonService,  private  router: Router , private  activeRouter: ActivatedRoute
  ) { }
   searchValue: any;
   listData: any;
   newsList: any;
   actityList: any;
   page: any;
   size: number;
   searhParams: any;
   total: number;

  itemList = [
    {
      name: '商品',
      itemLength: 0,
      isSelect: false
    },
    {
      name: '新闻动态',
      itemLength: 0,
      isSelect: false
    },
    // {
    //   name: '活动',
    //   itemLength: 0,
    //   isSelect: false
    // },
  ];
  params = {
    type : 20,
    page :1,
    size:10
  }
  
dataList:any
totalList
sizeNumber
  changeTab (item, idx) {
    if (!item.isSelect) {
      this.itemList.map( i => {
        return i.isSelect = false;
      });
      item.isSelect = true;
    }

    this.router.navigate(['search', this.searchValue], { queryParams:  {page: 1, size: 10, type: idx + 1} }).then(() => {
      window.location.reload();
    });
  }
jump (id):void{
  this.router.navigate(['newsDetail',id]).then((res)=>{
  })

}

  searchData (data) {
    if (this.searhParams.type == 1) {
      this.http.getShopByName(data).subscribe( (res: response) => {
        console.log(res);
        if (res.code === 0) {
          this.itemList[0]['itemLength'] = res.total;
          this.listData = res.data;
          if (this.searhParams.type == 1) {
            this.total = res.total;
            this.size = res.size;
          }
        } else {
          this.commonService.messageProp('error', res.message);
        }
      });
      this.http.getArticlesByParams({name: data.name}, 20).subscribe( (res: response) => {
        if (res.code === 0) {
          this.itemList[1]['itemLength'] = res.total;
          this.newsList = res.data['articleList'];
          if (this.searhParams.type == 2) {
            this.total = res.total;
            this.size = res.size;
          }
        } else {
          this.commonService.messageProp('error', res.message);
        }



        this.itemList.map( i => {
          return i.isSelect = false;
        });
        this.itemList[this.searhParams.type - 1]['isSelect'] = true;
        this.isSpinning = false
      });


    } else if (this.searhParams.type == 2) {
      this.http.getShopByName({name: data.name}).subscribe( (res: response) => {
        console.log(res);
        if (res.code === 0) {
          this.itemList[0]['itemLength'] = res.total;
          this.listData = res.data;
          if (this.searhParams.type == 1) {
            this.total = res.total;
            this.size = res.size;
          }
        } else {
          this.commonService.messageProp('error', res.message);
        }
      });
      this.http.getArticlesByParams(data, 20).subscribe( (res: response) => {
        if (res.code === 0) {
          res.data['articleList'].forEach((item)=>{
            item.img = JSON.parse(item.img)
          })

          this.itemList[1]['itemLength'] = res.total;
          this.newsList = res.data['articleList'];

          if (this.searhParams.type == 2) {
            this.total = res.total;
            this.size = res.size;
          }

        } else {
          this.commonService.messageProp('error', res.message);
        }



        this.itemList.map( i => {
          return i.isSelect = false;
        });
        this.itemList[this.searhParams.type - 1]['isSelect'] = true;
        this.isSpinning = false
      });

    }








  }

  changePage(ev, type ): void {
    console.log(ev);
    this.page = ev;
    this.size = this.searhParams.size || 10;
    this.router.navigate(['search', this.searchValue], { queryParams:  {page: this.page , size: this.size, type: type} }).then(() => {
      window.location.reload();
    });
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>, e, id): void {
    this.itemId = id;
    e.stopPropagation();
    this.tplModal = this.modalService.create({
      nzClassName: 'agreeModel shopList',
      nzWidth: 600,
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: null,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  madalCancel  () {
    this.tplModal.destroy();

  }

  modalClick() {
    // this.router.navigate(['shop/detail/' + this.itemId]).then(() => {
    //   this.tplModal.destroy();人气活动
    // });

    this.router.navigate(['introduction']).then(() => {
      sessionStorage.setItem('activeItem', '1');
      this.tplModal.destroy();
    });

  }
  ngAfterViewInit(): void  {
    this.isSpinning =true;
    this.activeRouter.queryParams.subscribe(res => {
      this.searhParams = JSON.parse(JSON.stringify(res));
      this.searhParams.size = this.searhParams.size ? this.searhParams.size : 10;
      this.searhParams.page = this.searhParams.page ? this.searhParams.page : 1;
      this.activeRouter.params.subscribe(ress => {
        this.searchValue = ress['val'];
        setTimeout(() => document.querySelector('input').value = ress['val'], 0);


        this.searhParams.name = this.searchValue;
        this.searchData (this.searhParams )

      });
    });





  }


}
