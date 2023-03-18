import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
    const store = useStore()
    
    const counter = computed(() => store.state.counter)
    
    const increment = () => store.commit('increment')
    const decrement = () => store.commit('decrement')
    const reset = () => store.commit('reset')
    const setValue = (value) => store.commit('setValue', value)

    
    return {
        counter,
        increment,
        decrement,
        reset,
        setValue
    }
}
