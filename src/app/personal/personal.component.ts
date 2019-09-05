import { Component, OnInit,Input, EventEmitter,TemplateRef,Output} from '@angular/core';
import { Router, Route, ActivatedRoute ,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate,} from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { response } from '../services/common/common.namespec';
import { CommonService } from '../services/common/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
@Component({
    selector: 'personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
  })
  export class personalComponent implements OnInit {
    activeItem: number;
    binding: boolean;
    serial:'';
    itemsParams:any;
    @Output() voted = new EventEmitter<boolean>();
    vote(agreed: boolean) {
      console.log(agreed);
      this.voted.emit(agreed);
    }
    paramsData:{id:number;img:string;nick:string;birthday:number;mobile:string;age:number;sex:number;nowTime:number};
    validateForm: FormGroup;
    constructor( private cookieService: CookieService,private fb: FormBuilder,private route: Router, private http: HttpService,private commonService: CommonService,private activatedRoute: ActivatedRoute,private modalService: NzModalService,) { }
    navbarList = [
      { name: '个人信息',},
      { name: '修改密码',},
      { name:'绑定基因盒' },
      { name: '我的基因盒', }
    ];
    loading = false
    number:number;
    changeItem = function (i: number, aItem: any) {
      this.number = i
      this.navbarList.map((item: { isClick: Boolean }) => {
        return item.isClick = false;
      });
      aItem.isClick = true;
      this.activeItem = i;
      //  console.log(this.route.url)
    };
    dataList:[]
  total:number
      show = false
      error= false
      style = {
        display: 'inline-block',
        width: '240px',
        height: '35px',
        color: '#303540',
        border: 'none',
        'background': '#f4f4f4',
        'border-radius': '4px',
      }
      params = {
        img:'',
        nick:'',
        birthday:'',
        sex:'1',
        mobile:'',
      }
      name=false
      headImg:string
      img:string
      birthday=''
     //上传图片
     showUploadList = {
      showPreviewIcon: true,
      showRemoveIcon: true,
      hidePreviewIconInNonImage: true
    };
    handlePreview = (file: UploadFile) => {
      this.img = file.url || file.thumbUrl;
      this.previewVisible = true;
    }

  fileList = [];
//上传图片
showPwd=true;
confirmPwd = false;
pwd = false;
newPwd = false;
isValid =  false;
showImg = false
paramsPwd = {
oldPwd:'',
newPwd:'',
confirmPwd:''
}
oldPwdError= ''
//验证旧密码是否正确。
before(value):void{
  var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]|){1,20}$");
  if(value.oldPwd == ''){
    this.commonService.messageProp('error', '当前密码不可为空');
    return
  }
if(regex.test(value.oldPwd)){
  this.pwd = false
  var params = {pwd:value.oldPwd}
  this.http.testPwd(params).subscribe((resp:response)=>{
    if(resp.code == 0 ){
    }else{
      this.commonService.messageProp('error', resp.message);
    }
})
}else{
  this.pwd = true
}
}
newPassword(value):void{
  var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]|){1,20}$");
  if(value.newPwd == ''){
    this.commonService.messageProp('error', '新密码不可为空');
    return
  }
  if(!regex.test(value.newPwd)||value.newPwd.length<6){
    this.commonService.messageProp('error', '请按照格式输入您的新密码');
  }
  }
  newTwoPwd(value){
    if(value.newPwd !== value.newTwoPwd){
      this.commonService.messageProp('error', '密码输入不一致');
    }
  }
//首次更改密码时提示格式
newPassWord():void{
  var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]|){1,20}$"); 
if(regex.test(this.paramsPwd.newPwd)){
  this.newPwd = false
}else{
  this.newPwd = true
}
}
//二次确认密码时提示
confirmPassWord():void{
console.log('asd')
if(this.paramsPwd.newPwd !== this.paramsPwd.confirmPwd){
  this.confirmPwd = true
}else{
  this.confirmPwd = false
  this.isValid = true
  console.log(this.isValid)
}
}
submit(value):void{
  let params = {
    oldPwd:value.oldPwd,
    newPwd:value.newPwd
  }
  if(params.oldPwd === params.newPwd){
    this.commonService.messageProp('error', '新密码与原密码不可重复');
    return
  }
  if(value.newPwd!== value.newTwoPwd){
    this.commonService.messageProp('error', '密码输入不一致');
    return
  }
 this.http.editPwd(params).subscribe((resp:response)=>{
  if(resp.code == 0 ){
    this.show =false
    this.cookieService.deleteAll();
    this.route.navigate(['login', '1']).then(() => {
    });
  }else{
    this.commonService.messageProp('error', resp.message);
  }
})

}
 //图片上传限制
 beforeUpload = (file: File) => {
  return new Observable((observer: Observer<boolean>) => {
    console.log(file)

    // image/png,image/jpeg,image/gif,image/bmp
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';
    const isBMP = file.type === 'image/bmp';
    if (!isJPG  && !isPNG && !isBMP ) {
      this.commonService.messageProp('error','图片类型错误')
      observer.complete();
      return;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.commonService.messageProp('error','图片大小超过 2MB!')
      observer.complete();
      return;
    }
    // check height
    this.checkImageDimension(file).then(dimensionRes => {
      console.log(dimensionRes)

      if (!dimensionRes) {
        this.commonService.messageProp('error','图片尺寸有误')
        observer.complete();
        return;
      }

      observer.next((isJPG || isPNG || isBMP) && isLt2M && dimensionRes);
      observer.complete();
    });
  });
}

private getBase64(img: File, callback: (img: string) => void): void {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result!.toString()));
  reader.readAsDataURL(img);
}

private checkImageDimension(file: File): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image(); // create image
    img.src = window.URL.createObjectURL(file);
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      window.URL.revokeObjectURL(img.src!);
      resolve(  width > 0);
    };
  });
}
  previewVisible = false;
      transformTime(timestamp:string = ''+new Date()) {
        if (timestamp) {
            var time = new Date(timestamp);
            var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
            var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
            var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
        
            return y + '-' + M + '-' + d
          } else {
              return '';
          }
    }
    handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      this.loading = true;
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.headImg = info.file.response.data.url;
      // console.log('this.resImgLind------', this.resImgLink);
      // this.getBase64(info.file.originFileObj, (img: string) => {
      //   this.loading = false;
      //   this.avatarUrl = img;
      // });
    }
  }
    getPerson(){
      this.http.getPerson().subscribe((resp:response)=>{
        if(resp.code == 0 ){
          console.log(resp.data)
          this.headImg = resp.data.img
        if(this.headImg){
          this.showImg=true
        }
          this.params.nick = resp.data.nick?resp.data.nick:'请前往编辑页面'
          this.params.sex = resp.data.sex?resp.data.sex+'':'1'
          this.params.mobile = resp.data.mobile?resp.data.mobile:'请前往编辑页面'
          this.birthday = ''+resp.data.birthday?this.transformTime(resp.data.birthday):'请前往编辑页面'
            // this.CommonService.confirm('success', '提示', '新增成功', () => {}, () => {
              this.show = false
            //   });
        }
    })
    }
    huanbang(){
      this.route.navigate(['ChangeComponent']).then(() => {
        return
      });
    }
    sum(event:any):void{
      var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]|){1,20}$"); 
      if(!regex.test(this.params.nick)){
        this.name = true
        return
      }else{
        this.name = false
        return
      }
    }
    upDate (){
      if(this.name){
        return
      }
      //获取上传的头像链接
      this.params.img = this.headImg 

      this.params.birthday = ''+new Date(this.birthday).getTime();
      this.http.updatePerson(this.params).subscribe((resp:response)=>{
        console.log(resp)
        if(resp.code == 0 ){
          this.getPerson()
          this.show = false
          this.commonService.messageProp('success','保存成功')
        }else{
          this.commonService.messageProp('error', resp.message);
        }
    })
    }
    //关闭编辑
    top():void{
      this.getPerson()
      //关闭编辑
     
    }
    //编辑
    edit():void{
      //显示编辑
      this.show = true
    }
    //获取基因盒列表
  getGeneLi():void{
    this.http.getGeneLi().subscribe((resp: response) => {
      if (resp.code == 0) {
        if(resp.data.length!=0){
          this.binding = true;
          this.itemsParams = resp.data;
        }
      } else {
        this.commonService.messageProp('error', resp.message);
      }
    })
  }


  //绑定基因盒页面

  valistdateForm: FormGroup;
  tplModal: NzModalRef;
  private geneDate = {
    serial: '',
    errorMes:''
  }
  paramsDtate:{serial:string;errorMes:string}
  //  我的基因盒-绑定基因盒
  postBinding(): void{
    this.geneDate.serial = this.geneDate.serial.toString();
    if(this.geneDate.serial.length > 9){
      this.geneDate.serial = this.geneDate.serial.slice(0,10);
    }
    this.http.postBinding(this.geneDate).subscribe((resp: response) => {
      if (resp.code == 0) {
        this.commonService.messageProp('success', "绑定成功,返回我的基因盒");
        this.route.navigate(['personal/3'], {}).then(() => {
          this.getGeneLi();
        });
      } else {
        this.commonService.messageProp('error', resp.message);
        this.paramsDtate.errorMes = resp.message;
      }
    })
  }
  //弹窗
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzClassName: 'agreeModel',
      nzWidth:800,
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }
  destroyTplModal(): void {
    this.valistdateForm.controls['agree'].setValue(false)
    this.tplModal.destroy();
  }

  EnterTplModal(): void {
    this.valistdateForm.controls['agree'].setValue(true)
    // this.tplModal.destroy();
  }
  //绑定基因盒页面
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        oldPwd: ['',[Validators.required]],
        newPwd: ['',[Validators.required]],
        newTwoPwd:['',[Validators.required]]
    });
    this.activatedRoute.params.subscribe(res => {
      this.number = res.num;
      console.log(this.number)
      this.changeItem(this.number,this.navbarList[this.number])
      this.activeItem = this.number;
    });
      this.getPerson();
      this.getGeneLi();
      this.valistdateForm = this.fb.group({
        serial: [null, [Validators.required]],
        agree: [null, [Validators.required]],
        errorMes:[null]
      });
      this.paramsDtate = this.geneDate;
      this.EnterTplModal();
      this.vote(false)
    }
    
}