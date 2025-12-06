"use client";
import notionsData from './notions.json';
import React from 'react';

type Reference = {
	titre: string;
	auteur: string;
};

type Notion = {
  title: string;
  text?: string;
  references: Reference[];
};

type NotionsByLevel = {
	level: string;
	notions: Notion[];
};

export default function NotionsPage() {
	const data: NotionsByLevel[] = notionsData;
	const [openIndexes, setOpenIndexes] = React.useState<{ [key: string]: boolean }>({});
	const [openLevels, setOpenLevels] = React.useState<{ [key: string]: boolean }>(() => ({}));

	const toggle = (level: string, title: string) => {
		const key = `${level}-${title}`;
		setOpenIndexes((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	const toggleLevel = (level: string) => {
		setOpenLevels((prev) => ({ ...prev, [level]: !prev[level] }));
	};

	return (
		<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Notions par niveau</h1>
			<div className="flex flex-col gap-8">
				{data.map((niveau, idx) => {
					const isLevelOpen = openLevels[niveau.level] ?? false;
					const levelBg = idx % 2 === 0 ? 'bg-blue-300' : 'bg-purple-300';
					return (
						<section key={niveau.level} className={`mb-4 rounded-xl border border-blue-200 shadow-sm transition-colors duration-200 ${levelBg} p-3 sm:p-4`}>
							<div className="flex items-center justify-between gap-2 mb-3">
								<h2 className="text-xl sm:text-2xl font-semibold text-blue-900">{niveau.level}</h2>
								<button
									className={`w-9 h-9 flex items-center justify-center rounded-full border-2 transition-all duration-200 bg-white border-blue-300 text-blue-700 hover:bg-blue-100 shadow-sm group focus:outline-none focus:ring-2 focus:ring-blue-400 ${isLevelOpen ? 'ring-2 ring-blue-200' : ''}`}
									onClick={() => toggleLevel(niveau.level)}
									aria-label={isLevelOpen ? 'Replier le niveau' : 'Déplier le niveau'}
								>
									<span
										className={`transition-transform duration-300 ease-in-out text-2xl font-bold select-none ${isLevelOpen ? 'rotate-90' : 'rotate-0'}`}
										aria-hidden="true"
									>
										{/* Chevron right SVG */}
										<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
										</svg>
									</span>
								</button>
							</div>
							{isLevelOpen && (
								<ul className="space-y-4">
									{niveau.notions.map((notion) => {
										const key = `${niveau.level}-${notion.title}`;
										const isOpen = openIndexes[key];
										return (
											<li key={notion.title} className="border rounded-lg p-3 sm:p-4 bg-white shadow-sm overflow-x-auto">
												<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2 sm:gap-0">
													<div className="font-semibold text-base sm:text-lg text-blue-900 break-word">{notion.title}</div>
													<button
														className={`sm:ml-4 w-9 h-9 flex items-center justify-center rounded-full border-2 transition-all duration-200 bg-white border-blue-300 text-blue-700 hover:bg-blue-100 shadow-sm group focus:outline-none focus:ring-2 focus:ring-blue-400 ${isOpen ? 'ring-2 ring-blue-200' : ''}`}
														onClick={() => toggle(niveau.level, notion.title)}
														aria-label={isOpen ? 'Cacher le cours' : 'Voir le cours'}
													>
														<span
															className="transition-transform duration-300 ease-in-out text-2xl font-bold select-none rotate-0"
															aria-hidden="true"
														>
															{isOpen ? (
																// Minus SVG
																<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
																	<line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" />
																</svg>
															) : (
																// Plus SVG
																<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
																	<line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" />
																	<line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" />
																</svg>
															)}
														</span>
													</button>
												</div>
												{isOpen && notion.text && (
													<div className="mb-2 text-blue-900 bg-blue-50 rounded p-3 border border-blue-100 shadow-inner animate-fade-in break-word">
														{notion.text}
													</div>
												)}
												{notion.references.length > 0 && (
													<div className="mt-3">
														<div className="font-medium text-sm mb-1 text-blue-700">Références :</div>
														<ul className="list-disc list-inside ml-4">
															{notion.references.map((ref) => (
																<li key={ref.titre + ref.auteur} className="text-blue-900 break-word">
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
							)}
						</section>
					);
				})}
			</div>
		</main>
	);
}
