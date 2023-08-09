<template>
    <div class="contact-section">
        <div class="title">S U B S C R I B E</div>
        <div class="subtitle">
            Sign up to our newsletter
        </div>
        <div class="email-input">
            <input type="email" name="email" id="email" placeholder="Your email">
        </div>
        <div class="btn-submit">S U B M I T</div>
    </div>
</template>

<style scoped>
.contact-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 50%;
}
.title{
    font-size: 2em;
    margin-top: 40px;
}
.subtitle{
    margin-bottom: 20px;
}
.email-input{
    width: 70%;
    margin: 20px;
}
.email-input input{
    /* height: 60px; */
    
    width: 100%;
    background-color: #F1F3F0;
    border: 0;
    padding: 20px 20px;

}
.btn-submit{
    border: 2px solid black;
    padding: 10px;
    /* height: 60px; */
    width: 100px;
    text-align: center;

}

@media (max-width: 500px) {
    .email-input {
        width: 100%;
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .email-input input{
        width: 300px;
    }
    .title{
        font-size: 1.8em;
    }
    .contact-section{
        width: 90%;
    }
}
</style>