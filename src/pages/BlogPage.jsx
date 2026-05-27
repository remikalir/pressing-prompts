import { Link } from "react-router-dom";
import { T } from "../styles/tokens.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";
import PostMeta from "../components/blog/PostMeta.jsx";
import { getAllPosts } from "../utils/blog.js";

// ─── BlogPage ───
// The blog index. Lists all posts in reverse chronological order. Each
// entry shows: hero thumbnail (when present), title, byline + date,
// excerpt. The whole entry is clickable. Tags are not shown on the
// index — they live on the post page itself.
//
// Empty-state copy ships in case the content folder is ever truly empty
// (e.g. during a content migration). At launch, the placeholder
// hello-world post means this branch isn't reached.

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      <GrainOverlay />
      <NavBar />

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <Link
          to="/"
          style={{
            fontFamily: T.sans,
            fontSize: "13px",
            color: T.text3,
            textDecoration: "none",
          }}
        >
          ← Home
        </Link>

        <h1
          style={{
            ...T.type.headline,
            fontWeight: T.weight.regular,
            marginTop: "24px",
            marginBottom: "16px",
            color: T.text1,
          }}
        >
          Blog
        </h1>

        <p
          style={{
            fontFamily: T.sans,
            fontSize: "16px",
            lineHeight: T.lineHeightProse,
            color: T.text2,
            marginBottom: "56px",
          }}
        >
          Reflections and updates from the Pressing Prompts team
          about AI, ethics, teaching, and learning in higher education.
        </p>

        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            {posts.map((post) => (
              <PostEntry key={post.slug} post={post} />
            ))}
          </ul>
        )}
      </section>

      <Footer />
    </div>
  );
}

// ─── PostEntry ───
// One row on the index. The entire entry is wrapped in a Link so the
// whole card is clickable. Hero thumbnail sits to the left when present;
// when absent, the text content uses the full width.
function PostEntry({ post }) {
  return (
    <li>
      <Link
        to={`/blog/${post.slug}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "grid",
          gridTemplateColumns: post.hero ? "180px 1fr" : "1fr",
          gap: "24px",
          alignItems: "start",
        }}
        onMouseEnter={(e) => {
          const title = e.currentTarget.querySelector(".post-entry-title");
          if (title) title.style.color = T.accent;
        }}
        onMouseLeave={(e) => {
          const title = e.currentTarget.querySelector(".post-entry-title");
          if (title) title.style.color = T.text1;
        }}
      >
        {post.hero && (
          <div
            style={{
              width: "180px",
              aspectRatio: "16 / 9",
              borderRadius: T.radius,
              overflow: "hidden",
              background: T.bgWarm,
            }}
          >
            <img
              src={post.hero}
              alt={post.heroAlt || ""}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        )}

        <div>
          <h2
            className="post-entry-title"
            style={{
              fontFamily: T.serif,
              fontStyle: "italic",
              fontSize: "28px",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              fontWeight: T.weight.regular,
              color: T.text1,
              margin: "0 0 10px 0",
              transition: "color 150ms ease",
            }}
          >
            {post.title}
          </h2>

          <div style={{ marginBottom: "12px" }}>
            <PostMeta
              author={post.author}
              dateDisplay={post.dateDisplay}
              tags={post.tags}
              showTags={false}
            />
          </div>

          {post.excerpt && (
            <p
              style={{
                fontFamily: T.sans,
                fontSize: "15px",
                lineHeight: 1.6,
                color: T.text2,
                margin: 0,
              }}
            >
              {post.excerpt}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
}

// ─── EmptyState ───
// Shown when no posts exist. In practice the placeholder hello-world post
// keeps the index populated until the real launch post replaces it.
function EmptyState() {
  return (
    <p
      style={{
        fontFamily: T.sans,
        fontSize: "16px",
        lineHeight: T.lineHeightProse,
        color: T.text3,
        fontStyle: "italic",
      }}
    >
      No posts yet. Check back soon.
    </p>
  );
}
