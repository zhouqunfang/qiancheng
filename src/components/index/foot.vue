<template>
	<main id = "foot">
		<div class="one">
			<p>phone_1830768334</p>
			<span>TOP</span>
		</div>
        <ul>
        	<li>
        		<span></span>
        		<b>电脑版</b>
        	</li>
        	<li>
        		<span></span>
        		<b>触屏版</b>
        	</li>
        	<li>
        		<span></span>
        		<b>App下载</b>
        	</li>
        	<li>
        		<span></span>
        		<b>微信公众号</b>
        	</li>
        </ul>
        <p class="help">
        	<span>使用帮助</span>
        	<span>用户反馈</span>
        	<span>企业入口</span>
        </p>
        <p class="copy">
        	无忧工作网版权所有©1999-2018<br>51job.com（沪ICP备12015550）
        </p>
	</main>
</template>

<script>
	export default {
           
			
			}
</script>

<style scoped>
	#foot{
		padding-bottom: 20px;
		background: #fff2e3;
	}
	#foot .one{
		width: 100%;
		padding: 25px 0px ;
		background: #ebebeb;
	    line-height: 7px;
	    font-size: 14px;
	    color: #ff7214;
	    margin-bottom: 20px;
		
	}
	#foot .one>p{
		float: left;
		margin-left: 20px;
	}
	
	#foot .one>span{
		
		float: right;
		margin-right: 30px;
	}
	#foot .one>span::after{
		content: '';
		display: inline-block;
		position: relative;
		left: 7px;
		top: -4px;
		border-right: 5px solid transparent;
		border-bottom:5px solid transparent;
		border-left: 5px solid #ff7214;
		border-top: 5px solid transparent;
		transform: rotate(270deg);		
	}
	#foot ul{
		width: 100%;
		display: flex;
		align-items: center;
		background: #fff2e3;
		
		
		
	}
	#foot ul>li{
		flex: 1;	
		position: relative;
		text-align: center;
	
        
	}
	#foot ul>li>span{
		display: inline-block;
		width:50px;
		height:50px;
	}
	
	#foot ul>li:nth-of-type(1)>span{
		background: url(../../assets/images/footer_icons.png) 7px 4px  no-repeat ;
	    background-size:309px ;
	}
		#foot ul>li:nth-of-type(2)>span{
		background: url(../../assets/images/footer_icons.png) -86px 4px  no-repeat ;
	    background-size:309px ;
	}
		#foot ul>li:nth-of-type(3)>span{
		background: url(../../assets/images/footer_icons.png) -175px 4px  no-repeat ;
	    background-size:309px ;
	}
		#foot ul>li:nth-of-type(4)>span{
		background: url(../../assets/images/footer_icons.png) -265px 4px  no-repeat ;
	    background-size:309px ;
	}
		#foot ul>li>b{
         display: block;
         font-size: 13px;
         color: #939393;
	}
	#foot ul>li:nth-of-type(2)>b{
		color:#ff862d;
	}
	.help{
		margin-top: 20px;
		text-align: center;
		width: 100%;
	}
	.help>span{
		font-size: 14px;
		color:#939393 ;
		
	}
	.help>span::after{
		content: '|';
		color: #939393;
		padding-left: 13px;
		padding-right: 13px;
	}
	.copy{
		color: #939393;
		margin-top: 20px;
		text-align: center;
		font-size: 13px;
		width: 100%;
		line-height:20px;
	}
</style>