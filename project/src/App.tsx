import React, { useEffect, useState } from 'react';
import { Heart, Star, Gift, Cake, Sparkles, Play, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8; // Number of photo slots
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-rose-400 relative overflow-hidden">
      {/* Dynamic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/30 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-rose-300/25 rounded-full animate-bounce"></div>
        
        {/* Flowing Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-pink-300/50 to-transparent animate-pulse transform rotate-12"></div>
          <div className="absolute top-3/4 right-0 w-80 h-1 bg-gradient-to-l from-transparent via-purple-300/50 to-transparent animate-pulse transform -rotate-12"></div>
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {/* Shooting Star 1 */}
          <div className="absolute top-20 left-0 w-2 h-2 bg-white rounded-full opacity-80 animate-meteor-1">
            <div className="absolute -left-20 top-0 w-20 h-0.5 bg-gradient-to-r from-transparent to-white opacity-60"></div>
          </div>
          
          {/* Shooting Star 2 */}
          <div className="absolute top-40 right-0 w-1.5 h-1.5 bg-pink-200 rounded-full opacity-70 animate-meteor-2">
            <div className="absolute -left-16 top-0 w-16 h-0.5 bg-gradient-to-r from-transparent to-pink-200 opacity-50"></div>
          </div>
          
          {/* Shooting Star 3 */}
          <div className="absolute top-60 left-1/4 w-1 h-1 bg-purple-200 rounded-full opacity-60 animate-meteor-3">
            <div className="absolute -left-12 top-0 w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-200 opacity-40"></div>
          </div>
          
          {/* Shooting Star 4 */}
          <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-rose-200 rounded-full opacity-75 animate-meteor-4">
            <div className="absolute -left-18 top-0 w-18 h-0.5 bg-gradient-to-r from-transparent to-rose-200 opacity-55"></div>
          </div>
          
          {/* Shooting Star 5 */}
          <div className="absolute top-80 left-2/3 w-1 h-1 bg-yellow-200 rounded-full opacity-65 animate-meteor-5">
            <div className="absolute -left-14 top-0 w-14 h-0.5 bg-gradient-to-r from-transparent to-yellow-200 opacity-45"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-16 transform transition-all duration-1000" 
             style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="inline-flex items-center gap-3 mb-6">
            <Cake className="w-8 h-8 text-pink-200 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Happy Birthday
            </h1>
            <Gift className="w-8 h-8 text-purple-200 animate-bounce" />
          </div>
          
          <p className="text-xl md:text-2xl text-pink-100 font-light leading-relaxed max-w-2xl mx-auto">
            May all your wishes come true and every joy be doubled
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <Heart className="w-6 h-6 text-pink-300 animate-pulse" />
            <Star className="w-6 h-6 text-purple-300 animate-pulse" />
            <Sparkles className="w-6 h-6 text-rose-300 animate-pulse" />
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-pink-100 mb-8 flex items-center justify-center gap-3">
              <Star className="w-7 h-7 text-yellow-300" />
              Photo Collection
              <Star className="w-7 h-7 text-yellow-300" />
            </h2>
            
            {/* Sliding Gallery Container */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              {/* Gallery Viewport */}
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Photo Slides */}
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="aspect-[4/3] bg-gradient-to-br from-pink-200/20 to-purple-200/20 border-2 border-white/20 flex items-center justify-center relative overflow-hidden group">
                        <div className="text-center text-white/60">
                          <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                            <Heart className="w-10 h-10" />
                          </div>
                          <p className="text-lg font-medium">Photo {index + 1}</p>
                          <p className="text-sm mt-2 text-white/50">Replace with your special memory</p>
                        </div>
                        
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              
              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-pink-300 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Gallery Info */}
              <div className="text-center mt-4">
                <p className="text-white/60 text-sm">
                  {currentSlide + 1} of {totalSlides} photos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-pink-100 mb-8 flex items-center justify-center gap-3">
              <Sparkles className="w-7 h-7 text-yellow-300" />
              Special Videos
              <Sparkles className="w-7 h-7 text-yellow-300" />
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Video Position */}
              <div className="md:col-span-2">
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/15 transition-all duration-500">
                  <div className="aspect-video bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-2xl border-2 border-white/20 flex items-center justify-center relative overflow-hidden group">
                    <div className="text-center text-white/70">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <Play className="w-10 h-10 ml-1" />
                      </div>
                      <p className="text-lg font-medium">Main Birthday Video</p>
                      <p className="text-sm mt-2 text-white/50">Add your special video link here</p>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Small Video Positions */}
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 hover:bg-white/15 transition-all duration-500">
                  <div className="aspect-video bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-xl border border-white/20 flex items-center justify-center relative overflow-hidden group">
                    <div className="text-center text-white/60">
                      <div className="w-12 h-12 mx-auto mb-2 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <Play className="w-6 h-6 ml-0.5" />
                      </div>
                      <p className="text-sm font-medium">Video {index + 1}</p>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Birthday Wishes Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
              <h2 className="text-4xl font-bold text-pink-100 mb-6">Warmest Wishes</h2>
              
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>On this special day, may all happiness surround you</p>
                <p>May your smile shine as bright as today's sunshine</p>
                <p>May every tomorrow be more beautiful than today</p>
                <p>May these wonderful wishes stay with you forever</p>
              </div>
              
              <div className="flex justify-center gap-6 mt-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.2s' }}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.4s' }}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 text-pink-200/60 text-sm">
            <Heart className="w-4 h-4" />
            <span>Made with Love & Wishes</span>
            <Heart className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 left-10 text-pink-200/30 animate-bounce" style={{ animationDelay: '0s' }}>
          <Heart className="w-6 h-6" />
        </div>
        <div className="absolute top-40 right-20 text-purple-200/30 animate-bounce" style={{ animationDelay: '1s' }}>
          <Star className="w-5 h-5" />
        </div>
        <div className="absolute bottom-40 left-20 text-rose-200/30 animate-bounce" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute bottom-20 right-10 text-pink-200/30 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <Gift className="w-6 h-6" />
        </div>
        
        {/* Floating Flowers */}
        <div className="absolute top-32 left-1/4 text-pink-300/20 animate-pulse" style={{ animationDelay: '0s' }}>
          <div className="relative">
            <div className="w-8 h-8 bg-pink-300/30 rounded-full"></div>
            <div className="absolute top-1 left-1 w-6 h-6 bg-pink-200/40 rounded-full"></div>
            <div className="absolute -top-1 left-2 w-4 h-4 bg-pink-100/50 rounded-full"></div>
            <div className="absolute top-2 -left-1 w-4 h-4 bg-pink-100/50 rounded-full"></div>
            <div className="absolute top-2 left-5 w-4 h-4 bg-pink-100/50 rounded-full"></div>
            <div className="absolute top-5 left-2 w-4 h-4 bg-pink-100/50 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute top-60 right-1/4 text-purple-300/20 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="relative">
            <div className="w-10 h-10 bg-purple-300/25 rounded-full"></div>
            <div className="absolute top-1.5 left-1.5 w-7 h-7 bg-purple-200/35 rounded-full"></div>
            <div className="absolute -top-1 left-3 w-5 h-5 bg-purple-100/45 rounded-full"></div>
            <div className="absolute top-3 -left-1 w-5 h-5 bg-purple-100/45 rounded-full"></div>
            <div className="absolute top-3 left-6 w-5 h-5 bg-purple-100/45 rounded-full"></div>
            <div className="absolute top-6 left-3 w-5 h-5 bg-purple-100/45 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-60 left-1/3 text-rose-300/20 animate-pulse" style={{ animationDelay: '4s' }}>
          <div className="relative">
            <div className="w-6 h-6 bg-rose-300/30 rounded-full"></div>
            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-rose-200/40 rounded-full"></div>
            <div className="absolute -top-0.5 left-1.5 w-3 h-3 bg-rose-100/50 rounded-full"></div>
            <div className="absolute top-1.5 -left-0.5 w-3 h-3 bg-rose-100/50 rounded-full"></div>
            <div className="absolute top-1.5 left-4 w-3 h-3 bg-rose-100/50 rounded-full"></div>
            <div className="absolute top-4 left-1.5 w-3 h-3 bg-rose-100/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Floating Transparent Circles */}
        <div className="absolute top-1/4 left-1/6 w-16 h-16 border border-pink-200/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-12 h-12 border border-purple-200/15 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="absolute bottom-1/4 left-1/5 w-20 h-20 border border-rose-200/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        
        {/* Floating Transparent Diamonds */}
        <div className="absolute top-1/2 left-1/12 w-8 h-8 border border-pink-300/25 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/12 w-6 h-6 border border-purple-300/20 transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-2/3 w-10 h-10 border border-rose-300/15 transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Transparent Hexagons */}
        <div className="absolute top-1/6 right-1/3 w-12 h-12 animate-bounce" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-pink-200/10 to-purple-200/10 transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </div>
        
        <div className="absolute bottom-1/6 left-1/2 w-8 h-8 animate-bounce" style={{ animationDelay: '4s' }}>
          <div className="w-full h-full bg-gradient-to-br from-purple-200/15 to-rose-200/15 transform -rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </div>
        
        {/* Floating Transparent Petals */}
        <div className="absolute top-1/5 left-3/4 animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-12 bg-gradient-to-t from-pink-200/20 to-transparent rounded-full transform rotate-12"></div>
        </div>
        
        <div className="absolute top-3/5 right-1/6 animate-pulse" style={{ animationDelay: '3s' }}>
          <div className="w-8 h-16 bg-gradient-to-t from-purple-200/15 to-transparent rounded-full transform -rotate-12"></div>
        </div>
        
        <div className="absolute bottom-1/5 left-1/8 animate-pulse" style={{ animationDelay: '5s' }}>
          <div className="w-5 h-10 bg-gradient-to-t from-rose-200/25 to-transparent rounded-full transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
}

export default App;