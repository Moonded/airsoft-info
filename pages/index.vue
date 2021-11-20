<template>
  <div class="bebas-regular">
    <Fonts />
    <!-- Navbar -->
    <Navbar />
    <!-- Header Background with Text -->
    <div class="z-0 -mt-14" id='backdrop'>
      <div class="content_background_01 h-80 overflow-hidden bg-center bg-bg1">
        <div class="header_text flex justify-center content-center text-white  ">
          <div class="absolute mt-24 filter drop-shadow-2xl">
            <div class="text-5xl sm:text-6xl flex justify-center">
              AIRSOFT Information
            </div>
            <div class="text-3xl sm:text-4xl flex justify-center">
              Inform Yourself about the game
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
    <div class="content_root" id="text-n">

      <section class="pt-16" id="explanation">
            <div class="  text-5xl sm:text-6xl flex w-full justify-center content-center mb-6">
              <h1>{{ basic.title }}</h1>
            </div>
            <div class="flex w-full justify-center content-center">
              <div class="explanation roboto-light w-3/4 sm:w-3/6">
                <nuxt-content :document="basic" />
              </div>
            </div>
      </section>

      <section class="pt-16" id="rules">
            <div class="  text-5xl sm:text-6xl flex w-full justify-center content-center mb-6">
              <h1>{{ rules.title }}</h1>
            </div>
            <div class="flex w-full justify-center content-center">
              <div class="explanation roboto-light w-3/4 sm:w-3/6">
                <nuxt-content :document="rules" />
              </div>
            </div>
      </section>

      <section class="pt-16" id="parental">
            <div class="  text-5xl sm:text-6xl flex w-full justify-center content-center mb-6">
              <h1>{{ parental.title }}</h1>
            </div>
            <div class="flex w-full justify-center content-center">
              <div class="explanation roboto-light w-3/4 sm:w-3/6">
                <nuxt-content :document="parental" />
              </div>
            </div>
      </section>

      

    </div>

    <Foot />
    <Warning />

  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const basic = await $content('articles/basic').fetch()
    const parental = await $content('articles/parental').fetch()
    const rules = await $content('articles/rules').fetch()

    return {
      basic,
      parental,
      rules
    }
  }
}
</script>
