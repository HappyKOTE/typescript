import { renderBlock } from './lib.js';
const today = new Date();
const lastDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);
function dateConvert(date) { return date.toJSON().slice(0, 10); }
export function renderSearchFormBlock(checkInDefaultValue, checkOutDefaultValue) {
    renderBlock('search-form-block', `
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
    `);
}
// переменная с данными для поиска и функция поиска
let searchInputData = { checkInValue: undefined, checkOutValue: undefined, maxPriceValue: undefined };
export function search() {
    searchInputData.checkInValue = document.getElementById('check-in-date').value;
    searchInputData.checkOutValue = document.getElementById('check-out-date').value;
    if (!!Number(document.getElementById('max-price').value)) {
        searchInputData.maxPriceValue = Number(document.getElementById('max-price').value);
    }
    console.log(searchInputData);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUV0QyxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO0FBQ3hCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDL0UsU0FBUyxXQUFXLENBQUUsSUFBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRXJFLE1BQU0sVUFBVSxxQkFBcUIsQ0FBRSxtQkFBeUIsRUFBRSxvQkFBMEI7SUFDMUYsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxXQUFXLENBQUMsbUJBQW1CLENBQUMsVUFBVSxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsV0FBVyxDQUFDLGtCQUFrQixDQUFDOzs7OzREQUlwRyxXQUFXLENBQUMsb0JBQW9CLENBQUMsVUFBVSxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsV0FBVyxDQUFDLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7S0FZN0osQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUVELG1EQUFtRDtBQUNuRCxJQUFJLGVBQWUsR0FBRyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLENBQUE7QUFDckcsTUFBTSxVQUFVLE1BQU07SUFDcEIsZUFBZSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUM3RSxlQUFlLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDL0UsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFBRSxlQUFlLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQUU7SUFDaEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG5jb25zdCBsYXN0RGF5T2ZOZXh0TW9udGggPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpKzIsIDEpXG5mdW5jdGlvbiBkYXRlQ29udmVydCAoZGF0ZTpEYXRlKSB7IHJldHVybiBkYXRlLnRvSlNPTigpLnNsaWNlKDAsMTApIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayAoY2hlY2tJbkRlZmF1bHRWYWx1ZT86RGF0ZSwgY2hlY2tPdXREZWZhdWx0VmFsdWU/OkRhdGUpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0gaWQ9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkYXRlQ29udmVydChjaGVja0luRGVmYXVsdFZhbHVlKX1cIiBtaW49XCIke2RhdGVDb252ZXJ0KHRvZGF5KX1cIiBtYXg9XCIke2RhdGVDb252ZXJ0KGxhc3REYXlPZk5leHRNb250aCl9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkYXRlQ29udmVydChjaGVja091dERlZmF1bHRWYWx1ZSl9XCIgbWluPVwiJHtkYXRlQ29udmVydCh0b2RheSl9XCIgbWF4PVwiJHtkYXRlQ29udmVydChsYXN0RGF5T2ZOZXh0TW9udGgpfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbn1cblxuLy8g0L/QtdGA0LXQvNC10L3QvdCw0Y8g0YEg0LTQsNC90L3Ri9C80Lgg0LTQu9GPINC/0L7QuNGB0LrQsCDQuCDRhNGD0L3QutGG0LjRjyDQv9C+0LjRgdC60LBcbmxldCBzZWFyY2hJbnB1dERhdGEgPSB7IGNoZWNrSW5WYWx1ZTogdW5kZWZpbmVkLCBjaGVja091dFZhbHVlOiB1bmRlZmluZWQsIG1heFByaWNlVmFsdWU6IHVuZGVmaW5lZCB9XG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoKCkge1xuICBzZWFyY2hJbnB1dERhdGEuY2hlY2tJblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrLWluLWRhdGUnKS52YWx1ZVxuICBzZWFyY2hJbnB1dERhdGEuY2hlY2tPdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVjay1vdXQtZGF0ZScpLnZhbHVlXG4gIGlmICghIU51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4LXByaWNlJykudmFsdWUpKSB7IHNlYXJjaElucHV0RGF0YS5tYXhQcmljZVZhbHVlID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXgtcHJpY2UnKS52YWx1ZSkgfVxuICBjb25zb2xlLmxvZyhzZWFyY2hJbnB1dERhdGEpXG59Il19