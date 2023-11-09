<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card">
        <figure class="card image">
            <img :src="item.frontImage" alt="Uomo Levi's T-shirt">
            <img class="overlay" :src="item.backImage" alt="Uomo Levi's giacca">
            <span class="heart-icon" :class="{ 'favorite': item.isInFavorites }" @click="$emit('toggle', item)">
                <font-awesome-icon icon="fa-solid fa-heart" />
            </span>
            <span class="info" @click="$emit('show', item)">
                <font-awesome-icon icon="fa-solid fa-circle-info" />
            </span>
            <ul class="tags">
                <li v-for="(badge, index) in item.badges" :key="index" :class="['tag', badge.type]">
                    <span>{{ badge.value }}</span>
                </li>
            </ul>
        </figure>

        <div class="details">
            <p class="brand">{{ item.brand }}</p>
            <h1>{{ item.name }}</h1>
            <p>
                <span class="price">{{ item.price }} &euro;</span>
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
    font-size: 18px;
    background-color: white;
    padding: 2px 7px;
    cursor: pointer;
}

.favorite {
    color: red;
}

.info {
    position: absolute;
    top: 5px;
    left: 5px;
    color: rgba(128, 128, 128, 0.559);
    display: block;
    font-size: 16px;
    cursor: pointer;
}

.tags {
    display: flex;
    gap: 4px;
    position: absolute;
    left: 0;
    bottom: 25px;
}

.tag {
    line-height: 22px;
    padding: 0 8px;
    font-size: 9px;
    color: white;
    white-space: nowrap;
    background-color: green;
}

.discount {
    background-color: red;
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
        background-color: transparent;
    }
}

.details {
    font-size: 10px;

    h1 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 10px;
    }
}

.price {
    color: red;
    font-weight: 700;
    margin-right: 5px;
}

.price-crossed {
    text-decoration: line-through;
}
</style>