<template>
    <div id="tv-stand">
        <div id="tv">
            <div ref="screen" id="screen" class="glitched">
                <div ref="content" id="screen-content">
                    <span class="display-4">Oh!</span>
                    <span class="display-1"
                        >Looks like there is nothing here.</span
                    >
                    <span class="body-1">
                        Feel free to stare, or
                        <router-link to="/"> head back home.</router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'FourOFour',
        methods: {
            removeGlitch(el) {
                const addGlitch = this.addGlitch;
                const text = this.$refs.content;
                setTimeout(function () {
                    typeof el !== 'undefined' &&
                        el.classList.contains('glitched') &&
                        el.classList.remove('glitched');
                    setTimeout(function () {
                        addGlitch(text);
                    }, Math.random() * 5000 + 2000);
                }, 1000);
            },
            addGlitch(el) {
                typeof el !== 'undefined' &&
                    !el.classList.contains('glitched') &&
                    el.classList.add('glitched');
                this.removeGlitch(el);
            }
        },
        mounted() {
            this.removeGlitch(this.$refs.screen);
        }
    };
</script>
<style lang="scss">
    .v-content__wrap {
        display: flex;
        flex-direction: column;
    }
    .v-toolbar {
        flex-grow: 0;
    }
</style>
<style lang="scss" scoped>
    @import '../style/crt.scss';

    #tv-stand {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }

    #tv {
        background-color: #031e11;
        border-radius: 2rem;
        border: 1rem solid;
        border-bottom-color: #121212;
        border-left-color: #080808;
        border-right-color: #080808;
        border-top-color: #020202;
        box-shadow: inset 0 0 18rem black, inset 0 0 3rem black, 0 0 10rem black,
            0 0 2rem #031e11;
        height: 95%;
        width: 95%;
        position: relative;
    }

    #screen {
        @extend %crt;

        color: #14fdce;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;

        &.glitched {
            animation: glitch 0.8s;
        }
    }

    #screen-content {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.glitched {
            animation: glitch 0.8s;
        }
    }

    a {
        cursor: pointer;
    }
</style>
