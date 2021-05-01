# Week 1 Lecture - FSW125

Learning goals for weeks 1 & 2 => familiarize ourselves more with node while refreshing parts of vanilla JS that will help us move into writing our own servers with express.js in the coming weeks.

## Agenda

    1) Introduction
    2) Problem Solving Process
    3) How To Ask a "Good" Question
    4) Node.js => Node Patterns and Modularization
    5) Callbacks, Closure, & The Node Event Loop *

### 2. Problem Solving Process

Starting and maintaining a good problem solving process is a **vital** skill as a programmer. This is especially important for students and soon to be junior level devs.

The key here is to find something that works for you and stick to it no matter what. As the idium goes, "3 hours of planning can save you 3 days of headaches."

#### Example) The 20 min rule

Conceptually we never want to be stuck on a given problem for more than 20 minutes. Let's take a look at that practically.

1) Given any problem or task the first step will always be to map out your direction, idea, data strucure & flow, components, local & global state, folder structure, required modules, ...etc. This can be quick but is vital to our process. Should be done with psedo code and some form or drawings or wireframing.

2) Code out the scaffold of your project and start working on your tasks, constantly testing or reffering to the unit tests provided to you. Important to do this as you develop (Test Driven Development) not once you complete hours of coding.

3) When stuck try different solutions for no more than 20 mins in your IDE. DO NOT use destructive code — meaning comment out old code not deleting it in lie of copy pasting new code from the internet. Creating this breadcrumb of ideas 99% of the time will lead you to your answer before moving forward.  _show example_

4) Take a break! This can mean any number of things I usually suggest to go work on other code. Something that is "easy" or "easily" completed in your project. Often times writing sucessfull code can get your brain flowing again. Or go for a walk, do some pushups, find your peace, take the dog out — whatever works for you.

5) Try again for 20 minutes. You should not have went through stack overflow or anythign yet if you are goign to use outside materials it should be from your notes or the **documentation** for whatever you are using. I know often your answer can be found easily on SO but at your level I think it will help you immensely to try and figure it out without that help. Leading to a stronger knwledge base will make your interview process easier and ultimately add more value to the first company you go to work for.

6) Leave comments **everywhere**. If you are not, start immediately and do not stop. This is important for your own sanity but also good practice for when you join a team. Think of facebooks codebase and 100,000 some developers globally. Imagine looking at some code and trying to figure out a bug or what the problem is with no test files or comments. Write comments everywere. Full stop. This will also differenite your code from other juniors as you move into the interview process.

7) If you can not figure it out yet now head online in this order — documentation, blogs/vids/articles, stack overflow. When using google for these look for **recent** posts.

8) If you are still stuck you need to ask somebody for help. Utilize your networks. Start thinking about the fact you will not have this BU network soon and begin thinking about how to create your own moving forward. Twitter, dischords, slack channels, meetups.

### 3. How To Ask a "Good" Question

Asking a good question is not only for yourself but helps the person helping you quickly and efficently figure out what in the hell is going on in your jumbled mess of a project and how to help you through it. At first this will be your support system at BU, next most likely stack overflow, and lastly your mentor or senior level devs. The very first thing your senior dev will ask you will be did you google it.

#### Contents of a "good" question

1) Code snippets of every file involved. If full stack MERN this could be 5-10 ... all labeled on the top with a comment of the name of the file. Including the commented out code of your "tries."

2) A description of the problem you are trying to solve, or what you are tryign to accomplish. Think — how do I do x ..... tell us what x is.

3) What you specifically have done to try and solve this problem.

4) What error you are getting and any associated screenshot of that error.

### 4. Node.js => Node Patterns and Modularization

Node is a server side JS runtime env ... allowing use of JS on computer not in browser (v8 engine = chrome)

#### 3 Types of Modules

1) External/3rd Party - installed via NPM
2) Node Core Modules - intentially minimal built in (no need to install). Includes path, fs, OS, util, and more.
3) File Based - within our own application, using a pattern of module.exports and require.

Similar to es6 import/export. 

[More on Node Module Patterns](https://coursework.vschool.io/node-module-patterns/)

### 6. Callbacks, Closure, & The Node Event Loop

What is a cb?

Why do we use or need them?

What is closure?

The node event loop enables Node’s non-blocking asynchronous I/O model,which is the key to Node’s ability to scale under load. This is accomplished even though Javascript is single-threaded.

It accomplishes this by handing off expensive I/O operations to the multi-threaded system kernel to complete without blocking Node's single threaded operations.

Then the kernel lets Node know when an operation is completed, and Node uses callbacks and the event loop to pick up where it left off

#### Six phases of the node event loop

    1) Timer*
    2) Pending Callbacks
    3) Idle, Prepare
    4) Poll*
    5) Check*
    6) Close Callbacks

*Typically only the Timer, Poll, and Check phases will be relevant to a Node developer – the rest are handled by Node in the background.

**Timer phase: Handles callbacks from setTimeout() and setInterval()

**Poll phase: Processes I/O callbacks in a queue, waits for more callbacks  

**Check phase: Handles callbacks from setImmediate() which are run as soon as poll phase's callbacks queue is empty

#### Javascript Functions Review

* First-Class Functions

    A programming language has "first-class functions" when it supports treating functions like any other variable – JavaScript has first-class functions

    With first-class functions, functions can be assigned to variables, passed around as arguments to other functions, used as the return value of another function.

* Higher-Order Function

    A function that takes another function as an argument, or returns a function as its return value.

* Callback Function

    A function that is passed to another function as an argument which is then run (called back)inside that function, often asynchronously.

Different ways to envoke JS fx's ???

1)
2)
3)

**

#### Node Callback Pattern & Error Callback Convention

*see images folder*

More on cb's, closure, and the node event loop.

[I/O-bound vs CPU-bound in Node.js](https://bytearcher.com/articles/io-vs-cpu-bound/)

[NodeJS - The Node.js Event Loop](https://nodejs.org/fa/docs/guides/event-loop-timers-and-nexttick/)

[IBM Developer - Learn Node.js - The Event Loop](https://developer.ibm.com/tutorials/learn-nodejs-the-event-loop/)

[Codeburst.io - What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

[MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[Closure & Lexical Scope](https://dev.to/stephencweiss/closure-lexical-scope-12f4)
