import VueMoment from 'vue-moment'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueMoment)
})