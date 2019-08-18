# languageDrop
## Introduction
Language Drop is a Wi-Fi “Dead Drop” consisting of an offline, wireless hotspot that locally hosts and shares educational audio content to workers, in a labor camp, for download onto mobile devices for consumption at their own pace. The beauty of the system is that it can be easily installed with no additional infrastructure requirements and provides a flexible platform for enabling learning on a broad range of subjects. This solution was designed keeping in mind the low-spec smart and feature phones available to the targeted demographic. This system requires only a Raspberry Pi, a power source and an initial internet connection.

## System Requirements
*	Should work on any Raspberry Pi with a WiFi card or adapter
* Only tested on a Raspberry Pi Zero W

## How it works
A local WiFi hotspot and webserver created using [nginx](https://www.nginx.com/) and [dnsmasq](https://wiki.debian.org/HowTo/dnsmasq) is used to host and serve a website with a simple UI where audio files can be downloaded. 

## Running the Device
Download include languageDrop image using an image burner like [balenaEtcher](https://www.balena.io/etcher/) to burn the image onto the sd card. The WiFi network should run on startup. Going to any website should redirect one to the captive portal in which the files can be downloaded. The audio files served come from [50languages.com](https://www.50languages.com/)

## How to Accomplish Something Similar?
* Checkout this [link](https://gremaudpi.emf-informatique.ch/how-to-build-a-captive-web-portal-with-any-router-and-a-raspberry-pi/)
