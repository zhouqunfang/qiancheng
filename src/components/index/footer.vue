<template>
  <div id="footer">
      <ul>
        <li @click="repeat()"><router-link to="/first"><b class="one">首页</b></router-link></li>
        <li> <router-link to="/resume"><b class="two">简历</b></router-link></li>
        <li><router-link to="/apply"><b class="three">已申请</b></router-link></li>
        <li @click="reflesh"><router-link to="/my"><b class="four">我的</b></router-link></li>
        <li><router-link to="/more"><b class="five">更多</b></router-link></li>
      </ul> 
   </div>
</template>

<script>
	export default{
		data(){
      return{
         one:"one"
      }
	 },
	 methods:{
	 	repeat(){
	 		this.$router.go(0)
	 	}
	 }
}	
</script>

<style scoped>
	#footer ul{
	 	position: fixed;
	 	bottom: 0;
	 	display: flex;
	 	width:100%;
	 	padding: 10px 0;
	 	background-color: #fff;
        border-top: 1px solid #d4d4d4;
        z-index: 8;
	 }
	#footer li{
	 	/*list-style: none;*/
	 	flex: 1;
	 	text-align: center;
	 }
	 
	#footer li>a{
	 	text-decoration: none;
	 	color:#777;
	 	font-size: 14px;
	  font-weight:normal;
	  color: #000;
	  display:block;

	 }

	#footer li>a>b{
		display: block;
		font-size: 13px;
		color: #5d656b;
		display: block;
    width: 71px;
    height: 47px;

	}
	#footer li>a>b::before{
		content: "";
		display: block;
		width: 30px;
	 	height:30px;
	 	margin-left: auto;
	 	margin-right: auto;
	}
	 #footer .one{	
	 	background:url(../../assets/images/icon1.png) 11px -169px no-repeat;	
	 	background-size: 339px auto;
	 }
	 	#footer .router-link-active{	
    background: url(/dist/icon3.png?634f42f…) 19px -2px no-repeat;
    background-size: 35px auto;
	 	
	 }
	 
	 #footer .two{	
	 	background: url(../../assets/images/icon1.png) -37px -169px no-repeat;
	 	background-size: 339px auto;
	 }
	 #footer .three{	
	 	background: url(../../assets/images/icon1.png) -84px -169px no-repeat;
	 	background-size: 339px auto;
	 
	 }
	 #footer .four{	
	 	background: url(../../assets/images/icon1.png) -131px -169px no-repeat;
	 	background-size: 339px auto;

	 }
	#footer li:nth-of-type(4) .router-link-active{
    background: url(/dist/icon4.png?87121b3…) 15px -4px no-repeat;
    background-size: 40px auto;
	
	}
	#footer .five{	
	 	background: url(../../assets/images/icon1.png) -179px -169px no-repeat;
	 	background-size: 339px auto;
    
	 }
     </style>