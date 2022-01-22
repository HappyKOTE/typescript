import { renderBlock } from './lib.js'

const today = new Date()
const lastDayOfNextMonth = new Date(today.getFullYear(), today.getMonth()+2, 1)
function dateConvert (date:Date) { return date.toJSON().slice(0,10) }

export function renderSearchFormBlock (checkInDefaultValue?:Date, checkOutDefaultValue?:Date) {
  renderBlock(
    'search-form-block',
    `
    <form id="search-form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateConvert(checkInDefaultValue)}" min="${dateConvert(today)}" max="${dateConvert(lastDayOfNextMonth)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateConvert(checkOutDefaultValue)}" min="${dateConvert(today)}" max="${dateConvert(lastDayOfNextMonth)}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}

// переменная с данными для поиска и функция поиска
let searchInputData = { checkInValue: undefined, checkOutValue: undefined, maxPriceValue: undefined }
export function search() {
  searchInputData.checkInValue = document.getElementById('check-in-date').value
  searchInputData.checkOutValue = document.getElementById('check-out-date').value
  if (!!Number(document.getElementById('max-price').value)) { searchInputData.maxPriceValue = Number(document.getElementById('max-price').value) }
  console.log(searchInputData)
}