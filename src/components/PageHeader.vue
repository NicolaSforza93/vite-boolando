<script>
export default {
    data() {
        return {
            gender: ['Donna', 'Uomo', 'Bambini'],
            navIcons: ['fa-regular fa-user', 'fa-regular fa-heart', 'fa-solid fa-bag-shopping']
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
                        <li v-for="(item, index) in gender" :key="index"><a href="#">{{ item }}</a></li>
                    </ul>
                </div>
                <div class="col"><img class="logo" src="/boolean-logo.png" alt="Logo"></div>
                <div class="col">
                    <ul class="nav-icons">
                        <li v-for="(icon, index) in navIcons" :key="index"><a href="#"><font-awesome-icon
                                    :icon="icon" /></a></li>
                    </ul>
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
            font-weight: 500;
            padding: 4px;
            color: white;
        }
    }
}

.row {
    justify-content: space-between;
    align-items: center;
}

.nav-icons {
    display: flex;
    gap: 4px;

    a {
        color: white;
        font-size: 10px;
    }

}
</style>

