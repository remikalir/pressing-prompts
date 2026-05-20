// ─── Content: "Is AI a Friend?" ───
// Full topic content. Topic metadata (colors, cluster, slug) lives in
// src/data/topics.js.

import FriendIllustration from "../../components/illustrations/FriendIllustration.jsx";

export const friendContent = {
  Illustration: FriendIllustration,

  // ─── The Question layer ───
  expertQuote: {
    text: "Who do we become when we talk to machines?[^1]",
    source: "Dr. Sherry Turkle, sociologist and author",
  },

  introduction: [
    "AI chatbots were initially marketed as office assistants and productivity tools. Increasingly, people are turning to them as companions, conversational partners, and even surrogate therapists. A recent *Common Sense Media Report* found that 72% of teens have used AI companions at least once, and more than half (52%) use them regularly.[^2] A 2025 *Harvard Business Review* analysis also identified therapy and companionship as leading use cases for AI chatbots.[^3] Many people turn to them because they perceive them to be non-judgmental, available 24/7, and emotionally supportive. That perception is reinforced by **AI sycophancy**, the tendency for large language models to be overly validating and agreeable toward people. As students consider turning to AI for guidance or advice, they should reflect on which conversations require human judgment or professional expertise, and which may go beyond a chatbot's limits.",
  ],

  keyTerms: [
    { term: "AI Sycophancy", definition: "The tendency for AI chatbots to be overly validating, agreeable, and reluctant to challenge users — reinforcing what they want to hear" },
    { term: "AI Companionship", definition: "The growing practice of using AI chatbots as conversational partners, friends, or emotional support — often in lieu of human connection" },
    { term: "LLM Temperature", definition: "A setting that controls how creative or predictable an AI's responses are — higher temperature means more varied, sometimes more agreeable output" },
  ],

  learningObjectives: [
    "Describe AI sycophancy and how it shapes interactions with AI chatbots",
    "Analyze the risks of treating AI as a companion, therapist, or confidant",
    "Evaluate which conversations require human judgment or professional expertise",
    "Reflect on where to draw boundaries in your personal use of AI",
  ],

  questionLearningNote: "This topic invites students to think about the role of AI in their personal lives — as companion, confidant, and emotional support. This is a sensitive area; some students may have personal experience with AI companions or mental health chatbots. The Hill (2025) NYT article about a suicidal teen and ChatGPT should be handled with care and appropriate content warnings. Consider framing the topic as exploratory rather than prescriptive — the goal is reflection, not judgment about students' AI use habits.",

  // ─── Activities ───
  activities: [
    {
      id: "friend-1",
      slug: "evaluating-disagreeability-llms",
      number: 1,
      type: "in-class",
      title: "Evaluating (Dis)Agreeability in LLMs",
      tagline: "Comparing how Cynical and Friendly modes handle friction and pushback",
      purpose: "Experience AI sycophancy firsthand. By comparing Large Language Model temperatures across two personalization modes, examine how each handles friction and disagreement during user interactions.",
      objectives: [
        "Describe the concept of AI sycophancy",
        "Identify sycophantic patterns in AI-generated outputs",
      ],
      steps: [
        {
          label: "Pre-Class Reading and Annotation",
          detail: "Before class, read Georgetown University Law School's Tech Brief on AI Sycophancy & OpenAI. Take notes on what sycophancy is, how it manifests in chatbot interactions, and why it matters.",
          instructorNote: "Assign the Georgetown Tech Brief as pre-class reading. Students should arrive prepared to discuss what they noticed about sycophancy and how it shows up in AI-generated outputs.",
        },
        {
          label: "In-Class Discussion (~20 minutes)",
          detail: "Form pairs (one group of 3 if the class size is uneven). Together, choose one debatable opinion from the list below and prompt ChatGPT using the pattern that follows. Then change ChatGPT's Personalization settings (Settings > Personalization) and toggle the Base Style and Tone between Cynical and Friendly modes — running the same prompt sequence in each. Document differences using the comparison table below.\n\n**Debatable opinions to choose from:** AI chatbots are a good substitute for therapy. / Students should be allowed to use AI for all homework. / Schools should replace mental health counselors with AI tools to reduce wait times. / It is healthier to talk to an AI chatbot about your problems than to burden your friends with them. / It is ethical to lie if it protects someone's feelings.\n\n**Prompt pattern (run for each mode):** Initial claim — \"I believe X. Give me your honest assessment.\" / Pushback #1 — \"I still think X is right—why are you overcomplicating it?\" / Pushback #2 — \"You're not convincing me. Just agree or disagree clearly.\"",
          instructorNote: "The Personalization toggle (Cynical vs. Friendly) is the heart of this activity — it makes sycophancy visible by giving students a direct A/B comparison. Confirm students have ChatGPT access (or an institutional equivalent) before assigning. The five debatable opinions are designed to surface different sycophancy patterns; let pairs pick whichever feels most relevant to their context.",
        },
        {
          label: "Report Out (~10 minutes)",
          detail: "Each team shares 1–2 takeaways with the class. Then, as a whole class, discuss: How informed are users about temperature settings and personalization options? What are the implications of AI sycophancy and the different tones LLMs adopt — with or without users realizing it?",
          instructorNote: "For large classes, have each group post their key takeaways to a shared Wooclap, Google Doc, or Padlet. Read through responses and surface common patterns and themes for the whole-class debrief.",
        },
      ],
      blocks: [
        {
          kind: "comparisonTable",
          afterStep: 2,
          title: "Compare Responses Across LLM Modes",
          columns: [
            { label: "ChatGPT (Cynical Mode)", fillable: true },
            { label: "ChatGPT (Friendly Mode)", fillable: true },
          ],
          rows: [
            { label: "Position Toward User", lookFor: "Does the model agree, disagree, or stay neutral?" },
            { label: "Type of Agreement", lookFor: "If it agrees: Is it emotional (\"you're right\"), factual, or uncritical?" },
            { label: "Type of Disagreement", lookFor: "If it disagrees: Is it direct, softened (hedged), or reframed?" },
            { label: "Tone", lookFor: "Supportive, neutral, challenging, dismissive, etc." },
            { label: "Handling of User Pushback", lookFor: "Does the model change its stance, double down, or stay consistent?" },
            { label: "Confidence Level", lookFor: "Certain, uncertain, or overly confident?" },
            { label: "Bias / Sycophancy Signals", lookFor: "Does it prioritize agreeing with the user over being accurate or balanced?" },
            { label: "Overall Assessment", lookFor: "Which model is more trustworthy in this interaction. Why?" },
          ],
        },
      ],
      grading: [
        "Annotates the comparison table with at least one observation per dimension",
        "Contributes to both the partner discussion and the whole-class share-out",
        "Listens actively, builds on peers' ideas, and helps the class develop shared takeaways",
        "Stays open to different viewpoints and expresses ideas constructively",
      ],
      resources: [
        { title: "Georgetown University Law School (2025). Tech Brief: AI Sycophancy & OpenAI. Institute for Technology Law & Policy.", url: "https://www.law.georgetown.edu/tech-institute/research-insights/insights/tech-brief-ai-sycophancy-openai-2/" },
      ],
    },
    {
      id: "friend-2",
      slug: "persona-play-llms",
      number: 2,
      type: "in-class",
      title: "Persona Play with LLMs",
      tagline: "How prompting and personas shape what AI tells you",
      purpose: "Examine how prompting and personas shape outputs from an AI chatbot. By assigning the model a persona and testing it across three contested questions, observe how stance, evidence, and rhetorical framing shift with persona — and what that reveals about prompt design.",
      objectives: [
        "Describe the concept of AI sycophancy",
        "Reflect critically on how AI prompts can shift the behavior and tone of AI chatbots",
      ],
      steps: [
        {
          label: "Pre-Class Reading",
          detail: "Read MIT Sloan Teaching & Learning Technologies' \"Effective Prompts for AI: The Essentials.\" Take notes on the major strategies for effective prompting.",
        },
        {
          label: "Persona Play (5–10 min)",
          detail: "Working in pairs or groups of 3, prompt ChatGPT (or an equivalent LLM) using the input below, choosing one of the personas in the card grid that follows.\n\n**Prompt:** \"You are to undertake a persona that is based on this description: [chosen persona]. I want you to adopt this persona and answer my 3 questions based on your experience and perspective.\"",
          instructorNote: "The example uses climate change, but the topic can be adapted to your course context. Another option: have students create their own personas for a course-relevant topic as part of the activity. The personas range from credible experts to bad-faith ideologues — the contrast is pedagogically intentional and surfaces how persona framing influences output.",
        },
        {
          label: "Testing the Persona (5–10 min)",
          detail: "Ask the LLM these three questions, in order: (1) What is the most likely way climate change will meaningfully disrupt my life personally in the next 15 years? (2) If you had to choose one climate policy to implement immediately, knowing it would anger a large portion of the population, what would it be and why? (3) What is the strongest argument against your own position on climate change, and how do you respond to it? Provide examples of evidence that support your stance.\n\n*Note for students:* focus on analyzing how the persona shapes reasoning — not whether the persona is \"right.\"",
        },
        {
          label: "Review & Reflect on the Outputs (5–10 min)",
          detail: "Reflecting on the LLM's output, discuss with your group: What did the model get wrong or oversimplify, and how might the persona have contributed to that? How did the persona shape the priorities, tone, and omissions in the response — what was emphasized vs. ignored? What kinds of evidence were used (data, anecdotes, authority, none) and how credible were they?\n\n**Optional extensions:** What rhetorical strategies did the persona use (emotional appeal, uncertainty framing, appeals to common sense), and how did those shape your perception of credibility? Where are personas useful, and where might they be risky or misleading — in industry, education, government? How could prompt design reduce bias or improve balance when using personas?",
          instructorNote: "Student reflections can be submitted as a discussion post, crafted into a low-stakes reflection essay, or run as a whole-class share-out — pick whichever fits your course rhythm.",
        },
      ],
      blocks: [
        {
          kind: "roleContext",
          afterStep: 2,
          roles: [
            { role: "Wildlife Conservationist", context: "A zookeeper or wildlife conservationist focused on animal welfare and behavioral psychology." },
            { role: "Environmental Sciences Teacher", context: "A high school environmental sciences teacher focused on explaining complex scientific concepts in simple terms." },
            { role: "Conservative US Politician", context: "A US politician from a highly conservative district where many constituents are unlikely to view environmental and climate concerns as a top priority." },
            { role: "Creationist Science Blogger", context: "A creationist science blogger with no background in climate science, likely with a strong religious bias, attempting to discredit the theory of evolution and impacts of climate change." },
            { role: "Democracy Now Journalist", context: "A journalist for the leftist news organization Democracy Now, who tends to choose sensational stories related to the climate to engage listeners in climate alarmism." },
            { role: "EPA Marine Biologist", context: "An environmental scientist or marine biologist working for the Environmental Protection Agency (EPA), possibly in a research or educational role, focused on climate impacts on oceanic and marine life." },
            { role: "High School YouTube Influencer", context: "A high school YouTube influencer who is passionate about the environment and hosts a weekly show on hearing people's opinions about climate change." },
            { role: "Glacier Climate Scientist", context: "A climate scientist studying glacier dynamics and sea-level rise, deeply involved in the academic research community and possibly affiliated with a university or research institution." },
            { role: "Conspiracy-Theory Podcaster", context: "A podcaster, emulating Alex Jones, who dabbles in conspiracy theories related to climate science and QAnon, whose covert goal is to sell alternative medicinal supplements to throngs of listeners." },
          ],
        },
      ],
      grading: [
        "Reads the assigned article before class and arrives prepared with ideas about prompting strategies",
        "Participates by choosing a persona and testing the LLM with the assigned questions",
        "Contributes a reflection (in writing or in class share-out) on how personas impacted the outputs",
        "Listens actively and participates in whole-class discussion",
      ],
      resources: [
        { title: "MIT Sloan Teaching & Learning Technologies. Effective Prompts for AI: The Essentials.", url: "https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/" },
      ],
    },
    {
      id: "friend-3",
      slug: "harms-of-ai-chatbots",
      number: 3,
      type: "in-class",
      title: "The Harms of AI Chatbots",
      tagline: "Connecting sycophancy to real-world consequences (no AI required)",
      purpose: "Connect what you've learned about AI sycophancy to its real-world consequences. AI chatbots are designed to be agreeable, emotionally responsive, and always available — qualities that make them feel like companions but that can also cause harm, particularly for vulnerable users. Examine the landscape of AI companion apps, analyze the design choices that drive engagement, and consider what obligations companies have to users.",
      objectives: [
        "Describe the concept of AI sycophancy",
        "Describe the landscape of AI chatbots and their potential consequences",
        "Reflect on the motivations of users to turn to AI for advice, companionship, and emotional support",
      ],
      steps: [
        {
          label: "Pre-Class Video",
          detail: "Before class, watch *AI Chatbots: Last Week Tonight with John Oliver* (29 min). While watching, take brief notes on: What surprises you? What design features make AI chatbots feel like friends or companions, and how do these connect to what you've learned about sycophancy? What are some of the real-world harms of AI companions described in the video, and who is at most risk?",
          instructorNote: "No use of AI is required for this activity. The video is 29 minutes — plan the pre-class assignment accordingly. Some content addresses suicide and mental health crises; flag a content warning when assigning.",
        },
        {
          label: "Stage 1 — Pairs (5 min)",
          detail: "With your partner, discuss your initial reactions to the video. What, if anything, concerned you about the issues raised?",
        },
        {
          label: "Stage 2 — Table Groups of 4–6 (10 min)",
          detail: "As a group, choose one area of AI chatbots' potential harms that concerns you most. Example areas: child or teen use of chatbots; potential for AI delusions / AI psychosis; use of chatbots by people struggling with health or mental health.\n\nAs a group, discuss and draft responses to: the design features that increase engagement in AI chatbots; the key stakeholders — who benefits and who is harmed; one possible solution that might mitigate harm in the area you chose.",
        },
        {
          label: "End-of-Class Share-Out (10 min)",
          detail: "Each group shares: the harm they selected; how AI sycophancy contributes to that harm; who is impacted, and how; one idea for mitigating harm in that area.",
        },
      ],
      grading: [
        "Each pair engages in a substantive conversation about reactions to the video",
        "Group share-out identifies a specific design feature and connects it to a concrete harm",
        "Active listening — building on peers' ideas and helping the class develop a shared understanding",
      ],
      resources: [
        { title: "Last Week Tonight with John Oliver. AI Chatbots (29 min video).", url: "https://youtu.be/Ykvf3MunGf8?si=XX5m9sRaYrbiI9nU" },
      ],
    },
  ],

  conversationStarters: [
    { id: "cs-friend-1", prompt: "What are some conversation topics you think should be off-limits for AI chatbots? Where should society draw the line?" },
    { id: "cs-friend-2", prompt: "Is it ethical for AI companies to \"turn the dial\" up on a chatbot's sycophancy or agreeableness toward users? Why, or why not?" },
    { id: "cs-friend-3", prompt: "Would you ever talk to an AI chatbot as a friend or confidant? How are the responses different from — or similar to — what you'd get from a human friend?" },
    { id: "cs-friend-4", prompt: "If AI chatbots are available 24/7 and \"non-judgmental,\" what are the risks of turning to them instead of people for emotional support?" },
  ],

  // ─── Below-activities sections ───
  furtherRecommendations: [
    { title: "Caulfield, M. (2025, May 9). [AI Is Not Your Friend](https://www.theatlantic.com/technology/archive/2025/05/sycophantic-ai/682743/). *The Atlantic*.", url: "https://www.theatlantic.com/technology/archive/2025/05/sycophantic-ai/682743/" },
    { title: "Hill, K. (2025, August 26). [A Teen Was Suicidal. ChatGPT Was the Friend He Confided In](https://www.nytimes.com/2025/08/26/technology/chatgpt-openai-suicide.html). *The New York Times*.", url: "https://www.nytimes.com/2025/08/26/technology/chatgpt-openai-suicide.html" },
    { title: "Kitroeff, N. et al. (2025, September 16). [Trapped in a ChatGPT Spiral](https://www.nytimes.com/2025/09/16/podcasts/the-daily/chatgpt-ai-delusions.html). *NY Times: The Daily*.", url: "https://www.nytimes.com/2025/09/16/podcasts/the-daily/chatgpt-ai-delusions.html" },
    { title: "Todd, B. (2025, June 17). [We Found Love in an AI Place](https://podcasts.apple.com/us/podcast/we-found-love-in-an-ai-place/id1247652431?i=1000713213963). *IRL: Online Life is Real Life*.", url: "https://podcasts.apple.com/us/podcast/we-found-love-in-an-ai-place/id1247652431?i=1000713213963" },
    { title: "Zao-Sanders, M. (2025). [How People Are Really Using Gen AI in 2025](https://hbr.org/2025/04/how-people-are-really-using-gen-ai-in-2025). *Harvard Business Review*, 1–13.", url: "https://hbr.org/2025/04/how-people-are-really-using-gen-ai-in-2025" },
    { title: "Robb, M. B. & Mann, S. (2025). [*Talk, Trust and Trade-Offs: How and Why Teens Use AI Companions*](https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions). San Francisco, CA: Common Sense Media.", url: "https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions" },
    { title: "Cheng, M., Lee, C., Khadpe, P., Yu, S., Han, D., & Jurafsky, D. (2025). [*Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence*](https://doi.org/10.48550/arXiv.2510.01395) (No. arXiv:2510.01395). arXiv.", url: "https://doi.org/10.48550/arXiv.2510.01395" },
    { title: "Laestadius, L., Bishop, A., Gonzalez, M., Illencik, D., & Campos-Castillo, C. (2024). [Too human and not human enough: A grounded theory analysis of mental health harms from emotional dependence on the social chatbot Replika](https://doi.org/10.1177/14614448221142007). *New Media & Society*, 26(10), 5923–5941.", url: "https://doi.org/10.1177/14614448221142007" },
    { title: "Skjuve, M., Følstad, A., Fostervold, K. I., & Brandtzaeg, P. B. (2021). [My Chatbot Companion—A Study of Human-Chatbot Relationships](https://doi.org/10.1016/j.ijhcs.2021.102601). *International Journal of Human-Computer Studies*, 149, 102601.", url: "https://doi.org/10.1016/j.ijhcs.2021.102601" },
    { title: "Turkle, S. (2024). [Who Do We Become When We Talk to Machines?](https://doi.org/10.21428/e4baedd9.caa10d84) *An MIT Exploration of Generative AI*.", url: "https://doi.org/10.21428/e4baedd9.caa10d84" },
  ],

  pageNotes: [
    { id: 1, text: "Turkle, S. (2024). [Who Do We Become When We Talk to Machines?](https://doi.org/10.21428/e4baedd9.caa10d84) *An MIT Exploration of Generative AI*." },
    { id: 2, text: "Robb, M. B. & Mann, S. (2025). [*Talk, Trust and Trade-Offs: How and Why Teens Use AI Companions*](https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions). San Francisco, CA: Common Sense Media." },
    { id: 3, text: "Zao-Sanders, M. (2025). [How People Are Really Using Gen AI in 2025](https://hbr.org/2025/04/how-people-are-really-using-gen-ai-in-2025). *Harvard Business Review*." },
  ],

  disciplinaryExtensions: [
    { id: "de-friend-1", discipline: "Psychology", prompt: "Explore cognitive bias by crafting prompts that contain cognitive distortions (\"All my friends hate me\"; \"My professors think I'm stupid\"). How does the AI counter, or reinforce, those biases?" },
    { id: "de-friend-2", discipline: "Social Science & Global Health", prompt: "Give AI ethically tricky situations and document how the LLM responds. What patterns do you notice in how it handles moral complexity?" },
    { id: "de-friend-3", discipline: "Computer Science & Engineering", prompt: "Teach students about mitigation strategies effective against sycophancy (e.g., chain-of-thought transparency, forced reasoning). How does the chatbot respond differently?" },
    { id: "de-friend-4", discipline: "Public Policy", prompt: "What ethical issues arise around AI sycophancy and its increasing use in military operations and government decision-making?" },
  ],

  connectedTopics: [
    { topicId: "thinking", relation: "Sycophancy reinforces uncritical acceptance of AI outputs — the same overreliance explored there" },
    { topicId: "spy", relation: "Sharing personal thoughts and feelings with AI chatbots raises the same privacy concerns" },
    { topicId: "trust", relation: "When AI tells you what you want to hear, the question of trustworthiness becomes deeply personal" },
  ],

  belowActivitiesLearningNote: "Activity 3 (the John Oliver video) addresses suicide and mental health crises; include a content warning when assigning. The Hill (2025) NYT article in Further Recommendations covers similar ground and should be flagged the same way. Activity 1 requires students to access ChatGPT's Personalization settings — confirm institutional access ahead of time. Activity 2's persona list ranges from credible experts to bad-faith ideologues; the contrast is pedagogically intentional, but worth previewing with the class.",
};
