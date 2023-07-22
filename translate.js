let translations_ru = {
  description_title_mark: 'Мария Белецкая',
  description_text_part1:
    'Врач-невролог. Работаю с любой болью, шумом в ушах, головокружениями, невралгиями и нейродегенеративными заболеваниями.',
  description_text_part2: 'Живу в Германии, провожу приёмы онлайн.',
  description_text_part3:
    'Чтобы записаться ко мне на приём, выберите свобободное окошко в клинике Кью Клиник:',
  link1: 'хорошо',
  description_text_part4:
    'А чтобы прочитать или написать отзыв, перейдите на сайт',
  link2: 'Напоправку',
  description_text_part5: 'или',
  link3: 'Продокторов',
  description_text_part6: 'Ещё я веду ',
  link4: 'блог в инстаграме',
  description_text_part7:
    'с нишевым юмором в сторис, прохожу курсы по повышению квалификации и иногда пишу статьи по неврологии с крутыми людьми.',
  description_text_part8: 'Посмотреть на результаты можно на странице:',
  link5: 'шкаф с медалями',
};

let translations_en = {
  description_title_mark: 'Mariia Beletskaia',
  description_text_part1:
    'Neurologist. I work with any type of pain, tinnitus, vertigo, neuralgia, and neurodegenerative diseases.',
  description_text_part2:
    'I live in Germany and occasionally provide online consultations.',
  description_text_part3:
    'To schedule an appointment with me, please select an available slot at QClinic:',
  link1: 'okay',
  description_text_part4:
    'And to read or leave a review, you can visit websites:',
  link2: 'Napopravku',
  description_text_part5: 'or',
  link3: 'Prodoctorov',
  description_text_part6: 'Also I have ',
  link4: 'Instagram',
  description_text_part7:
    'with niche humor in my stories. And I pursue continuing education courses and occasionally write articles on neurology with awesome people.',
  description_text_part8: 'You can view the results on the page:',
  link5: 'medal cabinet',
};

document
  .querySelector('.header a:nth-child(1)')
  .addEventListener('click', function (event) {
    event.preventDefault();
    translatePage(translations_ru);
  });

document
  .querySelector('.header a:nth-child(2)')
  .addEventListener('click', function (event) {
    event.preventDefault();
    translatePage(translations_en);
  });

function translatePage(translations) {
  for (let key in translations) {
    let translatedText = translations[key];
    let element = document.getElementById(key);
    if (element) {
      element.textContent = translatedText;
    }
  }
}

function replaceTextNodes(node, newText) {
  node.textContent = newText;
}
