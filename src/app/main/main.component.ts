import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgZorroAntdModule, NzMessageService } from 'ng-zorro-antd';
import { HttpService } from '../services/http/http.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { USER_INFO } from '../services/local-storage/local-storage.namespec';
import { response } from '../services/common/common.namespec';
import { CommonService } from '../services/common/common.service';
import { NavbarService } from '../services/navbar/navbar.service';
import { Router, ActivatedRoute, RouterStateSnapshot, NavigationEnd ,Params} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SearchListComponent } from '../resourse/search/search-list/search-list.component';
import { ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  url: string;
  hasLogin: boolean;
  userData: any;
  navigationSubscription: any;
  constructor(
    private http: HttpService,
    private ls: LocalStorageService,
    private commonService: CommonService,
    private navBarService: NavbarService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
  ) {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.nzOnInit();
        this.clickBar(false);
      }
    });
  }
  isCollapsed = false;
  isReverseArrow: boolean;
  isSpinning: boolean;
  width: number;
  roleID: number;
  mids: [];
  navBarList: any[];
  array: string[];
  inputIsClick: boolean;
  searchVal: any;
  isBar:boolean;
  userName: any;


  keyUpSearch() {
    console.log(this.inputIsClick);
    console.log(this.searchVal);

    if (this.searchVal) {
      this.router.navigate(['search/' + this.searchVal], { queryParams: { page: 1, size: 10, type: 1 } }).then(() => {
        window.localStorage.setItem('searchVal', this.searchVal);
        window.location.reload();
      });
    }
  }

  // sesstion(): void {
  //   sessionStorage.clear();
  // }

  mainReload() {
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }
  about() {
    sessionStorage.clear();
    sessionStorage.setItem('activeItem', '0')
    this.router.navigate(['introduction']).then(() => {
      window.scrollTo(0,0);  
      window.location.reload();
    });
  }
  phone() {
    sessionStorage.clear();
    sessionStorage.setItem('activeItem', '1')
    this.router.navigate(['introduction']).then(() => {
      window.scrollTo(0,0);  
      window.location.reload();
    });
  }
  news() {
    sessionStorage.clear();
    sessionStorage.setItem('activeItem', '2')
    this.router.navigate(['introduction']).then(() => {
      window.scrollTo(0,0);  
      window.location.reload();
    });
  }

  userClick() {
    const isLogin = this.cookieService.check('isLogin');
    console.log(isLogin);

    if (!isLogin) {
      this.cookieService.deleteAll();
      this.router.navigate(['login/1']).then(() => {

      });
    } else {
      console.log('已经登录');
      this.router.navigate(['personal/0']).then(() => {

      });
    }
  }





  nzOnInit(): void {
    window.scroll(0,0);
    this.hasLogin = false;
    this.userData = {
      // nick: '用户'
    };
    // document.querySelector('input').value = '';
    setTimeout(()=>{
      document.querySelector('input').value = '';

    },0)

    if (this.cookieService.check('isLogin')) {
      this.hasLogin = true;

      const nowTime = new Date().getTime();
      const cookieTime = Number(this.cookieService.get('isLogin'));
      console.log(nowTime > cookieTime)
      if (nowTime > cookieTime) {
        this.cookieService.delete('isLogin');
        this.cookieService.deleteAll();
        this.router.navigate(['home']).then(() => {
          window.location.reload();
        });

      } else {
        this.http.getPerson().subscribe((res: response) => {
          if (res.code == 0) {
            this.userData = res.data;
            this.userName = res.data['nick']
          } else {
            this.commonService.messageProp('error', res.message);

          }
        });
      }
    }

    this.isCollapsed = false;
    this.isReverseArrow = false;
    this.width = 200;
    this.isSpinning = true;
    // this.route.params.subscribe(res => {
    //   console.log(res)
    //   this.searchVal = res['val'];
    // });





  }
  // getnavBarList(): void {
  //    this.roleID = this.ls.get(USER_INFO).manager.roleID;
  //     this.http.getroleModule(this.roleID).subscribe((resp: response) => {
  //       console.log(resp);
  //       if (resp.code === 0) {
  //         this.mids = resp.data.mids;
  //         this.http.etmultiModule(this.mids).subscribe((res: response) => {
  //            this.navBarList = this.navBarService.mapArrayToList(res.data.moduleList);
  //           this.isSpinning = false;
  //         });

  //       } else {
  //       }

  //     });
  // }


  // gotoUrl(str: string): void {
  //   let arr = [];
  //   const regex = /[^\(\)]+(?=\))/g;
  //   if (str.indexOf('.')) {
  //     arr = str.split('.');
  //     if (regex.test(arr[arr.length - 1])) {
  //       const res = arr[arr.length - 1].match(regex);
  //       console.log( res);
  //     } else {
  //       this.router.navigateByUrl(arr[arr.length - 1]);
  //     }
  //   } else {
  //     this.router.navigateByUrl(str);
  //   }
  // }


  loginOut() {
    this.cookieService.delete('isLogin');
    this.cookieService.deleteAll();
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }
  doSomething(boolean){
    console.log()
  }

  clickBar(isBar){
    if(isBar){
      this.isBar = false;
    }else{
      this.isBar = true;
    }
  }
  // 传个参数事件对象(用于拿子组件传过来的值)
resData (e) {
  console.log("12312345");
  console.log(e);//会打印出子组件传过来的值
}
  ngOnInit(): void {
      console.log(window.location.pathname)
      if(window.location.pathname=="/home"){
        this.isBar = false;
      }
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  changeMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
