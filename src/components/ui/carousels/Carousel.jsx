import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import Button from '@components/ui/buttons/Button';

// Base Carousel Component
const Carousel = ({
    items = [],
    autoPlay = false,
    autoPlayInterval = 3000,
    showDots = true,
    showArrows = true,
    showControls = false,
    infinite = true,
    pauseOnHover = true,
    className = '',
    itemsPerView = 1,
    gap = 0,
    children,
    fadeTransition = false,
    height = 'h-64'
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isHovered, setIsHovered] = useState(false);

    // Use children if provided, otherwise use items
    const slides = children ? React.Children.toArray(children) : items;
    const totalSlides = slides.length;
    const maxIndex = Math.max(0, totalSlides - itemsPerView);

    const nextSlide = useCallback(() => {
        if (infinite) {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        } else {
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        }
    }, [infinite, totalSlides, maxIndex]);

    const prevSlide = useCallback(() => {
        if (infinite) {
            setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        } else {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
    }, [infinite, totalSlides]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isPlaying && !isHovered && autoPlay) {
            interval = setInterval(nextSlide, autoPlayInterval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, isHovered, autoPlay, autoPlayInterval, nextSlide]);

    const handleMouseEnter = () => {
        if (pauseOnHover) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (pauseOnHover) {
            setIsHovered(false);
        }
    };

    return (
        <div className={`relative ${className}`}>
            {/* Carousel Container */}
            <div
                className={`relative overflow-hidden rounded-lg ${height}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {fadeTransition ? (
                    // Fade transition carousel
                    <div className="relative w-full h-full">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                {slide}
                            </div>
                        ))}
                    </div>
                ) : (
                    // Slide transition carousel
                    <div
                        className="flex transition-transform duration-300 ease-in-out h-full"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            gap: `${gap}px`
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 h-full"
                                style={{ width: `${100 / itemsPerView}%` }}
                            >
                                {slide}
                            </div>
                        ))}
                    </div>
                )}

                {/* Navigation Arrows */}
                {showArrows && totalSlides > itemsPerView && (
                    <>
                        <Button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg border-0 z-10"
                            disabled={!infinite && currentIndex === 0}
                        >
                            <FaChevronLeft size={14} />
                        </Button>
                        <Button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg border-0 z-10"
                            disabled={!infinite && currentIndex >= maxIndex}
                        >
                            <FaChevronRight size={14} />
                        </Button>
                    </>
                )}

                {/* Auto-play Controls */}
                {autoPlay && (
                    <Button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full border-0 z-10"
                    >
                        {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
                    </Button>
                )}
            </div>

            {/* Dot Indicators */}
            {showDots && totalSlides > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: Math.ceil(totalSlides / itemsPerView) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index * itemsPerView)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${Math.floor(currentIndex / itemsPerView) === index
                                ? 'bg-blue-600'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            )}

            {/* External Controls */}
            {showControls && (
                <div className="flex justify-center mt-4 space-x-4">
                    <Button
                        onClick={prevSlide}
                        variant="secondary"
                        size="small"
                        disabled={!infinite && currentIndex === 0}
                        className="flex items-center"
                    >
                        <FaChevronLeft className="mr-2" size={12} />
                        Previous
                    </Button>
                    <Button
                        onClick={nextSlide}
                        variant="primary"
                        size="small"
                        disabled={!infinite && currentIndex >= maxIndex}
                        className="flex items-center"
                    >
                        Next
                        <FaChevronRight className="ml-2" size={12} />
                    </Button>
                </div>
            )}
        </div>
    );
};

// Slides Only Carousel (minimal version)
export const SlidesOnlyCarousel = ({ slides = [], ...props }) => {
    return (
        <Carousel
            showDots={false}
            showArrows={false}
            showControls={false}
            autoPlay={true}
            autoPlayInterval={4000}
            height="h-80"
            {...props}
        >
            {slides.map((slide, index) => (
                <div key={index} className="relative w-full h-full">
                    <img
                        src={slide.image}
                        alt={slide.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </Carousel>
    );
};

// Carousel with Indicators Only
export const IndicatorsCarousel = ({ slides = [], ...props }) => {
    return (
        <Carousel
            showDots={true}
            showArrows={false}
            showControls={false}
            height="h-80"
            {...props}
        >
            {slides.map((slide, index) => (
                <div key={index} className="relative w-full h-full">
                    <img
                        src={slide.image}
                        alt={slide.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </Carousel>
    );
};

// Carousel with Fade Transition
export const FadeCarousel = ({ slides = [], ...props }) => {
    return (
        <Carousel
            fadeTransition={true}
            showDots={true}
            showArrows={true}
            height="h-80"
            {...props}
        >
            {slides.map((slide, index) => (
                <div key={index} className="relative w-full h-full">
                    <img
                        src={slide.image}
                        alt={slide.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </Carousel>
    );
};

// Carousel with Controls (Previous/Next buttons below)
export const ControlsCarousel = ({ slides = [], ...props }) => {
    return (
        <Carousel
            showDots={true}
            showArrows={false}
            showControls={true}
            height="h-80"
            autoPlay={false}
            infinite={true}
            {...props}
        >
            {slides.map((slide, index) => (
                <div key={index} className="relative w-full h-full">
                    <img
                        src={slide.image}
                        alt={slide.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Optional: Add slide number indicator */}
                    <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        {index + 1} / {slides.length}
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

// Carousel with Captions
export const CaptionCarousel = ({ slides = [], ...props }) => {
    return (
        <Carousel
            showDots={true}
            showArrows={true}
            height="h-80"
            {...props}
        >
            {slides.map((slide, index) => (
                <div key={index} className="relative w-full h-full">
                    <img
                        src={slide.image}
                        alt={slide.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    {(slide.title || slide.caption) && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                            {slide.title && (
                                <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                            )}
                            {slide.caption && (
                                <p className="text-sm opacity-90">{slide.caption}</p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </Carousel>
    );
};

// Image Carousel (updated)
export const ImageCarousel = ({ images = [], ...props }) => {
    return (
        <Carousel height="h-64" {...props}>
            {images.map((image, index) => (
                <div key={index} className="relative w-full h-full">
                    <img
                        src={image.src}
                        alt={image.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                            <p className="text-sm">{image.caption}</p>
                        </div>
                    )}
                </div>
            ))}
        </Carousel>
    );
};

// Card Carousel (updated)
export const CardCarousel = ({ cards = [], itemsPerView = 3, ...props }) => {
    return (
        <Carousel
            itemsPerView={itemsPerView}
            gap={16}
            height="h-auto"
            {...props}
        >
            {cards.map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 h-full">
                    {card.image && (
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-32 object-cover rounded-md mb-3"
                        />
                    )}
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{card.description}</p>
                    {card.action && (
                        <Button variant="primary" size="small" className="w-full">
                            {card.action}
                        </Button>
                    )}
                </div>
            ))}
        </Carousel>
    );
};

// Testimonial Carousel (updated)
export const TestimonialCarousel = ({ testimonials = [], ...props }) => {
    return (
        <Carousel height="h-auto" {...props}>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-lg h-full">
                    <div className="mb-4">
                        <svg className="w-8 h-8 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-center">
                        {testimonial.avatar && (
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                        )}
                        <div>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-gray-500 text-sm">{testimonial.position}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

// Product Carousel (updated)
export const ProductCarousel = ({ products = [], itemsPerView = 4, ...props }) => {
    return (
        <Carousel
            itemsPerView={itemsPerView}
            gap={16}
            height="h-auto"
            {...props}
        >
            {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-blue-600">{product.price}</span>
                            {product.rating && (
                                <div className="flex items-center">
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

// Hero Carousel (updated)
export const HeroCarousel = ({ slides = [], ...props }) => {
    return (
        <Carousel height="h-96" {...props}>
            {slides.map((slide, index) => (
                <div key={index} className="relative w-full h-full">
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white max-w-2xl px-4">
                            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-lg mb-6">{slide.description}</p>
                            {slide.cta && (
                                <Button variant="primary" size="large">
                                    {slide.cta}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

// Thumbnail Carousel (updated)
export const ThumbnailCarousel = ({ images = [], ...props }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                    src={images[selectedIndex]?.src}
                    alt={images[selectedIndex]?.alt || `Image ${selectedIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Thumbnail Carousel */}
            <Carousel
                itemsPerView={5}
                showDots={false}
                showArrows={true}
                height="h-auto"
                gap={8}
                {...props}
            >
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`relative overflow-hidden rounded-md transition-all duration-200 ${selectedIndex === index
                            ? 'ring-2 ring-blue-500 ring-offset-2'
                            : 'hover:ring-2 hover:ring-gray-300'
                            }`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || `Thumbnail ${index + 1}`}
                            className="w-full h-16 object-cover"
                        />
                    </button>
                ))}
            </Carousel>
        </div>
    );
};

export default Carousel;