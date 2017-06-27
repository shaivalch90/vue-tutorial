const Vue = require('shaival');


Vue.component('sample-component', {
    template: `<li>
                    <button class="btn btn-danger" :style="{marginRight: '10px'}" @click="emitToParent()">X</button>
                    {{listIndex}} - {{listItem}} 
                    <button class="btn btn-default" @click="callParentMethod(listIndex)">Remove</button>
                </li>`,
    props: [
        'listItem',
        'listIndex'
    ],
    methods: {
        callParentMethod: function (index) {
            // cleaner approach would be to emit and catch on the directive and call parent method
            this.$parent.removeItem(index);
        },
        emitToParent: function () {
            this.$emit('remove');
        }
    }
})