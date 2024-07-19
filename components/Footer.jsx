import React from 'react'

function Footer() {
  return (
    <>
    <footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-black text-white">
    <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12 bg-black" >
        <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
          Ne perdez plus votre temps?<br/> <span>Commandez votre chauffeur dès maintenant!</span>
        </h2>
        <a class="text-black mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-white rounded-full shadow-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            href="#">Réservez dès maintenant</a>
        <div class="mt-14 xl:mt-20">
            <nav class="flex flex-wrap justify-center text-lg font-medium">
                <div class="px-5 py-2"><a href="#">Accueil</a></div>
                <div class="px-5 py-2"><a href="#">Procédure</a></div>
                <div class="px-5 py-2"><a href="#">Privacy</a></div>
                <div class="px-5 py-2"><a href="#">Terms</a></div>
                <div class="px-5 py-2"><a href="#">Twitter</a></div>
            </nav>
            <p class="mt-7 text-base">©2024 ODigital</p>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer