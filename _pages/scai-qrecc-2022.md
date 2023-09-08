---
title: "SCAI QReCC Shared Task 2022"
permalink: /scai-qrecc-2022/
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

The challenge is hosted on <a href="https://www.tira.io/task/scai-qrecc">TIRA</a>. Participants can upload their submission as a single JSON file. Alternatively, participants can upload their code and run the evaluation on the VMs provided by the platform to ensure reproducibility of the results. See our <a href="https://github.com/webis-de/SCAI-QReCC">GitHub repository</a> for further instructions and a sample code used for the baseline submission.

The evaluation is performed on the test split of the QReCC dataset. We use the ground truth annotations in the initial phase, and will update them with alternative answer spans and passages by pooling and crowdsourcing the relevance judgements over the results submitted by the challenge participants (similar to the TREC evaluation setup).

### Schedule

* Submission deadline: <s>July 3, 2022</s> <b>Extended:</b> July 8, 2022
* Results announcement: July 10, 2022
* Workshop presentations: July 15, 2022

### Submission

You need access to TIRA to be able to upload your submissions. Request access to TIRA by filling out <a href="https://forms.gle/fwfo6fUoHUXdsGGM6">this short form</a>.

### Task Committee
* Maik Fröbe, Martin Luther University of Halle-Wittenberg
* Svitlana Vakulenko, University of Amsterdam
