# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Harsh Jhaveri**

Time spent: **5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [ * ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [ * ] "Start" button toggles between "Start" and "Stop" when clicked.
- [ * ] Game buttons each light up and play a sound when clicked.
- [ * ] Computer plays back sequence of clues including sound and visual cue for each button
- [ * ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [ * ] User wins the game after guessing a complete pattern
- [ * ] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ * ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [ ] Playback speeds up on e ach turn
- [ * ] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

* [ ] A measure to make sure that a player cannot click on the button when the clue is playing
* [ ] User ability to change sound

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src="http://g.recordit.co/LflhIOUnWL.gif" width=250 height=250><br>

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   StackOverflow.com, w3schools.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   A big challenge that I faced was to put my ideas for the styling into practice. 
   For example, I wanted to implement an “illumination” element to the buttons when they are lit, 
   however I am not extremely familiar with CSS. So, while I had this idea I did not know of the proper way to implement it. 
   Immediately I went to w3schools, where I read up about the box-shadow property in CSS. 
   After reading about the property, I went back to my code and implemented it, but had little success. It turned out that I was not aware of the nuances of the property, namely that it could only be applied to DIVs not buttons. After some more reading, I understood the box shadow property better and was able to implement it within my project. A similar situation happened with the radial gradient portion of the “illumination” effect. I did extra reading and worked to implement it within my project. I am happy with the result, as I made the buttons look how I wanted it to, and also gained a better understanding about different uses of specific CSS properties. The extra reading that I did helped me also think of other visual aspects, such as the size transitions, which helped me make the project look more polished.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
  
  I want to know more about the hosting aspect of web development. Here I have a static project, but I have no way of deploying this game to the public. 
  Thus I would want to learn how to host and deploy website. Along with this, I want to know how to implement more complex functions, animations, or even styling
  using JavaScript. I feel as though I only scratched the surface and thus want to see what else JavaScript is capable of. I am also curious as to what separates JavaScript, which is 
  a functional language, from Java which is object oriented. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

I would work on improving the accessibility of the project. 
As the project is currently, it is very reliant on the player's sight and hearing, 
which makes the game inaccessible for many. For those who are blind, I would make it so the sound which is played will give the number of the button, rather than a tone. Along with this, I will try to
incorporate an alternate mode of interaction, such as voice. For those that are deaf, I will work to make the illumination effect of each button more apparent so that it will be easier to play. 
Increasing the size of the start button, as well as incorporating a color blind mode would also be features which I would like to implement. 

## License

    Copyright Harsh Jhaveri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
