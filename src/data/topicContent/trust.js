// ─── Content: "Can We Trust AI?" ───

import TrustIllustration from "../../components/illustrations/TrustIllustration.jsx";

export const trustContent = {
  Illustration: TrustIllustration,

  expertQuote: {
    text: "Even if they can be tuned to be right more of the time, they will still have failure modes — and likely the failures will be in the cases where it's harder for a person reading the text to notice, because they are more obscure.[^1]",
    source: "Dr. Emily Bender, linguistics scholar, on AI's hallucination problem",
  },

  introduction: [
    "The rapid spread of AI-generated content poses a significant threat to public **trust** and the overall **quality** of information sources, with potentially serious real-world consequences across various fields such as medicine, government, law, and education. A major issue is **AI hallucination**,[^2] which occurs when a model generates misleading, inaccurate, or entirely fabricated content, often without a clear basis in its training data.[^3] While some of these errors are easy to spot, others are subtle and difficult to detect, making them potentially dangerous. Even when AI generated information is cited, a recent study found that leading AI chatbots incorrectly cite their sources 60% of the time.[^4] Another related concern is **AI slop**, which refers to the flood of low-quality and often misleading AI-generated content that's overwhelming the internet. As AI continues to shape the way information is produced and consumed, students need to understand the nuances of these issues and learn how and when to fact check the information they get from AI.",
  ],

  keyTerms: [
    { term: "AI Hallucination", definition: "When AI models produce content that is misleading, incorrect, or completely fabricated" },
    { term: "Deepfake", definition: "AI-generated synthetic media — images, audio, or video — designed to look or sound real" },
    { term: "AI Slop", definition: "Low-quality AI-generated content that spreads widely online, often without labeling" },
  ],

  learningObjectives: [
    "Describe the concepts of AI hallucination, AI slop, and deepfakes",
    "Identify the potential consequences of AI hallucination and AI slop",
    "Apply strategies for fact-checking the accuracy and quality of AI-generated information",
  ],

  questionLearningNote: "This topic examines the reliability of AI-generated information, focusing on hallucinations, deepfakes, and AI slop. Key terms (hallucinations, AI slop, deepfakes) should be defined for students before or during teaching — the key terms cards above can help with this. Activity 3 is designed as an add-on to an existing research paper or annotated bibliography, not a standalone activity. Activity 1 references specific external media (a Taylor Swift deepfake video and an economics paper screenshot) — verify these links are active before class.",

  activities: [
    {
      id: "trust-1",
      slug: "evaluating-content",
      number: 1,
      type: "in-class",
      title: "Evaluating AI-Generated Content",
      tagline: "Fact-checking deepfakes and hallucinated citations with the SNIFF test",
      purpose: "Introduce practical strategies for evaluating AI-generated information. Using the SNIFF framework, work in pairs to fact-check two real-world claims — a deepfake video and a hallucinated academic citation — and reflect on the broader harms of AI-generated inaccuracies.",
      objectives: [
        "Describe the concept of AI hallucination",
        "Describe the concept of a deepfake",
        "Apply strategies for fact-checking the accuracy and quality of AI-generated information",
      ],
      sharedFramework: {
        name: "SNIFF Test",
        description: "A structured fact-checking framework used across multiple topics",
        alsoUsedIn: ["disinfo"],
      },
      steps: [
        {
          label: "Pre-Class Preparation",
          detail: "Read the Duke University Libraries blog post \"Why are LLMs still hallucinating?\" Watch \"What is a Deepfake?\" (4 min., BBC). Review the SNIFF Test handout. Then reflect: Have you ever come across AI hallucinations or deepfakes? How did you detect them?",
          instructorNote: "This section can be turned into a pre-work Canvas assignment. Verify that all external links — the deepfake video, Taylor Swift claim, and economics paper image — are active before class.",
        },
        {
          label: "Pair Activity — Fact-Check Two Claims",
          detail: "Working in pairs, use the SNIFF test to confirm or debunk two claims. Claim #1: Taylor Swift is advertising for Le Creuset cookware (a deepfake video). Claim #2: An image showing the most highly cited economics paper of all time (a hallucinated citation). For each claim, describe what sources you relied on and which elements of the SNIFF test were most helpful.",
          time: "20–25 min",
          instructorNote: "The source document references a specific image for Claim #2 that needs to be inserted before publishing. The Taylor Swift deepfake link should be verified each time — deepfake content is frequently removed from platforms.",
        },
        {
          label: "End-of-Class Share-Out",
          detail: "Each pair shares 1–2 takeaways from the fact-checking activity and any additional strategies they use when evaluating potentially AI-generated information. If time permits: What harms concern you most about AI-generated inaccuracies, hallucinations, and slop?",
          time: "10 min",
        },
      ],
      onlineVersion: {
        description: "Students independently fact-check both claims using the SNIFF test, then post a 150-word reflection to the discussion forum describing which claim was harder to evaluate, which SNIFF test elements they found most useful, and one harm they're most concerned about. They reply to at least one peer's post.",
      },
      grading: [
        "Each pair contributing at least one reflection, suggestion, or comment during the share-out",
        "Active listening — building on peers' ideas and helping the class develop a shared understanding",
      ],
      resources: [
        { title: "SNIFF Test (downloadable PDF)", url: "/sniff-test.pdf" },
        { title: "\"Why are LLMs still hallucinating?\" — Duke University Libraries", url: "https://blogs.library.duke.edu/blog/2026/01/05/its-2026-why-are-llms-still-hallucinating/" },
        { title: "\"What is a Deepfake?\" — BBC (4 min. video)", url: "https://youtu.be/cZFqcvhHkcI" },
      ],
    },
    {
      id: "trust-2",
      slug: "ai-slop",
      number: 2,
      type: "in-class",
      title: "Impacts of AI Slop",
      tagline: "Analyzing real-world consequences of low-quality AI-generated content",
      purpose: "Understand and analyze the ways AI slop enters our media and information environment, consider its real-world consequences for artists, news media, and the broader information landscape, and think through potential solutions — even when perfect fixes don't exist.",
      objectives: [
        "Describe the concept of AI slop",
        "Identify the potential consequences of AI slop",
      ],
      steps: [
        {
          label: "Pre-Class Video",
          detail: "Watch \"AI Slop: Last Week Tonight with John Oliver\" (29 min.). While watching, take brief notes: What is AI slop? What are some of the real-world harms described in the video?",
          instructorNote: "The John Oliver video is 29 minutes — plan your pre-class assignment accordingly. Students should arrive having watched the full video and taken notes.",
        },
        {
          label: "Stage 1 — Pairs",
          detail: "With your partner, discuss your initial reactions to the video. What, if anything, concerned you about the issues raised?",
          time: "5 min",
        },
        {
          label: "Stage 2 — Table Groups of 4–6",
          detail: "As a group, choose one area of AI slop impact from the video. Examples: impact on artists, content creators, and musicians; or impact on the news and media environment. Then discuss: What are the potential consequences in your chosen area? Who benefits from AI slop, and who is harmed? What is one possible solution — noting that John Oliver points out there are no easy answers?",
          time: "10 min",
        },
        {
          label: "End-of-Class Share-Out",
          detail: "Each group shares: the area of impact they selected, who is impacted and how, and one idea for mitigating harm in that area.",
          time: "10 min",
        },
      ],
      onlineVersion: {
        description: "After watching the John Oliver video, students write a 200-word discussion post choosing one area of AI slop impact, identifying key stakeholders (who benefits, who is harmed), and proposing one mitigation strategy. They respond to two peers who chose a different impact area.",
      },
      grading: [
        "Each pair engaging in a conversation about their reactions to the video",
        "Each table group describing how AI slop harms their chosen domain and proposing at least one feasible mitigation idea",
        "Active listening — building on peers' ideas and helping the class develop a shared understanding",
      ],
      resources: [
        { title: "\"AI Slop\" — Last Week Tonight with John Oliver (29 min. video)", url: "https://www.youtube.com/watch?v=TWpg1RmzAbc" },
      ],
    },
    {
      id: "trust-3",
      slug: "ai-bibliography",
      number: 3,
      type: "online",
      title: "AI Bibliography Add-On",
      tagline: "Testing whether AI can generate real scholarly sources for your research",
      purpose: "Evaluate AI-generated citations, practice locating and verifying academic sources, and identify potential citation hallucinations. Extend an existing research assignment by using an AI tool to generate citations and critically assessing their accuracy.",
      objectives: [
        "Describe the concept of AI hallucination",
        "Identify the potential consequences of AI hallucination or AI slop",
        "Apply strategies for fact-checking the accuracy and quality of AI-generated information",
      ],
      addOn: true,
      steps: [
        {
          label: "Pre-Reading",
          detail: "Read two articles: \"Why are LLMs still hallucinating?\" from the Duke University Libraries blog, and IBM's \"What are AI hallucinations?\" explainer.",
        },
        {
          label: "Prompt AI for Citations",
          detail: "Using your existing research topic, ask ChatGPT for 3 scholarly sources. Take a screenshot of your prompt and the AI's output. Then search for and verify each of the 3 sources using Google, Google Scholar, or your library's search tools.",
          instructorNote: "This activity uses Duke-specific tools (NetID login for ChatGPT, Duke Library resources). Edit these references to match your institution's tools and login systems.",
        },
        {
          label: "Discussion Forum Reflection",
          detail: "Post your screenshot to the discussion forum. Annotate each source (numbered 1–3) with notes about: (a) whether you were able to find it, (b) how you searched for it, and (c) any other observations. End with 1–2 sentences reflecting on the potential harms of AI information inaccuracies. Reply to at least one peer who has not yet received a response.",
        },
      ],
      grading: [
        "Annotations for all 3 AI-suggested sources addressing findability, search method, and observations",
        "A 1–2 sentence reflection on the potential consequences of AI hallucinations",
        "A substantive reply to at least one peer's post",
      ],
      resources: [
        { title: "\"Why are LLMs still hallucinating?\" — Duke University Libraries", url: "https://blogs.library.duke.edu/blog/2026/01/05/its-2026-why-are-llms-still-hallucinating/" },
        { title: "IBM (2023). \"What are AI hallucinations?\"", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
      ],
    },
  ],
  conversationStarters: [
    { id: "cs-trust-1", prompt: "Have you noticed an AI making a mistake or giving a strange answer? How did you figure out it was wrong? Were there any clues that made you suspicious?" },
    { id: "cs-trust-2", prompt: "Can you think of situations where an AI mistake, or AI slop, could cause real-world problems? Think about examples both in school and in everyday life." },
    { id: "cs-trust-3", prompt: "Who do you think should be responsible for false information generated by AI? The person using the AI, the company that made it, or someone else? Why do you think that?" },
    { id: "cs-trust-4", prompt: "Look at the \"Is it Safe to Use ChatGPT for Your Task?\" flowchart (https://x.com/shadbush/status/1616007675145240576). What are some scenarios where accurate output doesn't matter? How does the flowchart impact your thinking about your use of AI?" },
    { id: "cs-trust-5", prompt: "Scholars argue about whether to call erroneous AI outputs hallucinations, because the term reinforces the idea that AI is human. Other terms people prefer include: bullshit, mirage, and machine error, to name a few. What label do you think we should apply to false information generated by AI? Why?" },
  ],


  furtherRecommendations: [
    { title: "Andersen, R. (2026, January 22). [Science Is Drowning in AI Slop](https://www.theatlantic.com/science/2026/01/ai-slop-science-publishing/685704/). *The Atlantic*.", url: "https://www.theatlantic.com/science/2026/01/ai-slop-science-publishing/685704/" },
    { title: "Knibbs, K. (2024, October 28). [AI slop is flooding Medium](https://www.wired.com/story/ai-generated-medium-posts-content-moderation/). *Wired*.", url: "https://www.wired.com/story/ai-generated-medium-posts-content-moderation/" },
    { title: "Wallace-Wells, D. (2024, July 24). [Opinion | How long will A.I.'s 'slop' era last?](https://www.nytimes.com/2024/07/24/opinion/ai-annoying-future.html) *The New York Times*.", url: "https://www.nytimes.com/2024/07/24/opinion/ai-annoying-future.html" },
    { title: "Kircher, M. M. (2025, March 27). [People love Studio Ghibli. But should they be able to recreate it?](https://www.nytimes.com/2025/03/27/style/ai-chatgpt-studio-ghibli.html) *The New York Times*.", url: "https://www.nytimes.com/2025/03/27/style/ai-chatgpt-studio-ghibli.html" },
    { title: "Blum, D., & Astor, M. (2025, May 29). [White House health report included fake citations](https://www.nytimes.com/2025/05/29/well/maha-report-citations.html). *The New York Times*.", url: "https://www.nytimes.com/2025/05/29/well/maha-report-citations.html" },
    { title: "[*When AI gets it wrong, who's on the hook? – Tech News Briefing – WSJ Podcasts*](https://www.wsj.com/podcasts/tech-news-briefing/when-ai-gets-it-wrong-whos-on-the-hook/5813b80c-d186-400d-8cae-c5409f6f9ab5). (2023, April 4). *The Wall Street Journal*.", url: "https://www.wsj.com/podcasts/tech-news-briefing/when-ai-gets-it-wrong-whos-on-the-hook/5813b80c-d186-400d-8cae-c5409f6f9ab5" },
    { title: "IBM. (2023, April 20). [*Why Large Language Models Hallucinate*](https://www.youtube.com/watch?v=cfqtFvWOfg0).", url: "https://www.youtube.com/watch?v=cfqtFvWOfg0" },
    { title: "Emsley, R. (2023). [ChatGPT: These are not hallucinations – they're fabrications and falsifications](https://doi.org/10.1038/s41537-023-00379-4). *Schizophrenia*, 9(1), 52.", url: "https://doi.org/10.1038/s41537-023-00379-4" },
    { title: "Goddard, J. (2023). [Hallucinations in ChatGPT: A cautionary tale for biomedical researchers](https://doi.org/10.1016/j.amjmed.2023.06.012). *The American Journal of Medicine*.", url: "https://doi.org/10.1016/j.amjmed.2023.06.012" },
    { title: "Kalai, A. T., Nachum, O., Vempala, S. S., & Zhang, E. (2025). [Why Language Models Hallucinate](https://doi.org/10.48550/arXiv.2509.04664) (No. arXiv:2509.04664). *arXiv*.", url: "https://doi.org/10.48550/arXiv.2509.04664" },
    { title: "Kim, Y., Jeong, H., et al. (2025). [Medical Hallucinations in Foundation Models and Their Impact on Healthcare](https://doi.org/10.48550/arXiv.2503.05777) (No. arXiv:2503.05777). *arXiv*.", url: "https://doi.org/10.48550/arXiv.2503.05777" },
    { title: "Mills, A., & Angell, N. (2025). [Are we tripping? The mirage of AI hallucinations (SSRN Scholarly Paper No. 5127162)](https://doi.org/10.2139/ssrn.5127162). *Social Science Research Network*.", url: "https://doi.org/10.2139/ssrn.5127162" },
    { title: "Charloten, D. (2025). [*AI hallucination cases*](https://www.damiencharlotin.com/hallucinations/). A database compiling fake citations in court filings (160 to date).", url: "https://www.damiencharlotin.com/hallucinations/" },
    { title: "Banerjee, S., Agarwal, A., & Singla, S. (2024). [LLMs will always hallucinate, and we need to live with this](https://doi.org/10.48550/arXiv.2409.05746) (No. arXiv:2409.05746). *arXiv*.", url: "https://doi.org/10.48550/arXiv.2409.05746" },
  ],

  disciplinaryExtensions: [
    { id: "de-trust-1", discipline: "Social Sciences", prompt: "Conduct a case study on the impact of AI slop within a specific field's publications." },
    { id: "de-trust-2", discipline: "Psychology", prompt: "What role do cognitive biases play in how people select and prioritize information?" },
    { id: "de-trust-3", discipline: "Arts & Humanities", prompt: "Discuss the pros and cons of AI mimicry within different types of creative works." },
    { id: "de-trust-4", discipline: "Computer Science / Engineering", prompt: "Take a deeper dive into the technical underpinnings of AI hallucination." },
    { id: "de-trust-5", discipline: "Literature / Creative Writing", prompt: "Ask a chatbot to generate a story or poem in the style of a well known writer." },
  ],

  pageNotes: [
    { id: 1, text: "O'Brien, M. (2023, August 1). [Chatbots can make things up. Can we fix AI's hallucination problem?](https://www.pbs.org/newshour/science/chatbots-can-make-things-up-can-we-fix-ais-hallucination-problem) *PBS News*." },
    { id: 2, text: "Hallucination is the term used most widely to explain the phenomena within the AI industry. It has been noted that the framing of \"hallucination\" anthropomorphizes AI models and is an imperfect metaphor. A more precise term for the phenomena may be \"machine error\" or \"AI mirage\" (as advocated for in [Mills & Angell, 2025](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5127162))." },
    { id: 3, text: "OpenAI. (2023). GPT-4: [System Card](https://cdn.openai.com/papers/gpt-4-system-card.pdf)." },
    { id: 4, text: "Jaźwińska, K., & Chandrasekar, A. (2025). [AI Search Has A Citation Problem](https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php). *Columbia Journalism Review*." },
  ],

  connectedTopics: [
    { topicId: "disinfo", relation: "Shares the SNIFF test framework; deepfake analysis extends into disinformation campaigns" },
    { topicId: "bias", relation: "AI slop and hallucinations intersect with questions of whose perspectives get amplified or distorted" },
    { topicId: "thinking", relation: "Overreliance on AI outputs connects directly to uncritical acceptance of hallucinated content" },
  ],

  belowActivitiesLearningNote: "Before using any activity, verify external media links — deepfake videos are regularly removed from platforms, and news articles move behind paywalls. The SNIFF Test PDF is a shared framework you can reuse across topics. For Activity 3, replace Duke-specific login instructions with your institution's AI-tool access before assigning.",
};
