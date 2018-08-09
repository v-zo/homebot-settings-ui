<template>
    <v-layout row wrap>
      <v-flex xs12>
        <v-list >
            <DeviceItem/>
            <DeviceItem/>
        </v-list>
      </v-flex>
      <div class="buttons-block">
        <v-btn>Discover</v-btn>
        <v-btn>Forget All</v-btn>
      </div>
    </v-layout>
</template>

<script>
import DeviceItem from './DeviceItem'

export default {
  name: 'DeviceList',
  props: {
    
  },
  components: {
    DeviceItem
  }
}
</script>

<style scoped>
.buttons-block {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    
}
</style>
