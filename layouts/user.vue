<template>
    <div class="user" ref="userLayout">

        <slot />

    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
html {
    scrollbar-width: none;
}

body {
    color: black;
    position: relative;
}

.user,
.admin {
    scrollbar-width: none;
    background-image: url('@/public/backgrounds/rock.jpg');
    background-size: contain;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.stopScroll {
    height: 100vh;
    overflow-y: hidden;
}

.bagClass {
    background-color: transparent;
    display: block;
    position: absolute;
    margin-left: auto;
    top: 16svh;
    right: 0px;
    transition: 0.25s;

    &:hover {
        transform: scale(1.1);
        transition: 0.25s;

    }

    .counter {
        position: sticky;
        background-color: transparent;
        width: 40px;

        &__number {
            font-size: 14px;
            position: absolute;
            top: 15px;
            right: 15px;
            color: white;
        }

        img {
            width: 120px;
        }
    }
}

@media screen and (max-width : 720px) {
    #__nuxt {
        background-color: black;
    }

    .user {
        background-color: black;
        margin-inline: auto;
        width: 320px;
    }

    .filterCategory {
        flex-wrap: wrap;
    }

    .pizzaDisplay__table {
        width: 320px;

    }

    .pizza {
        width: 320px;
        grid-template: 1fr / 250px;
        justify-content: center;
    }

    .wraper__flex {
        width: 100vw;
        justify-content: center;
    }

    .pizzaDetails {
        width: 320px;
        height: fit-content;

        * {
            grid-column: 1;
        }

        .diametr {
            grid-row: 1;
        }

        .pizzaDetails__img {
            width: 150px;
            height: auto;
            grid-row: 2;
        }

        grid-template: 35px 150px 30px minmax(30px, 100px) 600px 30px / 320px;

        &__name {
            grid-row: 3;
        }

        &__description {
            grid-row: 4;
        }

        .toppings {
            grid-row: 5;
            width: 300px;
            overflow: visible;

            .topping {
                width: 100px;
            }
        }

        &__submit {
            grid-row: 6;
        }
    }

    .cart:deep {
        left: -100%;
    }
}
</style>
