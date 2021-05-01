# Week 3 Lecture - FSW125

Week 3 & 4 learnign goals => Introduction to the req <-> res cycle and express. Here we will be building on the lightweight framework with some more technical ideas paving the way for the second half of the course where we will put into practice most of what we have learned already in the program.

## Agenda

    1) Weeks 1 - 2 Recap
    2) The HTTP Req/Res Cycle
    3) Express.js *
    4) Nodemon
    5) API's *
    6) URL Parameters & Queries *

### 1. Week's 1 - 2 Recap

- Problem Solving Process
- How To Ask a "Good" Question
- Node.js => Node Patterns and Modularization
- Callbacks, Closure, & The Node Event Loop

### 2. The HTTP Req/Res Cycle

A HTTP req/res cycle is considered stateless .... what does that mean?

By what means can we add "state" to this cycle ??

### 3. Express.js

req, res, and next are called [streams](https://medium.com/developers-arena/streams-piping-and-their-error-handling-in-nodejs-c3fd818530b6), which are special node objects.

http verbs => express routing methods
CRUD vs HTTP

    1)
    2)
    3)
    4)

Each method takes a path and a callback function – Express calls it a "handler", more or less what Node docs call a "request handler." It handles the request that comes in via that particular HTTP verb.

resource operation = ______ + ______ ?

*query strings are not part of the route path.

*resource operation does not equal endpoint!

### 4. Nodemon

*check* *check* .... *check — 1 2*

### 5. API's

An application programming interface is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. Below are a few of the most common conventions:

#### SOAP

**SOAP** (Simple Object Access Protocol) is a standards-based web services access protocol that has been around for a long time. Originally developed by Microsoft, SOAP isn’t as simple as the acronym would suggest. It uses XML and structure to expose their own arbitrary set of operations.

#### REST

Instead of using XML to make a request, **REST** (usually) relies on a simple URL. In some situations you must provide additional information, but most web services using REST rely exclusively on using the URL approach. REST can use four different HTTP 1.1 verbs (GET, POST, PUT, and DELETE) to perform tasks.

Unlike SOAP, REST doesn’t have to use XML to provide the response. You can find REST-based web services that output the data in Command Separated Value (CSV), JavaScript Object Notation (JSON) and Really Simple Syndication (RSS). The point is you can obtain the output you need, in a form that’s easy to parse within the language you’re using for your application.

The guidlines for a "RESTful" api:

1) client-server seperation

2) statelessness

3) uniform interface

4) cacheable

5) layered system

6) code on demand

#### N+1

[REST API N+1 Problem](https://restfulapi.net/rest-api-n-1-problem/)

### 6. URL Parameters & Queries

[Anatomy of a URL](https://doepud.co.uk/blog/anatomy-of-a-url)

#### **Parts of a URL**

- Base: http://www.amazon.com
- Endpoint: http://www.amazon.com/images
- Parameter: http://www.amazon.com/images/1skcasnjasndjsn

*see assets*

    accessible via req.params & req.query in key:value formatted objects

In the above example **1skcasnjasndjsn** is the parameter and the value of our key:value pair.

URL parameters are used to create a "GET ONE" route and would look like this with **movieId** being the key and inserted via a wildcard syntax(colon before), somethign we should be familiar with from react router match params.

```Javascript
movieRouter.get(":movieId", (req, res) => {
    //some stuff
})
```

#### **Query String (typically used to filter results)**

- Begins with the "?"
- Built of key:value pairs
- Multiple queries seperated with the "&"

Here is an example of a URL with query strings attached:

    https://stackabuse.com/?page=2&limit=3

    The query parameters are the actual key-value pairs like page and limit with values of 2 and 3, respectively.

Your query parameters can be retrieved from the query object on the request object sent to your route (req.query). It is in the form of an object in which you can directly access the query parameters you care about. In this case Express handles all of the URL parsing for you and exposes the retrieved parameters as this object.
