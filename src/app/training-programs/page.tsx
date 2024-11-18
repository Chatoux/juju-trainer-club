import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function TrainingPrograms() {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <section className="bg-primary text-text_secondary py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">Elevate Your Fitness with Juju Trainer Club</h1>
                    <p className="text-xl mb-8">Discover personalized training programs designed to help you achieve your fitness goals. Book a consultation today!</p>
                    <Link href="/contact" className="bg-accent text-text_secondary py-2 px-6 rounded hover:bg-opacity-80 transition">Schedule a Consultation</Link>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="bg-secondary text-text_primary py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-accent mb-8">Program Highlights</h2>
                    <div className="flex flex-col lg:flex-row lg:space-x-8">
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-md mb-6 lg:mb-0">
                            <Image src="/images/strength.jpg" alt="Strength Program" width={400} height={300} />
                            <h3 className="text-2xl font-semibold my-4">Strength Training</h3>
                            <p>Build muscle and enhance your strength with our expert-guided programs designed for all levels.</p>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-md mb-6 lg:mb-0">
                            <Image src="/images/endurance.jpg" alt="Endurance Program" width={400} height={300} />
                            <h3 className="text-2xl font-semibold my-4">Endurance Building</h3>
                            <p>Boost your stamina and endurance through targeted workouts and techniques.</p>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                            <Image src="/images/flexibility.jpg" alt="Flexibility Program" width={400} height={300} />
                            <h3 className="text-2xl font-semibold my-4">Flexibility Sessions</h3>
                            <p>Improve your flexibility and mobility with our specially designed routines.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="bg-secondary text-text_primary py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-accent">Client Testimonials</h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-around">
                    <div className="p-6 max-w-md bg-white rounded shadow-md text-center mb-6 lg:mb-0">
                        <p className="text-text_primary">&quot;Joining Juju Trainer Club was the best decision for my health!&quot;</p>
                        <span className="block mt-4 text-accent">- Satisfied Client</span>
                    </div>
                    <div className="p-6 max-w-md bg-white rounded shadow-md text-center">
                        <p className="text-text_primary">&quot;Amazing trainers and personalized programs!&quot;</p>
                        <span className="block mt-4 text-accent">- Happy Customer</span>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}