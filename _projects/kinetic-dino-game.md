---
layout: page
title: Only fools refuse to play - a kinetic dino game
description: A kinetic game that allows you to control the Chrome Dino game through jumping physically
img: assets/images/posts/kinetic-dino-game/flamingo.jpg
importance: 4
category: art
time: April 2024
---

Last month was my friend Iain's birthday.
<br/>
Fun and enabling as usual, Iain gave us a prompt to do installs for his party taking place on April Fool's day - "the fool" tarot card.

<div class="row justify-content-center">
    <div class="col-sm-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid path="https://www.biddytarot.com/wp-content/uploads/2018/02/0-fool.png" title="The Fool tarot card" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

On "the fool" tarot card, a jovial young man stands on the edge of a cliff. He's about to set out to his adventure, but he has no idea on what's right in front of him. 
<br/>
The card resembles innocence, spontaneity but also risk-taking and recklessness.
<br/>
<br/>
As part of the prompt, Iain wanted a party where people can "live life as though you were a child once again".
<br/>
One of my happiness childhood memories was jumping on the trampolines. I'm a firm believer that life is better with all the dopamine released from hopping around, no matter how it looks from the outside.
<br/>
<br/>
Thus I made a little kinetic game that allows you to control the Chrome Dino game through jumping physically.

<div class="row justify-content-center">
  <div class="col-sm-8 col-md-6">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
      <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="https://www.youtube.com/embed/niiHbAYI2P0?theme=dark&autoplay=1&keyboard=1&autohide=2&cc_load_policy=1&modestbranding=1&fs=0&showinfo=0&rel=0&iv_load_policy=3&mute=0&loop=0"
        sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
        frameborder="0">
      </iframe>
    </div>
  </div>
</div>

Part of the fun is to dress up in the flamingo custom - the development board is in a small sachet attached to the bird neck.
<br/>
This is a game where you really need to be silly to overcome obstacles.

<div class="row justify-content-center">
  <div class="col-sm-8 col-md-6">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
      <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="https://youtube.com/embed/qDHPOWUjRB4?theme=dark&autoplay=0&keyboard=1&autohide=2&cc_load_policy=1&modestbranding=1&fs=0&showinfo=0&rel=0&iv_load_policy=3&mute=0&loop=0"
        sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
        frameborder="0">
      </iframe>
    </div>
  </div>
</div>

The mechanism of the game is straight-forward - to play the game, 'the fools' have to wear this pair of slippers. There are one FSR pressure sensor at the bottom of each slipper.

<div class="row justify-content-center">
    <div class="col-sm-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/images/posts/kinetic-dino-game/sensor.jpeg" title="FSR sensor" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

These FSR sensors are used as pull-down resistors.
When "the fool" is standing on the ground, the FSR sensors detect the weight and the resistance decreases. The output voltage is low. When "the fool" jumps, FSR returns back to their max resistance and the output voltage is back high.

<div class="row justify-content-center">
    <div class="col-sm-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid path="https://cdn-learn.adafruit.com/assets/assets/000/000/435/original/force___flex_fsrpulldownsch.gif?1447975571" title="FSR pull-down schematic" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I'm using <a href="https://www.adafruit.com/product/4333">Adafruit Playground Bluefruit</a> as the development board. You can find the source code <a href="https://github.com/jiahuijiang/adafruit-projects/blob/main/dino-game/code.py">here</a>.
<br/>
The source code for local hosted t-rex-runner game can be found <a href="https://github.com/jiahuijiang/t-rex-runner/tree/jj/simplied">here</a>. Note that this is a forked version of the original game. I've made some changes to the game to make it easier to control the game through jumping.
<br/>
<br/>
Have fun jumping!

