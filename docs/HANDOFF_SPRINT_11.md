# HANDOFF — SPRINT 11

**Status: in progress.** This file is being written during the sprint it
documents, starting October 16, 2026. Sections are added as the work
happens rather than all at once at the end. Until it is marked complete,
treat it as a working record, not a finished handoff. §2 records what has
been done and which branches are in use; §3 records open items.

Naming follows the established convention: the file is named for the
sprint that picks it up and documents the sprint just closed — so this file
documents Sprint 10. When citing it, cite the filename, not the sprint
number.

**How this fits with the rest of the documentation.** In October 2026
the project moved from one Claude account to another. The bridge between
them is `PRESSING_PROMPTS_CANONICAL_HANDOFF.md` (October 7, 2026), which
consolidated the project's history and was checked line by line against
this repo on that date. Where this file and that one disagree, this file
is newer and wins.

**The canonical handoff is deliberately not in this repo.** On October 16,
2026, Remi decided not to commit it publicly. It is more candid than the
sprint handoffs — about unreleased work, team deliberations, and how the
collaboration runs — and it has already done its job. It is kept in four
places: the Claude project's knowledge, a backup in Remi's work Google
Drive, a message to Aria and Hannah, and a backup in Remi's local work
files. Treat it as dated: it describes the project as of October 7, 2026,
and from here on the handoffs in this folder, starting with this one, are
the current record.

§1 below **replaces** that document's §0.4 ("Get the code before you reason
about it"), the file-upload steps in §12.2 (the working loop), and every
statement there or in older handoffs that Claude never edits the repo or
that Remi places every file himself.

---

## 1. The working arrangement: direct repo access

### 1.1 What changed, and when

As of **October 16, 2026**, Claude works directly in Remi's local clone of
the repository (`~/projects/pressing-prompts`), connected as a folder in
the Claude desktop app. This replaces the arrangement used from Sprint 1
through Sprint 9, in which Claude asked for files, Remi uploaded them,
Claude handed back edited copies, and Remi placed each one in the repo
himself.

Remi chose this deliberately. He had already been working this way with
Claude on other projects and was comfortable with it, and Pressing Prompts
moved to a new Claude account at the same moment, which made it a natural
point to change. Remi's local repo remains the source of truth; GitHub
`main` is what has been pushed from it.

### 1.2 Who does what

**Claude:**

- Works only on a **feature branch**, never directly on `main`. Claude
  may create the branch. Before any edit, Claude confirms which branch is
  checked out.
- **Reads, writes, edits, moves, and deletes files** in the repo as the
  work requires.
- **Checks its own work**: reads a file before describing or changing it,
  verifies claims against the code rather than against documentation, and
  uses read-only git commands (`status`, `diff`, `log`) to confirm what
  changed.
- **Lists every file changed** as the work proceeds, with a line on what
  changed and why, so Remi can check the diff against the list.
- Points out wording it thinks needs a change but that isn't its to edit,
  and leaves it alone (see §1.4).

**Remi:**

- **Stages, commits, pushes, and merges.** Claude does not run
  `git add`, `git commit`, `git push`, or `git merge`.
- **Runs `npm run dev`** and checks the site in the browser. That review
  is the checkpoint every change passes through before it is committed.
- Holds final authority on every decision, as before.

### 1.3 The review habit

When Claude hands back a set of changes:

1. Run `git status` and `git diff --stat` first. Together they should
   show exactly the files Claude listed, and no others. **If an unlisted
   file appears, stop before committing** and ask. Both are needed:
   `git diff --stat` covers changed and deleted files but not new ones,
   which appear only in `git status` (as `??`, "untracked").
2. Read the full `git diff` against Claude's list. (In the terminal it
   opens in a scrolling viewer: space pages down, `q` quits.)
3. Run `npm run dev` and look at anything that renders.
4. Commit and push.

The first batch under this arrangement — blog hero change-log entries,
the `docs/ILLUSTRATIONS.md` §10 fix, a README pass, and removing the stray
`src/content/blog/gitkeep` — went through exactly this sequence and was
committed and pushed as `97b28bd`.

### 1.4 What did not change

Direct access changes how files move. It does not change how decisions
are made. Everything in the canonical handoff's §12 still holds:

- Surface design decisions before writing code; for material choices,
  present two to four real options with a recommendation and a named
  runner-up, and wait.
- Preview visual work before writing it to a file. "Lock it in" and
  "wire it up" are the go-signals.
- Read the file before proposing a pattern, especially when the proposal
  starts with "generalize" or "rename." Direct access removes the excuse
  for not having read it.
- Don't write the human layer. Mechanical fixes are fair; editorial
  wording is flagged, not changed.
- For sequenced work, state the plan up front and go one step at a time,
  with Remi's review between steps.

Direct access makes one of these easier to break, not harder: it is now
possible to edit many files quickly. Speed is not the goal. If Remi says
the work is moving faster than he can review, stop.

### 1.5 Why this is better, specifically

The October 8 collaboration record found that complete files handed back
for Remi to place reached the repo essentially every time, while changes
pasted into chat as text, for files not already in the conversation,
often never did. The four blog hero change-log entries were the clearest
case: written months earlier, never added. When Claude edits files in
place, there is no text to paste, so that failure mode mostly disappears.
The diff replaces the hand-off as the thing Remi reviews.

### 1.6 Technical notes for the next Claude

These are specific to how Claude reaches the repo from the Claude
desktop app (Cowork). Each was learned in practice.

- **Two paths, one folder.** The file tools (Read, Write, Edit) use the
  Mac path, `/Users/jik15/projects/pressing-prompts`. The Linux shell sees
  the same folder at a different, session-specific mount path. Don't mix
  them up.
- **Don't run `npm`, Vite, or the build inside the repo from the shell.**
  The shell is Linux; Remi's `node_modules` were installed on macOS, and
  some packages (esbuild, which Vite uses) ship platform-specific
  binaries. For verification by execution — for example loading a topic
  data file in Node to check its escaping — copy what's needed into a
  scratch directory and work there.
- **The shell cannot reach Remi's `localhost`.** Browser verification is
  his.
- **Git from the shell needs two flags.** The repo is owned by a different
  user from the shell's point of view, so git refuses to operate without
  `-c safe.directory='*'`. Read-only commands should also use
  `--no-optional-locks`, so that a routine `git status` never writes to
  the index:

  ```bash
  git --no-optional-locks -c safe.directory='*' status -sb
  ```

- **Deleting files needs permission, granted per session.** By default the
  shell can create and change files in the connected folder but cannot
  delete them. The app asks Remi to allow deletion the first time it is
  needed.
- **The `index.lock` trap.** On October 16, creating the branch from the
  shell left an empty `.git/index.lock` behind, because the shell could
  not yet delete files. A leftover lock makes Remi's next `git add` or
  `git commit` fail with "Another git process seems to be running." It
  was removed once delete permission was granted. **After any git command
  that writes — `checkout`, `switch`, `branch` — check that
  `.git/index.lock` does not exist.**
- **Remi's global git config isn't visible from the shell.** The shell
  has its own home directory, so `git config --show-origin user.email`
  run there shows only the repo's own settings. To check which identity
  commits will use, ask Remi to run it in his terminal.

---

## 2. What Sprint 10 has done so far

### 2.1 Maintenance batch — `97b28bd`, October 16

The first work under the new arrangement cleared four small items the
canonical handoff (§15) had carried forward for months:

- **`docs/ILLUSTRATIONS.md` §9:** change-log entries for all four blog
  heroes (launch, `tlai-conference-report`, `we-the-people-workshop`,
  `fall-pedagogy-series`), plus a short preface saying they were logged
  after the fact. Written from the shipped image files, with colors
  sampled from the pixels, and each entry separating topic colors (the
  washes) from background tints (threads, points, highlights).
- **`docs/ILLUSTRATIONS.md` §10:** the stale "awaiting propagation" line
  now matches §9.
- **`README.md`:** project tree brought up to date; HashRouter, the
  "stubbed" blog page, and the "Sprint 2" export controls corrected; short
  Routing and Blog sections added; "Adding a topic" expanded from four
  steps to six (icon registration, and the constellation symmetry check
  at multiples of three).
- **`src/content/blog/gitkeep`** deleted.

### 2.2 This handoff — `f49529e` and `8a96b55`, October 16

Started with §1, then amended to record the decision to keep the
canonical handoff out of the public repo (see the header).

### 2.3 Git identity — October 19

Remi made his GitHub email private. Commits now use his GitHub noreply
address, `269560113+remikalir@users.noreply.github.com`, set in his
global git config. This repo had its own `user.email` setting (his Gmail
address), which overrode the global one; it was removed so the global
setting applies here. Commits before October 19 still carry the old
address. **That history was deliberately left as it is** — the goal was
to use the private address from now on, not to scrub the past, and
rewriting history would change every commit hash.

The rule that came out of this: if GitHub rejects a push because a
commit exposes a private email, amend that unpushed commit with
`git commit --amend --reset-author --no-edit` and push again. If the
commits are already on GitHub, the config change is all that's needed.

### 2.4 Branches

- **`sprint-10-maintenance`** was merged into `main` on October 19 as a
  fast-forward (no merge commit). The deploy ran green and the live site
  was unchanged, as expected — every change was documentation. This
  handoff update was made on the same branch afterward and will need
  merging again.
- **Content work** is moving to a separate conversation and a separate
  branch, so maintenance and content stay apart. When that branch is
  created, add it here.

---

## 3. Open items

### 3.1 Surfaced during Sprint 10

- **Blog hero washes lost their blur.** All four shipped heroes render
  their washes as hard-edged translucent circles, though the generator
  code asks for `feGaussianBlur`. The likely cause is that cairosvg,
  which converts the SVG to an image, ignores blur filters; this is not
  yet verified by execution, because cairosvg could not be installed in
  the shell. Previews in a browser do show the blur, so what was approved
  may have looked softer than what shipped. Decision needed before the
  next hero: keep the hard-edged look, or restore the blur (for example
  by blurring the wash layer in PIL after conversion). Recorded in the
  `docs/ILLUSTRATIONS.md` change-log preface.
- **The Google Docs export gotcha was lost from `docs/AUTHORING.md`.**
  It was added on May 26 (`0757201`) — backslashes that the Docs →
  Markdown export inserts before punctuation, which can crash the YAML
  parser or show up as literal characters, with a `grep`/`sed` sweep and
  a check for invisible characters. Commit `acef25a` (July 27) replaced
  the guide with a version built on the May 22 text plus the new
  trailing-whitespace entry, which dropped it. The most likely cause is
  that the edit was made to an older copy of the guide, under the old
  hand-back workflow. This answers the question in the canonical
  handoff's §7.6 about a "third missing entry": it landed, then was
  overwritten. The `too\!` artifact fixed in the August 18 post is the
  exact case the lost entry covered. Restoring it can be folded into the
  pending second gotchas entry (setext headings and export-flattened
  punctuation), which still needs a decision on whether to add discrete
  cases or a symptom-to-cause table.
- **Inline photos in the We the People post** are 770–910 KB each;
  `AUTHORING.md` asks for under 200 KB.
- **`docs/ILLUSTRATIONS.md` §6** is still the Sprint 3 planning table.
  Some proposed anchors never shipped (Trust's ended as a figure on the
  bridge, not a lantern). Worth relabeling as historical or updating to
  what shipped.
- **The presentation deck template counts eleven topics.** It is in
  regular classroom use, so it gets a planned update when Topic 12 ships
  rather than a quick fix now. It lives outside the repo.
- **`ILLUSTRATIONS_HANDOFF.md` §9** documents the blog hero path as
  `public/blog/heroes/<slug>.png`; the real convention is
  `public/blog/<slug>/hero.<ext>`. That file lives in the Claude project's
  knowledge, not the repo. Deferred by Remi to the next revision of the
  handoff documents, when he wants clarity on this detail first.

### 3.2 Still open from the canonical handoff

Unchanged by Sprint 10, listed so this file stands on its own:

- **Topic 12, "What Should AI Decide?"** — paused one decision short of
  the icon lock. Also carries the constellation symmetry fix, the palette
  lock, the illustration, the share images, content integration, and a
  documentation pass. The largest live thread.
- **Per-post Open Graph cards** via build-time per-route HTML. All four
  heroes are already 1200×675 and ready to serve as cards.
- **An accessible in-site version of Hannah's flowchart PDF.**
- **The `studentAIUse` / `scaffoldedVariant` field split** for
  activities — useful regardless of K-12.
- **The analytics decision** — Search Console recommended, not finalized.
- Smaller deferred items: `pressingprompts.com` HTTPS, the outbound-arrow
  glyph on local PDFs, inline links in starter prose, `ActivityCard`
  title wrapping on mobile, a `T.type.sectionLong` token, smooth scrolling
  for anchor links, the wildcard redirect 302 → 301, a glossary, and the
  never-built icon-explainer page.
- **K-12** remains paused by team decision.

*Further sections will be added as Sprint 10 proceeds.*
