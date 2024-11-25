import { useState } from 'react';
import { Phone, Heart, BookOpen, Users, ArrowRight, Calendar } from 'lucide-react';
import Navbar from './components/Navbar';
import HelplineModal from './components/HelplineModal';
import TestimonialCard from './components/TestimonialCard';

function App() {
  const [isHelplineOpen, setHelplineOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HelplineModal isOpen={isHelplineOpen} onClose={() => setHelplineOpen(false)} />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-rose-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to Recovery Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier future. We're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setHelplineOpen(true)}
                className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Help Now
              </button>
              <a
                href="#resources"
                className="bg-white text-rose-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">14.1M+</div>
            <p className="text-gray-600">People helped worldwide</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">24/7</div>
            <p className="text-gray-600">Support available</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">95%</div>
            <p className="text-gray-600">Recovery success rate</p>
          </div>
        </div>
      </section>

      {/* Get Help Section */}
      <section id="get-help" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <Heart className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Immediate Support</h3>
              <p className="text-gray-600 mb-4">24/7 access to professional counselors and support groups.</p>
              <button onClick={() => setHelplineOpen(true)} className="text-rose-600 font-medium flex items-center">
                Contact Now <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <Users className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support Groups</h3>
              <p className="text-gray-600 mb-4">Connect with others who understand your journey.</p>
              <a href="#groups" className="text-rose-600 font-medium flex items-center">
                Find a Group <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <Calendar className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Treatment Programs</h3>
              <p className="text-gray-600 mb-4">Personalized recovery programs tailored to your needs.</p>
              <a href="#programs" className="text-rose-600 font-medium flex items-center">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recovery Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah M."
              date="2 months ago"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
              content="The support I received here was life-changing. The counselors and community helped me find strength I didn't know I had."
            />
            <TestimonialCard
              name="James R."
              date="1 month ago"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
              content="After years of struggling, I finally found the help I needed. The 24/7 support system made all the difference in my recovery journey."
            />
            <TestimonialCard
              name="Emily L."
              date="3 months ago"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
              content="The personalized treatment program helped me address not just addiction, but the underlying causes. I'm forever grateful."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-xl font-bold">PathToRecovery</span>
            </div>
            <p className="text-gray-400">Supporting your journey to recovery with compassion and care.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#get-help" className="text-gray-400 hover:text-white transition">Get Help</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white transition">Resources</a></li>
              <li><a href="#stories" className="text-gray-400 hover:text-white transition">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-400 mb-2">Emergency Helpline:</p>
            <p className="text-xl font-bold text-rose-500 mb-4">1-800-662-4357</p>
            <button
              onClick={() => setHelplineOpen(true)}
              className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition"
            >
              Get Help Now
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PathToRecovery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;