<template>
    <div>
        <router-link :to="{ name: 'event-show', params: { id: '1' } }">
            <h4>{{ event.title }}</h4>
            <p>{{ event.date }}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                event: {
                    id: 1,
                    title: 'Park Cleanup',
                    date: '28/11/1991'
                }
            }
        }
    }
</script>

<style scoped>
    h4 {
        color: green;
    }
</style>