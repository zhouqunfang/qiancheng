<template>
   <main id="search">
		<div class="box">
			 <form>   
			    <span>全文</span>
			    <input type="text" placeholder="请输入关键字"/>
			</form>
			<section>
				<div>
					<span>地区</span>
					<router-link to="/position"><span class="position">{{this.$store.state.addr}}</span></router-link>
				</div>
				<div>
					<span>行业</span>
					<router-link to="/hot"><span class="job">不限</span></router-link>
				</div>
				<div>
					<span>职能</span>
					<span>不限</span>
				</div>
				<p>
					<span>更多搜索条件</span>
				</p>
			</section>
		</div>
		<div class="searchme">
			<p><b></b>同时保存个人搜索器(需登陆)</p>
			<span>搜索</span>
		</div>

	</main>
</template>

<script>
	export default{
          data(){
          	return{
          		
          	}
          	}
          }
	
</script>

<style scoped="">
	.box{
		padding: 0px 12px;
	}
	form {
		width: 100%;
		padding:15px 0px;
		display: flex;
		text-align: center;
        justify-content: center;
        align-items: center;
       
	}
	form>span{
		display: inline-block;
		width: 50px;
		line-height: 35px;
		padding: 0 16px;
		background:#ebebeb ;
		font-size: 14px;	
		border-bottom-left-radius: 5px;
		border-top-left-radius: 5px;
	}
	form>span:after{
	 content: '';
	 display: inline-block;
	 position: relative;
	 left: 10px;
	 top: -3px;
	 width: 7px;
	 height: 7px;
	 border-right: 1px solid #868686;	
	 border-top: 1px solid #868686;	
	 transform: rotate(135deg);

	}
	form>input{
		flex: 1;
		font-size: 14px;
		line-height: 35px;
		background: #ebebeb;
		border: none;
		outline:none;
		border-bottom-right-radius: 5px;
		border-top-right-radius: 5px;
		
	}
	section>div{
		width: 100%;
		padding: 15px 0;
		height: 20px;
		border-bottom: 1px #e6e6e6 solid;
		font-size: 14px;
		color: #868686;
		
	}
	section>div .position,.job{
		float: right;
		color:#868686 ;
	}
	
	section>div .position::after,.job::after{
	 content: '';
	 display: inline-block;
	 width: 9px;
	 height: 10px;
	 border-right: 1px solid #868686;	
	 border-top: 1px solid  #868686;	
	 transform: rotate(45deg);		
	 margin-left: 5px;
	
	}
	section>div>span:nth-of-type(1){
		float: left;
	}
	section>div>span:nth-of-type(2){
		float: right;
		
	}
	section>div>span:nth-of-type(2)::after{
	 content: '';
	 display: inline-block;
	 width: 9px;
	 height: 10px;
	 border-right: 1px solid #868686;	
	 border-top: 1px solid  #868686;	
	 transform: rotate(45deg);		
	 margin-left: 5px;
	
	}
	section>p{
		font-size: 14px;
		width: 100%;
		text-align: center;
		padding: 15px;
		color: #5aa0ff;
	}
	section>p>span:after{
	 content: '';
	 display: inline-block;
	  position: relative;
	 left:3px;
	 top: -3px;
	 width: 7px;
	 height: 7px;
	 border-right: 1px solid #5aa0ff;	
	 border-top: 1px solid  #5aa0ff;	
	 transform: rotate(135deg);		
	 margin-left: 5px;	
	}
	.searchme{
		padding:20px 10px;
		border-top: 10px solid #ebebeb ;
	
	}
	.searchme>p{
		font-size: 12px;
		margin-left: 4%;
		color: #898989;
		
		
	}
	.searchme>p>b{
		display: inline-block;
		width: 20px;
		height: 20px;
		border: 1px solid #898989;
		border-radius: 50%;
		margin-right: 10px;
		vertical-align:bottom
	}
	.searchme>span{
		display: block;
		padding: 8px 0;
		margin-left: auto;
		margin-right: auto;
		width: 95%;
		text-align: center;
		background:#ff7e3e ;
		border-radius: 5px;
		color: #fff;
		margin-top: 18px;
		
	}
</style>