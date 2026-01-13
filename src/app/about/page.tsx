'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, DollarSign, FileText, Target, Zap, Users, Award, Clock, Globe, Brain, Code, Smartphone, Database, Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import CountUp from '@/components/CountUp'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

// Testimonial Card Component
function TestimonialCard({ review, index }: { review: { name: string; image: string; review: string; rating: number }; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg flex flex-col w-full h-full" style={{ minHeight: '320px' }}>
      {/* Client Image with Arch */}
      <div className="w-full h-40 overflow-hidden bg-gradient-to-br from-accent-blue to-accent-cyan relative flex items-center justify-center">
        {/* Arch shape at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-white z-10"
          style={{ 
            height: '24px',
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
            <span className="text-white font-bold text-4xl">
              {review.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    
      {/* Card Content */}
      <div className="p-5 lg:p-6 flex-1 flex flex-col">
        <h3 className="text-base font-semibold text-gray-900 font-poppins mb-1.5">
          {review.name}
        </h3>
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p 
          className="text-gray-700 leading-relaxed font-poppins flex-1 text-sm"
          style={{
            fontSize: '14px',
            lineHeight: '1.5',
            fontWeight: 400,
          }}
        >
          "{review.review}"
        </p>
      </div>
    </div>
  )
}

// Testimonial Carousel Component
function TestimonialCarousel({ reviews }: { reviews: { name: string; image: string; review: string; rating: number }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(2)

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 2 : 1)
    }
    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

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
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex transition-transform duration-700 ease-in-out"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex-shrink-0 w-full flex gap-6 lg:gap-8">
              {reviews
                .slice(slideIndex * cardsPerView, slideIndex * cardsPerView + cardsPerView)
                .map((review, cardIndex) => (
                  <motion.div
                    key={review.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
                    className="flex-1 min-w-0"
                    style={{ 
                      minWidth: '280px', 
                      height: '100%', 
                      maxWidth: cardsPerView === 2 ? 'calc(50% - 24px)' : '100%',
                      flexBasis: cardsPerView === 2 ? 'calc(50% - 24px)' : '100%'
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
        <div className="flex items-center justify-center gap-3 mt-8">
          <motion.button
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-accent-blue hover:bg-accent-blue-bright rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-accent-blue hover:bg-accent-blue-bright rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
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

export default function About() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    coreBeliefs: useRef<HTMLElement>(null),
    values: useRef<HTMLElement>(null),
    strengths: useRef<HTMLElement>(null)
  }

  const foundationalValues = [
    {
      icon: Lightbulb,
      title: 'Invent the Future',
      description: 'We continuously innovate and create cutting-edge solutions that shape tomorrow\'s technology landscape.',
      gradient: 'from-accent-blue to-accent-cyan'
    },
    {
      icon: DollarSign,
      title: 'Be Budget-Efficient',
      description: 'We deliver maximum value while maintaining cost-effectiveness, ensuring optimal ROI for our clients.',
      gradient: 'from-accent-cyan to-accent-blue'
    },
    {
      icon: FileText,
      title: 'Be Open and Accountable',
      description: 'Transparency and accountability are at the core of everything we do, building trust through honest communication.',
      gradient: 'from-accent-blue to-accent-cyan' 
    },
    {
      icon: Target,
      title: 'Stand by Your Goals',
      description: 'We are committed to achieving your objectives, delivering results that align with your vision and mission.',
      gradient: 'from-accent-cyan to-accent-blue'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Users },
    { number: '100%', label: 'Dedication', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '∞', label: 'Potential', icon: Globe }
  ]

  const clientReviews = [
    {
      name: 'Steven Guevara',
      image: '/client1.jpg',
      review: 'The entire experience was smooth and well-organized. Requirements were understood clearly, communication was excellent, and the final delivery met all expectations. The quality of work and attention to detail were truly impressive.',
      rating: 5
    },
    {
      name: 'Johnny Linden',
      image: '/client2.jpg',
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Light Theme with Image Background */}
      <section 
        ref={sectionRefs.hero}
        className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24"
      >
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/simple-blue-white-background-with-text-space.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('❌ Background image not found')
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <motion.img
                src="/banner-image-04.png"
                alt="Banner Illustration"
                className="w-full h-auto max-w-[200px] sm:max-w-xs lg:max-w-sm object-contain mx-auto"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onError={(e) => {
                  console.error('❌ Banner image not found')
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed text-gray-700 font-poppins">
                <span className="text-accent-blue font-bold">We are creators and innovators in digital transformation.</span>
                <span className="text-gray-700"> Our goal is to help you succeed in the digital world with the latest technologies and reliable solutions. Our experienced team is committed to delivering the best. Ready to go digital? Think Orbantis.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Beliefs Section */}
     

      {/* Foundational Values Section */}
      <section 
        ref={sectionRefs.values}
        className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-light-200 via-white to-light-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {foundationalValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 font-poppins">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed text-gray-700 font-poppins">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 font-poppins px-4"
          >
            These aren't just words—they're the building blocks of everything we stand for.
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-light-200 via-white to-light-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ================= Section 1 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
          <span className="text-gray-900">A Strong </span>
          <span className="text-accent-blue">Foundation</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
          Built on real projects and continuous learning, we bring experience and a growth mindset to every client partnership for enduring success.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <img
          src="/strong.png"
          alt="Strong Foundation"
          className="w-full max-w-xs sm:max-w-md rounded-lg object-contain mx-auto"
        />
      </motion.div>

    </div>

    {/* ================= Section 2 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-start order-2 lg:order-1"
      >
        <img
          src="/core.png"
          alt="Core Beliefs"
          className="w-full max-w-xs sm:max-w-md rounded-lg object-contain mx-auto"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6 order-1 lg:order-2"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
          <span className="text-gray-900">Our Core </span>
          <span className="text-accent-blue">Beliefs</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
          Success in the digital and IT landscape comes from principles, hard work, and goal-oriented strategies. We take pride in our commitment to clients, and future-ready technologies.
        </p>
      </motion.div>

    </div>

    {/* ================= Section 3 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
          <span className="text-gray-900">Our Professional </span>
          <span className="text-accent-blue">Strengths</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
          We are a team of forward-thinking IT professionals delivering diverse forward-thinking solutions. With unmatched marketing expertise and proficiency in modern web and mobile applications.
        </p>
      </motion.div>

      {/* Right Image */}
          <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
          src="/professional.png"
          alt="Professional Strengths"
          className="w-full max-w-xs sm:max-w-md rounded-lg object-contain mx-auto"
        />
      </motion.div>

    </div>

    {/* ================= Section 4 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-start order-2 lg:order-1"
      >
        <img
          src="/dive.png"
          alt="Innovation Dive"
          className="w-full max-w-xs sm:max-w-md rounded-lg object-contain mx-auto"
            />
          </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6 order-1 lg:order-2"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
          <span className="text-gray-900">We Dive Into the Core of </span>
          <span className="text-accent-blue">Innovation — For You</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
          Through thorough research and data analysis, our team uncovers valuable insights transforming intelligence into forward-thinking technologies tailored for your needs.
        </p>
      </motion.div>

    </div>

  </div>
</section>



      {/* Client Reviews Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background - Light theme on top */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-200 via-white to-light-200 z-0"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue z-0" style={{ 
          clipPath: 'polygon(0 46%, 100% 56%, 100% 100%, 0 100%)',
        }}>
          {/* Arch effect at top of blue section */}
          <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
            <div className="absolute -top-10 left-0 right-0 h-20 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue" style={{
              borderRadius: '0 0 50% 50%'
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-30 lg:col-span-2"
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-10 h-10 text-white" />
                </div>
                <h2 className="heading-title text-white mb-6">
                  <span className="text-black">What Our </span>
                  <span className="text-accent-blue">Customers Say</span>
                </h2>
                <div className="rounded-lg p-3">
                  <p className="text-white text-base lg:text-lg leading-relaxed font-poppins">
                    Our clients' success stories reflect our commitment to excellence and innovation. We take pride in building lasting partnerships that drive real results.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Testimonial Carousel */}
            <div className="relative z-30 lg:col-span-3">
              <TestimonialCarousel reviews={clientReviews} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-br from-accent-blue/5 via-accent-cyan/5 to-accent-blue/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Our <span className="text-accent-blue">Impact</span>
            </h2>
            <p 
              style={{
                fontSize: '18px',
                lineHeight: '1.44',
                fontWeight: 400,
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}
              className="max-w-4xl mx-auto"
            >
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <CountUp end={stat.number} className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent mb-2 block" />
                <div className="text-gray-600 text-sm lg:text-base font-medium font-poppins">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
