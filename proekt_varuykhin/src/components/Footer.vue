<template>
  <!-- Открываем раздел шаблона Vue-компонента -->
  <div class="footer">
    <!-- Блок левой части футера с контактной информацией -->
    <div class="left">
      <!-- Адрес местоположения -->
      <div class="adres">Адрес: улица Пушкина дом колотушкина 7</div>
      <!-- Номер телефона для связи -->
      <div class="phone">Телефон: 89117377701</div>
    </div>
    <!-- Блок правой части футера с социальными иконками -->
    <div class="right">
      <!-- Социальная иконка и текст для ВКонтакте -->
      <div class="social">
        <img src="@/assets/vk.png" alt="ВКонтакте" />
        VK
      </div>
      <!-- Социальная иконка и текст для Telegram -->
      <div class="social">
        <img src="@/assets/telegram.png" alt="Telegram" />
        Telegram
      </div>
      <!-- Социальная иконка и текст для YouTube -->
      <div class="social">
        <img src="@/assets/youtube.png" alt="YouTube" />
        YouTube
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Стили для компонента, ограниченные областью компонента (scoped) */

/* Стили для всего футера */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #227fbd; /* Голубой цвет фона футера */
  color: #fff; /* Белый цвет текста футера */
  padding: 18px;
}

/* Стили для левой части футера */
.left {
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.5; /* Межстрочный интервал текста в левой части */
}

/* Стили для блока с номером телефона */
.phone {
  margin-top: 10px;
}

/* Стили для правой части футера с социальными иконками */
.right {
  display: flex;
  gap: 20px; /* Расстояние между иконками */
  align-items: center;
}

/* Стили для блока с социальной иконкой и текстом */
.social {
  display: flex;
  align-items: center;
  color: #fff; /* Белый цвет текста в блоке социальной иконки */
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s; /* Плавное изменение всех свойств при наведении */
  margin-left: 10px; /* Сдвиг влево между блоками социальных иконок */
}

/* Стили при наведении на блок социальной иконки и текста */
.social:hover {
  color: #ffeb3b; /* Изменен цвет текста при наведении */
  transform: scale(1.1); /* Изменен масштаб блока при наведении */
}

/* Стили для изображений социальных иконок */
.right img {
  width: 30px;
  height: 30px;
}
</style>
