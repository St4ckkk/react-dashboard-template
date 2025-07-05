import React from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';

import Carousel, {
    SlidesOnlyCarousel,
    IndicatorsCarousel,
    FadeCarousel,
    ControlsCarousel,
    CaptionCarousel,
    ImageCarousel,
    CardCarousel,
    TestimonialCarousel,
    ProductCarousel,
    HeroCarousel,
    ThumbnailCarousel
} from '@components/ui/carousels/Carousel';

const CarouselPage = () => {
    // Sample data
    const sampleSlides = [
        {
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Mountain landscape",
            title: "Mountain Adventure",
            caption: "Discover breathtaking mountain landscapes and pristine nature trails perfect for your next outdoor adventure."
        },
        {
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Ocean view",
            title: "Ocean Paradise",
            caption: "Relax by the crystal-clear waters and enjoy stunning ocean views that will take your breath away."
        },
        {
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Forest path",
            title: "Forest Trail",
            caption: "Walk through serene forest paths surrounded by towering trees and peaceful wildlife."
        },
        {
            image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "City skyline",
            title: "Urban Experience",
            caption: "Experience the vibrant energy of modern city life with stunning architectural marvels."
        }
    ];

    // Code examples
    const slidesOnlyCode = `<SlidesOnlyCarousel 
  slides={[
    { image: "/image1.jpg", alt: "Slide 1" },
    { image: "/image2.jpg", alt: "Slide 2" }
  ]}
  autoPlay={true}
  autoPlayInterval={4000}
/>`;

    const indicatorsCode = `<IndicatorsCarousel 
  slides={[
    { image: "/image1.jpg", alt: "Slide 1" },
    { image: "/image2.jpg", alt: "Slide 2" }
  ]}
  autoPlay={true}
/>`;

    const fadeCode = `<FadeCarousel 
  slides={[
    { image: "/image1.jpg", alt: "Slide 1" },
    { image: "/image2.jpg", alt: "Slide 2" }
  ]}
  autoPlay={true}
  autoPlayInterval={3000}
/>`;

    const controlsCode = `<ControlsCarousel 
  slides={[
    { image: "/image1.jpg", alt: "Slide 1" },
    { image: "/image2.jpg", alt: "Slide 2" }
  ]}
  autoPlay={false}
/>`;

    const captionsCode = `<CaptionCarousel 
  slides={[
    { 
      image: "/image1.jpg", 
      alt: "Slide 1",
      title: "Caption Title",
      caption: "Description text here"
    }
  ]}
  autoPlay={true}
/>`;

    return (
        <DashboardLayout
            title="Carousels"
            breadcrumb={[
                { name: "Home", href: "/" },
                { name: "Components" },
                { name: "Carousels", href: "/components/carousels" }
            ]}
        >
            <div className="space-y-8">
                {/* Slides Only Carousel */}
                <Container>
                    <HeaderText
                        TitleHeader="Slides Only"
                        title="Minimal Carousel"
                    />
                    <p className="text-gray-600 mt-2">A clean carousel with just slides, no controls or indicators.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <SlidesOnlyCarousel
                                    slides={sampleSlides}
                                    autoPlay={true}
                                    autoPlayInterval={4000}
                                />
                            }
                            codeContent={slidesOnlyCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* With Indicators */}
                <Container>
                    <HeaderText
                        TitleHeader="With Indicators"
                        title="Carousel with Dot Navigation"
                    />
                    <p className="text-gray-600 mt-2">Navigate through slides using dot indicators at the bottom.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <IndicatorsCarousel
                                    slides={sampleSlides}
                                    autoPlay={true}
                                    autoPlayInterval={3000}
                                />
                            }
                            codeContent={indicatorsCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Fade Transition */}
                <Container>
                    <HeaderText
                        TitleHeader="Carousel with Fade Transition"
                        title="Smooth Fade Animation"
                    />
                    <p className="text-gray-600 mt-2">Slides transition with a smooth fade effect instead of sliding.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <FadeCarousel
                                    slides={sampleSlides}
                                    autoPlay={true}
                                    autoPlayInterval={3000}
                                />
                            }
                            codeContent={fadeCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* With Controls */}
                <Container>
                    <HeaderText
                        TitleHeader="With Controls"
                        title="External Navigation Buttons"
                    />
                    <p className="text-gray-600 mt-2">Navigate using Previous and Next buttons positioned below the carousel.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <ControlsCarousel
                                    slides={sampleSlides}
                                    autoPlay={false}
                                />
                            }
                            codeContent={controlsCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* With Captions */}
                <Container>
                    <HeaderText
                        TitleHeader="With Captions"
                        title="Overlay Text Content"
                    />
                    <p className="text-gray-600 mt-2">Display titles and descriptions as overlays on each slide.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <CaptionCarousel
                                    slides={sampleSlides}
                                    autoPlay={true}
                                    autoPlayInterval={4000}
                                />
                            }
                            codeContent={captionsCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Advanced Examples */}
                <Container>
                    <HeaderText
                        TitleHeader="Advanced Examples"
                        title="Specialized Carousel Types"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                        {/* Card Carousel */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Card Carousel</h4>
                            <CardCarousel
                                cards={[
                                    {
                                        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                                        title: "Web Development",
                                        description: "Create modern, responsive websites.",
                                        action: "Learn More"
                                    },
                                    {
                                        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                                        title: "Data Analytics",
                                        description: "Transform data into insights.",
                                        action: "Get Started"
                                    },
                                    {
                                        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                                        title: "Digital Marketing",
                                        description: "Grow your business online.",
                                        action: "Explore"
                                    }
                                ]}
                                itemsPerView={2}
                                autoPlay={false}
                                showArrows={true}
                            />
                        </div>

                        {/* Testimonial Carousel */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Testimonial Carousel</h4>
                            <TestimonialCarousel
                                testimonials={[
                                    {
                                        quote: "This service completely transformed our business operations.",
                                        author: "Sarah Johnson",
                                        position: "CEO, TechCorp",
                                        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
                                    },
                                    {
                                        quote: "Outstanding quality and exceptional customer support.",
                                        author: "Michael Chen",
                                        position: "Product Manager",
                                        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
                                    }
                                ]}
                                autoPlay={true}
                                autoPlayInterval={5000}
                            />
                        </div>
                    </div>
                </Container>

                {/* Thumbnail Gallery */}
                <Container>
                    <HeaderText
                        TitleHeader="Thumbnail Gallery"
                        title="Image Gallery with Thumbnail Navigation"
                    />

                    <div className="mt-6">
                        <ThumbnailCarousel
                            images={sampleSlides.map(slide => ({ src: slide.image, alt: slide.alt }))}
                            autoPlay={false}
                        />
                    </div>
                </Container>
            </div>
        </DashboardLayout>
    );
};

export default CarouselPage;