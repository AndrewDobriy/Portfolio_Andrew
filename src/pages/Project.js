import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
import project_persone from '../assets/images/projectsImg.png'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'

function Project() {
  const projects = [
    {
      description: 'React WebSite',
      img: project1,
      github_link: 'https://github.com/AndrewDobriy/React-Website',
      live_link: 'https://andrewdobriy.github.io/React-Website/',
    },
    {
      description: 'Weather App',
      img: project2,
      github_link: 'https://github.com/AndrewDobriy/Weather-App-React',
      live_link: 'https://andrewdobriy.github.io/Weather-App-React/',
    },
    {
      description: 'Pixel Perfect layout',
      img: project3,
      github_link: 'https://github.com/AndrewDobriy/Layout',
      live_link: 'https://andrewdobriy.github.io/Layout/',
    },
    {
      description: 'Cities of Russia',
      img: project4,
      github_link: 'https://github.com/AndrewDobriy/Autocomplete-APP',
      live_link: 'https://andrewdobriy.github.io/Autocomplete-APP/',
    },
    {
      description: 'Cart NativeJs + Stripe',
      img: project5,
      github_link: 'https://github.com/AndrewDobriy/cart-vanila-js',
      live_link: '',
    },
  ]

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">
          My awesome works (will more)
        </p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_prev, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_prev.img} alt="" className="rounded-lg " />
                  <h3 className="text-xl my-4">{project_prev.description}</h3>
                  <div className="flex gap-3">
                    <a
                      target={'_blank'}
                      rel="noreferrer"
                      href={project_prev.github_link}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      target={'_blank'}
                      rel="noreferrer"
                      href={project_prev.live_link}
                      className="text-cyan-600  bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_persone} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Project
