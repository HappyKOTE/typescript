import { renderSearchFormBlock, search } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

// объявляем глобальные переменные
let user = { username: undefined, avatarUrl: undefined}
let favoritesAmount = undefined
const today = new Date()

// загружаем данные о пользователе в contentStorage, если их там нет
if (!localStorage.getItem('user')) { localStorage.setItem('user', '{ username: "Wade Warren", avatarUrl: "/img/avatar.png" }') }
if (!localStorage.getItem('favoritesAmount')) { localStorage.setItem('favoritesAmount', '1') }

// функции выгрузки данных оп пользователе
function getUserData() { user = JSON.parse(localStorage.getItem('user')) }
function getFavoritesAmount() { favoritesAmount = Number(localStorage.getItem('favoritesAmount')) }

// расчитываем значения по умолчанию для формы поиска
const checkInDefaultValue = new Date(today.getFullYear(), today.getMonth(), today.getDate()+2)
const checkOutDefaultValue = new Date(checkInDefaultValue.getFullYear(), checkInDefaultValue.getMonth(), checkInDefaultValue.getDate()+2)

// рендер страницы
window.addEventListener('DOMContentLoaded', () => {
  getUserData()
  getFavoritesAmount()
  renderUserBlock(user.username, user.avatarUrl, favoritesAmount)
  renderSearchFormBlock(checkInDefaultValue, checkOutDefaultValue)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
  document.getElementById('search-form').addEventListener('submit', (event) => { search(); event.preventDefault() })
})