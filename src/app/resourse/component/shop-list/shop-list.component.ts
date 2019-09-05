import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {response} from '../../../services/common/common.namespec';
import {CommonService} from '../../../services/common/common.service';
import {Router} from '@angular/router';
import {NzModalControlService, NzModalService} from 'ng-zorro-antd';



@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  array = [
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/b7f721e2-bfaa-445a-99c1-1f6f29d360e6.jpg',
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/e5ae77ab-d225-45bd-b220-202302fec5ba.jpg',
    'http://jns.img.bucket.ks3-cn-beijing.ksyun.com/img/img/cf9cad1c-c941-4141-8e36-3c46f1a333a3.jpg',
  ];
   listData: any;
   tplModal: any;
   itemId: any;
  isAutoPlay: boolean;
  constructor(         private modalService: NzModalService, private http: HttpService   , private  router: Router , private  commonService: CommonService) { }


  goto (e) {
    e.stopPropagation();
    this.router.navigate(['introduction']).then(() => {
      sessionStorage.setItem('activeItem', '1');
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


  loadData(params: object): void {


    this.http.getShopList().subscribe( ( res: response) => {
      if (res.code === 0) {
          console.log(res);
          this.listData = res.data;
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });




  }



  ngOnInit() {
    this.isAutoPlay = true;
    this.loadData({});
    this.http.articles({type: 30, page: 1, size: 5}).subscribe((res: response) => {
      console.log(res);
      if (res.code === 0) {
        const arr = [];
        const data = res.data['articleList'];
        data.forEach(item => {
          arr.push(
            {
              url: JSON.parse(item.img).url,
              link: item.source
            }
          );
        });
        this.array = arr;
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });

  }

  goWhere (e) {
    e.stopPropagation();

  }

  madalCancel  () {
    this.tplModal.destroy();

  }

  modalClick() {
    // this.router.navigate(['shop/detail/' + this.itemId]).then(() => {
    //   this.tplModal.destroy();
    // });


      this.router.navigate(['introduction']).then(() => {
        sessionStorage.setItem('activeItem', '1');
        this.tplModal.destroy();
      });



  }
}
