<template >
  <section class="h-[100vh]   ">
    <div class="bg-black text-white   ">

      <div class="image404-container    ">
        <img src="images/IMG-2537.jpg" alt="Image de la page 404">
        <h1 class="text-[60px]    hidden md:flex z-111 text-white absolute top-[28%]  leading-3 left-[10%] ">Oups...</h1>
        <h2 class="  text-lg   hidden md:flex z-111 text-white absolute top-[38%] tracking-wide left-[10%]">Je finis mon
          café et
          j'arrive !
        </h2>
      </div>

      <div class="text-center  md:hidden ">


        <h1 class="text-[60px]  z-111 text-white      ">Oups...</h1>
        <h2 class="  text-lg z-111 text-white   tracking-wide ">Je finis mon café et
          j'arrive !
        </h2>

      </div>

      <!--   
      <div class="-mt-20 flex justify-center">
        <RouterLink to="/">
          <button
            class="h-12 border-2 border-black px-12 text-base text-black transition-[color,box-shadow] duration-[400ms,450ms] hover:border-noir hover:text-noir hover:shadow-[inset_14rem_0_0_0] hover:shadow-white lg:text-lg">
            Accueil <i class="fa-regular fa-arrow-down-to-bracket text-white"></i>
          </button>
        </RouterLink>
      </div>

       -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Page404View ",
};
</script>
