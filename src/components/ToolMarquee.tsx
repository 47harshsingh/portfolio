import type { IconType } from "react-icons";
import { FaChartBar, FaDatabase, FaFileExcel, FaRobot } from "react-icons/fa6";
import { SiDuckdb, SiGoogleads, SiJupyter, SiMeta, SiN8N, SiPandas, SiPython, SiScipy } from "react-icons/si";

const tools: { name: string; Icon?: IconType }[] = [
  { name: "SQL", Icon: FaDatabase },
  { name: "Python", Icon: SiPython },
  { name: "Power BI", Icon: FaChartBar },
  { name: "Excel", Icon: FaFileExcel },
  { name: "pandas", Icon: SiPandas },
  { name: "SciPy", Icon: SiScipy },
  { name: "statsmodels" },
  { name: "DuckDB", Icon: SiDuckdb },
  { name: "Jupyter", Icon: SiJupyter },
  { name: "n8n", Icon: SiN8N },
  { name: "LLM APIs", Icon: FaRobot },
  { name: "Meta Ads", Icon: SiMeta },
  { name: "Google Ads", Icon: SiGoogleads },
];

export default function ToolMarquee() {
  const row = [...tools, ...tools];
  return (
    <section aria-label="Tools I use" className="relative border-y border-white/[0.06] py-8">
      <p className="mb-6 text-center text-xs tracking-[0.2em] text-faint uppercase">Tools I work with</p>
      <div className="marquee-mask overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-14 pr-14 hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <li
              key={i}
              aria-hidden={i >= tools.length}
              className="flex items-center gap-3 text-lg font-medium whitespace-nowrap text-white/45 transition-colors hover:text-white"
            >
              {t.Icon && <t.Icon className="h-5 w-5" />}
              {t.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
