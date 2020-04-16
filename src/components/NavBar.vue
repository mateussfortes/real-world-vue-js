<template>

    <div>
        <router-link to="/">Home</router-link>
        <nav>
            <router-link :to="{ name: 'event-list' }">List</router-link> |
            <router-link :to="{ name: 'event-create' }">Create Event</router-link>
        </nav>    
    </div>

</template>

<script>
    export default {
    
    }
</script>