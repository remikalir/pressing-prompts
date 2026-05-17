// ─── Content: "Who Builds Our AI?" ───

import BuildersIllustration from "../../components/illustrations/BuildersIllustration.jsx";

export const buildsContent = {
  Illustration: BuildersIllustration,

  expertQuote: {
    text: "What can end up happening is that certain populations become the guinea pigs of these technologies, or conversely, they become the cheap labor to power these technologies.[^1]",
    source: "Dr. Seeta Peña Gangadharan, media scholar",
  },

  introduction: [
    "Sam Altman, Mark Zuckerberg, Sundar Pichai, Elon Musk, Jeff Bezos–you've likely heard of the Big Tech founders behind some of the most prominent AI companies. But who actually builds the technology powering AI tools? For starters, a large workforce of computer programmers, data scientists, and software developers design the algorithms, neural networks, and machine learning models that provide the backbone of AI tools. These workers have backgrounds in computer or data science, statistics, and engineering. But behind the scenes, another more hidden or **\"ghost\" workforce** performs the often unsavory tasks that make AI actually function–tasks like content moderation, data annotation, data labeling, and model training. These workers, often outsourced by Big Tech to Global South countries, endure low wages and exploitative conditions, despite their critical role in shaping AI. As AI becomes integrated into daily life, students should critically examine the ethical implications of the hidden labor behind these technologies.",
  ],

  keyTerms: [
    { term: "Ghost Work", definition: "The often invisible human labor that makes AI systems function — data labeling, content moderation, transcription — typically outsourced and poorly compensated" },
    { term: "Data Annotation", definition: "The process of labeling raw data (text, images, audio) to teach AI models to recognize patterns — essential work done by millions of hidden workers" },
    { term: "Content Moderation", definition: "The process of reviewing and filtering AI outputs and training data to remove harmful or toxic content — work that carries significant psychological costs" },
  ],

  learningObjectives: [
    "Describe the roles of hidden or 'ghost' workers in AI development",
    "Explain how data labeling, content moderation, and model training rely on human labor",
    "Analyze the ethical implications of outsourcing AI labor to low-wage workers in the Global South",
    "Map the full chain of human labor involved in producing an AI interaction",
  ],

  questionLearningNote: "This topic examines the often-invisible human labor behind AI systems. Note: this topic did not have a Canvas module with pre-built activities in the original project. The activities here were designed to be consistent with the pedagogical patterns of the other topics while drawing from the Duke site's learning activities and resources. The TIME article in Activity 1 contains descriptions of traumatic content that workers were exposed to — consider providing a content warning. Activity 3 works best as a culminating exercise after the first two activities have established foundational knowledge.",

  activities: [
    {
      id: "build-1",
      slug: "ghost-work",
      number: 1,
      type: "in-class",
      title: "Uncovering AI's Hidden Workforce",
      tagline: "Investigating the invisible labor behind the tools we use every day",
      purpose: "Examine the often-invisible human labor that makes AI systems function — from data labeling and annotation to content moderation and model training. Through pre-reading and structured discussion, build understanding of who these workers are, what conditions they face, and why their contributions are largely hidden from end users.",
      objectives: [
        "Describe the roles of hidden or 'ghost' workers in AI development",
        "Explain how data labeling, content moderation, and model training rely on human labor",
        "Analyze the ethical implications of outsourcing AI labor to low-wage workers",
      ],
      steps: [
        { label: "Pre-Reading", detail: "Read the TIME article \"The $2 Per Hour Workers Who Made ChatGPT Safer\" by Billy Perrigo, which investigates the Kenyan workers hired through the outsourcing firm Sama to label toxic content for OpenAI. As you read, note: What tasks did these workers perform? What were their working conditions? Why is this labor largely invisible to ChatGPT users?", instructorNote: "This article contains descriptions of traumatic content that workers were exposed to during content moderation. Consider providing a content warning before assigning." },
        { label: "Small-Group Discussion", detail: "In groups of 3–4, discuss: What surprised you about the article? Why do you think this labor is hidden from end users? How does knowing about these workers change your understanding of how AI tools work? What responsibilities do AI companies have toward these workers?", time: "15–20 min" },
        { label: "Whole-Class Debrief", detail: "Each group shares one key insight and one question they want to pursue further. As a class, discuss: If AI companies are built on human labor, how should that labor be credited, compensated, and protected?", time: "10 min", instructorNote: "For large classes, use Wooclap or a shared document for the share-out." },
      ],
      onlineVersion: { description: "After completing the pre-reading, students write a 200-word discussion post reflecting on what surprised them about AI's hidden workforce, why this labor is invisible to users, and what responsibilities AI companies have toward these workers. They respond to two peers, building on each other's analysis." },
      grading: [
        "Completion of the pre-reading",
        "Active participation in small-group and whole-class discussion",
        "Demonstration of critical engagement with the ethical dimensions of hidden AI labor",
      ],
      resources: [
        { title: "Perrigo, B. (2023). \"The $2 Per Hour Workers Who Made ChatGPT Safer.\" TIME.", url: "https://time.com/6247678/openai-chatgpt-kenya-workers/" },
      ],
    },
    {
      id: "build-2",
      slug: "content-moderation",
      number: 2,
      type: "online",
      title: "The Human Cost of Content Moderation",
      tagline: "Examining what it means to make AI 'safe' — and who bears that cost",
      purpose: "Investigate the specific human costs of content moderation for AI systems. By researching the working conditions, psychological impacts, and labor practices of AI content moderation, develop a more complete picture of what it takes to make AI tools function — and who pays the price.",
      objectives: [
        "Identify the specific tasks performed by AI content moderators",
        "Evaluate the psychological and economic costs borne by content moderation workers",
        "Consider whose labor is valued and whose is exploited in the AI supply chain",
      ],
      steps: [
        { label: "Research Phase", detail: "Using the resources provided and your own research, investigate the working conditions of AI content moderators. Focus on: What content are they exposed to? What are the documented psychological effects? What are their wages relative to the value they create? Where are they located geographically, and why?", instructorNote: "Bartholomew's CJR piece and the Perrigo TIME article from Activity 1 are good starting points. Students may also find relevant material in the Ghost Work book by Mary Gray and Siddharth Suri." },
        { label: "Write Your Reflection", detail: "Write a 300-word reflection addressing: What did you learn about the conditions of content moderation work? Why are these workers disproportionately located in the Global South? How does knowing about this labor change your relationship to AI tools? What would a more ethical model of content moderation look like?" },
        { label: "Respond to a Peer", detail: "Reply to at least one classmate whose reflection raised a point you hadn't considered." },
      ],
      noAIAlternative: { description: "Provide students with excerpts from published accounts of content moderation work (from TIME, CJR, or the Ghost Work book). Students analyze the excerpts and write the same reflection without needing to conduct independent online research." },
      grading: [
        "A 300-word reflection addressing all four questions",
        "Evidence of engagement with specific working conditions and their ethical implications",
        "A substantive reply to at least one peer's post",
      ],
      resources: [
        { title: "Bartholomew, J. (2025). \"Uncovering the labor exploitation that powers AI.\" Columbia Journalism Review.", url: "https://www.cjr.org/tow_center/qa-uncovering-the-labor-exploitation-that-powers-ai.php" },
        { title: "Gray, M. & Suri, S. (2019). Ghost Work. Houghton Mifflin Harcourt.", url: "https://find.library.duke.edu/?q=%22Suri%2C+Siddharth%22&search_field=author" },
      ],
    },
    {
      id: "build-3",
      slug: "supply-chain",
      number: 3,
      type: "in-class",
      title: "Mapping AI's Labor Supply Chain",
      tagline: "Tracing the human work behind a single AI interaction",
      purpose: "Trace the full chain of human labor required to produce a single AI interaction — from the engineers who design algorithms to the data annotators who label training sets to the content moderators who filter outputs. By mapping this supply chain, make visible the distribution of credit, compensation, and risk across the workforce that builds AI.",
      objectives: [
        "Map the full chain of human labor involved in AI development",
        "Analyze how credit, compensation, and risk are distributed across AI workers",
        "Reflect on the ethical implications of the AI labor supply chain",
      ],
      udlOptions: true,
      steps: [
        { label: "Introduction", detail: "Consider this: when you type a prompt into ChatGPT and receive a response, dozens of categories of human workers have contributed to making that interaction possible. But who are they? Where are they? And how are they treated?", instructorNote: "This activity works well as a culminating exercise after Activities 1 and 2 have established the foundational knowledge about ghost work and content moderation." },
        { label: "Group Mapping Exercise", detail: "In groups of 4–5, create a visual map (on a whiteboard, large paper, or shared digital document) that traces the human labor involved in a single AI chatbot interaction. Include at least these categories: algorithm designers and engineers, training data creators (the people whose content was scraped), data annotators and labelers, content moderators, infrastructure workers (data center staff), and end users. For each category, note: where these workers are likely located, approximate compensation, working conditions, and whether their contribution is visible or invisible to the end user.", time: "25 min" },
        { label: "Gallery Walk & Discussion", detail: "Groups display their maps. The class circulates, noting differences between maps. Then discuss as a whole class: Where do you see the biggest gaps between value created and compensation received? What would a more just distribution look like? How does this mapping change your understanding of AI as a 'tool'?", time: "15 min", instructorNote: "For large classes, have groups photograph their maps and share in a discussion forum for asynchronous review." },
      ],
      onlineVersion: { description: "Students individually create a labor supply chain map (using any visual tool — drawing, slides, Canva, etc.) tracing the human work behind a single AI interaction. They post their map to the discussion forum with a 150-word explanation of where they see the biggest ethical concerns, and respond to two peers whose maps highlighted different aspects of the supply chain." },
      grading: [
        "Active participation in the group mapping exercise",
        "A supply chain map that includes at least six categories of workers with location, compensation, conditions, and visibility noted",
        "Participation in the gallery walk and whole-class discussion",
      ],
      resources: [],
    },
  ],
  conversationStarters: [
    { id: "cs-build-1", prompt: "What do you know about how AI technology is built? Who are the key players?" },
    { id: "cs-build-2", prompt: "Do you think tech companies should be responsible for ensuring safe working conditions for outsourced AI laborers? If so, how?" },
    { id: "cs-build-3", prompt: "What parallels do you see between the AI workforce and other types of work that rely on outsourced, low-wage workers (ex. gig workers)?" },
  ],


  furtherRecommendations: [
    { title: "Mozilla. (2023). [The Humans in the Machine](https://irlpodcast.org/season7/episode2/). *IRL Podcast*. Hosted by Bridget Todd.", url: "https://irlpodcast.org/season7/episode2/" },
    { title: "Nguyen, A., & Mateescu, A. (2024). [*Generative AI and Labor: Power, Hype, and Value at Work*](https://datasociety.net/library/generative-ai-and-labor/). \"AI's dependence on human labor,\" Part 2, pg. 11–16. *Data & Society*.", url: "https://datasociety.net/library/generative-ai-and-labor/" },
    { title: "Williams, A., & Miceli, M. (2023, September 6). [Data Work and its Layers of (In)visibility](https://just-tech.ssrc.org/articles/data-work-and-its-layers-of-invisibility/). *Just Tech*. Social Science Research Council.", url: "https://just-tech.ssrc.org/articles/data-work-and-its-layers-of-invisibility/" },
    { title: "Hao, K. (2025). [*Empire of AI: Dreams and nightmares in Sam Altman's OpenAI*](https://find.library.duke.edu/catalog/DUKE99119765250108501). Penguin Press.", url: "https://find.library.duke.edu/catalog/DUKE99119765250108501" },
    { title: "[Labor-related articles](https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=633965705#gid=633965705) from the AI Ethics & Policy News Aggregator sourced by [Casey Fiesler](https://caseyfiesler.com/).", url: "https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=633965705#gid=633965705" },
  ],

  pageNotes: [
    { id: 1, text: "Interview in Rolling Stone, O'Neil, L. (2023, August 12). [These Women Tried to Warn Us About AI](https://www.rollingstone.com/culture/culture-features/women-warnings-ai-danger-risk-before-chatgpt-1234804367/). *Rolling Stone*." },
  ],

  disciplinaryExtensions: [
    { id: "de-build-1", discipline: "Economics", prompt: "Research the network of where Big Tech companies outsource data annotation and content moderation (e.g., Sama, Scale AI). Alternatively, research other forms of 'ghost economies' and compare with AI ghost work." },
    { id: "de-build-2", discipline: "Languages & Linguistics", prompt: "Explore how translation and transcription challenges impact data labeling for AI — and the linguistic biases that result when certain languages are underrepresented in training data." },
    { id: "de-build-3", discipline: "Data Science & Global Health", prompt: "Consider a case study on bias in data labeling of medical imaging datasets — for example, skin color disparities in dermatology data that lead to diagnostic inequities." },
    { id: "de-build-4", discipline: "Sociology & Labor Studies", prompt: "Compare the conditions of AI ghost workers with other forms of invisible or precarious labor (gig economy, domestic work, supply chain labor). What structural patterns do you see?" },
  ],

  connectedTopics: [
    { topicId: "theft", relation: "The labor and creative contributions that build AI systems are central to questions of credit and compensation" },
    { topicId: "sustainable", relation: "Data center workers and physical infrastructure connect environmental and labor exploitation" },
    { topicId: "spy", relation: "Data labor and consent intersect — workers process personal data they didn't consent to seeing" },
  ],

  belowActivitiesLearningNote: "All resource links should be verified before each use. The TIME article may be behind a paywall — check institutional access. The Ghost Work book by Gray & Suri is available in many university libraries and provides excellent background for instructors preparing to teach this topic.",
};
