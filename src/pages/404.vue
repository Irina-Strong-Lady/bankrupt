<script setup>
import router from "@/router";

</script>

<template>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div class="container">
      <div class="ani">
        <div class="a1">
          <span><b></b></span>
        </div>
        <div class="a2">
          <span><b></b></span>
        </div>
        <div class="a3">
          <span><b></b></span>
        </div>
        <div class="a4">
          <span><b></b></span>
        </div>
        <div class="a5">
          <span><b></b></span>
        </div>
        <div class="a6">
          <span><b></b></span>
        </div>
        <div class="a7">
          <span><b></b></span>
        </div>
        <div class="a8">
          <span><b></b></span>
        </div>
        <div class="a9">
          <span><b></b></span>
        </div>
        <div class="a10">
          <span><b></b></span>
        </div>
      </div>
      <div role="main" class="home">
        <div>
          <h1>Ошибка 404</h1>
          <h2>Страница не существует</h2>
          <p class="intro">
            <a @click="router.push({ name: 'contacts' })" style="font-size: large;">Центр правовой помощи при банкротстве</a>
          </p>
        </div>
      </div>
      <footer role="contentinfo">
        <div>
          <nav id="menu">
            <ul role="navigation" class="nav">
              <li>
                <a
                  @click="router.push({name: 'contacts'})"
                  class="nav-home"
                >
                <strong style="color: white">Вернуться на сайт</strong></a>
              </li>
              <li>
                <a
                  @click="router.push({name: 'contacts'})"
                  style="color: white; cursor: pointer;"
                >Центр правовой помощи при банкротстве</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  </body>
</template>

<style lang="sass" scoped>

/************Reset**************/
*
  -moz-box-sizing: border-box
  -webkit-box-sizing: border-box
  box-sizing: border-box

html, body, div, object, iframe, fieldset
  margin: 0
  padding: 0
  border: 0

ol, ul
  list-style: none
  margin: 0
  padding: 0

table
  border-collapse: collapse
  border-spacing: 0

header, footer, nav, section, article, hgroup, figure
  display: block

legend
  display: none

/************End Reset**************/

/************Global**************/
body
  background: #fff
  color: #000
  font: 100%/1.4 "HelveticaNeue", "Helvetica", "Arial", sans-serif
  padding: 0
  -webkit-text-size-adjust: none

a
  color: #808080
  text-decoration: none

a:hover, a:focus
  color: #e51837

p
  margin: 0 0 1em

img, object, video
  max-width: 100%
  border: 0

a img
  border: 0
  outline: 0
h1
  font-size: 3em
  line-height: 1
  letter-spacing: -0.02em
  margin-bottom: 0.2em

h2
  font-size: 2em
  line-height: 1.1
  margin-bottom: 0.2em

h3
  font-weight: normal
  line-height: 1.1
  padding-bottom: 0.4em
  border-bottom: 1px solid #ccc

h1 a, h2 a, h3 a
  display: block
  color: #000

h1 a:hover, h2 a:hover, h3 a:hover
  color: #e51837

blockquote
  border-left: 0.5em solid #ddd
  padding-left: 1em
  margin-left: 1em

small
  color: #e51837

input, textarea
  border: 1px solid #000

input[type=search]
  -webkit-appearance: none
  border-radius: 0

::-webkit-input-placeholder
  color: #808080

:-moz-placeholder
    color: #808080

/************End Global**************/

/************Classes**************/
.inactive
  color: #ddd

/************End Classes**************/

/************Structure**************/
.container
  max-width: 70em
  margin: 0 auto
  padding: 0 1em
  overflow: hidden
  @media screen and (max-width: 150px)
    display: none

div[role=main]
  padding-bottom: 1em

/*Footer*/
footer[role=contentinfo]
  color: #fff
  background: #000
  margin: 0 -1em
  position: relative
  z-index: 2

footer[role=contentinfo] > div
  max-width: 70em
  padding: 0 1em
  margin: 0 auto
  overflow: hidden

footer[role=contentinfo] p
  margin: 0

footer[role=contentinfo] .nav li a
  display: block
  border-bottom: 1px solid #808080
  padding: 1em
  margin: 0 -1em

footer[role=contentinfo] a
  display: inline-block
  padding: 0.5em 0

footer[role=contentinfo] a.nav-home
  color: #000
  &:hover, &:focus-visible
    cursor: pointer

footer[role=contentinfo] .f-rga
  padding: 0.6em 0

footer[role=contentinfo] img
  max-width: 4.4em
  display: inline-block
  margin-bottom: -0.22em

/*End Footer*/

/*Grid*/
.grid
  margin: 0 -1em
  overflow: hidden

.grid:target
  -webkit-animation: fadeout 5s 1 ease-out
    -moz-animation: fadeout 5s 1 ease-out
    -o-animation: fadeout 5s 1 ease-out
    animation: fadeout 5s 1 ease-out

.grid > h2
  margin-left: 0.45em

.grid > section
  padding: 1em 1em 0.5em

.grid > section:target
  -webkit-animation: fadeout 5s 1 ease-out
    -moz-animation: fadeout 5s 1 ease-out
    -o-animation: fadeout 5s 1 ease-out
    animation: fadeout 5s 1 ease-out

.grid ul
  overflow: hidden

.grid ul li
  margin-bottom: 0.3em

.featured:after
  content: "*"
  color: #e51837

/*Fluid*/
.fluid
  display: block
  margin: 0 auto
  max-width: 40em

/*Homepage*/
.home h1
  margin-bottom: 0.2em

.intro
  font-size: 3em
  line-height: 1.2
  margin: 0 auto

.intro a:hover ,.intro a:focus
  color: #000
  border-bottom-color: #000
  cursor: pointer

.ani
  position: relative
  height: 15em
  margin: 1em 0 0
  width: 100%
  z-index: 0

.ani div
  width: 100%

.ani div b
  display: block
  position: absolute
  top: 5%
  right: 5%
  bottom: 5%
  left: 5%
  background: rgba(229,24,55,0.22)

/* Button Stlyes */
.block-btn
  color: #fff
  background: #000
  display: inline-block
  margin: 1.5em 0
  font-size: 110%
  padding: 1em

.block-btn:hover, .block-btn:focus
  color: #fff
  background: #e51837

/*Patterns*/
.mod
  padding: 1em

.pattern
  background: #f7f7f7
  border-bottom: 1px solid #808080
  margin-bottom: 1em
  overflow: hidden

.pattern-description h1
  font-size: 3.4em
  margin-bottom: 0.5em

.pattern-description
  max-width: 40em
  margin: 0 auto

.pattern-description ul, .pattern-description ol
  margin-bottom: 2em

.pattern-description li
  margin-bottom: 1em

/*Blog*/
/*Blog Header*/
.blog .container
  max-width: 62em

.blog header[role=banner]
  overflow: hidden
  margin-bottom: 2em
  padding: 2em 0 1em
  border-bottom: 1px solid #000

.blog-logo
  font-weight: normal
  font-size: 1.2em
  margin: 0 0 1em

.blog-logo img
  width: 3.3em

.blog-logo a
  color: #000

.search-form
  width: 100%
  margin-bottom: 1em

.search-field
  width: 100%
  padding: 0.5em 0
  border: 0
  border-bottom: 1px solid #808080
  outline: none

.search-field:focus
  background: #e51837
  color: #fff

.search-field:focus::-webkit-input-placeholder
   color: #fff

.search-field:focus :-moz-placeholder
   color: #fff

.blog .nav
  clear: both

.blog .nav a
  display: block
  font-weight: bold
  color: #000

.blog .nav a:hover
  color: #e51837

/*Posts*/
.posts ol > li
  padding-bottom: 1em
  border-bottom: 1px solid #ccc
  margin-bottom: 1em
  overflow: hidden

.posts h2
  font-size: 1.4em
  margin: 0.28em 0 0.1em
  font-weight: normal

.posts h2 a
  color: #000

.posts h2 a:hover, .posts h2 a:focus
  color: #e51837

.permalink
  display: block
  font-size: 0.8em
  margin-bottom: 1.2em

.post-body a
  border-bottom: 1px solid #ccc

.posts blockquote
  margin: 0 0 1em
  color: #666
  border-left: 0.25em solid #ccc
  padding-left: 1em

.tags
  float: left

.tags li
  display: inline-block
  font-size: 0.8em
  margin-right: 0.5em

.posts ol > li .tags a, .permalink
  color: #ccc
  -webkit-transition: color 0.3s ease-out
     -moz-transition: color 0.3s ease-out
      -ms-transition: color 0.3s ease-out
       -o-transition: color 0.3s ease-out
          transition: color 0.3s ease-out

.posts ol > li:hover .tags a, .posts ol > li:hover .permalink
  color: #808080

.blog-nav
  text-align: center
  overflow: hidden
  padding: 1em 0

.posts .blog-nav a
  border: 0

.nav-next
  float: right

.nav-prev
  float: left

/* Sidebar */
.sidebar
  font-size: 0.8em
  padding-bottom: 1.4em

.sidebar div
  margin-bottom: 2em

.sidebar h3
  font-weight: bold
  font-size: 0.9em
  line-height: 1
  border-bottom: 1px solid #000

.sidebar a
  color: #808080

.sidebar a:hover, .sidebar a:focus
  color: #e51837

.social-links
  overflow: hidden

.social-links li
  float: left
  margin-right: 1.2em

.social-links li a
  display: block
  height: 17px
  width: 16px
  text-indent: -99999em
  background: url(images/sprite_social.png) no-repeat

.social-links li a.s-fb
  background-position: -0px -76px

.social-links li a.s-fb:hover
  background-position: -16px -76px

.social-links li a.s-twitter
  background-position: -0px -37px

.social-links li a.s-twitter:hover
  background-position: -16px -37px

.social-links li a.s-linkedin
  background-position: -0px -113px

.social-links li a.s-linkedin:hover
  background-position: -16px -113px

.social-links li a.s-rss
  background-position: -0px -0px

.social-links li a.s-rss:hover
  background-position: -16px -0px

.top
  clear: both
  display: block
  padding: 1em 0

.top:before
  content: '▲'

/* Wufoo Form */
.wufoo-form
  margin: 2em 0

/******Media Queries*******/

/* Medium Screens*/
@media all and (min-width: 35em)
  .blog-logo
    float: left
    font-size: 2em
    margin: 0 0 1em

  .blog-logo img
    width: auto

@media all and (min-width:10em)
  h1
    font-size: 5.6em

  .container
    padding-bottom: 4em

  footer[role=contentinfo]
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    margin: 0

  footer[role=contentinfo] .nav
    float: left

  footer[role=contentinfo] .nav li
    display: inline-block
    margin-right: 0.8em

  footer[role=contentinfo] .nav li a
    border: 0

  footer[role=contentinfo] .f-rga
    float: right

  .grid ul li
    width: 50%
    float: left

  .grid ul li:nth-child(odd)
    padding-right: 1em
    clear: left

  .ani
    position: absolute
    top: 0
    right: 0
    bottom: 4em
    left: 0
    width: 100%
    height: 90%
    margin: 0
    z-index: 0

  .home
    position: absolute
    top: 0
    right: 0
    bottom: 5em
    left: 0
    z-index: 1
    width: 100%
    height: 90%
    display: table
    text-align: center
    color: #fff
    color: rgba(255,255,255,0.7)

  .home > div
    display: table-cell
    vertical-align: middle

  .home .intro a
    color: #fff
    color: rgba(255,255,255,0.8)
    border-bottom: 1px solid rgba(255,255,255,0.8)

  .home .intro a:hover, .home .intro a:focus
    color: #000
    border-bottom-color: #000

  /*Blog*/

  .search-form
    float: right
    width: 30%
    max-width: 16em
    padding-left: 0.8em
    margin-top: 0.4em

  .posts
    float: left
    width: 64%

  .sidebar
    float: right
    width: 30%
    max-width: 21em
    margin: 0 0 1em
    padding-left: 0.8em

/* Large Screens */
@media all and (min-width: 54em)
  h1
    font-size: 6.4em
  .grid > section
    float: left
    width: 33.3333333%
  .grid > section:nth-of-type(3n+1)
    clear: left
  .grid ul li
    width: auto
    float: none
  .grid ul li:nth-child(odd)
    padding-right: 0

/* CSS Animations */
@-webkit-keyframes fadeout
  0%
    background: #fff
  10%
    background: #eee
  100%
    background: #fff

@-moz-keyframes fadeout
  0%
    background: #fff
  10%
    background: #eee
  100%
    background: #fff

@-o-keyframes fadeout
  0%
    background: #fff
  10%
    background: #eee
  100%
    background: #fff

@keyframes fadeout
  0%
    background: #fff
  10%
    background: #eee
  100%
    background: #fff

.ani div.a1 b
  -webkit-animation: box-resize 10s infinite alternate both
  -moz-animation: box-resize 10s infinite alternate both
  -ms-animation: box-resize 10s infinite alternate both
  -o-animation: box-resize 10s infinite alternate both
  animation: box-resize 10s infinite alternate both

.ani div.a2 b
  -webkit-animation: box-resize2 10s infinite alternate both
  -moz-animation: box-resize2 10s infinite alternate both
  -ms-animation: box-resize2 10s infinite alternate both
  -o-animation: box-resize2 10s infinite alternate both
  animation: box-resize2 10s infinite alternate both

.ani div.a3 b
  -webkit-animation: box-resize3 10s infinite alternate both
  -moz-animation: box-resize3 10s infinite alternate both
  -ms-animation: box-resize3 10s infinite alternate both
  -o-animation: box-resize3 10s infinite alternate both
  animation: box-resize3 10s infinite alternate both

.ani div.a4 b
  -webkit-animation: box-resize4 10s infinite alternate both
  -moz-animation: box-resize4 10s infinite alternate both
  -ms-animation: box-resize4 10s infinite alternate both
  -o-animation: box-resize4 10s infinite alternate both
  animation: box-resize4 10s infinite alternate both

.ani div.a5 b
  -webkit-animation: box-resize5 10s infinite alternate both
  -moz-animation: box-resize5 10s infinite alternate both
  -ms-animation: box-resize5 10s infinite alternate both
  -o-animation: box-resize5 10s infinite alternate both
  animation: box-resize5 10s infinite alternate both

.ani div.a6 b
  -webkit-animation: box-resize6 10s infinite alternate both
  -moz-animation: box-resize6 10s infinite alternate both
  -ms-animation: box-resize6 10s infinite alternate both
  -o-animation: box-resize6 10s infinite alternate both
  animation: box-resize6 10s infinite alternate both

.ani div.a7 b
  -webkit-animation: box-resize7 10s infinite alternate both
  -moz-animation: box-resize7 10s infinite alternate both
  -ms-animation: box-resize7 10s infinite alternate both
  -o-animation: box-resize7 10s infinite alternate both
  animation: box-resize7 10s infinite alternate both

.ani div.a8 b
  -webkit-animation: box-resize8 10s infinite alternate both
  -moz-animation: box-resize8 10s infinite alternate both
  -ms-animation: box-resize8 10s infinite alternate both
  -o-animation: box-resize8 10s infinite alternate both
  animation: box-resize8 10s infinite alternate both

.ani div.a9 b
  -webkit-animation: box-resize9 10s infinite alternate both
  -moz-animation: box-resize9 10s infinite alternate both
  -ms-animation: box-resize9 10s infinite alternate both
  -o-animation: box-resize9 10s infinite alternate both
  animation: box-resize9 10s infinite alternate both

.ani div.a10 b
  -webkit-animation: box-resize10 10s infinite alternate both
  -moz-animation: box-resize10 10s infinite alternate both
  -ms-animation: box-resize10 10s infinite alternate both
  -o-animation: box-resize10 10s infinite alternate both
  animation: box-resize10 10s infinite alternate both

/*Fluid Animation*/
@-webkit-keyframes box-resize
  0%
    transform: scale(.8)
    -webkit-transform: scale(.8)
  50%
    transform: scale(.6)
    -webkit-transform: scale(.6)
  100%
    transform: scale(.7)
    -webkit-transform: scale(.7)

@-moz-keyframes box-resize
  0%
    transform: scale(.8)
  50%
    transform: scale(.6)
  100%
    transform: scale(.7)

@-ms-keyframes box-resize
  0%
    transform: scale(.8)
  50%
    transform: scale(.6)
  100%
    transform: scale(.7)

@-o-keyframes box-resize
  0%
    transform: scale(.8)
  50%
    transform: scale(.6)
  100%
    transform: scale(.7)

@keyframes box-resize
  0%
    transform: scale(.8)
  50%
    transform: scale(.6)
  100%
    transform: scale(.7)

@-webkit-keyframes box-resize2
  0%
    transform: scale(.4, 1)
    -webkit-transform: scale(.4, 1)
  50%
    transform: scale(1, .4)
    -webkit-transform: scale(1, .4)
  100%
    transform: scale(1)
    -webkit-transform: scale(1)

@-moz-keyframes box-resize2
  0%
    transform: scale(.4, 1)
  50%
    transform: scale(1, .4)
  100%
    transform: scale(1)

@-ms-keyframes box-resize2
  0%
    transform: scale(.4, 1)
  50%
    transform: scale(1, .4)
  100%
    transform: scale(1)

@-o-keyframes box-resize2
  0%
    transform: scale(.4, 1)
  50%
    transform: scale(1, .4)
  100%
    transform: scale(1)

@keyframes box-resize2
  0%
    transform: scale(.4, 1)
  50%
    transform: scale(1, .4)
  100%
    transform: scale(1)

@-webkit-keyframes box-resize3
  0%
    transform: scale(.7, .9)
    -webkit-transform: scale(.7, .9)
  50%
    transform: scale(.2, .7)
    -webkit-transform: scale(.2, .7)
  100%
    transform: scale(.9, .88)
    -webkit-transform: scale(.9, .88)

@-moz-keyframes box-resize3
  0%
    transform: scale(.7, .9)
  50%
    transform: scale(.2, .7)
  100%
    transform: scale(.9, .88)

@-ms-keyframes box-resize3
  0%
    transform: scale(.7, .9)
  50%
    transform: scale(.2, .7)
  100%
    transform: scale(.9, .88)

@-o-keyframes box-resize3
  0%
    transform: scale(.7, .9)
  50%
    transform: scale(.2, .7)
  100%
    transform: scale(.9, .88)

@keyframes box-resize3
  0%
    transform: scale(.7, .9)
  50%
    transform: scale(.2, .7)
  100%
    transform: scale(.9, .88)

@-webkit-keyframes box-resize4
  0%
    transform: scale(.4, .48)
    -webkit-transform: scale(.4, .48)
  50%
    transform: scale(.3)
    -webkit-transform: scale(.3)
  100%
    transform: scale(.35, .85)
    -webkit-transform: scale(.35, .85)

@-moz-keyframes box-resize4
  0%
    transform: scale(.4, .48)
  50%
    transform: scale(.3)
  100%
    transform: scale(.35, .85)

@-ms-keyframes box-resize4
  0%
    transform: scale(.4, .48)
  50%
    transform: scale(.3)
  100%
    transform: scale(.35, .85)

@-o-keyframes box-resize4
  0%
    transform: scale(.4, .48)
  50%
    transform: scale(.3)
  100%
    transform: scale(.35, .85)

@keyframes box-resize4
  0%
    transform: scale(.4, .48)
  50%
    transform: scale(.3)
  100%
    transform: scale(.35, .85)

@-webkit-keyframes box-resize5
  0%
    transform: scale(.5, .2)
    -webkit-transform: scale(.5, .2)
  50%
    transform: scale(.22, .38)
    -webkit-transform: scale(.22, .38)
  100%
    transform: scale(.5)
    -webkit-transform: scale(.5)

@-moz-keyframes box-resize5
  0%
    transform: scale(.5, .2)
  50%
    transform: scale(.22, .38)
  100%
    transform: scale(.5)

@-ms-keyframes box-resize5
  0%
    transform: scale(.5, .2)
  50%
    transform: scale(.22, .38)
  100%
    transform: scale(.5)

@-o-keyframes box-resize5
  0%
    transform: scale(.5, .2)
  50%
    transform: scale(.22, .38)
  100%
    transform: scale(.5)

@keyframes box-resize5
  0%
    transform: scale(.5, .2)
  50%
    transform: scale(.22, .38)
  100%
    transform: scale(.5)

@-webkit-keyframes box-resize6
  0%
    transform: scale(.45, .4)
    -webkit-transform: scale(.45, .4)
  50%
    transform: scale(.4, .48)
    -webkit-transform: scale(.4, .48)
  100%
    transform: scale(.8, .95)
    -webkit-transform: scale(.8, .95)

@-moz-keyframes box-resize6
  0%
    transform: scale(.45, .4)
  50%
    transform: scale(.4, .48)
  100%
    transform: scale(.8, .95)

@-ms-keyframes box-resize6
  0%
    transform: scale(.45, .4)
  50%
    transform: scale(.4, .48)
  100%
    transform: scale(.8, .95)

@-o-keyframes box-resize6
  0%
    transform: scale(.45, .4)
  50%
    transform: scale(.4, .48)
  100%
    transform: scale(.8, .95)

@keyframes box-resize6
  0%
    transform: scale(.45, .4)
  50%
    transform: scale(.4, .48)
  100%
    transform: scale(.8, .95)

@-webkit-keyframes box-resize7
  0%
    transform: scale(.77, .57)
    -webkit-transform: scale(.77, .57)
  50%
    transform: scale(.87, .56)
    -webkit-transform: scale(.87, .56)
  100%
    transform: scale(.72, .55)
    -webkit-transform: scale(.72, .55)

@-moz-keyframes box-resize7
  0%
    transform: scale(.77, .57)
  50%
    transform: scale(.87, .56)
  100%
    transform: scale(.72, .55)

@-ms-keyframes box-resize7
  0%
    transform: scale(.77, .57)
  50%
    transform: scale(.87, .56)
  100%
    transform: scale(.72, .55)

@-o-keyframes box-resize7
  0%
    transform: scale(.77, .57)
  50%
    transform: scale(.87, .56)
  100%
    transform: scale(.72, .55)

@keyframes box-resize7
  0%
    transform: scale(.77, .57)
  50%
    transform: scale(.87, .56)
  100%
    transform: scale(.72, .55)

@-webkit-keyframes box-resize8
  0%
    transform: scale(.9, .52)
    -webkit-transform: scale(.9, .52)
  50%
    transform: scale(.7, .9)
    -webkit-transform: scale(.7, .9)
  100%
    transform: scale(.33, .44)
    -webkit-transform: scale(.33, .44)

@-moz-keyframes box-resize8
  0%
    transform: scale(.9, .52)
  50%
    transform: scale(.7, .9)
  100%
    transform: scale(.33, .44)

@-ms-keyframes box-resize8
  0%
    transform: scale(.9, .52)
  50%
    transform: scale(.7, .9)
  100%
    transform: scale(.33, .44)

@-o-keyframes box-resize8
  0%
    transform: scale(.9, .52)
  50%
    transform: scale(.7, .9)
  100%
    transform: scale(.33, .44)

@keyframes box-resize8
  0%
    transform: scale(.9, .52)
  50%
    transform: scale(.7, .9)
  100%
    transform: scale(.33, .44)

@-webkit-keyframes box-resize9
  0%
    transform: scale(.66, .33)
    -webkit-transform: scale(.66, .33)
  50%
    transform: scale(.4, .2)
    -webkit-transform: scale(.4, .2)
  100%
    transform: scale(.75, .67)
    -webkit-transform: scale(.75, .67)

@-moz-keyframes box-resize9
  0%
    transform: scale(.66, .33)
  50%
    transform: scale(.4, .2)
  100%
    transform: scale(.75, .67)

@-ms-keyframes box-resize9
  0%
    transform: scale(.66, .33)
  50%
    transform: scale(.4, .2)
  100%
    transform: scale(.75, .67)

@-o-keyframes box-resize9
  0%
    transform: scale(.66, .33)
  50%
    transform: scale(.4, .2)
  100%
    transform: scale(.75, .67)

@keyframes box-resize9
  0%
    transform: scale(.66, .33)
  50%
    transform: scale(.4, .2)
  100%
    transform: scale(.75, .67)

@-webkit-keyframes box-resize10
  0%
    transform: scale(.8, .4)
    -webkit-transform: scale(.8, .4)
  50%
    transform: scale(.93, .66)
    -webkit-transform: scale(.93, .66)
  100%
    transform: scale(.45, .77)
    -webkit-transform: scale(.45, .77)

@-moz-keyframes box-resize10
  0%
    transform: scale(.8, .4)
  50%
    transform: scale(.93, .66)
  100%
    transform: scale(.45, .77)

@-ms-keyframes box-resize10
  0%
    transform: scale(.8, .4)
  50%
    transform: scale(.93, .66)
  100%
    transform: scale(.45, .77)

@-o-keyframes box-resize10
  0%
    transform: scale(.8, .4)
  50%
    transform: scale(.93, .66)
  100%
    transform: scale(.45, .77)

@keyframes box-resize10
  0%
    transform: scale(.8, .4)
  50%
    transform: scale(.93, .66)
  100%
    transform: scale(.45, .77)

/*End Animations*/

</style>
