import Vue from "vue";
import Vuex from "vuex";
import EventService from '@/services/EventService.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    lastPage: 0,
    event: {},
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_LAST_PAGE(state, lastPage) {
      state.lastPage = lastPage
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent({commit}, event) {
      return EventService.postEvent(event).then( () => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page}) {
      EventService.getEvents(perPage, page)
      .then(response => {
          commit('SET_EVENTS', response.data.data)
          commit('SET_LAST_PAGE', response.data.last_page)  
      })
      .catch(error => {
          console.log('There was an error:' + error.response)
      })
    },
    fetchEvent({ commit }, id) {
      EventService.getEvent(id)
      .then(response => {
          commit('SET_EVENT', response.data)
      })
      .catch(error => {
          console.log('There was an error:' + error.response)
      })
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
});
