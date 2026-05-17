// ─── Content: "Is AI Theft?" ───

import TheftIllustration from "../../components/illustrations/TheftIllustration.jsx";

export const theftContent = {
  Illustration: TheftIllustration,

  expertQuote: {
    text: "This harvesting of our work, scraping and impersonating our styles, it's the same as a parasite that sucks the light out of its host without invitation.[^1]",
    source: "Tim Flach, wildlife photographer, one of the most \"scraped\" artists in the world",
  },

  introduction: [
    "To many people, AI seems like magic. It can generate images, write papers, and summarize complex topics into tidy bullet points. But what sources are under AI's hood? How does it know so much? AI models are trained on vast amounts of human-generated content from the internet – including everything from transcribed YouTube videos and Reddit threads to image libraries and the entire text of Wikipedia. This raises a critical legal and ethical question: Are AI companies committing **copyright infringement** by scraping and using this content without permission? The New York Times, numerous authors, artists, and musicians think so. They've filed lawsuits against companies like OpenAI and Meta, arguing that their work fuels these models – yet they receive no credit, attribution, or compensation. AI companies defend their practices by citing the **Fair Use** doctrine, claiming that AI outputs are \"transformative\" – computational mashups that are fundamentally different from the original works. But many legal questions remain unresolved, and frustration is building across the many creative industries that are impacted. As students increasingly turn to AI, it's important for them to consider not just what the tools can do, but the human contributions and **intellectual property** that made them possible. Understanding these legal and ethical issues is key to becoming more responsible and informed.",
  ],

  keyTerms: [
    { term: "Copyright", definition: "Legal protection for original works of authorship — literary, musical, artistic, and other intellectual works" },
    { term: "Fair Use", definition: "A legal doctrine allowing limited use of copyrighted material without permission for purposes like commentary, criticism, or education" },
    { term: "Data Scraping", definition: "The automated collection of vast amounts of content from the internet, used by AI companies to train their models — often without creators' consent" },
  ],

  learningObjectives: [
    "Identify standard practices for attributing AI within academic work",
    "Consider the implications of AI on copyright, intellectual property, and fair use in the creative arts",
    "Evaluate how the practice of data scraping by AI companies impacts copyright and fair use",
  ],

  activities: [
    {
      id: "theft-1",
      slug: "ai-transparently",
      number: 1,
      type: "in-class",
      title: "Learning to Use AI Transparently",
      tagline: "Practice attributing AI use — starting with a debate about chocolate chips",
      purpose: "Practice attributing AI correctly in academic work while opening a natural conversation about ethical writing and research practices, course AI policy, and the broader questions of copyright and intellectual property.",
      objectives: [
        "Identify standard practices for attributing AI within academic work",
        "Discuss accepted AI use practices within the context of the course",
      ],
      steps: [
        { label: "Research & Writing Phase", detail: "Working in pairs, build a short, evidence-based argument using AI. The research question: Are dark or milk chocolate chips best for a chocolate chip cookie? Use AI in any way you choose to find evidence, then draft your argument in your own words in a shared document.", time: "10–15 min", instructorNote: "This activity works well with a communal Google Doc (with tabs for each group) so pairs can see each other's work during the attribution review. Consider asking students to submit both their written argument and their AI conversation thread." },
        { label: "Attributing AI Correctly", detail: "Using provided resources on AI attribution — covering inline citations, reference list entries, and AI acknowledgement statements — update your work to include appropriate attribution for your AI use.", time: "5–10 min", instructorNote: "Two recommended resources: Elon University & AAC&U (2025) 'Academic integrity and AI' and Monash University's 'Acknowledging the use of generative AI.'" },
        { label: "Wrap-Up Discussion", detail: "As a class, review appropriate AI attribution using examples from the shared document. Then discuss 2–3 of these questions: What does it mean to be transparent in our use of AI? Can we upload copyrighted content to AI to get summaries — is this fair use? Can we use AI to analyze data or help with research? If we use AI in our work, is it our intellectual property? Can an AI output be copyrighted?", instructorNote: "Choose 2–3 conversation starters most relevant to your course and AI policy. This discussion naturally connects AI attribution practices to the broader copyright and fair use questions explored in Activities 2 and 3." },
      ],
      onlineVersion: { description: "Students individually use AI to research the chocolate chip question, draft a short argument, and apply proper AI attribution. They post their attributed argument to the discussion forum, then review two peers' posts and comment on whether the attribution seems complete and transparent." },
      grading: [
        "Students prompting AI to build an argument and writing their results",
        "Students adding appropriate AI attribution to their work",
        "The class as a whole discussing takeaways from the activity",
      ],
      resources: [
        { title: "Elon University & AAC&U (2025). Academic integrity and AI.", url: "https://studentguidetoai.org/academic-integrity-and-ai" },
        { title: "Monash University. Acknowledging the use of generative AI.", url: "https://www.monash.edu/student-academic-success/learning-with-ai/academic-integrity-and-ai/acknowledging-the-use-of-ai#tabs__3254796-01" },
      ],
    },
    {
      id: "theft-2",
      slug: "artists-ownership",
      number: 2,
      type: "online",
      title: "Do Artists Own Their Content in the Age of AI?",
      tagline: "Generating song lyrics in your favorite artist's style — then asking who owns them",
      purpose: "Get thinking about how AI impacts the creative arts and intellectual property. Is your favorite recording artist's work being 'stolen' when AI generates content in their style? What rights do artists have to their copyrighted content and creative voice?",
      objectives: ["Consider the implications of AI on copyright, intellectual property, and fair use in the creative arts"],
      steps: [
        { label: "Generate Song Lyrics", detail: "Using an AI tool, prompt it to generate song lyrics in the style of your favorite recording artist. Example prompt: \"Write rap lyrics about homework in the style of Doja Cat.\"", instructorNote: "Students need access to an AI text generation tool. Update login instructions to match your institution's access system." },
        { label: "Share & Cite Your Output", detail: "Post your prompt and AI-generated output to the discussion. Use the citation format: \"Write rap lyrics...\" prompt, ChatGPT, [date of use, e.g., 17 Sept. 2025].", instructorNote: "The AI attribution citation format connects back to Activity 1. Remind students to use the actual date of their interaction, not the example date." },
        { label: "Write Your Reflection", detail: "Write a reflection of at least 300 words addressing all four questions: Is this stealing the music of your favorite artist, or is it new content just \"in the style\" of someone else? What does it mean if a content creator uses tools like Suno (music generator) and Revid (video creator) to evoke an artist's style? What rights does the artist have to their creative intellectual property? How — if at all — can creative content be protected in the age of AI?" },
        { label: "Engage with Peers", detail: "Read your classmates' posts. Comment on at least one whose perspective you found valuable — and tell them why. Leave a thumbs-up on your choice for the best AI-generated song lyrics." },
      ],
      noAIAlternative: { description: "Instead of generating lyrics, provide students with 3–4 pre-generated examples of AI-written song lyrics \"in the style of\" well-known artists. Students analyze the examples and write the same 300-word reflection on creative ownership and copyright without needing to use an AI tool themselves." },
      grading: [
        "Shared AI-generated song lyrics with appropriate citation",
        "A well-developed reflection of at least 300 words on AI's impact on recording artists, their livelihood, and their IP rights",
        "A response to at least one peer's post explaining why you found their perspective valuable",
        "A thumbs-up on your choice for the best AI-generated song lyrics",
      ],
      resources: [],
    },
    {
      id: "theft-3",
      slug: "data-scraping-lawsuits",
      number: 3,
      type: "online",
      title: "Data Scraping Lawsuits: Copyright and Fair Use",
      tagline: "Researching a real court case in a domain of IP that matters to you",
      purpose: "Investigate what it means for AI companies to train their models on internet data scraped without consent or attribution. Is it copyright infringement — or does the Fair Use doctrine permit it? Research a real court case relevant to your own interests and form your own opinion.",
      objectives: ["Evaluate how the practice of data scraping by AI companies impacts copyright and fair use"],
      steps: [
        { label: "Background Video", detail: "Watch \"Creativity, Copyright, and Fair Use\" — an overview of how copyright and fair use are supposed to work when reusing others' content. As you watch, reflect: Should AI models be expected to follow the same copyright and fair use principles that individuals follow?" },
        { label: "Choose & Research a Court Case", detail: "Find one court case related to a type of intellectual property that matters to you — now or in your future career. Domains to consider: code or software (e.g., GitHub Copilot lawsuits), music (e.g., artists suing AI music generators), news and journalism (e.g., The New York Times v. OpenAI), scientific research and academic publishing, visual art and illustration, or another domain that matters to you. A good starting point: the Copyright & IP collection from Casey Fiesler's AI Ethics & Policy News Aggregator.", instructorNote: "Students choose their own court case, giving them ownership over the domain of IP they explore. No specific case is pre-assigned. Verify the Casey Fiesler aggregator link is active before assigning. Remind students to attribute any AI use in their research, connecting back to Activity 1." },
        { label: "Written Analysis", detail: "Write an analysis (suggested 750 words) addressing: Summarize the court case and the IP issues at stake. Offer your own opinion — does the AI company's use constitute infringement, or is it legitimate fair use? How does this case relate to the content you create now, or plan to create in your future career? What concrete actions might you take to protect your own intellectual content?", instructorNote: "The source document does not specify a format (essay, report, etc.) — clarify your preferred format before assigning." },
      ],
      noAIAlternative: { description: "Provide students with summaries of 2–3 landmark AI copyright cases (e.g., NYT v. OpenAI, Getty Images v. Stability AI, GitHub Copilot litigation). Students read the summaries and write the same analytical reflection without needing to conduct independent research using AI tools." },
      grading: [
        "A description and summary of a real court case related to AI training data and copyright",
        "A clear explanation of your own opinion and how it might affect your behavior",
        "A submission of at least 750 words",
        "Clearly cited resources, including attribution for any AI use",
      ],
      resources: [
        { title: "\"Creativity, Copyright, and Fair Use\" (video)", url: "https://youtu.be/xvZHNwBHirQ?si=ZsisLsJUbFE4Vrar" },
        { title: "AI Ethics & Policy News Aggregator — Copyright & IP Articles (Casey Fiesler)", url: "https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=508160405#gid=508160405" },
      ],
    },
  ],
  conversationStarters: [
    { id: "cs-theft-1", prompt: "Have you heard/read any stories about artists, musicians, authors speaking out about their work being impacted by AI? If so, are you sympathetic?" },
    { id: "cs-theft-2", prompt: "How do you see the long-term impacts of generative AI on creative industries (e.g., writing, art, music, movies/TV)?" },
    { id: "cs-theft-3", prompt: "Do you think artists, musicians, writers should be credited and/or compensated by AI companies who have trained on their work? What would a fair system look like?" },
    { id: "cs-theft-4", prompt: "Is it legal to upload copyrighted content to AI to get summaries for personal use? How aware are you of copyright restrictions with AI tools that you use? Who might be harmed by copyright violations with AI?" },
    { id: "cs-theft-5", prompt: "What responsibilities should students or researchers have when giving credit to AI-generated content they relied on in their own work?" },
  ],


  furtherRecommendations: [
    { title: "Menand, L. (2024, January 15). [Is A.I. the Death of I.P.?](https://www.newyorker.com/magazine/2024/01/22/who-owns-this-sentence-a-history-of-copyrights-and-wrongs-david-bellos-alexandre-montagu-book-review) *The New Yorker*.", url: "https://www.newyorker.com/magazine/2024/01/22/who-owns-this-sentence-a-history-of-copyrights-and-wrongs-david-bellos-alexandre-montagu-book-review" },
    { title: "Knibbs, K. (2023, November 6). [Johnny Cash's Taylor Swift Cover Predicts the Boring Future of AI Music](https://www.wired.com/story/johnny-cash-artificial-intelligence-taylor-swift-barbie-girl-covers-music-future/). *Wired*.", url: "https://www.wired.com/story/johnny-cash-artificial-intelligence-taylor-swift-barbie-girl-covers-music-future/" },
    { title: "Sellman, M. (2025, February 7). [Photographer says AI being used to copy his work](https://www.thetimes.com/uk/technology-uk/article/photographer-says-ai-copied-his-work-can-you-spot-the-difference-q6hr5jfs2). *The Times*.", url: "https://www.thetimes.com/uk/technology-uk/article/photographer-says-ai-copied-his-work-can-you-spot-the-difference-q6hr5jfs2" },
    { title: "Barbaro, M., et al. (2024, April 16). [A.I.'s Original Sin](https://www.nytimes.com/2024/04/16/podcasts/the-daily/ai-data.html). *The New York Times*.", url: "https://www.nytimes.com/2024/04/16/podcasts/the-daily/ai-data.html" },
    { title: "Goetze, T. S. (2024). [AI Art is Theft: Labour, Extraction, and Exploitation, Or, On the Dangers of Stochastic Pollocks](https://dl.acm.org/doi/pdf/10.1145/3630106.3658898). *The 2024 ACM Conference on Fairness, Accountability, and Transparency*, 186–196.", url: "https://dl.acm.org/doi/pdf/10.1145/3630106.3658898" },
    { title: "Congressional Research Services (CRS) Report. (2023, September). [*Generative Artificial Intelligence and Copyright Law*](https://www.congress.gov/crs-product/LSB10922).", url: "https://www.congress.gov/crs-product/LSB10922" },
    { title: "Reed, R. (2024, March 22). [Does ChatGPT violate New York Times' copyrights?](https://hls.harvard.edu/today/does-chatgpt-violate-new-york-times-copyrights/) Harvard Law School.", url: "https://hls.harvard.edu/today/does-chatgpt-violate-new-york-times-copyrights/" },
  ],

  pageNotes: [
    { id: 1, text: "Sellman, M. (2025, February 7). [Photographer says AI being used to copy his work](https://www.thetimes.com/uk/technology-uk/article/photographer-says-ai-copied-his-work-can-you-spot-the-difference-q6hr5jfs2). *The Times*." },
  ],

  disciplinaryExtensions: [
    { id: "de-theft-1", discipline: "Music & Performing Arts", prompt: "Explore the implications of AI music generators like Suno. If AI can generate music \"in the style of\" a living artist, what does that mean for artistic identity, livelihood, and copyright protection?" },
    { id: "de-theft-2", discipline: "Computer Science", prompt: "Examine the GitHub Copilot lawsuits. When AI is trained on open-source code, does the resulting output inherit the original license obligations? What are the implications for software development?" },
    { id: "de-theft-3", discipline: "Journalism & Media", prompt: "Analyze The New York Times v. OpenAI case. How does AI-generated summarization of news content threaten the economic model of journalism? What precedents might this case set?" },
    { id: "de-theft-4", discipline: "Visual Art & Design", prompt: "Investigate the Getty Images v. Stability AI litigation. When AI image generators are trained on copyrighted photographs, who owns the resulting outputs? How should artists protect their visual style?" },
    { id: "de-theft-5", discipline: "Law & Public Policy", prompt: "Compare the Fair Use arguments made by AI companies with established copyright precedent. Is computational transformation genuinely different from other forms of derivative work?" },
  ],

  connectedTopics: [
    { topicId: "trust", relation: "Citation hallucinations raise the same attribution and accuracy questions that underpin copyright debates" },
    { topicId: "builds", relation: "The labor and creative contributions that build AI systems are central to questions of credit and compensation" },
    { topicId: "bias", relation: "Data scraping without consent connects to whose voices and creative work are included — or exploited" },
  ],

  belowActivitiesLearningNote: "Activity 3 asks students to choose their own court case — no specific case is pre-assigned — giving them ownership over the domain of IP they explore. Verify the Casey Fiesler aggregator link is active before assigning, and remind students to attribute any AI use in their research (connecting back to Activity 1's attribution practices).",
};
