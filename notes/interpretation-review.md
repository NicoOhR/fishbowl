# Review: "On Some Philosophy of Interpretability" (full draft through *A Renewal*)

Line numbers refer to `content/posts/interpretation.md` as of this review.
Mechanical fixes have already been applied; everything below is for you to
decide on.

---

## 1. Whole-article issues

### 1.1 "Program" collides across sections (L154)
In *A Disappointment*: "A program can now be evaluated intrinsically…" means
a *research* program (as in Hilbert's Program). One section later, "program"
means a computer program, and it carries your whole argument there. A reader who
carries the word forward will be confused. Suggest "a research program" or "a
mathematical project" here (L162 already says "a mathematical project", so the
second one would make the two match).

### 1.2 The most important sentence is in a sidenote (L149–154)
"If I could ask you to specifically remember any one thing from this article, it
would be this." Readers skim margins. If it really is *the* thing, it belongs in
the main text, maybe as the closing beat of the paragraph. Also check that it
pays off: the claim (choosing problems and definitions is what produces
understanding) is a natural fit for *An Interpretation*. Interpretability is,
to a large degree, the work of choosing the right definitions: features,
circuits, what counts as a "concept". If the payoff happens there, that's where
the reader should be reminded of this line.

### 1.3 Kant's wall vs. your horizon
*A Pedigree* says of noumena: "This is a hard line which we may never cross."
Your thesis for interpretability is that the limit is a *horizon*, not a wall.
You already have the seed in the same paragraph: "this system is not something
that can be held in hand." Make sure *An Interpretation* calls back to that
sentence explicitly, so the shift from wall to horizon reads as a development
of Kant and not as a contradiction of what you said about him. If you want
a source for the move, two candidates:
- Kant's own *regulative* use of reason (Appendix to the Transcendental
  Dialectic): systematic unity as a *focus imaginarius*, an end we steer toward
  without reaching.
- The Marburg neo-Kantians (Cohen, Natorp): the thing-in-itself as an
  *unendliche Aufgabe*, an infinite task.

### 1.4 Where does Hegel end up?
Hegel does real work in *A Disappointment* (ZF as sublation, the Hegelian
summary paragraph) and is absent from *A Renewal*, which is fine. But the intro
introduces three thinkers, and the math arc ends Hegelian. Readers will expect
*An Interpretation* to say something about whether interpretability has, could
have, or lacks a Hegelian moment. Even one paragraph on it ("interpretability
is still in its Kantian moment because…") would close the loop. If you deliberately
end on Kant, say so.

### 1.5 Characteristica vs. calculus ratiocinator: be consistent
- L52 (*Pedigree*): the *characteristica universalis* is "the language this
  analysis would take place in". Fine.
- L110–112 (*Disappointment*): the dream is "a language which carries out
  reasoning through symbolic manipulation automatically". That merges the
  language and the calculus into one thing.
- *Renewal* (L177–179, L207–209) separates them properly.

Small fix: in *Disappointment*, "a language, and a calculus over it, which
carries out reasoning…" or similar.

### 1.6 Intro promises vs. delivery (status check)
The intro promises three things:
1. a real limit to what we can understand about AI: set up by Gödel/Turing,
   to be delivered in *An Interpretation*;
2. mathematics has been here before: **delivered**;
3. interpretability already works as though it knows this: pending.

It also promises to explain the *slide* between the technical and the
epistemological readings. Nothing in the body comes back to that word yet. The
natural payoff is in *An Interpretation*: the Leibnizian programmer (end of
*Renewal*) hears the technical reading, and interpretability works on the
epistemological one. Naming the slide again there makes the intro feel
answered.

---

## 2. Section notes

### Intro
- **Disclaimer paragraph (L28–30), after your merge:** "I've just read the arXiv
  articles" now attaches to all three disclaimers, including philosopher and
  mathematician. "Further, I will soon have an undergrad degree in mathematics,
  and I just like to read" has lost the contrast that made "I just like to read"
  land (it used to answer "not a philosopher"). Consider pairing each disclaimer
  with its own qualifier again, or reordering so "I just like to read" follows
  "philosopher".
- **Bibliography:** the intro now promises a "mostly complete bibliography".
  Make sure it exists before publishing, and decide where it lives (end of the
  post, or a separate page).

### A Pedigree
- **Leibniz's infinite analysis (L48–51)** is a good addition, and it sets up
  Gödel nicely. Optionally, make the link explicit in *Disappointment*: Gödel
  rules out the *finite* calculus, which is exactly the part Leibniz himself
  reserved for an infinite intelligence. One clause would do it.
- No other notes; voice deferred as agreed.

### A Disappointment
- **The infinitesimals paragraph** ends on "calculus worked, and we had bridges and
  kinematics to show for it". That's a strong image, but it doesn't currently connect
  to anything. It's a ready-made parallel for *An Interpretation*: features
  and circuits may be "useful fictions" in exactly Leibniz's sense, concepts
  that work before (or without) a grounding in what the model "really" is.
  Also, they're appearances relative to our tools, which is a Kantian
  reading. Consider planting a forward reference, or just keep it in mind for
  the callback.
- **Lakatos sidenote (L163–166):** a very good fit. Lakatos was openly influenced
  by Hegel, and *Proofs and Refutations* is close to a textbook example of
  immanent method applied to mathematics. A half-sentence saying so would make
  the recommendation do some argumentative work.

### A Renewal
- **The Wiener paragraph (L180–185)** is still here; you planned to move it to
  *An Interpretation* next to McCarthy. Once it moves, the first paragraph ends
  on the *calculus ratiocinator*, which is a fine ending.
- **"a human-designated purpose by design" (L286–287):** "designated" and "by
  design" say the same thing twice. Drop one.
- **"in a way that mathematical objects do not always":** this is a good hedge, but
  it raises a question the reader may want answered. Mathematical objects *sometimes*
  serve a designated purpose? One clause of example or explanation, or drop
  "always".
- **The section title "A Renewal"** reads well. What gets renewed is the Leibnizian
  self-image, despite Turing. You might make that explicit once in the text
  ("the creed was renewed rather than revised"), so the title clearly matches
  something in the section.
- **Hoare transition (L275–278):** "What Hoare is stating is an aspiration, a sort
  of justification for his methodology" leads into the 1980 quote, and the
  quote then shows *how* the aspiration is met: by construction, through
  simplicity. A short connective would make that explicit, e.g. "…an
  aspiration, and one he knew had to be earned:" before the quote.

---

## 3. Threads to pick up in *An Interpretation*

A checklist of things the first three sections set up, for when you work out
the argument on paper:

- [ ] Wiener + McCarthy; symbolic AI as the Leibnizian thinking machine
      (knowledge kept in sentences someone wrote).
- [ ] The move to learned weights: the programs nobody wrote, i.e. the
      *not-most* programs from the end of *Renewal*.
- [ ] Name the slide (technical vs. epistemological) and who stands on each side.
- [ ] The Kantian move: the model as it appears through our tools; callback to
      "not something that can be held in hand" (wall → horizon, §1.3).
- [ ] Useful fictions: infinitesimals ↔ features/circuits (optional, §2).
- [ ] Choosing definitions produces understanding (§1.2 payoff).
- [ ] Hegel's place, or explicit absence (§1.4).
- [ ] Distill / Anthropic as the concrete practice.
- [ ] Turing's learning-machine sidenote callback (optional): his answer to
      Lovelace is what makes interpretability necessary.
