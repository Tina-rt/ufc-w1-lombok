<script>
import Separator from './Separator.vue';

export default {
    components: {
        Separator
    }
}

</script>

<template>
    <div class="about-section">
        <div class="about-image">
            <img src="/image/garden.jpg" lazy-loading="true" alt="Garden, image, jardin">
        </div>
        <div class="about-text">
            <div class="about-title">ABOUT</div>
            <Separator :width=100 :height=8></Separator>
            <div class="about-p">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus nam quasi soluta
                    consequatur,
                    eius suscipit earum laborum at in obcaecati laboriosam saepe enim magnam error exercitationem doloribus
                    consequuntur harum!</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.about-section {
    display: flex;
    flex-direction: row;
    background-color: #FDFDFD;
    width: 100%;
    height: 100%;
}

.about-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding-inline: 50px;
}

.about-title {
    font-size: 2em;
    
}

.about-p {
    text-align: justify;
    line-height: 30px;
}

.about-image {
    height: 800px;
    width: 50%;
    overflow: hidden;
}

.about-image img {
    object-fit: cover;
    object-position: 0 -200px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

}

@media (max-width : 500px) {
    .about-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about-image {
        height: 300px;
        width: 100%;
        /* overflow: hidden; */
    }

    .about-image img {
        width: 100%;
        height: 100%;

    }

    .about-title{
        padding-top: 30px;
    }
    .about-text{
        width: 90vw;
        margin: 0;
        padding: 0;
        /* padding-inline: 30px; */
    }
}
</style>