export default class Dialogs {
  public static readonly capibaraDialogs: string[] = [
    'Hello! I am Yara the Capybara. Welcome to our village!',
    'I heard that you want to become a member of our small community, but to do so you should pass our test.',
    'That is good that I met you, because I really need a very rare purple flower for my plant collection. They grow only in the forest, but I am scared to go there, because of the bad Fox that lives there...',
    'Some people say that he was kicked out of the village, because he did a lot of bad things, but I do not know for sure. I will give you a map that I hand drawn so that you will not get lost!',
    'Press [M] to open it',
    'I would be very thankful if you go and get these flowers for me, but remember what I told you about the dangerous Fox!',
    'Good luck!',
    'QUESTSTART',
    'Oh, you came back really fast! Thank you very much, the flowers are exactly what I needed.',
    'I would like to give you a present for what you did for me. I do not have it with me right now, so can you tell me your address where I can send it?',
    'YESorNO',
    'Okay! Where do you live?',
    'ANSWER',
    'Okay then, see you later!',
    'QUESTSTART',
  ];

  public static readonly foxDialogs: string[] = [
    'Hello, my name Is Ross the Fox. I am sure you have heard a terrible things about me and probably you do not want to help me.',
    'Although, I have a small request. Since I have been kicked out from the Village, I am starving. I would like to ask you to get me some fish from the Lake, because I am not allowed to go there.',
    'CHOICE',
    'For how long do you<br>live here?',
    'Why were you<br>kicked out?',
    'I can not tell you. I moved here a long time ago and I do not want to remember this story... Maybe you will get to the truth in the end of your journey.',
    'QUESTSTART',
    'Ah thank you, I will not die from hunger. As a reward I want to warn you about other animals, because they are not what they seem to be.',
    'If you want to know more - visit Squirrel in the Swamp. She is a witch and my old friend. You can trust her words.',
    'QUESTSTART',
  ];

  public static readonly hedgehogDialogs: string[] = [
    'Hello, my name is Fleur the Hedgehog. Do not you think that it is quite warm today? It should be very good to swim in the lake, the temperature of water is perfect.',
    'However, I am trying to catch some fish here, but I guess that luck is not on my side today.',
    'I left my fishing rod for just one minute, and when I returned the fish that I caught was stolen...',
    'Anyway, I will catch a new one, but I am very thirsty. Can you please bring me the glass of water from the Restaurant, because I do not want to leave my stuff here again.',
    'Do not worry about the money, the owner is my friend.',
    'QUESTSTART',
    '*SLURP SLURP*<br>That was refreshing, thank you.',
    'Actually, I am an excellent birthday party organizer. As a reward, I want to organize a birthday party for you. Can you please tell me your date of birth?',
    'YESorNO',
    'Okay! When is your birthday?',
    'ANSWER',
    'Alright, see you later!',
    'QUESTSTART',
  ];

  public static readonly racoonDialogs: string[] = [
    'Howdy, my name is Mamoon the Raccoon and I am the owner of this restaurant. How can I help you?',
    'CHOICE',
    'Hedgehog<br>sent me',
    'I am here for<br>some water',
    'Oh, I see, you need a bottle of water for my friend Fleur. She is probably fishing outside again, she loves it.',
    'Okay, your order is coming right up.',
    'It will be 1 gold coin, but since Fleur is your friend, I will put it on her balance. However, I need your full name so I can ask her later if she really knows you.',
    'YESorNO',
    'What is your full name?',
    'ANSWER',
    'Well, see you around.',
    'QUESTSTART',
  ];

  public static readonly squirellDialogs: string[] = [
    'Come closer, traveler. I am Rochelle the Squirrel.',
    'CHECKCHOICE',
    'I can see that you are on the right path here.',
    'I can see that you are making some decisions that might not be good for you.',
    'If you want me to predict your faith, I need to ask you some questions so I will get to know you better.',
    'Question one:',
    'What is your favourite color?',
    'ANSWER',
    'What is your favourite food?',
    'ANSWER',
    'What is your favourite animal?',
    'ANSWER',
    'Oh, I see... Your future is much more interesting than I expected.',
    'Also, I can tell that you want to know about Ross. You may find some clues somewhere high in the Mountains. They are located in the north of the Village. May good luck accompany you on your way, traveller.',
    'QUESTSTART',
  ];

  public static readonly wolfDialogs: string[] = [
    'Hello, my name is Sofie the Wolfie.',
    'You might ask why am I that high in the mountains. Well, I just do not like talking to other animals.',
    'But I have one question. I really like to predict the future weather in the Village, so can you tell me what is it right now?',
    'CHOICE',
    'Warm',
    'Cold',
    'Thank you so much. Could you also ask the Hedgehog at the Lake if the water is warm enough to swim there?',
    'Have a sunny day!',
    'QUESTSTART',
  ];
}
