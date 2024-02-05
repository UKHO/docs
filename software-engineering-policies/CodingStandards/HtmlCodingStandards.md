# HTML Coding Standards

## Capitalization

All code has to be lowercase: This applies to HTML element names, attributes, attribute values (unless `text/CDATA`), CSS selectors, properties, and property values (with the exception of strings).

```html
<!-- Not recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google">
```

## Encoding

Make sure your editor uses UTF-8 as character encoding, without a byte order mark.

Specify the encoding in HTML templates and documents via `<meta charset="utf-8">`. Do not specify the encoding of style sheets as these assume UTF-8.

## Document Type

Use HTML5.

HTML5 (HTML syntax) is preferred for all HTML documents: `<!DOCTYPE html>`.

(It’s recommended to use HTML, as MIMEType `text/html`. Do not use XHTML. XHTML, as `application/xhtml+xml`, lacks both browser and infrastructure support and offers less room for optimization than HTML.)

## HTML Validity

Always use valid HTML where possible and validate using tools such as the [W3C HTML validator](http://validator.w3.org/nu/) to test.

```html
<!-- Not recommended -->
<title>Test</title>
<article>This is only a test.

<!-- Recommended -->
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>
```

## Semantics

Use elements for what they have been created for. For example, use heading elements for headings, `p` elements for paragraphs, `a` elements for anchors, etc.

Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.

```html
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>

<!-- Recommended -->
<a href="recommendations/">All recommendations</a>
```

## Multimedia Fallback

For multimedia, such as images, videos, animated objects via `canvas`, make sure to offer alternative access. For images that means use of meaningful alternative text (`alt`) and for video and audio transcripts and captions, if available.

Providing alternative contents is important for accessibility reasons: A blind user has few cues to tell what an image is about without `@alt`, and other users may have no way of understanding what video or audio contents are about either.

(For images whose alt attributes would introduce redundancy, and for images whose purpose is purely decorative which you cannot immediately use CSS for, use no alternative text, as in `alt=""`.)

```html
<!-- Not recommended -->
<img src="spreadsheet.png">

<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```

## Separation Of Concerns

Separate structure from presentation from behaviour.

Strictly keep structure (markup), presentation (styling), and behaviour (scripting) apart, and try to keep the interaction between the three to an absolute minimum.

That is, make sure documents and templates contain only HTML and HTML that is solely serving structural purposes. Move everything presentational into style sheets and everything behavioural into scripts.

```html
<!-- Not recommended -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>

<!-- Recommended -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>It’s awesome!
```

## HTML Formatting Rules

### General Formatting

Use a new line for every block, list, or table element, and indent every such child element.

Independent of the styling of an element (as CSS allows elements to assume a different role per `display` property), put every block, list, or table element on a new line.

Also, indent them if they are child elements of a block, list, or table element.

(If you run into issues around white space between list items it’s acceptable to put all `li` elements in one line. A linter is encouraged to throw a warning instead of an error.)

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
<ul>
  <li>Moe</li>
  <li>Larry</li>
  <li>Curly</li>
</ul>
<table>
  <thead>
    <tr>
      <th scope="col">Salary
      <th scope="col">Tax
  <tbody>
    <tr>
      <td>£5.00
      <td>£4.50
</table>
```

### HTML Quotation Marks

Always use double (`""`) rather than single quotation marks (`''`) around attribute values.

```html
<!-- Not recommended -->
<a class=’signin-button'>Sign in</a>

<!-- Recommended -->
<a class="signin-button">Sign in</a>
```

## Accessibility Guidelines

### Labels on Controls

When creating form you should use Labels and associate them with the form elements

```html
<label for="username">Username:</label><input type="text" id="username"/>
```

### Hyperlinks

Clearly identify the target of each link.

Carefully consider link text. *"click here"* is not a good choice, it should indicate the nature of the link target, for example *"text-only version of this page"*

Links with the same text but refer to different targets should be distinguished by using the title attribute.

```html
 <a href="http://www.admiralty.co.uk/Pages/News-and-events.aspx" title="News and events - Home page">Home page</a>
 ```

### Tables

Tables should not be used for layout. If a table has to be used, do not use any structural mark-up for the purpose of visual formatting.

Non-visual user agents such as speech synthesizers and Braille-based devices may use the following TD and TH element attributes to render table cells more intuitively.

Use `<th>` tags to identify control columns and rows for the data where the data is a bit more complex headers and ids can be used.

Each cell element should be given a unique id, using the headers attribute on subsequent cells will make a link for the data so the tables are structured. The id is only used as a pointer to the value.

```html
<table Summary=This table contains the percentage grades for a students course work">
<caption>Summary of student’s coursework grades</caption>
   <tr>
     <th rowspan="2" id="h">Homework</th>
     <th colspan="3" id="e">Exams</th>
     <th colspan="3" id="p">Projects</th>
   </tr>
   <tr>
     <th id="e1" headers="e">1</th>
     <th id="e2" headers="e">2</th>
     <th id="ef" headers="e">Final</th>
     <th id="p1" headers="p">1</th>
     <th id="p2" headers="p">2</th>
     <th id="pf" headers="p">Final</th>
   </tr>
   <tr>
    <td headers="h">15%</td>
    <td headers="e e1">15%</td>
    <td headers="e e2">15%</td>
    <td headers="e ef">20%</td>
    <td headers="p p1">10%</td>
    <td headers="p p2">10%</td>
    <td headers="p pf">15%</td>
   </tr>
</table>
```
