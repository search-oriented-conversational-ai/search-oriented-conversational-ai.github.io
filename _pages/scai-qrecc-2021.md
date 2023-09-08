---
title: "SCAI QReCC Shared Task 2021"
permalink: /scai-qrecc-2021/
layout: single
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.1"
  overlay_image: /assets/images/bc.png
---

Conversational Question Answering (QA) is one of the core applications for retrieval-based chatbots. In conversational QA, the task is to answer a series of contextually-dependent questions like they may occur in natural human-to-human conversations.


### QReCC dataset

The challenge is based on the <a href="https://arxiv.org/abs/2010.04898">QReCC dataset</a> introduced at NAACL'21. The dataset contains 14K conversations with 81K question-answer pairs and is <a href="https://github.com/apple/ml-qrecc">publicly available</a>. The document collection with the pre-processed passages should be downloaded from <a href="https://doi.org/10.5281/zenodo.4748782">Zenodo</a>.

### Leaderboard

The challenge is hosted on <a href="https://www.tira.io/task/scai-qrecc">TIRA</a>. Participants are encouraged to upload their code and run the evaluation on the VMs provided by the platform to ensure reproducibility of the results. It is also possible to upload the submission as a single JSON file as an alternative. See our <a href="https://github.com/scai-conf/SCAI-QReCC-21">GitHub repository</a> for further instructions and a sample code used for the baseline submission.

The evaluation is performed on the test split of the QReCC dataset. We use the ground truth annotations in the initial phase, and will update them with alternative answer spans and passages by pooling and crowdsourcing the relevance judgements over the results submitted by the challenge participants (similar to the TREC evaluation setup).

### Schedule

* Submission deadline: <s>September 8, 2021</s> <b>Extended:</b> September 15, 2021
* Results announcement: September 30, 2021
* Workshop presentations: October 8, 2021

### Submission

You need access to TIRA to be able to upload your submissions. Request access to TIRA by filling out <a href="https://t.co/M2zNHSBrbU">this short form</a>.

### Task Committee
* Maik Fröbe, Martin Luther University of Halle-Wittenberg
* Johannes Kiesel, Bauhaus-Universität Weimar
* Svitlana Vakulenko, University of Amsterdam
