import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="max-w-3xl mx-auto p-8 text-center bg-white dark:bg-black">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-700 dark:text-blue-300 drop-shadow">Bienvenue sur Ma Littérature</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
          Plongez dans la beauté et la diversité de la littérature française.<br />
          Ce site est conçu pour vous accompagner avec bienveillance, curiosité et passion.<br />
          Explorez des œuvres, des auteurs, des notions et des cours adaptés à tous les niveaux.<br />
          <span className="font-semibold text-blue-600 dark:text-blue-200">Laissez-vous inspirer, apprenez, partagez et enrichissez votre parcours littéraire !</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          <Link href="/notions" className="px-8 py-4 rounded-xl bg-blue-100 text-blue-700 font-semibold shadow hover:bg-blue-200 transition-colors text-lg">Explorez les notions</Link>
          <Link href="/cours" className="px-8 py-4 rounded-xl bg-green-100 text-green-700 font-semibold shadow hover:bg-green-200 transition-colors text-lg">Voir les cours</Link>
          <Link href="/references" className="px-8 py-4 rounded-xl bg-purple-100 text-purple-700 font-semibold shadow hover:bg-purple-200 transition-colors text-lg">Découvrir les références</Link>
        </div>
        <div className="mt-12 text-base text-gray-500 dark:text-gray-400">
          Bonne exploration et belles découvertes littéraires !
        </div>
      </main>
    </div>
    </>
  );
}
