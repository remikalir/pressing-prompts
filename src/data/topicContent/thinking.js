// ─── Content: "Does AI Harm Critical Thinking?" ───

import CriticalThinkingIllustration from "../../components/illustrations/CriticalThinkingIllustration.jsx";

export const thinkingContent = {
  Illustration: CriticalThinkingIllustration,

  expertQuote: {
    text: "[AI] could completely reorient our relationship to knowledge, prioritizing rapid, detailed, abridged answers over a deep understanding and the consideration of varied sources and viewpoints.[^1]",
    source: "Matteo Wong, technology journalist, *The Atlantic*",
  },

  introduction: [
    "Artificial intelligence is increasingly integrated into critical thinking and decision-making across research, government, and industry. While AI enables rapid data analysis at an unprecedented speed and scale, **overreliance** on AI can erode an individual's **critical thinking** skills. In the higher education context, researchers have found that university students who use Large Language Models (LLMs) to complete writing and research tasks experienced reduced cognitive load but demonstrated poorer reasoning and argumentation skills compared to those students using traditional search methods.[^2] Another research study found that students using LLMs focused on a narrower set of ideas, resulting in more biased and superficial analyses.[^3] Critical thinking–characterized by evaluation of information, questioning of assumptions, and formation of independent judgments–remains a uniquely human skill that AI cannot fully replicate. Instead of serving as a replacement for human reasoning, AI should function as a tool to enhance it. Students need to be aware of AI's limitations, biases, and errors, ensuring they do not outsource their judgment to AI-generated content uncritically.",
  ],

  keyTerms: [
    { term: "Critical Thinking", definition: "Evaluating information, questioning assumptions, and forming independent judgments — a step-by-step process requiring focus and mental effort" },
    { term: "Cognitive Load", definition: "The amount of mental effort required to process information; AI can reduce this load but may also reduce depth of understanding" },
    { term: "Overreliance", definition: "When people agree with an AI even when it is incorrect — a persistent phenomenon that explanations alone do not solve" },
  ],

  learningObjectives: [
    "Explain that critical thinking is a step-by-step process that requires focus and mental effort",
    "Analyze the legal, ethical, and moral responsibility for decisions made with AI assistance",
    "Develop a shared understanding of what \"overreliance\" on AI looks like",
    "Identify AI use cases that support — rather than replace — human critical thinking",
  ],

  activities: [
    {
      id: "think-1",
      slug: "human-vs-ai",
      number: 1,
      type: "in-class",
      title: "Human vs. AI",
      tagline: "A two-session experiment comparing research with and without AI",
      purpose: "Compare and contrast the costs and benefits of offloading cognitive work from a human to a Large Language Model. Using the process of writing an informative piece — including research and synthesis — as an analogue for critical thinking, examine how mental engagement and recall differ depending on how research was conducted.",
      objectives: ["Explain that critical thinking is a step-by-step process that requires focus and mental effort"],
      multiSession: true,
      steps: [
        { label: "Pre-Class Preparation", detail: "Pair or group students and assign each pair a controversial topic related to your course content. Designate one student to research using an LLM, and the other to use traditional research and writing methods.", instructorNote: "Complete this before the first class session. Choose topics that are complex enough to require genuine research and synthesis — simple factual questions won't surface meaningful differences between the two methods." },
        { label: "Session 1 — Research & Write", detail: "One student uses an LLM while the other uses traditional methods. Both write a summary of what they learn about their assigned topic. While working, keep mental notes on how complex your writing process feels — you'll be asked to reconstruct this process from memory next class.", time: "Full session", instructorNote: "Students using the LLM should log in to an AI tool with their institutional credentials. Remind both students to pay attention to their process, not just their product — the second session depends on honest process recall." },
        { label: "Session 2 — Process Maps & Reflection", detail: "Without referencing prior work, individually draw a handwritten map of your writing process from memory. Then pair up with your partner to compare: Which process was more cognitively involved? Which resulted in better recall? Finally, write a 1–2 paragraph individual reflection (100–300 words) speculating on what the differences might indicate about how offloading cognitive work to AI affects deep thinking.", time: "Full session", instructorNote: "Not referencing prior work is essential — this tests recall, not review. The handwritten process map is intentionally analog; it externalizes the cognitive experience in a way that typing would not." },
      ],
      onlineVersion: { description: "Students complete the research phase asynchronously (one using an AI tool, one using traditional methods), then each submits a process reflection and a summary. In a discussion forum, pairs compare their experiences and post a joint 200-word reflection on the differences in cognitive engagement and recall. Other students respond to at least one pair's reflection." },
      noAIAlternative: { description: "Provide students with two versions of an argument (one AI-generated, one human-generated) without revealing the source. Students discuss which they found more convincing and why, then the instructor reveals the sources for a debrief on how AI-generated content can mimic authority." },
      grading: [
        "A written reflection of 1–2 paragraphs (100–300 words) that includes a brief description of the topic and method used",
        "A reflection on the paired discussion — which process had greater cognitive costs, and whether AI assistance resulted in better or worse long-term recall",
      ],
      resources: [],
    },
    {
      id: "think-2",
      slug: "analyzing-errors",
      number: 2,
      type: "online",
      title: "Analyzing AI Errors",
      tagline: "Why wrong answers from AI can seem so convincing",
      purpose: "Analyze AI-generated responses for inaccuracies and reflect on why human users can be susceptible to accepting erroneous AI answers — even when those answers are wrong. This activity centers on confirmation bias and how it interacts with AI's authoritative tone.",
      objectives: [
        "Explain that critical thinking is a step-by-step process that requires focus and mental effort",
        "Identify AI use cases that support — rather than replace — human critical thinking",
      ],
      sharedFramework: {
        name: "Confirmation Bias",
        description: "The tendency to gather evidence that confirms preexisting expectations, emphasizing supporting evidence and dismissing contradictory evidence",
        alsoUsedIn: ["trust"],
      },
      steps: [
        { label: "Review Key Concept", detail: "Before beginning, familiarize yourself with confirmation bias — the tendency to favor information that confirms what you already believe. Keep this concept in mind as you analyze the AI responses your instructor provides.", instructorNote: "Introduce confirmation bias to students before or at the start of this activity. A brief class discussion or a linked definition will suffice." },
        { label: "Analyze the AI Responses", detail: "Your instructor will provide a set of incorrect AI-written responses to open-ended questions related to your course field. Without using AI to investigate, read each response carefully.", instructorNote: "You must prepare these incorrect AI responses before assigning this activity. Generate them using an AI tool, selecting outputs that contain plausible-sounding but verifiably wrong claims relevant to your course content. This preparation is essential — the activity does not work without course-specific examples." },
        { label: "Write Your Reflection", detail: "Write an individual reflection of 50–100 words addressing: What errors did you identify? Why do you think the AI made these errors? Did the erroneous answers seem authoritative or accurate? Why were the incorrect answers convincing?" },
      ],
      grading: [
        "A written reflection of 50–100 words",
        "An explanation of why the AI errors identified likely occurred",
        "A consideration of why erroneous AI answers can seem convincing, even to knowledgeable readers",
      ],
      resources: [],
    },
    {
      id: "think-3",
      slug: "responsibility-overreliance",
      number: 3,
      type: "online",
      title: "Responsibility and Overreliance",
      tagline: "Who bears responsibility when AI-assisted decisions go wrong?",
      purpose: "Define responsible AI as a decision-making framework, examine the legal and ethical responsibility for decisions made with AI assistance, and apply these ideas to your own circumstances — your field of study, career path, and the kinds of decisions you may face.",
      objectives: [
        "Analyze the legal, ethical, and moral responsibility for decisions made with AI assistance",
        "Develop a shared understanding of what \"overreliance\" on AI looks like",
      ],
      blocks: [
        {
          kind: "keyPassage",
          text: "Prior work has identified a resilient phenomenon that threatens the performance of human-AI decision-making teams: overreliance, when people agree with an AI, even when it is incorrect. Surprisingly, overreliance does not reduce when the AI produces explanations for its predictions, compared to only providing predictions.",
          source: "Vasconcelos, Jorke, et al. (2023)",
        },
      ],
      steps: [
        { label: "Pre-Reading", detail: "Read \"Explanations Can Reduce Over-reliance on AI Systems During Decision Making\" by Vasconcelos, Jorke, et al. (2023). Pay attention to the concept of overreliance — when people agree with an AI even when it is incorrect — and why explanations alone may not solve the problem.", instructorNote: "The full article is the ideal pre-reading, but you may choose to assign only the abstract and key passage. The abstract is included in the discussion prompt to give students context." },
        { label: "Write Your Discussion Post", detail: "Write a 150–200 word response addressing: Who bears responsibility for decisions made with AI — individuals, companies, or the AI system itself? What are some benchmarks that might indicate overreliance on AI? Describe a hypothetical case where a person or group makes meaningful decisions using AI, and use this scenario to ground your responses to the questions above." },
        { label: "Respond to a Peer", detail: "After posting, respond to at least one classmate's post — ideally someone who identified a different responsible party or described a different scenario." },
      ],
      grading: [
        "A discussion post of 150–200 words",
        "A description of a hypothetical case of AI-assisted decision making",
        "Identification of at least one responsible party with a clear argument for why they bear responsibility",
        "Description of at least one benchmark that signals overreliance on AI",
      ],
      resources: [
        { title: "Vasconcelos, H. et al. (2023). \"Explanations Can Reduce Over-reliance on AI Systems During Decision Making.\"", url: "https://cicl.stanford.edu/papers/vasconcelos2023explanations.pdf" },
      ],
    },
  ],
  conversationStarters: [
    { id: "cs-think-1", prompt: "What does 'critical thinking' mean to you? Do you think AI will become capable of 'critical thinking,' or is it something uniquely human?" },
    { id: "cs-think-2", prompt: "In what ways could overreliance on AI harm our critical thinking skills in school or at work? Reflect on your own experiences with AI when considering the question." },
    { id: "cs-think-3", prompt: "What strategies could students use to balance the benefits of AI with the need to develop their own critical thinking skills?" },
    { id: "cs-think-4", prompt: "How do you evaluate the accuracy of AI-generated information? What strategies do you use to factcheck?" },
  ],


  furtherRecommendations: [
    { title: "Kim, L. (2025, January 13). [I over relied on AI and those shortcuts cost me](https://hackernoon.com/i-over-relied-on-ai-and-those-shortcuts-cost-me) | *HackerNoon*.", url: "https://hackernoon.com/i-over-relied-on-ai-and-those-shortcuts-cost-me" },
    { title: "Wong, M. (2024, November 8). [AI is killing the internet's curiosity](https://www.theatlantic.com/newsletters/archive/2024/11/ai-is-killing-the-internets-curiosity/680600/). *The Atlantic*.", url: "https://www.theatlantic.com/newsletters/archive/2024/11/ai-is-killing-the-internets-curiosity/680600/" },
    { title: "Hedrih, V. (2024, September 17). [Study finds ChatGPT eases students' cognitive load, but at the expense of critical thinking](https://www.psypost.org/study-finds-chatgpt-eases-students-cognitive-load-but-at-the-expense-of-critical-thinking/). *Psychology News*.", url: "https://www.psypost.org/study-finds-chatgpt-eases-students-cognitive-load-but-at-the-expense-of-critical-thinking/" },
    { title: "Kosmyna, N., Hauptmann, E., Yuan, Y. T., et al. (2025, June 10). [Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant for essay writing task](https://arxiv.org/abs/2506.08872v1). *arXiv*.", url: "https://arxiv.org/abs/2506.08872v1" },
    { title: "Stadler, M., Bannert, M., & Sailer, M. (2024). [Cognitive ease at a cost: LLMs reduce mental effort but compromise depth in student scientific inquiry](https://doi.org/10.1016/j.chb.2024.108386). *Computers in Human Behavior*, 160, 108386.", url: "https://doi.org/10.1016/j.chb.2024.108386" },
    { title: "Lee, H.-P. et al. (2025, April 1). [*The impact of generative AI on critical thinking: Self-reported reductions in cognitive effort and confidence effects from a survey of knowledge workers*](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/). Proceedings of the ACM CHI Conference on Human Factors in Computing Systems.", url: "https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/" },
    { title: "Zhou, E., & Lee, D. (2024). [Generative artificial intelligence, human creativity, and art](https://doi.org/10.1093/pnasnexus/pgae052). *PNAS Nexus*, 3(3), pg. 052.", url: "https://doi.org/10.1093/pnasnexus/pgae052" },
    { title: "Zirar, A. (2023). [Exploring the impact of language models, such as ChatGPT, on student learning and assessment](https://doi.org/10.1002/rev3.3433). *Review of Education*, 11(3), e3433.", url: "https://doi.org/10.1002/rev3.3433" },
    { title: "[AI Pedagogy Project (Harvard) Assignments](https://aipedagogy.org/assignments) → Filter by theme (e.g. misinformation) and/or subject (e.g. ethics & philosophy).", url: "https://aipedagogy.org/assignments" },
  ],

  pageNotes: [
    { id: 1, text: "Wong, M. (2024, November 8). [AI Is Killing the Internet's Curiosity](https://www.theatlantic.com/newsletters/archive/2024/11/ai-is-killing-the-internets-curiosity/680600/). *The Atlantic*." },
    { id: 2, text: "Stadler, M., Bannert, M., & Sailer, M. (2024). [Cognitive ease at a cost: LLMs reduce mental effort but compromise depth in student scientific inquiry](https://doi.org/10.1016/j.chb.2024.108386). *Computers in Human Behavior*, 160, 108386." },
    { id: 3, text: "Kosmyna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X.-H., Beresnitzky, A. V., Braunstein, I., & Maes, P. (2025, June 10). [*Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task*](https://arxiv.org/abs/2506.08872v1). arXiv.Org." },
  ],

  disciplinaryExtensions: [
    { id: "de-think-1", discipline: "Writing", prompt: "Engage with a chatbot as a writing partner for an assignment. Reflect on the process: what role did you play in guiding the chatbot? How did its suggestions influence your writing? How different would it be to engage with a peer reviewer?" },
    { id: "de-think-2", discipline: "Philosophy & Ethics", prompt: "Explore whether reliance on AI undermines autonomy and personal responsibility in decision-making." },
    { id: "de-think-3", discipline: "Media & Journalism", prompt: "Examine how AI-generated misinformation influences public opinion and erodes trust in traditional media sources." },
    { id: "de-think-4", discipline: "Psychology & Neuroscience", prompt: "Explore how brain regions associated with trust and decision-making respond to AI-generated information. Can AI reduce cognitive overload, or does it paradoxically increase dependency?" },
  ],

  connectedTopics: [
    { topicId: "trust", relation: "Hallucinations and AI slop exploit the same cognitive shortcuts that lead to overreliance" },
    { topicId: "disinfo", relation: "Uncritical consumption of AI content connects directly to vulnerability to disinformation" },
    { topicId: "bias", relation: "Students using LLMs focused on narrower ideas, mirroring the monoculture problem in training data" },
  ],

  belowActivitiesLearningNote: "Activity 1 is multi-session and requires pair coordination — plan to introduce it at the end of one class and complete it at the start of the next. For Activity 2, you must prepare course-specific incorrect AI responses before assigning; the activity does not work with generic examples. Activity 3's full research article is available but you may assign only the abstract and the key passage reproduced above.",
};
