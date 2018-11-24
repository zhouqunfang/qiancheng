<template>
	<main id="my">
		<div class="box">
			<div >	
				<img src="../../assets/images/woman.png" />
				<p>周群芳</p>
				<span>广州</span>
				<span>|</span>
				<span>21岁</span>
			</div>
		</div>
		<ul>
			<li><router-link to="/resume"><span>我的简历</span><b></b></router-link></li>
			<li><span>我的申请简历</span><b>共9条</b></li>
			<li><span>我的收藏</span><b>共3条</b></li>
			<li><span>谁看过我</span><b>共0条</b></li>
			<li><span>个人搜索器</span><b></b></li>
			<li><span>增值服务</span><b></b></li>
			<li><span>人事来信</span><b>共10条</b></li>
			<li><span>屏蔽公司</span><b></b></li>
			<li><span>我关注的宣讲会</span><b></b></li>
			<li><span>我的账号</span><b></b></li>
		</ul>
		<v-footer></v-footer>
	</main>
</template>

<script>
	import footer from '../../components/index/footer.vue'
	export default {
		data(){
			return{
			
			}
		},
		components:{
			'v-footer':footer
		}
	}
</script>

<style scoped="">
	#my{
		position: relative;
		z-index: 100;
		top: 0;
		right: 0;
		background: #e6e6e6;
		margin-top: -100px;

	}
	#my>.box{
		width: 100%;
		padding: 15px 0;
		background: #ff7e3e;
		text-align: center;
	}
	#my>.box>div{
		    width: 100%;
			background: url(../../assets/images/yh_bg.png) no-repeat;	
			background-size: 100% 100% ;
			font-size: 13px;
			line-height: 24px;
			color: #fff;

	}
	#my>.box>div>img{
		border-radius: 50%;
		background: #fff;
		width:62px ;
		height:62px ;
		margin-bottom: 10px;
		margin-left: 19%;
	}
	ul{
		width: 100%;
		
	}
	ul>li{
		padding: 0px 20px;
		margin-bottom: 3px;
		background: #fff;
		font-size: 12px;
		height: 45px;
		line-height: 45px;
	}
	ul>li span{
		float: left;
	}
	ul>li b{
		float: right;
	}
	ul>li span::before{
		content: '';
		display: inline-block;
		width: 22px;
		height: 23px;
		background: url(../../assets/images/icon_my.png) no-repeat;
	   background-size: 45px;
	   position: relative;
	   top: 7px;
	   right: 7px;
	   
	}
	ul>li:nth-of-type(2)>span:before{
		background-position: 0 -20px;
	}
	ul>li:nth-of-type(3)>span:before{
	background-position: 0 -40px;
}
	ul>li:nth-of-type(4)>span:before{
	background-position: 0 -64px;
}
	ul>li:nth-of-type(5)>span:before{
	background-position: 0 -85px;
}
	ul>li:nth-of-type(6)>span:before{
	background-position: -20px 0;
}
	ul>li:nth-of-type(7)>span:before{
	background-position: -20px -20px;
}
	ul>li:nth-of-type(8)>span:before{
	background-position: -22px -42px;
}
	ul>li:nth-of-type(9)>span:before{
	background-position: -22px -64px;
}
	ul>li:nth-of-type(10)>span:before{
	background-position: -22px -88px;
}
ul>li b:after{
	content: '';
	display: inline-block;
	width: 8px;
	height: 8px;
	border-left:1px solid #868686 ;
	border-top:1px solid #868686;
	margin-left: 10px;
	transform: rotate(135deg);
}
ul>li>a{
	color: #444444;
}


	
	
	
	
</style>