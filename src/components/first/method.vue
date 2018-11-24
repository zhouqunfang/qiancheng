<template>
	<main id="method">
		<header>
			<input type="text" placeholder="请输入关键字，例如简历" />
			<span></span>
		</header>
		<ul>
            <li v-for="(v,i) in methods">
            	<p>{{v.title}}</p>
            	<ol>
            		<li v-for="(a,j) in methods[i].text">{{a}}<span></span></li>
            	</ol>
            	<h4>更多资讯</h4>
            </li>
		</ul>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				methods:[]
				
			}
		},
		mounted(){
			this.$http.get('./data/method.json')
			.then((res)=>{
				this.methods=res.data.method
			})
		},
		
	}
</script>

<style scoped="">
	#method>header{
		height: 70px;
		line-height: 70px;
		text-align: center;
		position: relative;
		/*border-bottom: 8px solid #ebebeb;*/
	
	}
	#method>header>input{
		width: 83%;
		font-size: 14px;
		height: 35px;
		padding-left: 10px;
		border: none;
		background: #ebebeb;
		border-radius: 5px;
		outline: none;
		}
		#method>header>span{
			content: '';
			display:inline-block;
			width: 50px;
			height: 50px;
			background:url(../../assets/images/icon_search.png) no-repeat;
			background-size: 16px;
			position: absolute;
			top: 28px;
			right: 5%;
		}
		#method>ul{
			padding:0 15px;
			border-bottom:6px solid #e6e6e6;
		}
		#method>ul>li>p{
			font-size: 15px;
			color: #ff773e;
			padding: 15px 0;
			border-top:6px solid #e6e6e6;
		}
		#method>ul>li>p::before{
			content: "|";
			display: inline-block;
			width: 15px;
			font-weight: bold;	
		}
		#method>ul>li>ol{
			font-size: 14px;
			border-top:1px solid #e6e6e6;
		
		}
		#method>ul>li>ol>li{
			padding: 10px 15px;
			position: relative;
			border-bottom:1px solid #e6e6e6;
			color: #444;
		}
		#method>ul>li>ol>li>span{
			display: inline-block;
			width: 7px;
			height: 7px;
			border-bottom: 2px solid #c6c6c6;
			border-left: 2px solid #c6c6c6;
			transform: rotate(225deg);
			position: absolute;
			right: 8px;
			top: 18px;
		}
		#method>ul>li>h4{
			font-size: 14px;
			text-align: center;
			padding: 14px 0;
	        color: #868686;
		}
		
		
	
	
</style>