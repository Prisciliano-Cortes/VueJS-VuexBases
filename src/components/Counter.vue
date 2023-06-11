<template>
    <h1>Counter - vuex</h1>
    <h2> Direct access: {{ $store.state.counter.count }} </h2>
    <h2> Computed: {{ countComputed }} </h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button 
        @click="incrementRandomInt"
        :disabled="isLoading"
    >Random</button>

    <h3>mapState: {{ count }}</h3>
    <h3> {{ lastMutation }} </h3>

    <h2> Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Counter',
        computed: {
            countComputed() {
                return this.$store.state.counter.count
            },
            ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
            // ...mapState({
            //     count: state => state.count,
            //     lastMutation: state => state.lastMutation
            // })
        },
        methods: {
            increment() {
                this.$store.commit('counter/increment')
            },
            incrementBy() {
                this.$store.commit('counter/incrementBy', 5)
            },
            // incrementRandomInt() {
            //     this.$store.dispatch('incrementRandomInt')
            // }
            ...mapActions('counter', ['incrementRandomInt'])
            // ...mapActions('counter', {
            //     randomInt: 'incrementRandomInt'
            // })
        }
    }
</script>