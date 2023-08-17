<script>
import Separator from "./Separator.vue"

export default {
    components: {
        Separator,
    },
    props: {
        img: "",
        title: "",
    }
}

</script>

<template>
    <div class="card">
        <div class="card-img"><img :src=img alt="aloevera"></div>

        <div class="card-title">
            <Separator :width=50 :height=2></Separator>
            {{ title }}
        </div>
    </div>
</template>

<style scoped>
/* @import url('https://fonts.cdnfonts.com/css/montserrat'); */
@import url('https://fonts.cdnfonts.com/css/sanva');
.card {
    width: 300px;
    height: 400px;
    background-color: white;
    box-shadow: 0px 0px 15px grey;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.card-img{
    width: 300px;
    height: 200px;

    overflow: hidden;
    position: relative;
}

.card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

}

.card-title {
    padding: 40px;
    text-align: center;
    font-family: 'Sanva', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>