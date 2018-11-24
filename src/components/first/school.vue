<template>
	<div id="school">
		<header>
			<div>
			    <router-link to="/first"><img src="../../assets/images/logo_20jubilee_162x64.png" /></router-link>
				<router-link to="/position"><b>{{this.$store.state.addr}}</b></router-link>
				
			</div>
			<p></p>
			<input type="text" placeholder="请输入职位、公司等关键字" />
		</header>
		<section>
			<span><b></b></span>
			<span><b></b></span>
			<span><b></b></span>
		</section>
		<ul class="search">
				<li>高级搜索</li>
				<li>科系搜索</li>
				<li>宣讲会</li>
	    </ul>
	    <p class="how">如何找准第一份工作的方向？</p>
	    <p class="guess"><span></span><b>猜你感兴趣</b><span></span></p>
	    <ol class="instr">
	    	<li v-for="(v,i) in list"><router-link :to="'/instr/'+v">{{v}}</router-link></li>
	    </ol>
	    <p class="guess"><span></span><b>实习城市</b><span></span></p>
	    <ol class="instrcity">
	    	<li v-for="(v,i) in list1"><router-link :to="'/instr/'+v">{{v}}</router-link></li>
	    </ol>
	    <p class="guess"><span></span><b>知名企业</b><span></span></p>
	    <ol class="cityimg">
	    	<li v-for="(v,i) in list2"><router-link :to="'/instr/'+v"><img :src="v" title="v"/></router-link></li>
	    </ol>
	    <div class="foot">
	    	<div>
	    		<span>
	    			<img src="../../assets/images/earth-icon.png" />
	    			<b>关于我们</b>
	    		</span>
	    		<span>
	    			<img src="../../assets/images/smartphone-icon.png"/>
	    			<b>APP下载</b>
	    		</span>
	    	</div>
	    	<p>
	    		<span>帮助</span>
	    		<span>意见</span>
	    	</p>
	    	<h4>无忧工作网版权所有©1999-2018</h4>
	    </div>
	</div>
</template>

<script>
    export default{
             data(){
             	return{
             		list:[],
             		list1:[],
             		list2:[],
//           		msg:addr
             	}
             },
           mounted(){
           	this.$http.get("./data/job.json").then((res)=>{
           		this.list=res.data.introjob
           		this.list1=res.data.introjob1
           		this.list2=res.data.introjob2
           	})
           }
    }
</script>

<style scoped>
	#school{
		position: relative;
		right: 0;
		top: 0;
		z-index: 10;
	    margin-top: -96px;
		
	}
	#school header{
		width: 100%;
		height: 100px;
		background:#06c1ae;
		
		/*padding: 0 10px;*/
	}
	#school header>div{
		height: 30px;
		padding: 10px;
	}
	#school header>div img{
		float: left;
		width: 66px;
		height: 27px;
		margin-right: 10px;
	}
	#school header>div b{
		float: left;
		margin-top: 5px;
		margin-right: 10px;
		color: #fff;
		font-size: 14px;
		
	}
	#school header>div b::after{
	content: '';
	display: inline-block;
	width: 7px;
	height: 7px;
	border-left:2px solid #fff ;
	border-top:2px solid #fff;
	margin-left: 10px;
	transform: rotate(225deg);
	position: relative;
	top:-2px;
	}

	#school header  p{
		display: inline-block;
		float: right;
		width: 43px;
		height: 43px;
		margin-top: -40px;
		background: url(../../assets/images/yd-man.png) center no-repeat;
	    background-size: 50%;
	}
	#school input{
		display: block;
		margin-left: 5px;
		width:97%;
		height: 38px;
		font-size: 13px;
		border-radius: 5px;
		border: none;
		outline: none;
		/*padding-left:10px;*/
	}
	
	section{
		width: 100%;
		padding: 10px 0;
		display:flex ;
		
	}
	section>span{
		display: inline-block;
		margin-top: 15px;
		width: 100%;
		height:80px;
		flex:1;
		text-align: center;
		
	}
	section>span>b{
		display: inline-block;
		width: 92px;
		height:80px;
	}
	section>span:nth-of-type(1)>b{

		background: url(../../assets/images/main_20160620.png) 5px -79px no-repeat;
		background-size:250px;
	
	}
    section>span:nth-of-type(2)>b{
		background: url(../../assets/images/main_20160620.png) -80px -79px no-repeat;
		background-size:250px;
		
	}
	section>span:nth-of-type(3)>b{
		background: url(../../assets/images/main_20160620.png) -165px -85px no-repeat;
		background-size:250px;
	
	}
	ul.search{
		display: flex;

	}
	.search>li{
		flex: 1;
		text-align: center;
		font-size: 13px;
	}
	.how{
		margin-top: 20px;
		width: 100%;
		text-align: center;
		font-size: 13px;
		padding: 15px 0;
		background: #e8e8e8;
		color: #551a8b;
		border-radius: 5%;
	}
	.guess{
		width: 100%;
	
		padding: 10px 0;
		
		
		border-bottom: 1px solid #07ac9b;
		
	}
	.guess>b{
		color: #07ac9b;
		font-size: 15px;
	}

	 .guess>span:nth-of-type(1){
		display: inline-block;
		margin-bottom: -4px;
		width: 30px;
		height: 20px;
		background:url(../../assets/images/icon_ct_20160627.png)  2px -53px no-repeat;
		background-size:175px ;
	}
	.guess>span:nth-of-type(2){
		display:inline-block;
		margin-left: 10px;
		border-right: 5px solid transparent;
		border-bottom:5px solid transparent;
		border-left: 5px solid #07ac9b;
		border-top: 5px solid transparent;
		transform: rotate(360deg);	
	}
	#school .instr{
		width: 98%;
		display: flex;
		flex-wrap: wrap;
		margin-left: 2%;
		
	}
	#school .instr>li{
		flex: 0 0 32%;
		padding: 10px 0;
		border-bottom: 1px dashed #d6d6d6;
	}
	#school .instr>li>a{
		font-size: 14px;
		color:#000000 ;
	}
	
	#school .instrcity{
		width: 98%;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		margin-left: 2%;
		
	}
	#school .instrcity>li{
		flex: 0 0 25%;
		padding: 10px 0;
		border-bottom: 1px dashed #d6d6d6;
	}
	#school .instrcity>li>a{
		font-size: 14px;
		color:#000000 ;
	}	
	
	
	#school .cityimg {
	padding: 11px 7px 0;
    background-color: #fff;
    zoom: 1;


	}
	#school .cityimg::after{
		content: "";
		display: block;
		clear: both;
	}
	#school .cityimg>li{
		width: 17.85%;
		float: left;		
		padding: 0 3px 11px;
	}
	#school .cityimg>li img{
		width: 100%;	
		border: 1px solid #e1e1e1
	}
	#school .foot{
    position:absolute;
    z-index: 999;
    background: #282d34;
    bottom: -250px;
    left: 0;
    width: 100%;
    height: 160px;
    padding: 20px 0;
    text-align: center;
    border-top: 30px solid #e8e8e8;

	}
    #school .foot>div{
    margin-left: auto;
    margin-right: auto;
     width: 200px;
     height: 80px;
     zoom:1
    
    }
     #school .foot>div::after{
     	content: "";
     	display: inline-block;
     	clear: both;
     }
   #school .foot>div>span{
   	padding: 10px 0;
   	 display: inline-block;
   	 width: 90px;
   	 height: 50px;
   	 border:1px solid #3f454d ;
   	 text-align: center;
   	 background: #2f353c;
   }
   #school .foot>div>span:nth-of-type(1){
   float: left;
   
   }
    #school .foot>div>span:nth-of-type(2){
   	float: right;
   }
      #school .foot>div>span>b{
   	display: block;
   	font-size: 13px;
   	line-height: 28px;
   	color: #fff;
   }
     #school .foot>div>span:nth-of-type(1)>img{
     	width: 30px;
     }
    #school .foot>div>span:nth-of-type(2)>img{
     	width: 17px;
     }
     #school .foot>p{
     	margin-top: 17px;
     	width: 100px;
     	height: 40px;
     	margin-left: auto;
     	margin-right: auto;
     	font-size: 14px;
     	color:#86ccc5 ;
     }
     #school .foot>p>span:nth-of-type(1){
     	float: left;
     }
         #school .foot>p>span:nth-of-type(2){
     	float:right;
     }
      #school .foot>h4{
      	font-size: 12px;
      	color: #c1c1c1;
      }
	


</style>