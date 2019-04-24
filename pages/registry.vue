<template>
  <div>
    <v-layout justify-start column text-xs-center>
      <v-flex v-show="isMounted">
        <v-layout v-bind="layoutBinding">
          <v-flex
            v-for="(registry,index) in registries"
            :key="index"
            md4
            xs12
          >
            <RegistryCard :title="registry.Title" :logoComponent="registry.LogoComponent" :link="registry.Link"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import HappileeText from '~/components/HappileeText.vue'
import RegistryCard from '~/components/registry/RegistryCard.vue'
import AmazonLogo from '~/components/logos/AmazonLogo.vue';
import TargetLogo from '~/components/logos/TargetLogo.vue';

export default {
  components: {
    HappileeText,
    RegistryCard
  },
  data: function() {
    return {
      isMounted: false,
      registries: [{
        Title: 'Amazon',
        LogoComponent: AmazonLogo,
        Link: 'https://www.amazon.com/wedding/johanna-klay-kelvin-rodriguez-fort-worth-june-2019/registry/1QP19G9Z3N4H9'
      },
      {
        Title: 'Target',
        LogoComponent: TargetLogo,
        Link: 'https://www.target.com/gift-registry/giftgiver?registryId=6dd3156f4d4b437198dda6410afdd0cb&type=WEDDING'
      }]
    }
  },
  computed: {
    layoutBinding() {
      const isBig = this.isMounted
        ? this.$vuetify.breakpoint.mdAndUp
        : true

      const binding = {}

      if(isBig){
        binding.row = true;
        binding['justify-center'] = true;
        binding['align-start'] = true;
        binding['fill-height'] = true;
      } else {
        binding.column = true;
        binding['justify-start'] = true;
        binding['align-space-around'] = true;
      }

      return binding;
    }
  },
  mounted(){
    this.isMounted = true;
  }
}
</script>
