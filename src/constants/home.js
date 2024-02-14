import { computed } from 'vue';
import background from "@/assets/img/background-image-lawer-reduce.jpg";
import books from "@/assets/img/books-image-reduce.jpg";
import library from "@/assets/img/library-image-reduce.jpg";
import photo from "@/assets/img/slide-lawyer-bg.jpg";
import writing from "@/assets/img/writing-lawer-reduce.jpg";
import attorney from "@/assets/img/lawyer-advantages-attorney-reduce.jpg";
import bank from "@/assets/img/svg/bank-building-icon.svg";
import building from "@/assets/img/svg/building-icon.svg";
import person from "@/assets/img/svg/person-icon.svg";
import lawer1 from "@/assets/img/lawer1.jpg";

export const serviceList = computed(() => [
  {
    image: background,
    title: 'ваши проблемы - наша забота!',
    text: 'специализируемся на юридических услугах'
  },
  {
    image: books,
    title: 'поможем сохранить имущество',
    text: 'оказываем поддержку по защите Ваших интересов в суде'
  },
  {
    image: library,
    title: 'полное списание долгов без рисков',
    text: 'готовим стратегию защиты и необходимые документы'
  }
]);

export const lawerSliderImage = [
  {
    image: lawer1,
    title: 'Юрист по банкротству Ирина',
    text: '12 лет опыта в сфере банкротства юридичесих и физических лиц. Внушительная история успеха.'
  },
  {
    image: lawer1,
    title: 'Юрист по банкротству Ольга',
    text: '10 лет опыта в сфере банкротства юридичесих и физических лиц. Внушительная история успеха'
  },
  {
    image: lawer1,
    title: 'Юрист по банкротству Светлана',
    text: '8 лет опыта в сфере банкротства юридичесих и физических лиц. Внушительная история успеха. 8 лет опыта в сфере банкротства юридичесих и физических лиц. Внушительная история успеха. 8 лет опыта в сфере банкротства юридичесих и физических лиц. Внушительная история успеха.'
  }
]

export const footerImage = [
  {
    image: photo,
    title: 'Вы находитесь в затруднительной жизненной ситуации?',
    subtitle: 'Помните, что безвыходных положений не бывает!',
    text: 'Закажите консультацию юриста по телефону'
  },
  {
    image: writing,
    title: 'Проблемы с кредиторами и банками кажутся неразрешимыми?',
    subtitle: 'Вам просто необходима консультация квалифицированного юриста!',
    text: 'Закажите звонок и воспользуйтесь знаниями специалиста в данной области!'
  },
  {
    image: attorney,
    title: 'Ваши усилия по избавлению от ежемесячных изнуряющих платежей кажутся тщетными?',
    subtitle: 'Позвольте профессионалам сделать всё за Вас!',
    text: 'Не теряйте времени, свяжитесь с нашим центром!'
  }
];

export const cardsList = computed(() => [
{
    image: building,
    title: 'БАНКРОТСТВО ЮРИДИЧЕСКИХ ЛИЦ',
    text: 'Сопровождение процедуры банкротства на любой стадии. Консультирование, представительство интересов в арбитражных судах'
},
{
  image: bank,
  title: 'ПРОЦЕДУРА БАНКРОТСТВА',
  text: 'Эффективное представительство по защите прав и законных интересов физических и юридических лиц. Сотрудники с солидным опытом работы в системе арбитражных судов всех инстанций'
},
{
    image: person,
    title: 'БАНКРОТСТВО ФИЗИЧЕСКИХ ЛИЦ',
    text: '100% успешных кейсов по защите прав граждан. Законные и эффективные подходы по избавлению от долговой нагрузки. Полное сопровождение банкротного делопроизводства'
}
]);
