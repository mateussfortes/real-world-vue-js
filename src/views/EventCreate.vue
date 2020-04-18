<template>

    <div>
        <h1>Create Event</h1>

        <form @submit.prevent="createEvent">

            <h3>Name & describe your event</h3>

            <div class="field">
                <label>Title</label>
                <input v-model="event.title" type="text" placeholder="Add an event title"/>
            </div>

            <h3>When is your event?</h3>

            <div class="field">
                <label>Date</label>
                <datepicker v-model="event.date" placeholder="Select a date"/>
            </div>

            <input type="submit" class="button -fill-gradient" value="Submit"/>

        </form>
    </div>

</template>

<script>

    import Datepicker from 'vuejs-datepicker'

    export default {
        components: {
            Datepicker
        },
        data() {
            return {
                event: {}
            }
        },
        methods: {
            createEvent() {
                this.$store.dispatch('createEvent', this.event).then( () => {
                    this.$router.push({
                        name: 'event-list',
                    })
                    this.event = {}
                })
                .catch( () => {
                    console.log('Deu ruim');
                })
            }
        }
    } 

</script>