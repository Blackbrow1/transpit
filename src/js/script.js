import { addClassItemActive } from './modules/add-class-item-active.js';
import { trainingPage } from './modules/training-page.js';
import { securityTrainingData, humanFactorTrainingData, rpoTrainingData, smsTrainingData, gseTrainingData } from './modules/trainings-data.js';
import { getTrainingCounts } from './modules/get-training-counts.js';
import { showMoreUsers, showMoreUsersAndYears } from './modules/show-more-users.js';
import { showMoreProgressCards } from './modules/show-more-progress-cards.js';
import { setCursorInInput } from './modules/set-cursor-in-input.js';
import { removeSuccessMessage } from './modules/remove-success-message.js';
import { deleteUser } from './modules/delete-user.js';
import { addFileMessage } from './modules/add-file-message.js';

import {airsideSafetyRadioData, airsideSafetyCheckboxData, supervisorsRadioData, supervisorsCheckboxData, humanFactorRadioData, humanFactorCheckboxData, rpoRadioData, rpoCheckboxData, safetyManagmentSystemRadioData, safetyManagmentSystemCheckboxData, gseRadioData, gseCheckboxData} from './modules/testes-data.js';
import { showTestTime } from './modules/show-test-time.js';
import { getTestResult } from './modules/test-result.js';
import { getRandomAnswers } from './modules/get-random-answers.js';
import { downloadTestResults } from './modules/download-test-results.js';

window.addEventListener('DOMContentLoaded', () => {
  // Добавляю класс активному пункту меню
  addClassItemActive();

  // Результаты тестирования
  try {
    // Вывести рандомно 18 вопросов
    getRandomAnswers('#airside-safety', '.test__list', '.test__item', 18);

    const resultsTestSafetyAssess = getTestResult('#airside-safety', airsideSafetyRadioData, airsideSafetyCheckboxData, 18, 14);

    showTestTime('#airside-safety', resultsTestSafetyAssess, 1000 * 60 * 12);
  } catch {}

  try {
    // Вывести рандомно 20 вопросов
    getRandomAnswers('#basics-supervisor-job', '.test__list', '.test__item', 20);

    // Получить результаты теста
    const resultsTestSupervisors = getTestResult('#basics-supervisor-job', supervisorsRadioData, supervisorsCheckboxData, 20, 16);

    showTestTime('#basics-supervisor-job', resultsTestSupervisors, 1000 * 60 * 13); // 11
  } catch {}

  try {
    // Вывести рандомно 10 вопросов
    getRandomAnswers('#human-factor', '.test__list', '.test__item', 10);

    // Получить результаты теста
    const resultsTestHumanFactor = getTestResult('#human-factor', humanFactorRadioData, humanFactorCheckboxData, 10, 8);

    showTestTime('#human-factor', resultsTestHumanFactor, 1000 * 60 * 7); // 7
  } catch {}

  try {
    // Вывести рандомно 10 вопросов
    getRandomAnswers('#rpo', '.test__list', '.test__item', 10);

    // Получить результаты теста
    const resultsTestRPO = getTestResult('#rpo', rpoRadioData, rpoCheckboxData, 10, 8);

    showTestTime('#rpo', resultsTestRPO, 1000 * 60 * 7); // 7
  } catch {}

  try {
    // Вывести рандомно 10 вопросов
    getRandomAnswers('#sms', '.test__list', '.test__item', 10);

    // Получить результаты теста
    const resultsTestSMS = getTestResult('#sms', safetyManagmentSystemRadioData, safetyManagmentSystemCheckboxData, 10, 8);

    showTestTime('#sms', resultsTestSMS, 1000 * 60 * 7); // 7
  } catch {}

  try {
    // Вывести рандомно 10 вопросов
    getRandomAnswers('#gse', '.test__list', '.test__item', 10);

    // Получить результаты теста
    const resultsTestGSE = getTestResult('#gse', gseRadioData, gseCheckboxData, 10, 8);

    showTestTime('#gse', resultsTestGSE, 1000 * 60 * 7); // 7
  } catch {}

  // Обучающая страница
  try {
    trainingPage(securityTrainingData, '#training-security-safety');
  } catch {console.log('Ошибка Обучающая страница');}

  try {
    trainingPage(humanFactorTrainingData, '#training-human-factor');
  } catch {console.log('Ошибка Обучающая страница');}

  try {
    trainingPage(rpoTrainingData, '#training-rpo');
  } catch {console.log('Ошибка Обучающая страница');}

  try {
    trainingPage(smsTrainingData, '#training-sms');
  } catch {console.log('Ошибка Обучающая страница');}

  try {
    trainingPage(gseTrainingData, '#training-gse');
  } catch {console.log('Ошибка Обучающая страница');}

  try {
    trainingPage(securityTrainingData, '#training-for-supervisors');
  } catch {console.log('Ошибка Обучающая страница');}

  // Кнопочка с количеством тренингов к прохождению
  try {
    getTrainingCounts('.header__training-list', '.header__training-item', '.header__menu-item--all-trainings', 'header__training-delete');
  } catch {}

  try {
    getTrainingCounts('.footer__training-list', '.footer__training-item', '.footer__menu-item--all-trainings', 'footer__training-delete');
  } catch {}

  // Фильтрация всех сотрудников
  try {
    showMoreUsers('.users-list__select', '.users-list__city-select', '.users-list__names-select', '.users-list__item', '.users-list__button');
  } catch {}

  try {
    showMoreUsersAndYears('.users-finished-test__select', '.users-finished-test__city-select', '.users-finished-test__names-select', '.users-finished-test__year', '.users-finished-test__result', '.users-finished-test__item', '.users-finished-test__button');
  } catch {}

  // Показать следующие 3 результата теста в личном кабинете
  try {
    showMoreProgressCards('.user-progress__item', '.user-progress__button')
  } catch {}

  // Установить курсор по клику в поле
  try {
    setCursorInInput();
  } catch {console.log('Ошибка Установить курсор по клику в поле');}

  // Убрать сообщение об успехе
  try {
    removeSuccessMessage();
  } catch {console.log('Ошибка Убрать сообщение об успехе');}

  // Попап удаления записи о сотруднике
  try {
    deleteUser();
  } catch {
    console.log('Ошибка Попап удаления записи о сотруднике');
  }

  // Добавить надпись о том, что файл выбран
  try {
    addFileMessage();
  } catch {}

  // Скачать результаты всех сотрудников
  try {
    downloadTestResults('.users-finished-test__select', '.users-finished-test__city-select', '.users-finished-test__names-select', '.users-finished-test__year', '.users-finished-test__result', '.users-finished-test__item', '#downloadCsvButton');
  } catch {}
});

