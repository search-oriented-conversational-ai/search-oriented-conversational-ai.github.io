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

What distinguishes a good search-oriented conversation with an AI from a bad one? Using a single aspect of conversations for evaluation fails to produce a complete picture, as aspects like information relevance, being true to some source, ease of understanding, and many more play a role. To assist researchers in evaluating their conversational search systems, this shared task calls to the community to collect comprehensive evaluation resources: example data of diverse search-oriented conversations, definitions and annotation guidelines for aspects to evaluate, and implemented evaluation metrics.

1. [Data](#data-submission). To capture the variety of search-oriented conversations (e.g., written or spoken, explorative or target-oriented), we seek contributions of one or more example conversations in English and in a common format.
2. [Aspect definitions](#aspect-definition-submission). To compile a comprehensive overview of aspects to evaluate search-oriented conversations by, we seek contributions in terms of definitions and guidelines for human ground-truth annotation.
3. [Metrics](#metric-submission). To create a software package for the evaluation of search-oriented conversations, we seek software that attempts to automatically recreate human annotations for search-oriented conversations (see 2.).

You can submit both novel and already published resources to one or more of the three categories. The submission process (see below) is open to allow for feedback and discussions from the start. All contributors will be invited to co-author a publication (in [SIGIR Forum](https://sigir.org/forum/)) that summarizes the collected evaluation suite. In preparation for discussions at the SCAI workshop and in the paper, we expect every co-author to invest a bit of their time (about two hours each) in February to annotate a few conversations according to the submitted guidelines. Moreover, we would like to discuss with you at the workshop the details of a follow-up competition on submitting search-oriented conversation systems on the collected resources.

<a class="btn btn--info" href="https://forms.gle/hA7SNfk2NuuT7apz9">REGISTER</a> to stay informed, <a href="https://www.tira.io/c/scai/8">discuss</a>, and participate!


### Schedule
* October 2, 2023: Submission starts
* January 15, 2024: Submission deadline for new aspect definitions (but can be updated until Jan. 29)
* January 29, 2024: Submission deadline for data and metrics
* February 5, 2024: Annotation period starts
* February 23, 2024: Annotation period ends
* March 4, 2024: Results and annotations release
* TBD: SCAI workshop and planning for overview publication


### Data submission
We seek contributions of search-oriented conversations (with or without AI) in English. Already published conversations are also welcome. Submissions must adhere to the following format, but the only required attributes are <code>turns</code>, <code>utterance</code>, and <code>response</code>. We will add <code>id</code>-attributes in case they are missing or add a prefix in case that they are not unique. If your data contains attributes that are not shown here, we will expand this format upon your request. The current format is:

```json
{
  "id": "conversation-id",
  "turns": [
    {
      "id": "turn-id",
      "utterance": "markdown-text-sent-by-user",
      "response": "markdown-text-sent-as-response-by-system",
      "provenance": [ 
        { 
          "id": "source-text-id",
          "title": "title-of-source-text-for-response",
          "text": "source-text-for-response",
          "url": "url-of-source-text-for-response"
        }
      ]
    }
  ]
}
```

<!-- TODO: TIRA Submission -->
To submit data, prepare it as [ndjson file](https://dataprotocols.org/ndjson/) (practically identical to JSON Lines or LDJSON files), where each line contains one JSON object as shown above. Use our <a href="/scai-eval-2024/code/format-checker">format checker</a> to validate your file. Then submit it via TIRA (once submission opens) using a separate upload group for each dataset you provide. Upload new versions of the same dataset in the same upload group. Once uploaded, use the edit-button to add a short description (at least one paragraph on the data source) to your dataset.

To request extensions to the data format or ask questions on the submission process, create a topic in the [SCAI Eval Data Submission forum](https://www.tira.io/c/scai/scai-eval-data-submission/12) (login provided upon registration).

<!-- TODO: Dataset download... Zenodo? -->
The collected dataset is freely available and an up-to-date version will be available for downloaded here.


### Aspect definition submission
We seek contributions of aspects definitions and associated annotation guidelines for creating a ground-truth by annotating search-oriented conversations. To submit, create a topic in the [SCAI Eval Aspect Definition Submission forum](https://www.tira.io/c/scai/scai-eval-aspect-definition-submission/14) (login provided upon registration): this will bring up a template submission that you need to fill in, including the rationale for evaluating this aspect, unit of annotation (is it an aspect of a conversation or of a single turn?), possibility of multiple labels per unit, data attributes required for annotation (see [data submission](#data-submission)), annotation guidelines, and examples for each label.

Expect to discuss your submission with others in the created topic and have a look at the other submissions to provide feedback. If critical issues are raised, these need to be resolved before the [annotation period](#schedule). Our goal is to have a few conversations of the dataset annotated for every submitted aspect without critical issues. If this should not be possible due to a very large number of aspect submissions, we will ask all contributors to vote on which to annotate.

The collected guidelines will be made freely available in a Github repository when the annotation starts. We will accept pull requests to add new aspects or change old ones. Moreover, we will provide information on how to load these guidelines into some annotation software (still to be decided which software we will use), so that everyone can reproduce our annotation setup easily.



### Metric submission
We seek contributions of containerized metrics that classify conversations (in the [format above](#data-submission)) to recreate human annotations according to one of the [submitted aspect definiton](#aspect-definition-submission). To submit, create a software that reads a <code>ndjson</code> file as shown above and writes a <code>json</code> file formatted as follows:

```json
{
  "conversation-or-turn-id": [ "predicted-label" ]
}
```
The conversation-id or turn-id should be used depending on whether the aspect's unit of annotation is the whole conversation or single turns.

<!-- TODO: TIRA Howto -->
<!-- TODO: Example metrics -->
You then need to submit the software as [Docker image](https://www.docker.com/) to TIRA (Howto in preparation), which allows everyone to use your metric easily on all other datasets of the same format. We support metrics that use LLMs with instruct programming by providing access to several LLMs through [Chatnoir Chat](https://chat.web.webis.de/), allowing you to switch between LLMs without changing your code and ensuring reproducibility through automated response archiving. We are happy to provide you with support for getting your software into a Docker image: please ask [in the Forum](https://www.tira.io/c/scai/scai-eval-metric-submission/15) (login provided upon registration) for help.
<!-- Please have a look at our example metrics to get you started. -->

The final versions of the collected metrics will be made available for everyone to use. Moreover, we will provide a script to run all metrics on an input file. In cases where more than one metric was submitted for an aspect, we will compare their results on the annotated dataset as part of the planned overview publication.


### Task Committee
* Johannes Kiesel, Bauhaus-Universität Weimar
* Maik Fröbe, Friedrich-Schiller-Universität Jena
* Andrea Papenmeier, University of Twente
* Alexander Frummet, Universität Regensburg
* Paul Owoicho, University of Glasgow


