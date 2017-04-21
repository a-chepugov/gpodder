import {mapActions} from 'vuex';
import List from '../List/index.vue';
import Login from '../Login/index.vue';
import Message from '../Message/index.vue';


export default {
	components: {
		List,
		Login,
		Message,
	},
	data () {
		return {
		}
	},
	methods: {
	},
	created () {
		// this.$store.dispatch('login')
	}
}