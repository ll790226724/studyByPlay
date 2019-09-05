import {Component, OnInit, EventEmitter, TemplateRef} from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpService } from '../services/http/http.service';
import { CommonService } from '../services/common/common.service';
import { response } from '../services/common/common.namespec';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { USER_INFO } from '../services/local-storage/local-storage.namespec';
import { CookieService } from 'ngx-cookie-service';
import { Login } from './login.module';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  tplModal: NzModalRef;
  isLoadingOne = false;
  radioValue: any;
  type: string;
  isVote = false;
   RevalidateForm: FormGroup;
  isRegister: string;
   voteInfo: string;
   countdown = 60;
   href: string;
  constructor(
     private fb: FormBuilder,
     private modalService: NzModalService,
     private http: HttpService,
     private commonService: CommonService,
     private  router: Router ,
     private ls: LocalStorageService,
     private cookieService: CookieService,
     public login: Login,
     private route: ActivatedRoute,
     ) {
  }
  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    // this.loginIn();
  }


  // loginIn(): void {
  //   this.isLoadingOne = !this.isLoadingOne;
  //     this.http.loginIn({name: this.validateForm.get('userName').value, pwd: this.validateForm.get('password').value})
  //     .subscribe((resp: response) => {
  //       if (resp.code === 0) {
  //       this.cookieService.set('isLogin', 'true', 1);

  //           this.ls.set(USER_INFO, resp.data);
  //           this.router.navigateByUrl('/');
  //        } else {
  //         this.commonService.messageProp( 'error', resp.message );
  //        }
  //       setTimeout(() => {
  //         this.isLoadingOne = !this.isLoadingOne;
  //       }, 1000);
  //      });
  // }


  changeBtn() {
    if (this.radioValue ===  this.login.BTNLOGIN ) {
      console.log('切换到登录');

    } else if (this.radioValue ===  this.login.BTNREGISTER) {
      console.log('切换到注册');

    }

  }


  register () {




    console.log(this.RevalidateForm.value);
    const obj = {
      mobile: this.RevalidateForm.value.registerMobile,
      pwd: this.RevalidateForm.value.registerPwd,
      verify: this.RevalidateForm.value.vote,
    };
    const reg = /^([\d]|[\w]){6,16}$/ ;
    console.log(this.RevalidateForm.value.registerPwd);
    const pwdIsOK = reg.test(this.RevalidateForm.value.registerPwd);

     if (!pwdIsOK) {
       this.commonService.messageProp('error', '请输入由数字、字母、下划线组成的6-16位密码');
     } else {
       if (this.RevalidateForm.value.registerPwd !== this.RevalidateForm.value.againPwd) {
         this.commonService.messageProp('error', '两次输入密码不一致，请检查！');
       } else {
         this.http.register(obj).subscribe( (res: response) => {
           if (res.code === 0) {
               const time = (24 * 14) * 60 * 60 * 1000 ; // 设置过期时间为两个小时
               const timer = new Date(new Date( ).getTime( ) + time); // 当前时间加上有效期
               console.log(timer);

               this.cookieService.set('isLogin', timer.getTime().toString(), timer);
               setTimeout(() => {
                 this.router.navigate(['home']).then(() => {
                   // window.location.reload();
                 });
               }, 1000);

           } else {
             this.commonService.messageProp('error', res.message);
           }
         } );
       }
     }











  }

  loginIn () {
    this.isLoadingOne = true;

    console.log(this.validateForm.value);
    const obj = {
      mobile: this.validateForm.value.userName,
      pwd: this.validateForm.value.password
    };


    this.http.loginIn(obj).subscribe( (res: response) => {
      if (res.code === 0) {

          if (this.validateForm.value.remember) {
            window.localStorage.setItem('name', JSON.stringify(obj));
          } else {
            window.localStorage.removeItem('name');
          }
            this.router.navigate(['home']).then(() => {
              const time = (24 * 14) * 60 * 60 * 1000 ; // 设置过期时间为两个小时
              const timer = new Date(new Date( ).getTime( ) + time); // 当前时间加上有效期
              console.log(timer);

              this.cookieService.set('isLogin', timer.getTime().toString(), timer);

              this.router.navigate(['home']).then(() => {
                // window.location.reload();
              });
              // setTimeout(() => {
              //
              // }, 1000);



            });
          // setTimeout(() => {
          //   this.router.navigate(['home']).then(() => {
          //     window.location.reload();
          //   });
          // }, 1000);
      } else {
        this.commonService.messageProp('error', res.message);
      }
      setTimeout( () => {
        this.isLoadingOne = false;
      }  , 1000);

    } );


  }


    mobileValidate (name, form) {

      this.isRegister = '';


    let  validateValue = form.value[name];


    //  把非数字的都替换掉，除了数字和.
    validateValue = validateValue.replace(/[^\d]/g, '');
    //  必须保证第一个为数字而不是.
    validateValue = validateValue.replace(/^\./g, '');
    //  保证只有出现一个.而没有多个.
    validateValue = validateValue.replace(/\.{2,}/g, '');
    //  保证.只出现一次，而不能出现两次以上
    validateValue = validateValue.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');

    console.log(validateValue);

    if (validateValue.length == 11) {
      console.log('进行手机号校验');
      this.http.checkPhone({mobile: validateValue}).subscribe(  (res: response) => {
        if (res.code == 0) {
          // 手机已经注册
          this.isRegister = 'isRegister';
        } else {
          this.isRegister = 'isNoRegister';
        }
      }  );
    } else {

    }


    form.get(name).setValue(validateValue);




  }










  votemsg () {
    if (this.RevalidateForm.value.registerMobile && this.RevalidateForm.value.registerMobile.length !== 11 ) {
      this.commonService.messageProp('error', '手机号错误,请检查');
    } else {
      this.http.voteCode({mobile: this.RevalidateForm.value.registerMobile, type: 'register'}).subscribe( (res: response) => {
        if (res.code === 0) {
          this.commonService.messageProp('success', '发送成功');

         const start =  setInterval(() => {
           if (this.countdown  == 0) {
             this.isVote = false;
             this.voteInfo = '获取验证码';
             clearInterval(start);
             this.countdown = 60;
           } else {
             this.countdown --;
             this.isVote = true;
             this.voteInfo = `${this.countdown}秒后重新发送`;
           }
         }, 1000 );

        } else {
          this.commonService.messageProp('error', res.message);
        }
      } );
    }



  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzClassName: 'agreeModel',
      nzWidth: 800,
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.RevalidateForm.controls['agree'].setValue(false);
    this.tplModal.destroy();
  }

  EnterTplModal(): void {
    this.RevalidateForm.controls['agree'].setValue(true);
    this.tplModal.destroy();
  }


  ngOnInit(): void {
      console.log(window.location.origin);
      // window.localStorage.setItem('121212','asdadasdasd');


    let WxStr = window.location.origin + '/wxLogin';
      this.http.getWxloginAddr({redirectUri: WxStr}).subscribe((res:response) =>{
        if(res.code===0){
                this.href = res.data.wxUrl;
        }else{
          this.commonService.messageProp('error',res.message);

        }
      })

   this.voteInfo = '获取验证码';
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required, Validators.minLength(11)   ]  ],
      password: [ null, [ Validators.required, Validators.minLength(6)  ]   ],
      remember: [ true ]
    });







    this.RevalidateForm = this.fb.group({
      registerMobile: [ null, [ Validators.required , Validators.minLength(11)  ]  ],
      vote: [ null, [ Validators.required  ]  ],
      registerPwd: [ null, [ Validators.required, Validators.minLength(6)  ]   ],
      againPwd: [ null, [ Validators.required, Validators.minLength(6)  ]   ],
      agree: [ null, [ Validators.required  ]   ],
    });

      this.RevalidateForm.controls['agree'].setValue(true);

    this.radioValue = this.login.BTNLOGIN;
    this.route.params.subscribe(res => {
      console.log(res);
      this.type = res.type;

      if (this.type === '1') {
        this.radioValue = this.login.BTNLOGIN;
      } else {
        this.radioValue = this.login.BTNREGISTER;
      }

      // 数据初始化
      // reInitData()
    });

    console.log(this.type);

    if (window.localStorage.getItem('name')) {
      this.validateForm.controls['userName'].setValue(JSON.parse(window.localStorage.getItem('name')).mobile);
      this.validateForm.controls['password'].setValue(JSON.parse(window.localStorage.getItem('name')).pwd);
      this.isRegister = 'isRegister';
    }



  }
}
