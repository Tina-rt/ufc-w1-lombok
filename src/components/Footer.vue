<template>
    <div class="footer">
        <div class="social-links">
            <font-awesome-icon class="brand" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="brand" icon="fa-brands fa-facebook" />
            <font-awesome-icon class="brand" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="brand" icon="fa-brands fa-pinterest" />
        </div>
        <div class="nav">
            <div class="nav-item">A B O U T</div>
            <div class="nav-item">A R T I C L E S</div>
            <div class="nav-item">S U B S C R I B E</div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 100px 50px;
}



.nav {
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-around;
}

.nav-item{
    font-size: 20px;
    margin-inline: 20px;
}

.social-links {
    display: flex;
    flex-direction: row;

}

.social-links .brand {
    margin-inline: 5px;
    background-color: #50514C;
    color: white;
    padding: 10px;
    border-radius: 50%;
    font-size: 30px;
}

@media (max-width : 1000px) {
    .footer {
        flex-direction: column-reverse;
    }

    .nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nav-item{
        padding: 20px;
        width: max-content;
    }
    .social-links{
        margin: 20px;
    }
}
</style>