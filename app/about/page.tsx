
import React from "react";
import TipeeeIcon from "../components/TipeeeIcon";

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col items-center">
			<section className="max-w-3xl w-full bg-white dark:bg-zinc-900 rounded-lg shadow p-8 text-center">
				<h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4">À propos</h1>
				<p className="text-zinc-700 dark:text-zinc-200 mb-4">
					Ma Littérature est une plateforme dédiée à l&apos;apprentissage et à la découverte de notions littéraires, de cours et de références.
				</p>
				<p className="text-zinc-700 dark:text-zinc-200">
					Nous espérons que vous trouverez ici des ressources utiles et inspirantes pour votre parcours littéraire.		
				</p>
				<p className="text-zinc-700 dark:text-zinc-200 mt-6">
					Faites un don pour soutenir le développement continu de cette plateforme et aider à maintenir l&apos;accès gratuit à tous.
				</p>
				<div className="flex justify-center mt-8">
					<a
						href="https://fr.tipeee.com/nazimboudeffa"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-300 hover:bg-pink-600 text-white font-semibold text-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
						aria-label="Faire un don sur Tipeee"
					>
						<TipeeeIcon className="w-7 h-7" />
						<span>Soutenir sur Tipeee</span>
					</a>
				</div>
			</section>
		</main>
	);
}
