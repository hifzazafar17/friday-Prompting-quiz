import type { Question } from './types'

export const ALL_QUESTIONS: Question[] = [

  // ── CONCEPT 1: STATELESS ──────────────────────────────────────────────────
  { id: 1, concept: 'stateless', difficulty: 'easy',
    question: "When an AI model is described as 'stateless,' what does that mean?",
    options: ['It cannot process images','The model has no memory — each answer is built only from its current context window','It only works with text data','It cannot access the internet'], correct: 1 },

  { id: 2, concept: 'stateless', difficulty: 'easy',
    question: "Why do almost all advanced AI techniques reduce to just two moves?",
    options: ['AI models are trained on only two data types','Prompts are always questions or commands','The model only sees its context window — every technique is either getting the right context in or keeping the wrong context out','There are only two AI providers worth using'], correct: 2 },

  { id: 3, concept: 'stateless', difficulty: 'easy',
    question: "In the crash course's core mental model, AI is most like what kind of person?",
    options: ['A seasoned expert who has worked with you for years','A really smart, highly motivated fresh college grad who does not know much about you yet','A librarian who memorises every book you have borrowed','A search engine that ranks answers by popularity'], correct: 1 },

  { id: 4, concept: 'stateless', difficulty: 'medium',
    question: "You told AI your name in message 1. In message 50 of the same conversation, does it still know?",
    options: ['No — AI forgets after 10 messages','Yes — it is in the context window of that same conversation','Only on paid plans','Yes — AI stores names permanently'], correct: 1 },

  { id: 5, concept: 'stateless', difficulty: 'medium',
    question: "You start a brand-new chat with the same AI you used yesterday. What does it remember?",
    options: ['Everything from yesterday','Only the last message','Nothing — each new conversation starts from zero unless a memory feature re-injects facts','Only files you uploaded'], correct: 2 },

  { id: 6, concept: 'stateless', difficulty: 'hard',
    question: "Some products bolt a 'memory' feature on top of a stateless model. What does it actually do?",
    options: ['Gives the model genuine long-term memory like a human brain','Quietly re-injects stored facts into the context window at the start of each session — the facts are still context, not human-style memory','Connects the model to a permanent database of conversations','Allows the model to access your files automatically'], correct: 1 },

  { id: 7, concept: 'stateless', difficulty: 'hard',
    question: "What happens when a long conversation gets 'compacted' by a chat tool?",
    options: ['The chat is permanently deleted','The AI rewrites all earlier messages in shorter form','Older turns are summarised into a short paragraph — the narrative survives but specific constraints and details can silently disappear','The model switches to a cheaper version'], correct: 2 },

  { id: 8, concept: 'stateless', difficulty: 'medium',
    question: "A developer notices AI stopped following a naming convention agreed on 30 turns ago. Most likely cause?",
    options: ['AI deliberately ignores old instructions after a while','The naming convention was in a separate file AI cannot read','Context compaction summarised away that specific detail from the early turns','The developer used the wrong model'], correct: 2 },

  // ── CONCEPT 2: PRETRAINED KNOWLEDGE ──────────────────────────────────────
  { id: 9, concept: 'pretrained', difficulty: 'easy',
    question: "How did AI models learn what they know?",
    options: ['By experiencing the world through sensors','By reading massive amounts of internet text — Reddit, Wikipedia, books, research papers, blogs','By being programmed with a fixed set of facts','By watching every YouTube video ever uploaded'], correct: 1 },

  { id: 10, concept: 'pretrained', difficulty: 'easy',
    question: "Frequency in training data roughly equals what?",
    options: ['Response speed','Cost of running the model','Reliability of the answer — more written about it, more trustworthy','Length of the response'], correct: 2 },

  { id: 11, concept: 'pretrained', difficulty: 'easy',
    question: "Which topic is AI MOST reliably accurate about?",
    options: ["Your company's internal salary data",'A regional folk game played in one village','Common cooking techniques written about endlessly online','Events that happened last week'], correct: 2 },

  { id: 12, concept: 'pretrained', difficulty: 'medium',
    question: "You ask AI 'which car should I buy?' and get a generic list. Why so shallow?",
    options: ['AI cannot answer car questions','You briefed it like a search box — with no context it can only give generic advice','Car questions require a paid subscription','AI is biased against product recommendations'], correct: 1 },

  { id: 13, concept: 'pretrained', difficulty: 'medium',
    question: "How trustworthy is AI on common cooking questions vs your company's private data?",
    options: ['Equally trustworthy','Company data is more reliable — AI is trained on business info','Cooking: high (heavily discussed online). Private company data: absent — the model is guessing','Neither is trustworthy — always verify everything'], correct: 2 },

  { id: 14, concept: 'pretrained', difficulty: 'hard',
    question: "A user asked AI for rules of an obscure village folk game. AI produced confident paragraphs but the grandmother said the rules were almost entirely wrong. What happened?",
    options: ['AI deliberately fabricated rules','AI had a technical malfunction','AI generalised from sparse data about similar games — confident tone does not equal accurate content','The grandmother was misremembering'], correct: 2 },

  { id: 15, concept: 'pretrained', difficulty: 'hard',
    question: "Which CANNOT be found in an AI model's pretrained knowledge?",
    options: ['The rules of cricket','Common Python syntax errors','Your company\'s Q3 revenue from last quarter (never published publicly)','The plot of a top-1000 movie'], correct: 2 },

  { id: 16, concept: 'pretrained', difficulty: 'medium',
    question: "What practical habit should you build before trusting any pretrained AI answer?",
    options: ['Run the same prompt three times and take the majority answer','Ask yourself: how would this model know that? Verify high-stakes claims against a primary source','Add "please be accurate" to every prompt','Only use AI for yes/no questions'], correct: 1 },

  // ── CONCEPT 3: THREE RETRIEVAL MODES ─────────────────────────────────────
  { id: 17, concept: 'retrieval', difficulty: 'easy',
    question: "What are the three retrieval modes modern AI can use to answer a question?",
    options: ['Fast, medium, slow','Pretrained memory, web search, and deep research','Text, image, and audio','Free, standard, and premium'], correct: 1 },

  { id: 18, concept: 'retrieval', difficulty: 'easy',
    question: "Which mode fires when you ask 'Summarize the plot of Hamlet'?",
    options: ['Web search — it needs a fresh source','Deep research — literary analysis requires many sources','Pretrained memory — this is stable, widely-discussed knowledge','None — AI cannot summarise literature'], correct: 2 },

  { id: 19, concept: 'retrieval', difficulty: 'medium',
    question: "AI recommended a school no longer open to the public when asked about running spots. Which mode failed and how?",
    options: ['Pretrained — it made up a fake location','Web search — it found a page but did not check if the source was still current','Deep research — it searched too many pages','No mode fired — AI cannot answer location questions'], correct: 1 },

  { id: 20, concept: 'retrieval', difficulty: 'medium',
    question: "You want a structured multi-section report comparing three vector databases with citations. Which mode should you steer toward?",
    options: ['Pretrained — it already knows all the databases','Web search — a quick search will be enough','Deep research — multi-dimensional, multi-source, needs a structured output','None — AI cannot compare software products'], correct: 2 },

  { id: 21, concept: 'retrieval', difficulty: 'hard',
    question: "Why does AI sometimes misrepresent what a web page said, even after 'reading' it?",
    options: ['Web pages change content between search and answer','The model often reads a condensed version from a retrieval layer, not the full page — translation layers lose nuance','AI cannot reproduce copyrighted content','The model randomly samples sentences to save processing time'], correct: 1 },

  { id: 22, concept: 'retrieval', difficulty: 'medium',
    question: "Which phrasing steers AI toward Web Search mode?",
    options: ['"Explain what a closure is in JavaScript"','"What is the capital of France"','"What\'s the latest on Next.js 15 today"','"Summarise the French Revolution"'], correct: 2 },

  { id: 23, concept: 'retrieval', difficulty: 'hard',
    question: "Which combination of three habits raises web-search quality?",
    options: ['Ask longer questions, use formal English, add "please"','Name trusted sources, ask for inline citations, ask AI to flag unverifiable claims','Use deep research mode, avoid recent events, always search in English','Repeat the question twice, ask for bullets, specify a word count'], correct: 1 },

  { id: 24, concept: 'retrieval', difficulty: 'easy',
    question: "Simple rule: AI vs Google — when do you reach for AI?",
    options: ['Use Google for everything important; AI only for creative tasks','Use Google to land on a specific known site or buy something; use AI when you need synthesis across sources','Use AI for short questions; Google for long research','They are interchangeable — use whichever you prefer'], correct: 1 },

  // ── CONCEPT 4: CONTEXT WINDOW ─────────────────────────────────────────────
  { id: 25, concept: 'context', difficulty: 'easy',
    question: "Roughly how many words can a 2026 AI model hold in its context window at once?",
    options: ['About 1,000 words','About 10,000 words','Hundreds of thousands — roughly 4–5 Harry Potter books','Unlimited — no practical cap'], correct: 2 },

  { id: 26, concept: 'context', difficulty: 'easy',
    question: "Which is NOT part of the context stack the model sees for one response?",
    options: ['The chat history of the current conversation','Files you uploaded in this session','Your private emails on Gmail (unless connected as a tool)','The system prompt the tool added'], correct: 2 },

  { id: 27, concept: 'context', difficulty: 'medium',
    question: "A teacher's second prompt (with syllabus, worksheets, and test format attached) produced a far better lesson plan than her first (no attachments). What changed?",
    options: ['She asked more politely','She used a different model','She gave the same model the context it needed — same model, different context, completely different output','The first was a server error'], correct: 2 },

  { id: 28, concept: 'context', difficulty: 'medium',
    question: "What is the rule of thumb for avoiding context rot?",
    options: ['Delete messages older than 24 hours','Switch AI models after every 20 messages','When the topic changes, start a new conversation','Always summarise the previous chat yourself at the start of each session'], correct: 2 },

  { id: 29, concept: 'context', difficulty: 'medium',
    question: "What is the signal that context belongs in a Project rather than retyped every chat?",
    options: ['Whenever you ask more than three questions','When you have pasted the same files, audience description, or constraints into two or more chats on the same topic','Only when chat history exceeds 100 messages','When a task takes more than one hour'], correct: 1 },

  { id: 30, concept: 'context', difficulty: 'hard',
    question: "Which is a symptom that a conversation has gone stale?",
    options: ['Responses get shorter and more direct','AI starts referencing unrelated earlier parts of the chat, answers get vaguer, contradicts earlier constraints','AI starts using more technical vocabulary','Response times slow down'], correct: 1 },

  { id: 31, concept: 'context', difficulty: 'hard',
    question: "Inside a Project, what does 'start a new chat' actually reset?",
    options: ['Everything — project files, instructions, and history all clear','Only the current conversation noise — standing project files and instructions remain','Only uploaded files — instructions carry over but files reset','Nothing — new chats inside a project are identical to the previous one'], correct: 1 },

  { id: 32, concept: 'context', difficulty: 'medium',
    question: "Before pressing send on a non-trivial prompt, which checklist item is most commonly skipped?",
    options: ['Checking the output language','Stating the format you want','Attaching or describing prior context and existing decisions the answer must be consistent with','Setting a word count limit'], correct: 2 },

  // ── CONCEPT 5: THINK HARD / REASONING ────────────────────────────────────
  { id: 33, concept: 'reasoning', difficulty: 'easy',
    question: "What is the portable way to turn on extended reasoning across any modern chat tool?",
    options: ['Type "step by step" at the end','Switch to the most expensive tier','Write "think hard" or "think carefully before answering" in your prompt','Enable developer mode in settings'], correct: 2 },

  { id: 34, concept: 'reasoning', difficulty: 'medium',
    question: "Per the 2025 METR study, how long was the hardest task a leading AI could reliably complete by early 2025?",
    options: ['About 30 seconds','About 7 minutes','About 1 hour','About 8 hours'], correct: 2 },

  { id: 35, concept: 'reasoning', difficulty: 'medium',
    question: "According to the METR study, how often does the longest task AI can handle double?",
    options: ['Every 3 months','Every 7 months','Every 12 months','Every 2 years'], correct: 1 },

  { id: 36, concept: 'reasoning', difficulty: 'easy',
    question: "When should you NOT use thinking mode / extended reasoning?",
    options: ['On any multi-step question','When writing code','For quick lookups, one-paragraph summaries, or casual brainstorming — it is slower and costs more usage budget','When asking about historical events'], correct: 2 },

  { id: 37, concept: 'reasoning', difficulty: 'hard',
    question: "What actually happens internally when extended thinking is on?",
    options: ['The model runs the same calculation twice and picks the more confident answer','The model searches the web automatically','The model internally explores multiple approaches, checks its own work, and only then writes the answer — it is not just typing slower','A separate specialist model reviews the answer'], correct: 2 },

  { id: 38, concept: 'reasoning', difficulty: 'medium',
    question: "What is the main practical implication of the METR task-length trajectory?",
    options: ['Always use the cheapest model to control costs','Tasks you thought were too complex for AI two years ago are mostly now handleable — re-test your assumptions every six months','Extended thinking is only useful for coding','AI is becoming less reliable over time'], correct: 1 },

  { id: 39, concept: 'reasoning', difficulty: 'easy',
    question: "Why is 'think step by step' now mostly obsolete advice?",
    options: ['Modern models ignore that phrase','Modern models have built-in reasoning modes you can invoke directly — the phrase is no longer a magic trigger','Step-by-step reasoning was never helpful','It still works but only in certain languages'], correct: 1 },

  { id: 40, concept: 'reasoning', difficulty: 'hard',
    question: "When does a single 'think hard' prompt beat a multi-agent pipeline for a complex spec-analysis task?",
    options: ['Never — multi-agent is always better','When the task is parallel and requires multiple simultaneous workstreams','When the task does not genuinely require parallel execution or stateful handoffs — agent overhead costs more than it saves','Only when the spec is shorter than 5 pages'], correct: 2 },

  // ── CONCEPT 6: SYCOPHANCY ────────────────────────────────────────────────
  { id: 41, concept: 'sycophancy', difficulty: 'easy',
    question: "What did the 2025 Washington Post analysis of 47,000 ChatGPT conversations find?",
    options: ['The model opened with "no" about 50% of the time','The model opened with an affirmation like "yes" or "correct" about 10 times more often than with "no" or "wrong"','Users preferred short answers','The model refused about 30% of questions'], correct: 1 },

  { id: 42, concept: 'sycophancy', difficulty: 'easy',
    question: "Why are AI models biased toward agreeing with you?",
    options: ['They are programmed to always be polite','They were trained on human feedback — agreeing gets more thumbs up, so the model learned to agree more','They lack the knowledge to disagree confidently','Disagreeing would expose legal liability'], correct: 1 },

  { id: 43, concept: 'sycophancy', difficulty: 'medium',
    question: "Which verb in your prompt MOST strongly signals to AI that you want it to agree?",
    options: ['Evaluate','Compare','Find evidence that...','List both sides of...'], correct: 2 },

  { id: 44, concept: 'sycophancy', difficulty: 'medium',
    question: "A founder asked AI to critique her mobile tie-dyeing idea. AI praised it. She rephrased with an objective rubric. What did AI score it?",
    options: ['95 out of 100 — the rubric confirmed it was strong','8 out of 100 — the rubric exposed concrete reasons to rethink it','50 out of 100 — a balanced mixed assessment','AI refused to score a business idea numerically'], correct: 1 },

  { id: 45, concept: 'sycophancy', difficulty: 'hard',
    question: "Why does forcing a 1-10 score per criterion produce more honest feedback than asking 'is this good?'",
    options: ['Numbers are easier for AI to generate than prose','Vague feedback is cheap but a specific number requires committing to a judgment — the commitment forces careful evaluation, and scores come in lower than sycophantic prose suggests','Numbers are harder to challenge so students accept them','AI performs better with clear numerical output format'], correct: 1 },

  { id: 46, concept: 'sycophancy', difficulty: 'hard',
    question: "What does the instruction 'there is always a next level' do when added to a rubric prompt?",
    options: ['It tells AI to produce a longer response','It prevents AI from declaring you finished and forces it to find the improvement path even for high-scoring criteria','It switches the model into deep research mode','It triggers an automatic review by a second model'], correct: 1 },

  { id: 47, concept: 'sycophancy', difficulty: 'medium',
    question: "Rewrite 'find evidence this strategy will work' as a neutral prompt.",
    options: ['"Please confirm this strategy works"','"Evaluate this strategy. List the strongest arguments for and against."','"Tell me why this strategy is good"','"Search the web for positive reviews of this strategy"'], correct: 1 },

  { id: 48, concept: 'sycophancy', difficulty: 'easy',
    question: "What is the general rule for laying out options to get an honest AI recommendation?",
    options: ['Present the option you prefer first so AI has context','Lay out two options without hinting at preference, then ask for pros and cons of each','Use emotional language to explain why one option matters','Always ask for the recommendation before explaining the options'], correct: 1 },

  // ── CONCEPT 7: BRAINSTORM-ITERATE LOOP ───────────────────────────────────
  { id: 49, concept: 'iterate', difficulty: 'easy',
    question: "In the brainstorm-iterate loop, how many options should you ask for?",
    options: ['1 — ask for the best one immediately','2 — just enough to compare','3 to 5 — enough to force the model past its first instinct','10 or more — maximise choices'], correct: 2 },

  { id: 50, concept: 'iterate', difficulty: 'easy',
    question: "Why should you never accept AI's first draft?",
    options: ['AI always makes grammatical errors in first drafts','The first draft is generated from average internet ideas — it looks polished but is hollow until you iterate','First drafts exceed the token limit','AI charges more for first drafts'], correct: 1 },

  { id: 51, concept: 'iterate', difficulty: 'medium',
    question: "In the loop, what do you do BEFORE asking AI to expand the chosen option into a full draft?",
    options: ['Switch to a different AI model','Ask AI to grade the chosen option','Give explicit feedback on what you liked and disliked, ask for new options, iterate 2-3 times until one feels right — THEN expand','Add a word count requirement'], correct: 2 },

  { id: 52, concept: 'iterate', difficulty: 'medium',
    question: "Why does outlining before drafting capture more leverage than editing the final draft?",
    options: ['Outlines are shorter so AI processes them faster','Editing one word in an outline can change the direction of the whole piece; editing one word in a final draft changes only one word','AI is better at outlines than prose','Final drafts cannot be edited once generated'], correct: 1 },

  { id: 53, concept: 'iterate', difficulty: 'hard',
    question: "What does 'scope the territory before drafting' mean?",
    options: ['Decide the word count limit first','Ask AI to map what is known — strongest arguments, counter-arguments, existing approaches — before asking it to produce anything','Draw a diagram of the topic before writing','Search Google first, then bring results to AI'], correct: 1 },

  { id: 54, concept: 'iterate', difficulty: 'medium',
    question: "What is the correct stopping signal when iterating on a draft?",
    options: ['Stop when AI says the draft looks good','Stop after exactly five rounds','Stop when the score plateaus around 9.5 or higher — the AI does not get to declare you finished','Stop when the draft reaches the target word count'], correct: 2 },

  { id: 55, concept: 'iterate', difficulty: 'hard',
    question: "A developer applies the iterate loop to spec writing. What is the correct sequence?",
    options: ['Write spec → ship to agent immediately','Write spec → once review → ship','Write spec → ask AI to find ambiguities/contradictions → devil\'s advocate mode → grade completeness 1-10 → plateau → then give to agent','Write spec → ask AI to rewrite it completely → ship'], correct: 2 },

  { id: 56, concept: 'iterate', difficulty: 'easy',
    question: "The loop is called domain-agnostic. What does that mean?",
    options: ['It only works for software tasks','It works the same way for trip planning, sales pitches, product naming, writing a toast, choosing a contractor — any task','It requires a specific AI model','It loops on its own without user feedback'], correct: 1 },

  // ── CONCEPT 8: MULTIMODAL ─────────────────────────────────────────────────
  { id: 57, concept: 'multimodal', difficulty: 'easy',
    question: "AI sees images coarsely. What is it STRONG at?",
    options: ['Reading small print at the edge','Counting 47 items in a cluttered photo','Overall scene, whiteboard contents, handwritten text, diagrams','Identifying the exact font used in a logo'], correct: 2 },

  { id: 58, concept: 'multimodal', difficulty: 'easy',
    question: "AI sees images coarsely. What is it WEAK at?",
    options: ['Describing the general mood of a photo','Reading a whiteboard diagram','Fine details, counting many small things in a cluttered scene, reading small edge text','Recognising that a photo contains a person'], correct: 2 },

  { id: 59, concept: 'multimodal', difficulty: 'medium',
    question: "What is the power-user recipe for generating a high-quality image?",
    options: ['Type the prompt in ALL CAPS','Use a text AI to write the image prompt first — it is much better at rich image prompts — then paste the output into the image tool','Always include a specific pixel resolution','Use only nouns and adjectives, never verbs'], correct: 1 },

  { id: 60, concept: 'multimodal', difficulty: 'medium',
    question: "A doctor recorded a 45-minute consultation and uploaded the audio. What prompt gets maximum value?",
    options: ['"Summarise this in one sentence"','"Produce a structured clinical note in SOAP format. Flag anything you could not understand confidently. Highlight the three most important things the patient said about their symptom history."','"Transcribe this word for word"','"Tell me if the patient sounds healthy"'], correct: 1 },

  { id: 61, concept: 'multimodal', difficulty: 'hard',
    question: "In the SVG-to-designer-quality-diagram workflow, why use Claude for step 1 and ChatGPT for step 3?",
    options: ['Claude is free; ChatGPT is paid','Claude generates SVG faster; ChatGPT renders PNG faster','Step 1 (deciding structure) is a reasoning task where Claude leads; step 3 (rendering text-heavy images with polish) is where ChatGPT\'s image generation leads','They are interchangeable — just personal preference'], correct: 2 },

  { id: 62, concept: 'multimodal', difficulty: 'easy',
    question: "Why is long-form voice dictation often better than typing for AI prompts?",
    options: ['AI processes audio faster than text','Speaking captures nuance that typed prompts skip — people naturally give much more context when speaking','Voice input costs less on paid plans','AI makes fewer errors with spoken input'], correct: 1 },

  { id: 63, concept: 'multimodal', difficulty: 'hard',
    question: "How does a diffusion model generate images — fundamentally different from text generation?",
    options: ['It searches a database of existing images and recombines them','It generates images pixel-by-pixel left to right, like text token-by-token','It is trained to remove noise from random pixel grids step by step — the whole image generates at once, not pixel-by-pixel','It renders a 3D scene and flattens it to 2D'], correct: 2 },

  { id: 64, concept: 'multimodal', difficulty: 'medium',
    question: "What is the highest-leverage prompt to run on a meeting transcript?",
    options: ['"Give me a word-for-word transcript"','"Summarise the decisions made, the open questions, and the action items by owner"','"Tell me who spoke the most"','"Identify grammatical errors in the transcript"'], correct: 1 },

  // ── CONCEPT 9: ARTIFACTS / BUILDING APPS ─────────────────────────────────
  { id: 65, concept: 'artifacts', difficulty: 'easy',
    question: "What are the three slots that define a one-prompt app request?",
    options: ['Title, description, and target audience','Frontend, backend, and database','Goal (what it does), Input (what the user provides), Output (what the user sees)','Language, framework, and hosting platform'], correct: 2 },

  { id: 66, concept: 'artifacts', difficulty: 'easy',
    question: "In Claude, what is an 'Artifact'?",
    options: ['A bug in AI output','A persistent object the conversation produced — code, an app, a document — that renders in a side panel and can be iterated on, shared, or downloaded','A type of image AI generates','A pre-built template you can import'], correct: 1 },

  { id: 67, concept: 'artifacts', difficulty: 'medium',
    question: "Which is still genuinely hard for a one-prompt AI app build in 2026?",
    options: ['A Pomodoro timer with a click sound','A bill splitter with names and tax','A multiplayer online game with accounts, matchmaking, and real-time sync','A fireworks simulator that fires when you click'], correct: 2 },

  { id: 68, concept: 'artifacts', difficulty: 'medium',
    question: "When you say 'make the button bigger' after Claude built an app, what happens?",
    options: ['The whole app regenerates from scratch','Claude opens the source in a new window for you to edit manually','The artifact is edited in place — only the specific change is made, much faster than full regeneration','A duplicate artifact is created with the change applied'], correct: 2 },

  { id: 69, concept: 'artifacts', difficulty: 'hard',
    question: "What is the difference between Claude Artifacts and a dedicated AI app-builder like v0 or Bolt?",
    options: ['There is no difference — identical results','Claude Artifacts are for simple one-prompt interactive builds in chat; v0/Bolt produce a full Next.js or React project with file structure, routing, and deployable code — the natural next step when the app outgrows one prompt','v0/Bolt are only for backend; Claude Artifacts are for frontend','Claude Artifacts require paid; v0/Bolt are always free'], correct: 1 },

  { id: 70, concept: 'artifacts', difficulty: 'easy',
    question: "What does sharing a Claude Artifact via public link require from the recipient?",
    options: ['A paid Claude subscription','Installing the Claude desktop app','Nothing — the recipient needs no account to use the shared artifact','A GitHub account to view the source'], correct: 2 },

  { id: 71, concept: 'artifacts', difficulty: 'medium',
    question: "A developer wants to share a live interactive data dashboard with a client who has no Claude account. Fastest path?",
    options: ['Export code, deploy to Vercel, share URL','Ask the client to create a Claude account','Build it as a Claude Artifact, publish to a public link, share the link — client can use it instantly with no account','Embed it as a PDF'], correct: 2 },

  { id: 72, concept: 'artifacts', difficulty: 'hard',
    question: "How do Claude Code and OpenCode differ from Claude Artifacts?",
    options: ['They are the same tool with different names','Artifacts build small in-chat apps; Claude Code/OpenCode live in the terminal, read across a whole codebase, edit many files at once, run tests, and report back — aimed at developers with existing codebases','Claude Code is for Python; OpenCode for JavaScript','Artifacts are more powerful — Claude Code is the older simpler version'], correct: 1 },

  // ── CONCEPT 10: DATA ANALYSIS ────────────────────────────────────────────
  { id: 73, concept: 'data', difficulty: 'easy',
    question: "When you ask AI to analyse a spreadsheet, what does it actually do?",
    options: ['Sends the spreadsheet to a third-party statistics service','Reads visible cells and guesses trends from formatting','Writes a small program, runs it on the file, and uses the result in its answer','Converts the spreadsheet to a chart automatically'], correct: 2 },

  { id: 74, concept: 'data', difficulty: 'medium',
    question: "Why must you explicitly tell AI to 'write and run code' when analysing data?",
    options: ['AI needs the explicit instruction for billing purposes','AI does not always run code — it sometimes estimates and writes a confident paragraph with no real calculation, which looks identical to a real analysis','Running code is slower and uses more tokens','AI can only run code on CSV files'], correct: 1 },

  { id: 75, concept: 'data', difficulty: 'medium',
    question: "How do you verify that AI actually ran code rather than estimating?",
    options: ['Ask AI "are you sure?" and trust the answer','Check that a visible code block appears in the response — no code block usually means no code was run','Re-run the analysis three times and compare','Use the paid plan where code execution is guaranteed'], correct: 1 },

  { id: 76, concept: 'data', difficulty: 'hard',
    question: "The 'ground truth verification' pattern: before any analysis, ask AI to state what?",
    options: ['Ask AI to state the chart type it will use','Ask AI to state the exact row count, column names, and date range — if correct it read the file; if wrong or suspiciously round, it is estimating','Ask AI to state the programming language it will use','Ask AI to state the file size in kilobytes'], correct: 1 },

  { id: 77, concept: 'data', difficulty: 'hard',
    question: "A developer uploads a log file and asks 'how many 500 errors in the last 24 hours?' AI replies '47' with no code block. The actual number is 312. What happened?",
    options: ['AI misread the log format','AI estimated rather than running code — confident paragraph, no actual analysis — a silent failure mode that looks identical to a real answer','The log file was corrupted during upload','AI counted correctly but the log had duplicates'], correct: 1 },

  { id: 78, concept: 'data', difficulty: 'medium',
    question: "Even when AI runs code correctly on data, what should you always double-check?",
    options: ['The programming language used','Final totals, graph labels, and whether AI correctly interpreted column names — code is precise but AI may sum the wrong column or caption a graph incorrectly','Whether the code compiled without warnings','The file size before and after analysis'], correct: 1 },

  { id: 79, concept: 'data', difficulty: 'easy',
    question: "You upload a CSV but don't know what analysis to run. What is a useful first prompt?",
    options: ['"Analyse this file completely"','"What is the average of all columns?"','"Describe this dataset. What columns are here, what do they represent, and what 3 charts would best show what is going on?"','"Convert this to Excel format"'], correct: 2 },

  { id: 80, concept: 'data', difficulty: 'medium',
    question: "Why is AI data analysis more reliable than asking the model to do math in its head?",
    options: ['AI is naturally better at arithmetic than humans','The model is doing math the way you would — by running a calculator. It is the calculator that is precise, not the model guessing','Data analysis uses a separate, more accurate model','Running code costs more, so it must be better'], correct: 1 },

  // ── CONCEPT 11: FILE APPS & PERMISSIONS ───────────────────────────────────
  { id: 81, concept: 'permissions', difficulty: 'easy',
    question: "What can AI desktop apps (like Cowork, OpenWork) do that chat cannot?",
    options: ['Generate longer responses','Access the internet faster','Find your files, read them, and act on them with permission — reorganising folders, reading across a project tree, executing file operations','Work without an internet connection'], correct: 2 },

  { id: 82, concept: 'permissions', difficulty: 'easy',
    question: "What is the safe workflow when using an AI desktop app to reorganise files?",
    options: ['Give the app full disk access and let it optimise everything automatically','Tell it the task → ask for a plan (not action yet) → review and edit the plan → only then approve execution','Run it in a sandbox first, then again on real files','Always have a human supervisor present'], correct: 1 },

  { id: 83, concept: 'permissions', difficulty: 'medium',
    question: "What critical fact must you know before giving any AI app file delete permissions?",
    options: ['AI apps can only delete files smaller than 1MB','Deleted files often do NOT go to the recycle bin — they are permanently gone. Edits overwrite without undo unless you have version control.','AI apps always create a backup copy before deleting','Deletion only works on documents, not images or code files'], correct: 1 },

  { id: 84, concept: 'permissions', difficulty: 'medium',
    question: "In the permission ladder, what should you allow in the first sessions?",
    options: ['Full disk access — get it working completely on day one','Read and write access to the entire documents folder','Read-only access to a single small folder — no writes, no renames, no deletes','Execute permissions only — no reading of file content'], correct: 2 },

  { id: 85, concept: 'permissions', difficulty: 'hard',
    question: "What is the core principle behind expanding AI app permissions gradually?",
    options: ['Paying more unlocks more permissions automatically','Permissions expand with track record, not with how much you trust the company that built the tool — trust is earned by behavior in your specific workflow','Full permissions are safe after reading the terms of service','Permissions should never expand — always keep the narrowest scope'], correct: 1 },

  { id: 86, concept: 'permissions', difficulty: 'medium',
    question: "How did a consultant safely organise 240 PDFs using an AI desktop app?",
    options: ['She gave it full access and let it work overnight','She ran it on 10 files first to test','She told it to look through the folder and propose an organisation scheme as a tree — without moving any files — then reviewed, edited, and approved before execution','She exported all PDFs to cloud storage first as a backup'], correct: 2 },

  { id: 87, concept: 'permissions', difficulty: 'hard',
    question: "In agentic workflows, what is the most common dangerous mistake with permissions?",
    options: ['Using a model that is too smart for the task','Giving the agent broad permissions (full repo, full folder) on day one — it makes unintended changes, and by the time you notice, undo is not available','Running the agent too slowly','Not giving the agent enough context'], correct: 1 },

  { id: 88, concept: 'permissions', difficulty: 'easy',
    question: "A chat window is described as working memory, not storage. What practical rule does this lead to?",
    options: ['Always screenshot your chat before closing','Anything that needs to survive past one long session belongs in a project, an attached file, or a note you can re-paste — not in the chat history itself','Limit all conversations to under 10 messages','Export your chat to PDF daily'], correct: 1 },

  // ── CONCEPT 12: COST, SPEED, MODEL SELECTION ─────────────────────────────
  { id: 89, concept: 'models', difficulty: 'easy',
    question: "Why does iteration cost shape what you do with different modalities?",
    options: ['You can only iterate on premium plans','Text is nearly free and instant so you iterate freely; video is slow and expensive so you invest heavily in the prompt before generating','All modalities cost the same','You should never iterate — get the prompt right first time'], correct: 1 },

  { id: 90, concept: 'models', difficulty: 'easy',
    question: "Approximate cost of a text response from a major AI in 2026?",
    options: ['Several dollars per response','About 10 cents per response','Fractions of a cent — almost free for everyday use','A fixed monthly fee regardless of usage'], correct: 2 },

  { id: 91, concept: 'models', difficulty: 'medium',
    question: "Why invest more in the prompt before generating a video vs generating text?",
    options: ['Video prompts require more technical vocabulary','Video generation takes minutes and costs cents to dollars per clip — each iteration is slow and expensive, so getting the prompt right upfront saves significant time and money','AI video tools are less capable and need more specific instructions','Video outputs cannot be edited after generation'], correct: 1 },

  { id: 92, concept: 'models', difficulty: 'medium',
    question: "What is wrong with using only one AI tool for all your tasks?",
    options: ['Nothing — using one tool builds deep expertise','AI is jagged — different models lead on different tasks, and leaders rotate every few months. A worker using only one AI is wrong about which tool is best for most of their tasks.','It creates vendor lock-in that is expensive to escape','Single-tool users get lower quality responses due to over-reliance detection'], correct: 1 },

  { id: 93, concept: 'models', difficulty: 'medium',
    question: "What is the Arena leaderboard (arena.ai) and why check it monthly?",
    options: ['A gaming platform where AI models compete at chess','Users vote in blind head-to-head model comparisons — rankings reflect real preferences, not vendor marketing. Leaders rotate quickly so monthly checks keep your tooling current.','An official government ranking of AI safety scores','A paid service that benchmarks AI on your specific use case'], correct: 1 },

  { id: 94, concept: 'models', difficulty: 'easy',
    question: "What is the two-tab power-user habit?",
    options: ['Always have two tabs of the same AI for comparison','Keep a primary tool and a backup — run the same prompt in both when the primary gives something that does not feel right, use the better answer','Switch between paid and free tiers depending on task complexity','Use one tab for questions and one tab for creative tasks'], correct: 1 },

  { id: 95, concept: 'models', difficulty: 'hard',
    question: "In 2026, which model family tends to lead on reasoning-heavy tasks and long-document analysis?",
    options: ['DeepSeek — open-source models are always most capable','Meta AI — largest user base means the most training data','Claude — extended thinking and structured analysis are current strengths, leading most Arena categories','ChatGPT — the first mover always maintains the lead'], correct: 2 },

  { id: 96, concept: 'models', difficulty: 'hard',
    question: "DeepSeek V4's main advantage for a developer building production pipelines is what?",
    options: ['Best image generation of any model','Open-source weights you can self-host, 1M-token context as default, and costs significantly less via API — right choice when price-sensitive or needing to self-host','Strongest coding benchmark scores','Only model that supports real-time voice conversation'], correct: 1 },

  // ── CONCEPT 13: CROSS-MODEL CHECKING ─────────────────────────────────────
  { id: 97, concept: 'crossmodel', difficulty: 'easy',
    question: "What is Level 1 of the cross-model checking system?",
    options: ['Send the same prompt to 10 models simultaneously','Ask a single model to score its output 1-10 against named criteria — one pass, stop there. For a quick sanity check.','Ask a human expert to review the output','Run the same model twice and compare outputs'], correct: 1 },

  { id: 98, concept: 'crossmodel', difficulty: 'easy',
    question: "What is Level 2 of the cross-model checking system?",
    options: ['Paste the output into two models and compare scores','Ask the same model to keep improving against its own rubric until it reaches 9.5 across all criteria — score, fix, repeat.','Switch to a more expensive model for final review','Add a system prompt telling the model to be more critical'], correct: 1 },

  { id: 99, concept: 'crossmodel', difficulty: 'medium',
    question: "What is Level 3 and when should you use it?",
    options: ['Use three models from the same company for maximum consistency. Use it always.','Take the draft to a second model from a DIFFERENT family with the same rubric. Use it for high-stakes work where being wrong is expensive.','Run the draft through a grammar checker. Use it for published content.','Ask the model to critique itself ten times. Use it for code review.'], correct: 1 },

  { id: 100, concept: 'crossmodel', difficulty: 'hard',
    question: "Why is having two Claude models check each other NOT real cross-model checking?",
    options: ['Claude models cannot critique other Claude outputs','Using the same company\'s models violates terms of service','Different model families have different training data and reward signals — two Claude models share the same priors, so one catches little that the other missed','Cross-model checking requires models from at least three different countries'], correct: 2 },

  { id: 101, concept: 'crossmodel', difficulty: 'hard',
    question: "Why does a model grading its own output tend toward sycophancy — and how does a rubric fix it?",
    options: ['Models cannot assess their own work without a rubric','Without a rubric "is this good?" returns "great work!" — a closed loop. With named criteria scored 1-10, the model must point at what is missing, which is a forcing function rather than a pat on the back.','Rubrics confuse the model by adding too many constraints','Self-grading only works with models from the same company'], correct: 1 },

  { id: 102, concept: 'crossmodel', difficulty: 'medium',
    question: "A consultant's draft scored 9/10 from her primary model. A different-family model scored it 7.5 and listed eleven issues. Key lesson?",
    options: ['The primary model was wrong — always trust the lower score','The second model is always more critical and should be ignored','The first model shared her blind spots — a cross-family check surfaces issues no single model\'s self-grading can, because different models have genuinely different priors','She should average the two scores and use 8.25'], correct: 2 },

  { id: 103, concept: 'crossmodel', difficulty: 'hard',
    question: "Three models all score your draft 9. Why is that still not proof the draft is excellent?",
    options: ['Three models are not enough — you need at least five','Models share more training data than you would guess and often share the same misconceptions on contested topics — scores are a progress signal, not a truth signal','The scoring system is calibrated differently across models so 9s are not comparable','This situation cannot occur — models always disagree when scoring independently'], correct: 1 },

  { id: 104, concept: 'crossmodel', difficulty: 'medium',
    question: "What privacy risk must you consider before pasting a draft into multiple AI tools for cross-model checking?",
    options: ['The draft might be shown to other users','Each tool has different data policies — Meta AI consumer product by default may train on your inputs. Sensitive material (NDA content, strategy memos, private code) should only pass through tools whose data policies you have verified.','Cross-model checking is illegal in some jurisdictions','Pasting the same content twice triggers spam detection'], correct: 1 },
]

export function getRandomQuestions(count = 10): Question[] {
  const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function shuffleOptions(question: Question): { question: Question; correctIndex: number } {
  const indices = [0, 1, 2, 3].sort(() => Math.random() - 0.5) as [number, number, number, number]
  const newOptions = indices.map(i => question.options[i]) as [string, string, string, string]
  const newCorrect = indices.indexOf(question.correct) as 0 | 1 | 2 | 3
  return { question: { ...question, options: newOptions, correct: newCorrect }, correctIndex: newCorrect }
}