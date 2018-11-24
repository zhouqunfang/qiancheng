<template>
	<main id='apply'>
		<ul>
			<li><router-link to='/societjob'><span>社会招聘</span></router-link></li>
			<li><router-link to='/schooljob'><span>校园招聘</span></router-link></li>
		</ul>
		<router-view></router-view>
	</main>
</template>

<script>
   export default{

    }
</script>

<style scoped="">
	
	#apply ul{
		display: flex;
		text-align: center;
		border-bottom:1px solid #e6e6e6; 
	}
	#apply ul>li{
		flex: 1;	
	}
	#apply ul>li>a{
		display: inline-block;
		width: 120px;
		padding-top: 15px ;
		padding-bottom: 12px;
		font-size: 14px;
		color: #444444;
	}
	
	#apply ul>li .router-link-active{
		color: #ff7e3e;
		border-bottom: 3px solid #ff7e3e;
		
	}
</style>