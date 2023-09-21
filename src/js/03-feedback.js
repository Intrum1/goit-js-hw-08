import throttle from 'lodash.throttle';

/*
1. Получить ссылку на form;
2. Создать ключ для доступа к локальному хранилищу
3. Создать обьект для сохранения пользовательской информации
4. Повесить Слухача на form Input
    4.1. Значения value поместить в этот обьект
    4.2. Записать обьект по ключу в хранишище данных
5. Повесить Слухача на form Submit
   5.1 Вызывает Prevent Default
   5.2 Делаем очистку формы с помощью метода reset
   5.3 Делаем очистку LocalStorage с помощью метода removeItem
   5.4 Вывести обьект с полями email message и текущими значениями в консоль
6. После перезагрузки вернуть данные из хранилища в нужные поля формы 



*/

const refs = {
  form: document.querySelector('.js-form'),
};
const FORM_LS_KEY = 'feedback-form-state';
const formState = {};

fillFormFromLS(refs.form, FORM_LS_KEY);

refs.form.addEventListener('input', throttle(handleInput, 500));
refs.form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  // event - объект, который хранит в себе всю информацию про текущее событие
  // event.target - хранит в себе ссылку на дом-элемент, который вызвал событие (или на котором событие произошло)
  // event.currentTarget - ссылка на дом-элемент, на котором висит обработчик событий(в данном случае это вся форма)
  // console.log(event.target.value);
  // console.log(event.currentTarget);
  const formData = new FormData(refs.form); // создаю объект(экземпляр класса) для удобной работы с формой(этот объект дает нам набор методов для удобного взаимодействие с информацией и данными внутри формы)
  // console.log('elements email:', refs.form.elements.email.value);

  formState.email = formData.get('email'); // вызываю метод get(name) который принимает парметр name(значение атрибута name из html) и этот метод возвращает значение поля (.value);
  formState.message = formData.get('message');

  localStorage.setItem(FORM_LS_KEY, JSON.stringify(formState));
}

function fillFormFromLS(form, lsKey) {
  try {
    const lsData = JSON.parse(localStorage.getItem(lsKey));

    if (!lsData) return;

    const formData = new FormData(form);
    for (const [key] of formData.entries()) {
      form.elements[key].value = lsData[key];
    }
  } catch (err) {
    console.log('Parsing error.', err);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  try {
    const lsData = JSON.parse(localStorage.getItem(FORM_LS_KEY));
    console.log(lsData);
  } catch (err) {
    console.log('Parsing error.', err);
  }

  refs.form.reset();
  localStorage.removeItem(FORM_LS_KEY);
}
