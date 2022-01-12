import { renderBlock } from './lib.js';
const today = new Date();
const lastDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);
const checkInDefaultValue = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
const checkOutDefaultValue = new Date(checkInDefaultValue.getFullYear(), checkInDefaultValue.getMonth(), checkInDefaultValue.getDate() + 2);
function dateConvert(date) {
    return date.toJSON().slice(0, 10);
}
export function renderSearchFormBlock() {
    renderBlock('search-form-block', `
    <form>
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
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUV0QyxNQUFNLEtBQUssR0FBUSxJQUFJLElBQUksRUFBRSxDQUFBO0FBQzdCLE1BQU0sa0JBQWtCLEdBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDcEYsTUFBTSxtQkFBbUIsR0FBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNuRyxNQUFNLG9CQUFvQixHQUFRLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxFQUFFLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBRTlJLFNBQVMsV0FBVyxDQUFFLElBQVM7SUFDN0IsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQTtBQUNsQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzsyREFpQnVELFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxXQUFXLENBQUMsa0JBQWtCLENBQUM7Ozs7NERBSXBHLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxXQUFXLENBQUMsa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7OztLQVk3SixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuY29uc3QgdG9kYXk6RGF0ZSA9IG5ldyBEYXRlKClcbmNvbnN0IGxhc3REYXlPZk5leHRNb250aDpEYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSsyLCAxKVxuY29uc3QgY2hlY2tJbkRlZmF1bHRWYWx1ZTpEYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKzIpXG5jb25zdCBjaGVja091dERlZmF1bHRWYWx1ZTpEYXRlID0gbmV3IERhdGUoY2hlY2tJbkRlZmF1bHRWYWx1ZS5nZXRGdWxsWWVhcigpLCBjaGVja0luRGVmYXVsdFZhbHVlLmdldE1vbnRoKCksIGNoZWNrSW5EZWZhdWx0VmFsdWUuZ2V0RGF0ZSgpKzIpXG5cbmZ1bmN0aW9uIGRhdGVDb252ZXJ0IChkYXRlOkRhdGUpIHtcbiAgcmV0dXJuIGRhdGUudG9KU09OKCkuc2xpY2UoMCwxMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayAoKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkYXRlQ29udmVydChjaGVja0luRGVmYXVsdFZhbHVlKX1cIiBtaW49XCIke2RhdGVDb252ZXJ0KHRvZGF5KX1cIiBtYXg9XCIke2RhdGVDb252ZXJ0KGxhc3REYXlPZk5leHRNb250aCl9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkYXRlQ29udmVydChjaGVja091dERlZmF1bHRWYWx1ZSl9XCIgbWluPVwiJHtkYXRlQ29udmVydCh0b2RheSl9XCIgbWF4PVwiJHtkYXRlQ29udmVydChsYXN0RGF5T2ZOZXh0TW9udGgpfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKVxufVxuIl19