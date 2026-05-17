// ─── Content: "Does AI Spread Mis/Disinfo?" ───

import DisinfoIllustration from "../../components/illustrations/DisinfoIllustration.jsx";

export const disinfoContent = {
  Illustration: DisinfoIllustration,

  expertQuote: {
    text: "The popular emergence of generative AI has deepened uncertainty in an already-skeptical information environment, leading people to suspect that anything could be the product of synthetic media.[^1]",
    source: "Charlie Warzel, technology journalist, *The Atlantic*",
  },

  introduction: [
    "From Taylor Swift **deepfakes** to synthetic AI robocalls from politicians, AI tools have the potential to turn any message into a viral disinformation campaign. **Disinformation** refers to \"false, inaccurate, or misleading information designed, presented and promoted to intentionally cause public harm or for profit.\"[^2] **Misinformation** is similar in nature, but the sharers of misinformation may have done so accidentally and without intent to harm. AI models aren't human - they don't possess intent to harm, whether deliberately or inadvertently. So, what's the concern? Some argue that the ready availability and low cost of AI tools *could* facilitate the spread of higher quality mis/disinformation by bad (human) actors.[^3] Others argue the danger of this is overblown and there is insufficient evidence-based research to support the hype.[^4] It may be some time before we fully understand the impact of AI-generated mis/disinformation, students should be aware of the potential ways in which AI *could* be used to manipulate text, images, video, and information sources. They should remain critical consumers and sharers of information they come across.",
  ],

  keyTerms: [
    { term: "Disinformation", definition: "False or inaccurate information deliberately created and spread with intent to deceive or cause harm" },
    { term: "Misinformation", definition: "False or inaccurate information shared by mistake — without deliberate intent to deceive, but still potentially harmful" },
    { term: "Deepfake", definition: "Synthetic media — images, audio, or video — created or altered using AI to convincingly depict something that didn't happen" },
  ],

  learningObjectives: [
    "Describe the concepts of mis- and disinformation",
    "Describe the concept of a deepfake",
    "Identify how AI tools (e.g., text generation, image generation) are used in disinformation campaigns",
    "Reflect on the ethical and societal consequences of AI-generated disinformation",
    "Apply strategies for fact-checking the accuracy and quality of AI-generated information",
  ],

  activities: [
    {
      id: "dis-1",
      slug: "disinfo-campaign",
      number: 1,
      type: "in-class",
      title: "Creating a Disinformation Campaign",
      tagline: "Building a fictional AI-enabled campaign to understand how disinformation works",
      purpose: "Give students firsthand experience with the tools and tactics used to create AI-enabled disinformation. By building a fictional campaign themselves, students develop a deeper understanding of how disinformation works, how AI accelerates it, and what safeguards might help prevent its spread in the real world.",
      objectives: [
        "Identify how AI tools (e.g., text generation, image generation) are used in disinformation campaigns",
        "Reflect on the ethical and societal consequences of AI-generated disinformation",
      ],
      steps: [
        { label: "Pre-Class Video", detail: "Watch \"Why TikTok Is Becoming a Conspiracy Playground\" by Abbie Richards, disinformation researcher (12 min.). Note the signature features of AI-generated content on social media and the key ways AI could be used to create disinformation.", instructorNote: "This can be assigned as pre-work before the in-class session." },
        { label: "Opening Pair Discussion", detail: "At the start of class, discuss in pairs: Have you come across conspiratorial content on TikTok or other platforms? What are the signature features of AI-generated content, as described by Abbie Richards? What are the key ways AI could help create disinformation?" },
        { label: "Step 1 — Choose a Topic", detail: "In teams of 3–5, select a campus-relevant disinformation topic. Example: a fictional measles outbreak on campus. [Update to reference a relevant location or event at your institution.]", time: "~30 min total", instructorNote: "The campus examples reference Duke University (Duke Chronicle, K-ville). Update these to match your institution before using." },
        { label: "Step 2 — Define a Goal", detail: "Decide what effect your campaign intends to have. Examples: cause a campus panic, get the administration's attention, sow confusion about an event." },
        { label: "Step 3 — Design the Campaign", detail: "Using AI tools, create all four deliverables: one fake campus newspaper article, one fake social media post with an AI-generated image and caption, a brief description of your disinformation strategy (target audience, spread method, emotions exploited — try using AI to help iterate on the strategy and note whether it complies), and an outline of the tools and techniques used.", instructorNote: "Review your institution's AI use policies before assigning. Make clear to students that this is an educational exercise only." },
        { label: "Step 4 — Team Presentations", detail: "Each team prepares a brief slideshow and presents to the class (5 min. per team). All team members participate. Address: What was your campaign? Show the content you created. What were the mechanics of your strategy? How did AI enable the deception? What safeguards — technical, social, or educational — might prevent real-world campaigns like yours?", time: "5 min/team" },
      ],
      onlineVersion: { description: "Teams collaborate asynchronously to design their fictional disinformation campaign. Each team posts their fake article, social media post, strategy description, and tools outline to the course forum, along with a written analysis of what safeguards might prevent real-world campaigns like theirs. Other students review and respond to at least one other team's campaign." },
      noAIAlternative: { description: "Instead of creating content, provide students with 2–3 examples of real-world AI-generated disinformation campaigns (documented in news coverage). Students analyze the mechanics, identify the AI tools likely used, and discuss what safeguards might have prevented the spread." },
      grading: [
        "Each team collaborating to choose a topic and create a fictional campaign using AI tools",
        "Each team reflecting on the mechanics of disinformation — how it works, what elements manipulate the audience, and how AI facilitates faster creation",
        "Each team presenting and sharing at least one safeguard they think might help prevent disinformation from spreading",
      ],
      resources: [
        { title: "Abbie Richards: \"Why TikTok Is Becoming a Conspiracy Playground\" (12 min.)", url: "https://youtu.be/X66MGRN364c?si=n9mw-3RZ6G0I5AWy" },
      ],
    },
    {
      id: "dis-2",
      slug: "spot-deepfake",
      number: 2,
      type: "online",
      title: "How to Spot a Deepfake",
      tagline: "Analyzing real deepfake examples using the SNIFF test",
      purpose: "Develop practical strategies for identifying AI-generated deepfakes. By applying evaluation frameworks to real examples, sharpen your AI media literacy and build skills for critically analyzing the media you encounter in your personal, academic, and professional life.",
      objectives: [
        "Describe the concept of a deepfake",
        "Apply strategies for fact-checking the accuracy and quality of AI-generated information",
      ],
      sharedFramework: {
        name: "SNIFF Test",
        description: "A structured fact-checking framework for evaluating AI-generated content — used across multiple topics",
        alsoUsedIn: ["trust"],
      },
      blocks: [
        {
          kind: "deepfakeExamples",
          items: [
            { label: "Image: Alligator Alcatraz", caption: "A viral AI-generated image that circulated as if it were a real photograph.", url: "#" },
            { label: "Image: Dalai Lama being arrested", caption: "Fabricated photo used to inflame political narratives.", url: "#" },
            { label: "Image: Victim from Hurricane Helene", caption: "AI-generated disaster imagery circulated during the real event.", url: "#" },
            { label: "Video: Ron DeSantis deepfake", caption: "Synthetic video clip used in political messaging.", url: "#" },
            { label: "Video: Hillary Clinton endorsing DeSantis", caption: "Fabricated political endorsement — obvious once examined closely.", url: "#" },
          ],
        },
      ],
      steps: [
        { label: "Pre-Discussion Viewing", detail: "Watch or review: Carnegie Mellon's \"What Are Deepfakes?\" (3 min.), the New York Times' \"Is This Video Even Real?\" (4 min.), and the SNIFF Test handout. Optional: \"How to Distinguish AI-Generated Images from Authentic Photographs\" — a longer reference guide; focus on pages 6–7.", instructorNote: "Verify all deepfake example links are active before assigning — deepfake content is frequently removed from platforms. If students have already used the SNIFF test in the \"Can We Trust AI?\" topic, note this connection and ask them to build on that prior experience." },
        { label: "Choose Your Examples", detail: "Select one deepfaked image and one deepfaked video from the provided lists. Use the SNIFF test to analyze each one." },
        { label: "Write Your Discussion Post", detail: "Write a post of at least 200 words addressing all four questions: How believable was the deepfake? What criteria tipped you off it was fake? Is video or image more likely to cause confusion, and why? How might the examples you selected cause real-world harm, and who would be harmed? The NYT video suggests that what's scarier than deepfakes is how society responds to the idea we can no longer trust what we see. Do you agree?" },
        { label: "Respond to Peers", detail: "Reply to at least two classmates' posts with a follow-up question. Try to respond to posts about images or videos different from the ones you analyzed." },
      ],
      grading: [
        "A thoughtful post of at least 200 words answering all four reflection questions",
        "Analysis of one deepfaked image and one deepfaked video",
        "Articulation of at least one ethical concern related to deepfakes",
        "Follow-up questions posted in response to at least two classmates",
      ],
      resources: [
        { title: "Carnegie Endowment: \"What Are Deepfakes?\" (3 min.)", url: "https://youtu.be/etSfYERBK28?si=ddv8PvzFv0jvmGZU" },
        { title: "New York Times: \"Is This Video Even Real?\" (4 min.)", url: "https://youtu.be/1OqFY_2JE1c?si=pUyQ3mvM8Pc8MElO" },
        { title: "SNIFF Test (downloadable PDF)", url: "/sniff-test.pdf" },
        { title: "\"How to Distinguish AI-Generated Images\" (optional guide)", url: "https://arxiv.org/abs/2406.08651" },
      ],
    },
    {
      id: "dis-3",
      slug: "debate-disinfo",
      number: 3,
      type: "online",
      title: "Debating AI's Role in Disinformation",
      tagline: "Two articles, two sides — then you take a position",
      purpose: "Engage seriously with competing perspectives on AI's role in disinformation. Rather than accepting one framing as obvious, read, analyze, and argue both sides before articulating your own position.",
      objectives: [
        "Describe the concepts of mis- and disinformation",
        "Identify how AI tools are used in disinformation campaigns",
        "Reflect on the ethical and societal consequences of AI-generated disinformation",
      ],
      blocks: [
        {
          kind: "opposingViews",
          left: {
            label: "AI Is an Amplifier",
            points: [
              "AI-generated content is now cheap, fast, and convincing",
              "A single actor can produce disinformation at unprecedented scale",
              "Benson, T. (2023). \"This Disinformation Is Just for You.\" Wired.",
            ],
          },
          right: {
            label: "The Threat Is Overhyped",
            points: [
              "Traditional disinformation methods remain more influential",
              "Empirical evidence of AI-driven harm is limited",
              "Simon, Altay, & Mercier (2023). \"Misinformation reloaded?\" Harvard Kennedy School.",
            ],
          },
        },
      ],
      steps: [
        { label: "Pre-Reading", detail: "Read both articles — one argues AI is a significant amplifier of disinformation, the other argues fears are overhyped. You may also conduct independent research and cite additional sources.", instructorNote: "Both articles present genuinely opposing views and both should be assigned — the writing structure depends on students engaging seriously with both sides. Consider noting your citation format expectations before assigning." },
        { label: "Write Your Blog-Style Post", detail: "Write a 300–500 word post presenting both sides and taking a position. Address: Side 1 — What AI capabilities make it easier to generate misleading content? What evidence exists of AI disinformation in action? Side 2 — How has the threat been overstated? Are traditional methods of disinformation more influential? Your Position — Where do you stand, and why? What interventions should we prioritize? Note anything you want to know more about." },
        { label: "Respond to a Peer", detail: "Find one classmate whose post takes a stance opposite from yours and respond thoughtfully to their position." },
      ],
      grading: [
        "Analysis of both perspectives on AI's role in mis/disinformation",
        "A clear articulation of your own position",
        "Demonstrated openness to different perspectives and critical engagement",
        "A thoughtful reply to one classmate whose post takes an opposing stance",
      ],
      resources: [
        { title: "Benson, T. (2023). \"This Disinformation Is Just for You.\" Wired.", url: "https://www.wired.com/story/generative-ai-custom-disinformation/" },
        { title: "Simon, Altay, & Mercier (2023). \"Misinformation reloaded?\" Harvard Kennedy School.", url: "https://doi.org/10.37016/mr-2020-127" },
      ],
    },
  ],
  conversationStarters: [
    { id: "cs-dis-1", prompt: "Have you ever come across a deepfake, or mis/disinformation online? How could you tell?" },
    { id: "cs-dis-2", prompt: "What are some scenarios you can imagine where mis/disinformation could cause real-world harm?" },
    { id: "cs-dis-3", prompt: "Who do you think is most susceptible to being manipulated by mis/disinformation? Why do you think they are more vulnerable to being swayed by it?" },
  ],


  furtherRecommendations: [
    { title: "Elliott, V. (2024, September 2). [AI-Fakes Detection Is Failing Voters in the Global South](https://www.wired.com/story/generative-ai-detection-gap/). *Wired*.", url: "https://www.wired.com/story/generative-ai-detection-gap/" },
    { title: "Mehrotra, D. (2024, June 19). [Perplexity Is a Bullshit Machine](https://www.wired.com/story/perplexity-is-a-bullshit-machine/). *Wired*.", url: "https://www.wired.com/story/perplexity-is-a-bullshit-machine/" },
    { title: "Hsu, T., & Thompson, S. A. (2024, July 11). [Even Disinformation Experts Don't Know How to Stop It](https://www.nytimes.com/2024/07/11/technology/disinformation-tools.html). *The New York Times*.", url: "https://www.nytimes.com/2024/07/11/technology/disinformation-tools.html" },
    { title: "UNC CITAP. (2021). [Does Not Compute](https://citap.unc.edu/does-not-compute/).", url: "https://citap.unc.edu/does-not-compute/" },
    { title: "Kuo, R., & Marwick, A. (2021). [Critical disinformation studies: History, power, and politics](https://doi.org/10.37016/mr-2020-76). *Harvard Kennedy School Misinformation Review*.", url: "https://doi.org/10.37016/mr-2020-76" },
    { title: "Sison, A. J. G., Daza, M. T., Gozalo-Brizuela, R., & Garrido-Merchán, E. C. (2023). [ChatGPT: More than a Weapon of Mass Deception, Ethical challenges and responses from the Human-Centered Artificial Intelligence (HCAI) perspective](https://doi.org/10.48550/arXiv.2304.11215). *arXiv*.", url: "https://doi.org/10.48550/arXiv.2304.11215" },
    { title: "Matz, S. C., et al. (2024). [The potential of generative AI for personalized persuasion at scale](https://doi.org/10.1038/s41598-024-53755-0). *Scientific Reports*, 14(1), 4692.", url: "https://doi.org/10.1038/s41598-024-53755-0" },
    { title: "[Critical Disinformation Studies: A Syllabus](https://citap.unc.edu/publications/critical-disinformation-studies/) (UNC-Chapel Hill).", url: "https://citap.unc.edu/publications/critical-disinformation-studies/" },
    { title: "[AI Pedagogy Project (Harvard) Assignments](https://aipedagogy.org/assignments) → Filter by theme (e.g. misinformation) and/or subject (e.g. journalism).", url: "https://aipedagogy.org/assignments" },
    { title: "[Mis/disinformation-related articles](https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=1993531230#gid=1993531230) from the AI Ethics & Policy News Aggregator sourced by [Casey Fiesler](https://caseyfiesler.com/).", url: "https://docs.google.com/spreadsheets/d/11Ps8ILDHH-vojJGyIx7CcaoB5l1mBRHy3OQAgWkm0W4/edit?gid=1993531230#gid=1993531230" },
  ],

  pageNotes: [
    { id: 1, text: "Warzel, C. (2024, March 11). [Kate Middleton and the End of Shared Reality](https://www.theatlantic.com/technology/archive/2024/03/kate-middleton-mothers-day-photo-fake/677718/). *The Atlantic*." },
    { id: 2, text: "Directorate-General for Communications Networks, Content and Technology (European Commission). (2018). [*A multi-dimensional approach to disinformation: Report of the independent High level Group on fake news and online disinformation*](https://data.europa.eu/doi/10.2759/739290). Publications Office of the European Union." },
    { id: 3, text: "Matz, S. C., Teeny, J. D., Vaid, S. S., Peters, H., Harari, G. M., & Cerf, M. (2024). [The potential of generative AI for personalized persuasion at scale](https://doi.org/10.1038/s41598-024-53755-0). *Scientific Reports*, 14(1), 4692." },
    { id: 4, text: "Simon, F. M., Altay, S., & Mercier, H. (2023). [Misinformation reloaded? Fears about the impact of generative AI on misinformation are overblown](https://doi.org/10.37016/mr-2020-127). *Harvard Kennedy School Misinformation Review*." },
  ],

  disciplinaryExtensions: [
    { id: "de-dis-1", discipline: "Psychology", prompt: "Research has found that when disinformation is more targeted and personalized, it is more persuasive. What psychological phenomena are at play in the creation and consumption of disinformation?" },
    { id: "de-dis-2", discipline: "History", prompt: "Students could look at the historical roots of disinformation — propaganda campaigns, wartime information warfare — and make connections to modern AI-enabled narratives." },
    { id: "de-dis-3", discipline: "Arts & Humanities", prompt: "What is the role of visual and media arts in disinformation and propaganda campaigns? How does AI change the scale and sophistication of visual manipulation?" },
    { id: "de-dis-4", discipline: "Computer Science & Engineering", prompt: "What are the most promising detection technologies that could help identify AI-generated fake content? What are their limitations?" },
  ],

  connectedTopics: [
    { topicId: "trust", relation: "Shares the SNIFF test framework; deepfake and hallucination analysis build on the same fact-checking skills" },
    { topicId: "thinking", relation: "Uncritical consumption of AI-generated content makes people more vulnerable to disinformation" },
    { topicId: "bias", relation: "Biased AI outputs can become raw material for targeted disinformation campaigns" },
  ],

  belowActivitiesLearningNote: "Activity 1 asks students to build fictional disinformation — review your institution's AI use policies before assigning and make clear to students that this is an educational exercise only. Verify all deepfake example links in Activity 2 are active before assigning; deepfake content is frequently removed from platforms. Both articles in Activity 3 should be assigned — the structure depends on students engaging with both sides seriously.",
};
