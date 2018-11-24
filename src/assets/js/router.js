import vueRouter from 'vue-router'
import first from '../../components/index/first.vue'
import search from '../../components/first/search.vue'
import who from '../../components/first/who.vue'
import school from '../../components/first/school.vue'
import resume from '../../components/resume/new.vue'
import apply from '../../components/apply/apply.vue'
import schooljob from '../../components/apply/schooljob.vue'
import societ from '../../components/apply/societ.vue'
import my from '../../components/footer/my.vue'
import instr from '../../components/school/instr.vue'
import hot from '../../components/index/hot.vue'
import oposition from '../../components/first/poision.vue'
import method from '../../components/first/method.vue'
export default new vueRouter({

	routes:[
		{path:'/first',component:first},
		{path:'/who',component:who},
		{path:'/school',component:school},
		{path:'/resume',component:resume},
		{path:'/my',component:my},
		{path:'/apply',component:apply,
		children:[
		{
			path:'/societjob',component:societ,
		},
		{
			path:'/schooljob',component:schooljob
		},
		{
			path:'/',redirect:'/societjob'
		}
		]
		},
		{
			path:'/search',component:search
		},
		{
			path:'/instr/:num',component:instr
		},
		{
			path:'/hot',component:hot
		},
		{
			path:'/position',component:oposition
		},
		{
			path:'/method',component:method
		},
		{
		path:'/*',
		redirect:'/first'
		}


   ]

})