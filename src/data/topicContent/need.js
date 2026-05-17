// ─── Content: "Do We Need AI?" ───

import NeedAIIllustration from "../../components/illustrations/NeedAIIllustration.jsx";

export const needContent = {
  Illustration: NeedAIIllustration,

  expertQuote: {
    text: "The technologies we believe to be bringing us into the future are actually taking us back from the progress already made.[^1]",
    source: "Dr. Joy Buolamwini, computer scientist & digital activist",
  },

  introduction: [
    "From concerns about AI's impact on the environment to the disruptive role it has on human work, learning, and creativity, not everyone is on board with AI. Some argue that the growing tech oligarchy at OpenAI, Meta, Google, and X, are exploiting humans for profit gains. Some fear that in the quest for \"efficiency\" AI will displace human workers with sub-par work (aka AI slop). This section provides readings, discussions, and questions for instructors who **do not** want to introduce *use of* AI in their classrooms but would like their students to think critically about AI's impacts on society.",
  ],

  keyTerms: [
    { term: "The Common Good", definition: "A political and ethical concept referring to conditions that benefit all members of a community, not just the privileged few" },
    { term: "AI Slop", definition: "Low-quality AI-generated content that floods the internet, often displacing human-created work and degrading information quality" },
    { term: "Interior Life", definition: "Your inner conversation with thoughts, emotions, self-awareness, and ability to focus — and how technology affects it" },
  ],

  learningObjectives: [
    "Describe the concept of the common good in the digital age",
    "Analyze the costs and benefits of competing societal value systems (e.g., justice vs. efficiency)",
    "Investigate how art (made with and without AI) is a societal artifact of the digital age",
    "Assess how a human's self-knowledge prepares them to use AI prudently",
  ],

  questionLearningNote: "This topic invites students to critically examine the societal, ethical, and personal dimensions of AI adoption. Activities in this topic intentionally do not ask students to use AI tools — this is a deliberate pedagogical choice, not an oversight. This is an effective entry point for instructors who do not want to introduce AI tools in their classrooms but want students to think critically about AI's impacts on society. Multiple submission formats are available in alignment with Universal Design for Learning (UDL) principles.",

  activities: [
    {
      id: "need-1",
      slug: "ai-art-debate",
      number: 1,
      type: "in-class",
      title: "Can AI Image Generators Create Art?",
      tagline: "Defining art in the digital age — and debating whether AI belongs in the definition",
      purpose: "Reflect on the intersection of technology and creativity by debating the definition of art in today's digital age. In doing this, define art in the context of technology and determine its role in society.",
      objectives: [
        "Investigate how art (made with and without AI) is a societal artifact of the digital age",
        "Evaluate whether AI-generated art constitutes genuine \"creativity\" and articulate a reasoned position",
      ],
      udlOptions: true,
      steps: [
        { label: "Pre-Reading", detail: "Read two articles before class: the Stanford Encyclopedia of Philosophy's \"Definition of Art\" and MIT Technology Review's \"AI-generated art raises tricky questions.\" Note that there are many competing philosophical definitions of art, and AI-generated art is part of this larger ongoing debate. There is no single correct answer.", instructorNote: "Clarify to students that the objective of these readings is to internalize the plurality of definitions of art. The debate about AI-generated art is not new — it's an extension of longstanding philosophical questions." },
        { label: "Small-Group Discussion", detail: "In pairs or small groups, discuss: How do you differentiate between artists who used AI as a support tool and art generated solely by AI? What is your personal definition of art? What surprised you in the readings? What were your main takeaways?" },
        { label: "Whole-Class Debrief", detail: "Each pair or group shares one consideration they were surprised by, or one question they want to follow up on." },
      ],
      onlineVersion: { description: "In 1–2 paragraphs, respond: Can AI image generators create art? Why or why not? Give your personal definition of art and address at least two of the following: How do you differentiate AI-assisted art from AI-generated art? What does it mean that AI scrapes artists' styles to create \"in the style of\" images? As AI makes the creative process more efficient, what is gained and what is lost? Reply to at least one classmate's post." },
      grading: [
        "Completion of the pre-reading",
        "Thoughtful, engaged participation in paired and whole-class discussion (in-class) or a 1–2 paragraph response addressing at least two discussion prompts (online)",
        "At least one substantive reply to a classmate's post (online)",
      ],
      resources: [
        { title: "Stanford Encyclopedia of Philosophy: Definition of Art", url: "https://plato.stanford.edu/entries/art-definition/" },
        { title: "MIT Technology Review: AI-generated art raises tricky questions", url: "https://www.technologyreview.com/2022/09/20/1059792/the-algorithm-ai-generated-art-raises-tricky-questions-about-ethics-copyright-and-security/" },
      ],
    },
    {
      id: "need-2",
      slug: "disconnecting",
      number: 2,
      type: "online",
      title: "Disconnecting Exercise",
      tagline: "Unplugging from AI and technology for 24 hours — and mapping what you find",
      purpose: "Map your interior life to your daily routine, then disconnect from AI and technology for 24 hours and document how the experience affects your mental, emotional, and practical state. How does being \"plugged in\" affect your interior life? How does disconnecting affect it?",
      objectives: ["Assess how a human's self-knowledge prepares them to use AI prudently"],
      udlOptions: true,
      steps: [
        { label: "Reflection 1: The Day Before You Unplug", detail: "Answer at least two prompts in 1–2 paragraphs: Outline how you use AI, social media, search engines, etc. in your daily routines. Sketch your mental and emotional state — emotional highs and lows today. Consider your work/life balance. How does AI make it better or worse? How does using AI help you feel more efficient, relaxed, or stressed?" },
        { label: "The Experiment: Disconnect for 24 Hours", detail: "Except for critical tasks (schoolwork, health emergencies, etc.), disconnect from your phone, social media, AI, and internet streaming for 24 hours. Keep a reflection log throughout the experience." },
        { label: "Reflection 2: During the Experiment", detail: "Answer at least two prompts in 1–2 paragraphs: How \"efficient\" has your day been without AI? Are you having any noticeable emotional reaction — more mental clarity, more relaxed, more stressed — to being \"less efficient\" by not using AI today?" },
        { label: "Reflection 3: After the Experiment", detail: "Answer at least two prompts in 1–2 paragraphs: Did you use AI or social media? That's okay — it's difficult to fully disconnect. Write down any instances you \"plugged in\" and what prompted you. Outline steps you plan to take to make your AI usage more intentional going forward. Cite any resources used to develop your plan." },
      ],
      grading: [
        "An explanation of how you have previously used AI and technology in daily life",
        "A reflection on how the unplugged experience affected your external state (efficiency, stress) and interior state (clarity, anxiety, mood)",
        "A personal plan for regulating AI use going forward, with cited resources",
      ],
      resources: [
        { title: "Psychology Today: Building an Inside-Out Life", url: "https://www.psychologytoday.com/us/blog/the-new-resilience/201006/building-an-inside-out-life-part-1" },
      ],
    },
    {
      id: "need-3",
      slug: "surveillance-case-study",
      number: 3,
      type: "in-class",
      title: "Analyzing Mass Surveillance AI",
      tagline: "A case study on AI surveillance, the common good, and due process",
      purpose: "Analyze the societal ethics of using AI surveillance technology to monitor and incarcerate undocumented immigrants. How does the introduction of mass surveillance technology affect the common good?",
      objectives: [
        "Describe the concept of the common good in the digital age",
        "Analyze the costs and benefits of competing societal value systems (e.g., justice vs. efficiency)",
      ],
      blocks: [
        {
          kind: "caseStudy",
          title: "The Mayor's Dilemma",
          body: "I am the mayor of a town in the American rural south. While I received my law degree decades ago, I've only recently felt the call to serve the public. This is my first term as a government official. Since manufacturing left our area in the late 1990s, the town's population has shrunk by 35%. My town has been financially struggling, and I really want to use my legal expertise to improve the town's outcomes. The Geo Group has offered a contract to establish an immigrant detention facility on the abandoned campus of the old factory. My town council wants to accept the contract because we need the money, but we learned that the Geo Group uses AI mass surveillance to track and detain immigrants. As I learn more about AI mass surveillance technology, I get a prickly feeling. It seems there's a high chance that many of the immigrants and naturalized citizens being detained have had their civil rights abused — including the right to due process.",
        },
      ],
      steps: [
        { label: "Pre-Reading", detail: "Read the following before class: \"This Company's Surveillance Tech Makes Immigrants 'Easy Pickings' for Trump\" (NYT), the U.S. Constitution's right to due process (5th Amendment), and the Stanford Encyclopedia of Philosophy on \"The Common Good.\" Then read the case study scenario above.", instructorNote: "The NYT article may require institutional login. Confirm student access before assigning." },
        { label: "In-Class Group Discussion", detail: "In assigned groups, discuss: Your group's working understanding of \"the common good\" in this scenario, drawing on U.S. law, political philosophy, and the background of the mayor, the town, and the company. How does technology fit into the concept of the common good? How could digital surveillance enabled by AI affect the common good? What should the mayor consider when making this decision?" },
        { label: "Individual Submission", detail: "Write a 1–2 paragraph response (or a video of similar length) that: offers your group's definition of the common good, shares at least two factors the mayor should consider, summarizes your group's discussion of mass surveillance and the common good, and shares one new insight that emerged from conversation with peers." },
      ],
      onlineVersion: { description: "After completing the pre-readings and reviewing the case study scenario, students write a 250-word discussion post that defines the common good in this context, identifies at least two factors the mayor should consider, and reflects on how AI surveillance technology affects the common good. They respond to at least one peer whose perspective differed from their own." },
      grading: [
        "Completion of the pre-readings",
        "Participation in the group discussion",
        "A written reflection of 1–2 paragraphs (or video equivalent) addressing all four submission prompts",
      ],
      resources: [
        { title: "NYT: \"This Company's Surveillance Tech Makes Immigrants 'Easy Pickings'\"", url: "https://www.nytimes.com/2025/04/14/technology/trump-immigration-tech-geo-group.html" },
        { title: "U.S. Constitution: Right to Due Process (5th Amendment)", url: "https://constitution.congress.gov/browse/essay/amdt5-5-1/ALDE_00013721/" },
        { title: "Stanford Encyclopedia of Philosophy: The Common Good", url: "https://plato.stanford.edu/entries/common-good/" },
        { title: "Harvard Gazette: Justice vs. Efficiency in Tech Ethics", url: "https://news.harvard.edu/gazette/story/2020/10/ethical-concerns-mount-as-ai-takes-bigger-decision-making-role/" },
        { title: "Stanford Encyclopedia: Ethics of Privacy and Surveillance", url: "https://plato.stanford.edu/entries/ethics-ai/" },
      ],
    },
  ],
  conversationStarters: [
    { id: "cs-need-1", prompt: "Who specifically benefits from the development of AI? Who is harmed?" },
    { id: "cs-need-2", prompt: "What are some compelling reasons you've heard about why people do not want to use AI?" },
    { id: "cs-need-3", prompt: "What are some small, practical ways you could see yourself limiting (or opting out entirely) of AI use in your daily life? What difficulties would you face? What benefits might come from this stance?" },
    { id: "cs-need-4", prompt: "Pick a setting in which the use of AI makes you particularly uncomfortable. Discuss your reasons for being wary of AI in this setting. Ex. Healthcare, Schools, Government, Entertainment (tv, movies), Criminal Justice, Journalism, etc." },
    { id: "cs-need-5", prompt: "Why is it difficult to imagine our world without AI?" },
  ],


  furtherRecommendations: [
    { title: "Setele, J. (2024, October 3). \"AI is very bad, actually: A manifesto.\" Julie Setele.", url: "https://juliesetele.com/2024/10/04/ai-is-very-bad-actually-a-manifesto/" },
    { title: "O'Neil, L. (2023, August 12). \"These women tried to warn us about AI.\" Rolling Stone.", url: "https://www.rollingstone.com/culture/culture-features/women-warnings-ai-danger-risk-before-chatgpt-1234804367/" },
    { title: "Mozilla Foundation. (2017–present). IRL: Online Life is Real Life.", url: "https://irlpodcast.org/" },
    { title: "Bender, E. & A. Hanna. (2023–). Mystery AI Hype Theater 3000.", url: "https://www.buzzsprout.com/2126417" },
    { title: "Hicks, M. T., Humphries, J., & Slater, J. (2024). \"ChatGPT is bullshit.\" Ethics and Information Technology, 26(2), 38.", url: "https://doi.org/10.1007/s10676-024-09775-5" },
    { title: "Bender, E. & A. Hanna. (2025). The AI Con: How to fight Big Tech's hype and create the future we want. Harper Collins.", url: "https://find.library.duke.edu/catalog/DUKE99119765245908501" },
    { title: "Hao, K. (2025). Empire of AI: Dreams and nightmares in Sam Altman's OpenAI. Penguin Press.", url: "https://find.library.duke.edu/catalog/DUKE99119765250108501" },
    { title: "Narayanan, A., & Kapoor, S. (2025). \"Why an overreliance on AI-driven modelling is bad for science.\" Nature, 640(8058), 312–314.", url: "https://doi.org/10.1038/d41586-025-01067-2" },
    { title: "Merchant, B. (2023). Blood in the Machine: The origins of the rebellion against big tech. Little, Brown and Company.", url: "https://find.library.duke.edu/catalog/DUKE011250296" },
    { title: "Postman, N. (1998, March 28). \"Five things we need to know about technological change.\"", url: "https://web.cs.ucdavis.edu/~rogaway/classes/188/materials/postman.pdf?ref=icopilots.com" },
  ],

  pageNotes: [
    { id: 1, text: "Interview with Joy Buolamwini in: Mosley, T. (2023, November 28). [\"If you have a face, you have a place in the conversation about AI\"](https://www.npr.org/2023/11/28/1215529902/unmasking-ai-facial-recognition-technology-joy-buolamwini). *NPR*." },
  ],

  disciplinaryExtensions: [
    { id: "de-need-1", discipline: "Public Policy", prompt: "Case Study: The Geo Group is a private prison company that uses AI surveillance technology for undocumented immigrants. Students could discuss the ethics of using AI in this setting and the implications for due process." },
    { id: "de-need-2", discipline: "Philosophy", prompt: "Discuss whether AI can have \"personhood.\" What are the philosophical implications of ascribing agency or rights to artificial systems?" },
    { id: "de-need-3", discipline: "Literature", prompt: "Technology is a frequent theme in dystopian fiction. Explore science fiction texts that present resistance to AI/technology. How do these narratives compare to the current moment?" },
    { id: "de-need-4", discipline: "Art History", prompt: "Can AI image generators create art? Why or why not? Examine the history of debates about what constitutes \"art\" when new technologies emerge — from photography to digital media to AI." },
  ],

  connectedTopics: [
    { topicId: "spy", relation: "The surveillance case study connects directly to AI privacy and data collection concerns" },
    { topicId: "theft", relation: "AI's impact on art and creativity raises the same questions about whose work is being used" },
    { topicId: "thinking", relation: "The disconnecting exercise explores the cognitive costs of always being \"plugged in\"" },
  ],

  belowActivitiesLearningNote: "All resource links should be verified before each use. The NYT article on Geo Group surveillance may require institutional login — confirm student access before assigning. The case study scenario in Activity 3 references current political events and may need to be contextualized for students.",
};
