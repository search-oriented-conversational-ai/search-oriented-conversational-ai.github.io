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

Note: Cancelled.

What distinguishes a good search-oriented conversation with an AI from a bad one? Using a single aspect of conversations for evaluation fails to produce a complete picture, as aspects like information relevance, being true to some source, ease of understanding, and many more play a role. To assist researchers in evaluating their conversational search systems, this shared task calls to the community to collect comprehensive evaluation resources: example data of diverse search-oriented conversations, definitions and annotation guidelines for aspects to evaluate, and implemented evaluation metrics.

1. [Data](#data-submission). To capture the variety of search-oriented conversations (e.g., written or spoken, explorative or target-oriented), we seek contributions of one or more example conversations in English and in a common format.
2. [Aspect definitions](#aspect-definition-submission). To compile a comprehensive overview of aspects to evaluate search-oriented conversations by, we seek contributions in terms of definitions and guidelines for human ground-truth annotation.
3. [Metrics](#metric-submission). To create a software package for the evaluation of search-oriented conversations, we seek software that attempts to automatically recreate human annotations for search-oriented conversations (see 2.).

You can submit both novel and already published resources to one or more of the three categories. The submission process (see below) is open to allow for feedback and discussions from the start. All contributors will be invited to co-author a publication (in [SIGIR Forum](https://sigir.org/forum/)) that summarizes the collected evaluation suite. In preparation for discussions on the resources and future uses at the SCAI workshop and in the paper, we expect every co-author to invest a bit of their time (about three hours each) in February to annotate a few conversations according to the submitted guidelines.

To stay up-to-date, join our mailinglist at [scai-info@googlegroups.com](https://groups.google.com/g/scai-info)!


### Schedule
* October 2, 2023: Submission starts
* January 29, 2024: Submission deadline for data, aspect definitions, and metrics (updated)
* February 5, 2024: Annotation period starts
* February 23, 2024: Annotation period ends
* March 4, 2024: Results and annotations release
* March: SCAI workshop at <a href="https://chiir2024.github.io/index.html">CHIIR</a> and planning for overview publication


### Data submission
We seek contributions of search-oriented conversations (with or without AI) in English. Already published conversations are also welcome. The current dataset is available [here](https://doi.org/10.5281/zenodo.8396856).
<br><small>Quicklinks: [[forum](https://www.tira.io/c/scai/scai-eval-data-submission/12)] [[howto](https://www.tira.io/t/howto-data-submission/2011)] [[example](https://github.com/search-oriented-conversational-ai/scai-eval24-dataset-conversion-trec-cast/blob/main/data/trec-cast-2022.ndjson)] [validator: [online](/scai-eval-2024/code/format-checker), [local](https://github.com/search-oriented-conversational-ai/scai-eval24-dataset-validator)] [[submission](https://www.tira.io/task-overview/scai-eval-2024-data-submission/submit-20230925-training)]

Submissions must adhere to the following format. Prepare your data as [ndjson file](https://dataprotocols.org/ndjson/) (practically identical to JSON Lines or LDJSON files), where each line contains one JSON object as shown below. We will expand this format upon your request in the [SCAI Eval Data Submission forum](https://www.tira.io/c/scai/scai-eval-data-submission/12). Use our [format checker](/scai-eval-2024/code/format-checker) to validate your file. The only required attributes are <code>turns</code>, <code>utterance</code>, and <code>response</code>.

```json
{% include scai-eval24-dataset-format.json %}
```

Submit your data [here](https://www.tira.io/task-overview/scai-eval-2024-data-submission/submit-20230925-training) in TIRA (click SUBMIT and register your team if necessary). Create a run upload group for each dataset you provide, but overwrite old versions of a dataset by uploading again in the respective upload group. Use the EDIT-button to set the name and add a short description to your dataset, which we will include in the combined dataset's README. [[howto](https://www.tira.io/t/howto-data-submission/2011)]

After the deadline, the collected dataset will be detailed in the planned overview publication.



### Aspect definition submission
We seek contributions of aspects definitions and associated annotation guidelines for creating a ground-truth by annotating search-oriented conversations. All aspect definitions are discussed in the [SCAI Eval Aspect Definition Submission forum](https://www.tira.io/c/scai/scai-eval-aspect-definition-submission/14).
<br><small>Quicklinks: [[forum](https://www.tira.io/c/scai/scai-eval-aspect-definition-submission/14)] [[example](https://www.tira.io/t/aspect-definition-ease-of-understanding/1979)] [[submission](https://www.tira.io/c/scai/scai-eval-aspect-definition-submission/14)]

Submit your definition by creating a topic in the [forum](https://www.tira.io/c/scai/scai-eval-aspect-definition-submission/14): this will bring up a template submission that you need to fill in, including the rationale for evaluating this aspect, unit of annotation (is it an aspect of a conversation or of a single turn?), possibility of multiple labels per unit, data attributes required for annotation (see [data submission](#data-submission)), annotation guidelines, and examples for each label.

Expect to discuss your submission with others in the created topic and have a look at the other submissions to provide feedback. If critical issues are raised, these need to be resolved before the [annotation period](#schedule) to not risk exclusion of the aspect from the annotation.

After the deadline, we will make the collected guidelines freely available and provide setup instructions for an annotation software (to-be-decided). All guidelines will be detailed in the planned overview publication.



### Metric submission
We seek contributions of containerized metrics that classify conversations (in the [format above](#data-submission)) to recreate human annotations according to one of the [submitted aspect definitions](#aspect-definition-submission).
<br><small>Quicklinks: [[forum](https://www.tira.io/c/scai/scai-eval-metric-submission/15)] [[dataset](https://doi.org/10.5281/zenodo.8396856)] [[example](https://github.com/search-oriented-conversational-ai/scai-eval24-metric-simplicity)] [[validator](https://github.com/search-oriented-conversational-ai/scai-eval24-metric-validator)] [[submission](https://www.tira.io/task-overview/scai-eval-2024-metric-submission/)]

Submissions must adhere to the following format. Prepare your data as JSON file as shown below. The conversation-ids or turn-ids must reflect those in the [dataset](https://doi.org/10.5281/zenodo.8396856). Skip conversations or turns that are missing attributes that your metric requires, but leave the array empty if the metric predicts no label.
```json
{
  "conversation-or-turn-id": [ "predicted-label" ]
}
```

Submit your metric as [Docker image](https://www.docker.com/) [here](https://www.tira.io/task-overview/scai-eval-2024-metric-submission/) in TIRA. Submission of a Docker image allows easy re-run when the dataset is expanded. Metrics will be able to use large language models through [Chatnoir Chat](https://chat.web.webis.de/), ensuring easy switch between models and reproducibility ([in preparation](https://www.tira.io/t/llms-for-metrics-in-tira/2010)). To start, look at [our example metric](https://github.com/search-oriented-conversational-ai/scai-eval24-metric-simplicity) or ask [in the Forum](https://www.tira.io/c/scai/scai-eval-metric-submission/15): If you need help, we will try to support you with getting your metric into Docker. [[howto]([https://www.tira.io/t/howto-data-submission/2011](https://www.tira.io/t/howto-metric-submission/2015))]

After the deadline, we will provide links to all metrics' sources from a central place and a script to run all. All metrics will be detailed in the planned overview publication, and metrics for the same aspect will be compared in the same.


### Task Committee
* Johannes Kiesel, Bauhaus-Universität Weimar
* Maik Fröbe, Friedrich-Schiller-Universität Jena
* Andrea Papenmeier, University of Twente
* Alexander Frummet, Universität Regensburg
* Paul Owoicho, University of Glasgow


