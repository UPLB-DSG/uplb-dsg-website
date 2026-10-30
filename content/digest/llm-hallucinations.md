---
title: "Delulu si Mare: LLM Hallucinations and ROUGE"
date: February 14, 2025
publishedAt: 2025-02-14
description: A Valentine's Day look at why large language models hallucinate and how ROUGE, BLEU, and other metrics measure it.
contentBy: Jerome Espina
layoutBy: Rey Isaac Jr.
references:
  - label: Ganesan, An intro to ROUGE, and how to use it to evaluate summaries, freeCodeCamp (2017)
    href: https://www.freecodecamp.org/news/what-is-rouge-and-how-it-works-for-evaluation-of-summaries-e059fb8ac840/
  - label: IBM, What are AI hallucinations? (2023)
    href: https://www.ibm.com/think/topics/ai-hallucinations
panels:
  - src: /digest/llm-hallucinations/01.webp
    alt: Delulu si Mare Data Digest cover on LLM hallucination, metrics, measurement, and mitigation
  - src: /digest/llm-hallucinations/02.webp
    alt: A love letter example showing how an LLM adds details that were never in its reference
  - src: /digest/llm-hallucinations/03.webp
    alt: Chat example of an LLM confidently inventing a birthday that does not exist
  - src: /digest/llm-hallucinations/04.webp
    alt: "Evaluation metrics for hallucinations: ROUGE, BLEU, BERTScore, and perplexity"
  - src: /digest/llm-hallucinations/05.webp
    alt: Worked ROUGE example with reference tokens, candidate tokens, and recall, precision, and F1 formulas
  - src: /digest/llm-hallucinations/06.webp
    alt: "Result of the ROUGE calculation: 82% recall, 82% precision, F1 of 0.82"
  - src: /digest/llm-hallucinations/07.webp
    alt: How to reduce hallucinations through fine-tuning and prompt engineering
---

Ask a large language model to write a love letter from a list of shared memories and it may add details that were never there. In evaluation these fabricated outputs are called hallucinations.

Metrics such as ROUGE, BLEU, BERTScore, and perplexity compare generated text against a reference. A worked ROUGE example scores a paraphrased anniversary note at 82% recall and 82% precision, an F1 of 0.82. Fine-tuning and prompt engineering reduce hallucinations further.
