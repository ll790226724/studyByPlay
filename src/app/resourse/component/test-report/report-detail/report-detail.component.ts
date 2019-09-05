import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../services/http/http.service';
import {CommonService} from '../../../../services/common/common.service';
import {ActivatedRoute,Router} from '@angular/router';
import {response} from '../../../../services/common/common.namespec';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit {

  data: any;
  reportDet:any;
  custom:any;
  private searhParams = {
    id:'',
    boxId:'',
    detId:''
  }
  private report = {
    name:'',
  }
  private params = {
    id :'',
    boxId:'',
  }
  reportNum:any;
  testli=new Array;
  test:{name:string}
  testType:any;
  private paddingleft:string = "px"
  constructor(private http: HttpService , private  commonService: CommonService, private activeRouter: ActivatedRoute,private route:Router, ) { }
  //获取报告目录列表
  loadData()  {
    this.http.getTestReport(this.searhParams.boxId).subscribe((res: response) => {
      if (res.code === 0) {
        this.data = JSON.parse(res.data.resultNew).classify;
        this.test.name = JSON.parse(res.data.resultNew).productName;
        for (const key in this.data) {
          if(this.data[key].id == this.searhParams.id){
            this.testType =  this.data[key];
            for(const ke in this.data[key].item){
              if(ke == this.searhParams.detId){
                this.data[key].item[ke].showType = this.data[key].showType;
                this.reportDet = this.data[key].item[ke];
                this.reportDet.min = 1;
                this.reportDet.max = 1;
                for(const k in this.data[key].item[ke].locus){
                  this.data[key].item[ke].locus[k].name = k;
                  this.testli.push(this.data[key].item[ke].locus[k])
                  this.reportDet.min = this.reportDet.min*this.data[key].item[ke].locus[k].min;
                  this.reportDet.max = this.reportDet.max*this.data[key].item[ke].locus[k].max;
                }
                this.paddingleft = (this.reportDet.resultNum-this.reportDet.min)/(this.reportDet.max-this.reportDet.min)*360 +this.paddingleft;
              }
            }
          }
        }
        this.custom = JSON.parse(this.reportDet.custom)
      } else {
        this.commonService.messageProp('error', res.message);
      }
    });
  }
  //跳转目录
  getTestType():void{
    this.params.boxId = this.searhParams.boxId;
    this.route.navigate(['testreport/'+this.params.boxId], {}).then(() => {});
  }
  //跳转目录
  getReportLi(id):void{
    this.params.id = id;
    this.params.boxId = this.searhParams.boxId;
    this.route.navigate(['reportLi', 'list'], { queryParams: this.params }).then(() => {});
  }
  ngOnInit() {
    this.activeRouter.queryParams.subscribe(res => {
      this.searhParams = JSON.parse(JSON.stringify(res));
      this.loadData();
      this.test = this.report;
    });
  }
}
