<template>
    <v-container fluid grid-list-xl >
        <v-layout row justify-space-between>

            <v-flex xs12  my-0 py-0>
                <v-card color="blue darken-3" class="white--text" >
                    <v-layout row>
                        <v-flex xs10 py-0 my-0>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Device</div>
                                    <div>description</div>
                                    
                                </div>
                            </v-card-title>
                        </v-flex >
                        <v-flex xs2>
                            <div class="icon">
                                <v-icon large align-end color="white">phonelink</v-icon >
                            </div>
                            <!-- <menu-icon class="forget-btn white--text">
                                forget
                            </menu-icon> -->
                        </v-flex>
                    </v-layout>
                    <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                        (status)
                        <v-spacer></v-spacer>
                        forget
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
// import MenuIcon from "vue-material-design-icons/menu.vue"

export default {
  name: 'DeviceItem',
  props: {
    
  },
  components: {
    // MenuIcon
  }
}
</script>

<style scoped>

.icon {
    height: 100%;
    text-align: e;
    vertical-align: middle !important;
}

v-icon {
    
}

</style>