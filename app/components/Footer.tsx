export default function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-1">
        <div className="font-mono text-xs text-muted flex flex-wrap items-center gap-1">
          <span className="text-cyan">user@bintang</span>
          <span>:</span>
          <span className="text-purple">~</span>
          <span>$ echo "Built with Next.js & TailwindCSS"</span>
        </div>
        <div className="font-mono text-xs text-muted">
          © 2025 Bintang B.H. Hutabarat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
