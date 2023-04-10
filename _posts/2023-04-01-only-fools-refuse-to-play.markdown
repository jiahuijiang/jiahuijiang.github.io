---
layout: post-centered
title: "Only fools refuse to play - a kinetic dino game"
icon: fa-snowflake-o
tags: [art, hardware]
thumbnail: /assets/images/posts/kinetic-dino-game/flamingo.jpg
---

<html lang="en">
<head />
<body>

Last month was my friend Iain's birthday.
<br/>
Fun and enabling as usual, Iain gave us a prompt to do installs for his party taking place on April Fool's day - "the fool" tarot card.
<br/>
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

<div style="height:321px; width:500px; overflow: hidden; margin: 0 auto">
  <iframe height="321" width="500"
    src="https://www.youtube.com/embed/niiHbAYI2P0?theme=dark&autoplay=1&keyboard=1&autohide=2&cc_load_policy=1&modestbranding=1&fs=0&showinfo=0&rel=0&iv_load_policy=3&mute=0&loop=0"
    sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
    style="height:441px; background:#000000; bottom: 61px; position: relative;"
    frameborder="0">
  </iframe>
</div>

Part of the fun is to dress up in the flamingo custom - the development board is in a small sachet attached to the bird neck.
<br/>
This is a game where you really need to be silly to overcome obstacles.

<div style="height:321px; width:500px; overflow: hidden; margin: 0 auto">
  <iframe height="321" width="500"
    src="https://youtube.com/embed/qDHPOWUjRB4?theme=dark&autoplay=0&keyboard=1&autohide=2&cc_load_policy=1&modestbranding=1&fs=0&showinfo=0&rel=0&iv_load_policy=3&mute=0&loop=0"
    sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
    style="height:441px; background:#000000; bottom: 61px; position: relative;"
    frameborder="0">
  </iframe>
</div>

The mechanism of the game is straight-forward - to play the game, 'the fools' have to wear this pair of slippers. There are one FSR pressure sensor at the bottom of each slipper.

<div style="margin-bottom: 30px">
    <img src="/assets/images/posts/kinetic-dino-game/sensor.jpeg" weight="300" height="300" style="margin: 0 auto" />
</div>

These FSR sensors are used as pull-down resistors.
When "the fool" is standing on the ground, the FSR sensors detect the weight and the resistance decreases. The output voltage is low. When "the fool" jumps, FSR returns back to their max resistance and the output voltage is back high.


<div style="margin-bottom: 30px">
    <img src="https://cdn-learn.adafruit.com/assets/assets/000/000/435/original/force___flex_fsrpulldownsch.gif?1447975571" weight="400" height="400" style="margin: 0 auto" />
</div>

Hope you have fun jumping and releasing happy hormones!


</body>
</html>


