'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

// Testimonial Card Component
function TestimonialCard({ review, index }: { review: { name: string; image: string; review: string; rating: number }; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex flex-col w-full h-full" style={{ minHeight: '260px' }}>
      {/* Client Image with Arch */}
      <div className="w-full h-32 sm:h-36 md:h-40 overflow-hidden bg-gradient-to-br from-accent-blue to-accent-cyan relative flex items-center justify-center">
        {/* Arch shape at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-white z-10"
          style={{ 
            height: '20px',
            clipPath: 'ellipse(100% 200% at 50% 0%)',
            transform: 'translateY(50%)'
          }}
        ></div>
        {!imageError ? (
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-contain object-center"
            style={{ objectPosition: 'center center' }}
            onError={() => {
              console.error(`❌ Client image not found: ${review.image}`)
              setImageError(true)
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-blue to-accent-cyan">
            <span className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
              {review.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    
      {/* Card Content */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 font-poppins mb-1 sm:mb-1.5">
          {review.name}
        </h3>
        <div className="flex items-center space-x-0.5 sm:space-x-1 mb-1.5 sm:mb-2">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed font-poppins flex-1 text-[11px] sm:text-xs md:text-sm">
          "{review.review}"
        </p>
      </div>
    </div>
  )
}

// Testimonial Carousel Component
function TestimonialCarousel({ reviews }: { reviews: { name: string; image: string; review: string; rating: number }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1) // Start with 1 for mobile

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(1)
      }
    }
    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Reset currentIndex when cardsPerView changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [cardsPerView])

  // Auto-slide functionality
  useEffect(() => {
    const totalSlides = Math.ceil(reviews.length / cardsPerView)
    if (totalSlides <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [reviews.length, cardsPerView])

  const totalSlides = Math.ceil(reviews.length / cardsPerView)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full px-2 sm:px-0">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
        <motion.div
          className="flex transition-transform duration-700 ease-in-out"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex-shrink-0 w-full flex" style={{ gap: cardsPerView === 2 ? '1rem' : '0' }}>
              {reviews
                .slice(slideIndex * cardsPerView, slideIndex * cardsPerView + cardsPerView)
                .map((review, cardIndex) => (
                  <motion.div
                    key={`${review.name}-${slideIndex}-${cardIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
                    className="flex-shrink-0"
                    style={{ 
                      width: cardsPerView === 2 ? 'calc((100% - 1rem) / 2)' : '100%',
                      minWidth: cardsPerView === 2 ? 'calc((100% - 1rem) / 2)' : '100%',
                      maxWidth: cardsPerView === 2 ? 'calc((100% - 1rem) / 2)' : '100%',
                    }}
                  >
                    <TestimonialCard review={review} index={slideIndex * cardsPerView + cardIndex} />
                  </motion.div>
                ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {reviews.length > cardsPerView && totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <motion.button
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-blue hover:bg-accent-blue-bright rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-blue hover:bg-accent-blue-bright rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </div>
      )}

      {/* Dots Indicator */}
      {reviews.length > cardsPerView && totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-10 h-2.5 bg-white shadow-lg'
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const ClientReviews = () => {
  const clientReviews = [
    {
      name: 'Steven Guevara',
      image: '/steven.jpg',
      review: 'The entire experience was smooth and well-organized. Requirements were understood clearly, communication was excellent, and the final delivery met all expectations. The quality of work and attention to detail were truly impressive.',
      rating: 5
    },
    {
      name: 'Johnny Linden',
      image: '/johny.jpg',
      review: 'Outstanding work from start to finish. The team showed strong technical skills, a proactive approach, and great reliability throughout the project. Everything was delivered on time with excellent results.',
      rating: 5
    },
    {
      name: 'John Mark',
      image: '/client3.jpg',
      review: 'A highly professional and dedicated team. They offered innovative solutions, stayed transparent during the process, and ensured the final outcome aligned perfectly with our goals. Truly a great experience.',
      rating: 5
    },
    {
      name: 'Emily Carter',
      image: '/client4.jpg',
      review: 'An excellent experience from start to finish. The work was handled with great professionalism and attention to detail. Communication was clear, timelines were respected, and the final result exceeded expectations. Truly impressed.',
      rating: 5
    }
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background - Light theme on top */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-200 via-white to-light-200 z-0"></div>
      
      {/* Blue Background - Starts from middle with arch */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue z-0" style={{ 
        clipPath: 'polygon(0 46%, 100% 56%, 100% 100%, 0 100%)',
      }}>
        {/* Arch effect at top of blue section */}
        <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 overflow-hidden">
          <div className="absolute -top-8 sm:-top-10 left-0 right-0 h-16 sm:h-20 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue" style={{
            borderRadius: '0 0 50% 50%'
          }}></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-start">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-30 lg:col-span-2"
          >
            <div className="mb-4 sm:mb-6 md:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-poppins font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                <span className="text-black">What Our </span>
                <span className="text-accent-blue">Customers Say</span>
              </h2>
              <div className="rounded-lg p-2 sm:p-3">
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-poppins">
                  Our clients' success stories reflect our commitment to excellence and innovation. We take pride in building lasting partnerships that drive real results.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Testimonial Carousel */}
          <div className="relative z-30 lg:col-span-3 w-full mt-4 sm:mt-6 lg:mt-0">
            <TestimonialCarousel reviews={clientReviews} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientReviews

