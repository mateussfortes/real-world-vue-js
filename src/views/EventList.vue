<template>
    <div>
        
        <h1>Events Listing</h1>

        <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>

        <template v-if="page != 1">
            <router-link :to="{ name: 'event-list', query: {page: page - 1} }" rel="Prev">Anterior</router-link> | 
        </template>
        <template v-if="page < lastPage">
            <router-link :to="{ name: 'event-list', query: {page: page + 1} }" rel="Next">Próximo</router-link>
        </template>
    </div>
</template>

<script>
    import EventCard from '@/components/EventCard.vue'
    import { mapState } from 'vuex'

    export default {
        components: {
            EventCard
        },
        created()
        {
            this.$store.dispatch('fetchEvents', {
                perPage: 5,
                page: this.page
            })
        },
        computed: {
            page() {
                return parseInt(this.$route.query.page) || 1
            },
            ...mapState(['events', 'lastPage'])
        }
    }
</script>