import { renderBlock } from './lib.js'

export function renderUserBlock (userName:string, avatarUrl:string, favoriteItemsAmount:number) {
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${!!favoriteItemsAmount ? ' active' : ''}"></i>${!!favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'}
          </p>
      </div>
    </div>
    `
  )
}
