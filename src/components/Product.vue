<script>
export default {
    data() {
        return
    }
}
</script>

<template>
    <div class="card">
        <figure class="card image">
            <img src="/1.webp" alt="Uomo Levi's T-shirt">
            <img class="overlay" src="/1b.webp" alt="Uomo Levi's giacca">
            <span class="heart-icon">&hearts;</span>
            <span class="discount">-50%</span>
            <span class="eco">Sostenibilità</span>
        </figure>

        <div class="details">
            <p class="brand">Levi's</p>
            <h1>RELAXED FIT TEE UNISEX</h1>
            <p>
                <span class="price">14,99 &euro;</span>
                <span class="price-crossed">29,99 &euro;</span>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    .image {
        position: relative;
    }
}

.heart-icon {
    position: absolute;
    top: 6px;
    right: 0;
    display: block;
    font-size: 20px;
    background-color: white;
    padding: 2px 7px;
}

.discount {
    position: absolute;
    bottom: 25px;
    display: block;
    font-size: 9px;
    padding: 4px 6px;
    background-color: red;
    color: white;
}

.eco {
    position: absolute;
    bottom: 25px;
    left: 34px;
    display: block;
    font-size: 9px;
    padding: 4px 6px;
    background-color: green;
    color: white;
}

.eco-two {
    position: absolute;
    bottom: 25px;
    display: block;
    font-size: 9px;
    padding: 4px 6px;
    background-color: green;
    color: white;
}


.overlay {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}

.card {
    &:hover .overlay {
        opacity: 1;
    }
}

.heart-icon {
    &:hover {
        color: red;
    }
}

.details {
    font-size: 10px;

    h1 {
        font-weight: 900;
        font-size: 10px;
    }
}

.price {
    color: red;
    font-weight: 900;
}

.price-crossed {
    text-decoration: line-through;
}
</style>