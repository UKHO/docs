# CSS Coding Standards

## Validity

Unless dealing with CSS validator bugs or requiring proprietary syntax, use valid CSS code and use tools such as the [W3C CSS validator](http://jigsaw.w3.org/css-validator/) to test.

## Capitalization

All code has to be lowercase: This applies to CSS selectors, properties, and property values (with the exception of strings).

```css
/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;
```

## Id and Class Naming

The id of an element **must** unique on a page, you **should NEVER** repeat.

Use meaningful or generic ID and class names.

Instead of presentational or cryptic names, always use ID and class names that reflect the purpose of the element in question, or that are otherwise generic.

Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.

Generic names are simply a fallback for elements that have no particular or no meaning different from their siblings. They are typically needed as “helpers.”

Using functional or generic names reduces the probability of unnecessary document or template changes.

```css
/* Not recommended: meaningless */
#yee-1901 {}

/* Not recommended: presentational */
.button-green {}
.clear {}

/* Recommended: specific */
#gallery {}
#login {}
.video {}

/* Recommended: generic */
.aux {}
.alt {}
```

## Id and Class Name Style

Use ID and class names that are as short as possible but as long as necessary. Try to convey what an ID or class is about while being as brief as possible.
Using ID and class names this way contributes to acceptable levels of understandability and code efficiency.

```css
/* Not recommended */
#navigation {}
.atr {}

/* Recommended */
#nav {}
.author {}
```

## Type Selectors

Avoid qualifying ID and class names with type selectors.

Unless necessary (for example with helper classes), do not use element names in conjunction with IDs or classes.

Avoiding unnecessary ancestor selectors is useful for [performance reasons.](http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)

```css
/* Not recommended */
ul#example {}
div.error {}
/* Recommended */
#example {}
.error {}
```

## Shorthand Properties

Use shorthand properties where possible.

CSS offers a variety of [shorthand](http://www.w3.org/TR/CSS21/about.html#shorthand) properties (like font) that should be used whenever possible, even in cases where only one value is explicitly set.

Using shorthand properties is useful for code efficiency and understandability.

```css
/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

## Formatting

### Declaration Order

Put declarations in alphabetical order in order to achieve consistent code in a way that is easy to remember and maintain.

Ignore vendor-specific prefixes for sorting purposes. However, multiple vendor-specific prefixes for a certain CSS property should be kept sorted (e.g. -moz prefix comes before -webkit).

```css
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

### Block Content Indentation

Indent all [block content](http://www.w3.org/TR/CSS21/syndata.html#block), that is rules within rules as well as declarations, so to reflect hierarchy and improve understanding.

```css
@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}
```

### Declaration Stops

End every declaration with a semicolon for consistency and extensibility reasons.

```css
/* Not recommended */
.test {
  display: block;
  height: 100px
}

/* Recommended */
.test {
  display: block;
  height: 100px;
}
```

### Separator and Declaration Separation

End every declaration with a semicolon for consistency and extensibility reasons.

Always start a new line for each selector and declaration.

```css
/* Not recommended */
a:focus, a:active {
  position: relative; top: 1px;
}

/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

### CSS Quotation Marks

End every declaration with a semicolon for consistency and extensibility reasons.

Use single (`''`) rather than double (`""`) quotation marks for attribute selectors or property values. Do not use quotation marks in URI values (url()).

```css
/* Not recommended */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}

/* Recommended */
@import url(//www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
```

## References

1 Title
Reference Google HTML/CSS Style Guide
<http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml>

2 Title
Reference W3C CSS Validation Service
<http://jigsaw.w3.org/css-validator>

3 Title
Reference W3C Markup Validation Service
<http://validator.w3.org/nu>

4 Title
Reference W3C website
<http://www.w3.org/>

5 Title
Reference Web Content Accessibility Guidelines
<http://www.w3.org/WAI/intro/wcag.php>

Abbreviations
IMT Information Management and Technology
RNIB Royal National Institute for the Blind
SDP Software Development and Maintenance Process
W3C World Wide Web Consortium
WCAG Web Content Accessibility Guidelines
WAI Web Accessibility Initiative
