---
title: "SCAI Eval 2024"
permalink: /scai-eval-2024/
layout: single
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.1"
  overlay_image: /assets/images/bc.png
---

### Synopsis
What distinguishes a good search-oriented conversation with an AI from a bad one? Using a single aspect of conversations for evaluation fails to produce a complete picture, as aspects like information relevance, being true to some source, ease of understanding, and many more play a role. To assist researchers in evaluating their conversational search systems, this shared task calls to the community to collect a comprehensive evaluation suite: diverse example data, guidelines for human ground-truth annotation, and implemented evaluation metrics.

1. [Data](#data-submission). To capture the variety of search-oriented conversations (e.g., with or without AI, written or spoken, explorative or target-oriented), we seek contributions of one or more example conversations in a common format.
2. [Annotation guidelines](#annotation-guideline-submission). To compile a comprehensive overview of aspects to evaluate search-oriented conversations by, we seek contributions in terms of definitions and guidelines for human ground-truth annotation.
3. [Metrics](#metric-submission). To create a software package to easily evaluate search-oriented conversations, we seek software that attempts to automatically recreate human annotations for search-oriented conversations (see 2.).

You can submit both novel and already published material. The submission process (see below) is open to allow for feedback and discussions from the start. All contributors will be invited to co-author a publication that summarizes the collected evaluation suite. In preparation for discussions at the SCAI workshop and in the paper, we expect every co-author to invest a bit of their time (about two hours each) in February to annotate a few conversations according to the submitted guidelines.

Register here to participate or just to stay informed: (TODO: link to form)


### Schedule
* October 2, 2023: Submission starts
* January 29, 2024: Submission deadline
* February 5, 2024: Annotation period starts
* February 23, 2024: Annotation period ends
* March 4, 2024: Results and annotations release
* TBD: SCAI workshop and planning for overview publication


### Data submission
We seek contributions of search-oriented conversations that adhere to the following format. The only required attributes are <code>turns</code>, <code>utterance</code>, and <code>response</code>. Already published conversations are also welcome. If your data contains attributes that are not shown here, we will expand this format upon your request. The current format is:

```json
{
  "id": "conversation-id",
  "turns": [
    {
      "id": "conversation-id-and-turn-id",
      "utterance": "markdown-text-sent-by-user",
      "response": "markdown-text-sent-as-response-by-system",
      "provenance": [ 
        { "text": "source-text-for-response" }
      ]
    }
  ]
}
```

To submit data (and request changes to the format), create a topic in the [SCAI Eval Data Submission forum](https://www.tira.io/c/scai/scai-eval-data-submission/12) (access granted upon registration; use the upload button to upload the data as json or jsonl file). Also use this forum to discuss data submissions or the data submission for SCAI Eval in general.

The collected dataset is freely available and its current version can be downloaded here (TODO: link to download).


### Annotation guideline submission
We seek contributions of aspects of the following form:
1. Name of the aspect.
2. Short rationale of what the aspect is and why it could be useful to evaluate search-oriented conversations (500 characters max).
3. Annotation guidelines, including
  * Range of annotations (available labels).
  * List of [data attributes](#data-submission) required for annotation.
  * A short text (1000 characters max) describing how an annotator should select a label for a conversation.
  * Up to two explanatory examples per label (500 characters max for each example).


### Metric submission


assistance for dockerization


### Task Committee
* Johannes Kiesel, Bauhaus-Universität Weimar
* Maik Fröbe, Friedrich-Schiller-Universität Jena
* Andrea Papenmeier, University of Twente
* Alexander Frummet, Universität Regensburg


