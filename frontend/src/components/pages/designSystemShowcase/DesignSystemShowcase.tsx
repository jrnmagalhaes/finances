const DesignSystemShowcase = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Premium Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 mb-8 border-b border-[var(--color-border)]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-accent)] bg-[var(--color-accent-bg)] px-2.5 py-1 rounded-full border border-[var(--color-accent-border)]">
            Design Tokens & Typography
          </span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Design System Showcase
          </h1>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            A beautiful, premium typographic layout displaying custom-curated normal and dark mode scales.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3">

        </div>
      </header>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Semantic Colors and Swatches */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
              Color Palette Tokens
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-5">
              These tokens map dynamically to CSS variables, adjusting flawlessly to light and dark variants.
            </p>

            <div className="space-y-3.5">
              {/* Slate Background & Surface */}
              <div>
                <span className="text-xs font-medium text-[var(--color-text-muted)] block mb-1.5">Canvas & Surfaces</span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col justify-between h-20">
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)]">bg-base</span>
                    <span className="text-[11px] font-bold text-[var(--color-text-primary)]">Canvas BG</span>
                  </div>
                  <div className="p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col justify-between h-20">
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)]">surface-base</span>
                    <span className="text-[11px] font-bold text-[var(--color-text-primary)]">Card / Surface</span>
                  </div>
                </div>
              </div>

              {/* Text Colors */}
              <div>
                <span className="text-xs font-medium text-[var(--color-text-muted)] block mb-1.5">Typography hierarchy</span>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-hover)] flex justify-between items-center">
                    <span className="text-xs font-mono text-[var(--color-text-muted)]">txt-primary</span>
                    <span className="text-xs font-semibold text-[var(--color-text-primary)]">Primary Heading</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-hover)] flex justify-between items-center">
                    <span className="text-xs font-mono text-[var(--color-text-muted)]">txt-secondary</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">Secondary Body</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-hover)] flex justify-between items-center">
                    <span className="text-xs font-mono text-[var(--color-text-muted)]">txt-muted</span>
                    <span className="text-xs text-[var(--color-text-muted)]">Muted Caption</span>
                  </div>
                </div>
              </div>

              {/* Semantic Status Colors */}
              <div>
                <span className="text-xs font-medium text-[var(--color-text-muted)] block mb-1.5">Semantic States</span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)]">txt-accent</span>
                    <span className="text-xs font-semibold text-[var(--color-text-accent)]">Accent Link</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)]">txt-success</span>
                    <span className="text-xs font-semibold text-[var(--color-text-success)]">Success Status</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)]">txt-warning</span>
                    <span className="text-xs font-semibold text-[var(--color-text-warning)]">Warning Alert</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)]">txt-error</span>
                    <span className="text-xs font-semibold text-[var(--color-text-error)]">Error Critical</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
              Google Fonts Config
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex flex-col gap-1 p-2 rounded bg-[var(--color-surface-hover)]">
                <span className="text-[10px] text-[var(--color-text-muted)]">Sans Serif (Body Text)</span>
                <span className="font-semibold text-[var(--color-text-primary)]">Inter</span>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded bg-[var(--color-surface-hover)]">
                <span className="text-[10px] text-[var(--color-text-muted)]">Display Font (Headings)</span>
                <span className="font-semibold text-[var(--color-text-primary)]">Plus Jakarta Sans</span>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded bg-[var(--color-surface-hover)]">
                <span className="text-[10px] text-[var(--color-text-muted)]">Monospace (Code blocks)</span>
                <span className="font-semibold text-[var(--color-text-primary)]">JetBrains Mono</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns: Showcase of actual tags styling */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs space-y-6">

            {/* Display Typography */}
            <div>
              <h4 className="text-[var(--color-text-muted)] text-[10px] uppercase font-mono tracking-widest mb-3">Headings & Hierarchy</h4>
              <div className="border-b border-[var(--color-border)] pb-6 mb-6">
                <h1 className="mt-0">H1. Plus Jakarta Sans Bold</h1>
                <h2>H2. Section Header Title</h2>
                <h3>H3. Sub-section Heading</h3>
                <h4>H4. Small Sub-section Title</h4>
                <h5>H5. Extra Small Subsection</h5>
                <h6>H6. Super Tiny Header Label</h6>
              </div>
            </div>

            {/* Paragraphs and Inline Styles */}
            <div>
              <h4 className="text-[var(--color-text-muted)] text-[10px] uppercase font-mono tracking-widest mb-3">Paragraph & Inline Styles</h4>
              <div className="space-y-4">
                <p className="text-lg font-medium text-[var(--color-text-primary)]">
                  Lead paragraph: This typography setup ensures a clean line height (1.625) and spacing for comfortable reading layout.
                </p>
                <p>
                  This is a standard body paragraph (`p`). You can embed <strong className="text-[var(--color-text-primary)]">strong bold text</strong>, soft and delicate <em>emphasized text</em>, or even include an <a href="#links" onClick={(e) => e.preventDefault()}>aesthetic inline hyperlink</a> that shifts seamlessly on hover.
                </p>
              </div>
            </div>

            {/* Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-[var(--color-text-muted)] text-[10px] uppercase font-mono tracking-widest mb-3">Unordered List</h4>
                <ul>
                  <li>Fully responsive typographic scale</li>
                  <li>Clean margins and semantic markers</li>
                  <li>Smooth CSS transitives on light/dark mode</li>
                  <li>
                    Nested item examples:
                    <ul className="mt-1.5 pl-6 list-[circle]">
                      <li>Supports complex list structures</li>
                      <li>Adjustable relative layout height</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[var(--color-text-muted)] text-[10px] uppercase font-mono tracking-widest mb-3">Ordered List</h4>
                <ol>
                  <li>Create base custom styles</li>
                  <li>Configure theme mappings under CSS</li>
                  <li>Toggle between dark and light variables</li>
                  <li>Enjoy professional visual hierarchy!</li>
                </ol>
              </div>
            </div>

            {/* Blockquote */}
            <div className="pt-4">
              <h4 className="text-[var(--color-text-muted)] text-[10px] uppercase font-mono tracking-widest mb-1">Blockquotes</h4>
              <blockquote>
                <p>
                  "Good design is obvious. Great design is transparent. The details are not the details, they make the design."
                </p>
                <footer className="mt-2 text-xs font-semibold text-[var(--color-text-muted)]">— Charles Eames</footer>
              </blockquote>
            </div>

            {/* Technical Elements / Code */}
            <div className="pt-4">
              <h4 className="text-[var(--color-text-muted)] text-[10px] uppercase font-mono tracking-widest mb-3">Technical / Monospace</h4>
              <p>
                You can write inline variables like <code>let theme = 'dark'</code> or express full-fledged code block structures using standard syntax wrappers:
              </p>
              <pre>
                <code>{`// Perfect Tailwind v4 custom theming in action
@theme {
  --color-bg-base: var(--color-bg);
  --color-txt-primary: var(--color-text-primary);
  --font-sans: 'Inter', system-ui, sans-serif;
}`}</code>
              </pre>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Info */}
      <footer className="mt-12 text-center text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-6">
        <p className="text-xs text-[var(--color-text-muted)]">
          Finances App Typography & Colors System. Seamless light and dark mode standard colors enabled.
        </p>
      </footer>
    </div>
  );
};



export { DesignSystemShowcase };
