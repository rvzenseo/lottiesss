document.addEventListener('DOMContentLoaded', function () {
    Vue.component('lottie-animation', {
        props: ['animationData'],
        template: '<div ref="lottieContainer" class="lottie-animation"></div>',
        mounted() {
            lottie.loadAnimation({
                container: this.$refs.lottieContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: this.animationData
            });
        }
    });

    Vue.component('grid-layout', {
        template: `
            <div class="grid-container">
                <lottie-animation v-for="animation in animations" :key="animation.id" :animationData="animation"></lottie-animation>
            </div>
        `,
        data() {
            return {
                animations: [] // You should load your animations data here
            };
        }
    });

    new Vue({
        el: '#app'
    });
});
