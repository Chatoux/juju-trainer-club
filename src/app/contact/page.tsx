import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-secondaryColor min-h-screen p-4 text-textPrimaryColor">
        {/* Hero Section */}
        <section className="bg-primaryColor py-16 text-textSecondaryColor">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Connect with Juju Trainer Club</h1>
            <p className="mb-8">
              Increase your fitness motivation by scheduling a consultation or appointment with us today!
            </p>
            <Link href="#contact-form" className="bg-accentColor text-textSecondaryColor py-2 px-4 rounded-full inline-block hover:bg-textAccentColor">Book a Consultation</Link>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-10 bg-secondaryColor text-textPrimaryColor">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Request a Consultation</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accentColor focus:ring focus:ring-accentColor focus:ring-opacity-50"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accentColor focus:ring focus:ring-accentColor focus:ring-opacity-50"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accentColor focus:ring focus:ring-accentColor focus:ring-opacity-50"
                  rows={4}
                  placeholder="Let us know your fitness goals"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-accentColor text-textSecondaryColor py-2 px-6 rounded-full hover:bg-textAccentColor mx-auto block">
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* Location and Hours Section */}
        <section className="py-10 bg-primaryColor text-textSecondaryColor">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Our Location &amp; Hours</h2>
            <Image src="/images/map-placeholder.jpg" alt="Map Location" width={800} height={600} className="rounded-lg mb-4" />
            
            <div className="text-left md:flex md:justify-around">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-medium">Location</h3>
                <p>123 Fitness Ave</p>
                <p>Workout City, JW 10101</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Office Hours</h3>
                <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                <p>Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}