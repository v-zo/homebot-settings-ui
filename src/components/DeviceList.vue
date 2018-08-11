<template>
  <v-layout row wrap>

    <v-flex xs12>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">
            {{ item.header }}
          </v-subheader>

          <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>

          <v-list-tile v-else :key="item.title" avatar>
            <v-list-tile-avatar>
              <v-icon large align-end>{{item.icon}}</v-icon >
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>

            <v-btn fab right 
             
            small
            flat
            ripple
            >
              <v-icon>block</v-icon>
            </v-btn>

          </v-list-tile>
        </template>
      </v-list>
      <div class="buttons-block">
        <v-btn>Discover</v-btn>
        <v-btn>Forget All</v-btn>
      </div>
    </v-flex>

  </v-layout>
</template>

<script>
import DeviceItem from './DeviceItem'

export default {
  name: 'DeviceList',
  data () {
    return {
      items: [
        { header: 'Devices' },
        {
          icon: 'phonelink',
          title: 'voice',
          subtitle: "<span class='text--primary'></span> eWeLink Wifi Device"
        },
        { divider: true, inset: true },
        {
          icon: 'phonelink',
          title: 'relay (offline)',
          subtitle: "<span class='text--primary'></span> eWeLink Wifi Device"
        },
        { divider: true, inset: true },
        {
          icon: 'phonelink',
          title: 'temperature',
          subtitle: "<span class='text--primary'></span> eWeLink Wifi Device"
        }
      ]
    }
  },
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
