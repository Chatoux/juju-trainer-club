import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-primary text-text_primary flex flex-col justify-center items-center">
        <div className="relative w-full h-[70vh]">
          <Image
            src="/image-home-hero-section.jpg"
            alt="Hero"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mb-8"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text_primary">
              Welcome to Juju Trainer Club
            </h1>
            <p className="mt-4 text-lg text-text_secondary">
              Transform your lifestyle with personalized training and nutrition plans.
            </p>
            <Link href="/book">
              <button className="bg-secondary text-text_accent px-4 py-2 rounded font-semibold hover:bg-accent">
                Book a Consultation Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full py-16 bg-secondary text-text_secondary flex flex-col items-center">
        <div className="max-w-4xl w-full px-4">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-lg mb-4">
            At Juju Trainer Club, we offer comprehensive personal training and nutrition services designed to fit your unique fitness goals. Whether you&apos;re looking to lose weight, gain muscle, or simply lead a healthier lifestyle, we&apos;re here to help.
          </p>
          <p className="text-lg">
            Our expert trainers and nutritionists work closely with you to create customized plans that deliver results. Join us today and take the first step towards a healthier, happier you!
          </p>
          <Link href="/services">
            <button className="mt-6 bg-accent text-text_secondary px-4 py-2 rounded font-semibold hover:bg-primary hover:text-text_primary">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;