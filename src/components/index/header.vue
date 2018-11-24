<template>
	<main id="header">
		<header>
			<router-link to='/first'><img src='../../assets/images/logo_20jubilee_162x64.png'  alt='qiancheng' @click="newopen()"/></router-link>
		
		    <form>
				<input src="text" id="search" placeholder="请输入关键字"  @click="ifshow()"/>
				<span></span>
			</form>
			<div class="right">
				<router-link to="/position">
					<!--<b>{{msg}}</b>-->
					<b>{{this.$store.state.addr}}</b>
					<img src="../../assets/images/arrow.png"></img>
				</router-link>
			</div>
		</header>
	</main>
</template>

<script>
     export default{
     	data(){
     		return{
//   			msg:addr,
     			show:true
     			
     		}
     		
     	},
     	methods:{
     		ifshow(){
     			this.$emit('send',this.show)
     			console.log(this.show)
     			
     		},
     		newopen(){
     			this.$router.go(0)
     		}
     	}
     	
     }
</script>
     
<style scoped>
	header{
		position: fixed;
		display: flex;
		top: 0;
		width: 100%;
		height:28px;
		padding: 10px 10px;
		z-index: 2;
		background: #fff;
		
	
	}
	
	#header header>a>img{
		float: left;
		width: 66px;
		height: 27px;
		margin-right: 15px;
		
	}
	form{
		position: relative;
		float:left;
		height: 25px;
		flex-grow: 1;
		padding-right:30px ;

	}
	form>span{
		position: absolute;
	    top: -2px;
        left: 10px;
		display: block;
		width: 30px;
		height: 30px;
		background: url(../../assets/images/icon_home_20171214.png) -150px -173px no-repeat ;
        background-size: 345px auto;
        z-index: 200;

	}
	input{
		padding-left: 30px;
		width: 100%;
		height: 100%;
		background-color: #ebebeb;
        border: none;
        font-size: 13px;
        border-radius: 5px;
        outline-style: none;
        
      
		
	}
	.right{
		position:relative;
		top:4px;
		right: -13px;
		width: 80px;
		height: 27px;		
		float: left;
		 font-family: "Microsoft YaHei";
		 font-size: 13px;
		
			
	}
	.right b{
		 color: #ff7e3e;
	}
	#header .right img{
		width: 8%;
		margin-left: 7%;
		transform: rotate(90deg);
		position: relative;
		left:2%;
		top:3%;
	}

</style>