import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, Route } from '@angular/router';
import { HttpService } from '../services/http/http.service'
import { response } from '../services/common/common.namespec';
import { CommonService } from '../services/common/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'Change',
  templateUrl: './Change.component.html',
  styleUrls: ['./Change.component.scss']
})

export class ChangeComponent implements OnInit {
  constructor(
    private http: HttpService,
    private commonService: CommonService,
    private router: Router,
    private cookieService: CookieService,
  ) { }
  params = {
    mobile: '',
    type: 'changeBinding',
  }
  twoCode = {
    mobile: '',
    verify: '',
  }
  newMobile = {
    mobile: '',
    type: 'changeBinding'
  }
  newTwoCode = {
    verifyOld: '',
    verifyNew: '',
    mobileNew: ''
  }
  classNo = false
  show = false
  error = false
  twoError: string
  class = false
  text = ''
  test = "短信验证"
  testTwo = "短信验证"
  dateTime = 60
  dateTimes = 60
  three: string
  subscribe: boolean = false
  person() {
    this.http.getPerson().subscribe(res => {
      if (res.code == 0) {
        this.params.mobile = res.data.mobile
      }
    })
  }
  //首次获取验证码
  code() {
    this.class = true
    let re = /^1\d{10}$/
    if (!re.test(this.params.mobile)) {
      this.text = '请输入正确的手机号'
      return
    }
    let time = setInterval(() => {
      this.test = this.dateTime-- + '秒后重新发送'
      this.class = true
      if (this.dateTime == 0) {
        this.test = '短信验证'
        this.dateTime = 60;
        this.class = false
        clearInterval(time)
        return
      }
    }, 1000)
    this.http.voteCode(this.params).subscribe((resp: response) => {
      if (resp.code == 0) {

      } else {
        this.commonService.confirm('error', '提示', resp.message, () => false, () => {
        });
      }
    })
  }
  //新手机获取验证码
  newCode() {
    let re = /^1\d{10}$/
    if (!re.test(this.newMobile.mobile)) {
      this.commonService.confirm('error', '提示', '请输入正确的手机号', () => false, () => {
      });
      return
    }
    this.http.voteCode(this.newMobile).subscribe((resp: response) => {
      if (resp.code == 0) {
        let time = setInterval(() => {
          this.classNo = true
          this.testTwo = this.dateTimes-- + '秒后重新发送'
          if (this.dateTimes == 0) {
            this.testTwo = '短信验证'
            this.dateTimes = 60
            this.classNo = false
            clearInterval(time)
            return
          }
        }, 1000)
      }
    })
  }
  testPhone(){
    let re = /^1\d{10}$/
    if (!re.test(this.newMobile.mobile)) {
      this.commonService.confirm('error', '提示', '请输入正确的手机号', () => false, () => {
      });
      return
    }
    this.http.checkPhone(this.newMobile).subscribe((res:response) =>{
      console.log(res)
      if(res.code == 0){
        this.commonService.confirm('error', '提示', '改手机号已注册', () => false, () => {
        });
      }
    })
  }
  phone() {
    sessionStorage.clear();
    sessionStorage.setItem('activeItem', '1')
    this.router.navigate(['introduction']).then(() => {
      window.location.reload();
    });
  }
  //第一次提交验证码是否正确
  subm() {
    this.twoCode.mobile = this.params.mobile
    this.http.changeBinding(this.twoCode.verify, this.params.mobile).subscribe((resp: response) => {
      if (resp.code == 0) {
        this.show = true
        this.dateTime = 60
        this.classNo = false
      } else {
        this.commonService.confirm('error', '提示', resp.message, () => false, () => {
        });
      }
    })
  }
  dateJump: number = 5
  //第二次提交更换完成
  twoSubm() {
    this.newTwoCode.verifyOld = this.twoCode.verify
    this.newTwoCode.mobileNew = this.newMobile.mobile
    this.http.putMobile(this.newTwoCode).subscribe((resp: response) => {
      if (resp.code == 0) {
        let that = this
        let time = setInterval(() => {
          that.dateJump--
          console.log(that.dateJump)
          if (that.dateJump == 0) {
            this.cookieService.delete("isLogin");
            this.router.navigate(['login', '1']).then(() => {
            });
            clearInterval(time)
            return
          }
        }, 1000)
        this.subscribe = true

      } else {
        this.commonService.confirm('error', '提示', resp.message, () => false, () => {
        });
      }
    })
  }
  jump() {
    this.cookieService.delete("isLogin");
    this.router.navigate(['login', '1']).then(() => {
    });
  }
  ngOnInit(): void {
    this.person()
  }
}
