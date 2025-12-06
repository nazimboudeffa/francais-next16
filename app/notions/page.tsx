import Navbar from '../components/Navbar';
import notionsData from './notions.json';
import React from 'react';

type Reference = {
	titre: string;
	auteur: string;
};

type Notion = {
	title: string;
	references: Reference[];
};

type NotionsByLevel = {
	level: string;
	notions: Notion[];
};

export default function NotionsPage() {
	const data: NotionsByLevel[] = notionsData;
	return (
		<>
			<Navbar />
			<main className="max-w-3xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-6">Notions par niveau</h1>
				{data.map((niveau) => (
					<section key={niveau.level} className="mb-8">
						<h2 className="text-2xl font-semibold mb-3">Niveau {niveau.level}</h2>
						<ul className="space-y-4">
							{niveau.notions.map((notion) => (
								<li key={notion.title} className="border rounded p-4 bg-blue-700">
									<div className="font-semibold text-lg mb-1">{notion.title}</div>
									{notion.references.length > 0 && (
										<div className="mt-2">
											<div className="font-medium text-sm mb-1">Références :</div>
											<ul className="list-disc list-inside ml-4">
												{notion.references.map((ref) => (
													<li key={ref.titre + ref.auteur}>
														<span className="font-semibold">{ref.titre}</span> — <span className="italic">{ref.auteur}</span>
													</li>
												))}
											</ul>
										</div>
									)}
								</li>
							))}
						</ul>
					</section>
				))}
			</main>
		</>
	);
}
