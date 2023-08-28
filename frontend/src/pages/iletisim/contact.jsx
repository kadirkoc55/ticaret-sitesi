import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import { Footer } from '../../components/footer';

export const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32fozcj', 'template_xs2hdv9', form.current, '5upUO7WV2f6zmR3DT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact1 w-full bg-lime-100'>
        
      <div className='anasayfa-ilk xl:w-[1100px] lg:w-[85%] md:w-[95%] mx-auto xn:py-16 xs:py-16 flex flex-col'>
            <div className='mx-auto my-5 text-6xl font-light xs:mb-5'><h2 className='text-center'>Benimle İletişime Geç</h2></div>
            
            
            <div className='mt-7 flex xn:flex-row xs:flex-col xn:justify-around xn:flex-wrap xn:gap-x-3 xn:gap-y-20 xs:gap-y-14'>

            <section className=" dark:bg-gray-900 xn:w-[65%] xs:w-[95%]">
  <div className=" lg:py-16 px-4 mx-auto  ">
    <form action="#" className="form space-y-8 mx-56 w-full relative bottom-16 " ref={form} onSubmit={sendEmail}>
    <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adınız ve Soyadınız:</label>
        <input type="text" name="gonderen_adi" id="gonderen_adi" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ad Soyad" required />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail Adresiniz:</label>
        <input type="email" name="gonderen_mail" id="gonderen_mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Konu:</label>
        <input type="text" name="mail_konu" id="mail_konu" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Konu" required />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mesajınız:</label>
        <textarea name="mesaj_icerik" id="mesaj_icerik" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Mesajınız..." defaultValue={""} />
      </div>
      <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full font-light text-2xl">Gönder</button>
    </form>
  </div>
</section>




</div>
  
      </div>
      <Footer/>
    </div>
  )
}

