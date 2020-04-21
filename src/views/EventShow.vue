<template>
    <div>
        <h1>{{ event.title }}</h1>
        <h2>Showing event #{{ event.created_at }}</h2>
    
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    props: ['id'],
    created() {
        this.$store.dispatch('fetchEvent', this.id)
    },
    computed: mapState(['event'])
    
}

</script>