<template>
   <main id="new">
       <div class="box">
         <ul>
            <li>我的简历1</li> 
            <li>创建于2018-08-04<span>更新于2018-11-17</span></li>
             <li>简历质量：<span></span></li>
             <li>公开程度：完全保密</li>
         </ul>
       </div>
       <ol>
         	<li>刷新</li>
         	<li>简历编辑</li>
         	<li>预览</li>
         	<li>复制</li>
         	<li>公开程度</li>
         	<li>删除</li>
        </ol>
         <p>创建简历</p>
   </main>
</template>

<script>

	export default{

	}
</script>

<style scoped="">
	#new{
		background: #ebebeb;
	}
	.box{
		padding: 10px 20px;
		background: #fff;
	}
	ul>li{
		margin-bottom: 10px;
		color: #868686;
	}
	ul>li:nth-of-type(1){
		font-size: 14px;
	}
	ul>li:nth-of-type(2){
		font-size: 12px;
		
	}
	ul>li:nth-of-type(2)>span{
		display: inline-block;
		padding-left: 12px;
			
	}
	ul>li:nth-of-type(3){
		font-size: 12px;
	}
	ul>li:nth-of-type(3)>span{
		display: inline-block;
		width: 200px;
		height: 20px;
		background: url(../../assets/images/icon_abox.png) 0px -60px no-repeat;
		background-size: 110px;
	}
	ul>li:nth-of-type(4){
		font-size: 12px;
		
	}
	ol{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		justify-content: space-between;
		align-items: center;
		background: #fff;
	
	}
	ol>li{
		flex: 0 0 31%;
		font-size: 14px;
		margin-right: 2%;
		margin-bottom: 10px;
		background: #fff8ed;
		padding: 15px 0;
		color: #868686;
	}
	ol>li:nth-of-type(3n){
		margin-right: 0;
	}
	ol>li::before{
		content: '';
		display: inline-block;
		width: 24px;
		height: 20px;
		background: url(../../assets/images/icon_abox.png) no-repeat;
	    background-size: 105px;
	    position: relative;
	    top: 6px;
	    margin-right: 10px;
	}
	ol>li:nth-of-type(1)::before{
		background-position: 4px 0px;
		
	}
	ol>li:nth-of-type(2)::before{
		background-position: -16px 0px;
		
	}
	ol>li:nth-of-type(3)::before{
			background-position: -40px 0px;
		
	}
	ol>li:nth-of-type(4)::before{
			background-position: 4px -20px;
		
	}
	ol>li:nth-of-type(5)::before{
			background-position: -16px -20px;
		
	}
	ol>li:nth-of-type(6)::before{
			background-position: -40px -20px;
	}
	p{
		width: 100%;
		text-align: center;
		padding: 20px 0;
		background: #fff;
		color: #4c99ff;
		font-size: 14px;
		margin-top: 10px;
		
	}
	p:before{
		content: '+';
		padding: 6px;
		font-size: 16px;
	}
</style>