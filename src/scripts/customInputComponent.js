import Vue from 'shaival';

Vue.component('custom-input-component', {
    template: `
    <div class="panel default-panel">
        <h3>Custom Input</h3> 
        <input 
        :value="value"
        @input="updateValue($event.target.value)">
        </input> 
    </div>`,
    props: {
        value: {
            type: String
        }
    },
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
        }
    }
})