<template>
	<div id="first">
		<v-header @send="get"></v-header>
		<mt-swipe :auto="4000">
		  <mt-swipe-item>
		  	<img src="../../assets/images/750-300a.jpg" alt="" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/h5-shouye0108.jpg" alt="" />
		  </mt-swipe-item>
		</mt-swipe>
      <ul class="first_ul">
        <li><router-link to="/search"><span class="one"></span><b>职位搜索</b></router-link></li>
        <li> <router-link to="/who"><span class="two"></span><b>谁看过我</b></router-link></li>
        <li><router-link to="/school"><span class="three"></span><b class="tb">校园招聘</b></router-link></li>
        <li> <router-link to="/method"><span class="four"></span><b>求职攻略</b></router-link></li>
        <li><router-link to="/duoduo"><span class="five"></span><b>51米多多</b></router-link></li>
      </ul>
      <div class="intro">
      	   <span class="left_b"></span>
      	   <p>为您推荐<span class="you"></span></p>
      	   <span class="right_b"></span>
      </div>
      <ol class="first_ol">
        <li>
        	<router-link to="/one">
        		<div>
        			<p>web前端开发工程师</p>
        	        <span>5-6万/年</span>
        		</div>
        	   <div>
        	   	   <p>广州市盛高信息科技有公司</p>
        	       <span>广州-天河区</span>	 
        	   </div>
        	
            </router-link>
        </li>
        <li>
        	<router-link to="/one">
        		<div>
        			<p>web前端工程师</p>
        	        <span>6-8千/月</span>
        		</div>
        	   <div>
        	   	   <p>广州易迅科技有限公司</p>
        	       <span>广州-天河区</span>	 
        	   </div>
        	
            </router-link>
        </li>
        <li>
        	<router-link to="/one">
        		<div>
        			<p>web前端开发</p>
        	        <span>3-8千/月</span>
        		</div>
        	   <div>
        	   	   <p>广州若羽臣科技股份有限公司</p>
        	       <span>广州-黄浦区</span>	 
        	   </div>
        	
            </router-link>
        </li>
        <li>
        	<router-link to="/one">
        		<div>
        			<p>web前端开发</p>
        	        <span>3-8千/月</span>
        		</div>
        	   <div>
        	   	   <p>广州市斯洛柯高分子聚合物有限公司</p>
        	       <span>广州-黄浦区</span>	 
        	   </div>
        	
            </router-link>
        </li>
        <li>
        	<router-link to="/one">
        		<div>
        			<p>web前端工程师(实习生)</p>
        	        <span>3-5千/月</span>
        		</div>
        	   <div>
        	   	   <p>广州小黑屋科技有限公司</p>
        	       <span>广州-海珠区</span>	 
        	   </div>
        	
            </router-link>
        </li>
      </ol>
      	<div class="intro">
      	   <span class="left_b"></span>
      	   <p>知名企业<span class="you"></span></p>
      	   <span class="right_b"></span>
        </div>  
      <div class="big_box">  
	      	<div class="web">
	      		<span>互联网</span>
	      		<u>更多</u>
	      	</div>
	      	<ul>
	      		<li v-for="(v,i) in img">
	      			<img :src="v.img" alt="" />
	      			<p>{{v.name}}</p>
	      		</li>
	      	</ul>
	      	<ol>
	      		<li v-for="(v,i) in list"><router-link to='/job'><p>{{v}}</p></router-link></li>
	      	</ol>
	      	<div class="web">
	      		<span>金融/证券/投资 </span>
	      		<u>更多</u>
	      	</div>	      	
	      	<ul>
	      		<li v-for="(v,i) in img1">
	      			<img :src="v.img" alt="" />
	      			<p>{{v.name}}</p>
	      		</li>
	      	</ul>
	      	<ol>
	      		<li v-for="(v,i) in list1"><router-link to='/job'><p>{{v}}</p></router-link></li>
	      	</ol>	 
	      	<div class="web">
	      		<span>城市服务业 </span>
	      		<u>更多</u>
	      	</div>	      	
	      	<ul>
	      		<li v-for="(v,i) in img2">
	      			<img :src="v.img" alt="" />
	      			<p>{{v.name}}</p>
	      		</li>
	      	</ul>
	      	<ol>
	      		<li v-for="(v,i) in list2"><router-link to='/job'><p>{{v}}</p></router-link></li>
	      	</ol>	
	      	<div class="web">
	      		<span>房地产/物业</span>
	      		<u>更多</u>
	      	</div>	      	
	      	<ul>
	      		<li v-for="(v,i) in img3">
	      			<img :src="v.img" alt="" />
	      			<p>{{v.name}}</p>
	      		</li>
	      	</ul>
	      	<ol>
	      		<li v-for="(v,i) in list3"><router-link to='/job'><p>{{v}}</p></router-link></li>
	      	</ol>	      	
      </div>
      <div class="onbox" v-show="ifshow"  @click="hidden()">
      	<div class="inbox" @click.stop="childhide()" >
	      	<div>
	      		<span class="alltxt">全文</span>
	      		<input  type="text" placeholder="请输入关键字" v-model="some"/>
	      		<span class="cancel" @click.stop="on()">取消</span>
	      	</div>
	      	<section>
	      		<p>搜索记录</p>
	      		<p>{{some}}</p>
	      	</section>
	      	<footer>
	      		<p>个人搜索器</p>
	      		<div>
	      			<p>你还没有创建个人搜索器</p>
	      			<span>点击创建</span>
	      			<router-link to="/search"><p>职位搜索</p></router-link>
	      		</div>
	      		<div class="fot"></div>
	      	
	      	</footer> 	
	      	<p class="long" @click.stop="hide"></p>
      	</div>
      </div>
      
     <v-footer></v-footer> 
     <!--<div class="add"></div>-->
	</div>	
	
</template>
<script>
import header from './header.vue'
import footer from './footer.vue'
export default {
  data () {
  	return{
  		list:[],
  		list1:[],
  		list2:[],
  		list3:[],
  		img:[],
  		img1:[],
  		img2:[],
  		img3:[],
  		ifshow:false,
  		some:''
  	}
  },

  components:{
  	'v-header':header,
	'v-footer':footer,
  },
  methods:{
  	get(n){
  		this.ifshow=n;
  		console.log(n)
  	},
  	on(){
  		this.ifshow=false
  		console.log(this.ifshow)
  	},
  	hide(){
  		this.ifshow=false
  	},
  	hidden(){
  		this.ifshow=false
  	},
  	childhide(){
  		this.ifshow=true
  	}

  },
  mounted(){
      this.$http.get('./data/job.json').then((res)=>{
      	this.list=res.data.firstjob
      	this.list1=res.data.secondjob
      	this.list2=res.data.thirdiob
      	this.list3=res.data.fourjob
      	this.img=res.data.jobimg
      	this.img1=res.data.jobimg1
      	this.img2=res.data.jobimg2
      	this.img3=res.data.jobimg3
      	console.log(this.img)
      })
  }

}
</script>
<style>
	   #first {
	   	background: #fff;
	   	width: 100%;
	   	position: relative;
		left: 0;
		top: 0;
		z-index: 100;
	   }
	   
		#first .mint-swipe{
		margin-top:-42px;
		background: #ebebeb;

		}
		#first .mint-swipe-items-wrap{
		padding-bottom:44%;
		}
	    #first .mint-swipe img{
		width:100%
		}
		#first .mint-swipe-indicators{
			bottom: 14%;
			
		}
		#first .mint-swipe-indicator{
			height: 6px;
			width: 6px;
			background: #fff;
		}
		 #first .mint-swipe-indicator.is-active{
		 	opacity:1;
			background: #ff7214;	
		}

		#first .first_ul{
			width: 100%;
			display: flex;
			padding-bottom: 10px;
			border-bottom: 5px solid #ebebeb;
		
		
		}
		
	   #first .first_ul>li{
	   	flex: 1;
	   	text-align: center;
	   	
	   }
	   #first .first_ul>li span{
	   	display: inline-block;
	   	width: 60px;
	   	height: 50px;
	   }
	   
	   #first .one{
	   	background: url(../../assets/images/icon_home_20171214.png) 15px 7px no-repeat;
	   	background-size:345px auto;
	 
	   }
	   	   #first .two{
	   	background: url(../../assets/images/icon_home_20171214.png) -59px 7px no-repeat;
	   	background-size:345px auto;
	 
	   }
	   	   #first .three{
	   	background: url(../../assets/images/icon_home_20171214.png) -135px 7px no-repeat;
	   	background-size:345px auto;
	 
	   }
	   	   #first .four{
	   	background: url(../../assets/images/icon_home_20171214.png) -212px 9px no-repeat;
	   	background-size:345px auto;
	 
	   }
	   	   #first .five{
	   	background: url(../../assets/images/icon_home_20171214.png) -285px 7px no-repeat;
	   	background-size:345px auto;
	 
	   }
	   #first>.first_ul  b{
	   	display: block;
	   	
	   	font-size: 13px;
	    color: #868686;
	   }
	   #first>.intro{
	    padding: 10px 20px;
	    height: 20px;
	   	font-size: 14px;
	   	zoom:1;	
	   	text-align: center;
	   }
	    #first>.intro:after{
	    	content: ;
	    	display:block;
	    	clear: both;
	    	
	    }
        #first>.intro p{
        	display: inline-block;
        	width: 70px;
        	height: 20px;
        	position: relative;
        }
	   #first p>.you{
	   	display:inline-block;
	    background: url(../../assets/images/icon_home_20171214.png) 6px -81px no-repeat;
	   	background-size:345px auto;
	    width: 25px;
	   	height: 25px;
	   	position: absolute;
	   	left:-20px;
	   	top:-6px
	   }
	   #first .left_b{
	   	display: inline-block;
	   	float:left;
	   	width:34%;
	   	height: 2px;
	   	border-bottom: 1px solid #c8c8c8;
	   	margin-top: 8px;
	   }
	  #first .right_b{
	   	display: inline-block;
	    float:right;
	   	width:33%;
	   	height: 2px;
	   	border-bottom: 1px solid #c8c8c8;
	   	margin-top: 8px;
	   }
	   #first ol .first_ol{
	   	width: 100%;
	  

	   }
	   #first .first_ol>li{
	   	position: relative;
	   	margin-bottom: 20px;
	   	width: 100%;
	   	height: 50px;

	   }
	   #first .first_ol>li div{
	   	 padding: 0 20px;
	   	
	   }
	   #first .first_ol>li div:nth-of-type(1){
	   	height: 30px;
	   }
	  #first .first_ol>li div:nth-of-type(1){
	   	height: 30px;
	   }
	   #first .first_ol>li div:nth-of-type(1) p{
	    float: left; 
	    color: #444444;
	   }
	   
	  #first .first_ol>li div:nth-of-type(1) span{
	    float: right;
	    color: #ff6000;
	   
	   }
	 #first .first_ol>li div:nth-of-type(2){
	   	height: 30px;
	   }
	   #first .first_ol>li div:nth-of-type(2) p{
	    float: left;
	     font-size: 12px;
	     color: #444444;
	   }
	 #first .first_ol>li div:nth-of-type(2) span{
	    float:right;
	     font-size: 12px;
	     color:#a486a4
	   }
	   #first .web{
	   	padding: 20px 0;
	   	
	   }
	   #first .web>span{
	   	display: inline-block;
	   	position: relative;
	   	padding-left: 30px;
	   	font-size: 14px;
	   	color: #ffa000;
	   }
	   
	    #first .web>span::before{
	    content: '';
	   	display:inline-block;
	   	position: absolute;
	   	background:url(../../assets/images/icon_home_20171214.png) -90px -90px no-repeat;
	   	background-size:345px auto;
	   	top: 1px;
	   	left:2px;
	   	width: 30px;
	   	height: 20px;
	    	
	    }
	    
	    #first .web>u{
	    	display: inline-block;
	    	float: right;
	    	font-size: 14px;
	    	margin-right: 5%;
	    	color: #868686;
	    	
	    }
	    
	    #first .web>u::before{
		 content: '';
		 display: inline-block;
		 width: 7px;
		 height:7px;
		 border-right: 1px solid #868686;	
		 border-top: 1px solid  #868686;	
	     transform: rotate(45deg);
	     position: relative;
	     right: 7px;	
	    }
	    #first .big_box>ul{
	    	width: 100%;
	    	display:  flex;
	    	
	    	height: 110px;
	    }
	    #first .big_box>ul>li{
	    	flex: 1;
	    	text-align: center;
	    		color: #505050;
	    	
	    }
	     #first .big_box>ul>li>img{
	     	width: 56px;
	     	height: 56px;
	     	border: 1px solid #d4d4d4;
	     	border-radius: 10px;
	     	margin-bottom: 10px;
	     }
	     #first .big_box>ul>li>p{
	     	font-size: 12px;
	     	color: #505050;
	     }
	     #first .big_box>ul>li:nth-of-type(1)::after{
	     	content: '|';
	     	color: #d4d4d4 ;
	     	position: relative;
	     	font-size: 25px;
	     	left: 50%;
	     	top: -70px;
	     }
	    #first .big_box>ul>li:nth-of-type(2)::after{
	     	content: '|';
	     	color: #d4d4d4 ;
	     	position: relative;
	     	font-size: 25px;
	     	left: 50%;
	     	top: -70px;
	     }
	     #first .big_box>ol{
	     		text-align: center;
	     	width: 100%;
	     	display: flex;	
	       flex-wrap: wrap;
	       justify-content:space-around;
	        border-top:  1px  dashed #e6e6e6;
	      
	     }
	     #first .big_box>ol>li{
	     	margin-bottom: 10px;
	     	flex: 0 0 22%;
	     	padding:10px 5px;
	     	border-bottom: 1px dashed #e6e6e6;
	     	
	     	
	     		
	     }
	      #first .big_box>ol>li>a{
	      	color: #505050;
	      }
	     
	      #first .big_box>ol>li p{
	      	border-right:1px dashed #e6e6e6;
	      	padding: 3px;
	      }
	    
	      #first .big_box>ol>li a{
	      	font-size: 13px;
	        color: #505050;;
	      }
	      #first .big_box>ol>li:nth-of-type(4n) p{
	      	border-right: none;
	      
	      }
	    #first .onbox{
	    	/*padding: 0 10px;*/
	    	border-bottom: 10px solid #b2b2b2;
	    	background: #808080;
	    	position:fixed;
	    	width: 100%;
	    	height: 100%;
	    	left: 0;
	    	top: 0;
	    	z-index: 1000;
	    	background-color: rgba(0,0,0,.5);
	    	
	    }
	    #first .onbox>.inbox>div{
	    
	    	padding: 10px;
	    	display: flex;
	    	border-bottom: 1px solid #e6e6e6;
	    	background: #fff;
	    }
	    #first .onbox>.inbox>div>.alltxt{
	    	display: inline-block;
	     	width: 70px;
	     	height: 35px;
	     	font-size: 14px;
	     	line-height: 35px;
	     	background: #ebebeb;
	     	text-align: center;
	     	border-bottom-left-radius: 5px;
	     	border-top-left-radius: 5px;
	     	position: relative;
	     }
	      #first .onbox>.inbox>div>.alltxt::after{
	      	content: "";
	      	display:inline-block;
	      	width:6px;
	      	height:6px;
	      	border-left: 2px solid #888888;
	      	border-bottom: 2px solid #888888;
	      	transform: rotate(-45deg);
	        position: absolute;
	        top: 10px;
	        left: 55px;
	      	
	      }
	      
	      #first .onbox>.inbox>div>input{
	      	flex: 1;
	      	height: 35px;
	      	line-height: 35px;
	      	font-size: 14px;
	      	border: none;
	      	outline: none;
	      	background: #ebebeb;
	       border-bottom-right-radius: 5px;
	     	border-top-right-radius: 5px;
	     	padding-left: 10px;
	      }
	       #first .onbox>.inbox>div>.cancel{
	       	width: 50px;
	       	line-height: 30px;
	       	height: 30px;
	       	text-align: center;
	       	font-size: 14px;
	       	color: #ff925d;
	       }
	       #first .onbox>.inbox>section{
	       	background: #fff;
	       	padding: 10px;
	       	border-bottom: 8px solid #eaeaea;
	       	height: 100px;
	       	/*margin-bottom: 10px;*/
	       
	       }
	        #first .onbox>.inbox>section>p:nth-of-type(1){
	        	
	        	font-size: 15px;
	        }
	        #first .onbox>.inbox>section>p:nth-of-type(2){
	        	font-size: 14px;
	        	padding-top: 10px;
	        }
	        #first .onbox>.inbox>footer{
	        	padding: 10px;
	        	background: #fff;
	        	padding-bottom: 10px;
	        	
	        }
	        .onbox>.inbox>footer>p{
	        	font-size: 15px;
	        	height: 30px;
	        	line-height: 30px;
	        	border-bottom: 1px solid #eaeaea;
	        	
	        }
	        .onbox>.inbox>footer>div{
	        	text-align: center;
	        	padding-top: 20px;
	       
	        }
	        .onbox>.inbox>footer>div>p{
	        	font-size: 14px;
	        	padding:10px 0;
	        }
	        .onbox>.inbox>footer>div>span{
	        	display: inline-block;
	        	width: 100px;
	        	height: 35px;
	        	line-height: 35px;
	        	font-size: 13px;
	        	border: 1px solid #ff7e3e;
	        	border-radius: 5px;
	        	color:#ff7e3e ;
	        	margin-bottom: 30px;
	        }
	        .onbox>.inbox>footer>div>a>p{
	        	font-size: 14px;
	        	color: #ff8b45;
	        	position: relative;
	        	font-weight:bold;
	        }
	        .onbox>.inbox>footer>div>a>p::after{
	       content: '';
	        display:inline-block;
	      	width:5px;
	      	height:5px;
	      	border-left: 2px solid #ff8b45;
	      	border-bottom: 2px solid #ff8b45;
	      	position: absolute;
	        top: 5px;
	        left: 58%;
	        transform: rotate(-135deg);
	  
	        }
	        .onbox footer{
	        	position: relative;
	        
	        }
	        .onbox footer>.fot{
	        	
	         background: red;
              width:100px;
              height: 25px;
              background: url(../../../dist/icon_home_20171214.png) -250px -160px no-repeat;
              background-size:350px ;
              position: absolute;
              margin-right: -50px;
              top: 180px;
              right: 50%;
	        }
	        
	        #first .long{
	        	width: 100%;
	        	height: 8px;
	        	background:#b2b2b2 ;
	        	position: absolute;
	        	top: 380px;	
	        }
	        #first .add{
	        	width: 100%;
	        	height: 40px;
	        }
</style>

