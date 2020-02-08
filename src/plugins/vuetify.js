import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import DiceC12A from '../components/icons/DiceC12A.vue'
import DiceC12B from '../components/icons/DiceC12B.vue'
import DiceC24A from '../components/icons/DiceC24A.vue'
import DiceC24B from '../components/icons/DiceC24B.vue'
import DiceC24C from '../components/icons/DiceC24C.vue'
import DiceC24D from '../components/icons/DiceC24D.vue'
import DiceC30 from '../components/icons/DiceC30.vue'
import DiceC48 from '../components/icons/DiceC48.vue'
import DiceC60A from '../components/icons/DiceC60A.vue'
import DiceC60B from '../components/icons/DiceC60B.vue'
import DiceC60C from '../components/icons/DiceC60C.vue'
import DiceC60D from '../components/icons/DiceC60D.vue'
import DiceC120 from '../components/icons/DiceC120.vue'
import Logo from '../components/icons/Logo.vue'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        values: {
            logo: {
                component: Logo,
            },
            c12a: {
                component: DiceC12A,
            },
            c12b: {
                component: DiceC12B,
            },
            c24a: {
                component: DiceC24A,
            },
            c24b: {
                component: DiceC24B,
            },
            c24c: {
                component: DiceC24C,
            },
            c24d: {
                component: DiceC24D,
            },
            c30: {
                component: DiceC30,
            },
            c48: {
                component: DiceC48,
            },
            c60a: {
                component: DiceC60A,
            },
            c60b: {
                component: DiceC60B,
            },
            c60c: {
                component: DiceC60C,
            },
            c60d: {
                component: DiceC60D,
            },
            c120: {
                component: DiceC120,
            }
        }
    }
})
