import { useMemo } from 'react'

export default function Stastics() {
	const stats = useMemo(
		() => [
			{ id: 1, label: 'Projects', value: 128 },
			{ id: 2, label: 'Clients', value: 76 },
			{ id: 3, label: 'Awards', value: 12 },
			{ id: 4, label: 'Years', value: 6 },
		],
		[]
	)

	return (
		<section className="stastics-container" aria-labelledby="stastics-heading">
			<h2 id="stastics-heading" className="stastics-title">Our Statistics</h2>
			<div className="stastics-grid">
				{stats.map((s) => (
					<div key={s.id} className="stastics-card">
						<div className="stastics-value">{s.value}+</div>
						<div className="stastics-label">{s.label}</div>
					</div>
				))}
			</div>

			<style jsx>{`
				.stastics-container {
					padding: 2rem 1rem;
					text-align: center;
					background: #D4A656; /* ✅ Added background color */
				}
				.stastics-title {
					margin: 0 0 1rem 0;
					font-size: 1.5rem;
					color: #fff; /* better visibility */
				}
				.stastics-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
					gap: 1rem;
					max-width: 800px;
					margin: 0 auto;
				}
				.stastics-card {
					background: rgba(255,255,255,0.3);
					padding: 1rem;
					border-radius: 8px;
					backdrop-filter: blur(4px);
				}
				.stastics-value {
					font-size: 1.4rem;
					font-weight: 700;
					color: #111827;
				}
				.stastics-label {
					margin-top: 0.25rem;
					color: #2c2c2c;
				}
			`}</style>
		</section>
	)
}
