<template>
  <YDMainBanner />
  <YDMainEvent />
  <YDMainInsta />
  <YDMainRec />
</template>

<script>
import YDMainBanner from '../components/YDMainBanner.vue';
import YDMainEvent from '../components/YDMainEvent.vue';
import YDMainInsta from '../components/YDMainInsta.vue';
import YDMainRec from '../components/YDMainRec.vue';

export default {
  components: {
    YDMainBanner,
    YDMainEvent,
    YDMainInsta,
    YDMainRec,
  }

}
</script>

<style>

</style>