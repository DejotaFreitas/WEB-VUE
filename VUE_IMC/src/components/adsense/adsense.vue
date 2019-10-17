<template>
  <ins class="adsbygoogle"
    :data-ad-client="adClient"
    :data-ad-slot="adSlot"
    :data-ad-format="adFormat"
    :style="adStyle"
    :data-full-width-responsive="dataFullWidthResponsive"></ins>
</template>

<script>
export default {
  props: {
    adClient: {
      type: String,
      required: true
    },
    adSlot: {
      type: String,
      required: true
    },
    adFormat: {
      type: String,
      required: false,
      default: 'auto'
    },
    adStyle: {
      type: String,
      required: false,
      default: 'display: block'
    },
    dataFullWidthResponsive: {
      type: String,
      required: false,
      default: 'true'
    }
  },
  mounted() {
    (adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>
