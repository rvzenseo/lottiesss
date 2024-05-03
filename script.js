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
                animations: [] // This array will be populated with animation data
            };
        },
        created() {
            this.loadAnimations();
        },
        methods: {
            loadAnimations() {
                const animationFiles = [
                    'animations/ani-1.json', 'animations/ani-2.json',
                    'animations/ani-3.json', 'animations/ani-4.json',
                    'animations/ani-5.json', 'animations/ani-6.json',
                    'animations/ani-7.json', 'animations/ani-8.json'
                ];
                animationFiles.forEach(file => {
                    fetch(file)
                        .then(response => response.json())
                        .then(data => {
                            this.animations.push(data);
                        })
                        .catch(error => console.error('Error loading the animation:', error));
                });
            }
        }
    });

    new Vue({
        el: '#app'
    });
});
