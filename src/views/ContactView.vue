<template>
  <div class="ml-9 mt-20 flex flex-col">
    <div class="z-20 w-1/2">
      <h1 class="stroke-custom text-4xl md:text-6xl lg:text-[5.313rem]">
        COMMENÇONS <br />
        UN <br />
        PROJET
      </h1>
    </div>

    <div class="z-20 mt-7 w-[80%]  lg:w-1/3">
      <p class="font-montserrat text-lg lg:text-xl font-medium text-white">
        Vous recherchez un intégrateur front-end pour l’un de vos projet ? <br />
        N’hesitez pas a me contacter.
      </p>
    </div>
    <a
      href="https://www.google.ca/maps/place/25300+Doubs,+France/@48.5819728,3.2019397,5.67z/data=!4m5!3m4!1s0x478dbd2dbd17c7e3:0x7bd189a64a80664b!8m2!3d46.9276!4d6.349001?hl=fr">
      <img class="lg:w[75vw] absolute top-[15.4vh] right-0 z-10 w-[65vw]" src="/public/images/map.webp"
        alt="map Doubs " />
    </a>


    <div class="mt-[11.6vh] ml-[2vh]  mr-[2vh] md:ml-[7.6vh] lg:ml-[7.6vh] xl:ml-[11.6vh]">
      <div class="ml-[6vw]">
        <h2
          class="lg:mt-[150px] mt-20 font-montserrat text-5xl font-medium text-white   md:text-6xl lg:text-8xl xl:mt-[300px] 2xl:mt-[300px]">
          Contact
        </h2>



        <form action="https://api.web3forms.com/submit" class="mr-auto mt-7 ml-auto w-[90%] max-w-screen-xl lg:mt-[67px]"
          method="POST">
          <input type="hidden" name="access_key" value="60e7cf85-4b5c-4ee1-ab1f-6cf8fd02b92b" />

          <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <input type="text" placeholder="Nom "
                class="form-control mt-2 mb-3 block w-full py-3 px-4 leading-tight text-white" name="nom" required />
            </div>

            <div class="w-full px-3 md:w-1/2">
              <input type="email" class="form-control mt-2 mb-3 block w-full py-3 px-4 leading-tight text-white"
                placeholder="Email " name="email" required />
            </div>
          </div>

          <div class="-mx-3 mb-2 flex flex-wrap">
            <textarea placeholder="Détailles de projet " rows="1" class="form-control mx-3 block w-full p-2.5 text-white"
              name="message" required></textarea>
          </div>

          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <button
            class="mt-[8vh] h-10 border-2 border-white px-10 text-lg text-white transition-[color,box-shadow] duration-[400ms,450ms] hover:border-noir hover:text-noir hover:shadow-[inset_14rem_0_0_0] hover:shadow-white"
            type="submit">
            Envoyer
          </button>
          <div class="mt:my-0 mt-10">
            <div class="mx-5 my-3 inline-block md:mx-[5%] md:my-0">
              <a class="font-bold text-white" href="mailto:valentinsa0701@gmail.com">
                <p class="font-bold text-white">Email <span
                    class="font-light text-white">valentinsaraiva.pro@gmail.com</span></p>
              </a>
            </div>

            <div class="mx-5 my-3 inline-block md:mx-[5%]">
              <a class="font-bold text-white" href="tel:+33638881975">
                <p class="font-bold text-white">Téléphone <span class="font-light text-white">+33 6 38 88 19 75</span></p>
              </a>
            </div>

            <div class="mx-5 my-3 inline-block md:mx-[5%]">
              <a class="font-bold text-white"
                href="https://www.google.ca/maps/place/25300+Doubs,+France/@46.9321769,6.3445314,14z/data=!3m1!4b1!4m5!3m4!1s0x478dbd2dbd17c7e3:0x7bd189a64a80664b!8m2!3d46.9276!4d6.349001?hl=fr">
                <p class="font-bold text-white">Adresse <span class="font-light text-white">Doubs, France</span></p>
              </a>
            </div>
          </div>
        </form>


      </div>
    </div>



    <hr class=" mx-auto lg:ml-[30%] mt-24 flex h-1 lg:w-2/3 w-[90%] mb-8 lg:mb-3  border-t-[#808080]" />
    <div class="flex w-full flex-col mt-10  md:mt-0 lg:items-end">
      <!-- ANCIEN  w-[90%] lg:w-[60%] lg:columns-2 lg:pt-10-->
      <!-- ACTUEL flex w-64 gap-14  -->


      <div class=" w-[80%] md:w-[30%]  lg:columns-2 lg:pt-10 ">
        <ul class="flex flex-col">
          <li class="hover-underline-animation py-2 ">
            <router-link to="/">Accueil</router-link>
          </li>
          <li class="hover-underline-animation py-2 ">
            <router-link to="/apropos">À propos </router-link>
          </li>
          <li class="hover-underline-animation py-2 ">
            <router-link to="/">Projets</router-link>
          </li>


        </ul>
        <ul class="flex flex-col">
          <a href="../public/document/CV.pdf" download>
            <li class="py-2 text-white">CV</li>
          </a>
          <li class="hover-underline-animation py-2 ">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>

    </div>


    <div class="flex mb-5 md:mb-5 ml-0 lg:ml-[70%]  xl:ml-[70%]  md:w-[30%] lg:w-[30%] xl:w-[30%]    ">

      <ul class=" mt-11 flex w-[80%] flex-row  justify-between">
        <a href="https://github.com/ValentinSaraiva-MMI" target="_blank">
          <li>
            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.7742 0C6.16396 0 0 5.86845 0 13.1139C0 18.9168 3.94287 23.8181 9.41812 25.5556C10.1068 25.6704 10.3651 25.277 10.3651 24.9327C10.3651 24.6213 10.3479 23.5886 10.3479 22.4903C6.88711 23.0968 5.99179 21.6871 5.7163 20.9494C5.56134 20.5724 4.88985 19.4085 4.30444 19.0971C3.82235 18.8512 3.13364 18.2447 4.28723 18.2283C5.37195 18.2119 6.14675 19.179 6.40501 19.5724C7.64469 21.5559 9.62474 20.9986 10.4168 20.6543C10.5373 19.8019 10.8989 19.2282 11.2949 18.9004C8.2301 18.5725 5.02759 17.4414 5.02759 12.4254C5.02759 10.9993 5.56134 9.81901 6.43945 8.90104C6.30171 8.57319 5.81961 7.22902 6.57719 5.42586C6.57719 5.42586 7.73078 5.08162 10.3651 6.77003C11.467 6.47497 12.6378 6.32744 13.8087 6.32744C14.9795 6.32744 16.1503 6.47497 17.2522 6.77003C19.8865 5.06523 21.0401 5.42586 21.0401 5.42586C21.7977 7.22902 21.3156 8.57319 21.1779 8.90104C22.056 9.81901 22.5897 10.9829 22.5897 12.4254C22.5897 17.4578 19.37 18.5725 16.3052 18.9004C16.8046 19.3102 17.235 20.097 17.235 21.3264C17.235 23.0804 17.2178 24.4901 17.2178 24.9327C17.2178 25.277 17.476 25.6868 18.1648 25.5556C23.6056 23.8181 27.5484 18.9004 27.5484 13.1139C27.5484 5.86845 21.3845 0 13.7742 0Z"
                fill="white" />
            </svg>
          </li>
        </a>
        <a href="https://www.instagram.com/valentin_saraiva/" target="_blank">
          <li>
            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.7823 2.93205C17.4648 2.93205 17.9008 2.94735 19.3491 3.00855C20.695 3.06465 21.4218 3.27884 21.9063 3.45733C22.547 3.69192 23.01 3.97751 23.4891 4.43139C23.9737 4.89037 24.2698 5.32385 24.5174 5.93072C24.7058 6.3897 24.932 7.08327 24.9912 8.35312C25.0558 9.73005 25.0719 10.1431 25.0719 13.6263C25.0719 17.1145 25.0558 17.5276 24.9912 18.8995C24.932 20.1744 24.7058 20.8629 24.5174 21.3218C24.2698 21.9287 23.9683 22.3673 23.4891 22.8212C23.0046 23.2802 22.547 23.5607 21.9063 23.7952C21.4218 23.9737 20.6896 24.1879 19.3491 24.244C17.8955 24.3052 17.4594 24.3205 13.7823 24.3205C10.0998 24.3205 9.66376 24.3052 8.21554 24.244C6.86961 24.1879 6.14281 23.9737 5.65828 23.7952C5.01762 23.5607 4.55462 23.2751 4.07547 22.8212C3.59093 22.3622 3.29483 21.9287 3.04718 21.3218C2.85875 20.8629 2.63263 20.1693 2.57341 18.8995C2.50881 17.5225 2.49266 17.1094 2.49266 13.6263C2.49266 10.138 2.50881 9.72495 2.57341 8.35312C2.63263 7.07817 2.85875 6.3897 3.04718 5.93072C3.29483 5.32385 3.59632 4.88527 4.07547 4.43139C4.56 3.97241 5.01762 3.69192 5.65828 3.45733C6.14281 3.27884 6.875 3.06465 8.21554 3.00855C9.66376 2.94735 10.0998 2.93205 13.7823 2.93205ZM13.7823 0.581055C10.0406 0.581055 9.57224 0.596354 8.10248 0.657551C6.63811 0.718749 5.63136 0.943139 4.7592 1.26442C3.84935 1.60101 3.07948 2.04469 2.315 2.77396C1.54512 3.49813 1.07674 4.2274 0.721417 5.08416C0.382243 5.91542 0.14536 6.86398 0.0807557 8.25112C0.0161511 9.64846 0 10.0921 0 13.6365C0 17.1808 0.0161511 17.6245 0.0807557 19.0168C0.14536 20.4039 0.382243 21.3575 0.721417 22.1837C1.07674 23.0456 1.54512 23.7748 2.315 24.499C3.07948 25.2232 3.84935 25.672 4.75382 26.0034C5.63136 26.3247 6.63273 26.5491 8.0971 26.6103C9.56685 26.6715 10.0352 26.6868 13.7769 26.6868C17.5186 26.6868 17.987 26.6715 19.4567 26.6103C20.9211 26.5491 21.9279 26.3247 22.8 26.0034C23.7045 25.672 24.4743 25.2232 25.2388 24.499C26.0033 23.7748 26.4771 23.0456 26.827 22.1888C27.1662 21.3575 27.4031 20.409 27.4677 19.0219C27.5323 17.6296 27.5484 17.1859 27.5484 13.6416C27.5484 10.0972 27.5323 9.65356 27.4677 8.26132C27.4031 6.87418 27.1662 5.92052 26.827 5.09436C26.4879 4.2274 26.0195 3.49813 25.2496 2.77396C24.4851 2.04979 23.7152 1.60101 22.8108 1.26952C21.9332 0.948239 20.9319 0.723848 19.4675 0.662651C17.9924 0.596354 17.524 0.581055 13.7823 0.581055Z"
                fill="white" />
              <path
                d="M13.7822 6.93066C9.87364 6.93066 6.70264 9.93443 6.70264 13.6369C6.70264 17.3393 9.87364 20.3431 13.7822 20.3431C17.6908 20.3431 20.8618 17.3393 20.8618 13.6369C20.8618 9.93443 17.6908 6.93066 13.7822 6.93066ZM13.7822 17.987C11.2465 17.987 9.18991 16.0389 9.18991 13.6369C9.18991 11.2349 11.2465 9.28676 13.7822 9.28676C16.3179 9.28676 18.3745 11.2349 18.3745 13.6369C18.3745 16.0389 16.3179 17.987 13.7822 17.987Z"
                fill="white" />
              <path
                d="M22.7946 6.66524C22.7946 7.53221 22.0517 8.23088 21.1418 8.23088C20.2266 8.23088 19.489 7.52711 19.489 6.66524C19.489 5.79828 20.232 5.09961 21.1418 5.09961C22.0517 5.09961 22.7946 5.80338 22.7946 6.66524Z"
                fill="white" />
            </svg>
          </li>
        </a>


        <a href="https://www.linkedin.com/in/valentin-saraiva-mmi/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
          target="_blank">
          <li>
            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.5092 0.686523H2.03385C0.909314 0.686523 0 1.52782 0 2.56797V24.9057C0 25.9459 0.909314 26.7923 2.03385 26.7923H25.5092C26.6338 26.7923 27.5484 25.9459 27.5484 24.9108V2.56797C27.5484 1.52782 26.6338 0.686523 25.5092 0.686523ZM8.17306 22.9325H4.08384V10.4711H8.17306V22.9325ZM6.12845 8.77319C4.8156 8.77319 3.75563 7.76873 3.75563 6.52973C3.75563 5.29072 4.8156 4.28626 6.12845 4.28626C7.43593 4.28626 8.4959 5.29072 8.4959 6.52973C8.4959 7.76363 7.43593 8.77319 6.12845 8.77319ZM23.4754 22.9325H19.3915V16.8752C19.3915 15.4322 19.3646 13.5711 17.2662 13.5711C15.1409 13.5711 14.818 15.1467 14.818 16.7732V22.9325H10.7396V10.4711H14.6566V12.1741H14.7104C15.2539 11.1951 16.5883 10.1601 18.5737 10.1601C22.7113 10.1601 23.4754 12.74 23.4754 16.095V22.9325Z"
                fill="white" />
            </svg>
          </li>
        </a>

        <a href="https://www.behance.net/valentinsaraiva
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
          target="_blank">
          <li>
            <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.7771 11.0977C16.8025 10.1296 17.8599 8.6646 17.8599 6.38435C17.8599 1.88753 14.5096 0.791992 10.6433 0.791992H0V23.3652H10.9427C15.0446 23.3652 18.8981 21.3971 18.8981 16.8111C18.8981 13.9767 17.5541 11.8812 14.7771 11.0977ZM4.96178 4.64549H9.61783C11.4076 4.64549 13.0191 5.14868 13.0191 7.22511C13.0191 9.14231 11.7643 9.91301 9.99363 9.91301H4.96178V4.64549ZM10.2675 19.5308H4.96178V13.3143H10.3694C12.5541 13.3143 13.9363 14.2251 13.9363 16.5372C13.9363 18.8175 12.2866 19.5308 10.2675 19.5308ZM33.1019 4.19964H23.949V1.97671H33.1019V4.19964ZM36.6879 15.4289C36.6879 10.5945 33.8599 6.56269 28.7325 6.56269C23.7516 6.56269 20.3694 10.3079 20.3694 15.2124C20.3694 20.3015 23.5732 23.792 28.7325 23.792C32.6369 23.792 35.1656 22.034 36.3822 18.2952H32.4204C31.9936 19.6901 30.2357 20.4289 28.8726 20.4289C26.242 20.4289 24.8599 18.8875 24.8599 16.2697H36.6497C36.6688 16.0022 36.6879 15.7156 36.6879 15.4289ZM24.8662 13.4417C25.0127 11.2952 26.4395 9.95123 28.5924 9.95123C30.8471 9.95123 31.9809 11.2761 32.172 13.4417H24.8662Z"
                fill="white" />
            </svg>
          </li>
        </a>


      </ul>



    </div>


    <RouterLink class="my-auto" to="/">
      <logoValentin class=" w-12 md:ml-5 md:w-14 " />
    </RouterLink>
    <p class="text-center font-montserrat text-base font-medium text-white">© Valentin Saraiva. 2022</p>
  </div>
</template>

<script>
import LogoValentin from "../components/icons/Logo.vue";

export default {
  components: {
    LogoValentin,
  },
  name: "ContactView ",
};
</script>
