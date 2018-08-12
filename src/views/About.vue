<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
      <calendar title="title" v-model="value"></calendar>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Calendar  } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Calendar
  }
}
</script>