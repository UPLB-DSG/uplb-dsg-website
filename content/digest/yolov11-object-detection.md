---
title: An Ultimate Guide to YOLOv11 Object Detection
date: January 17, 2025
publishedAt: 2025-01-17
description: A hands-on walkthrough of training a YOLOv11 object detector, from dataset annotation on Roboflow to evaluation on Google Colab.
contentBy: Keith Tidon, Research and Development Team, Wizy.io
layoutBy: Franz Saragena
references:
  - label: Keita, YOLO object detection explained, DataCamp (2024)
    href: https://www.datacamp.com/blog/yolo-object-detection-explained
panels:
  - src: /digest/yolov11-object-detection/01.webp
    alt: An Ultimate Guide to YOLOv11 Object Detection Data Digest cover
  - src: /digest/yolov11-object-detection/02.webp
    alt: "What YOLO is: a single-pass real-time object detection algorithm introduced in 2015"
  - src: /digest/yolov11-object-detection/03.webp
    alt: Datasets and data annotation with Roboflow and Kaggle
  - src: /digest/yolov11-object-detection/04.webp
    alt: "Google Colab setup: installing ultralytics and downloading the annotated dataset"
  - src: /digest/yolov11-object-detection/05.webp
    alt: Training command for YOLOv11 with image size 640 and a QR code to the Colab notebook
  - src: /digest/yolov11-object-detection/06.webp
    alt: Using the trained model's last weights to run detection on new images
  - src: /digest/yolov11-object-detection/07.webp
    alt: Model evaluation with precision curve, recall curve, confusion matrix, and loss functions
---

You Only Look Once (YOLO) divides an image into an NxN grid where each cell predicts bounding boxes and class probabilities in a single pass. Introduced in 2015, it remains one of the fastest real-time detection algorithms.

The guide walks through gathering and annotating a dataset on Roboflow, downloading it into a Google Colab notebook, training with the ultralytics package, running the best weights on new images, and reading the precision, recall, and confusion matrix outputs.
