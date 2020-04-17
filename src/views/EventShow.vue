<template>
    <div>
        <h1>{{ event.title }}</h1>
        <h2>Showing event #{{ event.id }}</h2>
    
    </div>
</template>

<script>

import EventService from '@/services/EventService.js'

export default {
    props: ['id'],
    data() {
        return {
            event: {}
        }
    },
    created() {
        EventService.getEvent(this.id)
        .then(response => {
            this.event = response.data
        })
        .catch(error => {
            console.log('Theres an error: ', error.response)
        })
    }
}

</script>