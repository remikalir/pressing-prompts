// ─── Content: "Who Benefits from AI?" ───

import BenefitsIllustration from "../../components/illustrations/BenefitsIllustration.jsx";

export const benefitsContent = {
  Illustration: BenefitsIllustration,

  expertQuote: {
    text: "We have a computing divide at the heart of the A.I. revolution…It's not merely a hardware problem. It's the sovereignty of our digital future.[^1]",
    source: "Lacina Koné, the director general of Smart Africa",
  },

  introduction: [
    "An extension of the **digital divide**, the **AI divide** refers to the growing gap between individuals, communities, and companies who have access to cutting-edge Artificial Intelligence tools and those who do not. Roughly one-third of the global population (2.6 billion people) does not have regular access to the internet (which would include AI).[^2] Beyond physical access to technology, like hardware, software, or premium AI subscriptions, this divide also includes disparities in access to education and skills training that are critical for using AI effectively. AI's rapid integration into the workplace disproportionately affects people in low-wage or routine jobs, who are more likely to face displacement from the jobs of the future. At the industry level, development and control of advanced AI is concentrated in the hands of multi-billion dollar, \"Big Tech\" corporations, such as Meta, OpenAI, Amazon, X, Google, and Microsoft. Although smaller start-ups are entering the AI space, they must overcome huge barriers, including the high cost of training LLMs and limited access to high-quality datasets. In learning about AI, students should reflect on their own AI privileges, as well as global AI divides, and consider what efforts could be effective in bridging the AI divide.",
  ],

  keyTerms: [
    { term: "Digital Divide", definition: "The gap between individuals and communities with access to modern information technology and those without — including internet access, hardware, and digital literacy" },
    { term: "AI Divide", definition: "The growing gap between those with access to cutting-edge AI tools, training, and infrastructure and those excluded from these resources" },
    { term: "Information Privilege", definition: "The advantages held by those who have greater access to information, technology, and the skills to use them — including premium AI tools and institutional resources" },
  ],

  learningObjectives: [
    "Define 'information privilege,' 'digital divide,' and 'AI divide'",
    "Identify the different contexts in which the AI divide exists",
    "Explore the idea of privilege and how it manifests within the context of AI",
    "Reflect on your personal privileges and marginalizations around AI",
  ],

  activities: [
    {
      id: "bene-1",
      slug: "ai-divide-education",
      number: 1,
      type: "in-class",
      title: "The AI Divide in Educational Systems",
      tagline: "Embodying different educational contexts to see who has access — and who doesn't",
      purpose: "Embody different educational contexts and consider the advantages and disadvantages those contexts present when it comes to technology and AI access. By comparing assigned contexts, build a broader understanding of information privilege, the digital divide, and the AI divide.",
      objectives: [
        "Define 'information privilege,' 'digital divide,' and 'AI divide'",
        "Identify the different contexts in which the AI divide exists",
        "Explore the idea of privilege and how it manifests within the context of AI",
      ],
      blocks: [
        {
          kind: "roleContext",
          roles: [
            { role: "A: High School", context: "Private high school vs. underfunded public high school" },
            { role: "B: Higher Education (US)", context: "US community college vs. US R1 research university" },
            { role: "C: Global vs. US", context: "US state college vs. college in West Africa" },
          ],
        },
      ],
      steps: [
        { label: "Pre-Reading", detail: "Read two articles before class: \"The Global AI Divide\" (New York Times) and \"AI and the Next Digital Divide.\"", instructorNote: "The NYT article requires institutional login — confirm student access before assigning. Before class, assign students to groups and educational contexts using the six-context framework above. Aim for an even number of groups; contexts can be repeated if needed." },
        { label: "Step 1 — Original Groups", detail: "Each group discusses their assigned educational context. Research your specific context if time allows. Discuss: What access might your context have to technology (hardware, software)? What access might it have to AI? What benefits and limitations does this access present to students?", time: "10–15 min" },
        { label: "Step 2 — Paired Groups", detail: "Pair groups that represent contrasting contexts (e.g., Group 1 + Group 2, Group 3 + Group 4, Group 5 + Group 6). Discuss: How do your two contexts compare in access to technology? In access to AI? Where do you see examples of information privilege, the digital divide, and the AI divide?", time: "10 min" },
        { label: "Step 3 — Whole-Class Debrief", detail: "Share and discuss as a class: What examples of information privilege, the digital divide, and the AI divide did you identify through this exercise?", instructorNote: "Wooclap can be used as an exit poll if you are short on time or have a large class." },
      ],
      onlineVersion: { description: "After completing the pre-readings, students are assigned one of the six educational contexts. They research their context and post a 200-word analysis of what technology and AI access looks like in that setting. They then respond to two peers who were assigned contrasting contexts, identifying specific examples of the AI divide." },
      grading: [
        "A thorough reading of the two assigned articles before class",
        "Active participation in all three stages of the group discussion",
      ],
      resources: [
        { title: "Satariano, A. et al. (2025). \"The A.I. Race Is Splitting the World.\" NYT.", url: "https://www.nytimes.com/interactive/2025/06/23/technology/ai-computing-global-divide.html" },
        { title: "\"AI and the Next Digital Divide\"", url: "https://www.brookings.edu/articles/ai-and-the-next-digital-divide-in-education/" },
      ],
    },
    {
      id: "bene-2",
      slug: "free-vs-premium",
      number: 2,
      type: "online",
      title: "Exploring Privilege Through Different AI Tools",
      tagline: "Same prompt, different tools — what does the gap reveal?",
      purpose: "Reflect on how information privilege manifests through access to different AI tools. By comparing the outputs of free and premium AI tools using the same prompt, explore the practical implications of the AI divide.",
      objectives: [
        "Define 'information privilege,' 'digital divide,' and 'AI divide'",
        "Identify the different contexts in which the AI divide exists",
        "Explore the idea of privilege and how it manifests within the context of AI",
      ],
      steps: [
        { label: "Choose Your Prompt", detail: "Choose a question you want answered or a task you want to learn how to accomplish. This should not be related to coursework." },
        { label: "Use the Free Version", detail: "Use the free version of an AI chatbot and input your question or task. Take note of: How detailed is the first response? Did the AI cite any sources? Do you feel like you would need to ask more questions to fully get an answer?" },
        { label: "Use the Premium Version", detail: "Now use the premium version with the same prompt. Take note of the same questions. Feel free to continue prompting both tools to see how their responses differ.", instructorNote: "Students need access to both free and premium versions. Confirm premium access through institutional licenses before assigning. Update login instructions to match your institution." },
        { label: "Write Your Discussion Post", detail: "Write a post of at least 200 words addressing all of the above, plus: What kinds of differences did you notice between the free and premium tool responses? What implications might this experiment have for information privilege and the AI divide?" },
        { label: "Respond to Peers", detail: "Review and respond to two classmates' posts. Ask questions or build on their ideas. Prioritize responding to peers who have not yet received a comment." },
      ],
      noAIAlternative: { description: "Provide students with pre-generated screenshots showing free vs. premium AI responses to the same prompt across 3–4 different question types. Students analyze the differences and write the same reflection on information privilege without needing access to either tool." },
      grading: [
        "A discussion post of at least 200 words including the prompt used and observations from both tools",
        "Responses to all observation and reflection questions",
        "Thoughtful responses to at least two peers' posts",
      ],
      resources: [],
    },
    {
      id: "bene-3",
      slug: "personal-privilege",
      number: 3,
      type: "online",
      title: "Considering Your Personal AI Privilege",
      tagline: "Connecting frameworks for understanding privilege to your own relationship with AI",
      purpose: "Reflect on the concept of privilege in your own context and apply that thinking to your use of technology and AI. By connecting frameworks for understanding privilege to your own life, develop a more personal and grounded understanding of the AI divide.",
      objectives: [
        "Define 'information privilege,' 'digital divide,' and 'AI divide'",
        "Explore the idea of privilege and how it manifests within the context of AI",
        "Reflect on your personal privileges and marginalizations around AI",
      ],
      steps: [
        { label: "Pre-Reading", detail: "Read and review three resources: Roxane Gay's \"Peculiar Benefits\" (The Rumpus, 2012), the Invisible Knapsack activity page, and The Academic Wheel of Privilege.", instructorNote: "The Invisible Knapsack page references a Duke Libraries resource — update or replace with an equivalent at your institution. This assignment engages students in personal reflection on privilege. Consider adding explicit language giving students permission to keep their response general if they are not comfortable sharing specific aspects of their identity." },
        { label: "Write Your Reflection", detail: "Write a reflection of at least 400 words connecting the readings to your own life and to technology and AI. Address all five prompts: What does privilege mean to you in the context of technology and AI? How can someone hold privilege in certain ways while also experiencing marginalization around AI? What are the ways in which you are privileged or marginalized when it comes to AI? (You may keep this general if preferred.) What broader implications does privilege have for technology and AI? In what ways could the impact of privilege around AI be reduced?" },
      ],
      grading: [
        "A reflection of at least 400 words",
        "A description of how you think about privilege in the context of technology and AI",
        "A personal reflection on your own privileges and marginalizations",
        "A reflection on the broader implications of privilege, technology, and AI access",
        "Identification of at least one way the impact of privilege around AI could be reduced",
      ],
      resources: [
        { title: "Gay, R. (2012). \"Peculiar Benefits.\" The Rumpus.", url: "https://therumpus.net/2012/05/peculiar-benefits/" },
        { title: "Invisible Knapsack — Information Privilege (downloadable PDF)", url: "/invisible-knapsack.pdf" },
        { title: "The Academic Wheel of Privilege", url: "https://ukrio.org/ukrio-resources/equality-diversity-and-inclusion/academic-wheel-of-privilege/" },
      ],
    },
  ],
  conversationStarters: [
    { id: "cs-bene-1", prompt: "Who is harmed, and who benefits, from access to AI technology?" },
    { id: "cs-bene-2", prompt: "Are there AI tools that you pay for premium subscriptions to (ex. Premium ChatGPT, Grammarly)? If so, how does that benefit you? If not, what disadvantages might you face?" },
    { id: "cs-bene-3", prompt: "What are some types of jobs you could see being replaced by AI?" },
    { id: "cs-bene-4", prompt: "What are some ways we can ensure equitable access to AI and AI training?" },
  ],


  furtherRecommendations: [
    { title: "Booth, char. (2014, December 1). [On Information Privilege](https://infomational.wordpress.com/2014/12/01/on-information-privilege/). *Info-Mational*.", url: "https://infomational.wordpress.com/2014/12/01/on-information-privilege/" },
    { title: "Kak, A., West, S., & Whittaker, M. (2023). [Make no mistake—AI is owned by Big Tech](https://www.technologyreview.com/2023/12/05/1084393/make-no-mistake-ai-is-owned-by-big-tech/). *MIT Technology Review*.", url: "https://www.technologyreview.com/2023/12/05/1084393/make-no-mistake-ai-is-owned-by-big-tech/" },
    { title: "Liu, Y., Elekes, Á., Lu, J., Dorantes-Gilardi, R., & Barabási, A.-L. (2025). Unequal Scientific Recognition in the Age of LLMs. *Findings of the Association of Computational Linguistics: EMNLP 2025*, pgs. 23558–23568." },
    { title: "Gonzales, S. (2024, August 6). [AI literacy and the new Digital Divide—A Global Call for Action](https://www.unesco.org/en/articles/ai-literacy-and-new-digital-divide-global-call-action). *UNESCO*.", url: "https://www.unesco.org/en/articles/ai-literacy-and-new-digital-divide-global-call-action" },
    { title: "[AI Pedagogy Project (Harvard) Assignments](https://aipedagogy.org/assignments) → Filter by theme (e.g. bias) and/or subject (e.g. ethics & philosophy).", url: "https://aipedagogy.org/assignments" },
  ],

  pageNotes: [
    { id: 1, text: "Satariano, A., Mozur, P., Russell, K., & Kim, J. (2025, June 23). [The A.I. Race Is Splitting the World Into Haves and Have-Nots](https://www.nytimes.com/interactive/2025/06/23/technology/ai-computing-global-divide.html). *The New York Times*." },
    { id: 2, text: "International Telecommunication Union (ITU). (2023, September 12). [*Population of global offline continues steady decline to 2.6 billion people in 2023*](https://www.itu.int/en/mediacentre/Pages/PR-2023-09-12-universal-and-meaningful-connectivity-by-2030.aspx) [UN]. ITU.Int." },
  ],

  disciplinaryExtensions: [
    { id: "de-bene-1", discipline: "Public Policy & Education", prompt: "Research and present on a proposed intervention or policy for improving the AI divide in a particular context (K-12, higher ed, workforce development). What would equitable AI access look like?" },
    { id: "de-bene-2", discipline: "Economics", prompt: "\"Follow the money\" — research top tech companies, funders, partnerships, and data sources. Compare the resources available to Big Tech companies versus smaller AI start-ups. Who controls the AI economy?" },
    { id: "de-bene-3", discipline: "Global Studies", prompt: "Roughly one-third of the global population (2.6 billion people) lacks regular internet access. How does this digital divide compound when AI becomes essential for education and employment?" },
    { id: "de-bene-4", discipline: "Sociology", prompt: "Analyze how AI's rapid integration into the workplace disproportionately affects people in low-wage or routine jobs. What patterns of displacement and privilege do you observe?" },
  ],

  connectedTopics: [
    { topicId: "builds", relation: "The workers who build AI are often the same populations most excluded from its benefits" },
    { topicId: "bias", relation: "Unequal representation in training data mirrors the broader AI divide in access and power" },
    { topicId: "sustainable", relation: "Environmental costs of AI are disproportionately borne by communities already on the wrong side of the divide" },
  ],

  belowActivitiesLearningNote: "Activity 1 requires significant pre-class preparation — assign students to groups and educational contexts before the session so they can prepare. Activity 3 engages students in personal reflection on privilege; consider giving students explicit permission to keep their responses general if they aren't comfortable sharing specific aspects of their identity.",
};
