import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Juju Trainer Club</title>
        <meta name="description" content="Learn more about Juju Trainer Club and our fitness philosophy." />
      </Head>

      <Navbar />

      <div className="flex flex-col items-center bg-[#F4F4F3] text-primary p-6">
        
        <section className="max-w-4xl w-full mb-8 mt-4">
          <h1 className="text-3xl font-bold text-[#EC5C39] mb-4 text-center">Trainer Biography</h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-none mr-0 md:mr-8">
              <Image
                src="/images/trainer.jpg"
                alt="Trainer's photo"
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <p className="text-lg text-[#383838]">
                Meet <strong>Juju</strong>, your personal guide on your fitness journey. With over a decade of experience in
                personal training, Juju specializes in transforming lives through personalized, attentive, and adaptive
                fitness plans. Her approach combines cutting-edge fitness trends with tried-and-true techniques, ensuring
                each session is as effective as it is enjoyable.
              </p>
              <p className="mt-4 text-lg text-[#383838]">
                Whether you&apos;re looking to gain strength, improve flexibility, or just get started on a healthier
                lifestyle, Juju Trainer Club is here to help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl w-full mb-8">
          <h2 className="text-3xl font-bold text-[#EC5C39] mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-center text-[#383838]">
            At Juju Trainer Club, we believe in empowering individuals to live healthier and happier lives through
            personalized fitness solutions. Our mission is to create an environment where every member feels supported
            and motivated to reach their full potential.
          </p>
        </section>

        <section className="max-w-4xl w-full mb-8">
          <div className="bg-[#EC5C39] text-[#FFFFFF] p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Life?</h3>
            <p className="mb-4">Schedule a consultation today and take the first step toward a healthier you.</p>
            <Link href="/contact" className="bg-[#F4F4F3] text-[#EC5C39] px-6 py-3 rounded-full font-bold hover:bg-[#ffe6e1] transition">Book a Consultation</Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}