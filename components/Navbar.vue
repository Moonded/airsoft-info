<template>
    <!-- NAVBAR ROOT -->
      <div class="navbar_root h-14 top-0 sticky z-50 bg-opacity-50 bg-black">
      <!-- LogoText -->
      <div class="text-white bebas-regular text-6xl ml-2 inline-block">ASI</div>

      <!-- Darkmode Toggle -->
      <!-- <div class="mt-4 right-0 absolute inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input type="checkbox" name="toggle" id="darkmodetoggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
        <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer "></label>
      </div> -->

      <div class=" navbar flex text-2xl bebas-regular content-center justify-center w-full -mt-12 ">

          <!-- NAVBAR DESKTOP -->
        <div class="navbar-desktop hidden sm:block">
          <a href="/#" class="text-white px-1">Home</a>
          <a href="/#explanation" class="text-white px-1">About</a>
          <a href="/#rules" class="text-white px-1">Rules</a>
          <a href="/#parental" class="text-white px-1">Parental</a>
        </div>

          <!-- NAVBAR MOBILE -->
        <div class="navbar-mobile block sm:hidden">
          <div class="flex content-center justify-center" id="menutoggle">
            <span class="text-white">Menu</span>
            <img class="filter -mt-2 -ml-2 h-12 invert" src="img/dropdown.svg" />
          </div>
          <div class="-mt-2 content-center hidden justify-center bg-black rounded" id="menu">
            <div class="grid grid-cols-1">
              <a href="/#" class="block text-white px-1">Home</a>
              <a href="/#explanation" class="block text-white px-1">About</a>
              <a href="/#rules" class="block text-white px-1">Rules</a>
              <a href="/#parental" class="block text-white px-1">Parental</a>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>