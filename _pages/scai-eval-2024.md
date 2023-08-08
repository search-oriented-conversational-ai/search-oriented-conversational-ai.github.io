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
What distinguishes a good search-oriented conversation with an AI from a bad one? Are better conversations more in-depth, shorter, or better backed up? Since many aspects of conversations can play a role for their evaluation, this shared task calls to the community to collect aspects of interest, guidelines for their manual assessment, and software for their automated assessment. The outcome will be a comprehensive evaluation suite and a collaborative publication of all contributors. 

We seek contributions (novel or already published) in three categories:
1. [Data](#data-submission). To capture the variety of search-oriented conversations (e.g., with or without AI, written or spoken, explorative or target-oriented), we seek contributions of one or more conversations in a common format.
2. [Aspects](#aspect-submission). To compile a comprehensive overview of aspects to evaluate search-oriented conversations by (e.g., relevance of information, fluency of conversation), we seek definitions, rationales, and annotation guidelines for aspects.
3. [Metric](#metric-submission). To create a comprehensive evaluation suite for search-oriented conversations, we seek submissions of evaluation software that automatically assess the aspects.

Register here to participate or just to stay informed: (TODO: link to form)


### Schedule
* October 2, 2023: Submission starts
* January 29, 2024: Submission deadline
* February 5, 2024: Judgment period starts
* February 16, 2024: Judgment period ends
* March 4, 2024: Results and judgments release
* TBD: Workshop


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


### Aspects submission
We seek contributions of aspects of the following form:
1. Name of the aspect.
2. Short rationale of what the aspect is and why it could be useful to evaluate search-oriented conversations (500 characters max).
3. Range of the aspect: categorical, ordinal, or numerical, and the name of categories or minimum and maximum value.
4. Annotation guidelines for the human judgment of search-oriented conversations by the aspect (1000 characters max) plus up to five annotated and explained examples.
5. List of [data attributes](#data-submission) required for judging the aspects as per the guidelines.


#### Measure submission


### Task Committee
* Johannes Kiesel, Bauhaus-Universität Weimar
* Maik Fröbe, Friedrich-Schiller-Universität Jena
* Andrea Papenmeier, University of Twente
* Alexander Frummet, Universität Regensburg


