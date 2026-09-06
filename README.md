# BagInAir

### Airline Baggage Size & Weight Checker

BagInAir is a web-based utility that helps travelers quickly check whether their cabin or checked baggage meets an airline's size and weight requirements.

Instead of searching through multiple airline baggage policies, enter your bag's dimensions and weight to get a quick result.

**[Live Demo](https://baginair.vercel.app/)**

---

## Overview

Baggage rules vary between airlines, and finding the relevant size and weight limits before a flight can be inconvenient.

BagInAir provides a simple interface where users can enter their bag measurements and compare them against supported airline baggage requirements.

The goal is straightforward:

> **Know whether your bag fits before you reach the airport.**

---

## Features

* **Cabin Baggage Checker** — Check cabin bag dimensions and weight.
* **Checked Baggage Checker** — Check checked baggage limits.
* **Multi-Airline Comparison** — Compare your bag against multiple supported airlines.
* **Dedicated Airline Pages** — View baggage checking tools and information for individual airlines.
* **Instant Results** — Get an immediate result based on your entered measurements.
* **Responsive Design** — Designed to work across desktop and mobile devices.
* **No Account Required** — Use the checker without signing up or logging in.
* **Frontend-Only** — No backend or database is required.

---



## How It Works

1. Select an airline or use the multi-airline checker.
2. Choose **Cabin** or **Checked** baggage.
3. Enter your bag's length, width, height, and weight.
4. BagInAir compares the measurements with the configured airline limits.
5. The checker displays the result immediately.
<hr>
<h2>Supported Airlines</h2>

<p>BagInAir currently supports baggage information for:<p/>

<table>
<thead>
<tr>
<th>Airline</th>
<th>Baggage Checker</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://baginair.vercel.app/indigo"><span style="color: inherit; text-decoration: none;">IndiGo</span></a></td>
<td><a href="https://baginair.vercel.app/indigo">https://baginair.vercel.app/indigo</a></td>
</tr>
<tr>
<td><a href="https://baginair.vercel.app/airindia"><span style="color: inherit; text-decoration: none;">Air India</span></a></td>
<td><a href="https://baginair.vercel.app/airindia">https://baginair.vercel.app/airindia</a></td>
</tr>
<tr>
<td><a href="https://baginair.vercel.app/spicejet"><span style="color: inherit; text-decoration: none;">SpiceJet</span></a></td>
<td><a href="https://baginair.vercel.app/spicejet">https://baginair.vercel.app/spicejet</a></td>
</tr>
<tr>
<td><a href="https://baginair.vercel.app/akasa"><span style="color: inherit; text-decoration: none;">Akasa Air</span></a></td>
<td><a href="https://baginair.vercel.app/akasa">https://baginair.vercel.app/akasa</a></td>
</tr>
<tr>
<td><a href="https://baginair.vercel.app/allianceair"><span style="color: inherit; text-decoration: none;">Alliance Air</span></a></td>
<td><a href="https://baginair.vercel.app/allianceair">https://baginair.vercel.app/allianceair</a></td>
</tr>
<tr>
<td><a href="https://baginair.vercel.app/fly91"><span style="color: inherit; text-decoration: none;">FLY91</span></a></td>
<td><a href="https://baginair.vercel.app/fly91">https://baginair.vercel.app/fly91</a></td>
</tr>
<tr>
<td><a href="https://baginair.vercel.app/airindiaexpress"><span style="color: inherit; text-decoration: none;">Air India Express</span></a></td>
<td><a href="https://baginair.vercel.app/airindiaexpress">https://baginair.vercel.app/airindiaexpress</a></td>
</tr>
</tbody>
</table>
<hr>

## Why I Built BagInAir

Before a flight, there is one simple question:

> **"Will my bag be allowed?"**

Answering that question can sometimes require checking different airline pages, baggage policies, and size restrictions.

I built BagInAir to make this process simpler.

Instead of looking through policy pages first, users can enter their actual bag measurements and get a quick indication of whether the bag meets the configured baggage limits.

The project is also an ongoing experiment in building a practical web utility and understanding how a new product can gain visibility through organic search.

---

## Tech Stack

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| React      | User interface                |
| JavaScript | Application logic             |
| CSS        | Styling and responsive design |
| Vite       | Development and build tooling |
| Vercel     | Deployment                    |

---

## Project Structure

```text
Bag-Checker/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

---

## Search & SEO

BagInAir includes dedicated pages for individual airlines and implements several search-focused features:

* Page-specific titles and meta descriptions
* Canonical URLs
* Structured data
* FAQ structured data
* Breadcrumb structured data
* Dedicated airline routes
* Internal linking between airline pages
* Baggage-related informational content

The purpose is to explore how a useful interactive tool can gain organic visibility by targeting specific user problems rather than relying only on traditional informational pages.

---

## Baggage Information

Airline baggage requirements can vary depending on factors such as:

* Domestic or international travel
* Fare type
* Ticket class
* Destination
* Special baggage categories

BagInAir is intended as a quick reference and checking utility. Baggage policies can change, so travelers should verify the applicable requirements with the airline before traveling.

---

## Author

Built by **Kedarnath Mandal**, a Java Full Stack Developer focused on Java, Spring Boot, React, REST APIs, and building practical software products.

* **GitHub:** https://github.com/Kedar-Dev25/
* **LinkedIn:** https://www.linkedin.com/in/kedarnath-mandal-74299a399/
* **Live Website:** https://baginair.vercel.app/

---

## License

This project is available for learning and demonstration purposes.

---

If you find BagInAir useful, consider giving the repository a ⭐.
