import { Link, useParams } from "react-router-dom";
import { T } from "../styles/tokens.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";
import PostMeta from "../components/blog/PostMeta.jsx";
import PostBody from "../components/blog/PostBody.jsx";
import { getPostBySlug } from "../utils/blog.js";

// ─── BlogPostPage ───
// Individual post page at /blog/:slug. 680px body column, hero rendered
// when frontmatter provides one. Falls back to a quiet "post not found"
// state if the slug doesn't match — visitors who land here via a stale
// link see something sensible rather than a generic 404.

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <PostNotFound />;
  }

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      <GrainOverlay />
      <NavBar />

      <article style={{ maxWidth: "680px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <Link
          to="/blog"
          style={{
            fontFamily: T.sans,
            fontSize: "13px",
            color: T.text3,
            textDecoration: "none",
          }}
        >
          ← All posts
        </Link>

        <h1
          style={{
            ...T.type.headline,
            fontWeight: T.weight.regular,
            marginTop: "24px",
            marginBottom: "20px",
            color: T.text1,
          }}
        >
          {post.title}
        </h1>

        <div style={{ marginBottom: "40px" }}>
          <PostMeta author={post.author} dateDisplay={post.dateDisplay} tags={post.tags} />
        </div>

        {post.hero && (
          <figure style={{ margin: "0 0 40px 0" }}>
            <img
              src={post.hero}
              alt={post.heroAlt || ""}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: T.radius,
                display: "block",
              }}
            />
          </figure>
        )}

        <PostBody html={post.html} />

        <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: `1px solid ${T.border}` }}>
          <Link
            to="/blog"
            style={{
              fontFamily: T.sans,
              fontSize: "13px",
              color: T.text3,
              textDecoration: "none",
            }}
          >
            ← All posts
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}

// ─── PostNotFound ───
// Quiet fallback for unknown slugs. Doesn't reuse the global NotFoundPage
// because the framing here is more specific: "this post doesn't exist"
// rather than "this route doesn't exist."
function PostNotFound() {
  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      <GrainOverlay />
      <NavBar />
      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "80px 32px" }}>
        <Link
          to="/blog"
          style={{ fontFamily: T.sans, fontSize: "13px", color: T.text3, textDecoration: "none" }}
        >
          ← All posts
        </Link>
        <h1
          style={{
            ...T.type.headline,
            fontWeight: T.weight.regular,
            marginTop: "24px",
            marginBottom: "20px",
            color: T.text1,
          }}
        >
          Post not found
        </h1>
        <p
          style={{
            fontFamily: T.sans,
            fontSize: "16px",
            lineHeight: T.lineHeightProse,
            color: T.text2,
          }}
        >
          The post you're looking for doesn't exist, or has been moved. Visit{" "}
          <Link
            to="/blog"
            style={{ color: T.accent, textDecoration: "underline", textUnderlineOffset: "2px" }}
          >
            the blog index
          </Link>{" "}
          to see all available posts.
        </p>
      </section>
      <Footer />
    </div>
  );
}
