<template>
	<main id='hot'>
		<ul>
			<li v-for='(v,i) in list1' @click="change(i+1)">
				<p >{{v.name}}</p>
				<span :class="{current:v.showContent}"></span>
				<ol>
					<li  v-show="v.showContent&&num==(i+1)"  v-for="(a,j) in list1[i].job">{{a}}</li>
				</ol>
			</li>
			
		</ul>
		
	</main>
	
</template>

<script>
	export default{
		data(){
			return{
				list1:[],
				num:0
	}
		},
		methods:{
			change(a){
				 this.num=a;
				 this.list1[a-1].showContent=!this.list1[a-1].showContent;
				 
			}
		},

		mounted(){
			this.$http.get('./data/job.json')
			.then((res)=>{
				console.log(res.data)
				console.log(res.data.list)
		        this.list1=res.data.list
		        
		  })

		  }
		}
</script>

<style scoped="">

	#hot ul>li{
		padding-top: 20px ;
		/*line-height:20px;*/
		border-bottom:1px solid #e6e6e6 ;
		font-size: 14px;
		position: relative;
		color: #444444;
		cursor: pointer;
			
	}
	#hot ul>li>p{
		line-height: 12px;
		margin-left: 4%;
	}
	#hot ul>li:nth-of-type(1){
		border-top:none;
		
	}
		
	#hot ul>li>span{
		display: inline-block;
		width: 8px;
		height: 8px;
		border-left: 2px solid #a0a0a0 ;
		border-top: 2px solid #a0a0a0 ;
		position: absolute;
		right: 3%;
		top:30%;
		transform: rotate(225deg);
	}
	#hot ul>li>span.current{
		transform: rotate(45deg);
		    top: 5%;

	}
	#hot ul>li>ol{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background:#fff8ed;
		margin-top: 4%;
	
	}
	
	#hot ul>li>ol>li{
		flex: 0 0 45%;
		padding: 14px 0;
		/*border-bottom: 1px solid #e6e6e6;*/
		border-top: 1px solid #e6e6e6;
		margin-left: 20px;
	    color: #444;
	    cursor: pointer;	
	}

	#hot ul>li>ol>li:nth-of-type(2n){
		margin-left: 0px;
	}
	#hot ul>li>ol>li>a{
		color: black
	}
	#hot ul>li>ol>li:nth-of-type(1)>a{
		color: #ff7e3e;
	}
	
</style>