<template>
    <div>
        <router-link :to="{ name: 'event-show', params: { id: event.id } }">
            <h4>{{ event.title }}</h4>
            <BaseIcon name="users" />
            <p>{{ event.created_at }}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            event: Object
        }
    }
</script>

<style scoped>
    h4 {
        color: green;
    }
</style>