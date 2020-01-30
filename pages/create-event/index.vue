<template>
  <div class="create-event">
    <button @click="create(events)">Create Event</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      events: [
        {
          name: 'One',
          description: 'This is Event One description',
          price: 100
        },
        {
          name: 'Two',
          description: 'This is Event Two description',
          price: 200
        },
        {
          name: 'Three',
          description: 'This is Event Three description',
          price: 300
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      create: 'events/postEvent'
    })
  }
}
</script>
