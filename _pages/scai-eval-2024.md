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
What distinguishes a good search-oriented conversation with an AI from a bad one? There are many answers to this question. The goal of this shared task is to collect rationales, judgment guidelines, and automated measures for as many different answers as possible to provide the community with a conversation evaluation suite.

Register here to stay informed: TODO


### Schedule
* October 2, 2023: Submission starts
* January 22, 2024: <a href="#data-submission">Data submission</a> deadline
* January 29, 2024: Guidelines submission deadline (integrating feedback still possible)
* February 5, 2024: Final submission deadline / judgment period start
* March 4, 2024: Results and judgments release
* TBD: Workshop


### Data
This task employs a minimal but extensible conversation data format inspired by the <a href="https://github.com/daltonj/treccastweb/tree/master">TREC CAsT</a> format. The JSON format is exemplified below. Each JSON object within the root array represents one conversation, with each object in <code>turns</code> representing a single turn of that conversation in temporal order. Only the <code>utterance</code> and <code>response</code> attributes are mandatory for each entry of <code>turns</code>. The current dataset is available @TODO.

<pre>
[
  {
    "turns": [
      {
        "utterance": "markdown-text-sent-by-user",
        "response": "markdown-text-sent-as-response-by-system",
        "provenance": [ 
          {
            "text": "source-text-for-response"
          }
        ]
      }
    ]
  }
]
</pre>


#### Data submission
We are looking for data contributions from the community to diversify our dataset. If you have data for 5 to 10 search-oriented conversations that fit our minimal format, please submit them to us via TODO. Your data may contain more attributes or may be missing some attributes, as long as each turn contains the <code>utterance</code> and <code>response</code> attributes.


### Task


#### Measure submission


### Task Committee
* Johannes Kiesel, Bauhaus-Universität Weimar
* Maik Fröbe, Friedrich-Schiller-Universität Jena
* Andrea Papenmeier, University of Twente
* Alexander Frummet, Universität Regensburg


