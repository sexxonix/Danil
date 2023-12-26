<template>
    <div class="footer">
      <div class="left">
        <div class="phone">Телефон: 89117377701</div>
        <div class="name">ФИО: Варюхин Данил Валерьевич</div>
      </div>
      <div class="right">
        <div class="social">
          <img src="@/assets/vk.png" alt="ВКонтакте" />
          VK
        </div>
        <div class="social">
          <img src="@/assets/telegram.png" alt="Telegram" />
          Telegram
        </div>
        <div class="social">
          <img src="@/assets/youtube.png" alt="YouTube" />
          YouTube
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 97%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #227fbd; /* Голубой цвет */
    color: #fff; /* Белый цвет текста */
    padding: 22px;
  }
  
  .left {
    width: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5; /* Межстрочный интервал */
  }
  
  .phone {
    margin-bottom: 10px;
  }
  
  .right {
    display: flex;
    gap: 20px; /* Расстояние между иконками */
    align-items: center;
  }
  
  .social {
    display: flex;
    align-items: center;
    color: #fff; /* Белый цвет текста */
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s;
    margin-left: 10px; /* Сдвиг влево */
  }
  
  .social:hover {
    color: #ffeb3b; /* Изменен цвет при наведении */
    transform: scale(1.1); /* Изменен масштаб при наведении */
  }
  
  .right img {
    width: 30px;
    height: 30px;
  }
  </style>
  