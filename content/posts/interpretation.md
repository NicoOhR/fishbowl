---
title: "On Some Philosophy of Interpretability"
date: 2026-09-30
---

With increasing frequency I have been talking to friends and family of various
technical capacities about AI. There is a lot to the conversation about the uber
intelligence that is to come, and I really have no standing to tell you about
what it can and cannot do, what it will do, and what its greater implications
towards humanity are. One specific niche to this conversation that I have staked
out a little watchpost in has been interpretability research. This article
partially expresses why I find this subject so interesting, and more
importantly, it should clarify what the claim "we don't understand how AI works"
actually means. On its face the claim is a technical one: we don't understand
how it works now, in the same way we did not understand the composition of an
atom or we did not understand magnetism. In actuality, because of AI is an
object constructed by humans from end to end, the claim underlying "we don't
understand how AI works" is an epistemological question: why is it that even
with complete access, we comprehend so little of it? When claimed, the statement
slides between the technical ("we do not understand, but we will") and the
epistemological ("this is not the kind of understanding that is completable").
I make the case that there is in fact a real limit of what we can understand
about AI, that mathematics has been in this scenario before, and that current
interpretability research already works as though it knows this. To argue this,
we first must develop the ideas of Leibniz, Kant, and Hegel, only on the most
perfunctory levels to allow us to use their ideas to our means.

To be clear, I am not an interpretability researcher. I've just read the arXiv
articles. Further, I am not a mathematician. I will only soon have an undergrad
degree in the subject. And further yet, I am not a philosopher. I just like to
read. I have tried to make this article accessible to the philosopher who does
not know math, the mathematician who does not know how to program, and the
programmer who does not know philosophy. As such, some of the ideas presented
below are crude caricatures. I've attempted to maintain a bibliography for the
interested reader to find out more from better qualified sources.


## A Background

Gottfried Wilhelm Leibniz, of calculus fame, worked and derived before the
separation proper of philosophy from the rest of the natural sciences. His
results, in any one of the many fields he wrote on and especially in
mathematics, are underscored by a fundamental belief that through a process of
reason all can become fully known. The primary takeaway we stop here to write
down is the "principle of sufficient reason", which states that nothing is
without reason, and as such everything is in principle intelligible. "In
principle intelligible" does not mean to Leibniz "intelligible *to us* on
a finite horizon". He means that all truths can be arrived at through analysis,
with some truths available only to an intelligence capable of infinite analysis.
The language this analysis would take place on was dubbed the characteristica
universalis. His correspondent Christian Wolff would popularize a version of
Leibniz's philosophy, and eventually lent his name to one half of the explicitly
named "Leibnizian-Wolffian philosophy", a label coined against his will.
Roughly, this is the beginning of German rationalism, which was dominant in
German academia until Immanuel Kant's *Critique of Pure Reason*.

Kant, by responding to Wolff's dogmatism, forms the position he holds, which,
for practical purposes, we mostly omit. What we extract from Kant is the upper
bounds he places on what reason alone can know, and some of the mechanisms
behind those bounds. He claims that reason can know appearances, but not
things-in-themselves. Kant phrases this as a "Copernican Turn": he claims that
instead of our cognition conforming to objects in reality, objects conform to
our cognition. The distinction is between "phenomena", which are things as they
appear to us in space and time, and "noumena", which are things as they are in
themselves apart from our faculties. We can think about noumena, but we cannot
know noumena. This is a hard line which we may never cross. We do not interact
with the world as a raw data stream but rather process it through the forms
of intuition (space and time) and the concepts of the understanding (causality,
among others). What we get back after interpreting reality through these is
appearance, that is to say, reality is partially our
own prescription. Critically, the argument is not that we should abandon the
ambitions of science, say, a systematic understanding of the natural world, but
that we must understand that this system is not something that can be held in
hand. Another concept which we should make clear now is that Kant considered
reason as being the object which critiques itself: reason, to him, is defendant,
plaintiff and judge. Reason must play all three roles because reason can
overreach when we apply it beyond where experience can check it. This is all
very complex, and some gaps in understanding are to be expected. Let us forge on
in full confidence, believing that as the argument develops, a more cohesive
understanding will form.

Some years later Georg Wilhelm Friedrich Hegel publishes a lot of famously
uninterpretable texts in large part responding to Kant. We omit most of Hegel's
ideas here as well, but pause to extract the immanent method. We vulgarize the
method slightly: immanent method is the process of evaluating an object (a text,
a rhetorical position, a society, a people, etc.) on its own terms, by its own
definitions, and finding contradictions within it. This contradiction, at least
for Hegel, is productive: through contradiction the object undergoes
*Aufhebung*. The verb *aufheben* in ordinary German means simultaneously to
abolish, to preserve, and to lift up. English translators settled on "sublate".
Many words have been written on it. Although presented chronologically, no
approach entirely deprecates the last, and depending on who you are talking to,
maybe not at all.

## An Example

Having presented a condensed and grossly simplified interval of a strain of
Western philosophy, I will present a similarly narrow history of mathematical
thought. A full if compressed treatment of the history of epistemological crises
in mathematics is a project I've been slowly forming for some time now,
so consider this a sneak peek. As briefly mentioned, Leibniz himself was
a mathematician, and is debatably remembered best for his work on early integral
and differential calculus. His formalism and notations are still mostly the ones
used in the modern day. We will not be discussing whether it was Sir Isaac
Newton or Leibniz who was the first to discover calculus such as it was at the
time, though as far as mathematical spats are concerned I think this is one of
the more interesting disputes. Leibniz himself did not view his calculus as
separate from his philosophical theory. Leibniz's dream, and that of
mathematicians for generations after him, was of a language which carries out
reasoning through symbolic manipulation automatically. *Calculemus*, let us
calculate, so that we may resolve all disputes, he declared. His calculus was
based on the concept of the infinitesimal, which at the time was not yet fully
rigorous. Leibniz himself referred to infinitesimals as "useful fictions".
Eventually, the $\varepsilon$-$\delta$ process operationalized a very similar
looking idea which displaced the infinitesimal as the basis of analysis. Even
so, Leibniz's "useful fictions" were nonfictionally successful. Even though we
could not say exactly what an infinitesimal was, calculus worked, and we had
bridges and kinematics to show for it.

Mathematicians pressed onwards in search of a universal calculus wherein we
might describe all things. At the beginning of the 20th century, a series of
truly quite tragic internal inconsistencies in the foundations arose, most
famously Russell's paradox, which questioned the legitimacy of the foundations
of mathematics. Around this time, David Hilbert proposed that all existing
mathematical theories be grounded in a set of axioms which could be proven to be
consistent through a finite procedure, a project which would become known as
"Hilbert's Program". In 1931, Kurt Gödel published his now famous incompleteness
theorems, which showed that no such set of axioms could be both consistent and
complete: a theory strong enough to express arithmetic cannot prove (or
disprove) every statement that can be stated in its own terms, and cannot prove
that it is itself not self-contradictory. On a basic level this result made
clear what I've termed Leibnizian Disappointment: there was no calculus with
which all things could be described, at least not one whose statements a finite
procedure could check. The mechanical route to all truth, as it were, was not
achievable.

Still, mathematics persisted. The mathematician did not throw up his hands and
proclaim that no truth could ever be asserted. After all, the accomplishments of
the last centuries remained standing. Even before Gödel's results, naive set
theory evolved into Zermelo-Fraenkel set theory in response to Russell's
paradox, sublating the inconsistencies of the set of all sets not containing
themselves into its axioms. What changed was not the process of mathematics but
perhaps its esprit de corps. The process of mathematics, of making choices,
exploring their consequences, and revising them again, did not change, but the
expectation that one day we would find a perfect set of choices, one so natural
and clear that it would hardly even constitute a choice, stopped being the
organizing goal of the field.!!!If I could ask you to specifically remember any
one thing from this article, it would be this. Theorem proving is important and
difficult, to be sure, and a great deal of the work that mathematicians do, or
at this rate, did. However, it's still only one half of the process, choosing
problems and the definitions which describe them is what prompts
understanding!!! A program can now be evaluated intrinsically: contradictions
within it would arise and eventually be sublated back into it. In modern
mathematics, we admit alternative foundations to build on, such as category
theory and HoTT. Plurality is now far from a crisis.

This narrative of mathematics began with a Leibnizian ideal. Gödel presented
a Kantian crisis to this ideal, wherein reason (an axiom system) working with
its own tools draws its own limits. The process of mathematics does not change
but becomes more explicitly Hegelian: contradictions from within a mathematical
project lead to revisions and sublation.


## An Application

In computer science land (which shares a border with, and is often a vassal of,
mathematicstan) the narrative progresses in a similar fashion and around the
same time scale. Leibniz is often considered an early!!!sometimes, the
earliest!!! computer scientist. He contributed a lot to early literature on the
binary number system and possessed a well documented passion for calculators. As
with anything else involving Leibniz, this was part of the larger philosophical
project. Along with the dream of a universal logical language we discussed
earlier, the characteristica universalis, Leibniz wrote on the calculus
ratiocinator, a framework for calculation of that logical language. Norbert
Wiener, "your favorite technologist's favorite technologist", suggested that
Leibniz be considered the patron saint of cybernetics in his 1948 necronomicon
"Cybernetics: Or Control and Communication in the Animal and the Machine".
Direct technical influence is sometimes difficult to establish reasonably, but
at least on the level of self-image, Leibniz is a central figure of the early
thinking machine.

About a century later, Babbage designed but never quite finished constructing
what could be recognized as the first digital calculator, the difference
engine!!!This title might be more correctly given to Napier's bones, though I am
sure you'll forgive this trespass!!!. He and the Lady Augusta Ada King, Countess
of Lovelace, would go on to write the first computer programs for the analytical
engine, the successor to the difference engine which was also never constructed
but fully designed. Lovelace herself enthusiastically took to the study of the
analytical engine, translating Babbage's only lecture on the subject into
English from a French attendee's notes, and appending to it her own notes which
were about three times as long. In the first of her notes she says:

> It may be desirable to explain, that by the word operation, we mean any
> process which alters the mutual relation of two or more things, be this
> relation of what kind it may. This is the most general definition, and would
> include all subjects in the universe. […] But the science of operations, as
> derived from mathematics more especially, is a science of itself, and has its
> own abstract truth and value; just as logic has its own peculiar truth and
> value, independently of the subjects to which we may apply its reasonings and
> processes.

Indeed, Lovelace dreamed Leibniz's dream. Eventually, Lovelace and Leibniz
hoped, a science of operations which encodes all things independent of domain
would emerge; this is the calculus ratiocinator. She states the other part of
Leibniz we concern ourselves with, legability (the ability to understand things
in principle) in the last of the notes: !!!This quote specifically was responded
to in Alan Turing's [Computing Machinery and
Intelligence](https://courses.cs.umbc.edu/471/papers/turing.pdf), which is
a fascinating piece of very very early thinking-machine philosophy. His response
to Lovelace's "objection" here is that machines surprise him all the time: her
claim rests on the fallacy that once a fact is presented, all consequences
appear in the mind at once. However, the computer allows us to explore the
consequences of facts mechanistically. Is this "working out of consequences from
data and general principles" not a sort of intelligence?!!!

> The Analytical Engine has no pretensions whatever to originate any thing. It
> can do whatever we know how to order it to perform. It can follow analysis;
> but it has no power of anticipating any analytical relations or truths.

This is the principle of sufficient reason, applied in a limited sense to the
computer: all things the computer does follow the instructions set to it, and as
such the analysis is, in principle, understood.

We go on in this manner for another century and in that time calculators and
computers which are both designed *and* constructed come about. One of the
greats of that time was one Alan Turing, who likely requires no introduction.
Turing presented a very similar result to Gödel for computability called the
Halting Problem.!!!With a few nuances, Turing's problem and its generalization
Rice's theorem present a basically equivalent "diagonal argument" to Gödel's
first incompleteness theorem. I recommend, along with the rest of the blog,
[Scott Aaronson's post on the matter](https://scottaaronson.blog/?p=710)!!! For
those unfamiliar, or as a quick refresher:



