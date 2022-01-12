import { renderBlock } from './lib.js';
export function renderUserBlock(userName, avatarUrl, favoriteItemsAmount) {
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${favoriteItemsAmount > 0 ? ' active' : ''}"></i>${favoriteItemsAmount > 0 ? favoriteItemsAmount : 'ничего нет'}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBRSxRQUFlLEVBQUUsU0FBZ0IsRUFBRSxtQkFBMEI7SUFDNUYsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLFNBQVMsVUFBVSxRQUFROzs0QkFFaEMsUUFBUTs7a0NBRUYsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZOzs7O0tBSTFJLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrICh1c2VyTmFtZTpzdHJpbmcsIGF2YXRhclVybDpzdHJpbmcsIGZhdm9yaXRlSXRlbXNBbW91bnQ6bnVtYmVyKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIke2F2YXRhclVybH1cIiBhbHQ9XCIke3VzZXJOYW1lfVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlck5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke2Zhdm9yaXRlSXRlbXNBbW91bnQgPiAwID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7ZmF2b3JpdGVJdGVtc0Ftb3VudCA+IDAgPyBmYXZvcml0ZUl0ZW1zQW1vdW50IDogJ9C90LjRh9C10LPQviDQvdC10YInfVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuIl19