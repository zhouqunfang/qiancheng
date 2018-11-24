<template>
	<div id="resume">
	      <router-link to="/search"><p>关注<span>前程无忧51job服务号</span>查看投递进度</p></router-link>
	      <section>
	      	  <img src="../../assets/images/icon_noacc.png" />
	      	  <p>您的简历最近两个月未被企业浏览过，投递职位或刷新简历可以获得更多关注哦</p>
	            <div><span>投递简历</span></div>
	          	<div><span>刷新简历</span></div>
	        
	      </section>
	</div>
</template>

<script>
	export default {
		data () {
			return{

  }
		}
	}

</script>

<style scoped>
    #resume{
    	
    }
	#resume>a{
		display: block;
		margin-left: 20px;
		padding: 7px 0;
		/*font-size: 13px;*/		
	}
	#resume>a>p:before{
		content: '!';
		display: inline-block;
		margin-right: 5px;
		width: 15px;
		height:15px;
		border: 1px solid #878787;
		border-radius: 50%;
		font-size: 12px;
		text-align: center;
		color: #878787;
		
	}
	#resume>a>p{
		font-size: 13px;
		color:#878787;
	}
	#resume>a>p>span{
		margin:0 5px;
		color: #ff604e;
		font-size: 12px;
	}
    #resume section{
    	padding: 45px 10px;
    	text-align: center;
    	border-bottom: 1px solid #e6e6e6;
    	padding-bottom: 90px;
    	
    }
    #resume section>img{
    	width:28%;	
    }
    #resume section>p{
    	padding:20px 10px;
    	color: #b1afb2;	
    }
    #resume section>div{
    	width: 50%;
    	float: left;

    }

    #resume section>div>span{
    	   	display: inline-block;
	    	padding: 10px 40px;
	    	color: #fff;	
    		background: #ff773e;	
    		border-radius: 6px;		
    }

    		

</style>