<template>
    <v-container fluid grid-list-xl>
        <v-layout row justify-space-between>

            <v-flex xs12>
                <v-card color="blue" class="white--text">
                    <v-layout row>
                        <v-flex xs10 pa-0 ma-0>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Device</div>
                                    <div>description</div>
                                    
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs2 align-center >
                            <v-btn class="forget-btn">
                                forget
                            </v-btn>
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


export default {
  name: 'DeviceItem',
  props: {
    
  },
  components: {
    // CircleNav
  }
}
</script>

<style scoped>
.devise-card {

    width:100%;
}

.forget-btn {
    float: right;
}
</style>