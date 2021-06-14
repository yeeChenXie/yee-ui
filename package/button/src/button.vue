<template>
    <div>
        <span class="colors" style="color:#fe465d"><slot></slot></span>
    </div>
</template>

<script>
export default {
    name:'YButton',
    data () {
        return {
            name:''
        };
    },
    mounted() {},
    methods: {},
    components: {}
}
</script>
<style  scoped>
.colors{
    font-size: 30px;
}
</style>