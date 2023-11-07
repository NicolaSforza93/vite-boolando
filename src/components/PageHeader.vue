<script>
export default {
    data() {
        return {
            gender: ['Donna', 'Uomo', 'Bambini']
        }
    }
}
</script>

<template>
    <header>
        <nav class="container">
            <div class="row">
                <div class="col gender">
                    <ul>
                        <li v-for="item in gender" :key="item"><a href="#">{{ item }}</a></li>
                    </ul>
                </div>
                <div class="col"><img class="logo" src="/boolean-logo.png" alt="Logo"></div>
                <div class="col">
                    <span class="icon"><font-awesome-icon icon="fa-regular fa-user" /></span>
                    <span class="icon"><font-awesome-icon icon="fa-regular fa-heart" /></span>
                    <span class="icon"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></span>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    background-color: $header-color;
    padding: 10px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
}

.logo {
    width: 80px;
    display: block;
}

.gender {

    ul {
        display: flex;

        a {
            font-size: 12px;
            padding: 4px;
            color: white;
        }
    }
}

.row {
    justify-content: space-between;
}

.icon {
    color: white;
    padding: 2px;
    font-size: 10px;
}
</style>

