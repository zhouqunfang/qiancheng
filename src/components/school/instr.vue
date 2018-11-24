<template>
	<h4>这是{{title}}</h4>
</template>

<script>
	export default{
		data(){
			return{
				title:''
			}
		},
		mounted(){
			this.title=this.$route.params.num
		}
	}
</script>

<style>
	
</style>