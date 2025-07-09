import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navbar />
      <main className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Her Side Project
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A space for women in STEM to slow down, create with their hands, and connect with kindred spirits.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Girls Community</h2>
              <p className="text-gray-600">
                We know the grind—labs, codes, deadlines. But there&rsquo;s another side of us that&rsquo;s just as powerful: the
                one that crafts, blooms, and breathes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}