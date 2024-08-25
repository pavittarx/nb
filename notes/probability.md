# Combinatorics
----

<md-collapse>

## Counting
<md-indent>

How many numbers lie between 12 … 20 ?

= 20 - 12 + 1 = 9

Numbers between k → n, provided 1, 2, 3, …. k, …. n 

= n - (k -1)
= n - k + 1

**Even numbers b/w 50, 51, 52, … 216, 217 ?**

First even number = 50,
Last even number=  216
Even numbers b/w 50 → 216 

= 50, 52, 54, 56, … 210, 212, 214, 216

Converting to a sequence, (dividing by 2)

= 25, 26, 27, …. 105, 106, 107, 108

Total Even Numbers b/w  50, … 216 = Total even numbers b/w 25, … 108

= 108 - 25 + 1

= 84
</md-indent>

</md-collapse>

## Order v/s Repetition

The concepts of **order** and **repetition** are central to counting problems, 

- **Order matters** when the sequence in which items are chosen affects the final outcome. For example, when choosing class officers (president, vice president, etc.), selecting Sofia, then Trevor, results in a different outcome than choosing Trevor first, then Sofia. 
In contrast, **order doesn't matter** when only the final group of chosen items is important. A committee with Sofia and Trevor is the same regardless of who was chosen first.
- **Repetition allowed** refers to scenarios where the same item can be chosen multiple times. For example, when forming a "word" from an alphabet, the same letter can appear multiple times. 
Conversely, **repetition not allowed** means each item can be chosen only once, like when selecting class officers, where no student can hold multiple positions.

The sources use these concepts to establish different counting formulas:

- **Sequences with repetition allowed**: The number of ways to choose a sequence of $k$ objects from a set of $n$ objects with repetition allowed is $n^k$. This formula is used for situations like counting the possible outcomes of $k$ coin flips, where each flip has the same two possible outcomes (heads or tails).
- **Sequences without repetition**: When repetition is not allowed, the number of ways to choose a sequence of $k$ objects from a set of $n$ objects becomes $\large \frac{n!}{(n-k)!}$. 
This formula applies to scenarios like selecting class officers, where each position must be filled by a different student.
- **Collections without repetition**: The number of ways to choose a collection of $k$ items from a set of $n$ items (order doesn't matter) without repetition is given by the binomial coefficient: $\large {n \choose k} = \frac{n!}{k! (n-k!)}$**.** 
This formula is suitable for situations like forming a committee, where the order of selection is irrelevant.
- **Collections with repetition**: ~~The sources acknowledge the need to count collections where repetition is allowed, but they do not provide a specific formula in the excerpts included. However, they highlight that a formula for this scenario exists.~~

By understanding the distinctions between order and repetition, and how they apply to different scenarios, one can select the appropriate counting formula.

## Multiplication Principle

### Choices

**How many outfits can you make out of 4 shirts and 3 pants, provided each can go with the other?** 

= 4 x 3 = 12

**What if, you can also pair of 2 shoes**

= 4 x 3 x 2 = 12 x 2 = 24

**If a pizza house offers you 7 meat and 4 veg toppings, How many pizzas can you choose among?** 
= 7 x 4 = 28 choices of pizzas. 

---

*The number of ways of making a sequence of **independent choices** is the product of the number of **choices at each step**.* 

---

**"Independent" means that the way a choice is made at one step doesn't affect the number of choices available at other steps.** For example, if you are choosing an outfit and have 4 shirts and 3 pairs of pants, the choice of shirt doesn't affect the number of choices you have for pants.

**It's important to note that the multiplication principle only applies when the choices are independent.**

**It is also important to note that the multiplication principle can be used in conjunction with other counting techniques, such as the subtraction principle, to solve even more complex counting problems.**

### Counting Words

If a license plate has 3 letters followed by 3 numbers, there are 26 choices for each letter and 10 choices for each number. 

The total number of possible license plates is 

26 × 26 × 26 × 10 × 10 × 10 = 17,576,000.

## Sequence of Choices

**Sequence** → Ordered

**Collection** → Not ordered

1. The number of sequences of k objects from a collection of n objects is $n^k$.
2. The number of sequences of $k$ objects without repetition from a collection of $n$ objects is $({n}) \times ({n-1}) \times (n-2) \times \cdots \times 3 \times 2 \times 1$ which can be written as $n!$ called *n factorial*. (Special Case of Multiplication Principle)

**In a class of 15 students we want to line them up to go to the recess**. 

The number of ways of doing this is 15 x 14 x 13 … 3 x 2 x 1 or 15! 

= 15!

= 1,307,674,368000

= $1.3 \times 10^{12}$

Now, if we wanted to make a baseball team out of these 15 students i,e., choose 9 kids out of 15 students without repetition. The possible ways would be 

= 15 x 14 x 13 x 12 x 11 x 10 x 9 x 8 x 7

= $\Large\frac{15!}{(15 - 9)!}$

= $\Large\frac{15!}{6!}$

The number of sequence of $k$ objects to be choosen without repetition from a collection of $n$ object is,

$$
\Large \frac{n!}{(n-k)!}
$$

### When order matters,

These are few cases when using multiplication principle is not an obvious choice. But it can still be applied. 

1. **If we want to choose three digit odd numbers without any repeating digits, i.e., the final digits are either 1, 3, 5, 7, 9.** 
    
    If the digits are chosen from left to right (hundreds digit first, then tens digit, then units digit), the multiplication principle fails. The choice of third digit depends on the choosing the first two digits. Hence, the 3rd digit cannot be choosen without knowing the first two digits. 
    
    However, if we the choices are made from right to left, the choices become independent. 
    
    1. We have 5 choices for the last digit. 
    2. 9 choices for the middle digit. 
    3. And 8 choices for the first digit. Since, first digit cannot be zero, 
    
    Hence, total numbers = 5 x 9 x 8  = 360
    

1. **There are 15 students in a class where uniform is a polo shirt that is either Orange, or Black. On this particular day, 8 pupils have decided to wear an orange polo, while the other 7 are wearing black polos. The teacher wants to line up the students in such a way that no orange students stand next to each othe**r. 

Here, the number of students with orange shirt are greater than black shirts students. So, we can start with orange shirt students. 

Ways to line studens with Orange shirt = 8!
Ways to line students with Black shirt = 7!

Total ways to line the students, with orange being repeated = 8! x 7! = 203, 212, 800 

## Subtraction Principle, Counting the Complement

There are 26 letters in English alphabet, and 5 of them (A, E, I, O, U) are vowels. How many consonants are there? 

= 26 - 5

= 21

The number of objects in a collection **that meet a certain condition** is equal to the *total number of objects* in the collection *minus* the number of *objects that do not meet* the condition. 

This approach proves particularly useful when counting objects that don't satisfy a condition is easier than directly counting those that do.

**Calculate the number of four-letter words with at least one vowel.**

= Total four letter words - Four Letter words with no vowels

= 26 x 26 x 26 x 26 - 21 x 21 x 21 x 21

= **331776** - 194481

= 137295 

The subtraction problem can be extended to problems with more than one exclusion criteria, 

**How many ways are there of lining the class provided that Ethan & Becky are not adjacent to each other?** 

It is obvious to use Subtraction principle, since if we use multiplication principle alone, the solution fails. 
Total number of ways the class can be lined up = 15!

Total number of ways class can be lined up, such that Ethan & Becky are not next to each other = 15! - Number of ways Ethan & Becky are next to each other

But, how do we figure out the number of ways Becky & Ethan are next to each other. The choices are dependent on where we place Becky or Ethan first. It we place one first we need to place the other at the 2nd or the last position. The multiplication principle fails to apply here, since the choices becomes dependent. 
However, it must be noted once the places for Becky & Ethan are chosen, the multiplication principle is applicable again.

$$
\text{No of ways of lining the class where
Becky \& Ethan are adjacent} = \text{No. of Ways Becky \& Ethan are adjacent} \times 13!
$$

We can treat Becky & Ethan as a single unit. There are 14 ways to arrange this unit. Since Ethan and Becky can switch positions within their unit, multiply this number by 2. Therefore, there are 2 * 14 arrangements where Ethan and Becky are together.

So, the number of ways Becky & Ethan are adjacent is = $2 \times 14 \times 13!$

or simply, $2 \times 14!$

Number of lineups with Becky & Ethan not next to each other = $15! - 2 \times 14!$

> Simpler Approach:
Treat Ethan and Becky as a single unit. There are 14! ways to arrange the 14 units (13 individual students + the Ethan/Becky unit). Since Ethan and Becky can switch positions within their unit, this number is multiplied by 2. Therefore, there are 2 * 14! arrangements where Ethan and Becky are together
> 

### Inclusion - Exclusion Principle

**Consider the following list of 17 vegetables ——** 

artichokes, asparagus, beets, broccoli, cabbages, carrots, cauliflower, celery, corn, eggplant, lettuce, onions, peas, peppers, potatoes, spinach, zucchini

Of these, 

four — beets, carrots, onions, and potatoes—are root vegetables. 

Two — corn and potatoes—are starchy. 

How many are neither root vegetables nor starchy?

Well, the obvious thing to do would be to subtract the number of root vegetables

and starchy vegetables from the total, getting the answer

= 17 - 4 - 2 = 11

But, if you see potato is both root vegetable and starchy. So, it was subtracted twice and must be added back. 

= 11 + 1 = 12

It amounts to the observation that when you want to exclude two classes of objects from a pool and count the number left, you can start with the total number of objects in the pool and subtract the number of objects in each of the two excluded categories; but then you have to add back in the number of objects that belong to both classes and have therefore been subtracted twice.

## Collections v/s Sequences

Order does not matter in collections. Say in places where the end result is same, and it does not matter in what order you choose. 

The number of possible choices depends really on the number of objects in the pool. We are selecting from, and the number of objects to be selected from our collection. 

Take following examples,

**Order does not matter:**  (Collection)

Say if we are choosing a committee of 4 students out of a class of 15 students.
There are no distinctions among the four members of the committee; we just have to select four students from among the 15 in the class.

A pizza house offers 7 meat toppings, and 6 non-veg toppings. Now you are in a feeling to get a pizza with 3 meat toppings. How many pizzas are possible? 

Here, also the order does not matter since ordering a pizza with sausage, pepperoni, & hamburger gets you pretty much the same pizza, does not matter what you choose first. 

**Order does  matter (Sequences)**: 

Say if the choose President, Vice President, Secretary, Treasurer and Coordinator for a committee of 15 students.  (Sequence)

## Binomial Coefficients

---

*The number of ways of choosing a collection of $k$ objects, without repetition, from among n objects is*  $\Large \frac{n!}{k! (n-k)!}$

---

If order mattered, there would be $15!$ ways to choose the committee (15 choices for the first number, 14 for the second and so on..)

However, since the order does not matter, this method also counts a distinct committee multiple times, now each distinct object in k objects can be ordered in k! ways.  For a group of 4 students would be 4! ways to order them.

Total number of distinct committees = $\Large \frac{15!}{4!}$

Total ways of choosing 4 members when order matters = $\Large \frac{15!}{11!}$

Total ways of choosing 4 members committee (when order does not matter) = $\Large \frac{15!}{4! \times 11!}$

which comes down to the formula above. 

### Special Cases of Binomial Coefficient

**Symmetry:**  A fundamental property is that $\large {n \choose k}$ is always equal to $\large {n \choose n-k}$. This symmetry arises because choosing k items from a set of n is equivalent to deciding which $n-k$ items to leave out. 

**Choosing none, one or all:** 

$$
{n \choose 0} = 1
$$

$$
{n \choose 1} = n
$$

$$
{n \choose n} = 1
$$

Choosing two:

$$
{n \choose 2} = \frac{n \times (n-1)}{2}
$$

---

**Choose a committee of four students from a high school of 15 students, provided that all the members are not all juniors and all seniors. It is given that, there are 8 seniors and 7 juniors.** 

Total number of possible committees = $\large {15 \choose 4}$ = $\large \frac{15!}{4! \times 11!}$= 1,365

Total number of possible committees with all seniors = $\large {8 \choose 4}$ = $\large \frac{8!}{4! \times 4!}$ = 70

Total number of possible committees with all juniors = $\large {7 \choose 4}$ =  $\large \frac{7!}{4! \times 3!}$ = 35

Total possible committees with both juniors & seniors = 1,365 - 70 - 35 = 1,260.

---

**There are 10 players on a basketball team, and the coach  is going to divide them up into two teams of 5 —- Red team, Blue Team. She is going to do this randomly, meaning that all of the ${10 \choose 5}$ ways of assigning the players to the two teams are equally likely.** 

**Two of the players, Elena & Sofia are friends,** 

**“I hope we wind up on the same team”, Sofia says.** 

**“Well, we have 50/50 chance”, Elena replies. Is Elena right?** 

→ The crux is to check out of ${10 \choose 5}$ ways in how many Elena & Sofia end up on the same team.  And, this will be equal to the number of ways they are not.

1. **Elena & Sofia on same team**: 
Since, Elena & Sofia are already on the same team, we need to choose 3 more members out of remaining 8, which would be $\large {8 \choose 3}$
Now, since there are two teams, the numbers of possible teams where Sofia & Elena are on the same team are $\large 2 \times {8 \choose 3}$
= 2 x 56 = 112

1. **Elena & Sofia are not on the same team, are on the opposing teams.** 
Since, one of Elena & Sofia are chosen already there are more 4 members to be choosen out of 8. Also, there are two possibilities, Sofia on Team Red & Elena on Team Blue and vice-versa. 

Total number of possible teams that Elena & Sofia are on different teams $\large 2 \times {8 \choose 4}$

= 2 x 70 = 140
    
    
Conclusion: Elena is wrong. 
    
**Verification:** 
    
We know that there are $\large {10 \choose 5}$ ways of assigning 10 players to two teams. 
    
Now, $\large {10 \choose 5}$ = 252
    
Also, Total Ways in which Elena & Sofia are on same team vs not on the same team
    
= 112 + 140 
    
= 252
    
Now, P(Sofia & Elena on Same Team) = $\large \frac{112}{252}$ = ~ 0.444
    
---
    
**Scrabble Problem**
    
**You are playing liars’ scrabble — the game requires you to rearrange the letters on your rack you have letters “E, E, E, E, N, N, N”. How many ways are there to arrange these tiles?**
    
Seven letter words having 7 places to fill with E’s & N’s. In which 4 places are to be filled with E’s and 3 places are to be filled with N’s. 
    
${\hspace{1mm}=} \hspace{1mm} {7 \choose 4} \hspace{1mm} {=} \hspace{1mm} {7 \choose 3}  = 35$
    
**Suppose we live in a city laid out in rectangular grid, and our job is located three blocks $N’s$ & four blocks $E’s$. We have to walk 7 blocks to reach Home or Work. How many paths can we take?**
    
![image.png](Probability%208931b81c4de745cfb5fc39906507c814/image.png)
    
It is clear that you need to walk 7 steps, but there are different paths that can be taken. To find a path, we have to take a series of directions, lets say N denotes North & E denotes East. Hence. we can lay a path consisting of 3 $N’s$ and 4 $E’s$. Then, we end with a problem same as previous one. 
    
Generally, if we have a $m \times n$ grid, provided that number of paths in $m \times n$ grid is same as $n \times m$ grid. The number of such paths is given by $(\frac{m + n}{m})$ binomial coefficient,
    
**In a class of there are seven students with Orange shirts, and Seven students with black shirts. We want to line them in alternate colored shirt combination.** 
    
Separate the problem in two phases —-
    
1. Choose the places that are to be occupied by Orange shirt students, and then students with black shirts. (sequence of colors or 14 letter words consisting of O’s and B’s)
2. Assign a student wearing that color to each place. 


## Multiplication Principle v/s Addition Principle

The **addition principle** and the **multiplication principle** are both used for counting the number of ways to perform a task comprised of subtasks, but they are applied to different scenarios. 

The **addition principle** is used when the task can be completed by performing *exactly one* subtask from a set of mutually exclusive subtask. The addition principle states that, if a task can be done in $n1$ ways, or in $n2$ ways, ..., or in $nk$ ways, then the number of ways to complete the task is $n1$ + $n2$ + ... + $nk$.

If we have to determine how many ways a president and vice-president can be selected from an assembly comprised of members from three political parties: P1, P2, and P3, *if both the president and vice-president must be members of the same political party*.

This scenario is appropriate for applying the **addition principle**, because the task (selecting the president and vice-president) can be achieved by performing one of three mutually exclusive subtasks: selecting both officers from party P1, selecting both officers from party P2, or selecting both officers from party P3. The three subtasks are mutually exclusive because both officers cannot be selected from more than one party.

There are 4 members of P1, 5 members of P2, and 6 members of P3. A president and vice-president can be selected from P1 in 4 × 3 = 12 ways Similarly, a president and vice-president can be selected from P2 in 5 × 4 = 20 ways, and from P3 in 6 × 5 = 30 ways.

Because these subtasks are mutually exclusive (a president and vice president from the assembly can't be selected from more than one party), the addition principle can be applied. Therefore, the total number of ways to select a president and vice-president from the assembly is 12 + 20 + 30 = 62.

The **multiplication principle**, on the other hand, is applied **when the task can be completed by performing a *sequence* of subtasks**.
In the above example, however, If the president and vice-president can be from different parties, the task of selecting the two officers can be broken down into a sequence of two subtasks: 

first, selecting the president, then selecting the vice-president. Therefore, this scenario is appropriate for applying the multiplication principle,

Assuming there are still three parties to choose from (P1, P2, and P3), with 4, 5, and 6 members respectively, there would be 15 $(4+5+6=15)$ ways to   select the president.

Since the vice-president can be from a different party, there would be 14 possible candidates remaining after the president is selected, regardless of what party the president belongs to. 

Therefore, according to the **multiplication principle**, there are $15 \times 14 = 210$ ways to select a president and vice-president if the two officers do not need to be from the same party. 

---

In summary, the **addition principle** is used when a task can be completed by performing *one* subtask from a set of mutually exclusive subtasks, and the **multiplication principle** is used when a task can be completed by completing a *sequence* of subtasks.

## Permutations v/s Combinations

**Permutations are ordered arrangements of objects (Sequences), while combinations are unordered selections of objects (Collections).**

Imagine selecting a class president, vice president, and treasurer from a group of 15 students. This scenario involves **permutations** because the order matters (choosing John as president, Sarah as vice president, and Bill as treasurer is different from choosing Bill as president, John as vice president, and Sarah as treasurer)

On the other hand, if you're choosing a committee of three students from the same group, the order doesn't matter (a committee with John, Sarah, and Bill is the same as a committee with Bill, John, and Sarah). This is a scenario for **combinations**

| Feature                 | Permutations         | Combinations          |
| ----------------------- | -------------------- | --------------------- |
| **Order**               | Matters              | Doesn't matter        |
| **Formula**             | $P(n, r) = \frac{n!}{ (n - r)!}$     | $C(n, r) = \frac{n!}{r! (n-r)!}$     |
| **Examples**            | Arranging 15 books on a shelf        | Choosing a committee of 3 students from a group of   |
| **Real World Examples** | Determining the number of possible 3-digit numbers formed from the digits 2, 3, 5, 7, 8, 9 without repetition | Calculating the probability of getting dealt a specific hand in poker, like a pair or a flush. |

Understanding these differences is crucial for solving various counting problems in probability, statistics, and other fields.

# **Probability**

Probability is a concept which numerically measures the degree of uncertainty and therefore certainty of occurrence of an event.

**Experiment -** Something that produces a well-defined outcome (something happens) → flipping a coin, rolling a dice. 

**Deterministic Experiments -** Where the outcome is known before the experiment is performed. e.g., science lab experiments.

Random / Stochastic Experiments - experiments whose outcome cannot be precisely predicted primarily because the totality of factors influencing the outcome are either not identifiable or controllable at the time of experiments.

**Trial** - A random experiment may consist of sub experiments. These are called Trials.

**Sample Space (s)**

- List (set) of all possible outcomes.
- The set must be mutually exclusive (two events cannot occur at the same time, nothing in common) & collectively exhaustive (at least one event will definitely happen).
- Art: to be at right granularity.
Understanding Art: Consider sample space — 
Heads & Rains, Heads & No Rains, Tails & Rain, Tails & No Rain
Now, this is a valid sample space. But the occurrence of H & T v/s Rain & No-Rain are totally unrelated to flipping a coin. The rain outside does not affect H/T in any possible way.

Sample spaces are classified in finite / in-finite according to the sample points they contain. 

1. Three successive flips of a coin (finite / discrete sample space).  
2. Throw a dart on a target (infinite / continuous sample space).

Sample Spaces for —-

- Flipping a Coin = $\{ H, T \}$
- Rolling a Die = $\{ 1, 2, 3, 4, 5, 6\}$
- Three Successive Flips of a Coin -
    
    $\{ (H, H, H), (H, H, T), (H, T, T),  (H, T, H), (T, H, T), (T, T, H), (T, H, H), (T,T,T)  \}$
    

**Sample Point** - The outcome of a trial. 

For random experiment, three successive flips of a coin. Each flip is a trial. While each possible outcome is a sample point, while set of all sample points is a sample space. 

**Event** - Specific Collection or a subset of sample points.

**Equally Likely Events** - when all events in the sample space has equal chance of occurrence.

**Algebra of Events** 

For sample space S, if $A \subseteq B$ and  $B \subseteq S$, then A and B are events. 

1. $A \cap B$ is an event that occurs when each of A & B occurs. 
2. $A \cup B$ is an event that occurs only when at least one of A & B occurs.
3. $\overline{A}$ is an event that occurs when A does not occur.

![image.png](Probability%208931b81c4de745cfb5fc39906507c814/image%201.png)

![image.png](Probability%208931b81c4de745cfb5fc39906507c814/image%202.png)

![image.png](Probability%208931b81c4de745cfb5fc39906507c814/image%203.png)

     $P(A^c) = 1 -  P(A)$                                   $A \cap B$                                                    $A \cup B$

**Relative Frequency** - It measures how often a particular event occurs in relation to the total number of events. 

                             $Relative Frequency = \dfrac{Frequency \, of \, the \, Event}{Total \, Number \, of \, events} = \dfrac{f_n(E)}{n}$

Coin flipped 20 times lands heads 12 times, relative frequency of getting heads = 12/20 = 0.6

Relative frequency may fluctuate initially but would settle down around a constant value for large number of experiments.  

                            $f_n(E) \approx f_{n+1}(E) \approx f_{n+2}(E)$

Relative frequency is an experimental measure of how often an event occurs based on actual outcomes of the experiment.

**Relative frequency** is calculated **after** the experiment. 

**Probability** - Probability is the theoretical measure of how likely an event is to occur based on possible outcomes of the experiment. 

Probability $P(E)$ of event E is the proportion of times an event E takes place when the underlying experiment is repeated a large number of times under identical conditions. 

Probability is calculated **before** the experiment.

The constant around which the relative frequency of an event E settles down as the number of repetitions become large $\lim_{n \to \infty} f_n(E)$  is called probability of E.

Probability is the likelihood that a particular event will occur. 

                 $P(E) = \dfrac{No. \, of \, favorable \, outcomes }{Total \, no \, of \, possible \, outcomes}$

For a six-sided die, probability of getting a 3 —

         $P(3) = \dfrac{1}{6}$

Here we say that the probability of getting a 3 on roll of a die is 1/6 does not mean every 6th roll is a 3, what we mean mean that 1/6th of the large number of rolls of a die will result in getting a 3. 

**Probability Axioms**                          

1. Probability should be non-negative.
     $P(A) ≥ 0$                                                               (non-negativity)
2. Probability of entire sample space is equal to 1. 
    
         $P(\Omega) = 1$                                                                (normalization)
    
3. If for two events, the intersection of events has no elements $(A \cap B)$, then total probability of A together with B is equal to the sum of $P(A)$ and $P(B)$
    
    If $A \cap B = \phi$, then $P(A \cup B) = P(A) + P(B)$
    
4. $P(E) =  1 - P(\overline{E})$, useful in problems where it is easier to compute $P(\overline{E})$
5. If, $P(E) = 0$, then $P(\overline{E})$ is always 1.

1. Probabilities must be between 0 & 1.
2. Probability + Complementary Probability = 1
3. Probability of all possible events must add to 1.

---

**Independent Events**

Two events are called independent if occurrence of one event does not influence the probability of occurrence of another event. Example, Rolling a Die, Flipping a Coin together — are mutually exclusive events.  

Outcome of one event has influence over the outcome of the other. 

**Dependent Events**

Occurrence of one event influences the outcome of another event. 

Outcome of one event provides information about about the other. — Drawing cards from standard deck. 

**Mutually Exclusive Events**

Events E and F are disjoint (mutually exclusive) if they  do not have a common sample point $E \cup F = \Phi$.  

Events that cannot take place at the same time, Rolling 2 or 5 on a die at the same time.

Events that cannot occur simultaneously.

- For a coin flip, P(Heads) and P(Tails) are mutually exclusive.

               $P(Head \,\, and \,\,  Tails) = 0$

- Mutually exclusive events are always independent, but independent events are not necessarily mutually exclusive.

**Mutually Inclusive Events**

Events where one event can occur with another — Rolling an even number, and Rolling a 4 on a die. 

Non Mutually exclusive events can occur at the same time, while independent events are unaffected by each other’s outcome. 

**Conditional Probability**

Conditional probability is denoted as $P(E|F)$. It is probability of event E provided that event F has occurred already. 

It provides a way to update the probability of an event based on new information. 

   $P(E \, | \, F) = \dfrac{P(E \cap F)}{P(F)}$

**Probability of drawing a red card provided that a card drawn is a heart.** 

 $P(Red | Heart) = \dfrac{P(Red \cap Heart)}{P(Heart)}$

Since, all hearts are red. So, $P(Red \cap Heart)$ = $P(Heart)$ = $\dfrac{13}{52} = \dfrac{1}{4}$

$P(Red | Heart) = \dfrac{1/4}{1/4} = 1$

⇒ If card is heart it is definitely Red. 

**Find the probability of drawing a heart provided that the card drawn is a face card?**

Event A: Drawing a Heart

Event B: Drawing a Face Card ( King, Queen, Jack)

$P(B) = \dfrac{3 \, Face \, Cards \times 4 \, suits}{Total \, Cards} = \dfrac{12}{52} = \dfrac{3}{13}$

$P(A \cap B) = \dfrac{P(Drawing \, Heart \, that \, is \, also \, face \, card)}{Total Cards} = \dfrac{3}{52}$

$P (A | B) = \dfrac{P(A \cap B)}{P(B)} = \dfrac{3/52}{3/13} = \dfrac{3}{52} \times \dfrac{13}{3} = \dfrac{1}{4}$  

**Conditional Probability vs Probability w/ Replacements**

Conditional Probability is used to find the probability of event A provided that Event A has occurred already. 

Meanwhile, in replacement problems we want the probability of two events occurring at the same time.

### Addition Rule

1. **Mutually Exclusive**
    
    $P (A \,\,or \,\, B) = P(A)  + P(B)$
    
    P (Getting 2 or 5 on Roll of a Die) = P(Roll 2) + P(Roll 5)
    
                                                           = $\dfrac{1}{6} + \dfrac{1}{6} \,\,\, = \dfrac{2}{6} \,\,\,= \dfrac{1}{3}$  
    
2. Mutually Inclusive or General Application
    
    $P (A \,\,or \,\, B) = P(A)  + P(B) - P(A \cap B)$
    
    For example, Drawing a card from a standard deck of 52 cards, such that the drawn card can either be a King or a Club. In this case, if the card drawn is “King of Clubs” it satisfies both. 
    
    You must note that here both the events have combined together, it is different from dependent events where we have two events occurring one after the another.
    
    P (Getting King or Club) = P (Getting King) + P (Getting Club) - P(Getting King of Clubs)
    
                                           = $\dfrac{4}{52} + \dfrac{13}{52} - \dfrac{1}{52}$
    
                                    = $\dfrac{16}{52}$
    
                                    = $\dfrac{4}{13}$
    

### Multiplication Rule

— applies to independent events

$P (A \,\,and \,\, B) = P(A) \times P(B)$

| Adding Probabilities      | Mutually Exclusive & Mutually Inclusive events |
| ------------------------- | ---------------------------------------------- |
| Multiplying Probabilities | Independent Events                             |
| Conditional Probability   | Dependent Events                               |

Applying counting principles to calculate probabilities in various games of chance.

- **Flipping Coins:** Analyzing probabilities of different outcomes when flipping coins multiple times.
- **Rolling Dice:** Extending the concepts from coin flipping to dice, including calculating probabilities of specific sums and combinations.
- **Playing Poker:** Determining the probabilities of obtaining different poker hands, such as a flush or a full house, by counting possible card combinations.
- **The Birthday Problem:** Exploring the surprisingly high probability of two people sharing a birthday in a group

### Probability Examples (Basic)

1. **What is the probability of rolling 4 on a fair six sided die?**
Favorable Outcomes  — 1
Total Outcomes — 6

$P(4) =\dfrac{1}{6}$

2. **Probability of drawing a heart from a standard deck of 52 cards?**
Favorable Outcomes =  13
Total Outcomes = 52

$P(Heart) =\dfrac{13}{52} = \dfrac{1}{4}$

3. **A bag contains 3 red, 2 blue and 5 green balls. What is the probability of picking up a blue ball?**
    
    Favorable Outcomes =  2
    Total Outcomes = 3 + 2 + 5 = 10
    
    $P(Blue \,\, Ball) = \dfrac{2}{10} = \dfrac{1}{5}$
    
4. **What is the probability of getting a sum of 10 when rolling two dice?**
Favorable Outcomes = (4, 6), (5, 5), (6, 4) = 3
Total Outcomes = 6 x 6 = 36

$P(Sum \, = \, 10) = \dfrac{3}{36} = \dfrac{1}{12}$

5. **If a bowl contains 3 red, 2 Black and 5 Green marbles, what is probability of picking a marble that is not black?** 
Favorable Outcomes = 3+ 5 = 8
Total Outcomes = 3 + 2 + 5 = 10 
    
    
    $P (Not \, Black) = \dfrac{8}{10} = \dfrac{4}{5}$
    
     
    Method 2: 
    
    P (Not Black) = 1 - P(Black)
    
    $P(Black) = \dfrac{2}{10} = \dfrac{1}{5}$
    
    ⇒ $P(Black) = 1 - \dfrac{1}{5} = \dfrac{4}{5}$
    

### Replacement Problems

**A box containing 3 Red balls and 2 blue balls. A ball is drawn and then kept back into the box. What is the probability  of getting two red balls. (with replacement problem)**

$P(Red First) = \dfrac{Red \, Balls}{Total \, Balls} = \dfrac{3}{5}$

Since, the ball drawn is kept back into the box. $P(Red \, Second) = P(Red \, First)$

$P(Two \, Red \, Balls) = P(Red \, First) \times P(Red \, Second) = \dfrac{3}{5} \times \dfrac{3}{5} = \dfrac{9}{25}$

**What if, you are not allowed to keep the balls back into the box. What will the probability be then? (without replacement problem)**

Here, P(Red First) will remain the same. But, P(Red Second) changes since the sample space has decreased (we have to choose from total of 4 balls). 

$P(Red \, Second) = \dfrac{Remaining \, Red}{Remaining \,Total} = \dfrac{2}{4} = \dfrac{1}{2}$

$P(Two \, Red \, Balls) = P(Red \, First) \times P (Red \, Second) = \dfrac{3}{5} \times \dfrac{1}{2} = \dfrac{3}{10}$

| With Replacement             | Without Replacement                    |
| ---------------------------- | -------------------------------------- |
| Total Outcomes are constant  | Total outcomes decrease with each draw |
| Events are independent       | Events are dependent                   |
| Calculations remain the same | Calculations change with each outcome  |

### Probability Examples (Tricky)

1. In an MCQ test of 100 Questions problem
2. A: Both Children are boys
B: Elder Child is a Boy
C: Atleast one child is a boy
3. E5, p47 / E6, E7 - p48 / P3 - p49 / E8, E9 - p50 / E11 - p52 / E12, E13, E14 - p53 = BCS 040

## Probability Distributions

In most real-life situations the value of characteristic of interest may depend on large number of factors which are not constant over space or time. It is better than to model the situation as a random experiment and value of characteristic as outcome of random experiment (random variable)

**Random Experiments** are experiments whose (outcome) cannot be predicted in advance.

**Random Variables** are variables whose value cannot be predicted in advance. These are the outcomes of random experiments. 

Random Variables take on different *numeric* values based on chance outcomes. 

There are two types of random variables — Discrete Random Variables and Continuous Random variables

A **probability distribution** gives the probabilities with which the random variables take on various values in their range. 

### Probability Mass Function (Discrete Random Variables)

### Probability Density Function (Continuous Random Variables)

# Statistics

Statistics involves the collection, organization, analysis and interpretation of data. A collection of data is called a data set, a data point is a single observation within that data set.

**Ways to collect data**

1. Data can be collected by surveying the population for the required data.
2. Data can also be collected from a sample of the population, and then this information can be used to make a guess about the actual population. 

- The population can be finite and observable, but it can also be conceivable and hypothetical.
- Data relevant for any study can be obtained from published works, collections of the government, or from direct field work.

**Kinds of Data**

- For numerical data, corresponding characters are called variables. There are two types of numerical data.
    - Discrete / Discontinuous Variables
    - Continuous Variables
- For categorical data, corresponding characters are called attributes.
- Data can also be grouped (ordered) or ungrouped.

Frequency Distribution

- Frequency is the number of times a value occurs.
- An organized display of data showing the frequency of each value in a data set against its value or mutually exclusive classes into which these values fall is a frequency distribution.
- A tabular display of data showing how many observations lie above or below a certain values is a cumulative frequency distribution.
    
    
    |        |           | Cumulative     | Frequency      |
    | ------ | --------- | -------------- | -------------- |
    | Scores | Frequency | Less than type | More Than Type |
    | 0-1    | 3         | 3              | 100            |
    | 2-3    | 13        | 16             | 97             |
    | 4-5    | 36        | 52             | 84             |
    | 6-7    | 35        | 87             | 48             |
    | 8-9    | 13        | 100            | 13             |
    | Total  | 100       |                |                |

### Summarization of Data

1. Measures of Central Tendency
    1. Mean
    2. Median 
    3. Mode
2. Measures of Dispersion / Variation
    1. Range
    2. Mean Deviation
    3. Standard Deviation
    4. Dispersion / Variance

### Graphical Representation of Data

1. Bar Charts
2. Histograms
3. Line Charts
4. Pie Charts
5. Box Plots
6. Scatter Plots
7. Stem & Leaf Plots
8. Heatmaps?
9. Frequency Polygons