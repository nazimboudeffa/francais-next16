"use client";
import Navbar from '../components/Navbar';
import notionsData from './notions.json';
import React from 'react';

type Reference = {
	titre: string;
	auteur: string;
};

type Notion = {
	title: string;
	text: string;
	references: Reference[];
};

type NotionsByLevel = {
	level: string;
	notions: Notion[];
};

export default function NotionsPage() {
	const data: NotionsByLevel[] = notionsData;
	const [openIndexes, setOpenIndexes] = React.useState<{ [key: string]: boolean }>({});

	const toggle = (level: string, title: string) => {
		const key = `${level}-${title}`;
		setOpenIndexes((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	return (
		<>
			<Navbar />
			<main className="max-w-3xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-6">Notions par niveau</h1>
				{data.map((niveau) => (
					<section key={niveau.level} className="mb-8">
						<h2 className="text-2xl font-semibold mb-3">Niveau {niveau.level}</h2>
						<ul className="space-y-4">
							{niveau.notions.map((notion) => {
								const key = `${niveau.level}-${notion.title}`;
								const isOpen = openIndexes[key];
								return (
									<li key={notion.title} className="border rounded-lg p-4 bg-purple-200  shadow-sm">
										<div className="flex items-center justify-between mb-2">
											<div className="font-semibold text-lg text-blue-900">{notion.title}</div>
											<button
												className={`ml-4 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors duration-200 ${isOpen ? 'bg-white border-blue-300 text-blue-700' : 'bg-white border-blue-300 text-blue-700 hover:bg-blue-100'}`}
												onClick={() => toggle(niveau.level, notion.title)}
												aria-label={isOpen ? 'Cacher le cours' : 'Voir le cours'}
											>
												<span className="text-xl font-bold">{isOpen ? '−' : '+'}</span>
											</button>
										</div>
										{isOpen && (
											<div className="mb-2 text-purple-900 bg-purple-100 rounded p-3 border border-purple-200 shadow-inner animate-fade-in">
												{notion.text}
											</div>
										)}
										{notion.references.length > 0 && (
											<div className="mt-3">
												<div className="font-medium text-sm mb-1 text-blue-700">Références :</div>
												<ul className="list-disc list-inside ml-4">
													{notion.references.map((ref) => (
														<li key={ref.titre + ref.auteur} className="text-blue-900">
															<span className="font-semibold">{ref.titre}</span> — <span className="italic">{ref.auteur}</span>
														</li>
													))}
												</ul>
											</div>
										)}
									</li>
								);
							})}
						</ul>
					</section>
				))}
			</main>
		</>
	);
}
