# Leitner-Box
#### Leitner Box is a memorization using a box with five cells. Cards with question and answer will be put in the first cell, then move to the next cell when we got it correct. Otherwise, it will move back to the first cell regardless it is now placed. If a card reaches the fifth cell and we got it correct, which means we perfectly memorized it, it will be emitted from the box.

### This program is based on Nodejs, html and ejs.

### You can get to the service by connecting to http://141.164.50.196:8080/

## Explanation of the web page
- Initial Screen consists of six buttons. Top 3 buttons are related to word learning. Each are connected to 'learning', 'card adding', 'view all cards' menu. Bottom 3 buttons are related to image card learning and orders are same as those of word learning.
- Learn Menu: 
  - You can move any cells you want, by clicking one among five buttons
  - The large box at the center shows a card you have to learn
  - Check the answer by clicking '정답 확인하기' button
  - If you got it right, click '정답' button
  - Else, click '오답' button
  - You can move back to main menu by clicking the button at the bottom
- Create Menu:
  - Word Card: Input an english word and its meaning in Korean
  - Image Card: Input an image and any meaning you want
  - You can move back to main menu by clicking the button at the bottom
- View Menu: All cards will be shown on a table. The button at the bottom is connected to main menu
