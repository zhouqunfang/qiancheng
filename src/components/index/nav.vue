<template>
	<main id="nav">
		<header>
			<router-link to="/first"><img src="../../assets/images/logo_20jubilee_162x64.png" /></router-link>
			<router-link to="/position"><b>{{this.$store.state.addr}}</b><span><img src="../../assets/images/arrow.png"></span></router-link>
			<router-link to="/my"><p>我的51job</p></router-link>
		</header>
		<ul>
		        <li><router-link to="/resume">我的简历</router-link></li>
		        <li> <router-link to="/search">职位搜索</router-link></li>
		        <li><router-link to="/hot">热门职位</router-link></li>
		        <li> <router-link to="/company">知名企业</router-link></li>
		</ul>
	</main>
</template>

<script>
      export default{
      	data(){
      		return{
      			
      		}
      	},
//    	props:['a']
      }
</script>

<style scoped>
	#nav{
		position:relative;
		right: 0;
		left: 0;
		z-index: 0;
	}
	#nav header{
		width: 100%;
		height: 40px;
		padding-top: 15px ;
		line-height: 30px;
	}
	#nav header img{
		height:28px;	
		float: left;
		margin-right: 10px;
		margin-left: 10px;
	}
	#nav header b{
		float: left;
		font-size: 13px;	
		color: #ff7e3e;
	}
	#nav header span>img{
		width:7px;
		height: 13px;
		margin-left: 10px;
		margin-top: 10px;
		transform: rotate(90deg);
	}
	
	#nav header p{
		float: right;
		font-size: 13px;
		padding: 0 10px;
		color: #ff7e3e;
	}
	#nav ul{
		display: flex;
		width: 100%;
		padding: 10px 0;
        background:#ff7e3e ;
         
	}
	#nav ul>li{
		flex: 1;
		text-align: center;
	
		
	}
	#nav ul>li>a{
			color: #fff;
			font-size: 15px;
	}
</style>