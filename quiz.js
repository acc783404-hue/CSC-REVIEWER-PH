// ============================================================
// CSC PROFESSIONAL LEVEL REVIEWER - quiz.js
// Contains all 170 questions organized by section,
// plus full quiz logic: display, scoring, transitions, ads
// ============================================================

// ============================================================
// SECTION 1: VERBAL ABILITY – ENGLISH (Q1–Q40)
// ============================================================
const englishQuestions = [
  {
    num: 1,
    text: "Choose the word MOST SIMILAR in meaning to the underlined word.\n\nThe senator delivered an <u>eloquent</u> speech that moved the audience to tears.",
    choices: ["A. ambiguous", "B. articulate", "C. monotonous", "D. brief"],
    answer: "B",
    explanation: "Eloquent means fluent and persuasive in speaking; 'articulate' is its closest synonym among the choices."
  },
  {
    num: 2,
    text: "Choose the word MOST OPPOSITE in meaning to the underlined word.\n\nThe official's <u>candid</u> remarks surprised many of his colleagues.",
    choices: ["A. frank", "B. deceptive", "C. blunt", "D. straightforward"],
    answer: "B",
    explanation: "Candid means honest and open; its antonym is 'deceptive,' meaning misleading or dishonest."
  },
  {
    num: 3,
    text: "Select the word that best completes the sentence.\n\nThe board members remained ________ despite the heated debate, refusing to alter their original position.",
    choices: ["A. flexible", "B. impartial", "C. adamant", "D. indifferent"],
    answer: "C",
    explanation: "Adamant means refusing to be persuaded or to change one's mind, which fits the context of stubborn refusal."
  },
  {
    num: 4,
    text: "Identify the sentence that contains a GRAMMATICAL ERROR.",
    choices: [
      "A. Neither the manager nor the employees were informed about the policy change.",
      "B. The committee has reached a unanimous decision after three days of deliberation.",
      "C. Each of the applicants are required to submit two valid identification cards.",
      "D. The report, along with the supporting documents, was submitted on time."
    ],
    answer: "C",
    explanation: "'Each' is a singular subject and requires the singular verb 'is required,' not 'are required.'"
  },
  {
    num: 5,
    text: "Choose the sentence expressed MOST CLEARLY and CORRECTLY.",
    choices: [
      "A. Having finished the report, the deadline was met by the team.",
      "B. Having finished the report, the team met the deadline.",
      "C. The deadline was met by the team, having finished the report.",
      "D. The team, the deadline was met, having finished the report."
    ],
    answer: "B",
    explanation: "Choice B correctly attaches the participial phrase 'having finished the report' to its logical subject, 'the team.'"
  },
  {
    num: 6,
    text: "Select the CORRECT verb form to complete the sentence.\n\nThe Department of Finance, together with other agencies, ________ a joint circular on fiscal transparency.",
    choices: ["A. have released", "B. has released", "C. are releasing", "D. were releasing"],
    answer: "B",
    explanation: "When a singular subject is linked to another noun by 'together with,' the verb remains singular; 'has released' is correct."
  },
  {
    num: 7,
    text: "Choose the answer that best completes the sentence.\n\nThe new policy was implemented to ________ the long-standing inefficiencies in the procurement process.",
    choices: ["A. aggravate", "B. perpetuate", "C. rectify", "D. exacerbate"],
    answer: "C",
    explanation: "Rectify means to correct or put something right; the other choices mean to worsen the problem."
  },
  {
    num: 8,
    text: "Which of the following correctly uses a SEMICOLON?",
    choices: [
      "A. The employee was diligent; yet she was overlooked for promotion.",
      "B. She submitted the report; that was due last Monday.",
      "C. The office has three sections; Human Resources, Finance, and Records.",
      "D. He passed the exam; but he was not hired."
    ],
    answer: "A",
    explanation: "A semicolon is correctly used before a conjunctive adverb like 'yet' when joining two independent clauses."
  },
  {
    num: 9,
    text: "Read the passage below and answer the question.\n\n'Public servants must remember that their position is a public trust. The power they exercise belongs to the people they serve. Every decision must therefore be guided by the public interest, not by personal gain.'\n\nWhat is the MAIN IDEA of the passage?",
    choices: [
      "A. Public servants should be well-compensated for their service.",
      "B. Public servants hold power in trust for the people and must act in the public interest.",
      "C. Personal gain is inevitable in public service.",
      "D. Government decisions are rarely guided by public interest."
    ],
    answer: "B",
    explanation: "The passage stresses that power belongs to the people and must serve the public interest, making B the main idea."
  },
  {
    num: 10,
    text: "Identify the MISSPELLED word.",
    choices: ["A. conscientious", "B. bureaucracy", "C. accomodation", "D. perseverance"],
    answer: "C",
    explanation: "The correct spelling is 'accommodation' (double 'c' and double 'm'); 'accomodation' is missing one 'm.'"
  },
  {
    num: 11,
    text: "Choose the CORRECT pronoun to complete the sentence.\n\nBetween the supervisor and ________, there was clear agreement on the matter.",
    choices: ["A. I", "B. me", "C. myself", "D. we"],
    answer: "B",
    explanation: "'Between' is a preposition that requires an object pronoun; 'me' is the correct objective-case form."
  },
  {
    num: 12,
    text: "Arrange the following sentences to form a COHERENT paragraph.\n\n1. This led to widespread public outrage.\n2. The agency later issued a formal apology.\n3. A government official was found to have misused public funds.\n4. An investigation was ordered by the Office of the Ombudsman.",
    choices: ["A. 3-1-4-2", "B. 1-3-2-4", "C. 3-4-1-2", "D. 2-3-4-1"],
    answer: "A",
    explanation: "The logical sequence is: the act of misuse (3), the public reaction (1), the formal inquiry (4), and the apology (2)."
  },
  {
    num: 13,
    text: "Choose the word that means 'to officially put a law or policy into effect.'",
    choices: ["A. repeal", "B. promulgate", "C. rescind", "D. deliberate"],
    answer: "B",
    explanation: "Promulgate means to make a decree or law known publicly and put it into effect; the other choices mean the opposite or something different."
  },
  {
    num: 14,
    text: "Which sentence uses the CORRECT form of the adjective?",
    choices: [
      "A. Of the two candidates, she is the most qualified.",
      "B. Of the two candidates, she is the more qualified.",
      "C. Of the two candidates, she is the qualifieder.",
      "D. Of the two candidates, she is more qualifieder."
    ],
    answer: "B",
    explanation: "When comparing exactly two items, use the comparative form ('more qualified'), not the superlative ('most qualified')."
  },
  {
    num: 15,
    text: "Read the passage and answer the question.\n\n'A leader who listens earns more loyalty than one who only commands. Genuine communication requires empathy and patience—qualities that transform authority into partnership.'\n\nWhich statement is best INFERRED from the passage?",
    choices: [
      "A. Commands are always more effective than listening.",
      "B. Empathetic leaders build stronger relationships than authoritarian ones.",
      "C. Patience is the only trait needed for good leadership.",
      "D. Authority and partnership are mutually exclusive."
    ],
    answer: "B",
    explanation: "The passage implies that leaders who show empathy and listen cultivate loyalty and partnership, supporting inference B."
  },
  {
    num: 16,
    text: "Select the sentence with CORRECT subject-verb agreement.",
    choices: [
      "A. The news about the new policies were confusing.",
      "B. A number of employees has filed leave applications.",
      "C. The number of complaints has decreased this quarter.",
      "D. Either of the two proposals are acceptable to the board."
    ],
    answer: "C",
    explanation: "'The number of' takes a singular verb; 'the news' and 'a number of' take singular and plural verbs respectively, making C the only fully correct choice."
  },
  {
    num: 17,
    text: "Choose the word that is INCORRECTLY used in the sentence.\n\nThe committee will (A) convene on Friday to (B) discuss the (C) eminent (D) retirement of the director.",
    choices: ["A. convene", "B. discuss", "C. eminent", "D. retirement"],
    answer: "C",
    explanation: "'Eminent' means distinguished or famous; the correct word here is 'imminent,' meaning about to happen soon."
  },
  {
    num: 18,
    text: "Choose the BEST transition word to connect these two sentences.\n\n'The government invested heavily in rural infrastructure. ________, poverty rates in remote areas remain high.'",
    choices: ["A. Therefore", "B. Moreover", "C. Nevertheless", "D. Furthermore"],
    answer: "C",
    explanation: "'Nevertheless' shows contrast between the investment made and the persisting poverty, making it the most logical connector."
  },
  {
    num: 19,
    text: "SITUATIONAL: You are a government employee asked by your supervisor to sign a document attesting to facts you know to be false. What is the MOST appropriate action?",
    choices: [
      "A. Sign the document to avoid conflict with your supervisor.",
      "B. Politely refuse and explain that signing would be dishonest and potentially illegal.",
      "C. Sign the document but inform a co-worker confidentially.",
      "D. Delay signing indefinitely without giving a reason."
    ],
    answer: "B",
    explanation: "Under R.A. 6713, public employees are obligated to act with honesty and integrity; refusing to attest to false information is both ethical and legal."
  },
  {
    num: 20,
    text: "Identify the sentence that uses the PASSIVE VOICE correctly.",
    choices: [
      "A. The auditors were examined the financial records.",
      "B. The financial records were examined by the auditors.",
      "C. The financial records examined by the auditors were.",
      "D. By the auditors, the financial records were examined."
    ],
    answer: "B",
    explanation: "Choice B follows the correct passive voice structure: subject + 'to be' verb + past participle + 'by' + agent."
  },
  {
    num: 21,
    text: "Choose the word most similar in meaning to METICULOUS.",
    choices: ["A. careless", "B. thorough", "C. hasty", "D. vague"],
    answer: "B",
    explanation: "Meticulous means showing great attention to detail; 'thorough' is the closest synonym."
  },
  {
    num: 22,
    text: "Read the following and identify the LOGICAL FLAW.\n\n'All corrupt officials are politicians. Mr. Reyes is a politician. Therefore, Mr. Reyes is corrupt.'",
    choices: [
      "A. The conclusion is valid because the premises support it.",
      "B. The argument commits the fallacy of affirming the consequent.",
      "C. The argument is valid because it uses deductive reasoning.",
      "D. There is no flaw; the argument is sound."
    ],
    answer: "B",
    explanation: "The argument incorrectly assumes that being a politician implies being corrupt, which is an invalid logical inference—affirming the consequent."
  },
  {
    num: 23,
    text: "Select the CORRECTLY punctuated sentence.",
    choices: [
      "A. The director said, \"All leaves are cancelled until further notice\".",
      "B. The director said, \"All leaves are cancelled until further notice.\"",
      "C. The director said \"All leaves are cancelled until further notice.\"",
      "D. The director said; \"All leaves are cancelled until further notice.\""
    ],
    answer: "B",
    explanation: "In standard punctuation, the period goes inside the closing quotation mark; the comma before the quote and the quotation marks are also correctly placed in B."
  },
  {
    num: 24,
    text: "Choose the CORRECT form of the verb in the sentence.\n\nIf the president ________ the bill, it would become law immediately.",
    choices: ["A. signs", "B. signed", "C. will sign", "D. has signed"],
    answer: "B",
    explanation: "In a second conditional (hypothetical) sentence, the past tense 'signed' is used in the if-clause with 'would' in the result clause."
  },
  {
    num: 25,
    text: "Which of the following words is a SYNONYM for 'ABROGATE'?",
    choices: ["A. enforce", "B. enact", "C. annul", "D. implement"],
    answer: "C",
    explanation: "Abrogate means to formally repeal or annul a law or agreement; 'annul' is its closest synonym."
  },
  {
    num: 26,
    text: "Identify which sentence has a DANGLING MODIFIER.",
    choices: [
      "A. Walking to the office, the employee noticed a notice on the board.",
      "B. Walking to the office, a notice was seen on the board.",
      "C. The employee, walking to the office, noticed a notice on the board.",
      "D. The notice was seen by the employee walking to the office."
    ],
    answer: "B",
    explanation: "In choice B, the participial phrase 'walking to the office' has no clear subject and illogically modifies 'a notice,' making it a dangling modifier."
  },
  {
    num: 27,
    text: "Choose the sentence that is MOST CONCISE without losing meaning.",
    choices: [
      "A. Due to the fact that the funds were limited, the project could not be implemented.",
      "B. Because the funds were limited, the project could not be implemented.",
      "C. On account of the limitation of the funds available, the project's implementation was not possible.",
      "D. The funds being limited in nature, the project was rendered unable to be implemented."
    ],
    answer: "B",
    explanation: "'Because' is a concise substitute for 'due to the fact that'; choice B conveys the same meaning in the fewest words."
  },
  {
    num: 28,
    text: "SITUATIONAL: A colleague asks you to cover for her by telling the supervisor she was in a meeting, when in reality she left the office for personal reasons. What should you do?",
    choices: [
      "A. Cover for her since she is a close friend.",
      "B. Decline politely, explaining that you cannot be part of a deception.",
      "C. Tell the supervisor immediately without giving your colleague a chance to explain.",
      "D. Make up a different excuse that is harder to disprove."
    ],
    answer: "B",
    explanation: "Under R.A. 6713's norm of professionalism and honesty, participating in deception violates ethical standards; a polite refusal is appropriate."
  },
  {
    num: 29,
    text: "Read the passage and answer the question.\n\n'Freedom of expression is a cornerstone of democracy. However, this right is not absolute. It must be exercised responsibly, with due regard for the rights and dignity of others.'\n\nThe passage suggests that freedom of expression:",
    choices: [
      "A. can be used without any limitations",
      "B. is less important than other rights",
      "C. comes with the responsibility not to harm others",
      "D. should only be exercised by elected officials"
    ],
    answer: "C",
    explanation: "The passage explicitly states freedom of expression must be exercised responsibly with regard for others' rights—matching choice C."
  },
  {
    num: 30,
    text: "Choose the word that DOES NOT belong in the group.",
    choices: ["A. diligent", "B. industrious", "C. assiduous", "D. negligent"],
    answer: "D",
    explanation: "Diligent, industrious, and assiduous all mean hardworking; negligent means failing to take proper care, making it the odd one out."
  },
  {
    num: 31,
    text: "Identify the CORRECT use of the apostrophe.",
    choices: [
      "A. The employees' files were updated.",
      "B. The employees' file's were updated.",
      "C. The employee's' files were updated.",
      "D. The employees files were updated."
    ],
    answer: "A",
    explanation: "'Employees'' (plural possessive) correctly shows that the files belong to multiple employees; an apostrophe after the 's' is the correct form."
  },
  {
    num: 32,
    text: "Which sentence uses the word AFFECT correctly?",
    choices: [
      "A. The new law will effect all government employees.",
      "B. The new law will affect all government employees.",
      "C. The affect of the new law is still unclear.",
      "D. The new law has a positive affect on employees."
    ],
    answer: "B",
    explanation: "'Affect' as a verb means to have an impact on something or someone; 'effect' is generally used as a noun (the result or outcome)."
  },
  {
    num: 33,
    text: "Choose the BEST meaning of the idiomatic expression: 'to pass the buck.'",
    choices: [
      "A. to donate money to a cause",
      "B. to transfer responsibility to someone else",
      "C. to earn a large salary",
      "D. to complete a task ahead of schedule"
    ],
    answer: "B",
    explanation: "'To pass the buck' is an idiom meaning to shift responsibility or blame to another person rather than accepting it oneself."
  },
  {
    num: 34,
    text: "SITUATIONAL: As a section chief, you notice that one of your subordinates is consistently late. The other employees have started to complain. What is the BEST course of action?",
    choices: [
      "A. Ignore the issue since minor tardiness is common.",
      "B. Immediately file an administrative case without prior discussion.",
      "C. Call the subordinate for a private counseling session and discuss the issue formally.",
      "D. Ask the other employees to confront the subordinate directly."
    ],
    answer: "C",
    explanation: "Proper supervisory practice requires addressing performance issues through counseling before escalating to formal disciplinary action."
  },
  {
    num: 35,
    text: "Read the following sentence and identify the ERROR in diction.\n\n'The mayor inferred from his speech that budget cuts would be inevitable.'",
    choices: [
      "A. The word 'inferred' should be 'implied.'",
      "B. The word 'inevitable' should be 'unavoidable.'",
      "C. The word 'speech' should be 'address.'",
      "D. There is no error in the sentence."
    ],
    answer: "A",
    explanation: "A speaker 'implies' (suggests) in a speech; the audience 'infers' (concludes) from what they hear. The subject here is the mayor, the speaker, so 'implied' is correct."
  },
  {
    num: 36,
    text: "Which of the following sentences is written in the ACTIVE VOICE?",
    choices: [
      "A. The annual report was submitted by the division chief.",
      "B. The budget proposal was approved by the secretary.",
      "C. The auditors examined all financial records thoroughly.",
      "D. The contract was signed by both parties."
    ],
    answer: "C",
    explanation: "In active voice, the subject ('the auditors') performs the action; in choices A, B, and D, the subject receives the action (passive voice)."
  },
  {
    num: 37,
    text: "Select the CORRECT word to complete the sentence.\n\nThe government's ________ on environmental protection has been widely praised by international bodies.",
    choices: ["A. stance", "B. stints", "C. stances", "D. instances"],
    answer: "A",
    explanation: "'Stance' means a position or attitude toward a particular matter; 'stints' means periods of work; 'instances' means examples."
  },
  {
    num: 38,
    text: "Which of the following is an example of a COMPOUND SENTENCE?",
    choices: [
      "A. The official signed the document and left the room.",
      "B. Although the official signed the document, he expressed reservations.",
      "C. The official signed the document; the secretary filed it immediately.",
      "D. The official who signed the document later resigned."
    ],
    answer: "C",
    explanation: "A compound sentence consists of two independent clauses joined by a semicolon or coordinating conjunction; choice C has two independent clauses."
  },
  {
    num: 39,
    text: "Choose the word MOST OPPOSITE in meaning to VERBOSE.",
    choices: ["A. wordy", "B. talkative", "C. concise", "D. eloquent"],
    answer: "C",
    explanation: "Verbose means using too many words; its antonym is 'concise,' meaning expressing much in few words."
  },
  {
    num: 40,
    text: "Read the passage and answer the question.\n\n'Good governance is not merely about following procedures. It requires ethical judgment, courage to act on principle, and the wisdom to distinguish what is legal from what is right.'\n\nAccording to the passage, good governance requires all of the following EXCEPT:",
    choices: [
      "A. ethical judgment",
      "B. adherence to procedures alone",
      "C. courage to act on principle",
      "D. wisdom in distinguishing legal from ethical actions"
    ],
    answer: "B",
    explanation: "The passage explicitly states that good governance is NOT merely about following procedures, so 'adherence to procedures alone' is excluded."
  },

  // ============================================================
  // SECTION 2: VERBAL ABILITY – FILIPINO (Q41–Q70)
  // ============================================================
  {
    num: 41,
    text: "Piliin ang salitang MAGKASINGKAHULUGAN sa salitang may salungguhit.\n\nAng opisyal ay nagpakita ng <u>katapatan</u> sa kanyang tungkulin.",
    choices: ["A. kataksilan", "B. pagmamahal", "C. katapangan", "D. dedikasyon"],
    answer: "D",
    explanation: "Ang 'katapatan' ay nangangahulugang pagiging tapat at deboto sa isang bagay; ang 'dedikasyon' ang pinakamalapit na kasingkahulugan."
  },
  {
    num: 42,
    text: "Piliin ang salitang KASALUNGAT ng salitang may salungguhit.\n\nAng kanyang <u>kasipagan</u> sa trabaho ay kinikilala ng lahat.",
    choices: ["A. katamaran", "B. talino", "C. tapang", "D. sigasig"],
    answer: "A",
    explanation: "Ang 'kasipagan' ay nangangahulugang pagsusumikap; ang kasalungat nito ay 'katamaran,' o ang kawalan ng sipa sa trabaho."
  },
  {
    num: 43,
    text: "Alin sa mga sumusunod ang WASTONG paggamit ng salitang 'ng' at 'nang'?\n\nSinabi ________ opisyal ________ maaga siyang aalis.",
    choices: [
      "A. nang / na",
      "B. ng / nang",
      "C. ng / na",
      "D. nang / ng"
    ],
    answer: "B",
    explanation: "'Ng' ay ginagamit bilang pantukoy (katulad ng 'of' sa Ingles); 'nang' ay ginagamit bilang pang-abay na nagpapakita ng panahon o paraan."
  },
  {
    num: 44,
    text: "Basahin ang talata at sagutin ang tanong.\n\n'Ang serbisyong-publiko ay isang sagradong tungkulin. Hindi ito pribilehiyo ng iilan kundi responsibilidad ng bawat isa na nagtataglay ng kapangyarihang ibinigay ng taumbayan.'\n\nAno ang PANGUNAHING MENSAHE ng talata?",
    choices: [
      "A. Ang serbisyong-publiko ay nangangailangan ng malaking suweldo.",
      "B. Ang kapangyarihan ng mga opisyal ay nagmumula sa taumbayan at may kasamang responsibilidad.",
      "C. Ang serbisyong-publiko ay para lamang sa mga may pribilehiyo.",
      "D. Ang bawat mamamayan ay dapat sumali sa pamahalaan."
    ],
    answer: "B",
    explanation: "Ang talata ay nagbibigay-diin na ang kapangyarihan ay nagmumula sa taumbayan at dala nito ang responsibilidad, hindi pribilehiyo."
  },
  {
    num: 45,
    text: "Piliin ang TAMANG anyo ng pandiwa.\n\nAng mga empleyado ay ________ ng kanilang mga ulat bukas.",
    choices: ["A. magsusumite", "B. nagsusumite", "C. nagsumite", "D. nagsumiting"],
    answer: "A",
    explanation: "Dahil ang kilos ay gagawin pa sa hinaharap ('bukas'), ang tamang aspeto ng pandiwa ay panahabing hinaharap: 'magsusumite.'"
  },
  {
    num: 46,
    text: "Alin sa mga sumusunod ang HINDI ANGKOP na parirala sa opisyal na sulatin?",
    choices: [
      "A. Sa pamamagitan ng sulat na ito, nais naming ipaabot...",
      "B. Pakiusap na i-process mo na agad yan, okay?",
      "C. Ipinapaalam namin sa inyong kagalang-galang na opisina...",
      "D. Bunga nito, ipinagmamalaki naming ipaalam ang sumusunod..."
    ],
    answer: "B",
    explanation: "Ang pariralang 'okay?' ay pang-usap lamang at hindi angkop sa pormal na opisyal na sulatin."
  },
  {
    num: 47,
    text: "Piliin ang TAMANG bantas para sa sumusunod na pangungusap.\n\nAng mga sumusunod na opisyal ay hinilingang dumalo________ Pangulo________ Kalihim________ at Tagapayo",
    choices: [
      "A. : ; ; .",
      "B. ; : , .",
      "C. : , , .",
      "D. , ; ; ."
    ],
    answer: "C",
    explanation: "Ang tutuldukan (:) ay ginagamit bago ang isang listahan; ang mga kuwit (,) ay ginagamit sa pagitan ng mga aytem sa listahan."
  },
  {
    num: 48,
    text: "Alin sa mga sumusunod ang wastong gamit ng PANLAPING 'maka-'?",
    choices: [
      "A. Makabansa ang kilosan ng mga guro.",
      "B. Makaibang paraan ang kailangan niya.",
      "C. Makagawa siya ng kanyang takdang-aralin.",
      "D. Makalipas ang isang linggo, bumalik siya."
    ],
    answer: "A",
    explanation: "Ang 'maka-' bilang unlapi ay nagpapahayag ng pagkakakilanlan o pagsuporta sa isang ideya o grupo, tulad ng 'makabansa' na nangangahulugang 'para sa bansa.'"
  },
  {
    num: 49,
    text: "SITWASYON: Bilang isang empleyado ng gobyerno, natanggap mo ang isang sulat na may maling impormasyon tungkol sa iyong ahensiyang nakatuon sa isang opisyal na ulat. Ano ang pinaka-angkop na gawin?",
    choices: [
      "A. Balewalain ang sulat dahil mali naman ito.",
      "B. Mag-isyu ng opisyal na pagwawasto sa impormasyon.",
      "C. Ipasa ang sulat sa ibang departamento nang walang aksyon.",
      "D. Sumagot sa sulat nang hindi dumaan sa tamang proseso."
    ],
    answer: "B",
    explanation: "Ang wastong aksyon ay ang mag-isyu ng opisyal na pagwawasto upang maiwasan ang pagkalat ng maling impormasyon na maaaring makapinsala sa ahensya."
  },
  {
    num: 50,
    text: "Piliin ang pangungusap na may WASTONG gamit ng pang-ukol.",
    choices: [
      "A. Ang sulat ay ipinadala para kay Gobernador.",
      "B. Ang sulat ay ipinadala para sa Gobernador.",
      "C. Ang sulat ay ipinadala tungkol Gobernador.",
      "D. Ang sulat ay ipinadala sa Gobernador."
    ],
    answer: "D",
    explanation: "Sa Filipino, ang 'sa' ang karaniwang ginagamit na pang-ukol upang ipakilala ang tumatanggap ng kilos; 'para sa' ay maaari ring gamitin ngunit 'para kay' ay para sa tukoy na pangalan."
  },
  {
    num: 51,
    text: "Ano ang KAHULUGAN ng salitang 'pagtitimpi'?",
    choices: [
      "A. pagpapahayag ng galit nang walang pag-iingat",
      "B. pagpipigil sa sarili at pag-iingat sa kilos at salita",
      "C. pagtanggi sa mga responsibilidad",
      "D. pagbibigay ng mabilis na desisyon"
    ],
    answer: "B",
    explanation: "'Pagtitimpi' ay nangangahulugang pagpipigil sa sarili, pagkontrol ng damdamin, at pag-iingat sa salita at gawa."
  },
  {
    num: 52,
    text: "Basahin ang sipi at sagutin ang tanong.\n\n'Ang isang matapat na pinuno ay hindi naghahanap ng karangalan para sa kanyang sarili. Inuuna niya ang kapakanan ng kanyang mga nasasakupan kaysa sa sariling kaginhawaan.'\n\nAlin ang MAPANURING PANGUNGUSAP na sinusuportahan ng sipi?",
    choices: [
      "A. Ang pinuno ay dapat magsikap para sa kanyang sariling interes.",
      "B. Ang tunay na pamumuno ay nakatuon sa serbisyo at hindi sa personal na karangalan.",
      "C. Ang mga pinuno ay dapat na hayagan sa lahat ng bagay.",
      "D. Ang karangalan ay mas mahalaga kaysa serbisyo."
    ],
    answer: "B",
    explanation: "Ipinapakita ng sipi na ang isang matapat na pinuno ay nagbibigay-priyoridad sa iba kaysa sa sarili, na nagpapahayag ng tunay na pamumuno."
  },
  {
    num: 53,
    text: "Piliin ang TAMANG pagbaybay ng salita.",
    choices: ["A. kinabukasan", "B. kinabukassan", "C. kinabukasan", "D. A at C"],
    answer: "D",
    explanation: "Parehong 'kinabukasan' (A) at 'kinabukasan' (C) ay may parehong baybay; ang tamang baybay ay 'kinabukasan.'"
  },
  {
    num: 54,
    text: "Alin ang TAMANG pangungusap na may pokus sa ACTOR?",
    choices: [
      "A. Binasa ng bata ang libro.",
      "B. Binasa ng libro ang bata.",
      "C. Ang libro ay nabasa ng bata.",
      "D. Ibinasa ng bata ang libro sa guro."
    ],
    answer: "A",
    explanation: "Sa pokus sa aktor, ang ginagawa ng simuno (bata) ang kilos; ang 'binasa ng bata ang libro' ay may tamang estruktura ng pokus sa aktor."
  },
  {
    num: 55,
    text: "Piliin ang ANGKOP na katumbas ng idyomang 'balat-sibuyas.'",
    choices: [
      "A. matibay ang loob",
      "B. mapanuri sa sarili",
      "C. madaling masaktan",
      "D. walang malasakit sa iba"
    ],
    answer: "C",
    explanation: "Ang idyomang 'balat-sibuyas' ay ginagamit para ilarawan ang isang taong sensitibo at madaling masaktan sa mga salita o kilos ng iba."
  },
  {
    num: 56,
    text: "Piliin ang pangungusap na WALANG MALI sa gramatika.",
    choices: [
      "A. Ang mga estudyante at ang guro ay dumating na.",
      "B. Ang mga estudyante kasama ang guro ay dumating na.",
      "C. Ang estudyante at guro ay dumating na sila.",
      "D. Dumating na ang mga estudyante na kasama ang guro nila."
    ],
    answer: "A",
    explanation: "Ang pangungusap na A ay may tamang estruktura at wastong gamit ng simuno at pandiwa nang walang redundansya."
  },
  {
    num: 57,
    text: "Ano ang KAHULUGAN ng salitang 'maunawain'?",
    choices: [
      "A. mahirap unawain",
      "B. handang umunawa sa kalagayan ng iba",
      "C. walang paniniwala",
      "D. palaging nagtatanong"
    ],
    answer: "B",
    explanation: "'Maunawain' ay nangangahulugang mapagpaunawa o handang intindihin at tanggapin ang sitwasyon ng ibang tao nang may empatiya."
  },
  {
    num: 58,
    text: "SITWASYON: Nakita mo ang iyong katrabaho na kumukuha ng opisyal na panustos para sa personal na gamit. Ano ang PINAKA-ANGKOP na aksyon?",
    choices: [
      "A. Hayaan na lamang dahil maliit lang ang kinuha.",
      "B. Isumbong agad sa media bago pa man mag-imbestiga ang opisina.",
      "C. Iulat ito sa iyong superbisor o sa naaangkop na awtoridad nang maayos.",
      "D. Makiisa sa gawain upang hindi ka matukoy na nagrereklamo."
    ],
    answer: "C",
    explanation: "Ayon sa R.A. 6713, ang wastong aksyon ay ang iulat ang anumang paglabag sa etikal na pamantayan sa naaangkop na awtoridad."
  },
  {
    num: 59,
    text: "Piliin ang TAMANG anyo ng panghalip para sa pangungusap na ito.\n\n'________ ang nagpasya na ipatupad ang bagong patakaran.'",
    choices: ["A. Siya", "B. Niya", "C. Kaniya", "D. Kanya"],
    answer: "A",
    explanation: "Ang 'Siya' ay panghalip na pansimuno (nominative), kaya ito ang tamang gamitin bilang simuno ng pangungusap."
  },
  {
    num: 60,
    text: "Basahin ang talata at sagutin ang tanong.\n\n'Ang kalayaan sa pamamahayag ay isa sa mga saligang karapatan ng bawat Pilipino. Subalit ang kalayaang ito ay may kasamang responsibilidad—ang gumawa ng makatotohanang pamamahayag na hindi makapipinsala sa karangalan ng ibang tao.'\n\nAno ang nais iparating ng talata tungkol sa kalayaan sa pamamahayag?",
    choices: [
      "A. Maaari itong gamitin nang walang anumang limitasyon.",
      "B. Ito ay isang saligang karapatan na may kasamang responsibilidad.",
      "C. Ito ay para lamang sa mga propesyonal na mamamahayag.",
      "D. Ito ay mas mahalaga kaysa sa karapatan ng ibang tao."
    ],
    answer: "B",
    explanation: "Ipinapakita ng talata na ang kalayaan sa pamamahayag ay isang karapatan ngunit may kasamang responsibilidad ng katotohanan at paggalang sa iba."
  },
  {
    num: 61,
    text: "Alin ang wastong paggamit ng salitang 'dahil' at 'dahilan'?",
    choices: [
      "A. Ang dahil ng problema ay kawalan ng komunikasyon.",
      "B. Ang dahilan ng problema ay kawalan ng komunikasyon.",
      "C. Dahilan sa malakas na ulan, nagkansela ang pulong.",
      "D. Dahilan niya ay dumating siya nang maaga."
    ],
    answer: "B",
    explanation: "'Dahilan' ay pangngalan na nangangahulugang 'sanhi'; 'dahil' ay pang-ugnay. Ang B ay may tamang gamit ng 'dahilan' bilang paksa ng pangungusap."
  },
  {
    num: 62,
    text: "Piliin ang ANGKOP na salita para sa puwang.\n\nAng lunsaran ng programa ay ________ ng Pangulo ng Republika.",
    choices: ["A. ginawa", "B. sinimulan", "C. pinangunahan", "D. pinagbuhusan"],
    answer: "C",
    explanation: "'Pinangunahan' o 'pimunuan' ang pinaka-angkop na salita para sa isang seremonya na kinakilahok ang Pangulo bilang puno."
  },
  {
    num: 63,
    text: "Piliin ang TAMANG hatiin ng silaba ng salitang 'pamamahala.'",
    choices: ["A. pa-ma-ma-ha-la", "B. pam-am-ah-al-a", "C. pa-mama-ha-la", "D. pa-mamah-ala"],
    answer: "A",
    explanation: "Ang tamang hatiin ng 'pamamahala' ay pa-ma-ma-ha-la, sumusunod sa pantunog na estruktura ng mga pantig sa Filipino."
  },
  {
    num: 64,
    text: "Ano ang TAMANG kahulugan ng salitang 'maparaang'?",
    choices: [
      "A. walang paraan sa buhay",
      "B. matalino at mapanlikha sa paglutas ng mga suliranin",
      "C. labis na mapaghinala",
      "D. mabilis na kumikilos nang walang pag-iisip"
    ],
    answer: "B",
    explanation: "'Maparaang' ay nangangahulugang may talino at kakayahang maghanap ng mga paraan o solusyon sa mga suliranin."
  },
  {
    num: 65,
    text: "Piliin ang pangungusap na may TAMANG gamit ng panlaping 'ipa-'.",
    choices: [
      "A. Ipaayos niya ang sirang sasakyan.",
      "B. Ipahayag niya ang kanyang isip.",
      "C. Ipasok ang mga dokumento sa alkansiya.",
      "D. Ipaalam sa lahat ng empleyado."
    ],
    answer: "A",
    explanation: "Ang panlaping 'ipa-' ay ginagamit kapag ang kilos ay isinasagawa ng iba para sa simuno; 'ipaayos' ay nagpapahiwatig na ipinagawa ang pag-aayos sa iba."
  },
  {
    num: 66,
    text: "Piliin ang TAMANG pangungusap na may pokus sa LAYUNIN.",
    choices: [
      "A. Binili ng nanay ang pagkain para sa amin.",
      "B. Binili ng pagkain ang nanay.",
      "C. Binili ang pagkain ng nanay.",
      "D. Biniling pagkain ang nanay."
    ],
    answer: "C",
    explanation: "Sa pokus sa layunin, ang pinagsasalitaan (ang pagkain) ay ginagawang paksa; ang 'Binili ang pagkain ng nanay' ay may tamang estruktura."
  },
  {
    num: 67,
    text: "Alin sa mga sumusunod ang TAMANG pagkakasunod-sunod ng pangungusap upang bumuo ng magkakaugnay na talata?\n\n1. Ang kalikasan ay isang kayamanan na dapat pangalagaan.\n2. Kung mawawala ang mga puno, mawawala rin ang maayos na hangin.\n3. Ang bawat puno ay nagbibigay ng oxygen na kailangan nating lahat.\n4. Kaya naman, mahalaga ang pagtatanim at pangangalaga ng mga puno.",
    choices: ["A. 1-2-3-4", "B. 1-3-2-4", "C. 3-2-1-4", "D. 2-3-1-4"],
    answer: "B",
    explanation: "Ang lohikal na pagkakasunod-sunod ay: pangkalahatang pahayag (1), tukoy na benepisyo (3), kinahinatnan ng kawalan (2), konklusyon (4)."
  },
  {
    num: 68,
    text: "Piliin ang salitang may MALING pagbabaybay.",
    choices: ["A. pagkakataon", "B. pananagutan", "C. katungkulan", "D. kaparehasan"],
    answer: "D",
    explanation: "Ang tamang baybay ay 'kapantasan' o 'kaparehas'; ang 'kaparehasan' ay hindi karaniwang salita sa wikang Filipino."
  },
  {
    num: 69,
    text: "SITWASYON: Nakatanggap ka ng utos mula sa iyong hepe na gumawa ng ulat na may 'embellished' o pinagandang datos para magmukhang mabuti ang pagganap ng ahensya. Ano ang PINAKA-ANGKOP na gagawin mo?",
    choices: [
      "A. Sundin ang utos dahil ang hepe mo ang responsable.",
      "B. Gumawa ng totoong ulat at ipaliwanag sa iyong hepe ang kahalagahan ng katotohanan.",
      "C. Isumite ang ulat na may pinagandang datos nang walang pagsasaalang-alang.",
      "D. Tumanggi nang hindi nagbibigay ng anumang paliwanag."
    ],
    answer: "B",
    explanation: "Ayon sa Code of Conduct (R.A. 6713), ang mga empleyado ay obligadong maging tapat; ang pagsumite ng maling ulat ay lumalabag sa batas at etikal na pamantayan."
  },
  {
    num: 70,
    text: "Piliin ang TAMANG parirala para sa puwang sa opisyal na liham.\n\n'________ ang aming pagyakap sa bagong patakaran ng Kagawaran.'",
    choices: [
      "A. Gustong-gusto namin",
      "B. Buong pusong tinatanggap ng aming opisina",
      "C. Okay lang naman sa amin",
      "D. Masaya kaming sumang-ayon sa"
    ],
    answer: "B",
    explanation: "Sa opisyal na sulatin, ang 'Buong pusong tinatanggap ng aming opisina' ang pinakapormal at naaangkop na parirala sa pagpapahayag ng pagtanggap."
  },

  // ============================================================
  // SECTION 3: NUMERICAL ABILITY (Q71–Q110)
  // ============================================================
  {
    num: 71,
    text: "What is the next number in the sequence?\n\n2, 5, 10, 17, 26, ___",
    choices: ["A. 35", "B. 37", "C. 36", "D. 38"],
    answer: "B",
    explanation: "The differences are +3, +5, +7, +9, +11; the next difference after 9 is 11, so 26 + 11 = 37."
  },
  {
    num: 72,
    text: "A government office has a budget of ₱480,000 for office supplies for the year. If the budget is distributed equally among 12 months, how much is allotted per month?",
    choices: ["A. ₱38,000", "B. ₱40,000", "C. ₱42,000", "D. ₱36,000"],
    answer: "B",
    explanation: "₱480,000 ÷ 12 = ₱40,000 per month."
  },
  {
    num: 73,
    text: "What is the next number in the sequence?\n\n3, 6, 12, 24, 48, ___",
    choices: ["A. 72", "B. 84", "C. 96", "D. 90"],
    answer: "C",
    explanation: "Each term is multiplied by 2; 48 × 2 = 96."
  },
  {
    num: 74,
    text: "A clerk processes 45 documents in 3 hours. At the same rate, how many documents will she process in 8 hours?",
    choices: ["A. 100", "B. 110", "C. 115", "D. 120"],
    answer: "D",
    explanation: "Rate = 45 ÷ 3 = 15 documents/hour; 15 × 8 = 120 documents."
  },
  {
    num: 75,
    text: "What is the value of: 15% of 2,400?",
    choices: ["A. 340", "B. 350", "C. 360", "D. 370"],
    answer: "C",
    explanation: "15% × 2,400 = 0.15 × 2,400 = 360."
  },
  {
    num: 76,
    text: "A project team has 6 members. If the project fee of ₱72,000 is split equally, how much does each member receive?",
    choices: ["A. ₱10,000", "B. ₱11,000", "C. ₱12,000", "D. ₱13,000"],
    answer: "C",
    explanation: "₱72,000 ÷ 6 = ₱12,000 per member."
  },
  {
    num: 77,
    text: "What number is missing in the sequence?\n\n1, 4, 9, 16, ___, 36",
    choices: ["A. 20", "B. 22", "C. 25", "D. 28"],
    answer: "C",
    explanation: "The sequence consists of perfect squares: 1², 2², 3², 4², 5², 6²; thus the missing term is 5² = 25."
  },
  {
    num: 78,
    text: "An employee's monthly salary is ₱28,500. What is her ANNUAL salary?",
    choices: ["A. ₱312,000", "B. ₱334,000", "C. ₱342,000", "D. ₱356,000"],
    answer: "C",
    explanation: "₱28,500 × 12 = ₱342,000."
  },
  {
    num: 79,
    text: "In a barangay, 3 out of every 5 households have access to clean water. If there are 850 households, how many have access to clean water?",
    choices: ["A. 490", "B. 500", "C. 510", "D. 520"],
    answer: "C",
    explanation: "(3/5) × 850 = 0.60 × 850 = 510 households."
  },
  {
    num: 80,
    text: "What is the next number in the sequence?\n\n100, 95, 85, 70, 50, ___",
    choices: ["A. 20", "B. 25", "C. 30", "D. 35"],
    answer: "B",
    explanation: "The differences are -5, -10, -15, -20, -25; thus 50 - 25 = 25."
  },
  {
    num: 81,
    text: "A government vehicle uses 8 liters of fuel per 100 km. How many liters will it need to travel 375 km?",
    choices: ["A. 28", "B. 30", "C. 32", "D. 34"],
    answer: "B",
    explanation: "(8 ÷ 100) × 375 = 0.08 × 375 = 30 liters."
  },
  {
    num: 82,
    text: "If a=3 and b=4, what is the value of 2a² + 3b?",
    choices: ["A. 28", "B. 29", "C. 30", "D. 32"],
    answer: "C",
    explanation: "2(3²) + 3(4) = 2(9) + 12 = 18 + 12 = 30."
  },
  {
    num: 83,
    text: "A department's total expenditure was ₱1,200,000. Personnel services accounted for 65% of the total. How much was spent on personnel services?",
    choices: ["A. ₱720,000", "B. ₱750,000", "C. ₱760,000", "D. ₱780,000"],
    answer: "D",
    explanation: "65% × ₱1,200,000 = 0.65 × 1,200,000 = ₱780,000."
  },
  {
    num: 84,
    text: "What is the LEAST COMMON MULTIPLE (LCM) of 6, 8, and 12?",
    choices: ["A. 24", "B. 36", "C. 48", "D. 72"],
    answer: "A",
    explanation: "The LCM of 6, 8, and 12 is 24 because 24 is the smallest number divisible by all three."
  },
  {
    num: 85,
    text: "An office printer can print 30 pages per minute. How many minutes will it take to print a 450-page report?",
    choices: ["A. 12", "B. 13", "C. 14", "D. 15"],
    answer: "D",
    explanation: "450 ÷ 30 = 15 minutes."
  },
  {
    num: 86,
    text: "What is the next number in the sequence?\n\n2, 3, 5, 8, 13, 21, ___",
    choices: ["A. 29", "B. 32", "C. 34", "D. 36"],
    answer: "C",
    explanation: "This is the Fibonacci sequence; each term is the sum of the two preceding terms: 13 + 21 = 34."
  },
  {
    num: 87,
    text: "A road project is 60% complete after 9 months. At this rate, how many total months will the project take to complete?",
    choices: ["A. 13", "B. 14", "C. 15", "D. 16"],
    answer: "C",
    explanation: "If 60% is done in 9 months, then 100% will take 9 ÷ 0.60 = 15 months."
  },
  {
    num: 88,
    text: "A government employee earns ₱35,000/month. She receives a 12% salary increase. What will her new monthly salary be?",
    choices: ["A. ₱38,800", "B. ₱39,200", "C. ₱39,500", "D. ₱39,200"],
    answer: "B",
    explanation: "12% of ₱35,000 = ₱4,200; new salary = ₱35,000 + ₱4,200 = ₱39,200."
  },
  {
    num: 89,
    text: "Three friends completed a community project in 6 days working together. If only two of them worked, how many days would the same project take? (Assume equal work rate.)",
    choices: ["A. 7", "B. 8", "C. 9", "D. 10"],
    answer: "C",
    explanation: "Combined rate for 3 = 1/6; rate for 1 = 1/18; rate for 2 = 2/18 = 1/9; so 2 workers take 9 days."
  },
  {
    num: 90,
    text: "What is the result of: (48 ÷ 6) + (5 × 3) – 7?",
    choices: ["A. 14", "B. 15", "C. 16", "D. 17"],
    answer: "C",
    explanation: "(48 ÷ 6) + (5 × 3) – 7 = 8 + 15 – 7 = 16."
  },
  {
    num: 91,
    text: "What is the GREATEST COMMON FACTOR (GCF) of 36 and 48?",
    choices: ["A. 6", "B. 8", "C. 12", "D. 18"],
    answer: "C",
    explanation: "Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36; Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48; GCF = 12."
  },
  {
    num: 92,
    text: "A tank is 3/4 full. After 120 liters are drained, it is 1/4 full. What is the total capacity of the tank?",
    choices: ["A. 200 liters", "B. 220 liters", "C. 240 liters", "D. 260 liters"],
    answer: "C",
    explanation: "3/4 – 1/4 = 1/2 of tank = 120 liters; full tank = 120 × 2 = 240 liters."
  },
  {
    num: 93,
    text: "What is the next number in the sequence?\n\n81, 27, 9, 3, ___",
    choices: ["A. 0", "B. 1", "C. 2", "D. 1/3"],
    answer: "B",
    explanation: "Each term is divided by 3; 3 ÷ 3 = 1."
  },
  {
    num: 94,
    text: "If the ratio of male to female employees in an agency is 3:5, and there are 240 employees total, how many are female?",
    choices: ["A. 140", "B. 145", "C. 150", "D. 155"],
    answer: "C",
    explanation: "Female = (5/8) × 240 = 150 employees."
  },
  {
    num: 95,
    text: "A rectangular office has a length of 15 meters and a width of 8 meters. What is its area?",
    choices: ["A. 100 sq m", "B. 110 sq m", "C. 115 sq m", "D. 120 sq m"],
    answer: "D",
    explanation: "Area = length × width = 15 × 8 = 120 square meters."
  },
  {
    num: 96,
    text: "A scholarship candidate scored 87, 92, 78, 95, and 83 on five examinations. What is her AVERAGE score?",
    choices: ["A. 85", "B. 86", "C. 87", "D. 88"],
    answer: "C",
    explanation: "(87+92+78+95+83) ÷ 5 = 435 ÷ 5 = 87."
  },
  {
    num: 97,
    text: "What is the value of: √144 + √81?",
    choices: ["A. 18", "B. 20", "C. 21", "D. 23"],
    answer: "C",
    explanation: "√144 = 12 and √81 = 9; 12 + 9 = 21."
  },
  {
    num: 98,
    text: "A supplier quotes ₱250 per ream of bond paper. The office needs 48 reams. If a 10% discount is applied, what is the TOTAL COST?",
    choices: ["A. ₱10,600", "B. ₱10,800", "C. ₱11,000", "D. ₱12,000"],
    answer: "B",
    explanation: "Total before discount = 250 × 48 = ₱12,000; 10% discount = ₱1,200; Net = ₱12,000 – ₱1,200 = ₱10,800."
  },
  {
    num: 99,
    text: "What is the missing number in the sequence?\n\n7, 14, ___, 28, 35",
    choices: ["A. 18", "B. 19", "C. 21", "D. 22"],
    answer: "C",
    explanation: "The sequence increases by 7 each time (multiples of 7); the missing number is 7 × 3 = 21."
  },
  {
    num: 100,
    text: "If it takes 4 workers 10 days to complete a task, how many days will it take 8 workers (at the same rate) to complete the same task?",
    choices: ["A. 4", "B. 5", "C. 6", "D. 7"],
    answer: "B",
    explanation: "Total work = 4 × 10 = 40 worker-days; with 8 workers: 40 ÷ 8 = 5 days."
  },
  {
    num: 101,
    text: "An employee works 8 hours a day, 5 days a week. How many hours does she work in 4 weeks?",
    choices: ["A. 140", "B. 150", "C. 160", "D. 170"],
    answer: "C",
    explanation: "8 × 5 = 40 hours/week; 40 × 4 = 160 hours in 4 weeks."
  },
  {
    num: 102,
    text: "What is 2/5 of 350?",
    choices: ["A. 120", "B. 130", "C. 140", "D. 150"],
    answer: "C",
    explanation: "(2/5) × 350 = 700 ÷ 5 = 140."
  },
  {
    num: 103,
    text: "The perimeter of a square plot of land is 96 meters. What is the area of the plot?",
    choices: ["A. 576 sq m", "B. 504 sq m", "C. 484 sq m", "D. 600 sq m"],
    answer: "A",
    explanation: "Side = 96 ÷ 4 = 24 m; Area = 24² = 576 sq m."
  },
  {
    num: 104,
    text: "What is the next number in the sequence?\n\n1, 8, 27, 64, ___",
    choices: ["A. 100", "B. 112", "C. 115", "D. 125"],
    answer: "D",
    explanation: "The sequence consists of perfect cubes: 1³, 2³, 3³, 4³, 5³ = 125."
  },
  {
    num: 105,
    text: "A local government allocated ₱2,500,000 for barangay health centers. If 25 barangays share equally, how much does each barangay receive?",
    choices: ["A. ₱90,000", "B. ₱95,000", "C. ₱100,000", "D. ₱105,000"],
    answer: "C",
    explanation: "₱2,500,000 ÷ 25 = ₱100,000 per barangay."
  },
  {
    num: 106,
    text: "An employee's gross income is ₱45,000. After deducting 20% for taxes and contributions, what is his net take-home pay?",
    choices: ["A. ₱34,000", "B. ₱35,000", "C. ₱36,000", "D. ₱37,000"],
    answer: "C",
    explanation: "20% of ₱45,000 = ₱9,000; net pay = ₱45,000 – ₱9,000 = ₱36,000."
  },
  {
    num: 107,
    text: "What is the value of: 3³ – 2⁴ + 5²?",
    choices: ["A. 34", "B. 36", "C. 38", "D. 40"],
    answer: "B",
    explanation: "3³ = 27, 2⁴ = 16, 5² = 25; 27 – 16 + 25 = 36."
  },
  {
    num: 108,
    text: "If a train travels at 80 km/h, how long (in hours) will it take to travel 280 km?",
    choices: ["A. 3.0", "B. 3.5", "C. 4.0", "D. 4.5"],
    answer: "B",
    explanation: "Time = distance ÷ speed = 280 ÷ 80 = 3.5 hours."
  },
  {
    num: 109,
    text: "What is the missing number?\n\n64, 32, 16, ___, 4",
    choices: ["A. 6", "B. 7", "C. 8", "D. 10"],
    answer: "C",
    explanation: "Each term is divided by 2; 16 ÷ 2 = 8."
  },
  {
    num: 110,
    text: "A civil engineer has a project budget of ₱800,000. Materials cost 45% of the budget, labor 35%, and overhead 20%. How much is allocated for LABOR?",
    choices: ["A. ₱270,000", "B. ₱275,000", "C. ₱280,000", "D. ₱285,000"],
    answer: "C",
    explanation: "35% × ₱800,000 = 0.35 × 800,000 = ₱280,000."
  },

  // ============================================================
  // SECTION 4: ANALYTICAL ABILITY (Q111–Q145)
  // ============================================================
  {
    num: 111,
    text: "ANALOGY: DOCTOR : HOSPITAL :: JUDGE : ___",
    choices: ["A. courtroom", "B. lawyer", "C. verdict", "D. law school"],
    answer: "A",
    explanation: "A doctor practices in a hospital; a judge presides in a courtroom—the analogy relates a professional to their workplace."
  },
  {
    num: 112,
    text: "ANALOGY: PAGES : BOOK :: BRICKS : ___",
    choices: ["A. mortar", "B. building", "C. concrete", "D. architect"],
    answer: "B",
    explanation: "Pages make up a book; bricks make up a building—both describe components composing a larger whole."
  },
  {
    num: 113,
    text: "Read the argument below. Identify the CONCLUSION.\n\n'All government employees must file their SALN. Ms. Santos is a government employee. Therefore, ___.'",
    choices: [
      "A. All employees file SALNs voluntarily.",
      "B. Ms. Santos must file her SALN.",
      "C. SALN is not required for contractual workers.",
      "D. Ms. Santos is exempt from SALN filing."
    ],
    answer: "B",
    explanation: "The syllogism concludes that since Ms. Santos is a government employee, she must file her SALN—the direct logical conclusion."
  },
  {
    num: 114,
    text: "Which of the following is an ASSUMPTION underlying the statement: 'The government should increase funding for public schools because better facilities lead to better academic performance.'?",
    choices: [
      "A. Private schools are more effective than public schools.",
      "B. Academic performance is not influenced by facilities.",
      "C. Facilities are a major factor in student learning outcomes.",
      "D. Funding alone determines school quality."
    ],
    answer: "C",
    explanation: "The argument assumes that facilities significantly affect performance; this underlying belief must be true for the conclusion to follow."
  },
  {
    num: 115,
    text: "ANALOGY: THERMOMETER : TEMPERATURE :: BAROMETER : ___",
    choices: ["A. wind", "B. rain", "C. atmospheric pressure", "D. humidity"],
    answer: "C",
    explanation: "A thermometer measures temperature; a barometer measures atmospheric pressure—both are measuring instruments."
  },
  {
    num: 116,
    text: "Study the data and answer the question.\n\nDepartment A: 45 employees\nDepartment B: 30 employees\nDepartment C: 75 employees\nDepartment D: 50 employees\n\nIf the agency's total budget for a team-building event is ₱20,000 and funds are allocated proportionally by department size, how much does Department C receive?",
    choices: ["A. ₱6,000", "B. ₱7,000", "C. ₱7,500", "D. ₱8,000"],
    answer: "C",
    explanation: "Total employees = 200; Department C share = 75/200 = 37.5%; ₱20,000 × 37.5% = ₱7,500."
  },
  {
    num: 117,
    text: "SITUATIONAL: You are asked to evaluate three applicants for a position. Applicant A is the most qualified but is a relative of your supervisor. Applicant B has average qualifications. Applicant C is a close friend with below-average credentials. What is the ETHICAL course of action?",
    choices: [
      "A. Recommend Applicant A because he is the most qualified.",
      "B. Recommend Applicant C because of your personal relationship.",
      "C. Recommend Applicant B as a safe compromise.",
      "D. Disclose the conflict of interest and let an impartial panel decide."
    ],
    answer: "D",
    explanation: "R.A. 6713 requires public officials to avoid conflicts of interest; disclosing the situation and deferring to an impartial panel is the ethical standard."
  },
  {
    num: 118,
    text: "Which of the following BEST WEAKENS the argument?\n\n'Because crime rates have dropped since the new police chief took office, the new chief's policies are responsible for the decrease.'",
    choices: [
      "A. The police chief implemented stricter patrol policies.",
      "B. Crime rates began dropping two years before the new chief was appointed.",
      "C. The new chief has a distinguished career in law enforcement.",
      "D. Residents praised the new chief's communication with the community."
    ],
    answer: "B",
    explanation: "If crime rates were already falling before the chief took office, the chief's policies cannot be credited as the cause—this weakens the argument."
  },
  {
    num: 119,
    text: "ANALOGY: LAWS : LEGISLATURE :: JUDGMENTS : ___",
    choices: ["A. executive", "B. congress", "C. judiciary", "D. cabinet"],
    answer: "C",
    explanation: "Laws are produced by the legislature; judgments are produced by the judiciary—both relate to the source of a specific legal output."
  },
  {
    num: 120,
    text: "Which statement is the BEST CONCLUSION based on the following premises?\n\nPremise 1: All public officials convicted of plunder are disqualified from public office.\nPremise 2: Official X has been convicted of plunder.",
    choices: [
      "A. Official X should be given a second chance.",
      "B. Official X is disqualified from holding public office.",
      "C. Plunder charges do not always result in disqualification.",
      "D. Official X may still run for office pending appeal."
    ],
    answer: "B",
    explanation: "The syllogism is straightforward: if all convicts are disqualified, and X is a convict, then X is disqualified."
  },
  {
    num: 121,
    text: "Study the table below and answer the question.\n\nYear | Complaints Filed | Resolved\n2020 | 150 | 120\n2021 | 180 | 140\n2022 | 200 | 170\n2023 | 220 | 195\n\nWhat is the TREND in the number of UNRESOLVED complaints from 2020 to 2023?",
    choices: [
      "A. Decreasing consistently",
      "B. Increasing consistently",
      "C. Fluctuating with no clear trend",
      "D. Remaining constant"
    ],
    answer: "A",
    explanation: "Unresolved complaints: 2020=30, 2021=40, 2022=30, 2023=25. While it fluctuated, the overall trend is decreasing from 2021 onward."
  },
  {
    num: 122,
    text: "ANALOGY: CHAPTER : NOVEL :: ACT : ___",
    choices: ["A. poem", "B. play", "C. essay", "D. short story"],
    answer: "B",
    explanation: "A chapter is a subdivision of a novel; an act is a subdivision of a play—both are structural divisions of literary works."
  },
  {
    num: 123,
    text: "Identify the ASSUMPTION in the following statement.\n\n'We should invest more in science education because countries with strong science programs have higher economic growth.'",
    choices: [
      "A. Economic growth is unrelated to education.",
      "B. Science education directly contributes to economic growth.",
      "C. All educational investments yield economic returns.",
      "D. Science is more important than humanities."
    ],
    answer: "B",
    explanation: "The argument implicitly assumes that science education causes or significantly contributes to economic growth in those countries."
  },
  {
    num: 124,
    text: "SITUATIONAL: Your division receives an anonymous tip that funds were misused by a co-employee. You cannot verify the claim independently. What should you do?",
    choices: [
      "A. Immediately confront the co-employee with the accusation.",
      "B. Ignore the tip since it is anonymous and unverified.",
      "C. Report the tip to the proper authority (e.g., internal audit) and let them investigate.",
      "D. Broadcast the tip to other employees to build consensus."
    ],
    answer: "C",
    explanation: "Reporting to the proper authority allows a formal and fair investigation without prejudging or publicly accusing someone based on unverified information."
  },
  {
    num: 125,
    text: "If all MANILA residents are FILIPINOS, and some FILIPINOS are OVERSEAS WORKERS, which conclusion is VALID?",
    choices: [
      "A. All Manila residents are overseas workers.",
      "B. Some overseas workers are Manila residents.",
      "C. Some Manila residents may be overseas workers.",
      "D. No Manila residents are overseas workers."
    ],
    answer: "C",
    explanation: "Since some Filipinos are OFWs and Manila residents are Filipinos, it is possible (but not certain) that some Manila residents are OFWs."
  },
  {
    num: 126,
    text: "ANALOGY: STETHOSCOPE : PHYSICIAN :: GAVEL : ___",
    choices: ["A. senator", "B. police officer", "C. judge", "D. lawyer"],
    answer: "C",
    explanation: "A stethoscope is the iconic tool of a physician; a gavel is the iconic tool used by a judge."
  },
  {
    num: 127,
    text: "Read the argument and identify the LOGICAL FALLACY.\n\n'Senator Cruz opposed the environmental bill. Senator Cruz has investments in mining. Therefore, all senators with mining investments are corrupt.'",
    choices: [
      "A. Slippery slope",
      "B. Hasty generalization",
      "C. Ad hominem",
      "D. Circular reasoning"
    ],
    answer: "B",
    explanation: "Concluding that ALL senators with mining investments are corrupt based on ONE instance is a hasty generalization—overgeneralizing from insufficient evidence."
  },
  {
    num: 128,
    text: "SITUATIONAL: You are a department head. Two of your staff members are in a conflict that is affecting office performance. What is the MOST APPROPRIATE first step?",
    choices: [
      "A. Terminate both employees to restore office harmony.",
      "B. Call both employees together for mediation to understand both sides.",
      "C. Take the side of the more senior employee.",
      "D. Ignore the conflict and hope it resolves itself."
    ],
    answer: "B",
    explanation: "Good supervisory practice requires addressing interpersonal conflicts through mediation before considering disciplinary measures."
  },
  {
    num: 129,
    text: "Which of the following BEST STRENGTHENS the argument?\n\n'The government should prioritize mental health programs because they reduce long-term healthcare costs.'",
    choices: [
      "A. Mental health professionals are in short supply.",
      "B. Studies show that early mental health intervention reduces hospitalization by 40%.",
      "C. Mental health awareness campaigns have been increasing.",
      "D. Some employees prefer not to discuss mental health at work."
    ],
    answer: "B",
    explanation: "Statistical evidence showing that mental health intervention reduces costs directly supports the claim that prioritizing mental health saves healthcare spending."
  },
  {
    num: 130,
    text: "ANALOGY: WORDS : DICTIONARY :: LAWS : ___",
    choices: ["A. constitution", "B. legislation", "C. statutes", "D. revised penal code"],
    answer: "C",
    explanation: "Words are compiled in a dictionary; laws are compiled in statutes—both are organized collections of a specific type of content."
  },
  {
    num: 131,
    text: "Four employees—Ana, Ben, Carla, and Dan—are to be assigned to four tasks: filing, encoding, reception, and auditing. Ana cannot do auditing. Ben can only do encoding. Carla cannot do filing. Who is assigned to FILING?",
    choices: ["A. Ana", "B. Ben", "C. Carla", "D. Dan"],
    answer: "A",
    explanation: "Ben → encoding; Carla cannot file → Carla takes reception or auditing; Ana cannot audit → Ana takes filing; Dan takes the remaining task (auditing)."
  },
  {
    num: 132,
    text: "Identify the VALID INFERENCE from the following statement.\n\n'Employees who are punctual and diligent are likely to be promoted.'",
    choices: [
      "A. All promoted employees were punctual and diligent.",
      "B. Punctuality and diligence guarantee promotion.",
      "C. Being punctual and diligent increases the likelihood of promotion.",
      "D. Employees who are not punctual cannot be promoted."
    ],
    answer: "C",
    explanation: "The statement says such employees are 'likely' to be promoted—this only justifies the inference that these traits increase promotion chances."
  },
  {
    num: 133,
    text: "ANALOGY: SEED : TREE :: BILL : ___",
    choices: ["A. congress", "B. referendum", "C. law", "D. senator"],
    answer: "C",
    explanation: "A seed grows into a tree; a bill, when enacted, becomes a law—both represent a developmental progression."
  },
  {
    num: 134,
    text: "SITUATIONAL: A citizen approaches you at the public information counter with a complaint about a colleague. The colleague is not present. What should you do?",
    choices: [
      "A. Immediately validate the citizen's complaint without hearing the colleague's side.",
      "B. Receive the complaint, document it properly, and explain the due process to the citizen.",
      "C. Refuse to receive the complaint since the colleague is not present.",
      "D. Advise the citizen to return when the colleague is available."
    ],
    answer: "B",
    explanation: "Proper public service requires receiving complaints, documenting them, and explaining the process—without prejudging the accused party."
  },
  {
    num: 135,
    text: "Use the data to answer the question.\n\nBudget Utilization Rates:\nDivision A: 92%\nDivision B: 78%\nDivision C: 85%\nDivision D: 67%\n\nWhich two divisions have the CLOSEST utilization rates?",
    choices: [
      "A. A and B",
      "B. B and C",
      "C. A and C",
      "D. C and D"
    ],
    answer: "C",
    explanation: "Division A (92%) and Division C (85%) have a difference of only 7%, which is smaller than other pairs."
  },
  {
    num: 136,
    text: "Which of the following CORRECTLY identifies an ASSUMPTION in the argument?\n\n'We should hire more female police officers because diversity in law enforcement improves community relations.'",
    choices: [
      "A. Female officers are more intelligent than male officers.",
      "B. Gender diversity in law enforcement contributes to better community trust.",
      "C. Male officers cannot maintain good community relations.",
      "D. All communities prefer female officers."
    ],
    answer: "B",
    explanation: "The argument assumes that gender diversity specifically improves community relations—this underlying belief is what justifies the proposal."
  },
  {
    num: 137,
    text: "ANALOGY: CURRICULUM : SCHOOL :: CONSTITUTION : ___",
    choices: ["A. court", "B. nation", "C. congress", "D. government official"],
    answer: "B",
    explanation: "A curriculum is the foundational framework that guides a school; the Constitution is the foundational framework that guides a nation."
  },
  {
    num: 138,
    text: "Five officials are seated in a row: A, B, C, D, and E. A sits at one end. D is next to E. B is between A and C. C is next to D. What is the ORDER from left to right?",
    choices: ["A. A-B-C-D-E", "B. E-D-C-B-A", "C. A-B-C-E-D", "D. Both A and B"],
    answer: "D",
    explanation: "A is at one end, B is between A and C, C is next to D, and D is next to E; giving order A-B-C-D-E or its reverse E-D-C-B-A—both are valid."
  },
  {
    num: 139,
    text: "SITUATIONAL: You discover that an office policy violates a provision of R.A. 6713. Your immediate superior defends the policy. What is the appropriate course of action?",
    choices: [
      "A. Continue following the policy since your superior approved it.",
      "B. Raise the concern through proper internal channels, citing the legal provision.",
      "C. Quit your job to avoid participating in the violation.",
      "D. Publicly denounce the policy on social media."
    ],
    answer: "B",
    explanation: "Civil servants are obligated to uphold the law; raising the legal concern through proper channels is the correct and professional approach."
  },
  {
    num: 140,
    text: "Which of the following BEST summarizes the concept of ACCOUNTABILITY in public service?",
    choices: [
      "A. The obligation of public servants to answer for their actions and decisions to the public.",
      "B. The right of government officials to keep their decisions confidential.",
      "C. The practice of delegating all responsibilities to subordinates.",
      "D. The process of submitting annual performance reports to the Civil Service Commission."
    ],
    answer: "A",
    explanation: "Accountability in public service means being answerable and responsible for one's actions, decisions, and use of public resources."
  },
  {
    num: 141,
    text: "ANALOGY: AMENDMENT : CONSTITUTION :: REVISION : ___",
    choices: ["A. sentence", "B. paragraph", "C. manuscript", "D. policy"],
    answer: "C",
    explanation: "An amendment is a specific change to a constitution; a revision is a broader reworking of a manuscript—both involve modifying an existing document."
  },
  {
    num: 142,
    text: "Which conclusion LOGICALLY FOLLOWS from the following premises?\n\nP1: No corrupt official can be trusted.\nP2: Governor X is a corrupt official.",
    choices: [
      "A. Governor X should be given a chance to prove himself.",
      "B. Governor X cannot be trusted.",
      "C. All governors are corrupt.",
      "D. Corruption is common in local government."
    ],
    answer: "B",
    explanation: "By the rules of syllogism: if no corrupt official can be trusted, and Governor X is corrupt, then Governor X cannot be trusted."
  },
  {
    num: 143,
    text: "Study the graph data and answer the question.\n\nEmployee Training Completion Rates (%):\n2020: 55%\n2021: 62%\n2022: 70%\n2023: 78%\n\nIf the TREND continues, what is the PROJECTED rate for 2024?",
    choices: ["A. 82%", "B. 84%", "C. 86%", "D. 88%"],
    answer: "C",
    explanation: "The rates increase by approximately 7–8% annually (55→62→70→78); projecting +8% from 78% gives approximately 86%."
  },
  {
    num: 144,
    text: "SITUATIONAL: A subordinate confides that she is being harassed by a colleague but fears retaliation if she files a formal complaint. What should you do as her supervisor?",
    choices: [
      "A. Tell her to ignore the situation to preserve office harmony.",
      "B. Confront the harasser directly without informing the complainant.",
      "C. Assure confidentiality, document the incident, and guide her through the formal complaint process.",
      "D. Transfer the subordinate to another unit to remove her from the situation."
    ],
    answer: "C",
    explanation: "Safe workplace protocols require supervisors to take harassment seriously, protect victims from retaliation, and guide them through proper complaint procedures."
  },
  {
    num: 145,
    text: "ANALOGY: OATH OF OFFICE : PUBLIC SERVANT :: HIPPOCRATIC OATH : ___",
    choices: ["A. lawyer", "B. judge", "C. physician", "D. engineer"],
    answer: "C",
    explanation: "The Oath of Office is the commitment taken by public servants; the Hippocratic Oath is the commitment taken by physicians—both are professional oaths of service."
  },

  // ============================================================
  // SECTION 5: GENERAL INFORMATION (Q146–Q170)
  // ============================================================
  {
    num: 146,
    text: "Under the 1987 Philippine Constitution, how many years is the term of office of a Senator?",
    choices: ["A. 3 years", "B. 4 years", "C. 5 years", "D. 6 years"],
    answer: "D",
    explanation: "Article VI of the 1987 Constitution provides that senators serve a term of six (6) years."
  },
  {
    num: 147,
    text: "Which Article of the 1987 Philippine Constitution contains the DECLARATION OF PRINCIPLES AND STATE POLICIES?",
    choices: ["A. Article I", "B. Article II", "C. Article III", "D. Article IV"],
    answer: "B",
    explanation: "Article II of the 1987 Constitution is titled 'Declaration of Principles and State Policies.'"
  },
  {
    num: 148,
    text: "Under R.A. 6713, which of the following is NOT among the norms of conduct required of public officials and employees?",
    choices: [
      "A. Commitment to public interest",
      "B. Professionalism",
      "C. Accumulation of personal wealth",
      "D. Justness and sincerity"
    ],
    answer: "C",
    explanation: "R.A. 6713 promotes ethical standards like commitment to public interest, professionalism, and sincerity—personal wealth accumulation is NOT a prescribed norm."
  },
  {
    num: 149,
    text: "The Statement of Assets, Liabilities, and Net Worth (SALN) required under R.A. 6713 must be filed:",
    choices: [
      "A. Every month",
      "B. Every quarter",
      "C. Every year, on or before April 30",
      "D. Once upon appointment"
    ],
    answer: "C",
    explanation: "R.A. 6713 requires government employees to file their SALN annually, on or before April 30 of each year."
  },
  {
    num: 150,
    text: "Which branch of government in the Philippines exercises JUDICIAL POWER?",
    choices: [
      "A. The Legislature through Congress",
      "B. The Executive through the Cabinet",
      "C. The Judiciary through the Supreme Court and other courts",
      "D. The Civil Service Commission"
    ],
    answer: "C",
    explanation: "Under the doctrine of separation of powers, judicial power is vested in the Supreme Court and lower courts established by law."
  },
  {
    num: 151,
    text: "According to the 1987 Constitution, what is the HIGHEST LAW of the land in the Philippines?",
    choices: [
      "A. The Civil Code of the Philippines",
      "B. The Revised Penal Code",
      "C. The 1987 Philippine Constitution",
      "D. Republic Act 6713"
    ],
    answer: "C",
    explanation: "The 1987 Philippine Constitution is the supreme law; all other laws and acts must conform to it or they may be declared unconstitutional."
  },
  {
    num: 152,
    text: "Which of the following rights is guaranteed under the BILL OF RIGHTS (Article III) of the 1987 Constitution?",
    choices: [
      "A. The right to own agricultural land",
      "B. The right to a speedy, impartial, and public trial",
      "C. The right to a government job",
      "D. The right to a free college education"
    ],
    answer: "B",
    explanation: "Article III, Section 14 of the 1987 Constitution guarantees the right to a speedy, impartial, and public trial as part of due process."
  },
  {
    num: 153,
    text: "Under R.A. 6713, a gift or present from a private individual to a public official is allowed only if its value does not exceed:",
    choices: ["A. ₱200", "B. ₱300", "C. ₱500", "D. ₱1,000"],
    answer: "C",
    explanation: "R.A. 6713 allows government employees to accept gifts only if the value does not exceed ₱5,000 under later guidelines, but the original threshold under the implementing rules was ₱500 for nominal/token gifts."
  },
  {
    num: 154,
    text: "Which international document, adopted in 1948 by the United Nations, serves as the foundation of international human rights law?",
    choices: [
      "A. Convention on the Rights of the Child",
      "B. Geneva Convention",
      "C. Universal Declaration of Human Rights",
      "D. Kyoto Protocol"
    ],
    answer: "C",
    explanation: "The Universal Declaration of Human Rights (UDHR), adopted by the UN in 1948, is the foundational global framework for international human rights law."
  },
  {
    num: 155,
    text: "What does the principle of SOVEREIGNTY mean in the context of the Philippine state?",
    choices: [
      "A. The President is the supreme ruler of the nation.",
      "B. The Philippines is subject to the laws of the United Nations.",
      "C. The Filipino people possess the ultimate political power and authority.",
      "D. Only Congress can make laws affecting the nation."
    ],
    answer: "C",
    explanation: "Sovereignty means that supreme political authority belongs to the people; this is embodied in Article II, Section 1 of the 1987 Constitution."
  },
  {
    num: 156,
    text: "SITUATIONAL: A private company offers a government office a large donation for a public project in exchange for expedited processing of its permits. This is BEST described as:",
    choices: [
      "A. Public-private partnership",
      "B. Corporate social responsibility",
      "C. Bribery or graft under R.A. 3019",
      "D. A legitimate procurement process"
    ],
    answer: "C",
    explanation: "Offering money or gifts in exchange for expedited official action is bribery and constitutes graft under R.A. 3019 (Anti-Graft and Corrupt Practices Act)."
  },
  {
    num: 157,
    text: "Which law in the Philippines specifically governs the ANTI-GRAFT AND CORRUPT PRACTICES of public officers?",
    choices: ["A. R.A. 6713", "B. R.A. 3019", "C. R.A. 9485", "D. R.A. 7160"],
    answer: "B",
    explanation: "R.A. 3019, or the Anti-Graft and Corrupt Practices Act, specifically penalizes corrupt practices of public officials."
  },
  {
    num: 158,
    text: "The Philippine Clean Air Act is Republic Act No.:",
    choices: ["A. R.A. 8749", "B. R.A. 9003", "C. R.A. 9275", "D. R.A. 7586"],
    answer: "A",
    explanation: "R.A. 8749 is the Philippine Clean Air Act of 1999, which provides a comprehensive air pollution control policy."
  },
  {
    num: 159,
    text: "Under the 1987 Constitution, how many members compose the House of Representatives, including those appointed by the President?",
    choices: ["A. Not more than 200", "B. Not more than 250", "C. Not more than 300", "D. Not more than 350"],
    answer: "C",
    explanation: "Article VI of the 1987 Constitution states that the House of Representatives shall be composed of not more than 250 members, unless otherwise provided by law—current law allows up to 300 members."
  },
  {
    num: 160,
    text: "Which of the following best defines HUMAN RIGHTS?",
    choices: [
      "A. Rights granted only to citizens of a country by their government",
      "B. Privileges earned through merit or social status",
      "C. Inherent rights of all human beings regardless of nationality, race, sex, or religion",
      "D. Rights that can be waived or surrendered under any circumstances"
    ],
    answer: "C",
    explanation: "Human rights are universal, inherent, and inalienable—they belong to all people by virtue of their humanity, regardless of background."
  },
  {
    num: 161,
    text: "Republic Act 9003, also known as the Ecological Solid Waste Management Act, PROHIBITS which of the following practices?",
    choices: [
      "A. Segregation of biodegradable and non-biodegradable waste",
      "B. Open burning of solid waste in any form",
      "C. Establishment of material recovery facilities",
      "D. Composting of biodegradable materials"
    ],
    answer: "B",
    explanation: "R.A. 9003 explicitly prohibits open burning of solid waste as it contributes to air pollution and environmental degradation."
  },
  {
    num: 162,
    text: "The 1987 Philippine Constitution mandates the state to protect and promote the right to ________ and instill health consciousness among Filipinos.",
    choices: ["A. free healthcare", "B. health", "C. free medicine", "D. health insurance"],
    answer: "B",
    explanation: "Article II, Section 15 of the 1987 Constitution states that the State shall protect and promote the right to health of the people."
  },
  {
    num: 163,
    text: "SITUATIONAL: A government employee receives a call from a relative asking for 'facilitation' of a business permit application in exchange for money. The employee should:",
    choices: [
      "A. Accept the offer since it benefits a family member.",
      "B. Refuse and remind the relative that facilitation fees are illegal under R.A. 9485.",
      "C. Ask for a lower amount to reduce the offense.",
      "D. Refer the relative to a fixers' network to avoid personal involvement."
    ],
    answer: "B",
    explanation: "R.A. 9485 (Anti-Red Tape Act) prohibits fixers and facilitation fees; the ethical and legal duty is to refuse and explain the law."
  },
  {
    num: 164,
    text: "Which of the following best describes the concept of SUSTAINABLE DEVELOPMENT?",
    choices: [
      "A. Maximizing natural resource extraction to fund economic growth",
      "B. Prioritizing industrial development above environmental concerns",
      "C. Meeting the needs of the present without compromising the ability of future generations to meet their own needs",
      "D. Focusing development exclusively in urban areas"
    ],
    answer: "C",
    explanation: "The Brundtland Commission defined sustainable development as meeting present needs without compromising the capacity of future generations to meet theirs."
  },
  {
    num: 165,
    text: "Under the 1987 Constitution, what is the minimum age requirement to run for President of the Philippines?",
    choices: ["A. 30 years old", "B. 35 years old", "C. 40 years old", "D. 45 years old"],
    answer: "C",
    explanation: "Article VII, Section 2 of the 1987 Constitution requires that a presidential candidate be at least 40 years of age on the day of the election."
  },
  {
    num: 166,
    text: "Which section of the 1987 Constitution establishes the CIVIL SERVICE SYSTEM as a career system based on MERIT AND FITNESS?",
    choices: ["A. Article VII", "B. Article VIII", "C. Article IX-B", "D. Article XI"],
    answer: "C",
    explanation: "Article IX-B (Civil Service Commission) provides for a merit-based civil service system for government employees."
  },
  {
    num: 167,
    text: "Which of the following human rights is considered NON-DEROGABLE—meaning it CANNOT be suspended even during a state of emergency?",
    choices: [
      "A. Right to freedom of movement",
      "B. Right to freedom of expression",
      "C. Right against torture and cruel treatment",
      "D. Right to peaceful assembly"
    ],
    answer: "C",
    explanation: "Under international human rights law, the prohibition against torture and cruel, inhuman, or degrading treatment is absolute and cannot be suspended under any circumstances."
  },
  {
    num: 168,
    text: "SITUATIONAL: You are reviewing a proposal that would fast-track an infrastructure project by waiving environmental impact assessment (EIA) requirements. As a responsible public official, you should:",
    choices: [
      "A. Approve it since the project is beneficial to the public.",
      "B. Approve it since your supervisor supports it.",
      "C. Reject it because EIA requirements cannot be legally waived under P.D. 1586.",
      "D. Defer the decision until after the project begins."
    ],
    answer: "C",
    explanation: "P.D. 1586 (Philippine Environmental Impact Statement System) requires EIA for projects with significant environmental impact; this cannot be legally waived."
  },
  {
    num: 169,
    text: "The 1987 Constitution declares that the Philippines RENOUNCES WAR as an instrument of national policy and adopts the generally accepted principles of international law as part of the law of the land. This principle is found in:",
    choices: ["A. Article I", "B. Article II, Section 2", "C. Article III, Section 1", "D. Article VII"],
    answer: "B",
    explanation: "Article II, Section 2 of the 1987 Constitution enshrines the Philippines' renunciation of war and adoption of international law."
  },
  {
    num: 170,
    text: "SITUATIONAL: A newly appointed government official discovers that a long-standing office practice violates the Civil Service Law. The official's best course of action is to:",
    choices: [
      "A. Maintain the practice to avoid disrupting the office culture.",
      "B. Immediately terminate all employees involved in the practice.",
      "C. Document the violation, consult the legal unit, and work to correct the practice through proper channels.",
      "D. Report the previous officials to the media."
    ],
    answer: "C",
    explanation: "The proper and lawful approach is to document the issue, seek legal guidance, and correct the practice through appropriate institutional channels."
  }
];

// ============================================================
// ORGANIZE QUESTIONS INTO SECTIONS
// ============================================================
const sections = [
  {
    id: "english",
    title: "Verbal Ability (English)",
    subtitle: "Questions 1–40",
    icon: "📘",
    color: "#2563eb",
    questions: englishQuestions.filter(q => q.num >= 1 && q.num <= 40)
  },
  {
    id: "filipino",
    title: "Verbal Ability (Filipino)",
    subtitle: "Questions 41–70",
    icon: "🇵🇭",
    color: "#dc2626",
    questions: englishQuestions.filter(q => q.num >= 41 && q.num <= 70)
  },
  {
    id: "numerical",
    title: "Numerical Ability",
    subtitle: "Questions 71–110",
    icon: "🔢",
    color: "#16a34a",
    questions: englishQuestions.filter(q => q.num >= 71 && q.num <= 110)
  },
  {
    id: "analytical",
    title: "Analytical Ability",
    subtitle: "Questions 111–145",
    icon: "🧠",
    color: "#7c3aed",
    questions: englishQuestions.filter(q => q.num >= 111 && q.num <= 145)
  },
  {
    id: "geninfo",
    title: "General Information",
    subtitle: "Questions 146–170",
    icon: "🏛️",
    color: "#b45309",
    questions: englishQuestions.filter(q => q.num >= 146 && q.num <= 170)
  }
];

// ============================================================
// ALL LOGIC RUNS AFTER DOM IS FULLY LOADED
// This fixes "startQuiz is not defined" and "Loading question..."
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

  // ----------------------------------------------------------
  // QUIZ STATE
  // ----------------------------------------------------------
  let state = {
    currentSectionIndex: 0,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    answered: false,
    sectionScores: [],
    totalCorrect: 0,
    totalAnswered: 0,
    adCountdown: 5,
    adTimer: null
  };

  // ----------------------------------------------------------
  // DOM REFERENCES — queried here, after DOM is ready
  // ----------------------------------------------------------
  const dom = {
    splashScreen:      document.getElementById('splashScreen'),
    quizScreen:        document.getElementById('quizScreen'),
    finishedScreen:    document.getElementById('finishedScreen'),
    adOverlay:         document.getElementById('adOverlay'),
    sectionScoreModal: document.getElementById('sectionScoreModal'),
    sectionBadge:      document.getElementById('sectionBadge'),
    progressBar:       document.getElementById('progressBar'),
    progressText:      document.getElementById('progressText'),
    questionNum:       document.getElementById('questionNum'),
    questionText:      document.getElementById('questionText'),
    choicesContainer:  document.getElementById('choicesContainer'),
    explanationBox:    document.getElementById('explanationBox'),
    explanationText:   document.getElementById('explanationText'),
    nextBtn:           document.getElementById('nextBtn'),
    scoreTracker:      document.getElementById('scoreTracker'),
    modalSectionTitle: document.getElementById('modalSectionTitle'),
    modalScoreText:    document.getElementById('modalScoreText'),
    modalScorePct:     document.getElementById('modalScorePct'),
    modalRemark:       document.getElementById('modalRemark'),
    modalNextBtn:      document.getElementById('modalNextBtn'),
    adCountdownEl:     document.getElementById('adCountdown'),
    finalScore:        document.getElementById('finalScore'),
    finalPct:          document.getElementById('finalPct'),
    finalRemark:       document.getElementById('finalRemark'),
    sectionBreakdown:  document.getElementById('sectionBreakdown'),
    restartBtn:        document.getElementById('restartBtn'),
    startBtn:          document.getElementById('startBtn')
  };

  // ----------------------------------------------------------
  // WIRE UP BUTTON EVENT LISTENERS (replaces onclick attributes)
  // ----------------------------------------------------------
  dom.startBtn.addEventListener('click',    startQuiz);
  dom.nextBtn.addEventListener('click',     nextQuestion);
  dom.modalNextBtn.addEventListener('click', proceedFromScoreModal);
  dom.restartBtn.addEventListener('click',  restartQuiz);

  // ----------------------------------------------------------
  // START QUIZ
  // ----------------------------------------------------------
  function startQuiz() {
    state.quizStarted = true;
    dom.splashScreen.classList.remove('active');
    dom.splashScreen.classList.add('hidden');
    dom.quizScreen.classList.remove('hidden');
    dom.quizScreen.classList.add('active');
    loadQuestion();
  }

  // ----------------------------------------------------------
  // LOAD CURRENT QUESTION
  // ----------------------------------------------------------
  function loadQuestion() {
    const section = sections[state.currentSectionIndex];
    const q = section.questions[state.currentQuestionIndex];
    if (!q) return;

    state.selectedAnswer = null;
    state.answered = false;

    // Section badge styling
    dom.sectionBadge.textContent = section.icon + ' ' + section.title;
    dom.sectionBadge.style.background   = section.color + '22';
    dom.sectionBadge.style.color        = section.color;
    dom.sectionBadge.style.borderColor  = section.color + '44';

    // Progress bar
    const total = section.questions.length;
    const done  = state.currentQuestionIndex;
    const pct   = Math.round((done / total) * 100);
    dom.progressBar.style.width      = pct + '%';
    dom.progressBar.style.background = section.color;
    dom.progressText.textContent     = 'Question ' + (done + 1) + ' of ' + total;

    // Question text
    dom.questionNum.textContent  = 'Question ' + q.num;
    dom.questionText.innerHTML   = q.text.replace(/\n/g, '<br>');

    // Build answer choices
    dom.choicesContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.choices.forEach(function (choice, idx) {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.dataset.answer = letters[idx];
      btn.innerHTML =
        '<span class="choice-letter">' + letters[idx] + '</span>' +
        '<span class="choice-text">' + choice.substring(3) + '</span>';
      btn.addEventListener('click', function () { selectAnswer(letters[idx], btn); });
      dom.choicesContainer.appendChild(btn);
    });

    // Hide explanation and next button
    dom.explanationBox.classList.add('hidden');
    dom.nextBtn.classList.add('hidden');

    updateScoreTracker();
  }

  // ----------------------------------------------------------
  // SELECT ANSWER
  // ----------------------------------------------------------
  function selectAnswer(letter, btn) {
    if (state.answered) return;
    state.answered       = true;
    state.selectedAnswer = letter;

    const section   = sections[state.currentSectionIndex];
    const q         = section.questions[state.currentQuestionIndex];
    const isCorrect = (letter === q.answer);

    if (isCorrect) state.totalCorrect++;
    state.totalAnswered++;

    // Highlight all buttons
    const allBtns = dom.choicesContainer.querySelectorAll('.choice-btn');
    allBtns.forEach(function (b) {
      b.disabled = true;
      if (b.dataset.answer === q.answer) {
        b.classList.add('correct');
      } else if (b.dataset.answer === letter && !isCorrect) {
        b.classList.add('incorrect');
      }
    });

    // Show explanation
    dom.explanationText.textContent = q.explanation;
    dom.explanationBox.classList.remove('hidden');
    dom.explanationBox.className =
      'explanation-box ' + (isCorrect ? 'correct-exp' : 'incorrect-exp');

    // Show next / finish button
    dom.nextBtn.classList.remove('hidden');
    dom.nextBtn.textContent = isLastInSection() ? 'Finish Section →' : 'Next Question →';

    updateScoreTracker();
  }

  // ----------------------------------------------------------
  // NEXT QUESTION
  // ----------------------------------------------------------
  function nextQuestion() {
    if (isLastInSection()) {
      endSection();
    } else {
      state.currentQuestionIndex++;
      loadQuestion();
    }
  }

  function isLastInSection() {
    return state.currentQuestionIndex >=
      sections[state.currentSectionIndex].questions.length - 1;
  }

  // ----------------------------------------------------------
  // END SECTION → AD → SCORE MODAL
  // ----------------------------------------------------------
  function endSection() {
    const section = sections[state.currentSectionIndex];
    const prevTotal = state.sectionScores.reduce(function (s, x) { return s + x.score; }, 0);
    const sectionScore = state.totalCorrect - prevTotal;

    state.sectionScores.push({
      title: section.title,
      icon:  section.icon,
      color: section.color,
      score: sectionScore,
      total: section.questions.length
    });

    showAd(function () {
      showSectionScore(sectionScore, section.questions.length, section);
    });
  }

  // ----------------------------------------------------------
  // AD OVERLAY (5-second countdown)
  // ----------------------------------------------------------
  function showAd(callback) {
    dom.adOverlay.classList.remove('hidden');
    state.adCountdown = 5;
    dom.adCountdownEl.textContent = state.adCountdown;

    state.adTimer = setInterval(function () {
      state.adCountdown--;
      dom.adCountdownEl.textContent = state.adCountdown;
      if (state.adCountdown <= 0) {
        clearInterval(state.adTimer);
        dom.adOverlay.classList.add('hidden');
        if (callback) callback();
      }
    }, 1000);
  }

  // ----------------------------------------------------------
  // SECTION SCORE MODAL
  // ----------------------------------------------------------
  function showSectionScore(score, total, section) {
    const pct = Math.round((score / total) * 100);

    dom.modalSectionTitle.textContent = section.icon + ' ' + section.title + ' – Section Complete';
    dom.modalScoreText.textContent    = score + ' out of ' + total;
    dom.modalScorePct.textContent     = pct + '%';
    dom.modalScorePct.style.color     = section.color;
    dom.modalRemark.textContent       = getRemark(pct);
    dom.modalRemark.className         = 'modal-remark ' + getRemarkClass(pct);

    const isLast = state.currentSectionIndex >= sections.length - 1;
    dom.modalNextBtn.textContent = isLast ? 'View Final Results 🎓' : 'Next Section →';

    dom.sectionScoreModal.classList.remove('hidden');
  }

  function proceedFromScoreModal() {
    dom.sectionScoreModal.classList.add('hidden');
    if (state.currentSectionIndex >= sections.length - 1) {
      showFinalResults();
    } else {
      state.currentSectionIndex++;
      state.currentQuestionIndex = 0;
      loadQuestion();
    }
  }

  // ----------------------------------------------------------
  // FINAL RESULTS
  // ----------------------------------------------------------
  function showFinalResults() {
    dom.quizScreen.classList.remove('active');
    dom.quizScreen.classList.add('hidden');
    dom.finishedScreen.classList.remove('hidden');
    dom.finishedScreen.classList.add('active');

    const total = 170;
    const score = state.totalCorrect;
    const pct   = Math.round((score / total) * 100);

    dom.finalScore.textContent  = score + ' / ' + total;
    dom.finalPct.textContent    = pct + '%';
    dom.finalRemark.textContent = getRemark(pct);
    dom.finalRemark.className   = 'final-remark ' + getRemarkClass(pct);

    dom.sectionBreakdown.innerHTML = '';
    state.sectionScores.forEach(function (s) {
      const spct = Math.round((s.score / s.total) * 100);
      const div  = document.createElement('div');
      div.className = 'breakdown-item';
      div.innerHTML =
        '<div class="breakdown-header">' +
          '<span>' + s.icon + ' ' + s.title + '</span>' +
          '<span style="color:' + s.color + ';font-weight:700">' +
            s.score + '/' + s.total + ' (' + spct + '%)' +
          '</span>' +
        '</div>' +
        '<div class="breakdown-bar-bg">' +
          '<div class="breakdown-bar" style="width:' + spct + '%;background:' + s.color + '"></div>' +
        '</div>';
      dom.sectionBreakdown.appendChild(div);
    });
  }

  // ----------------------------------------------------------
  // SCORE TRACKER
  // ----------------------------------------------------------
  function updateScoreTracker() {
    const answered = state.totalAnswered;
    const score    = state.totalCorrect;
    const pct      = answered > 0 ? Math.round((score / answered) * 100) : 0;
    dom.scoreTracker.innerHTML =
      '✅ ' + score + ' correct &nbsp;|&nbsp; 📝 ' +
      answered + '/170 answered &nbsp;|&nbsp; 🎯 ' + pct + '%';
  }

  // ----------------------------------------------------------
  // REMARKS
  // ----------------------------------------------------------
  function getRemark(pct) {
    if (pct >= 90) return 'Outstanding! Excellent performance!';
    if (pct >= 80) return 'Very Good! You are on track to pass.';
    if (pct >= 70) return 'Good! Passing threshold is near.';
    if (pct >= 60) return 'Fair. Keep reviewing and practicing.';
    return 'Needs Improvement. Focus on weak areas.';
  }

  function getRemarkClass(pct) {
    if (pct >= 80) return 'remark-pass';
    if (pct >= 60) return 'remark-fair';
    return 'remark-fail';
  }

  // ----------------------------------------------------------
  // RESTART
  // ----------------------------------------------------------
  function restartQuiz() {
    state = {
      currentSectionIndex: 0,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      answered: false,
      sectionScores: [],
      totalCorrect: 0,
      totalAnswered: 0,
      adCountdown: 5,
      adTimer: null
    };

    dom.finishedScreen.classList.remove('active');
    dom.finishedScreen.classList.add('hidden');
    dom.splashScreen.classList.remove('hidden');
    dom.splashScreen.classList.add('active');
    dom.adOverlay.classList.add('hidden');
    dom.sectionScoreModal.classList.add('hidden');
    updateScoreTracker();
  }

}); // END DOMContentLoaded
