<template>
    <div class="user">
        <Header/>
        <PizzasDisplay/>
        <slot/>
    </div>
</template>
<style>
.user{
   margin-inline: auto;
    max-width: 1200px;
}
</style>