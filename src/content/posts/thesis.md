---
title: "Crime Prediction - Surviving the predictions made by the limited computer models"
date: 2019-12-17T13:35:29+01:00
draft: false
layout: "single"
---

<section data-section-toggled="false">

<button class="folder-toggle">

# Abstract

</button>
<div class="content">

Algorithmic crime prediction is a new technology promising to make policing more efficient by predicting the likelihood of criminal activity in a geographical region or the likelihood of a person being victim or perpetrator of a crime in the future, thus focusing policing resources where they matter. These predictions are derived from mathematical models of human behaviour based on sociological theories, vast amounts of personal data and databases of criminal history. 

This software is usually developed by private companies and sold to governments without any public overview. This work argues that algorithmic crime prediction software should undergo public safety trials before it's used. Design plays an important role as a translation tool of the abstract nature of software, its limitations and the biases that it inherited from its human developers. 

The first chapter positions computer and software as a space that we live in and addresses the myth of computer neutrality. The second chapter is a collection of crime prediction algorithms and the issues of algorithmic crime prediction. The last chapter is devoted to the design project and concepts and projects that influenced it.

##

</div>
</section>




<section data-section-toggled="false">

<button class="folder-toggle">
<span class="pretitle">Introduction</span> 

# Witch finding and Crime prediction


</button>

<div class="content">

## Witch finding 

An old woman in a 17th century bohemian village attends mass sitting on a bench in the local church waiting for the sacramental bread. The priest puts the bread on her tongue, the woman takes it in and closes her mouth. Moments later she opens her mouth and takes the bread out and hides it in a tissue. 

She's spotted by an acolyte who then reports the incident to the priest. The woman undergoes horrible tortures until she confesses to spending nights dancing and having sex with the devil. Her confession triggers a chain reaction of further accusations and confessions in the village, leading to a witch purge where her neighbours are burnt at the stake.

This is a scene from a Czechoslovak 1970's movie Witch Hammer, a fictional story
based on the real records of witch trials that happened in Bohemia at the 5end
of the 17th century.<button data-toggle-content>(Witchhammer, 1970) <span>1</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Witchhammer (1970) Directed by Vávra V.,[DVD], Czechoslovakia, Filmové studio Barrandov</span></span> 

Witch hunts spread across most of Europe between the 15th and the 17th century
creating a new industry. The trials needed judges and lawyers. And also
proceedings outside of the court demanded labour that had to be paid for:
rewards for capturing the witch, the escort, the prison wardens, the accounting
of all charges and more. These costs were usually paid for by the confiscated
property of the witch. This created an incentive, not just to make the prisoner confess, but also to make this forcefully 'convicted' witch accuse other people in the village, based on even more fictional stories that were pushed exclusively by the witch finders themselves.

The details of these stories were often uncomfortably similar, regardless of the
country in which the confession was made. According to the lore – that seems to
have spread from Northern Italy to Scandinavia – a witch would seal the pact
with the devil by having sex with him. In their confessions the accused often
described sex as painful due to the fact that the devil's penis was cold as
ice. <button data-toggle-content>(The Burning Times, 1990)  <span>2</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">The Burning Times (1990) Directed by Read D.,[movie online] available at: https://www.youtube.com/watch?v=34ow_kNnoro</span></span>

We should dismiss the possibility that the devil was real and these witches were indeed conspiring in heretical activities and furthermore take into consideration that there were no mass media at the time and that witch trials usually took place in poorer, rural areas with even less means of communications than cities. How is it then possible that most confessions all over Europe were so similar? The answer comes in the form a book Malleus Maleficarum or Hammer of Witches, written by two clergymen Heinrich Kramer and Jacob Sprenger in 1486. The book endorsed extermination of witches, provided legal and theological context and served as a guide on interrogation, torture and court proceedings. The book's theological context provided stories that were later forced onto the memories of the victims. 

The Danish documentary Häxan focuses on witch hunts and comes with an
explanation: _'The witches’ madness, like a spiritual plague, ravages wherever
the(se) judges go.'_ <button data-toggle-content>(Häxan, 1920)  <span>3</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Häxan (1920) Directed by Christensen B.,[movie online] available at: https://www.youtube.com/watch?v=CkXlXc0lA9c</span></span>

## Algorithmic crime prediction

Fast forward to 2012, to Santa Cruz, USA. A police car patrols the streets of
the city. In previous years these teams of police officers would follow a
patrolling schedule set up by their superior. In 2012 it was software that
decided in which directions the officers were driving. From then on instructions
arrive in the form of a map of the city – overlaid with red squares that each
cover approximately 150m2. Every red squares represents an area where crime
might occur in the near future. The software feeds on the city’s criminal
database, in particular: crime type, location and time of offence. <button data-toggle-content>(Ferguson, 2017:67)<span>4</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing:
Surveillance, Race, and the Future of Law Enforcement. New York, New York
University Press</span></span> The software crunches the data and produces the risk map.

This new technology raises multiple questions. If the prediction is based on historical data, will this lead to perpetuation of history? Will there be even more police presence in already heavily patrolled areas?
Previously, a police officer's intuition – despite possible biases that were
implied in his judgement – introduced some randomness into the policing process.
Prediction softwares like PredPol now restrict the input of data and the
policing process to a narrow, predefined set of options. It only looks where its
limitations allow it to look, and it predicts only what has already happened.
Instead of predicting crime, in effect it predicts policing. <button data-toggle-content>(Wang, 2017)<span>5</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Wang, J. (2017) “This Is a Story About Nerds and Cops”:
PredPol and Algorithmic Policing, In: e-flux.com, issue 87, December 2017 [online] available at: https://www.e-flux.com/journal/87/169043/this-is-a-story-about-nerds-and-cops-predpol-and-algorithmic-policing/</span></span>

Can we think of predictive policing as the new metaphorical Malleus Maleficarum? A human officer has an intuition, and knowledge of the local communities, even when there is the silver lining of their biases. Can these be replaced by a standardized one-size-fits-all solution? Will crime prediction ‘create’ crime where it predicts it, similar toe witches being ‘created’ where witch hunters and judges went et? Or is there a middle path, where crime prediction could be used to diagnose local social issues and serve as stethoscope rather than a prescript for active policing? 

In this thesis, I don’t aim to answer every possible question but instead tackle the abstract and obscure nature of software in general. This opacity makes a discussion about its shortcomings difficult or perhaps impossible. We should be able to understand and criticise software that is taking over more and more complex human professions, thus getting more hold over us. 

## Thesis organisation

In the first chapter I tackle the first research question: _“Digital technologies are not neutral. How to hack the general public notion of computer neutrality?_
The chapter elaborates on the myth of computer neutrality, data surveillance, and software and hardware invisibility. The second chapter showcases different ways in which crime is predicted through software and the issues of crime and potential benefits of crime prediction.
The last chapter tackles the second research question: _“How to present the
abstract and obscure limited model of reality used by crime prediction software
in a way that would allow public to judge its impartiality?”_ 

I propose that the interactive and dynamic nature of software asks for a design that engages the audience as an active participant in the interactive and dynamic process of translation of data.  Furthermore, complexity of the issue shouldn’t be dumbed down for the sake of accessibility or entertainment, but rather a ladder of abstraction should be built in the audience’s mind – the lowest rung being the particular and human; the topmost representing the abstract and the alien.

</div>

</section>

<section data-section-toggled="false">
<button class="folder-toggle">
<span class="pretitle">Chapter 1 </span> 

# Living in an Earth spanning computer

</button>

<div class="content">

In his book New Dark Age, computer scientist and artist James Bridle stresses the urgency to understand and care about computers and software. 
The idea that a computer is a harmless machine that sits on your desk or its miniature version in your pocket no longer describes the reality of 21st century since we’ve been living inside of one for a while: 

_'The ENIAC (the first room-sized digital computer used by US to calculate nuclear yields and ballistic trajectories during World War 2) itself, strangely, was a very personal computer. Now we think of a personal computer as one you carry around with you. The ENIAC was actually one that you kind of lived inside. But in fact, today, we all live inside a version of the ENIAC: a vast machinery of computation that encircles the entirety of the globe and extends into outer space on a network of satellites.'_ <button data-toggle-content>(Bridle , 2018:85)<span>1</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Bridle, J. (2018) New Dark Age. London, Verso</span></span>

In this chapter I describe the three most pressing problems of software and hardware related to algorithmic crime prediction but also to modern software in general. 


## Understanding computers

There's a thin, blurred and often confusing border separating the meanings of
words like software, algorithm and code. For the sake of a common language I
provide some definitions.

### Hardware
Collection of physical components that make up a computer. 

### Software
Software is the experience you get when you run a program such as text editor.
It's the graphical interface that lets you change the colour of text and the
cursor blinking on an empty page. It's the function of the text editor that you
use to save a text file or the one which you use to exit the program. It defines
the font that the text editor uses as the default writing typeface.

### Algorithm

Algorithm is a set of logical statements and procedures that dictate the behaviour of software. For example:

	step 1: If the cursor has reached the end of the page
	step 2: Move the cursor to the line below
	step 3: Start over at step 1
	
### Data
	
Data is quantified and quantifiable information that a computer can understand
and work with. Data can be a single temperature measurement, or a record of
daily temperature measurements over the course of a century. Data is also a
record of likes a person has given on Facebook or a history of products the
person has looked at on Amazon. Computers can process data to gain new insights
or to create more data for other computers. 

### Computer model & computer simulation

A computer model is a mathematical representation of a phenomenon in the world.  Using the model a computer simulation can be run.  A weather simulation can tell us whether it’s going to be sunny or rainy tomorrow. For the model to stay up to date it needs to be constantly fed fresh observations (or data).

## The myth of computer neutrality

The myth of computer neutrality spans from the idea that a computer operates independent of human flaws such as emotional instability, fatigue or biases. In addition, unlike us humans, it operates by uncompromising logical rules, and has no desires of its own that would steer it towards any particular outcome.

Most software operates on a simple principle: get input, process it and output a new insight. The input can for instance be a weather record of the past month in your area.  Once the computer receives the input it will process it by projecting the weather reports of the last thirty days into the future and apply the latest meteorological theories to the projection. The output is a weather forecast.

Developers of crime prediction software avoided and rigorously pruned any processes of their software that would account for race. Yet, despite these attempts the software produced racist predictions. 

Even though the underlying processes were clean of racism, the predictions became ‘polluted’ by data inputs provided and collected by humans. This perpetuation of bias and racism will be discussed in more detail in chapter 2.
 
### The scope of responsibility

The myth of neutrality is one of the reasons why we let computers take control over issues formerly decided by humans decided, and as a result their scope of responsibility grows. The first computers were limited in their functionality to doing arithmetic. They could be used to calculate ballistic tables for the military, but it was still up to human intelligence to decide whether or not to fire an artillery barrage. Their effect on the world was tremendous but still indirect: the responsibility for affecting the world was left to humans. 

At the beginning of the 21st century machines affect the world in a much more
direct way. Fortunately, military drones do not yet make autonomous decisions
about killing people, but there is software that decides where a police officer
should patrol.

### A brief history of room-sized computers

In the earliest days of their existence computers took over the jobs of human computers. One of the first digital room-sized computers ENIAC deployed in 1945 was used to calculate ballistic trajectories of artillery and yields of nuclear bombs. Although ENIAC was designed for military purposes, its functionality was limited to doing ultra-fast calculations. Its scope of responsibility was limited because it couldn’t affect the war directly.

In 1958, at the beginning of the Cold War, America developed the SAGE (Semi-Automatic Ground Environment) system – a network of computers responsible for monitoring the American air space and providing early warning in case Russian missiles would be launched.

What made SAGE different in the context of its scope of responsibility was that unlike ENIAC it was no longer just an immensely powerful calculator. Programmers of SAGE had to teach to it what a plane was, and where the borders of the US airspace were. For this purpose, they created a virtual model of the world so that SAGE could consult the model as to tell whether the radar was detecting a bird or a Russian bomber entering the American airspace.

The model was flawed and on multiple occasions it mistook a flock of birds for Russian planes and sounded the alarm. <button data-toggle-content>(Bridle , 2018:85)<span>2</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Bridle, J. (2018) New Dark Age. London,
Verso</span></span> SAGE's scope of responsibility was greater than ENIAC’s. If it wasn’t for the cold-headed SAGE operators, the false alarms could have motivated a trigger-happy officer to launch a counter attack like the one in Kubrick’s classic movie Dr. Strangelove. 

In fact, we were saved once more as the Cold War threatened to escalate into a
nuclear holocaust, when Soviet submarine officers Stanislav Petrov and Vasily
Arkhipov, decided to ignore the false alarms of their computer system and
refrained from launching a nuclear counter attack. SAGE and computers in general are only as fail-proof and fail-safe as are their human error-prone programmers. 

### From rooms to Cloud

In 21st century Internet connection has become cheap and ubiquitous. Computers are connected with each other. The room-sized computers that only governments and corporations could afford can nowadays be rented by anyone with an internet connection: the room became the Cloud. Super computers no longer fill the space of universities or designated government buildings but spread around the world in featureless, anonymous storage halls. Distinguishable only by fat electricity bills, rows of vents of air conditioning and razor-wire fences.

With unprecedented amounts of relatively cheap computational power available to private companies, governments and the public alike. We outsource more and more responsibility onto these computers through the software we develop.

Software nowadays predicts what music or video content you might like based on
the content you consumed previously. <button data-toggle-content>(Ciocca, 2017)<span>3</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ciocca S. (2017) How Does Spotify Know You So Well?
[blog online] available at at:
https://medium.com/s/story/spotifys-discover-weekly-how-machine-learning-finds-your-new-music-19a41ab76efe</span></span>
It decides whether a person is eligible for a mortgage or whether they should get a job. <button data-toggle-content>(O’Neil, 2016:151)<span>4</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">O’Neil, C. (2016) Weapons Of Math Destruction,  Great
Britain, Penguin Books</span></span> It advises doctors on possible treatment <button
data-toggle-content>(Heaven, 2018)<span>5</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Heaven, D. G. (2018) Your next doctor’s appointment might
be with an AI, In: MIT Technology Review, 16 October, 2018 [online] available
at:
https://www.technologyreview.com/2018/10/16/139443/your-next-doctors-appointment-might-be-with-an-ai/</span></span>
and detects certain diseases better than a human doctor does. <button
data-toggle-content>(Whyte, C. (2018)<span>6</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">(Whyte, C. (2018) AI can diagnose childhood illnesses better than some doctors, In: New Scientist, issue 3217, 16 february 2019 [online] available at: https://www.newscientist.com/article/2193361-ai-can-diagnose-childhood-illnesses-better-than-some-doctors/</span></span> 


### Big data: The fodder for the machine

_‘You are being watched. Surveilled. Tracked. Targeted. Every search on the Internet recorded.  Every purchase at the store documented. Every place you
travel mapped. They know how fast you drive, your preferred cereal, your
dress size. They know your financial situation, all of your past jobs, your
credit limit.  They know your health concerns, reading preferences, and political voting patterns. They also know your secrets. They have been
watching for years. In truth, you live in a surveillance state. The watchers know you because of the data you leave behind._

_But it is not just you. These watchers also know about your family, friends,neighbours, colleagues, clubs, and associates. They see the circles you contact, the friends you ignore, and the political issues you embrace. They see you as part of a group, but they also see all the other parts of the group. Links expand outward, so that all of your contacts can be visualised as a web of interrelated, interconnected groups._

_Welcome to the world of big data, where one’s data trail reveals the mosaic of
lived experience and has become the currency of a new economy.’_ <button
data-toggle-content>(Ferguson, 2017:7)<span>7</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing: Surveillance, Race, and the Future of Law Enforcement. New York, New York University Press</span></span> 

Big data describes a young practice of gathering information that looks for patterns and possible new insights by studying huge amounts of data. Big Data was enabled by cheap computational power, since no human can parse all the relevant and available data in a lifetime that a computer is able to process in a matter of days or weeks. 

Let a computer look at thousands of x-rays of people with diagnosed lung cancer.
If it is then shown  the x-ray of a newly admitted patient, most likely the
computer will come up with a more precise diagnosis than any human doctor. <button
data-toggle-content>(Gallagher, 2019)<span>8</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">(Gallagher, J. (2019), Artificial intelligence diagnoses
lung cancer, In: BBC News, 20 May 2019, [online] available at:  https://www.bbc.com/news/health-48334649
</span></span>

Big data has at least two problems though, the first is that it can only recognise a symptom of problem, it cannot prescribe a cure or explain the underlying cause of the problem.  The second problems is that if there’s error in the data, this error will be carried over to the patterns that the big data analysis finds.

### Software that learns and authors itself

The next argument against computer neutrality comes from the fact that software
development is no longer within the hands of human programmers exclusively. To
some extent software can improve and create itself by multiple methods: learning
from its own successes and failures while trying to accomplish the given goal,
software plays Chess <button
data-toggle-content>(Somers, 2018)<span>9</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Somers, J. (2018) How the Artificial-Intelligence Program
AlphaZero Mastered Its Games, In: The New Yorker, 28 December 2018 [online] available at: https://www.newyorker.com/science/elements/how-the-artificial-intelligence-program-alphazero-mastered-its-games
</span></span> and Go <button
data-toggle-content>(Byford, 2017)<span>10</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Byford, S. (2017) Google’s AlphaGo AI defeats world Go
number one Ke Jie, In: The Verge, 23 may 2017 [online] available at: https://www.theverge.com/2017/5/23/15679110/go-alphago-ke-jie-match-google-deepmind-ai-2017
</span></span> better than any human player. 

It is capable of observing evidence
(like images of cats) and then recognise a cat on an image it hasn’t seen before
or it can hallucinate images of cats that have never existed. If it is
shown enough videos of Obama speeches, it will be able to construct a new video
of a fake Obama saying words he has never used. Another method is to make it
look for patterns in historical data and project that history into the future,
seemingly predicting it. This concept of self learning with little or no human assistance is known as machine learning.


### What makes a cat

The algorithm creates a numerical model of what visually seems to define a cat. It creates this model by looking for recurring features in all cat images it is given. It might first distinguishes the elongated, curved blob that makes up the cat's body. In the next take it could recognise the fur that covers the blob. But this could still be a dog or any other four-legged furry mammal. Therefore, the algorithm looks for more details. The triangular ears, the rounded forward facing eyes, the length of the tail in relation to the body or the particular camouflage pattern of the cat's fur. 

### What makes a creditworthy mortgage customer

The same can be done with human data. Feed the algorithm enough historical and personal data about people's incomes and their previous and current jobs, let it study these data and then provide data on a particular customer who applies for a mortgage. The algorithm will look at all the other people’s records  and compare them with the new one. A few seconds later it provides the definitive answer whether the new customer is allegeable for a mortgage or not.

But what if the people’s data are spoiled? Most of the data was probably collected by humans that might have made mistakes during the collection. What if the employees were biased towards people of colour? Any bias and errors in the data will be perpetuated by the seemingly unerring and neutral machine. 

This shift towards self-authoring software was made possible due to the cheap, outsourced computational power (machine learning algorithms rarely run on individual personal computers due to their very high hardware requirements) and access to unprecedented amounts of quantifiable data about our world. 

## The opaque machine

Paradoxically while the scope of responsibility of computers is growing our understanding of what is going on within them is diminishing.  This is an urgent problem. The less the public knows about software, the more the elite in Sillicon Valley can dare to do behind the curtains. The more complex the global network of computers becomes the larger and more powerful the elite will become. The problem is exacerbated by the emerging software that authors itself and learns without any human oversight.

What follows are conceptual layers that obscure software and hardware from our understanding.

### The levels of software & hardware opacity

#### Opacity through the abstract nature of software itself

In computer science, the more a programming language resembles human language the higher level it is considered to be. Even a person with no programming experience can understand them to some extent. At the low end of the spectrum there's the machine language (also known as binary language): zeroes and ones,  the only language a computer can truly understand and work with.  

#### Opacity through outsourced hardware

In the past computers were bound to a physical space.  Nowadays, if you need a computer you can rent one or many from Google or Amazon without ever knowing where the computer you’re currently using is, and where it will be next week.  This might create an accountability issue because it makes it hard to track where the hardware that is running your software actually resides.

#### Opacity through Intellectual property

Crime prediction software is almost exclusively developed by private companies in the US (on some occasions it’s developed by police departments in collaboration with universities). The software is sold directly to courts and police institutions without any public oversight in between. The companies use the argument of intellectual property to keep their software opaque.

#### Opacity through self-authoring

The most recent and possibly the most terrifying layer is the ability of software to learn and better itself without human oversight. Details of its workings are hidden even from the programmers who laid the foundations for a piece of self-authoring software.

### Should we all learn to code?

In 2013 the former US president Barrack Obama publicly endorsed Hour of Code in
a video. <button
data-toggle-content>(President Obama asks America to learn computer science, 2013)<span>11</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">President Obama asks America to learn computer science
(2013) [video online] Creat. Code.org, 8 december 2013, Available at: https://www.youtube.com/watch?v=jNQXAC9IVRw
</span></span> Hour of code is a non-profit institution that aims to make
computer science accessible to everybody. In another Hour of Code endorsement
video, produced in 2013, a member of the popular band Black Eyed Peas, Will.i.am
stated that we should all learn to code because we are all dependant on the
technology that is driven by code. <button
data-toggle-content>(What Most Schools Don't Teach, 2013)<span>12</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">What Most Schools Don't Teach (2013) [video online] Creat.
Code.org, 26 february 2013, Available at: https://www.youtube.com/watch?v=nKIu9yen5nc
</span></span> 2 years prior to the Hour Of Code endorsements Codecademy and Team Treehouse were founded; both Online platforms offering videos that could teach people how to code. Mainly focused on web and mobile application software development these platforms exemplify a trend that started in the early 2010's when coding was discovered as a new form of literacy. The invisible, immaterial software that runs so many processes in today’s civilisation could finally be grasped  from the hands of the high priests working in the ivory towers of Silicon Valley – only if everybody learns how to code at least a little bit. 

Still, the effective knowledge spread by the online educators operates at the level of designing and assembling a radio-controlled toy race car, while the main tech companies are developing autonomous quadruped drones that can scale environmental obstacles at 32km/h and carry cargo from A to B without a human driver behind the metaphorical wheel.

In the words of James Bridle: 

_‘You should be able to understand technological systems without having to learn
to code at all, just as one should not need to be a plumber to take a shit, nor
to live without fear that your plumbing system might be trying to kill you. The
possibility that your plumbing system is indeed trying to kill you should not be
discounted either: complex computational systems provide much of the
infrastructure of contemporary society, and if they are not safe for people to
use, no amount of education in just how bad they are will save us in the long
run.’_ <button data-toggle-content>(Bridle , 2018:4)<span>13</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Bridle, J. (2018) New Dark Age. London, Verso</span></span>

</div>

</section>


<section data-section-toggled="false">

<button class="folder-toggle">
<span class="pretitle">Chapter 2</span> 

# The prediction machine 

</button>

<div class="content">

## The Motivations for computational crime prediction

The first use of the crime prediction dates back to the early 2010’s when US police was suffering from ever decreasing budgets and increasing amounts of racial bias accusations and convictions within the police’s ranks. <button data-toggle-content>(Ferguson, 2017:20)<span>1</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing:
Surveillance, Race, and the Future of Law Enforcement. New York, New York
University Press</span></span>

The crime prediction technology promised that police department’s would save money and human resources by making policing more efficient. The technology wouldn’t predict the time, the place and the perpetrator of a crime. But instead the probability that a crime might occur in a designated area of a city, or the likelihood of a person being a victim or a perpetrator of a crime. With these probabilities in hand, the police could distribute patrols only where they mattered.

All that the software companies were asking for was money and access to the personal and criminal records of the cities and police departments where the technology would be used.

But unlike the human crime analysts that can be questioned about their decisions and the steps that led to them, the new prediction software is obscured by the veil of intellectual property and the language of algorithms that only a few can understand. Some of the prediction softwares use machine learning to do their work, they author themselves – so it’s even harder to comprehend their decision making.

The machine that has potential to affect many people’s lives sits in a seemingly impenetrable black box that only few can access and even fewer understand.

## Crime prediction software overview

There’s currently multiple US companies developing crime prediction software. The software of the listed companies is used in USA and Europe.

### Person based crime prediction

#### Palantir’s Gotham
Used in USA, Denmark, Israel <button data-toggle-content>(Winston, 2018)<span>2</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Winston, A. (2018) ‘Palantir has secretly been using New Orleans to test its predictive policing technology’  In: The Verge , February 27, 2018 [online] available at: https://www.theverge.com/2018/2/27/17054740/palantir-predictive-policing-tool-new-orleans-nopd
</span></span> 

Palantir is a US company specialising in big data management and pattern finding. The company was founded in 2004 by Peter Thiel the founder of PayPal and financially supported by CIA’s venture capital firm In-Q-Tel with a goal to: _'reduce terrorism while preserving civil liberties.'_ <button data-toggle-content>(Biddle, 2017)<span>3</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Biddle, S. (2017) How Peter Thiel’s Palantir helped the Nsa spy on the whole world, In: The Intercept, 22 february 2017 [online] available at: https://theintercept.com/2017/02/22/how-peter-thiels-palantir-helped-the-nsa-spy-on-the-whole-world/
</span></span> Gotham is the flagship software of the company, marketed as a tool that helps companies and governments to sort through vast amounts of various data to unearth insights.

As a crime prediction tool it was piloted in New Orleans in 2012. <button data-toggle-content>(Winston, 2018)<span>4</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Winston, A. (2018) ‘Palantir has secretly been using New Orleans to test its predictive policing technology’  In: The Verge , February 27, 2018 [online] available at: https://www.theverge.com/2018/2/27/17054740/palantir-predictive-policing-tool-new-orleans-nopd
</span></span> The software was fed the city’s criminal  and public safety data. In particular: Police calls for service, electronic police reports, probation and parole records, sheriff’s office arrest and booking records, gang databases, field information cards, ballistics and the current case management system.

Gotham then sifts through all the data, looking for links between individuals, crimes, gang affiliation etc. It generates a list of people and their likelihoods to be victims or a perpetrators of crime. <button data-toggle-content>(Ferguson, 2017:40)<span>5</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing:
Surveillance, Race, and the Future of Law Enforcement. New York, New York
University Press</span></span>

#### Chicago Police Department’s Strategic Subject List (also known as The Heat List)
Used in USA <button data-toggle-content>(Stroud, 2014)<span>6</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Stroud, M. (2018) The minority report: Chicago's new police computer predicts crimes, but is it racist?, In: The Verge , 19 february 2014 [online] available at: https://www.theverge.com/2014/2/19/5419854/the-minority-report-this-computer-predicts-crime-but-is-it-racists</span></span>

CPD developed The Heat List in collaboration Illinois Institute of Technology. Similarly to Palantir’s Gotham it generates a list of potential victims and perpetrators of crime. The algorithm uses the crime database of CPD and generates individual scores ranging from 1 to 500, the higher(or ‘hotter’) the score the higher the risk of being a victim or a perpetrator of crime.  11 variables are used to generate the score. Some of them are criminal, history, prior arrests, parole status and the criminal status of the people in the person’s social network.

Once a person is identified as a potential perpetrator or a victim of crime they might receive a ‘custom notification visit’ which involves a visit by a police officer or a social worker and a member of the community. During the visit police delivers a ‘custom notification letter’ detailing what the police knows about the individual’s criminal past and a warning about the severe consequences if they offend in the future. <button data-toggle-content>(Ferguson, 2017:38)<span>7</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing:
Surveillance, Race, and the Future of Law Enforcement. New York, New York
University Press</span></span>

#### Equivant’s COMPAS
Used in USA

COMPAS is used by judges in US to predict the likelihood of a convict to commit more crime in the future. The convict is interviewed in 137 questions about their personal attitudes, family history, criminal history, gang affiliation, drug habits and more. (Northpointe, now Equivant, 2011) The software then compares the interview data with other convict’s  scores and answers to create a heat score from 1 to 10, the higher the score the more likelier the convict is to commit more crime in the future. <button data-toggle-content>(Angwin, Larson, Mattu, Kirchner, 2016)<span>8</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Angwin J., Larson J., Mattu S., Kirchner L. (2016) Machine Bias, In: ProPublica, 23 May 2016 [online] available at: https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencings</span></span>


### Area based crime prediction

#### Azavea's HunchLab
Currently used in USA

Hunchlab uses crime data, census data and population density and adds in other variables like the location of schools, churches, bars, clubs and transportation centres. The algorithm then creates and constantly updates a risk map. The map is colour coded by crime type, and percentage of likely criminal activity. <button data-toggle-content>(Ferguson, 2017:63)<span>9</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing:
Surveillance, Race, and the Future of Law Enforcement. New York, New York
University Press</span></span> 

#### PredPol’s eponymous software
Currently used in USA, discontinued in UK <button data-toggle-content>(Nilsson, 2018)<span>10</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Nilsson P. (2018) First UK police force to try predictive policing ends contract
, In: Financial Times, 26 November 2018 [online] available at: https://www.ft.com/content/b34b0b08-ef19-11e8-89c8-d36339d835c0</span></span> 

PredPol limits its data inputs to crime type, location and time offence, the predicted area is also limited to approximately 150m2 which changes daily depending on the data. The output is a risk map overlaid with red squares marking the areas where crime might happen.  <button data-toggle-content>(Ferguson, 2017:67)<span>11</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing:
Surveillance, Race, and the Future of Law Enforcement. New York, New York
University Press</span></span>


#### Politie’s Criminaliteits Anticipatie Systeem(CAS)
Used in The Netherlands

The software piloted in 2014 in Amsterdam<button data-toggle-content>(Nationale Politie, 2017)<span>12</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Nationale Politie. (2017) Criminaliteits Anticipatie Systeem verder uitgerold bij Nationale Politie. [online] available at: https://www.politie.nl/nieuws/2017/mei/15/05-cas.html</span></span> and has since been used in multiple dutch cities to generate maps of hot spots and hot times, predicting where and when a crime might happen. The system draws information from criminal history databases and data from Centraal Bureau voor de Statistiek. <button data-toggle-content>(Beerends, 2018)<span>13</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Beerends, S. (2018) Criminaliteit past niet in een rood vierkantje, In: Setup, 8 August 2018 [online] available at: https://www.setup.nl/reads/2018/08/criminaliteit-past-niet-een-rood-vierkantje</span></span> 


## The issues of algorithmic crime prediction

### Friedrich Hayek's warning: Can human experience be quantified? 

In 1972 an economist Friedrich Hayek warned his fellow colleagues during his Nobel prize acceptance speech called The Pretence of Knowledge that in their work they should wary of relying on exclusively quantifiable data to understand the economical behaviours of people. He further warned that the focus on quantifiable disqualifies everything that cannot be quantified. <button data-toggle-content>(Hayek, 1974)<span>14</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Hayek, A. (1974) The Pretence of Knowledge, [online] available at: https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/</span></span>

Can the complexity of human behaviour be mathematically captured to the extent that an accurate model of what it means to be human can be created? Can a simulation that employs this model then make a valid prediction or does it instead forces reality into a mould of the prediction made?

In this thesis i don’t aim to exhaustively answer these question, but instead as a designer provide ways for public to understand the problems and come to their own conclusions.  Below i list the most pressing issues of algorithmic crime prediction that i later plan to tackle in the design project.

### History based future prediction: Witches are found where inquisitors go

#### Ludic Fallacy: Shaping the reality with a limited mathematical models of itself

In his book Black Swan, Nassim Nicholas Taleb warns against attempts to predict the future using mathematical models based on the history. Word ludic comes from a latin word ludus meaning 'play, game, sport, pastime’.

An example of ludic fallacy from Taleb's friend Mark Spitznagel regarding competitive martial arts:

_'Organised competitive fighting trains the athlete to focus on the game and, in order not to dissipate his concentration, to ignore the possibility of what is not specifically allowed by the rules, such as kicks to the groin, a surprise knife, et cetera. So those who win the gold medal might be precisely those who will be most vulnerable in real life. Likewise, you see people with huge muscles (in black T-shirts) who can impress you in the artificial environment of the gym but are unable to lift a stone.'_ <button data-toggle-content>(Taleb,  2007:127)<span>15</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Taleb, N. N. (2007) The Black Swan, The Great Britain, Penguin Books</span></span>

It's this artificial environment that algorithmic crime prediction is creating that then gets mistaken for reality. The map is mistaken for the territory. And even worse, once the map is used to shape the reality. Once an area is designated as criminal hotspot – patrols are sent there and arrests are made, the data about these arrests is fed back into the prediction algorithm, the feedback loop is reinforced.  An already over policed area will get even more police presence. 

If the prediction is based exclusively on the historical record, the prediction will be only a projection of the past. In other words history will repeat itself. Crime will be found where crime prediction predicts it.

#### Bias perpetuation: How computers become racist

A sinister subset of history perpetuation is perpetuation of biases and racism. Data used that are fed into prediction software are collected by human susceptible to racism and biases. Variables ( police contacts, prior arrests, gang affiliations) that are used for prediction directly correlate with racially discriminatory law enforcement practices(in USA). <button
data-toggle-content>(Ferguson 2017:47)<span>16</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing: Surveillance, Race, and the Future of Law Enforcement. New York, New York University Press</span></span> If the data are polluted by racism of its collectors, so will be the prediction. In the words of civil liberties lawyer Hanny Fakhoury:

_'It ends up being a self-fulfilling prophecy.... The algorithm
is telling you exactly what you programmed it to tell you.
“Young black kids in the south side of Chicago are more
likely to commit crimes,” and the algorithm lets the police
launder this belief.It’s not racism, they can say. They are
making the decision based on what the algorithm is, even
though the algorithm is going to spit back what you put into it.
And if the data is biased to begin with and based on human
judgment, then the results the algorithm is going to spit out will reflect those biases'_

<button
data-toggle-content>(Fakhoury 2014, cited in Ferguson, 2017:47)<span>17</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing: Surveillance, Race, and the Future of Law Enforcement. New York, New York University Press</span></span>

#### Data blacklisting: An opaque record of crimes you might do

In 2013 Robert McDaniel, then 22 years old black man living in a poor neighbourhood in Chicago received a visit from Chicago police department’s  officer warning him to avoid any criminal activity in the future. McDaniel was surprised by the visit because his prior violent criminal record was average for the area where he lived — misdemeanour arrests on suspicion of gambling, drug possession and domestic battery. He later found out that he made it to the list along more than 400 other individuals due to having a friend with whom he had once been arrested on a marijuana charged that was fatally shot a year prior in Austin. <button
data-toggle-content>(Gorner, 2013)<span>18</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Gorner, J. (2013) Chicago police use 'heat list' as strategy to prevent violence, In: Chicago Tribune, 21 August 2013 [online] available at: https://www.chicagotribune.com/news/ct-xpm-2013-08-21-ct-met-heat-list-20130821-story.html</span></span>

Data black lists are opaque lists of people predicted to commit or to be victims of violent crimes in the future. These lists can be rife with errors and false positives since the data used to create them are complex and come from multiple sources (criminal databases of police departments, statistical data of cities, questionnaires fulfilled by police officers in situ) and so far there seems to be none to little quality control over them. <button
data-toggle-content>(Ferguson, 2017:52)<span>19</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing: Surveillance, Race, and the Future of Law Enforcement. New York, New York University Press</span></span> Furthermore the lists are not publicly available. There aren’t mechanisms that would notify an individual if they are added to the list other than police officer’s visit. Or that would provide a legal lever to get off the list if you were added incorrectly. <button
data-toggle-content>(Ferguson, 2017:53)<span>20</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Ferguson, A. G. (2017) The Rise of Big Data Policing: Surveillance, Race, and the Future of Law Enforcement. New York, New York University Press</span></span>

</div>

</section>

<section data-section-toggled="false">

<button class="folder-toggle">
<span class="pretitle">Chapter 3</span> 

# X-raying the machine

</button>

<div class="content">

## Design as translation tool for the opaque and the abstract

_To ask whether elements, interconnections, or purposes are important in a system is to ask an unsystemic question. All are essential. All interact. All have their roles. But the least obvious part of the system, its function or purpose, is often the most crucial determinant of the system's behaviour. Interconnections are also critically important. Changing relationships usually changes system behaviour. The elements, the parts of systems awe are most likely to notice, are often (not always) least important in defining the unique characteristics of the system – unless changing an element also results in changing relationships or purpose._  <button
data-toggle-content>(Meadows, 2008:17)<span>1</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Meadows, D. H. (2008) Thinking in Systems, USA, Chelsea Green Publishing
</span></span>

My aim is to provide a systemic overview of crime prediction. An X-ray image of sorts that captures all the elements, their purposes, interconnections  of the crime prediction system. While also tackling the underlying issues of computer neutrality and opacity.

Instead of taking the idea of x-ray literally and designing a top-down map of the system, i intend to turn a member of the audience into a subject of the system and let them explore the system from within. Below i provide influences that lead me to the belief that exploring dynamic systems from within can be more productive and fun than other way around.  

## The Conceptual influences

### Stanford prison experiment 

In 1971, Stanford prison experiment was run. The psychologists behind it created a fictional prison to find whether how ordinary people act once they're given an authority over other people. A group of students was hired to act as the prison's guards, the other group acted as prisoners. The experiment was cancelled after 6 days due to the brutality which the guards imposed on the prisoners.

One of the design project ideas is to create a space where a person can become the algorithmic judge and dictate the rules of the process, and another person a convict whose punishment was partially decided by the judge. And then letting the people to swap the roles. Below i present some example projects that make the audience empathize with someone else by putting the audience into the person’s shoes. 

### Seymour Papert’s LOGO and microworlds

In 1967 educator and computer scientist Seymour Papert introduced a LOGO learning system for mathematics. His system was an alternative to the traditional textbook maths. Instead of making students understand the abstract mathematical concepts through working on distant and fictional problems in textbooks. His system made the concepts useful and concrete by literally putting them on the floor of the classroom in the form of a programmable mechanical turtle on wheels. 

A student could program the turtle to make it move, spin and lift or make it put down a pen that was attached to the bottom's centre of it's hemispherical body. The pen made possible to record the history of the turtle's movement about the classroom. With enough practice the student could progress from simple A to B lines to more intricate geometrical pattern. Instead of learning 'how' and then 'why', LOGO gave the student why and let them figure out the how on their own. In other words, instead of making the student grasp the abstract mathematical structures first and apply them later. LOGO first showed an intriguing and concrete application of the structure. <button
data-toggle-content>(Papert, 1993:120)<span>2</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Papert, S.(1993) Mindstorms, USA, Basic Books
</span></span>

### Ian Bogost's procedural rhetoric

The concept of procedural rhetoric is a game design concept. It proposes that in interactive systems like games, the narrative or and idea can be delivered indirectly through mechanics that a player uses to interact with the game world. For example: A game that blinds the player and makes them solve problems while blinded can evoke thoughts and empathy with blind people. Making people experience what it is like to be the subject of crime prediction software can make them engage on a deeper level. <button
data-toggle-content>(Bogost, 2007:28)<span>3</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Bogost, I. (2007) Persuasive Games: The Expressive Power Of Videogames, USA, The MIT Press
</span></span>

### Bret Victor’s explorable explanations

Explorable explanations are a way to represent dynamic systems (e.g. society, solar system) in a dynamic and interactive way.<button
data-toggle-content>(Victor, 2011)<span>4</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Victor B. (2011) Explorable Explanations [online] at: http://worrydream.com/ExplorableExplanations/
</span></span> In comparison textbooks exploring dynamic systems require the person to do create mental ‘dynamic’ images of what they’re reading about. Explorable explanations generate these images on the screen and let the user explore the system on a deeper level by tweaking variables.

### Pharmaceutical transparency

When we take a pill we let a chemical agent act on our body – as end-users we have almost no knowledge of methodologies of this agent. Despite our ignorance we take the pill with faith that the overall effect will be positive for us. The faith is based on the trust in the doctor who prescribed it and on approval of the pill by a, hopefully independent, drug safety institution.

We believe that this institution employs professionals with sufficient knowledge of chemistry, pharmacy and general science to judge the pill beneficial.

The knowledge of the professionals is in a very simplified way embedded in the medication guide that comes with the pill. The guide tells us what exactly is the pill supposed to do, who is it meant for, who is it not meant for, how it should be used, what are it’s potential side effects and what is the pill made out of.

Further it let’s us examine the decision of the individual ever erring human doctor who prescribed the drug by connecting us to the bigger pool of knowledge created by the institution’s employees.

## The design influences

My aim is to make the vast and abstract topic of crime prediction more accessible and relatable by taking the focus from the workings of the technology, and instead providing human centric experience. Where the audience momentarily becomes a subject of the system it is exploring. Below are the influences that inspired this way of communication.

### Human first narratives about technology

#### Mr Robot
Mr Robot is a television series about a hacker Elliot Anderson, the series deals with themes of social isolation, depression, privacy, anonymity, fragility of digital systems and our dependance on them. 

The first season has a heavy focus on contemporary technology, but as the show progresses the focus moves toward effects of technology on humans. 

### What is it like to be someone else?

#### Papers Please

This game puts a player into the shoes of a border patrol of a fictional soviet country. The guard's role is to check visa validity of the incoming immigrants and travellers and at the same time manage their meagre wage  to tend for their starving family. The guard is paid on pay-per-successful-border-check basis. As the game time progresses the list of the guard's duties grows longer and the wage smaller. 

The player must decide whether they skip some of their duties to get 	more people through the border thus risking making a mistake and not 	getting paid, accepting bribes and risking getting caught or fulfilling all 	their duties diligently, but seeing their family die of hunger and cold 		due to the ever shrinking wage.
<button
data-toggle-content>(Papers Please, 2014)<span>5</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Papers Please (2014) Developed by Pope, L. [Video game] USA</span></span>

#### Out of Exile: Daniel’s Story

In this VR game the player assumes role of Daniel. A guy who decided to come out as gay in front of his family and make a sound recording of 	the act. Looking and listening through eyes and ears of Daniel, the 		audience creates an emotional connection with the topic.
<button
data-toggle-content>(Out Of Exile , 2016)<span>6</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Out Of Exile (2016) Directed by de la Peña, N. [VR experience] USA</span></span>

### What is it like to do the work of an algorithm?

#### Help me know the truth

A visitor enters the exhibition and a terminal asks them to take a 		picture of themselves. A software processes the photo, splitting it into 	two slightly different images. The two images are then send to other 		terminals in the exhibition, other visitors can then judge which of the 		two photos is more friendly, more angelic or more terrorist. 			Based on the input from visitors the exhibition spanning AI builds its 		model of reality. <button
data-toggle-content>(Help me know the truth, 2016)<span>7</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Flanagan,  M., (2016) Help me know the truth [installation] available at: https://studio.maryflanagan.com/help-me-know-the-truth/</span></span>

#### Why would you want to picture it?

A three dimensional diagram representing the layers of machine 		learning process hangs in a room. Made out of thin metal rods, hanged 	on invisible nylon cords, the object floats in the room. A voice in the 		room introduces itself as a vector, an invisible single agent out of many passing through the layers of the diagram, doing the work. Narrow 		band speakers urge the visitor walk around the object to hear the full 	story. <button
data-toggle-content>(Why Would You Want To Picture It, 2019) 
<span>8</span></button><span
class="secondary-content" data-toggled="false">
<span class="content">Schmitt, P. (2019) Why Would You Want To Picture It [Sound installation and sculpture] available at: https://philippschmitt.com/work/why-would-you-want-to-picture-it</span></span>

#### The design project (so far)

#### The questionnaire

The questionnaire is a simplified version of questionnaire developed by a company Northpointe ( now Equivant ) that was used as an input for the precrime software COMPAS. the software predicts how likely is a convict to reoffend in the future. The questions in the questionnaire examine convict’s criminal history, drugs use, family & social life, emotional and financial stability, convict’s personality and attitudes.  I simplified the Northpointe version by culling questions that were irrelevant for people in Design Academy with almost no criminal history. 

#### The interviews 

The reason for the questionnaire at first was to create a small personal criminal database to experiment with. So far i interviewed 5 design academy students and later was interviewed myself. The experience of being in the shoes of the judge and then the persecuted inspired me to come up with the Two systems prototype that follows.

#### Two Systems: The judge and the persecuted

Two Systems is an exhibit object where a visitor can experience what is it like to be interviewed about their criminal history using the terminal. Based on the history their criminality risk will be computed. Admission to this exhibit is the visitor’s face photo which will later be displayed on the board of shame with their computed risk assessment.

On the other side of the exhibit there’s another terminal. Its purpose is to let the audience change the rules which are used to determine criminality assessment of the people on the other side of the wall. 

</div>
</section>





<section data-section-toggled="false">

<button class="folder-toggle">

# Conclusion

</button>

<div class="content">

The cutting edge of computation is no longer driven by a computer sitting on a desk. But rather by a sprawling network of computers that are usually kept in anonymous warehouses around the world. Due to its boundless, gaseous nature it became known as Cloud. It observes us, learns from us and affects us, but for the most part is invisible and unaccountable. 

With the abundance of cheap personal data computers are now learning about what it means to be a person. They create mathematical models of us. However their learning material is limited due to the fact that not all that makes us human can be reduced to a number. Due to this limitation the models are in effect as life like as a cheap plastic mannequin. Even worse, unlike humans who constantly update their model of reality with new observations, the limited models are constrained to a set amount of quantifiable variables defined by their human developers. 

These limitations however don't stop private companies and governments from using these limited models of us to predict our behaviour and decide on our behalfs. Furthermore computers are still deemed neutral judges since they have no agenda of their own and are not susceptible to emotions, mood swings, exhaustion and biases. The human flaws however creep back into the models through the data that were collected by the flawed humans.

The decisions the software makes perpetuate and entrench the existing biases and affect unprecedented amount of people. In the case of crime prediction: poor neighbourhoods which have historically had more police presence, will be predicted to be risky and thus gain even more police presence. The prediction might lead to more suspicion and arrests in the area. The new arrests data will confirm the prediction and tempt even more police presence, a vicious feedback loop.

The gas we burn for cooking is naturally odorless, a chemical called Mercaptan is addded to infuse it with the distinct metallic smell. The smell makes us pay attention, it triggers the fight or flight response. We should develop a similar metaphorical compound that would remind us of Cloud's presence and render the operation of crime prediction software visible.

The abstract, immaterial process of crime prediction and the abstract model at its core can be made visible by juxtaposing it with what it set out to automate, the legal system. The interrogation room, the layout of a court room, the procedures of a trial share similarities with the processes of crime prediction. 

An imaginary court room with no seats for the defense, the public nor the jury. The judge is replaced by the predictive algorithm, the witness is the defendant's data. The audience sees the processes of crime prediction and the abstract model in somewhat familiar space. The apparent neutrality of the process is betrayed by seeing that the algorithm has learnt from the biased human history.

##

</div>

</section>






