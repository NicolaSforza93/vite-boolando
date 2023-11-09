<script>
export default {

}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col">
                    <address>
                        <h1>Boolando s.r.l</h1>
                        <a href="#">Informazioni legali</a><a href="#">Informativa sulla privacy</a><a href="#">Diritto di
                            recesso</a>
                    </address>
                </div>
                <div class="col social">
                    <p>Trovaci anche su</p>
                    <ul>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-x-twitter" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-pinterest-p" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: black;
    padding: 20px;
    color: white;
}

.row {
    justify-content: space-between;
}

address {
    h1 {
        font-style: normal;
        font-size: 11px;
    }

    a {
        font-style: normal;
        color: white;
        font-size: 9px;
        margin-right: 5px;
    }
}

.social {
    text-align: center;

    p {
        font-size: 10px;
        padding: 0px 3px;
    }

    ul {
        display: flex;
        gap: 4px;

        .icon {
            font-size: 10px;
            background-color: white;
            color: black;
            padding: 1px 2px;
            border-radius: 3px;
        }
    }



}
</style>