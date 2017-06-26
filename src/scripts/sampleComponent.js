const Vue = require('shaival');


Vue.component('sample-component', {
    template: `<li>
    {{listIndex}} - {{listItem}} <button class="btn btn-default" @click="callParentMethod(listIndex)">Remove</button>
    </li>`,
    props: [
        'listItem',
        'listIndex'
    ],
    methods: {
        callParentMethod: function (index) {
            this.$parent.removeItem(index);
        }
    }
})