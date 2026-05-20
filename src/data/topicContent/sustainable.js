// ─── Content: "Is AI Sustainable?" ───

import SustainabilityIllustration from "../../components/illustrations/SustainabilityIllustration.jsx";

export const sustainableContent = {
  Illustration: SustainabilityIllustration,

  expertQuote: {
    text: "Generative AI has a very disproportionate energy and carbon footprint with very little in terms of positive stuff for the environment.[^1]",
    source: "Dr. Sasha Luccioni, Artificial Intelligence Researcher & Climate Lead, Hugging Face",
  },

  introduction: [
    "The rapid growth of AI has environmental implications, raising concerns regarding its sustainability and carbon footprint. AI systems require vast amounts of computational power, which could lead to high energy consumption and greenhouse gas emissions. The data centers that support AI operations contribute to environmental degradation, water consumption, and e-waste. Research by leading AI sustainability expert Sasha Luccioni estimates that AI-generated text responses, such as those from Google AI Overview or ChatGPT, consume 30 times more energy to generate new text versus extracting text from a source.[^2] As AI continues to evolve, it is crucial to evaluate its environmental costs and explore ways to mitigate its impact. Instructors may encourage students to be mindful of the environmental impact of AI as they explore its applications and reflect on the balance between convenience and sustainability.",
  ],

  keyTerms: [
    { term: "Carbon Footprint", definition: "The total greenhouse gas emissions caused by an individual, event, organization, service, or product — including the energy consumed by AI systems" },
    { term: "E-Waste", definition: "Discarded electronic equipment; AI's rapid hardware cycles contribute to growing volumes of electronic waste worldwide" },
    { term: "Sustainability", definition: "Meeting present needs without compromising the ability of future generations to meet theirs — a lens for evaluating AI's environmental costs" },
  ],

  learningObjectives: [
    "Describe the impacts AI has on the environment",
    "Explain why the development and use of AI technologies have impacts on the environment",
    "Identify strategies to mitigate the environmental impacts of AI",
    "Develop a personal plan for sustainable AI usage",
  ],

  questionLearningNote: "This topic examines the environmental costs of AI development and use. Key terms (sustainability, carbon footprint, e-waste, greenhouse gas emissions) may be unfamiliar to students and should be defined. Activity 1 uses the Hypothes.is annotation tool and a Jigsaw technique — both require advance setup. For Activity 1, you will need to select and assign articles on AI's environmental impacts; suggested sources are available in the resources section. Activity 3 allows multiple submission formats (written, video, visual) in alignment with UDL principles.",

  activities: [
    {
      id: "sust-1",
      slug: "environmental-impacts",
      number: 1,
      type: "in-class",
      title: "What Are the Environmental Impacts of AI?",
      tagline: "A Jigsaw activity — each group learns one impact, then teaches the others",
      purpose: "Identify and describe the environmental impacts of AI development and use. Through pre-reading, annotation, and a structured Jigsaw discussion, share knowledge across different environmental impact areas and collectively build a broader understanding of AI's environmental footprint.",
      objectives: [
        "Describe the impacts AI has on the environment",
        "Explain why the development and use of AI technologies have impacts on the environment",
      ],
      sharedFramework: {
        name: "Jigsaw Technique",
        description: "A cooperative learning structure where each group masters one piece of content, then regroups to teach peers — building collective understanding",
        alsoUsedIn: ["spy"],
      },
      steps: [
        { label: "Pre-Class Reading & Annotation", detail: "Read your assigned article on AI's environmental impacts. Annotate the article using Hypothes.is (or take independent notes), noting key points, reactions, and questions.", instructorNote: "Before class: divide your class into 3–4 equal groups and assign each group a different article on AI's environmental impacts — ideally covering distinct issues (e.g., energy use, water consumption, e-waste, emissions). If using Hypothes.is, create an assignment in Canvas for each group. If not, assign the article as straightforward pre-class reading with independent notes." },
        { label: "Stage 1 — Original Groups", detail: "Meet with peers who read the same article. Discuss: What was your initial reaction? What surprised you? What were the main takeaways related to AI's environmental impacts?", time: "10 min" },
        { label: "Stage 2 — Mixed Groups", detail: "Reorganize so each person in the new group read a different article. Each person describes the environmental impact they read about in a few sentences. Are there overlaps? What might the long-term ramifications be?", time: "10 min" },
        { label: "Stage 3 — Whole-Class Discussion", detail: "What environmental impacts did we learn about? What are your reactions? Why is it important to understand these costs?", time: "10 min", instructorNote: "For large classes, use Wooclap, a shared Google Doc, or Padlet to collect responses during the share-out." },
      ],
      onlineVersion: { description: "After reading their assigned article, students post a 200-word summary of the environmental impact they studied, including key findings and their personal reaction. They then respond to two peers who studied different impacts, identifying overlaps and reflecting on the cumulative environmental cost of AI." },
      grading: [
        "Reading the assigned article before class",
        "Participating in all three stages of the Jigsaw discussion",
        "Contributing to the whole-class discussion",
      ],
      resources: [],
    },
    {
      id: "sust-2",
      slug: "sustainability-strategies",
      number: 2,
      type: "online",
      title: "How Can We Make AI More Sustainable?",
      tagline: "Researching and sharing practical mitigation strategies",
      purpose: "Think and talk with peers about practical strategies for making AI development and use more sustainable.",
      objectives: ["Identify strategies to mitigate the environmental impacts of AI"],
      steps: [
        { label: "Research Mitigation Strategies", detail: "Using resources discussed in class and shared in this topic, identify two strategies: one for making the development of AI technologies more sustainable, and one for making the use of AI more sustainable.", instructorNote: "Encourage students to draw on the articles and resources from Activity 1 in addition to independent research." },
        { label: "Write Your Discussion Post", detail: "Submit a post of at least 100 words outlining your two strategies. Cite the resources you used." },
        { label: "Respond to Peers", detail: "Review and respond to two classmates' posts. Ask questions or expand on their ideas. Prioritize responding to peers who have not yet received a comment." },
      ],
      grading: [
        "A well-developed post of at least 100 words outlining two strategies — one for development, one for use",
        "Clearly cited resources",
        "Substantive comments on two peers' posts",
      ],
      resources: [],
    },
    {
      id: "sust-3",
      slug: "personal-plan",
      number: 3,
      type: "online",
      title: "Personal Plan for Sustainable AI Use",
      tagline: "Applying what you've learned to your own AI habits",
      purpose: "Apply what you have learned about AI's environmental impacts to your own life. Develop a personal plan for using AI in a more environmentally conscious way.",
      objectives: ["Develop a personal plan for sustainable AI usage"],
      udlOptions: true,
      steps: [
        { label: "Outline Your Current AI Use", detail: "Describe how you have used AI up to this point — what tools, how often, and for what purposes." },
        { label: "Develop Your Plan", detail: "Clearly describe the steps you plan to take to make your AI use more environmentally conscious going forward. Explain why your proposed plan will result in more sustainable AI use." },
        { label: "Cite Your Sources", detail: "Include citations for any resources you used to develop your plan." },
      ],
      grading: [
        "An explanation of how you have used AI previously",
        "Clearly outlined steps for more environmentally conscious AI use",
        "A clear explanation of why the proposed plan results in more sustainable use",
        "Clearly cited resources",
      ],
      resources: [],
    },
  ],
  conversationStarters: [
    { id: "cs-sust-1", prompt: "In what ways do you think AI technologies impact the environment, both positively and negatively?" },
    { id: "cs-sust-2", prompt: "Who should be responsible for making AI environmentally sustainable? Why?" },
    { id: "cs-sust-3", prompt: "Can AI be made more eco-friendly? How?" },
    { id: "cs-sust-4", prompt: "Have you seen/heard about examples of AI being used to help the environment?" },
  ],


  furtherRecommendations: [
    { title: "Logan, C. [*Against AI and Its Environmental Harms-keep | Riseup Pad*](https://pad.riseup.net/p/Against_AI_and_Its_Environmental_Harms-keep).", url: "https://pad.riseup.net/p/Against_AI_and_Its_Environmental_Harms-keep" },
    { title: "Luccioni, S., Trevelin, B. & Mitchell, M. (2024, September 24). [*The Environmental Impacts of AI — Primer*](https://huggingface.co/blog/sasha/ai-environment-primer).", url: "https://huggingface.co/blog/sasha/ai-environment-primer" },
    { title: "[*Cartography of generative AI*](https://cartography-of-generative-ai.net/).", url: "https://cartography-of-generative-ai.net/" },
    { title: "Vincent, J. (2024, February 16). [How much electricity do AI generators consume?](https://www.theverge.com/24066646/ai-electricity-energy-watts-generative-consumption) *The Verge*.", url: "https://www.theverge.com/24066646/ai-electricity-energy-watts-generative-consumption" },
    { title: "Parshall, A. (2025, June 11). [What Do Google's AI Answers Cost the Environment?](https://www.scientificamerican.com/article/what-do-googles-ai-answers-cost-the-environment/) *Scientific American*.", url: "https://www.scientificamerican.com/article/what-do-googles-ai-answers-cost-the-environment/" },
    { title: "Verma, P., & Tan, S. (2024, September 18). [A bottle of water per email: The hidden environmental costs of using AI chatbots](https://www.washingtonpost.com/technology/2024/09/18/energy-ai-use-electricity-water-data-centers/). *Washington Post*.", url: "https://www.washingtonpost.com/technology/2024/09/18/energy-ai-use-electricity-water-data-centers/" },
    { title: "Kwong, E. (2025, March 30). [*AI and the Environment*](https://www.npr.org/2025/03/30/1241844391/ai-and-the-environment). NPR.", url: "https://www.npr.org/2025/03/30/1241844391/ai-and-the-environment" },
    { title: "Dope Labs. (2025, May 11). [*AI's environmental cost*](https://open.spotify.com/episode/1uaIOERAKqI5OuKl367MHP).", url: "https://open.spotify.com/episode/1uaIOERAKqI5OuKl367MHP" },
    { title: "Roose, K., Newton, C., et al. (2025, January 17). [Goodbye TikTok, Ni Hao RedNote? + A.I.'s Environmental Impact + Meta's Masculine Energy](https://www.nytimes.com/2025/01/17/podcasts/hardfork-tiktok-rednote-environment.html). *The New York Times*.", url: "https://www.nytimes.com/2025/01/17/podcasts/hardfork-tiktok-rednote-environment.html" },
    { title: "Elsworth, C., et al. (2025). [*Measuring the environmental impact of delivering AI at Google Scale*](https://doi.org/10.48550/arXiv.2508.15734) (No. arXiv:2508.15734). arXiv.", url: "https://doi.org/10.48550/arXiv.2508.15734" },
    { title: "[Sustainability-related articles](https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=1950131164#gid=1950131164) from the AI Ethics & Policy News Aggregator sourced by [Casey Fiesler](https://caseyfiesler.com/).", url: "https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=1950131164#gid=1950131164" },
  ],

  pageNotes: [
    { id: 1, text: "Hao, K. (2025). [*Empire of AI: Dreams and Nightmares in Sam Altman's OpenAI*](https://search.worldcat.org/title/1482119829) (pp. 276). Penguin Press." },
    { id: 2, text: "Luccioni, S., Jernite, Y., & Strubell, E. (2024). [Power Hungry Processing: Watts Driving the Cost of AI Deployment?](https://doi.org/10.1145/3630106.3658542) *The 2024 ACM Conference on Fairness, Accountability, and Transparency*, 85–99." },
  ],

  disciplinaryExtensions: [
    { id: "de-sust-1", discipline: "Business & Management", prompt: "What is the responsibility of tech companies in reducing AI's environmental impact? Some companies have been pulling back on sustainability goals. Investigate what companies have pledged and how their actions compare." },
    { id: "de-sust-2", discipline: "Environmental Science", prompt: "Examine AI's applications in climate modeling and conservation versus its unintended consequences on natural resources. Does AI's utility for environmental research justify its environmental cost?" },
    { id: "de-sust-3", discipline: "Arts & Media Studies", prompt: "AI-generated images and media carry a particularly large carbon footprint. What are the ethics and implications of AI's environmental impact in visual and media arts?" },
    { id: "de-sust-4", discipline: "Public Policy", prompt: "How can awareness of AI's environmental impacts inform regulation, energy standards, and national sustainability goals in the tech sector?" },
  ],

  connectedTopics: [
    { topicId: "need", relation: "Environmental costs are a central argument in the broader debate about whether AI's benefits justify its harms" },
    { topicId: "builds", relation: "The physical infrastructure and labor behind data centers connect environmental and labor exploitation" },
    { topicId: "benefits", relation: "Environmental costs are disproportionately borne by communities near data centers and resource extraction sites" },
  ],

  belowActivitiesLearningNote: "All resource links should be verified before each use. For Activity 1, article selection is left to instructor discretion — choose readings that cover distinct environmental impact areas (energy, water, e-waste, emissions) appropriate for your course level.",
};
