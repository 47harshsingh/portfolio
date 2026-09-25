/** Quick "HS" keycap intro. Pure CSS (see .loader in globals.css), so it always disappears on its own. */
export default function Loader() {
  return (
    <div aria-hidden className="loader pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-ink">
      <div className="flex gap-2 [perspective:600px]">
        {["H", "S"].map((l, i) => (
          <span
            key={l}
            style={{ animationDelay: `${i * 0.12}s` }}
            className="loader-key grid h-14 w-14 place-items-center rounded-xl border border-white/20 bg-gradient-to-b from-[#2a2a2e] to-[#111113] text-xl font-bold shadow-[0_8px_0_#000,0_14px_30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.25)]"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
