<template>
  <div id="app">
  <!--{{add()}}-->
     <!--<v-nav :a="msg"></v-nav>-->
     <v-nav></v-nav>
  	 <router-view></router-view> 
  	 <v-foot></v-foot>
   </div>
</template>

<script>
import nav from './components/index/nav.vue'
import foot from './components/index/foot.vue'
export default {
  name: 'app',
    data () {
					return {
//						msg:addr
					}
				
				},
      	methods:{
//    		add(){
//    			this.msg=addr
//    		}
      		
      	},
components:{
  		'v-nav':nav,
			'v-foot':foot
  	
  }
}
</script>

<style>

     
</style>
