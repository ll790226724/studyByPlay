import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../services/http/http.service';
import {CommonService} from '../../../../services/common/common.service';
import {ActivatedRoute,Router} from '@angular/router';
import {response} from '../../../../services/common/common.namespec';

@Component({
  selector: 'app-testing-detail',
  templateUrl: './testing-detail.component.html',
  styleUrls: ['./testing-detail.component.scss']
})
export class TestingDetailComponent implements OnInit {
  //检测项目目录
  listOfData: any[];
   params = {
    id:'',
    detId:''
  }
  reportLi :any;
  testli=new Array;
  searhParams:{id:string;detId:string}
  testType:any;
  constructor(private http: HttpService , private  commonService: CommonService, private activeRouter: ActivatedRoute,private route:Router, ) { }
  //跳转分类详情
  getReportDet(detId):void{
    this.searhParams.detId = detId;
    this.searhParams.id = this.params.id;
    console.log(this.searhParams)
    this.route.navigate(['example', 'list'], { queryParams: this.searhParams }).then(() => {});
  }
  private data = {
    0 : {//健康风险分类
      detail:"主要包含遗传相关的复杂疾病风险，其致病因素一般非常复杂，也与环境和生活习惯等因素密切相关，这里会给出相应的风险值，以便您对遗传健康状况有更全面的了解。",
      id:"0",
      img:"assets/images/healthy.png",
      imgBanner:"assets/images/healthy-detail.png",
      info:"主要包含遗传相关的复杂疾病风险，其致病因素一般非常复杂，也与环境和生活习惯等因素密切相关，这里会给出相应的风险值，以便您对遗传健康状况有更全面的了解。",
      item:{//项目目录
        0:{
          //位点信息
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"Han, J. W., Zheng, H. F., Cui, Y., Sun, L. D., Ye, D. Q., Hu, Z., ... & Xie, H. F. (2009). Genome-wide association study in a Chinese Han population identifies nine new susceptibility loci for systemic lupus erythematosus. Nature genetics, 41(11), 1234-1237.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"Yang, W., Shen, N., Ye, D. Q., Liu, Q., Zhang, Y., Qian, X. X., ... & Chan, T. M. (2010). Genome-wide association study in Asian populations identifies variants in ETS1 and WDFY4 associated with systemic lupus erythematosus. PLoS Genet, 6(2), e1000841.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"Yang, J., Yang, W., Hirankarn, N., Ye, D. Q., Zhang, Y., Pan, H. F., ... & Lee, K. W. (2010). ELF1 is associated with systemic lupus erythematosus in Asian populations. Human molecular genetics, ddq474.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"Okada, Y., Shimane, K., Kochi, Y., Tahira, T., Suzuki, A., Higasa, K., ... & Okamoto, A. (2012). A genome-wide association study identified AFF1 as a susceptibility locus for systemic lupus eyrthematosus in Japanese. PLoS Genet, 8(1), e1002455.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"Yang, W., Tang, H., Zhang, Y., Tang, X., Zhang, J., Sun, L., ... & Cheng, H. (2013). Meta-analysis followed by replication identifies loci in or near CDKN1B, TET3, CD80, DRAM1, and ARID5B as associated with systemic lupus erythematosus in Asians. The American Journal of Human Genetics, 92(1), 41-51.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"Morris, D. L., Sheng, Y., Zhang, Y., Wang, Y. F., Zhu, Z., Tombleson, P., ... & Chen, R. (2016). Genome-wide association meta-analysis in Chinese and European individuals identifies ten new loci associated with systemic lupus erythematosus. Nature genetics.\",\"imgList\":[]}]},{\"name\":\"致病因素\",\"content\":[{\"name\":\"致病因素\",\"type\":1,\"value\":\"尿路或阴道感染\",\"imgList\":[]},{\"name\":\"致病因素\",\"type\":1,\"value\":\"尿路或阴道感染会增加系统性红斑狼疮患病风险。\",\"imgList\":[]}]},{\"name\":\"抑制因素\",\"content\":[{\"name\":\"抑制因素\",\"type\":1,\"value\":\"注意休息和锻炼\",\"imgList\":[]},{\"name\":\"抑制因素\",\"type\":1,\"value\":\"体育锻炼或参加适宜的体力劳动是增强体质、提高机体抗病能力的重要方法。\",\"imgList\":[]},{\"name\":\"抑制因素\",\"type\":1,\"value\":\"祛除诱因\",\"imgList\":[]},{\"name\":\"抑制因素\",\"type\":1,\"value\":\"及时祛除日常生活中能够诱发或加重该病的各种因素。如避免日光曝晒，避免接触致敏性药物(染发剂或杀虫剂)和食物，减少刺激性食物的摄入。\",\"imgList\":[]},{\"name\":\"抑制因素\",\"type\":1,\"value\":\"预防病毒感染\",\"imgList\":[]},{\"name\":\"抑制因素\",\"type\":1,\"value\":\"系统性红斑狼疮发病与病毒感染有关。在系统性红斑狼疮病人的肝、脾及白细胞组织中提取出C型病毒抗原，并在肾小球、血管内皮和皮肤损害部位发现类似包涵体成分，但至今尚未从系统性红斑狼疮病人组织中分离出C型病毒。\",\"imgList\":[]}]},{\"name\":\"高危人群\",\"content\":[{\"name\":\"高危人群\",\"type\":1,\"value\":\"（1）具有家族遗传史者\",\"imgList\":[]},{\"name\":\"高危人群\",\"type\":1,\"value\":\"（2）生活工作环境污染严重\",\"imgList\":[]}]},{\"name\":\"症状及筛查\",\"content\":[{\"name\":\"症状及筛查\",\"type\":1,\"value\":\"绝大部分红斑狼疮患者都有皮损，皮损是诊断的重要根据，尤其是双侧脸颊和横跨鼻梁的蝴蝶状斑块。临床表现还有疲劳无力，关节和肌肉疼痛，即使是轻度病例，患者也难以自理和运动。\",\"imgList\":[]}]}]",
          img:'',
          locus:{//位点
            rs9937837:{
              // chromosomes:'',
              expound:'正常',
              gene:'ITGAM',
              // max:12,
              // min:11,
              type:'AA',
              // value:13,
            },
            rs9270984:{
              expound:'暂无解读',
              gene:'HLA-DRB1',
              type:'',
            },
            rs7579944:{
              expound:'正常',
              gene:'LOC105374414 - LBH',
              type:'CT',
            },
            rs73135369:{
              expound:'偏高',
              gene:'GTF2IRD1',
              type:'CT',
            },
            rs7186852:{
              expound:'正常',
              gene:'ZNF689 - PRR14',
              type:'TT',
            },
            rs6804441:{
              expound:'正常',
              gene:'CD80',
              type:'CT',
            },
            rs6705628:{
              expound:'正常',
              gene:'DGUOK-AS1',
              type:'CC',
            },
            rs6590330:{
              expound:'正常',
              gene:'LOC10536956',
              type:'CT',
            },
            rs548234:{
              expound:'偏高',
              gene:'PRDM1 - ATG5',
              type:'CT',
            },
            rs4948496:{
              expound:'偏高',
              gene:'ARID5B	',
              type:'CC',
            },
          },
          name:'系统性红斑狼疮',
          intro:'系统性红斑狼疮（SLE）是一种多发于青年女性的累及多脏器的自身免疫性炎症性结缔组织病，早期、轻型和不典型的病例日渐增多。有些重症患者（除患者有弥漫性增生性肾小球肾炎者外），有时亦可自行缓解。有些患者呈“一过性”发作，经过数月的短暂病程后疾病可完全消失。',
          probability:0.07,
          resultNum:3.09,
          max:119.44,
          min:0.04,
          reNum:0.22,
        },
        1:{
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"Li, W. D. , Jiao, H. , Wang, K. , Zhang, C. K. , Glessner, J. T. , & Grant, S. F. A. , et al. (2013). A genome wide association study of plasma uric acid levels in obese cases and never-overweight controls. Obesity, 21(9), n/a-n/a.\",\"imgList\":[]}]},{\"name\":\"致病因素\",\"content\":[{\"name\":\"致病因素\",\"type\":1,\"value\":\"肥胖\",\"imgList\":[]},{\"name\":\"致病因素\",\"type\":1,\"value\":\"肥胖会使尿酸合成增加、排出减少，导致高尿酸血症风险增加。\",\"imgList\":[]},{\"name\":\"致病因素\",\"type\":1,\"value\":\"饮酒\",\"imgList\":[]},{\"name\":\"致病因素\",\"type\":1,\"value\":\"啤酒、白酒等谷物酿酒中嘌呤含量较高，饮酒会导致尿酸生成增多。\",\"imgList\":[]},{\"name\":\"致病因素\",\"type\":1,\"value\":\"剧烈运动\",\"imgList\":[]},{\"name\":\"致病因素\",\"type\":1,\"value\":\"剧烈运动会使组织耗氧量增加，患者出汗增加，血容量、肾血流量减少，尿酸、肌酸等排泄减少，容易出现高尿酸血症甚至诱发痛风。痛风以步行、骑车及游泳最适宜。\",\"imgList\":[]},{\"name\":\"致病因素\",\"type\":1,\"value\":\"高嘌呤食物（海鲜、内脏）\",\"imgList\":[]},{\"name\":\"致病因素\",\"type\":1,\"value\":\"含嘌呤食物会使体内嘌呤的合成量增多，会加重肾脏负担，同时还有可能引发痛风等疾病。\",\"imgList\":[]}]},{\"name\":\"抑制因素\",\"content\":[{\"name\":\"抑制因素\",\"type\":1,\"value\":\"多饮水少喝饮料\",\"imgList\":[]},{\"name\":\"抑制因素\",\"type\":1,\"value\":\"多饮水可以加速尿酸的排出，而饮料中的大量果糖在代谢中会分解出嘌呤，导致合成尿酸增加。\",\"imgList\":[]}]},{\"name\":\"高危人群\",\"content\":[{\"name\":\"高危人群\",\"type\":1,\"value\":\"（1）长期从事剧烈运动工作者\",\"imgList\":[]},{\"name\":\"高危人群\",\"type\":1,\"value\":\"（2）长期食用高嘌呤食物者\",\"imgList\":[]},{\"name\":\"高危人群\",\"type\":1,\"value\":\"（3）酗酒者\",\"imgList\":[]},{\"name\":\"高危人群\",\"type\":1,\"value\":\"（4）肥胖者\",\"imgList\":[]}]},{\"name\":\"症状及筛查\",\"content\":[{\"name\":\"症状及筛查\",\"type\":1,\"value\":\"突出症状为急性痛风性关节炎突然发作。出现以小关节为主的关节红肿、热痛、肿胀、僵硬、屈伸不利，血尿酸增高。也可以没有任何症状，只是血液中尿酸值增多。\",\"imgList\":[]}]}]",
          img:'',
          locus:{
            rs6449213:{
              expound:'偏高',
              gene:'SLC2A9',
              type:'CT',
            }
          },
          name:'高尿酸血症',
          intro:'高尿酸血症（HUA）是指在正常嘌呤饮食状态下，非同日两次空腹血尿酸水平男性高于420μmol/L，女性高于360μmol/L，即称为高尿酸血症。尿酸是人类嘌呤化合物的终末代谢产物。嘌呤代谢紊乱导致高尿酸血症。本病患病率受到多种因素的影响，与遗传、性别、年龄、生活方式、饮食习惯、药物治疗和经济发展程度等有关。',
          probability:13,
          resultNum:2,
          max:4,
          min:0.5,
          reNum:26,
        },
      },
      name:"健康风险",
      showType:'20',
    },
    1 : {//营养需求分类
      detail:"基因上的变异会影响人体对营养元素的利用率，因此携带不同基因型的人对营养元素的需求有所不同，我们为您检测了这些位点，以便您更好的管理自身的营养健康。",
      id:"1",
      img:"assets/images/nutrition.png",
      imgBanner:"assets/images/nutrition-detail.png",
      info:"基因上的变异会影响人体对营养元素的利用率，因此携带不同基因型的人对营养元素的需求有所不同，我们为您检测了这些位点，以便您更好的管理自身的营养健康。",
      item:{//项目目录
        0:{
          //位点信息
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"1. Major JM, et al (2011). Genome-wide association study identifies common variants associated with circulating vitamin E levels. Hum Mol Genet.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"2. Ferrucci L, et al (2009). Common variation in the beta-carotene 15,15'-monooxygenase 1 gene affects circulating levels of carotenoids: a genome-wide association study. Am J Hum Genet.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"3. Major JM, et al (2012). Genome-wide association study identifies three common variants associated with serologic response to vitamin E supplementation in men. J Nutr.\",\"imgList\":[]}]},{\"name\":\"营养建议\",\"content\":[{\"name\":\"营养建议\",\"type\":1,\"value\":\"富含该营养元素的食物:\",\"imgList\":[]},{\"name\":\"营养建议\",\"type\":1,\"value\":\"植物油、肉类、鱼类、豆类、谷类、坚果。\",\"imgList\":[]},{\"name\":\"营养建议\",\"type\":2,\"value\":\"\",\"imgList\":[{\"url\":\"assets/images/nutrition-1.png\"}]}]},{\"name\":\"相关知识\",\"content\":[{\"name\":\"相关知识\",\"type\":1,\"value\":\"维护青春，维护美丽，通过补充适宜的维生素来达到养颜护肤、延缓衰老的目的，是近年来美容潮流中一股清新、自然的时尚风气。维生素E能够清除体内的氧自由基，具有增强机体抵抗能力、改善血液循环、预防心血管疾病等作用。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"有些人用维生素E护理皮肤和增长睫毛，寒冷的冬天，适量补充维生素E不仅可以帮助抵御寒冷，还可预防和减少寒冷所诱发的多种疾病。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"维生素E早在20年代就被人们发现，Evans和他的同事在研究生殖过程中发现，酸败的猪油可以引起大鼠的不孕症。在1936年分离出结晶体，1938年被瑞士化学家人工合成。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"细胞色素-家族4-亚家族F-多肽2简称为CYP4F2 （cytochrome P450, family 4, subfamily F, polypeptide 2），是一种羟化酶，在维生素E代谢途径中具有重要作用。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"人体内参与脂质的代谢的CYP4F2基因，属于q450家族，存在于细胞的内质网。CYP4F2基因参与脂肪的代谢，而维生素E的吸收与肠道脂肪有关，因此该基因的变异不但会影响脂肪的代谢，还会影响维生素E的吸收。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"很多食物中都含有维生素E，这种维生素构成了许多水果和蔬菜的表皮，特别是绿叶植物，油脂类食物中，例如橄榄油和棕榈油都富含维生素E。由于维生素E是脂溶性的，在水中溶解度极小，所以，为了更好的吸收维生素E，可以同时适量的吃一些富含脂肪的食物。尽管维生素E对人体有许多好处，但是长期维生素E摄入过量也会有潜在毒性，有的可出现唇炎、恶心。\",\"imgList\":[]}]}]",
          img:'',
          locus:{//位点
            rs2108622:{
              // chromosomes:'',
              expound:'维生素E吸收能力偏强，需求正常',
              gene:'CYP4F2',
              // max:12,
              // min:11,
              type:'TT',
              // value:13,
            }
          },
          name:'维生素E需求',
          intro:'维生素E（Vitamin E）是一种脂溶性维生素，其水解产物为生育酚，是最主要的抗氧化剂之一。维生素E主要功能是促进生殖。它能够促进性激素分泌，增加男性精子的活力和数量；增加女性雌激素的浓度，提高生育能力，预防流产。此外，维生素E还能够保护淋巴细胞、红细胞、抑制血小板的聚集从而降低心肌梗死和脑梗塞的风险。维生素E可有效抑制酪氨酸酶的活性，从而减少黑色素生成。酯化形式的维生素E还能消除由紫外线、空气污染等外界因素造成的过多的氧自由基，起到延缓光老化、预防晒伤和抑制日晒红斑生成等作用。还有研究表明，维生素E能够保护眼睛，预防和改善近视。',
          probability:0.07,
          resultNum:1,
          max:119.44,
          min:0.04,
          reNum:1,
          resultText:'您的维生素E需求是正常水平'
        },
        1:{
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"1. Liao WL, et al (2012). Gene polymorphisms of adiponectin and leptin receptor are associated with early onset of type 2 diabetes mellitus in the Taiwanese population. Int J Obes (Lond).\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"2. Hellwege JN, et al (2014). Genome-wide family-based linkage analysis of exome chip variants and cardiometabolic risk. Genet Epidemiol.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"3. Domínguez-Reyes T, et al (2015). Interaction of dietary fat intake with APOA2, APOA5 and LEPR polymorphisms and its relationship with obesity and dyslipidemia in young subjects. Lipids Health Dis.\",\"imgList\":[]}]},{\"name\":\"营养建议\",\"content\":[{\"name\":\"营养建议\",\"type\":1,\"value\":\"铃薯、奶类、植物油、禽畜肉类，这类脂肪以饱和脂肪酸为主，饱和脂肪酸仍是人体必须摄取的，但较不饱和脂肪易使人发胖，过量的饱和脂肪酸也会造成心血管疾病风险。\",\"imgList\":[]},{\"name\":\"营养建议\",\"type\":2,\"value\":\"\",\"imgList\":[{\"url\":\"assets/images/nutrition-2.png\"}]}]},{\"name\":\"相关知识\",\"content\":[{\"name\":\"相关知识\",\"type\":1,\"value\":\"动物油、椰子油和棕榈油的主要成分是饱和脂肪酸，而多元不饱和脂肪酸的含量很低。心脏病人舍弃动物性饱和脂肪酸后，可从植物油中摄取植物性不饱和脂肪酸。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"饱和脂肪存在于畜中，例如黄油、干酪、全脂奶、冰淇淋、奶油和肥肉，以及某些植物油（椰油、棕榈油和棕榈仁油）中。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"APOE（Apolipoprotein-E）编码蛋白是乳糜微粒中重要的载脂蛋白之一，通过与肝细胞和外周组织细胞的受体结合，参与脂蛋白的分解代谢。该基因的多态性会影响机体对饱和脂肪酸的代谢能力。 高血脂APOE基因和老年痴呆，血脂紊乱以及心血管疾病密切相关。1991 年，杜克大学神经科学家 Warren Strittmatter 当时在研究 β 淀粉样蛋白和阿尔兹海默病的关系，他主要的研究内容是用脑脊液中寻找β-淀粉样蛋白，但是他只找到载脂蛋白E ( APOE )，这个蛋白在当时被认为和阿尔兹海默病丝毫没有联系，他把这一组令人奇怪的研究数据汇报给他的老板，遗传学家 Allen Roses 。Roses从此开始证明了APOE与老年痴呆症的密切关系。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"常见的分型为E2, E3和E4三种亚型。由于人类是二倍体，因此可以组合成E2/E2，E2/E3，E2/E4，E3/E3，E3/E4以及E4/E4六种情况。E4型被认为会大大增加老年痴呆的风险，而且很容易血脂高，所以会建议E4型的人少吃油脂，多锻炼。\",\"imgList\":[]}]}]",
          img:'',
          locus:{
            rs7412:{
              expound:'饱和脂肪酸代谢能力可能为正常水平或者较强水',
              gene:'APOE',
              type:'CT',
            },
            rs429358:{
              expound:'饱和脂肪酸代谢能力可能较强，需求可能较高',
              gene:'APOE',
              type:'TT',
            }
          },
          name:'饱和脂肪酸需求',
          intro:'饱和脂肪酸（Saturated fat）是指不含双键的脂肪酸，膳食中饱和脂肪酸多存在于动物脂肪及乳脂中，饱和脂肪酸摄入量过高是导致血胆固醇、三酰甘油、低密度脂蛋白胆固醇（LDL-C）升高的主要原因，可引起动脉管腔狭窄，形成动脉粥样硬化，增加患冠心病的风险。',
          probability:13,
          resultNum:2,
          max:4,
          min:0.5,
          reNum:2,
          resultText:'您的饱和脂肪酸需求较高'
        },
      },
      name:"营养需求",
      showType:'10',
    },
    2 : {//运动基因分类
      detail:"基因上的变异会影响人体对营养元素的利用率，因此携带不同基因型的人对营养元素的需求有所不同，我们为您检测了这些位点，以便您更好的管理自身的营养健康。",
      id:"2",
      img:"assets/images/moting.png",
      imgBanner:"assets/images/moting-detail.png",
      info:"基因上的变异会影响人体对营养元素的利用率，因此携带不同基因型的人对营养元素的需求有所不同，我们为您检测了这些位点，以便您更好的管理自身的营养健康。",
      item:{//项目目录
        0:{
          //位点信息
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"1.Genomic haplotype within the Peroxisome Proliferator-Activated Receptor Delta (PPARD) gene is associated with elite athletic status.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"2.Genetic Variations in PPARD and PPARGC1A Determine Mitochondrial Function and Change in Aerobic Physical Fitness and Insulin Sensitivity during Lifestyle Intervention.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"3.Variations in PPARD Determine the Change in Body Composition during Lifestyle Intervention: A Whole- Body Magnetic Resonance Study.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"4.The Myocyte Expression of Adiponectin Receptors and PPARδ Is Highly Coordinated and Reflects Lipid Metabolism of the Human Donors.\",\"imgList\":[]}]},{\"name\":\"相关知识\",\"content\":[{\"name\":\"相关知识\",\"type\":1,\"value\":\"当人进行剧烈运动的时候，耗氧量增加，使肌肉处于相对缺氧的状态。乳酸在肌肉内大量堆积，就会透过肌肉中的化学感受器使人产生酸痛的感觉。运动后进行肌肉拉伸，热水澡，按摩，喝水等都有助于乳酸排出体外。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"遗传学研究表明PPARD和PPARGC1A基因能够共同影响我们在运动中的乳酸阈和乳酸代谢能力，从而影响我们的体力运动能力。PPARD基因编码PPARδ（Peroxisome proliferator-activated receptor delta ，过氧化酶体增殖因子激活受体δ）蛋白，PPARGC1A基因编码PPARγ1α（Peroxisome proliferator-activated receptor gamma co-activator 1α ，过氧化酶体增殖因子激活受体γ共激活因子1α）。这两个蛋白都是转录因子，能够调控其他基因的表达，他们调控的基因参与了细胞能量代谢的过程，PPARδ蛋白表达量上升能够提高游离脂肪酸代谢途径，特别是在组织脂质代谢依赖高的细胞，如心脏和骨骼肌和脂肪组织，从而提高身体的乳酸阈和乳酸代谢能力，在动物体外实验中证明这两个蛋白是线粒体的功能的决定因子。在PPARGC1A基因上的rs8192678位点的碱基G突变成A能够降低身体的乳酸阈和乳酸代谢能力，从而降低我们的有氧运动能力以及通过有氧运动健身减肥的效果。\",\"imgList\":[]}]}]",
          img:'',
          locus:{//位点
            rs8192678:{
              // chromosomes:'',
              expound:'正常代谢能力',
              gene:'PPARGC1A',
              // max:12,
              // min:11,
              type:'CC',
              // value:13,
            }
          },
          name:'乳酸代谢能',
          intro:'我们的运动能力受到多个方面的影响，包括我们自身因素以及环境因素，在自身因素中有一个很重要的因素是我们身体的乳酸阈和乳酸代谢能力，乳酸阈指身体在渐增负荷运动中，血乳酸浓度随运动负荷的渐增而增加，当运动强度达到某一负荷时，血乳酸浓度急剧上升的开始起点，这个时候乳酸的代谢能力开始小于乳酸的产生能力。是人体的代谢供能方式由有氧代谢供能为主而转入由无氧代谢为主供能的转折点。其值愈高，有氧运动能力愈强；反之，有氧运动能力愈低。当我们在一些长时间的、剧烈的运动或者体育比赛中时，我们很容易达到我们身体的极限，我们的肌肉会感到疲劳，僵硬甚至灼烧感，这些都是由于血液中乳酸水平快速升高导致的，我们的乳酸阈值和乳酸代谢能力越高，这个过程就会来的越晚。我们可以通过训练提高我们的乳酸阈值和乳酸代谢能力，遗传因素也在很大程度上影响我们的乳酸阈值和乳酸代谢能力，这也是为什么出现很多体育世家的一个原因。',
          probability:0.07,
          resultNum:1,
          max:119.44,
          min:0.04,
          reNum:1,
          resultText:'您的乳酸代谢能力正常'
        },
        1:{
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"1.Associations of polymorphisms of eight muscle- or metabolism-related genes with performance in Mount Olympus marathon runners.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"2.Mutations in the hereditary haemochromatosis gene HFE in professional endurance athletes.\",\"imgList\":[]},{\"name\":\"参考文献\",\"type\":1,\"value\":\"3.Trp64Arg polymorphism in ADRB3 gene is associated with elite endurance performance.\",\"imgList\":[]}]},{\"name\":\"相关知识\",\"content\":[{\"name\":\"相关知识\",\"type\":1,\"value\":\"耐力的提高不仅取决于人的发育成熟，也和负荷要求有关。合乎规律的耐力性负荷训练可使肌肉、器官、心肺、血液、免疫系统以及物质代谢调节出现适应现象。增强耐力的基本途径有两个，一是增强肌肉力量、提高肌肉耐力的训练，另一途径是提高心肺的功能。可安排室外较长时间的走、跑，跳绳、爬山、游泳、滑冰、各种球类运动等。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"ADRB2基因编码肾上腺素受体β2，肾上腺素能使人呼吸加快（提供大量的氧气），心跳和血液流动加快，瞳孔放大，为身体活动提供更多能量，增加人体的运动能力和运动的耐力。ADRB2基因编码肾上腺素受体β3，和ADRB2基因编码肾上腺素受体β2的功能类似。在ADRB2基因rs1042713位点的突变能够增加肌肉耐力。\",\"imgList\":[]}]}]",
          img:'',
          locus:{
            rs1042713:{
              expound:'运动耐力相对较差',
              gene:'ADRB2',
              type:'CC',
            }
          },
          name:'运动耐力',
          intro:'耐力，指人对紧张体力活动的耐久能力。人对紧张体力活动的耐久能力，是人体长时间进行持续肌肉工作的能力，即对抗疲劳的能力。',
          probability:13,
          resultNum:-1,
          max:4,
          min:0.5,
          reNum:2,
          resultText:'您的运动耐力较低'
        },
      },
      name:"运动基因",
      showType:'40',
    },
    3 : {//个人特质分类
      detail:"主要反映的是每个个体遗传相关的特性。这里检测了一些使您与众不同的特质的相关基因，也许您能在这里找到自己如此独特的原因",
      id:"3",
      img:"assets/images/constitution.png",
      imgBanner:"assets/images/constitution-detail.png",
      info:"主要反映的是每个个体遗传相关的特性。这里检测了一些使您与众不同的特质的相关基因，也许您能在这里找到自己如此独特的原因",
      item:{//项目目录
        0:{
          //位点信息
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"A SNP in the ABCC11 gene is the determinant of human earwax type.\",\"imgList\":[]}]},{\"name\":\"相关知识\",\"content\":[{\"name\":\"相关知识\",\"type\":1,\"value\":\"耳屎这东西叫好听点叫耳垢，再学术点叫“耵聍”，英文里则叫耳蜡(earwax)。耳垢是外耳道的分泌物，能够有效地阻止异物入侵耳膜，作用可谓不小，但是因为沾上了“屎”的名声，对于稍有洁癖的人来说，实在是不屑于谈及的。但是关于耳垢还有一个很有趣但常被忽视的问题——所有人的耳垢都是一样的吗?\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"至少一些日本科学家有充分的理由对这个问题说不。他们通过调查和实验发现，耳垢的类型是受基因控制的，并且有着显著的遗传影响。首先我们知道，耳垢可以分为干耳垢和湿耳垢两种。所谓耳垢就是指常见的淡黄色、蜡状的碎屑或小块，相比之下，湿耳垢的油脂非常重，区别还是很明显的。从生物学的角度讲，某种性状的不同必然是有一定成因的，耳垢类型的区别同样也牵涉到人种和族群迁移等问题。目前的调查显示，东亚人的耳垢大部分都是干的，而欧洲人和非洲人则正好相反，几乎都是湿耳垢。也就是说，耳垢的类型很明显有着地区差异性，那么到底是什么基因控制着耳垢的类型，又是如何控制的呢?\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"日本长崎大学的研究人员通过对比64个有干耳垢的人及54个有湿耳垢的人的DNA后，发现在第16号染色体上有能够决定耳垢种类的基因组，代号为ABCC11。他们的研究显示，ABCC11内的单一碱基差异就足以决定一个人的耳垢是干还是湿。ABCC11的功能本来是控制分泌湿耳垢的物质，如果发生基因突变，此项功能则会被关闭，耳朵就会分泌干耳垢。在此研究结果上，他们接下来对遍布各地的33个种族的ABCC11单碱基多样性进行了分析，最终发现湿耳垢基因型(GG或GA)在非洲和欧洲非常普遍，这种基因型很可能在人类祖先离开非洲迁移至世界各地之前就形成了。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"也就是说，大部分东亚人的干耳垢实际上是迁徙后适应环境的结果。虽然按理说耳垢的类型并不会对人体健康有多大影响，但是控制耳垢类型的基因同时会影响排汗与体味。在远古迁徙的过程中，为了适应复杂多变的气候，东亚人大多有干耳垢，排汗量比较少，体味也比较轻微甚至没有体味，另外越往南的话干耳垢的基因型就越少。而拥有湿耳垢的非洲人与欧洲人排汗量比较多，体味也比较重……可见为什么香水在西方人生活中如此重要，他们有时也是迫不得已啊。最后，不管你的耳垢是哪种，在这里还是友情提醒各位，千万不要过于频繁掏耳朵。虽然此行为不及抠鼻孔那么不雅，但要是一不小心落个外耳道炎、中耳炎之类的顽疾，那可不是闹着玩的。\",\"imgList\":[]}]}]",
          img:'',
          locus:{//位点
            rs17822931:{
              // chromosomes:'',
              expound:'湿耳垢，体味稍轻',
              gene:'ABCC11',
              // max:12,
              // min:11,
              type:'CT',
              // value:13,
            }
          },
          name:'干耳垢可能性',
          intro:'外耳道软骨部皮肤具有耳耵聍腺，其淡黄色黏稠的分泌物称之为耵聍，俗称耳垢。耳垢有两种，一种在空气中干燥后呈薄片状称为“干耳”，而另一种如黏稠的油脂，俗称“油耳”或“湿耳”。耳垢具有保护外耳道皮肤和黏附外物的作用。平时借助咀嚼、张口等运动，耳垢多自行排出。',
          probability:0.07,
          resultNum:2,
          max:119.44,
          min:0.04,
          reNum:1,
          resultText:'您的干耳垢可能性较高'
        },
        1:{
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"Genome-wide studies of verbal declarative memory in nondemented older people: the Cohorts for Heart and Aging Research in Genomic Epidemiology consortium.\",\"imgList\":[]}]},{\"name\":\"相关知识\",\"content\":[{\"name\":\"相关知识\",\"type\":1,\"value\":\"APOE（Apolipoprotein-E）编码蛋白是乳糜微粒中重要的载脂蛋白之一，通过与肝细胞和外周组织细胞的受体结合，参与脂蛋白的分解代谢。APOE基因位于第19号染色体上。是人体血浆中广泛存在的重要载脂蛋白之一，具有与脂质和受体结合的功能，在脂质代谢、维持胆固醇平衡中起到关键作用，同时也参与神经系统的正常发育生长过程及其损伤后修复，以及与大脑记忆有关的神经活动，与情节记忆相关。情节属于长时记忆的一种，对与一定的时间、地点及具体情境相联系的事件的识记后修复、保持和再现。记忆的最大特点是具有情节性。APOE基因存在E2,E3,E4三种常见的等位基因形式。该基因的多态性会影响机体对饱和脂肪酸的代谢能力。同时这个基因的不同的等位基因也被发现与老年痴呆症风险相关，并且可能影响老年痴呆症、帕金森病人的认知能力。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"BDNF基因位于第10号染色体上。脑源性神经营养因子( Brain-derived Neurotrophic Factor, BDNF)是神经营养分子家族中的一员， 是一个与记忆相关突触活性过程的营养因子，它易化长时程的突触增强和突触小泡的传递，具有促进早期神经元的增殖与分化，维持成熟神经元的存活的生物学功能，对中枢神经元的生存发育具有重要作用，是一个与长程记忆相关的营养因子基因。该基因位点存在GG、GA和AA多态性，其中AA基因型制造的蛋白不容易流动，会变成一团胶体，集中在神经细胞旁，无法与邻近的神经细胞连接，形成记忆网络，因此记忆力较弱。\",\"imgList\":[]}]}]",
          img:'',
          locus:{
            rs6265:{
              expound:'长程记忆能力偏低',
              gene:'BDNF',
              type:'TT',
            },
            rs429358:{
              expound:'情节记忆能力处于正常水平',
              gene:'APOE',
              type:'TT',
            }
          },
          name:'记忆力',
          intro:'记忆力是识记、保持、再认识和重现客观事物所反映的内容和经验的能力。作为一种基本的心理过程，是和其他心理活动密切联系着的。在知觉中，人的过去经验有重要的作用，没有记忆的参与，人就不能分辨和确认周围的事物。在解决复杂问题时，由记忆提供的知识经验，起着重大作用。',
          probability:13,
          resultNum:-1,
          max:4,
          min:0.5,
          reNum:2,
          resultText:'您的记忆力较低'
        },
      },
      name:"个人特质",
      showType:'40',
    },
    4 : {//罕见遗传病分类
      detail:"是指完全或部分由遗传因素决定的疾病，一旦基因突变即会发病，常为先天性的，有些出生即患病，有些要经过几年、十几年甚至几十年后才能出现明显症状。",
      id:"4",
      img:"assets/images/diseases.png",
      imgBanner:"assets/images/diseases-detail.png",
      info:"是指完全或部分由遗传因素决定的疾病，一旦基因突变即会发病，常为先天性的，有些出生即患病，有些要经过几年、十几年甚至几十年后才能出现明显症状。",
      item:{//项目目录
        0:{
          //位点信息
          custom:"[{\"name\":\"相关知识\",\"content\":[{\"name\":\"相关知识\",\"type\":1,\"value\":\"少汗型外胚层发育不良症是一类相对常见的遗传性综合性疾病，此类患者汗腺缺少、皮肤干燥少汗、体温调节障碍、不能耐受高温、机体易发热。少汗型外胚层发育不良症亦称Christ- Siemens- Touraine 综合征，发病率为1∶100000，男性高发，原因在于该病多以X 染色体连锁隐性方式遗传，虽然也存在常染色体显性或隐性遗传，但较为罕见。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"少汗型外胚层发育不良症患者可伴随其他症状，例如泪腺发育障碍、视光敏感、视力下降、听力障碍、慢性鼻炎、鼻咽横纹肌肉瘤、唇腭裂、吞咽困难、发音困难、免疫功能下降、呼吸道感染、身材矮小、乳房发育不良等。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"对少汗型外胚层发育不良症患者的治疗涉及多个学科，诸如儿科学、儿童口腔学、口腔正畸学、口腔修复学、口腔颌面外科学以及皮肤学、心理学、语言学、基因学等，为“多学科共同治疗”的治疗模式。具体治疗模式如下：患者通常首诊于儿科，医生必须进行正确诊断，必要时治疗余留牙；对于天然牙间隙大的牙列，可通过正畸关闭间隙并留出修复间隙；在修复科主要是通过固定、活动或种植义齿修复缺失牙；对于颌骨发育不足者，可施行正颌手术；由于患者多存在皮肤问题、心理问题、发音缺陷问题，所以需要皮肤学、心理学、语言学等学科共同治疗。目前学者们对于此类疾病的遗传学研究已取得一些进展，在此类疾病基因诊断方面获得了有价值的发现，为此类疾病的基因治疗奠定了基础。\",\"imgList\":[]}]},{\"name\":\"致病原因\",\"content\":[{\"name\":\"致病原因\",\"type\":1,\"value\":\"发生在EDA基因，EDAR基因和EDARADD基因上的突变会导致少汗型外胚层发育不良症。这三个基因编码蛋白共同参与胚胎发育，与外胚层和中胚层的相互作用有关，是外胚层形成结构（皮肤、头发、指甲、牙齿和汗腺等）的必须蛋白。当它们发生突变时，外胚层的正常发育受到影响，导致少汗型外胚层发育不良症。发生在IKBKG基因上的突变会导致X联锁隐性少汗型外胚层发育不良伴免疫缺陷。\",\"imgList\":[]},{\"name\":\"致病原因\",\"type\":1,\"value\":\"EDA:\",\"imgList\":[]},{\"name\":\"致病原因\",\"type\":2,\"value\":\"\",\"imgList\":[{\"url\":\"assets/images/diseases-1.png\"}]},{\"name\":\"致病原因\",\"type\":1,\"value\":\"IKBKG:\",\"imgList\":[]},{\"name\":\"致病原因\",\"type\":2,\"value\":\"\",\"imgList\":[{\"url\":\"assets/images/diseases-2.png\"}]}]}]",
          img:'',
          locus:{//位点
            rs132630314:{
              expound:'未携带',
              gene:'EDA',
              type:'CC',
            },
            rs132630312:{
              expound:'未携带',
              gene:'EDA',
              type:'CC',
            },
            rs386134240:{
              expound:'未携带',
              gene:'IKBKG',
              type:'AA',
            }
          },
          name:'少汗型外胚层发育不良症',
          intro:'少汗型外胚层发育不良症是一类遗传综合性疾病，此类患者汗腺缺少、皮肤干燥、体温调节障碍、不能耐受高温、机体易发热。少汗型外胚层发育不良症发病率为1∶100000，男性高发，原因在于该病多以X 染色体连锁隐性方式遗传，虽然也存在常染色体显性或隐性遗传，但较为罕见。',
          probability:0.07,
          resultNum:2,
          max:119.44,
          min:0.04,
          reNum:1,
          resultText:'未携带'
        },
        1:{
          custom:"[{\"name\":\"相关知识\",\"content\":[{\"name\":\"相关知识\",\"type\":1,\"value\":\"髓过氧化物酶缺乏症(myeloperoxidase deficiency，MPO)是一种遗传性吞噬细胞内髓过氧化物酶缺陷的免疫缺陷病，该病罕见。患者多有家族史，自幼反复发生细菌或真菌感染。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"髓过氧化物酶（myeloperoxidase，MPO）又称过氧化物酶，是血红素辅基的血红素蛋白酶，是血红素过氧化物酶超家族成员之一。存在于髓系细胞（主要是中性粒细胞和单核细胞）的嗜苯胺蓝颗粒中，是髓细胞的特异性标志，随着对MPO研究的深入，人们发现MPO基因多态性导致个体对一些疾病易感性的差异，与人类多种疾病的发生、发展密切相关，因此越来越受到国内外学者的重视。\",\"imgList\":[]},{\"name\":\"相关知识\",\"type\":1,\"value\":\"本病预后较好。无症状者不需治疗，有感染者选用敏感的抗生素。有人用转移因子减少病毒感染的机会，也有人用口服维生素C。食用可提高免疫力的食物，如山药、乌龟、香菇、猕猴桃、无花果、苹果、沙丁鱼、蜂蜜、牛奶、猪肝等，以提高机体抗病能力。\",\"imgList\":[]}]},{\"name\":\"致病原因\",\"content\":[{\"name\":\"致病原因\",\"type\":1,\"value\":\"髓过氧化物酶缺乏症是由于编码髓过氧化物酶的基因MPO突变导致的。髓过氧化物酶是一种血红素蛋白，负责催化次卤酸的合成，具有杀菌的作用。当MPO基因发生突变时，髓过氧化物酶活性下降，引发播散性念珠菌病。\",\"imgList\":[]},{\"name\":\"致病原因\",\"type\":1,\"value\":\"MPO:\",\"imgList\":[]},{\"name\":\"致病原因\",\"type\":2,\"value\":\"\",\"imgList\":[{\"url\":\"assets/images/diseases-3.png\"}]}]}]",
          img:'',
          locus:{
            rs78950939:{
              expound:'未携带',
              gene:'MPO',
              type:'TT',
            },
            rs56378716:{
              expound:'未携带',
              gene:'MPO',
              type:'TT',
            },
            rs119469014:{
              expound:'未携带',
              gene:'MPO',
              type:'CC',
            },
            rs119468010:{
              expound:'未携带',
              gene:'MPO',
              type:'CC',
            },
            rs35897051:{
              expound:'未携带',
              gene:'MPO',
              type:'AA',
            },
          },
          name:'髓过氧化物酶缺乏症',
          intro:'髓过氧化物酶缺乏症(Myelopeoxidase deficiency，MPOD)是一种较常见的、较良性的吞噬细胞缺陷病。完全缺乏见于1/4000人群中，部分缺乏见于1/2000人群中。本病为常染色体隐性遗传。主要是由于中性粒细胞及单核细胞颗粒中的MPO功能及免疫化学的缺陷所致。',
          probability:13,
          resultNum:-1,
          max:4,
          min:0.5,
          reNum:2,
          resultText:'未携带'
        },
      },
      name:"罕见遗传病",
      showType:'10',
    },
    5 : {//运动基因分类
      detail:"对同一剂量的同一药物，基因型不同的人反应可能不同，有些人会药效不够，有些人则会发生中毒现象。我们为您检测了一些影响药物反应的变异位点，以便在您使用相应药物时作为参考。",
      id:"5",
      img:"assets/images/medicine.png",
      imgBanner:"assets/images/medicine-detail.png",
      info:"对同一剂量的同一药物，基因型不同的人反应可能不同，有些人会药效不够，有些人则会发生中毒现象。我们为您检测了一些影响药物反应的变异位点，以便在您使用相应药物时作为参考。",
      item:{//项目目录
        0:{
          //位点信息
          custom:"[{\"name\":\"药物相互作用\",\"content\":[{\"name\":\"药物互相作用\",\"type\":1,\"value\":\"氨基糖甙类抗生素、两性霉素B或头孢噻吩等与本品并用，有肾毒性叠加作用甲氨蝶呤及博莱霉素主要由肾脏排泄，本品所致的肾损害会延缓上述两种药物的排泄，导致毒性增加。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"丙磺舒与本品并用时，可致高尿酸血症氯霉素或其呋喃苯胺酸或利尿酸钠增加本品耳毒性。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"抗组胺药可掩盖本品所致的耳鸣、眩晕等症状。\",\"imgList\":[]}]},{\"name\":\"药代动力\",\"content\":[{\"name\":\"药代动力\",\"type\":1,\"value\":\"静脉注射、动脉给药或腔内注射吸收均极迅速。注射后广泛分布于肝、肾、前列腺、膀胱、卵巢，亦可达胸、腹腔，极少通过血脑屏障。T1/22日以上，若并用利尿剂T1/2可明显缩短。本品主要由肾排泄，通过肾小球过滤或部分由肾小管分泌，用药后96小时内25％～45％由尿排出。腹腔内注射后腔内器官浓度为静脉注药的2.5～8.0倍\",\"imgList\":[]}]},{\"name\":\"不良反应\",\"content\":[{\"name\":\"不良反应\",\"type\":1,\"value\":\"消化道反应：严重的恶心、呕吐为主要的限制性毒性。急性呕吐一般发生于给药后1～2小时，可持续一周左右。故用本品时需并用强效止吐剂，如5-羟色胺3（5-HT3）、受体拮抗止吐剂恩丹西酮等，基本可控制急性呕吐。\",\"imgList\":[]},{\"name\":\"不良反应\",\"type\":1,\"value\":\"肾毒性：累积性及剂量相关性肾功不良是顺铂的主要限制性毒性，一般剂量每日超过90mg/m2即为肾毒性的危险因素。主要为肾小管损伤。急性损害一般见于用药后10～15天，血尿素氮（BUN）及肌酐（Cr）增高，肌酐清除率降低，多为可逆性，反复高剂量治疗可致持久性轻至中度肾损害。目前除水化外尚无有效预防本品所致的肾毒性的手段。\",\"imgList\":[]},{\"name\":\"不良反应\",\"type\":1,\"value\":\"神经毒性：神经损害如听神经损害所致耳鸣、听力下降较常见。末梢神经毒性与累积剂量增加有关，表现为不同程度的手、脚套样感觉减弱或丧失，有时出现肢端麻痹、躯干肌力下降等，一般难以恢复。癫痫及视神经乳头水肿或球后视神经炎则较少见。\",\"imgList\":[]},{\"name\":\"不良反应\",\"type\":1,\"value\":\"骨髓抑制：骨髓抑制（白细胞和/或血小板下降）一般较轻，发生几率与每疗程剂量有关，若≤100mg/m2，发生机率约10～20％，若剂量≥120mg/m2，则约40％，但亦与联合化疗中其它抗癌药骨髓毒性的重叠有关。\",\"imgList\":[]},{\"name\":\"不良反应\",\"type\":1,\"value\":\"过敏反应：可出现脸肿、气喘、心动过速、低血压、非特异斑丘疹类皮疹。\",\"imgList\":[]},{\"name\":\"不良反应\",\"type\":1,\"value\":\"其它：心脏功能异常、肝功能改变少见。\",\"imgList\":[]}]}]",
          img:'',
          locus:{//位点
            rs1142345:{
              expound:'常见基因型，正常药物中毒风险。',
              gene:'TPMT',
              type:'TT',
            }
          },
          name:'顺铂',
          intro:'本品属细胞周期非特异性药物，具有细胞毒性，可抑制癌细胞的DNA复制过程，并损伤其细胞膜上结构，有较强的广谱抗癌作用。临床用于卵巢癌、前列腺癌、睾丸癌、肺癌、鼻咽癌、食道癌、恶性淋巴瘤、乳腺癌、头颈部鳞癌、甲状腺癌及成骨肉瘤等多种实体肿瘤均能显示疗效。',
          probability:0.07,
          resultNum:1,
          max:119.44,
          min:0.04,
          reNum:1,
          resultText:'常见基因型，正常药物中毒风险'
        },
        1:{
          custom:"[{\"name\":\"参考文献\",\"content\":[{\"name\":\"参考文献\",\"type\":1,\"value\":\"1. International Warfarin Pharmacogenetics Consortium, et al (2009). Estimation of the warfarin dose with clinical and pharmacogenetic data. N. Engl. J. Med.\",\"imgList\":[]}]},{\"name\":\"药物相互作用\",\"content\":[{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"阿司匹林、保泰松、羟基保泰松、甲芬那酸、水合氯醛、氯贝丁酯（安妥明）、磺胺类药、丙磺舒等与血浆蛋白的亲和力比华法林强，竞争结果使游离的华法林增多，增强抗凝作用。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"氯霉素、别嘌醇、单胺氧化化酶抑制药、甲硝唑、西咪替丁等可抑制肝微粒体酶，使华法林的代谢降低而增效。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"减少维生素K的吸收和影响凝血酶原合成的药物，如各种广谱抗生素、长期服用液状石蜡或考来烯胺（消胆胺）等，与华法林合用能增强抗凝作用。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"能促使华法林与受体结合的药物，如奎尼丁、甲状腺素、同化激素、苯乙双胍，能增强华法林的抗凝作用。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"大剂量阿司匹林、水杨酸类、前列腺素合成酶抑制药、氯丙嗪、苯海拉明等能干扰血小板功能，促使华法林的抗凝作用更明显。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"华法林不能与链激酶、尿激酶合用，否则易导致重危出血。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"能增强华法林抗凝作用的药物还有丙硫氧嘧嘧啶、二氮嗪、丙吡胺、口服降糖药、磺吡酮（抗痛风药）等，机制尚不明确。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"肾上腺皮质激素和苯妥英钠既可增加，也可减弱华法林的抗凝作用，有导致胃肠道出血的危险，故一般不合用。\",\"imgList\":[]},{\"name\":\"药物相互作用\",\"type\":1,\"value\":\"抑制华法林吸收的药物，包括制酸药、轻泻药、灰黄霉素、利福平、格鲁米特（导眠能）、甲丙氨酯（安宁）等，能减弱华法林的抗凝作用。\",\"imgList\":[]}]},{\"name\":\"药代动力学\",\"content\":[{\"name\":\"药代动力学\",\"type\":1,\"value\":\"华法林口服后12～24h起效、抗凝血的最大效应时间为72～96h，抗血栓形成则为6天，单次给药的持续时间为2～5天，多次给药则为4～5天。华法林由胃肠道迅速吸收，进食对吸收无影响，其个体间差异也很小，生物利用度为100%。华法林的蛋白结合率为99.4%，分布容量为0.11～0.2L/kg。母体对华法林的清除半衰期为20～60h，R-华法林对映异构体的半衰期为20～89h，S-华法林对映异构体的半衰期为18～43h。急性病毒性肝炎不会影响华法林的半衰期。主要在肝脏代谢，代谢产物有醇类（活性最小）、羟基（无活性）。S-华法林表现出的抗凝血活性约为R-对映异构体的2～5倍。华法林以无活性的形式通过乳汁排泄，并对所喂养婴儿的凝血酶原时原时间无影响；也以无活性的代谢产物排泄入胆汁，再被重吸收，从尿中排出。\",\"imgList\":[]}]},{\"name\":\"不良反应\",\"content\":[{\"name\":\"不良反应\",\"type\":1,\"value\":\"过量易致各种出血。早期表现有淤斑、紫癜、牙龈出血、鼻出血、伤口出血经久不愈和月经量过多等。出血可发生在任何部位，特别是泌尿道和消化道。肠壁血肿可致亚急性肠梗阻，也可见硬膜下颅内血肿和穿刺部位血肿。\",\"imgList\":[]},{\"name\":\"不良反应\",\"type\":1,\"value\":\"偶见不良反应有恶心、呕吐、腹泻、瘙痒性皮疹、过敏反应及皮肤坏死。大量口服甚至出现双侧乳房坏死、微血管病或溶血性贫血以及大范围皮肤坏疽。\",\"imgList\":[]}]}]",
          img:'',
          locus:{
            rs9923231:{
              expound:'携带两份导致VKORC1表达减少的A等位基因，机体对华法林更敏感，需减少用量，降低出血风险。',
              gene:'VKORC1',
              type:'TT',
            }
          },
          name:'华法林',
          intro:'本药为间接作用的香豆素类口服抗凝药，通过抑制维生素K在肝脏细胞内合成凝血因子Ⅱ、Ⅶ、Ⅸ、Ⅹ，从而发挥抗凝作用。适用于预防和治疗血栓栓塞性疾病。仅口服有效，奏效慢而持久，对需长期维持抗凝者才选用本品，需要迅速抗凝时，应选用肝素，或在肝素治疗基础上加用本品。',
          probability:13,
          resultNum:-1,
          max:4,
          min:0.5,
          reNum:2,
          resultText:'携带两份导致VKORC1表达减少的A等位基因，机体对华法林更敏感'
        },
      },
      name:"药物代谢",
      showType:'10',
    },
  };
  ngOnInit() {
    this.activeRouter.params.subscribe(res => {
      this.searhParams = this.params;
      this.params.id = res.id;

      for (const key in this.data) {
          console.log(this.data[key]);
          if(this.data[key].id == this.searhParams.id){
            this.testType =  this.data[key];
            for(const ke in this.data[key].item){
              this.data[key].item[ke].detId = ke;
              this.testli.push(this.data[key].item[ke])
            }
            this.reportLi = this.data[key];
          }
        }
    });
  }

}
