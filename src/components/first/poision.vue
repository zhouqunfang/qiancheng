<template>
	<main id="poision" >
		<header class="head">
			<span @click="push()"></span>
			<p>地区选择</p>			
		</header>
		<div class="now">
			<p>当前地区</p>
			<p>{{this.$store.state.addr}}</p>
		</div>
		<section class="city">
			<p>热门城市</p>
			<ul>
				<li v-for="(v,i) in hotcity" @click="onselect(i)">{{v}}</li>
			</ul>
		</section>
		<div class="somecity">
			<p>按省份选择城市</p>
			<ul>
				<li v-for="(v,i) in city" >
				<p @click="change(i+1)">{{v.province}}</p>
				<span :class="{current:v.showContent}"></span>
				<ol v-show="aa==(i+1)&&v.showContent">
					<li v-for="(a,j) in city[i].incity" @click="minselect(j)" >{{a}}</li>
				</ol>
				</li>
			</ul>
		</div>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				hotcity:[],
				city:[],
				aa:0,
//				msg:addr,
				out:true
			
			}
		},
		mounted(){
			this.$http.get('./data/city.json')
			.then((res)=>{
				this.hotcity=res.data.hotcity,
				this.city=res.data.city	
			})
		},
		methods:{
			push(){
				this.$router.go(-1)
			},
			change(i){
				console.log(i)
				this.city[i-1].showContent=!this.city[i-1].showContent
				this.aa=i
//				console.log(this.aa)
                this.$store.commit('change',i)
				
			},
			onselect(i){
//				addr=this.hotcity[i]
//				this.msg=addr
				this.$store.commit('onselect',i)
                 this.$router.go(-1)
				
				
			
			},
			minselect(j){
				console.log(this.aa-1)
//				addr=this.city[this.aa-1].incity[j]
//				this.msg=addr 
                this.$store.commit('minselect',j)
                 this.$router.go(-1)
                
			}
			
		},
//		watch:{
//			msg(){
//               this.$router.go(-1)
//			}
//		}
	}
</script>

<style scoped="">
	#poision{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 500;
	}
	.head{
		width: 100%;
		height: 50px;
		line-height:50px ;
		text-align: center;
		border-bottom:2px solid #d3d3d3 ;
		position: relative;
		
	}

	.head>span{
		display: inline-block;
		position: absolute;
		left: 5%;
		top: 40%;
		width: 10px;
		height: 10px;
		border-bottom: 1px solid #afafaf;
		border-left: 1px solid #afafaf;
		transform: rotate(45deg);
		cursor: pointer;
	}
	.now{
		height: 100px;
		position: relative;
		
	}
	.now>p{
		padding:5px 20px;
		line-height: 35px;
		border-bottom:1px solid #d3d3d3 ;
		font-size: 14px;	
	}
    .now>p:nth-of-type(2){
    	border-bottom:none;
    	border-bottom: 5px solid #ebebeb;
    }
    .now>p:nth-of-type(2):before{
    	content: '';
    	display: inline-block;
    	width: 19px;
    	height: 19px;
    	background:url(../../assets/images/icon_city.png) no-repeat;
    	background-size: 15px;
        position: relative;
        top: 3px;
    }
    .city{
    		padding: 0 20px;
    		border-bottom:5px solid #ebebeb ;
    }
    .city>p{
    	height: 40px;
    	line-height: 40px;
    	font-size: 15px;
    	color: #ff8c53; 	
    }
    .city>ul{
    	display: flex;
    	flex-wrap: wrap;
    	padding: 0 10px;
    	 text-align: center;
    	 color: #444444;
    }
    .city>ul>li{
    	flex: 0 0 25%;
    	height: 40px;
    	line-height: 40px;
    	border-bottom:1px solid #e6e6e6;
    	cursor: pointer;
    	font-size: 14px;
    }
    .somecity{
    		padding: 0 20px;
    		border-bottom:5px solid #ebebeb ;
    }
   .somecity>p{
    	height: 40px;
    	line-height: 40px;
    	font-size: 15px;
    	color: #ff8c53; 	
    }
    .somecity>ul{
    	padding: 0 10px;
    	cursor: pointer;
    }
    .somecity>ul>li{
    	position: relative;
    	 color: #444444;
    }
    .somecity>ul>li>p{
    	height: 40px;
    	line-height: 40px;
    	border-bottom:1px solid #e6e6e6;	
    	font-size: 14px;
    	
    }    
    .somecity>ul>li>span{
    	display: inline-block;
    	width:10px;
    	height: 10px;
		border-bottom: 1px solid #afafaf;
		border-left: 1px solid #afafaf;
		transform: rotate(-45deg);
		position:absolute;
		right: 10px;
		top: 10px;	
    }
       .somecity>ul>li>ol{
       	display: flex;
       	flex-wrap: wrap;
       	margin-left: 3%;
       	 color: #444444;
       }
       .somecity>ul>li>ol>li{
       	flex: 0 0 25%;
       	font-size: 14px;
       	height: 49px;
       	line-height: 49px;
        border-bottom:1px solid #e6e6e6;	
        /*padding-left:10px;*/
       }
       ul>li>span.current{
       	transform: rotate(135deg);
       }
</style>