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

We seek contributions in three categories. Contributions can be novel or already published.
1. Data. To capture the variety of search-oriented conversations (e.g., with or without AI, written or spoken, explorative or target-oriented), we seek contributions of one or more conversations in a common format.
2. Evaluation aspects. To compile a comprehensive overview of aspects to evaluate search-oriented conversations by (e.g., relevance of information, fluency of conversation), we seek definitions, rationales, and annotation guidelines for aspects.
3. Software.

Register here to participate or just stay informed: TODO


### Schedule
* October 2, 2023: Submission starts
* January 22, 2024: <a href="#data-submission">Data submission</a> deadline
* January 29, 2024: Guidelines submission deadline (integrating feedback still possible)
* February 5, 2024: Final submission deadline / judgment period start
* March 4, 2024: Results and judgments release
* TBD: Workshop


### Data
The dataset consists of search-oriented conversations. Each conversation is formatted as follows, where each turn has an <code>utterance</code> and a <code>response</code>, and <i>may</i> have other attributes:

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


#### Data submission
We are looking for data contributions from the community to diversify our dataset. If you have data for 5 to 10 search-oriented conversations that fit our minimal format, please submit them to us via TODO. Your data may contain more attributes or may be missing some attributes, as long as each turn contains the <code>utterance</code> and <code>response</code> attributes.


### Task


#### Measure submission


### Task Committee
* Johannes Kiesel, Bauhaus-Universität Weimar
* Maik Fröbe, Friedrich-Schiller-Universität Jena
* Andrea Papenmeier, University of Twente
* Alexander Frummet, Universität Regensburg


