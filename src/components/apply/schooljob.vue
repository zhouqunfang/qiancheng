<template>
	<main id="noth">
		<router-link to="/search"><p>关注<span>前程无忧51job服务号</span>查看投递进度</p></router-link>
		<div>
			<p>你还没有申请职位哦！</p>
		</div>
	</main>
</template>

<script>
</script>

<style scoped="">
	#noth>a{
		display: block;
		margin-left: 20px;
		padding: 7px 0;
		/*font-size: 13px;*/		
	}
	#noth>a>p:before{
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
	#noth>a>p{
		font-size: 13px;
		color:#878787;
	}
	#noth>a>p>span{
		margin:0 5px;
		color: #ff604e;
		font-size: 12px;
	}
	#noth>div
	{
		text-align: center;
		padding: 70px 60px;
	
	}
	#noth>div>p
	{
		padding: 40px;
	    border: 1px solid #bebebe;
	    border-radius: 5px;
	    color: #ff7e3e;
	}	
</style>