<script>
export default{
    props:{
        width: 0,
       height: 0
    }
}
</script>

<template>
    <div class="border-bottom" :style="{width: `${width}px`, 'border-bottom': `${height}px solid grey`}"></div>
</template>

<style scoped>
.border-bottom{
  margin: 20px;
}
</style>

