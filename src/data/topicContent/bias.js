// ─── Content: "Is AI Biased?" ───
// Full topic content. The topic metadata (colors, cluster, slug) lives
// in src/data/topics.js.

import BiasIllustration from "../../components/illustrations/BiasIllustration.jsx";

export const biasContent = {
  // ─── Illustration ───
  Illustration: BiasIllustration,

  // ─── The Question layer ───
  expertQuote: {
    text: "Algorithmic oppression is not just a glitch in the system but, rather, is fundamental to the operating system of the web.[^1]",
    source: "Dr. Safiya Noble, Information Sciences Scholar",
  },

  introduction: [
    "The concept of **\"garbage in, garbage out\"** illustrates a core aspect of AI's limitations: biased training data produces biased outputs. The exact training datasets used by models like GPT-4 are kept secret, but we know they rely on massive collections of human-generated text scraped from the open internet, including sites like Reddit, Wikipedia, and countless websites and forums. In a famous critique on the ethics of Large Language Models, researchers note that the internet is overrun with hegemonic or monocultural viewpoints which leads to an overrepresentation of white supremacist, misogynistic, and ageist perspectives in the training data.[^2] As AI usage grows, these biased worldviews are encoded in its data and potentially amplified into the culture. One good example of this bias is linguistic diversity. There are over 7,100 languages spoken in the world, yet very few of those languages are documented on the Internet, and even fewer are supported by Generative AI models. Given the risks of **AI bias**, students should reflect on the many points at which bias can enter the AI pipeline—from what data is included, to how it's labeled or filtered, to what questions people ask. Understanding these potential areas of bias helps students critically evaluate the information AI provides—and consider who gets represented, and who gets left out.",
  ],

  keyTerms: [
    { term: "Bias", definition: "Prejudice in favor of or against a thing, person, or group, often in a way considered to be unfair" },
    { term: "Monoculture", definition: "The overrepresentation of dominant cultural viewpoints in data, marginalizing diverse voices and perspectives" },
    { term: "Representational Bias", definition: "When AI outputs systematically over- or under-represent certain groups based on patterns in training data" },
  ],

  learningObjectives: [
    "Define bias",
    "Explain how data scraped from the internet can introduce bias into AI systems",
    "Explain how biased data can lead AI systems to reinforce harmful stereotypes or deepen social inequalities",
    "Critically analyze AI-generated content for representational bias",
    "Examine whose perspectives are most represented and whose voices are excluded",
    "Recognize your role in questioning and mitigating AI bias",
  ],

  questionLearningNote: "This topic examines how AI systems can reflect and reinforce cultural bias — from the images they generate to the narratives they produce. Key terms (bias, monoculture, data scraping, representational bias) may be unfamiliar to students and should be defined as part of teaching this topic. Activity 2 uses AI image generation — confirm students have access before assigning. Activity 3 includes a placeholder for a course-specific historical event or social issue — update this before assigning. Consider supplementing with additional readings on algorithmic bias, data ethics, or case studies relevant to your course discipline.",

  // ─── Activities ───
  activities: [
    {
      id: "bias-1",
      slug: "uncovering-stereotypes",
      number: 1,
      type: "in-class",
      title: "Uncovering Stereotypes in AI-Generated Images",
      tagline: "How biased training data shapes what AI shows us",
      purpose: "Explore how AI tools — such as image generators — can reflect and reinforce cultural biases. Develop skills in analyzing technology's real-world impact, discussing complex ideas, and collaborating with peers to build a shared understanding of AI bias.",
      objectives: [
        "Define bias",
        "Explain how data scraped from the internet can introduce bias into AI systems",
        "Explain how biased data can lead AI systems to reinforce harmful stereotypes or deepen social inequalities",
        "Critically analyze AI-generated content for representational bias",
      ],
      steps: [
        {
          label: "Pre-Class Preparation",
          detail: "Complete three readings: the University of Chicago's definition of bias, Google's explainer on how machine learning models are developed (includes a short video), and the Rest of World article \"This is what AI thinks the world looks like.\" Take notes on: How would you define bias in your own words? How would you describe machine learning to a friend? What stood out to you in the Rest of World article?",
          instructorNote: "This section can be turned into a pre-work assignment. The Rest of World article is the primary discussion text — students should arrive having read it carefully.",
        },
        {
          label: "Small-Group Discussion",
          detail: "Form groups of 3–4 with a designated scribe. Each person takes about 90 seconds to share their initial reaction to the Rest of World article. Then discuss together: What surprised you about the images or findings? Why do you think these patterns of bias appeared? What does this article teach us about how AI systems are trained? What might the consequences be for individuals, communities, or entire cultures?",
          time: "~20 min",
        },
        {
          label: "Whole-Class Share-Out",
          detail: "Each group shares 1–2 key takeaways with the full class.",
          instructorNote: "For large classes, have each group add their key takeaways to a shared Wooclap, Google Doc, or Padlet. Read through responses and identify common patterns and themes to debrief with the class.",
        },
      ],
      onlineVersion: {
        description: "After completing the three pre-class readings, students post a 200-word reflection to the discussion forum addressing what surprised them in the Rest of World article, why they think the patterns of bias appeared, and what the consequences might be for underrepresented communities. They respond to two peers whose reactions differed from their own.",
      },
      grading: [
        "Completing the pre-class readings and arriving prepared to discuss bias, machine learning, and the Rest of World article",
        "Contributing to both small-group and whole-class discussion",
        "Listening actively, building on peers' ideas, and helping the group develop clear takeaways",
        "Staying open to different viewpoints and expressing ideas constructively throughout",
      ],
      resources: [
        { title: "University of Chicago: Definition of Bias", url: "https://help.uchicago.edu/bias-education-and-support-team/bias/" },
        { title: "Google: How Machine Learning Models Are Developed", url: "https://developers.google.com/machine-learning/intro-to-ml/what-is-ml" },
        { title: "Rest of World: \"This is what AI thinks the world looks like\"", url: "https://restofworld.org/2023/ai-image-stereotypes/" },
      ],
    },
    {
      id: "bias-2",
      slug: "bias-in-images",
      number: 2,
      type: "online",
      title: "Exploring Potential Bias in AI-Generated Images",
      tagline: "Generating AI portraits of professionals and analyzing what you see",
      purpose: "Explore how AI image generators portray people in various professional roles. By analyzing the outputs, think critically about patterns of representation, what those patterns reveal about the data the AI was trained on, and your own role in questioning these biases.",
      objectives: [
        "Explain how biased data can lead AI systems to reinforce harmful stereotypes or deepen social inequalities",
        "Critically analyze AI-generated content for representational bias",
        "Examine whose perspectives are most represented and whose voices are excluded",
        "Recognize your role in questioning and mitigating AI bias",
      ],
      steps: [
        {
          label: "Generate AI Images",
          detail: "Use an AI image generator to create images of people in various professional roles. Try prompts like: \"a lawyer,\" \"an engineer,\" \"a doctor,\" \"a teacher,\" \"a CEO,\" \"a nurse.\" Try at least 5–8 different prompts and pay attention to how the people are portrayed.",
          instructorNote: "Students need access to an AI image generation feature. Confirm all students have access before assigning. Update login instructions to match your institution's access system.",
        },
        {
          label: "Observe Patterns",
          detail: "As you explore, take note of characteristics such as: gender, ethnicity, age, clothing, and setting. Look for patterns across your different prompts.",
        },
        {
          label: "Post Your Reflection",
          detail: "Write a discussion post (minimum 150 words) addressing: What patterns did you notice in the AI-generated images? Were there any stereotypes portrayed? If so, describe them. How do you think these patterns reflect the data the AI was trained on? What surprised you or concerned you about the results?",
        },
        {
          label: "Respond to Peers",
          detail: "Reply to at least two classmates' posts. Try to respond to people who address perspectives different from your own, or to those who have not yet received a reply.",
        },
      ],
      noAIAlternative: {
        description: "Instead of generating images, provide students with a curated set of AI-generated professional portraits (pre-generated by the instructor). Students analyze the provided images for patterns of representation and bias, then write the same reflection post without needing to use an AI tool themselves.",
      },
      grading: [
        "A thoughtful response of at least 150 words, based on observations from at least 5–8 different prompts",
        "Reflection on patterns of representation (e.g., gender, race, age, clothing, setting) and any biases or surprises observed",
        "Substantive replies to at least two classmates — ideally to those offering different perspectives or who have not yet received a response",
      ],
      resources: [],
    },
    {
      id: "bias-3",
      slug: "bias-in-narratives",
      number: 3,
      type: "online",
      title: "Analyzing Bias in AI-Generated Narratives",
      tagline: "Comparing AI's version of history to what you already know",
      purpose: "Critically evaluate how AI tools present historical events or social issues. By comparing an AI-generated summary to your own knowledge and academic sources, practice identifying bias, recognizing whose perspectives are included or excluded, and assessing the credibility of AI-cited sources.",
      objectives: [
        "Define bias",
        "Explain how data scraped from the internet can introduce bias into AI systems",
        "Explain how biased data can lead AI systems to reinforce harmful stereotypes or deepen social inequalities",
        "Critically analyze AI-generated content for representational bias",
        "Examine whose perspectives are most represented and whose voices are excluded",
        "Recognize your role in questioning and mitigating AI bias",
      ],
      steps: [
        {
          label: "Review the Definition of Bias",
          detail: "Before beginning, review the University of Chicago's definition of bias to ground your analysis.",
        },
        {
          label: "Choose Your Topic",
          detail: "Choose a historical event or social phenomenon you already know well. This prior knowledge is what allows you to critically evaluate the AI's response.",
          instructorNote: "If you want all students to use the same topic, specify it here. Prior knowledge is essential — students need enough familiarity to identify what's missing or distorted.",
        },
        {
          label: "Prompt the AI",
          detail: "Ask an AI tool to generate a brief summary of your chosen topic. Ask the AI to list its sources in the response. Save or screenshot the output.",
        },
        {
          label: "Write Your Reflection",
          detail: "Write a 1–2 page reflection addressing: Whose perspectives are centered in the AI's summary? Which voices are missing? Are there signs of bias in how information is presented? Are the sources credible and balanced? How does the AI's version compare to what you've learned in academic settings? What are the risks of relying on AI for complex or sensitive topics? Support your answers with specific examples from the AI-generated summary.",
        },
      ],
      noAIAlternative: {
        description: "Provide students with a pre-generated AI summary of a historical event relevant to the course. Students analyze the provided summary for bias, missing perspectives, and source credibility without needing to interact with an AI tool directly.",
      },
      grading: [
        "Reviewing the University of Chicago's definition of bias before beginning",
        "Choosing a historical event or social issue you are already familiar with",
        "Using an AI tool to generate a summary and requesting that it list its sources",
        "Analyzing the summary for bias, missing perspectives, and credibility of cited sources",
        "Comparing the AI's version to what you have previously learned in an academic context",
        "Writing a 1–2 page reflection that answers all six reflection questions and uses specific examples",
      ],
      resources: [
        { title: "University of Chicago: Definition of Bias", url: "https://help.uchicago.edu/bias-education-and-support-team/bias/" },
      ],
    },
  ],
  conversationStarters: [
    { id: "cs-bias-1", prompt: "What types of bias have you noticed on social media, or the internet more broadly? Did these shape your opinion or behavior?" },
    { id: "cs-bias-2", prompt: "Have you ever noticed any biases, or inaccuracies, in AI-generated responses? What made you question it?" },
    { id: "cs-bias-3", prompt: "What strategies do you use to spot bias in news, social media, or AI-generated content?" },
    { id: "cs-bias-4", prompt: "How might generative AI unintentionally reinforce harmful stereotypes or deepen social inequalities? Can you think of examples?" },
    { id: "cs-bias-5", prompt: "Whose perspectives do you think are most represented in online content and AI outputs? Whose voices are left out – and why might that be?" },
  ],


  // ─── Below-activities sections ───
  furtherRecommendations: [
    { title: "Perrigo, B. (2022, January 18). [Why Timnit Gebru Isn't Waiting for Big Tech to Fix AI's Problems](https://time.com/6132399/timnit-gebru-ai-google/). *TIME*.", url: "https://time.com/6132399/timnit-gebru-ai-google/" },
    { title: "Busiek, J. (2024, March 21). [Three fixes for AI's bias problem](https://www.universityofcalifornia.edu/news/three-fixes-ais-bias-problem). *University of California*.", url: "https://www.universityofcalifornia.edu/news/three-fixes-ais-bias-problem" },
    { title: "Nicoletti, L., & Bass, D. (2025, January 17). [Humans are biased. Generative AI is even worse.](https://www.bloomberg.com/graphics/2023-generative-ai-bias/) *Bloomberg*.", url: "https://www.bloomberg.com/graphics/2023-generative-ai-bias/" },
    { title: "Jeffries, A. (2017, April 27). [Machine learning is racist because the internet is racist.](https://theoutline.com/post/1439/machine-learning-is-racist-because-the-internet-is-racist) *The Outline*.", url: "https://theoutline.com/post/1439/machine-learning-is-racist-because-the-internet-is-racist" },
    { title: "Lizarraga, L. (2023, November 8). [How does a computer discriminate? Interview with Safiya Noble](https://www.npr.org/2023/11/08/1197954253/how-ai-and-race-interact). Code Switch Podcast. *NPR*.", url: "https://www.npr.org/2023/11/08/1197954253/how-ai-and-race-interact" },
    { title: "Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](https://doi.org/10.1145/3442188.3445922) *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 610–623.", url: "https://doi.org/10.1145/3442188.3445922" },
    { title: "Gebru, T., & Torres, É. P. (2024). [The TESCREAL bundle: Eugenics and the promise of utopia through artificial general intelligence.](https://firstmonday.org/ojs/index.php/fm/article/view/13636) *First Monday*.", url: "https://firstmonday.org/ojs/index.php/fm/article/view/13636" },
    { title: "Hofmann, V., Kalluri, P. R., Jurafsky, D. et al. (2024). [AI generates covertly racist decisions about people based on their dialect.](https://doi.org/10.1038/s41586-024-07856-5) *Nature*, 633, 147–154.", url: "https://doi.org/10.1038/s41586-024-07856-5" },
    { title: "Noble, S. U. (2018). [*Algorithms of Oppression: How Search Engines Reinforce Racism*](https://find.library.duke.edu/catalog/DUKE008425136). NYU Press.", url: "https://find.library.duke.edu/catalog/DUKE008425136" },
    { title: "Sourati, Z., Karimi-Malekabadi, F., Ozcan, M., et al. (2025). [The Shrinking Landscape of Linguistic Diversity in the Age of Large Language Models.](https://doi.org/10.48550/arXiv.2502.11266) *arXiv*.", url: "https://doi.org/10.48550/arXiv.2502.11266" },
    { title: "Tao, Y., Viberg, O., Baker, R. S., & Kizilcec, R. F. (2024). [Cultural bias and cultural alignment of large language models.](https://doi.org/10.1093/pnasnexus/pgae346) *PNAS Nexus*, 3(9).", url: "https://doi.org/10.1093/pnasnexus/pgae346" },
    { title: "[AI Pedagogy Project (Harvard) Assignments](https://aipedagogy.org/assignments) → Filter by theme (e.g. bias) and/or subject (e.g. ethics & philosophy).", url: "https://aipedagogy.org/assignments" },
    { title: "[Bias-related articles](https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=1159063896#gid=1159063896) from the AI Ethics & Policy News Aggregator sourced by [Casey Fiesler](https://caseyfiesler.com/).", url: "https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=1159063896#gid=1159063896" },
  ],

  pageNotes: [
    { id: 1, text: "Noble, S. U. (2018). [*Algorithms of Oppression: How Search Engines Reinforce Racism*](https://search.worldcat.org/title/1017736697). NYU Press." },
    { id: 2, text: "Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](https://dl.acm.org/doi/10.1145/3442188.3445922) *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 610–623." },
  ],

  disciplinaryExtensions: [
    { id: "de-bias-1", discipline: "Psychology", prompt: "Research has found that when disinformation is more targeted and personalized, it is more persuasive. What cognitive biases make people susceptible to biased AI outputs?" },
    { id: "de-bias-2", discipline: "Sociology", prompt: "How do AI-generated images and narratives reinforce or challenge existing social hierarchies? Analyze through the lens of representation theory." },
    { id: "de-bias-3", discipline: "Computer Science", prompt: "What are some technical approaches to detecting and mitigating bias in training data and model outputs? Evaluate their effectiveness and limitations." },
    { id: "de-bias-4", discipline: "Art & Design", prompt: "Examine how AI image generators reproduce or challenge aesthetic conventions. Whose visual traditions are centered, and whose are absent?" },
    { id: "de-bias-5", discipline: "Linguistics", prompt: "There are over 7,100 languages spoken in the world, yet very few are supported by AI models. What does this linguistic bias mean for knowledge preservation and cultural representation?" },
  ],

  connectedTopics: [
    { topicId: "trust", relation: "Bias in training data contributes to hallucinations and inaccurate AI outputs" },
    { topicId: "builds", relation: "Questions of who creates AI systems connect directly to whose perspectives are embedded in them" },
    { topicId: "benefits", relation: "The AI divide shapes whose data is included and whose communities bear the costs of biased outputs" },
  ],

  belowActivitiesLearningNote: "All resource links should be verified before each use. The Rest of World article is the primary discussion text for Activity 1 — ensure the link is active and the article is accessible without a paywall. Consider supplementing the resources with bias-related articles from Casey Fiesler's AI Ethics & Policy News Aggregator for timely case studies relevant to your discipline. This topic connects naturally to \"Can We Trust AI?\" (biased data produces hallucinations) and \"Who Builds Our AI?\" (whose labor and perspectives shape AI systems).",
};
