<template>
    <div class="user">
        <Header/>
        <PizzasDisplay/>
        <slot/>
    </div>
</template>
<script setup lang="ts">
</script>
<style>
.user{
   margin-inline: auto;
    max-width: 1200px;
}
</style>