import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start">
			{/* Hero Section */}
			<section className="max-w-3xl w-full py-16 px-4 flex flex-col items-center text-center bg-white dark:bg-zinc-900 rounded-lg shadow">
				<h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow-lg">Ma Littérature</h1>
				<p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 max-w-2xl mb-6">
					Plongez dans la beauté et la diversité de la littérature française.<br />
          Ce site est conçu pour vous accompagner avec bienveillance, curiosité et passion.<br />
          Explorez des œuvres, des auteurs, des notions et des cours adaptés à tous les niveaux.<br />
				</p>
				<Link href="/notions" className="inline-block bg-blue-700 text-white dark:bg-blue-400 dark:text-zinc-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-800 dark:hover:bg-blue-500 transition-colors">Commencer à explorer</Link>
			</section>

			{/* Features Section */}
      <section className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <Link href="/notions" className="px-8 py-4 rounded-xl bg-blue-100 text-blue-700 font-semibold shadow hover:bg-blue-200 transition-colors text-lg">Explorez les notions</Link>
        <Link href="/cours" className="px-8 py-4 rounded-xl bg-green-100 text-green-700 font-semibold shadow hover:bg-green-200 transition-colors text-lg">Voir les cours</Link>
        <Link href="/references" className="px-8 py-4 rounded-xl bg-purple-100 text-purple-700 font-semibold shadow hover:bg-purple-200 transition-colors text-lg">Découvrir les références</Link>
      </section>

			{/* Motivation Section */}
			{/* Motivation Section */}
			<section className="w-full max-w-3xl px-4 py-12 text-center">
				<h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4">Pourquoi lire ?</h2>
				<p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6">La littérature est une fenêtre ouverte sur le monde et l&apos;âme humaine. Elle nourrit notre imagination, enrichit notre vocabulaire et aiguise notre pensée critique. En lisant, nous découvrons des perspectives nouvelles, développons notre empathie et trouvons l&apos;inspiration pour créer et innover. Plongez dans les pages des grands auteurs et laissez-vous transporter par la magie des mots.</p>
				<Link href="/cours" className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-5 py-2 rounded-full font-medium shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">Commencez à apprendre</Link>
			</section>
		</main>
  );
}
