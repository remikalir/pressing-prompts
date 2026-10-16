# HANDOFF — SPRINT 11

**Status: in progress.** This file is being written during the sprint it
documents, starting October 16, 2026, on the `sprint-10-maintenance`
branch. Sections are added as the work happens rather than all at once at
the end. Until it is marked complete, treat it as a working record, not a
finished handoff.

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

---

*Further sections will be added as Sprint 10 proceeds.*
