# 라이트너 상자
#### 
라이트너 상자는 5개의 칸으로 이루어진 암기법입니다. 문제와 답이 양면에 적힌 카드는 모두 첫 번째 칸에 들어가고, 사용자가 정답을 맞힐 때마다 다음 칸으로 이동합니다. 만약 정답을 맞히지 못한다면, 그 카드가 현재 어느 칸에 있든 상관없이 첫 번째 칸으로 이동하게 됩니다. 만약 다섯 번째 칸에 있는 카드를 들어 정답을 맞히면, 우리는 그것을 완벽하게 암기한 것이므로 상자에서 그 카드를 제거하면 됩니다.

### 이 프로그램은 Nodejs와 html을 기반으로 제작되었습니다.

~~http://141.164.50.196:8080/에 접속해 서비스를 이용할 수 있습니다~~

## 웹 페이지 설명
- 시작 화면에는 6개의 버튼이 있습니다. 상단의 3개는 단어 학습 버튼입니다. 각각 '학습', '카드 추가', '모든 카드 조회' 메뉴로 연결됩니다. 하단의 3개는 이미지 학습 버튼이며, 각 버튼의 기능은 단어 학습과 동일합니다.
- 학습 메뉴: 
  - 해당 칸을 가리키는 버튼을 클릭하여 원하는 칸으로 이동할 수 있습니다
  - 현재 학습할 카드는 가운데에 있는 가장 큰 상자에 나타납니다
  - '정답 확인하기' 버튼을 눌러 답을 확인할 수 있습니다
  - 정답을 맞혔다면 '정답' 버튼을 누르세요
  - 틀렸다면 '오답' 버튼을 누르세요
  - 가장 아래에 있는 버튼을 눌러 메인 화면으로 돌아갈 수 있습니다
  - ![학습하기](/img/play.PNG)
- 카드 추가:
  - 단어 카드: 영단어와 한국어 뜻을 입력하여 단어 카드를 추가할 수 있습니다
  - 이미지 카드: 컴퓨터에 저장되어 있는 이미지를 선택하고, 원하는 의미를 입력하여 이미지 카드를 추가할 수 있습니다
  - 가장 아래에 있는 버튼을 눌러 메인 화면으로 돌아갈 수 있습니다
  - ![카드 추가하기](/img/create.PNG)
- 카드 조회: 
  - 카드 조회 버튼을 누르면 현재 라이트너 상자에 있는 모든 카드가 표에 정리되어 나타납니다
  - 가장 아래에 있는 버튼을 눌러 메인 화면으로 돌아갈 수 있습니다
  - ![카드 조회하기](/img/view.PNG)


# Leitner-Box
#### Leitner Box is a memorization using a box with five cells. Cards with question and answer will be put in the first cell, then move to the next cell when we got it correct. Otherwise, it will move back to the first cell regardless it is now placed. If a card reaches the fifth cell and we got it correct, which means we perfectly memorized it, it will be emitted from the box.

### This program is based on Nodejs, html and ejs.

~~You can get to the service by connecting to http://141.164.50.196:8080/~~

## Explanation of the web page
- Initial Screen consists of six buttons. Top 3 buttons are related to word learning. Each are connected to 'learning', 'card adding', 'view all cards' menu. Bottom 3 buttons are related to image card learning and orders are same as those of word learning.
- Learn Menu: 
  - You can move any cells you want, by clicking one among five buttons
  - The large box at the center shows a card you have to learn
  - Check the answer by clicking '정답 확인하기' button
  - If you got it right, click '정답' button
  - Else, click '오답' button
  - You can move back to main menu by clicking the button at the bottom
  - ![Learn](/img/play.PNG)
- Create Menu:
  - Word Card: Input an english word and its meaning in Korean
  - Image Card: Input an image and any meaning you want
  - You can move back to main menu by clicking the button at the bottom
  - ![Create card](/img/create.PNG)
- View Menu: 
  - All cards will be shown on a table
  - The button at the bottom is connected to main menu
  - ![View cards](/img/view.PNG)

