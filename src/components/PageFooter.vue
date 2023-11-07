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
                        <li><a class="icon" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="icon" href="#"><i class="fa fa-facebook-f"></i></a></li>
                        <li><a class="icon" href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a class="icon" href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a class="icon" href="#"><i class="fa fa-youtube-play"></i></a></li>
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
        font-size: 10px;
    }

    a {
        font-style: normal;
        color: white;
        font-size: 8px;
        margin-right: 5px;
    }
}

.social {
    p {
        font-size: 8px;
        padding: 0px 3px;
    }

    ul {
        display: flex;

        .icon {
            background-color: white;
            color: black;
            padding: 0px 1px;
        }
    }



}
</style>