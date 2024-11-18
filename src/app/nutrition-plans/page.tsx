import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const NutritionPlansPage = () => {
  return (
    <>
      <Navbar />
      
      <main className="bg-[#F4F4F3] text-[#000000]">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-16 bg-[#383838] text-[#FFFFFF]">
          <h1 className="text-5xl font-bold mb-4">Nutrition Plans</h1>
          <p className="max-w-xl text-center">
            Discover personalized nutrition plans designed to fuel your fitness journey at Juju Trainer Club. Increase your energy and achieve your goals with our expert guidance.
          </p>
          <Link href="/consultation">
            <button className="mt-6 px-6 py-3 bg-[#EC5C39] text-[#FFFFFF] rounded-md text-lg hover:bg-[#e04423]">
              Request a Consultation
            </button>
          </Link>
        </section>

        {/* Plan Details Section */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Nutrition Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image src="/path/to/plan-image.jpg" alt="Nutrition Plan Image" width={500} height={300} />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4">
                At Juju Trainer Club, we offer a variety of nutrition plans tailored to meet your specific needs. Whether you are looking to bulk up, slim down, or maintain a balanced diet, our plans include meal examples and expert nutritional advice.
              </p>
              <p>
                Sample meals include lean proteins, complex carbohydrates, and a rich array of vegetables to ensure you get all the essential nutrients. Let us help you fuel your body the right way.
              </p>
            </div>
          </div>
        </section>

        {/* Nutritional Advice Section */}
        <section className="py-12 px-6 bg-[#383838] text-[#FFFFFF]">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Nutritional Advice</h2>
          <p className="max-w-md mx-auto text-center">
            Keeping a balanced diet is crucial for maximizing your training results. Our trainers offer advice on meal timings, hydration, and the best supplements to pair with your fitness regime. Reach out to us for personalized guidance.
          </p>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default NutritionPlansPage;