// ─── Content: "Is AI a Spy?" ───

import SpyIllustration from "../../components/illustrations/SpyIllustration.jsx";

export const spyContent = {
  Illustration: SpyIllustration,

  expertQuote: {
    text: "Generative AI completely obliterates the idea of individual responsibility for privacy because you can't control these algorithms' access to your information, or what they do with it.[^1]",
    source: "Dr. Alice Marwick, media scholar",
  },

  introduction: [
    "Sam Altman, CEO of OpenAI, recently tweeted that ChatGPT's improved memory meant that it can now reference past conversations and \"get to know you over your life.\"[^2] Is this helpful, or creepy? **AI privacy** involves how your personal information is collected, used, and shared by AI companies. This includes data scraped from the web without your consent *and* data you input into AI systems through prompts. A 2023 Pew Research poll found that 81% of Americans who had heard of AI believe the information collected by AI companies will be used in ways people are uncomfortable with or that weren't originally intended.[^3] Pew Research also found that 6 in 10 Americans frequently skip reading privacy policies. This highlights the \"privacy paradox,\" the gulf between people's attitudes towards protecting their privacy and their actual online behavior.[^4] Despite privacy concerns, many people freely give away their personal data for the convenience of using apps, websites, and now AI tools. For students, AI privacy is particularly significant. As students rely on AI tools for learning, research, writing, and even personal advice, they should be mindful of the sensitive data they share and consider when it's appropriate to disclose information.",
  ],

  keyTerms: [
    { term: "Privacy Paradox", definition: "The gulf between people's attitudes towards protecting their privacy and their actual online behavior." },
    { term: "AI Privacy", definition: "How personal information is collected, used, and shared by AI companies." },
  ],

  learningObjectives: [
    "Describe the concept of privacy as it relates to AI",
    "Identify examples of personal data sources that AI systems might use",
    "Discuss how AI data collection may impact individuals differently based on job type, race, gender, socioeconomic status, or other aspects of identity",
    "Reflect on your own personal data-sharing practices with AI tools",
  ],

  questionLearningNote: "This topic asks students to examine AI privacy practices through policy review, identity-based reflection, and personal experimentation. Activity 2 (the Card Sort Game) is the most prep-intensive and requires printing card sets from the Ethical Tech resource before class. Activity 3 involves students searching their own name in ChatGPT — some may find inaccurate or personally sensitive results; prepare students for this possibility and offer the alternative of searching a family member or professor.",

  activities: [
    {
      id: "spy-1",
      slug: "privacy-policy",
      number: 1,
      type: "in-class",
      title: "AI Privacy Policy Review",
      tagline: "Analyzing what AI companies actually do with your data",
      purpose: "Analyze the privacy policies of major AI companies and compare them with public attitudes toward AI and data privacy. Using the jigsaw method, build a collective understanding of how different AI companies describe their data practices — and what those practices mean for users.",
      objectives: [
        "Identify examples of personal data sources that AI systems might use",
        "Reflect on personal data-sharing practices with AI tools",
      ],
      sharedFramework: {
        name: "Jigsaw Technique",
        description: "A cooperative learning structure where each group masters one piece of content, then regroups to teach peers — building collective understanding",
        alsoUsedIn: ["sustainable"],
      },
      steps: [
        { label: "Pre-Class Reading & Annotation", detail: "Each group reads and annotates one assigned document: Meta Privacy Policy, Google Gemini Privacy Policy, OpenAI Privacy Policy, or the Pew Research Survey on American Attitudes Toward Privacy.", instructorNote: "Divide your class into 3–4 equal groups and assign each group one document. If using Hypothes.is, create an assignment in Canvas for each group. Otherwise, assign as straightforward pre-class reading with independent notes." },
        { label: "Stage 1 — Original Groups", detail: "Students meet with peers who read the same document. Discuss: What was your initial reaction? What surprised you? What were the main takeaways from your privacy policy or survey?", time: "10 min" },
        { label: "Stage 2 — Mixed Groups", detail: "Reorganize so each person in the new group read a different document. Each person describes the gist of their document. Are there overlaps? What might the implications be for an individual's privacy?", time: "10 min" },
        { label: "Stage 3 — Whole-Class Discussion", detail: "What are the major takeaways about AI's impacts on privacy? How does the Pew Research survey compare with the companies' policies? Do people have cause for concern?", time: "10 min", instructorNote: "For large classes, use Wooclap, a shared Google Doc, or Padlet to collect student responses during the share-out." },
      ],
      onlineVersion: { description: "Assign each student one of the four documents. Students post a 150-word summary of their document's key privacy practices and respond to two peers who read different documents, identifying overlaps and concerns across policies." },
      grading: [
        "Reading the assigned document before class",
        "Participating in all three stages of the Jigsaw discussion",
        "Contributing to the whole-class discussion",
      ],
      resources: [
        { title: "Meta Privacy Policy", url: "https://www.facebook.com/privacy/policy/" },
        { title: "Google Gemini Privacy Policy", url: "https://support.google.com/gemini/answer/13594961?hl=en" },
        { title: "OpenAI Privacy Policy", url: "https://openai.com/policies/row-privacy-policy/" },
        { title: "Pew Research: American Attitudes on Privacy", url: "https://www.pewresearch.org/short-reads/2023/10/18/key-findings-about-americans-and-data-privacy/" },
      ],
    },
    {
      id: "spy-2",
      slug: "card-sort",
      number: 2,
      type: "in-class",
      title: "Data, Privacy, & Identity Card Sort Game",
      tagline: "How privacy risks shift depending on who you are",
      purpose: "Examine how AI data collection affects people differently based on their job, race, gender, socioeconomic status, or other aspects of identity. Explore your own privacy perspectives, work through data-sorting scenarios, and discover how vulnerability to surveillance is not equally distributed.",
      objectives: [
        "Identify examples of personal data sources that AI systems might use",
        "Discuss how AI data collection may impact individuals differently based on different aspects of their identity",
      ],
      steps: [
        { label: "Pre-Class Reading", detail: "Read \"Privacy for Whom?\" — an article exploring how privacy risks are distributed unequally across different communities and identities." },
        { label: "Personal Reflection", detail: "Write privately (not collected): Is privacy important to you? Who gets to view your messages or data? How do you know if your communication is private? What kinds of activities or data should remain private?", time: "5–10 min" },
        { label: "Card Sort — Round 1", detail: "In pairs or small groups, sort Data Type cards into privacy levels: Not collected/stored, No idea, Private to me and the company, I choose who sees this, Totally public. There are no correct answers.", time: "15–20 min", instructorNote: "Print Data Type cards (pp. 2–4), Privacy Level cards (p. 5), and Identity Lens cards (p. 7) from the Ethical Tech resource before class. This activity requires significant advance preparation." },
        { label: "Identity Lens — Round 2", detail: "Each group receives an Identity Lens card (e.g., undocumented immigrant, domestic violence survivor, person with a criminal record). Replay Round 1 through the lens of this assigned identity. Did your choices change? How did the identity affect your feelings about data collection?", time: "15–20 min", instructorNote: "Round 2 can be replayed multiple times with different identity cards, and revisited throughout the semester in relation to current events." },
        { label: "Wrap-Up", detail: "Reflect together: Who benefits from data collection? Who faces the biggest risks?" },
      ],
      onlineVersion: { description: "Students complete the personal reflection independently, then participate in a discussion forum where they describe how they would sort 5 given data types across the privacy levels — first for themselves, then through an assigned Identity Lens. They respond to two peers whose identity lens differed from theirs." },
      grading: [
        "Articulating your own viewpoint on privacy through the written reflection",
        "Contributing thoughtful reflections about the privacy implications of the identities explored",
        "Demonstrating openness to different perspectives throughout the card sort",
      ],
      resources: [
        { title: "\"Privacy for Whom?\"", url: "https://thenewinquiry.com/privacy-for-whom/" },
        { title: "Ethical Tech: Identity, Privacy, & Privilege — Card Set (CC BY 4.0)", url: "https://ethical.tech/identity-privacy-privilege-using-data-to-discuss-systemic-racism/" },
      ],
    },
    {
      id: "spy-3",
      slug: "what-ai-knows",
      number: 3,
      type: "online",
      title: "What Does AI Know About Me?",
      tagline: "A firsthand look at how AI uses personal data",
      purpose: "Get a firsthand look at how AI tools use personal and internet data — and reflect on what that means for your own privacy practices and values.",
      objectives: [
        "Describe the concept of privacy as it relates to AI",
        "Identify examples of personal data sources that AI systems might use",
        "Reflect on your own personal data-sharing practices with AI tools",
      ],
      steps: [
        { label: "Pre-Reading", detail: "Read two short articles: \"You are not responsible for your own privacy\" by Alice Marwick, and \"ChatGPT has receipts, will now remember everything you've ever told it\" by Jess Joseph." },
        { label: "Prompt AI About Yourself", detail: "Ask ChatGPT: \"Who is [Your Name]?\" — add your hometown or institution if you have a common name. If no relevant results appear, try a family member's or professor's name. Take a screenshot.", instructorNote: "If a student has a very common name and no results come up, they can search a sibling's, parent's, friend's, or professor's name instead." },
        { label: "Write Your Reflection", detail: "Write a 1–2 page reflection including: your screenshot, observations about what the AI cited and whether it was accurate, and connections to the pre-readings — especially considering Zuckerberg's claim that \"young people no longer care about privacy\" and Altman's statement that ChatGPT can \"get to know you over your life.\"" },
      ],
      grading: [
        "A screenshot of the ChatGPT prompt and output",
        "Thoughtful observations about source evaluation and accuracy",
        "A clear connection to at least one idea from the pre-readings",
        "A personal articulation of what privacy means to you",
      ],
      resources: [
        { title: "Marwick, A. \"You are not responsible for your own privacy.\"", url: "https://www.wired.com/story/you-are-not-responsible-for-your-own-online-privacy/" },
        { title: "Joseph, J. \"ChatGPT has receipts...\"", url: "https://www.pcmag.com/news/chatgpt-memory-will-remember-everything-youve-ever-told-it" },
      ],
    },
  ],
  conversationStarters: [
    { id: "cs-spy-1", prompt: "What privacy protections do you use to safeguard your identity online? Do you use caution with the information you enter into AI tools? Do you read privacy policies?" },
    { id: "cs-spy-2", prompt: "Would you ever talk to an AI chatbot as a friend or confidant? How do the responses make you feel? If you use AI in this way, how is what you share different (or the same) to what you'd share with a friend?" },
    { id: "cs-spy-3", prompt: "Can you think of situations where it might be harmful for AI companies to collect, train on, or share someone's private information? Are there times where AI personalization features are actually helpful?" },
    { id: "cs-spy-4", prompt: "Who should be responsible for protecting a person's privacy in an AI system? Should it be the individual, the AI company, or the government?" },
    { id: "cs-spy-5", prompt: "What ethical considerations should guide the use of generative AI in collecting or analyzing sensitive data, such as private conversations or biometric information?" },
  ],


  furtherRecommendations: [
    { title: "Bogost, I., & Warzel, C. (2025, April 27). [American panopticon](https://www.theatlantic.com/technology/archive/2025/04/american-panopticon/682616/). *The Atlantic*.", url: "https://www.theatlantic.com/technology/archive/2025/04/american-panopticon/682616/" },
    { title: "Burgess, M. (2024, October 12). [How to stop your data from being used to train AI](https://www.wired.com/story/how-to-stop-your-data-from-being-used-to-train-ai/). *Wired*.", url: "https://www.wired.com/story/how-to-stop-your-data-from-being-used-to-train-ai/" },
    { title: "Roose, K., et al. (2021, August 20). [Why Apple is about to search your files](https://www.nytimes.com/2021/08/20/podcasts/the-daily/apple-iphones-privacy.html). *The New York Times*.", url: "https://www.nytimes.com/2021/08/20/podcasts/the-daily/apple-iphones-privacy.html" },
    { title: "Hargittai, E., & Marwick, A. (2016). [\"What can I really do?\" Explaining the privacy paradox with online apathy](https://ijoc.org/index.php/ijoc/article/view/4655/1738). *International Journal of Communication*, 10.", url: "https://ijoc.org/index.php/ijoc/article/view/4655/1738" },
    { title: "[Digital Shred, Privacy Literacy Toolkit](https://sites.psu.edu/digitalshred/) (Penn State University).", url: "https://sites.psu.edu/digitalshred/" },
    { title: "[AI Pedagogy Project (Harvard) Assignments](https://aipedagogy.org/assignments) → Filter by theme (e.g. privacy) and/or subject (e.g. ethics & philosophy).", url: "https://aipedagogy.org/assignments" },
    { title: "[Privacy-related articles](https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=1436331173#gid=1436331173) from the AI Ethics & Policy News Aggregator sourced by [Casey Fiesler](https://caseyfiesler.com/).", url: "https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=1436331173#gid=1436331173" },
  ],

  disciplinaryExtensions: [
    { id: "de-spy-1", discipline: "Biology / Ethics", prompt: "Students could explore common biometric data collection methods (e.g. fingerprint, facial recognition, DNA sequencing) used in biology and medicine. Ask students to reflect on the ethical implications of different forms of biometric data collection." },
    { id: "de-spy-2", discipline: "Social Sciences", prompt: "Students could explore how breaches of privacy disproportionately harm people from marginalized groups within the context of a given social concern (e.g. AI in policing, healthcare, immigration)." },
    { id: "de-spy-3", discipline: "Philosophy", prompt: "Where is the line between a right to privacy and surveillance for the sake of security?" },
    { id: "de-spy-4", discipline: "Computer Science / Engineering", prompt: "What are some techniques and/or mechanisms that can be incorporated into AI tools to provide more privacy for people?" },
  ],

  pageNotes: [
    { id: 1, text: "Marwick, A. (2023, August 24). [You Are Not Responsible for Your Own Online Privacy](https://www.wired.com/story/you-are-not-responsible-for-your-own-online-privacy/). *Wired*." },
    { id: 2, text: "Sam Altman [@sama]. (2025, April 10). *We have greatly improved memory in chatgpt—It can now reference all your past conversations! This is a surprisingly great feature imo, and it points at something we are excited about: AI systems that get to know you over your life, and become extremely useful and personalized.* [[Tweet](https://x.com/sama/status/1910380643772665873)]. Twitter." },
    { id: 3, text: "Faverio, M. (2023, October 18). [Key findings about Americans and data privacy](https://www.pewresearch.org/short-reads/2023/10/18/key-findings-about-americans-and-data-privacy/). *Pew Research Center*." },
    { id: 4, text: "Hargittai, E., & Marwick, A. (2016). [\"What Can I Really Do?\" Explaining the Privacy Paradox with Online Apathy](https://ijoc.org/index.php/ijoc/article/view/4655). *International Journal of Communication*, 10." },
  ],

  connectedTopics: [
    { topicId: "trust", relation: "Shares privacy-adjacent concerns about data manipulation and trustworthiness" },
    { topicId: "disinfo", relation: "Connects surveillance infrastructure to information manipulation" },
    { topicId: "builds", relation: "Explores data labor, consent, and who contributes to AI systems" },
  ],

  belowActivitiesLearningNote: "Activity 2 requires significant advance preparation — print the card sets from the Ethical Tech resource before class. The card sort can be revisited multiple times with different identity lens cards throughout the semester. Activity 3 asks students to search their own name; prepare them for the possibility of inaccurate or personally sensitive results, and offer the alternative of searching a family member or professor.",
};
