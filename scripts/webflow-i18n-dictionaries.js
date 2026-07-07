const localeMap = {
  ru: "ru",
  ua: "uk",
};

const phraseMaps = {
  ru: {
    "Nuvera - Webflow Ecommerce Website Template": "Nuvera - шаблон интернет-магазина Webflow",
    "Blog - Nuvera Webflow Ecommerce Website Template": "Блог - Nuvera, шаблон интернет-магазина Webflow",
    "About - Nuvera Webflow Ecommerce Website Template": "О нас - Nuvera, шаблон интернет-магазина Webflow",
    "Shop - Nuvera Webflow Ecommerce Website Template": "Магазин - Nuvera, шаблон интернет-магазина Webflow",
    "Category - Nuvera Webflow Ecommerce Website Template": "Категория - Nuvera, шаблон интернет-магазина Webflow",
    "Privacy Policy - Nuvera Webflow Ecommerce Website Template":
      "Политика конфиденциальности - Nuvera, шаблон интернет-магазина Webflow",
    "License - Nuvera Webflow Ecommerce Website Template":
      "Лицензия - Nuvera, шаблон интернет-магазина Webflow",
    "Style Guide - Nuvera Webflow Ecommerce Website Template":
      "Гайд по стилю - Nuvera, шаблон интернет-магазина Webflow",
    "Change Log - Nuvera Webflow Ecommerce Website Template":
      "Журнал изменений - Nuvera, шаблон интернет-магазина Webflow",
    "404 - Nuvera Webflow Ecommerce Website Template":
      "404 - Nuvera, шаблон интернет-магазина Webflow",
    "Sign In - Nuvera Webflow Ecommerce Website Template":
      "Вход - Nuvera, шаблон интернет-магазина Webflow",
    "Sign Up - Nuvera Webflow Ecommerce Website Template":
      "Регистрация - Nuvera, шаблон интернет-магазина Webflow",
    "Forget Password - Nuvera Webflow Ecommerce Website Template":
      "Сброс пароля - Nuvera, шаблон интернет-магазина Webflow",
    "Checkout - Nuvera Webflow Ecommerce Website Template":
      "Оформление заказа - Nuvera, шаблон интернет-магазина Webflow",
    "Discover 50+ naturally pure skincare essentials. Cruelty-free, clinically proven formulas for visible results. Shop serums, cleansers &amp; more.":
      "Откройте для себя более 50 натуральных средств ухода за кожей. Без тестирования на животных, клинически проверенные формулы с заметным результатом. Покупайте сыворотки, очищающие средства и многое другое.",
    Home: "Главная",
    About: "О нас",
    Shop: "Магазин",
    Blog: "Блог",
    Pages: "Страницы",
    Category: "Категория",
    Login: "Войти",
    "Sign In": "Войти",
    Signup: "Регистрация",
    "Sign up": "Регистрация",
    "Forget Password": "Забыли пароль",
    "Your Cart": "Ваша корзина",
    Subtotal: "Итого",
    Remove: "Удалить",
    "Pay with browser.": "Оплатить через браузер.",
    "Continue to Checkout": "Перейти к оплате",
    "No items found.": "Товары не найдены.",
    "Product is not available in this quantity.": "Товар недоступен в таком количестве.",
    "Something went wrong when adding this item to the cart.":
      "Что-то пошло не так при добавлении товара в корзину.",
    "Checkout is disabled on this site.": "Оформление заказа отключено на этом сайте.",
    "The order minimum was not met. Add more items to your cart to continue.":
      "Минимальная сумма заказа не достигнута. Добавьте товары в корзину, чтобы продолжить.",
    "Before you purchase, please use your email invite to verify your address so we can send order updates.":
      "Перед покупкой подтвердите адрес через приглашение по email, чтобы мы могли отправлять обновления по заказу.",
    "Open cart": "Открыть корзину",
    "Close cart": "Закрыть корзину",
    "Remove item from cart": "Удалить товар из корзины",
    "Update quantity": "Обновить количество",
    "Naturally pure skincare essentials": "Натуральный уход за кожей",
    Naturally: "Натуральный",
    "pure skincare essentials": "уход за кожей",
    "Explore Now": "Смотреть сейчас",
    "Start your day with gentle care and nourishing ingredients designed to awaken your skin naturally.":
      "Начните день с мягкого ухода и питательных ингредиентов, которые естественно пробуждают кожу.",
    "Hydration Boost Formula": "Формула усиленного увлажнения",
    "We craft science-backed beauty using carefully selected ingredients to":
      "Мы создаём научно обоснованный уход из тщательно выбранных ингредиентов, чтобы",
    "deliver effective, high-performance results without compromise on quality, safety, or skin health":
      "давать эффективный результат без компромиссов в качестве, безопасности и здоровье кожи",
    "Clean Ingredients": "Чистые ингредиенты",
    Clean: "Чистые",
    Ingredients: "Ингредиенты",
    "Visible Results": "Заметный результат",
    Visible: "Заметный",
    Results: "Результат",
    "Advanced Skincare": "Продвинутый уход",
    Advanced: "Продвинутый",
    Skincare: "Уход за кожей",
    "Effective formulas crafted to improve texture, boost glow, and deliver noticeable skin results.":
      "Эффективные формулы помогают улучшить текстуру, усилить сияние и дать заметный результат.",
    "Modern solutions designed to target concerns, support health, and enhance overall care.":
      "Современные решения для точечной работы с потребностями кожи, поддержки здоровья и улучшения ухода.",
    "Refresh your skin and": "Освежите кожу и",
    "renew your natural glow": "верните естественное сияние",
    Cleansers: "Очищение",
    Serums: "Сыворотки",
    Moisturizers: "Увлажнение",
    Sunscreen: "SPF-защита",
    Toner: "Тонер",
    "Hair Oil": "Масло для волос",
    Lotion: "Лосьон",
    Cream: "Крем",
    "Only 15 Products": "Осталось только 15 товаров",
    "Left This Month": "в этом месяце",
    "Skincare Serum": "Сыворотка для кожи",
    "Lightweight formula delivering deep hydration while enhancing your skin’s natural, healthy glow":
      "Лёгкая формула глубоко увлажняет и усиливает естественное здоровое сияние кожи",
    "Trusted by our happy": "Нам доверяют довольные",
    "and loyal customers": "и постоянные клиенты",
    "Event Planner": "Организатор мероприятий",
    "HR Director": "HR-директор",
    "Fashion Designer": "Модельер",
    "My skin was extremely dry and dull before discovering this brand - now it feels healthy, soft, and radiant. It completely changed how I take care of my skin daily.":
      "До знакомства с брендом моя кожа была очень сухой и тусклой. Теперь она выглядит здоровой, мягкой и сияющей. Это полностью изменило мой ежедневный уход.",
    "I tried one product out of curiosity, and the quality impressed me. The textures, ingredients, and results feel premium, making every purchase truly worth it single time.":
      "Я попробовала один продукт из любопытства, и качество меня впечатлило. Текстуры, ингредиенты и результат ощущаются премиальными, поэтому каждая покупка стоит своих денег.",
    "This brand has become a trusted part of my routine. I consistently use their products every month, and they always deliver reliable results that make my skin feel fresh and balanced.":
      "Этот бренд стал надёжной частью моего ухода. Я регулярно пользуюсь продуктами каждый месяц, и они стабильно дают результат: кожа свежая и сбалансированная.",
    "A simple, effective formula for a smooth and balanced experience. Perfect for your everyday skincare essentials.":
      "Простая и эффективная формула для мягкого и сбалансированного ухода. Отлично подходит для ежедневной рутины.",
    "Clean, clinically proven, consciously crafted": "Чисто, клинически доказано, осознанно создано",
    "Formulated with safe ingredients backed by science to support healthier skin, body, and well-being with clean, trusted formulations.":
      "Создано из безопасных ингредиентов с научным обоснованием для здоровья кожи, тела и общего самочувствия.",
    "Find Answers to All": "Найдите ответы на все",
    "Your Questions": "ваши вопросы",
    "Are your products suitable for sensitive skin?": "Подходят ли продукты для чувствительной кожи?",
    "How long does it take to see visible results?": "Когда можно увидеть заметный результат?",
    "Are your products cruelty-free?": "Ваши продукты не тестируются на животных?",
    "Do you use harmful chemicals like parabens?": "Используете ли вы вредные вещества, например парабены?",
    "What is your return policy?": "Какие условия возврата?",
    "Yes, our products are formulated to be gentle and suitable for most skin types, including sensitive skin. However, we recommend doing a patch test before using any product.":
      "Да, наши продукты мягкие и подходят большинству типов кожи, включая чувствительную. Но перед использованием мы рекомендуем сделать патч-тест.",
    "Most customers notice visible improvements within 2–4 weeks of consistent use. Results may vary depending on individual skin type, lifestyle, and specific skin concerns.":
      "Большинство клиентов замечают улучшения через 2-4 недели регулярного использования. Результат зависит от типа кожи, образа жизни и индивидуальных потребностей.",
    "Yes, all of our products are 100% cruelty-free. We do not test our products on animals at any stage of development.":
      "Да, все наши продукты не тестируются на животных. Мы не проводим испытаний на животных ни на одном этапе разработки.",
    "No, our products are formulated without harmful chemicals such as parabens, sulfates, and harsh toxins. We focus on safe and skin-friendly ingredients.":
      "Нет, наши продукты не содержат парабенов, сульфатов и агрессивных токсинов. Мы используем безопасные и дружелюбные к коже ингредиенты.",
    "We offer a 7-day return policy for unused products. If you receive a damaged or incorrect item, please contact our support team and we will assist you with a replacement or refund.":
      "Мы предлагаем возврат неиспользованных товаров в течение 7 дней. Если товар повреждён или неверный, обратитесь в поддержку, и мы поможем с заменой или возвратом.",
    "Skincare Evolves. Adjust": "Уход меняется. Настраивайте",
    "Your Formula Any time": "свою формулу в любое время",
    "Easily modify your formula as your skin, seasons, and lifestyle change":
      "Легко меняйте формулу вместе с изменениями кожи, сезона и образа жизни",
    "for consistently better results.": "для стабильно лучшего результата.",
    "Start Shopping": "Начать покупки",
    "Read Articles": "Читать статьи",
    "Related Articles": "Похожие статьи",
    "Related Products": "Похожие товары",
    "Our Shop": "Наш магазин",
    "All Collection on": "Вся коллекция на",
    "Start From": "От",
    View: "Смотреть",
    Description: "Описание",
    "How To Use": "Как использовать",
    "Delivery &amp; Returns": "Доставка и возврат",
    Quantity: "Количество",
    "Select Size": "Выберите размер",
    "Add to Cart": "Добавить в корзину",
    "Adding to cart...": "Добавляем в корзину...",
    "Buy now": "Купить сейчас",
    "Subscribe now": "Оформить подписку",
    "This product is out of stock.": "Этого товара нет в наличии.",
    "Please select an option in each set.": "Выберите вариант в каждом наборе.",
    "Something went wrong when trying to purchase this item.": "Что-то пошло не так при попытке покупки.",
    "You can’t purchase another product with a subscription.":
      "Нельзя купить другой товар вместе с подпиской.",
    "Privacy Policy": "Политика конфиденциальности",
    "Style Guide": "Гайд по стилю",
    "Change Log": "Журнал изменений",
    License: "Лицензия",
    "PAGE NOT FOUND": "СТРАНИЦА НЕ НАЙДЕНА",
    "This page doesn&#x27;t exist or may have been moved.":
      "Этой страницы нет или она была перемещена.",
    "Back to Home": "Вернуться на главную",
    Email: "Email",
    "Email:": "Email:",
    "Full Name *": "Полное имя *",
    "City *": "Город *",
    "Country *": "Страна *",
    "State/Province": "Область / регион",
    "Street Address *": "Улица и номер дома *",
    "Street Address": "Улица и номер дома",
    "Zip/Postal Code *": "Индекс *",
    "Zip/Postal Code": "Индекс",
    "Email *": "Электронная почта *",
    "Browse our shop for quality essentials":
      "Выбирайте в нашем магазине качественные средства на каждый день",
    "Browse our shop for quality essentials. Discover premium skincare products including serums, cleansers, toners, and SPF from Nuvéra.":
      "Выбирайте в нашем магазине качественные средства на каждый день. Откройте премиальные продукты для ухода за кожей, включая сыворотки, очищающие средства, тонеры и SPF от Nuvéra.",
    Next: "Далее",
    "Browse Cleanser products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Просматривайте очищающие средства Nuvera. Откройте качественные товары с подробными описаниями и честными ценами. Покупайте сейчас!",
    "Browse Moisturiser products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Просматривайте увлажняющие средства Nuvera. Откройте качественные товары с подробными описаниями и честными ценами. Покупайте сейчас!",
    "Browse Serum products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Просматривайте сыворотки Nuvera. Откройте качественные товары с подробными описаниями и честными ценами. Покупайте сейчас!",
    "Browse SPF products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Просматривайте SPF-средства Nuvera. Откройте качественные товары с подробными описаниями и честными ценами. Покупайте сейчас!",
    "Browse Toner products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Просматривайте тонеры Nuvera. Откройте качественные товары с подробными описаниями и честными ценами. Покупайте сейчас!",
    "Card Number *": "Номер карты *",
    "Expiration Date *": "Срок действия *",
    "Security Code *": "Код безопасности *",
    "Discount Code": "Промокод",
    "Billing Address": "Платёжный адрес",
    "Shipping Address": "Адрес доставки",
    "Billing address same as shipping": "Платёжный адрес совпадает с адресом доставки",
    "Shipping Method": "Способ доставки",
    "Customer Info": "Данные покупателя",
    "Payment Info": "Платёжная информация",
    "Order Summary": "Сводка заказа",
    "Items in Order": "Товары в заказе",
    "Place Order": "Оформить заказ",
    Total: "Итого",
    Apply: "Применить",
    "No shipping methods are available for the address given.":
      "Для указанного адреса нет доступных способов доставки.",
    "There was an error processing your customer info. Please try again, or contact us if you continue to have problems.":
      "Произошла ошибка при обработке данных покупателя. Попробуйте снова или свяжитесь с нами, если проблема повторится.",
    "Country *2": "Страна *",
    "* Required": "* Обязательно",
    "Oops! Something went wrong while submitting the form.":
      "Что-то пошло не так при отправке формы.",
    "Keep me signed in for 14 days on this device.":
      "Оставаться в системе 14 дней на этом устройстве.",
    "Don&#x27;t have an account?": "Нет аккаунта?",
    "Follow Us:": "Подписывайтесь:",
    Lifestyle: "Образ жизни",
    Typography: "Типографика",
    "Colorado, USA": "Колорадо, США",
    "© Copyright 2026, All Rights Reserved. Powered By":
      "© Copyright 2026, Все права защищены. Работает на",

    "Daily SPF": "Ежедневный SPF",
    "Dew Glow Moisturizer": "Увлажняющий крем Dew Glow",
    "Rescue Balm": "Восстанавливающий бальзам",
    "Velvet Glow Serum": "Сыворотка Velvet Glow",
    "Balancing Toner": "Балансирующий тонер",
    "Hydra Cream": "Крем Hydra",
    "Pure Cleanser": "Очищающее средство Pure",
    "Glow Serum": "Сыворотка Glow",
    "Soft Skin Body Lotion": "Лосьон для тела Soft Skin",
    "Citrus Foam": "Цитрусовая пенка",
    Cleanser: "Очищение",
    Moisturiser: "Увлажнение",
    Serum: "Сыворотка",
    SPF: "SPF",
    "A soothing repair cream that calms, restores, and deeply nourishes stressed skin.":
      "Успокаивающий восстанавливающий крем, который смягчает, восстанавливает и глубоко питает раздражённую кожу.",
    "Brightens and evens skin tone with 15% Vitamin C.":
      "Осветляет и выравнивает тон кожи благодаря 15% витамина C.",
    "Deep hydration for soft, plump skin all day long.":
      "Глубокое увлажнение для мягкой и упругой кожи на весь день.",
    "Gentle foam cleanser that purifies without stripping.":
      "Мягкая пенка, которая очищает кожу без пересушивания.",
    "Hydrates and balances skin after every cleanse.":
      "Увлажняет и балансирует кожу после каждого очищения.",
    "Lightweight body lotion that deeply hydrates and leaves skin silky smooth.":
      "Лёгкий лосьон для тела, который глубоко увлажняет и делает кожу шелковистой.",
    "Lightweight gel-cream moisturizer for a fresh, dewy, and healthy glow.":
      "Лёгкий гель-крем для свежего, сияющего и здорового вида кожи.",
    "Lightweight mineral SPF 50 for everyday protection.":
      "Лёгкий минеральный SPF 50 для ежедневной защиты.",
    "Lightweight serum that softens and illuminates skin all day.":
      "Лёгкая сыворотка, которая смягчает кожу и придаёт ей сияние на весь день.",
    "Daily SPF is a non-greasy mineral sunscreen with zinc oxide and niacinamide that offers broad-spectrum SPF 50 protection. Lightweight with a matte finish, it shields skin from UV damage without clogging pores.":
      "Daily SPF — это нежирный минеральный солнцезащитный крем с оксидом цинка и ниацинамидом, который обеспечивает широкоспектральную защиту SPF 50. Лёгкая формула с матовым финишем защищает кожу от УФ-излучения, не забивая поры.",
    "Apply Daily SPF generously as the last step of your morning skincare routine. Reapply every 2 hours when exposed to sunlight.":
      "Наносите Daily SPF щедро как последний шаг утреннего ухода. При нахождении на солнце обновляйте каждые 2 часа.",
    "We offer free delivery on orders over $2,000. Standard delivery takes 3-5 business days. Returns accepted within 14 days of purchase in original condition.":
      "Мы предлагаем бесплатную доставку для заказов свыше $2,000. Стандартная доставка занимает 3-5 рабочих дней. Возврат принимается в течение 14 дней при сохранении исходного состояния.",
    "Daily SPF - Nuvera Webflow Ecommerce Website Template":
      "Ежедневный SPF - Nuvera, шаблон интернет-магазина Webflow",

    "5 Eco-Friendly Skincare Swaps for a Sustainable Routine":
      "5 экологичных замен в уходе за кожей для устойчивой рутины",
    "Why Plant-Based Extracts Are Transforming Skincare":
      "Почему растительные экстракты меняют уход за кожей",
    "Understanding Your Skin Type: A Beginner&#x27;s Guide":
      "Как определить свой тип кожи: гид для начинающих",
    "The Science Behind Clean Beauty: What Your Skin Actually Needs":
      "Наука о чистой косметике: что действительно нужно вашей коже",
    "Aland Islands": "Аландские острова",
    "Antigua and Barbuda": "Антигуа и Барбуда",
    "Bonaire, Saint Eustatius and Saba": "Бонэйр, Синт-Эстатиус и Саба",
    "Bosnia and Herzegovina": "Босния и Герцеговина",
    "Cabo Verde": "Кабо-Верде",
    "Cocos Islands": "Кокосовые острова",
    Curacao: "Кюрасао",
    "Democratic Republic of the Congo": "Демократическая Республика Конго",
    "Hong Kong": "Гонконг",
    "Ivory Coast": "Кот-д’Ивуар",
    Macao: "Макао",
    Myanmar: "Мьянма",
    "Palestinian Territory": "Палестинская территория",
    Pitcairn: "Питкэрн",
    "Republic of the Congo": "Республика Конго",
    Reunion: "Реюньон",
    "Saint Barthelemy": "Сен-Бартелеми",
    "Saint Helena": "Остров Святой Елены",
    "Saint Kitts and Nevis": "Сент-Китс и Невис",
    "Saint Lucia": "Сент-Люсия",
    "Saint Martin": "Сен-Мартен",
    "Saint Pierre and Miquelon": "Сен-Пьер и Микелон",
    "Saint Vincent and the Grenadines": "Сент-Винсент и Гренадины",
    "Sao Tome and Principe": "Сан-Томе и Принсипи",
    "South Georgia and the South Sandwich Islands":
      "Южная Георгия и Южные Сандвичевы острова",
    "Svalbard and Jan Mayen": "Шпицберген и Ян-Майен",
    "Timor Leste": "Восточный Тимор",
    "Trinidad and Tobago": "Тринидад и Тобаго",
    Turkey: "Турция",
    "Turks and Caicos Islands": "Острова Теркс и Кайкос",
    "United States Minor Outlying Islands": "Внешние малые острова США",
    Vatican: "Ватикан",
    "Wallis and Futuna": "Уоллис и Футуна",
    "Western Sahara": "Западная Сахара",
    Yemen: "Йемен",
    Zambia: "Замбия",
    Zimbabwe: "Зимбабве",
  },
  ua: {
    "Nuvera - Webflow Ecommerce Website Template": "Nuvera - шаблон інтернет-магазину Webflow",
    "Blog - Nuvera Webflow Ecommerce Website Template": "Блог - Nuvera, шаблон інтернет-магазину Webflow",
    "About - Nuvera Webflow Ecommerce Website Template": "Про нас - Nuvera, шаблон інтернет-магазину Webflow",
    "Shop - Nuvera Webflow Ecommerce Website Template": "Магазин - Nuvera, шаблон інтернет-магазину Webflow",
    "Category - Nuvera Webflow Ecommerce Website Template": "Категорія - Nuvera, шаблон інтернет-магазину Webflow",
    "Privacy Policy - Nuvera Webflow Ecommerce Website Template":
      "Політика конфіденційності - Nuvera, шаблон інтернет-магазину Webflow",
    "License - Nuvera Webflow Ecommerce Website Template":
      "Ліцензія - Nuvera, шаблон інтернет-магазину Webflow",
    "Style Guide - Nuvera Webflow Ecommerce Website Template":
      "Гайд зі стилю - Nuvera, шаблон інтернет-магазину Webflow",
    "Change Log - Nuvera Webflow Ecommerce Website Template":
      "Журнал змін - Nuvera, шаблон інтернет-магазину Webflow",
    "404 - Nuvera Webflow Ecommerce Website Template":
      "404 - Nuvera, шаблон інтернет-магазину Webflow",
    "Sign In - Nuvera Webflow Ecommerce Website Template":
      "Вхід - Nuvera, шаблон інтернет-магазину Webflow",
    "Sign Up - Nuvera Webflow Ecommerce Website Template":
      "Реєстрація - Nuvera, шаблон інтернет-магазину Webflow",
    "Forget Password - Nuvera Webflow Ecommerce Website Template":
      "Скидання пароля - Nuvera, шаблон інтернет-магазину Webflow",
    "Checkout - Nuvera Webflow Ecommerce Website Template":
      "Оформлення замовлення - Nuvera, шаблон інтернет-магазину Webflow",
    "Discover 50+ naturally pure skincare essentials. Cruelty-free, clinically proven formulas for visible results. Shop serums, cleansers &amp; more.":
      "Відкрийте понад 50 натуральних засобів догляду за шкірою. Без тестування на тваринах, клінічно перевірені формули з помітним результатом. Купуйте сироватки, очищувальні засоби та інше.",
    Home: "Головна",
    About: "Про нас",
    Shop: "Магазин",
    Blog: "Блог",
    Pages: "Сторінки",
    Category: "Категорія",
    Login: "Увійти",
    "Sign In": "Увійти",
    Signup: "Реєстрація",
    "Sign up": "Реєстрація",
    "Forget Password": "Забули пароль",
    "Your Cart": "Ваш кошик",
    Subtotal: "Разом",
    Remove: "Видалити",
    "Pay with browser.": "Оплатити через браузер.",
    "Continue to Checkout": "Перейти до оплати",
    "No items found.": "Товари не знайдено.",
    "Product is not available in this quantity.": "Товар недоступний у такій кількості.",
    "Something went wrong when adding this item to the cart.":
      "Щось пішло не так під час додавання товару в кошик.",
    "Checkout is disabled on this site.": "Оформлення замовлення вимкнено на цьому сайті.",
    "The order minimum was not met. Add more items to your cart to continue.":
      "Мінімальну суму замовлення не досягнуто. Додайте товари в кошик, щоб продовжити.",
    "Before you purchase, please use your email invite to verify your address so we can send order updates.":
      "Перед покупкою підтвердьте адресу через запрошення на email, щоб ми могли надсилати оновлення щодо замовлення.",
    "Open cart": "Відкрити кошик",
    "Close cart": "Закрити кошик",
    "Remove item from cart": "Видалити товар із кошика",
    "Update quantity": "Оновити кількість",
    "Naturally pure skincare essentials": "Натуральний догляд за шкірою",
    Naturally: "Натуральний",
    "pure skincare essentials": "догляд за шкірою",
    "Explore Now": "Переглянути зараз",
    "Start your day with gentle care and nourishing ingredients designed to awaken your skin naturally.":
      "Почніть день із м'якого догляду та поживних інгредієнтів, які природно пробуджують шкіру.",
    "Hydration Boost Formula": "Формула посиленого зволоження",
    "We craft science-backed beauty using carefully selected ingredients to":
      "Ми створюємо науково обґрунтований догляд із ретельно відібраних інгредієнтів, щоб",
    "deliver effective, high-performance results without compromise on quality, safety, or skin health":
      "давати ефективний результат без компромісів у якості, безпеці та здоров'ї шкіри",
    "Clean Ingredients": "Чисті інгредієнти",
    Clean: "Чисті",
    Ingredients: "Інгредієнти",
    "Visible Results": "Помітний результат",
    Visible: "Помітний",
    Results: "Результат",
    "Advanced Skincare": "Просунутий догляд",
    Advanced: "Просунутий",
    Skincare: "Догляд за шкірою",
    "Effective formulas crafted to improve texture, boost glow, and deliver noticeable skin results.":
      "Ефективні формули допомагають покращити текстуру, посилити сяйво та дати помітний результат.",
    "Modern solutions designed to target concerns, support health, and enhance overall care.":
      "Сучасні рішення для точкової роботи з потребами шкіри, підтримки здоров'я та покращення догляду.",
    "Refresh your skin and": "Освіжіть шкіру та",
    "renew your natural glow": "поверніть природне сяйво",
    Cleansers: "Очищення",
    Serums: "Сироватки",
    Moisturizers: "Зволоження",
    Sunscreen: "SPF-захист",
    Toner: "Тонер",
    "Hair Oil": "Олія для волосся",
    Lotion: "Лосьйон",
    Cream: "Крем",
    "Only 15 Products": "Залишилось лише 15 товарів",
    "Left This Month": "цього місяця",
    "Skincare Serum": "Сироватка для шкіри",
    "Lightweight formula delivering deep hydration while enhancing your skin’s natural, healthy glow":
      "Легка формула глибоко зволожує та підсилює природне здорове сяйво шкіри",
    "Trusted by our happy": "Нам довіряють задоволені",
    "and loyal customers": "та постійні клієнти",
    "Event Planner": "Організатор подій",
    "HR Director": "HR-директор",
    "Fashion Designer": "Модельєр",
    "My skin was extremely dry and dull before discovering this brand - now it feels healthy, soft, and radiant. It completely changed how I take care of my skin daily.":
      "До знайомства з брендом моя шкіра була дуже сухою та тьмяною. Тепер вона виглядає здоровою, м'якою та сяючою. Це повністю змінило мій щоденний догляд.",
    "I tried one product out of curiosity, and the quality impressed me. The textures, ingredients, and results feel premium, making every purchase truly worth it single time.":
      "Я спробувала один продукт із цікавості, і якість мене вразила. Текстури, інгредієнти та результат відчуваються преміальними, тому кожна покупка варта своїх грошей.",
    "This brand has become a trusted part of my routine. I consistently use their products every month, and they always deliver reliable results that make my skin feel fresh and balanced.":
      "Цей бренд став надійною частиною мого догляду. Я регулярно користуюся продуктами щомісяця, і вони стабільно дають результат: шкіра свіжа та збалансована.",
    "A simple, effective formula for a smooth and balanced experience. Perfect for your everyday skincare essentials.":
      "Проста й ефективна формула для м'якого та збалансованого догляду. Ідеально підходить для щоденної рутини.",
    "Clean, clinically proven, consciously crafted": "Чисто, клінічно доведено, усвідомлено створено",
    "Formulated with safe ingredients backed by science to support healthier skin, body, and well-being with clean, trusted formulations.":
      "Створено з безпечних інгредієнтів із науковим обґрунтуванням для здоров'я шкіри, тіла та загального самопочуття.",
    "Find Answers to All": "Знайдіть відповіді на всі",
    "Your Questions": "ваші запитання",
    "Are your products suitable for sensitive skin?": "Чи підходять продукти для чутливої шкіри?",
    "How long does it take to see visible results?": "Коли можна побачити помітний результат?",
    "Are your products cruelty-free?": "Ваші продукти не тестуються на тваринах?",
    "Do you use harmful chemicals like parabens?": "Чи використовуєте ви шкідливі речовини, наприклад парабени?",
    "What is your return policy?": "Які умови повернення?",
    "Yes, our products are formulated to be gentle and suitable for most skin types, including sensitive skin. However, we recommend doing a patch test before using any product.":
      "Так, наші продукти м'які та підходять більшості типів шкіри, зокрема чутливій. Але перед використанням ми радимо зробити патч-тест.",
    "Most customers notice visible improvements within 2–4 weeks of consistent use. Results may vary depending on individual skin type, lifestyle, and specific skin concerns.":
      "Більшість клієнтів помічають покращення через 2-4 тижні регулярного використання. Результат залежить від типу шкіри, способу життя та індивідуальних потреб.",
    "Yes, all of our products are 100% cruelty-free. We do not test our products on animals at any stage of development.":
      "Так, усі наші продукти не тестуються на тваринах. Ми не проводимо випробувань на тваринах на жодному етапі розробки.",
    "No, our products are formulated without harmful chemicals such as parabens, sulfates, and harsh toxins. We focus on safe and skin-friendly ingredients.":
      "Ні, наші продукти не містять парабенів, сульфатів і агресивних токсинів. Ми використовуємо безпечні й дружні до шкіри інгредієнти.",
    "We offer a 7-day return policy for unused products. If you receive a damaged or incorrect item, please contact our support team and we will assist you with a replacement or refund.":
      "Ми пропонуємо повернення невикористаних товарів протягом 7 днів. Якщо товар пошкоджений або неправильний, зверніться до підтримки, і ми допоможемо із заміною чи поверненням.",
    "Skincare Evolves. Adjust": "Догляд змінюється. Налаштовуйте",
    "Your Formula Any time": "свою формулу будь-коли",
    "Easily modify your formula as your skin, seasons, and lifestyle change":
      "Легко змінюйте формулу разом зі змінами шкіри, сезону та способу життя",
    "for consistently better results.": "для стабільно кращого результату.",
    "Start Shopping": "Почати покупки",
    "Read Articles": "Читати статті",
    "Related Articles": "Схожі статті",
    "Related Products": "Схожі товари",
    "Our Shop": "Наш магазин",
    "All Collection on": "Уся колекція на",
    "Start From": "Від",
    View: "Переглянути",
    Description: "Опис",
    "How To Use": "Як використовувати",
    "Delivery &amp; Returns": "Доставка та повернення",
    Quantity: "Кількість",
    "Select Size": "Оберіть розмір",
    "Add to Cart": "Додати в кошик",
    "Adding to cart...": "Додаємо в кошик...",
    "Buy now": "Купити зараз",
    "Subscribe now": "Оформити підписку",
    "This product is out of stock.": "Цього товару немає в наявності.",
    "Please select an option in each set.": "Оберіть варіант у кожному наборі.",
    "Something went wrong when trying to purchase this item.": "Щось пішло не так під час спроби покупки.",
    "You can’t purchase another product with a subscription.":
      "Не можна купити інший товар разом із підпискою.",
    "Privacy Policy": "Політика конфіденційності",
    "Style Guide": "Гайд зі стилю",
    "Change Log": "Журнал змін",
    License: "Ліцензія",
    "PAGE NOT FOUND": "СТОРІНКУ НЕ ЗНАЙДЕНО",
    "This page doesn&#x27;t exist or may have been moved.":
      "Цієї сторінки немає або її було переміщено.",
    "Back to Home": "Повернутися на головну",
    Email: "Email",
    "Email:": "Email:",
    "Full Name *": "Повне ім'я *",
    "City *": "Місто *",
    "Country *": "Країна *",
    "State/Province": "Область / регіон",
    "Street Address *": "Вулиця та номер будинку *",
    "Street Address": "Вулиця та номер будинку",
    "Zip/Postal Code *": "Поштовий індекс *",
    "Zip/Postal Code": "Поштовий індекс",
    "Email *": "Електронна пошта *",
    "Browse our shop for quality essentials":
      "Переглядайте наш магазин якісних щоденних засобів",
    "Browse our shop for quality essentials. Discover premium skincare products including serums, cleansers, toners, and SPF from Nuvéra.":
      "Переглядайте наш магазин якісних щоденних засобів. Відкрийте преміальні засоби догляду за шкірою, зокрема сироватки, очищувальні засоби, тонери та SPF від Nuvéra.",
    Next: "Далі",
    "Browse Cleanser products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Переглядайте засоби для очищення Nuvera. Відкрийте якісні товари з докладними описами та чесними цінами. Купуйте зараз!",
    "Browse Moisturiser products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Переглядайте зволожувальні засоби Nuvera. Відкрийте якісні товари з докладними описами та чесними цінами. Купуйте зараз!",
    "Browse Serum products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Переглядайте сироватки Nuvera. Відкрийте якісні товари з докладними описами та чесними цінами. Купуйте зараз!",
    "Browse SPF products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Переглядайте SPF-засоби Nuvera. Відкрийте якісні товари з докладними описами та чесними цінами. Купуйте зараз!",
    "Browse Toner products at Nuvera. Discover quality essentials with detailed descriptions and competitive pricing. Shop now!":
      "Переглядайте тонери Nuvera. Відкрийте якісні товари з докладними описами та чесними цінами. Купуйте зараз!",
    "Card Number *": "Номер картки *",
    "Expiration Date *": "Термін дії *",
    "Security Code *": "Код безпеки *",
    "Discount Code": "Промокод",
    "Billing Address": "Платіжна адреса",
    "Shipping Address": "Адреса доставки",
    "Billing address same as shipping": "Платіжна адреса збігається з адресою доставки",
    "Shipping Method": "Спосіб доставки",
    "Customer Info": "Дані покупця",
    "Payment Info": "Платіжна інформація",
    "Order Summary": "Підсумок замовлення",
    "Items in Order": "Товари в замовленні",
    "Place Order": "Оформити замовлення",
    Total: "Разом",
    Apply: "Застосувати",
    "No shipping methods are available for the address given.":
      "Для вказаної адреси немає доступних способів доставки.",
    "There was an error processing your customer info. Please try again, or contact us if you continue to have problems.":
      "Під час обробки даних покупця сталася помилка. Спробуйте ще раз або зв'яжіться з нами, якщо проблема повториться.",
    "* Required": "* Обов'язково",
    "Oops! Something went wrong while submitting the form.":
      "Щось пішло не так під час надсилання форми.",
    "Keep me signed in for 14 days on this device.":
      "Залишатися в системі 14 днів на цьому пристрої.",
    "Don&#x27;t have an account?": "Немає акаунта?",
    "Follow Us:": "Стежте за нами:",
    Lifestyle: "Стиль життя",
    Typography: "Типографіка",
    "Colorado, USA": "Колорадо, США",
    "© Copyright 2026, All Rights Reserved. Powered By":
      "© Copyright 2026, Усі права захищено. Працює на",

    "Daily SPF": "Щоденний SPF",
    "Dew Glow Moisturizer": "Зволожувальний крем Dew Glow",
    "Rescue Balm": "Відновлювальний бальзам",
    "Velvet Glow Serum": "Сироватка Velvet Glow",
    "Balancing Toner": "Балансувальний тонер",
    "Hydra Cream": "Крем Hydra",
    "Pure Cleanser": "Очищувальний засіб Pure",
    "Glow Serum": "Сироватка Glow",
    "Soft Skin Body Lotion": "Лосьйон для тіла Soft Skin",
    "Citrus Foam": "Цитрусова пінка",
    Cleanser: "Очищення",
    Moisturiser: "Зволоження",
    Serum: "Сироватка",
    SPF: "SPF",
    "A soothing repair cream that calms, restores, and deeply nourishes stressed skin.":
      "Заспокійливий відновлювальний крем, який пом'якшує, відновлює та глибоко живить подразнену шкіру.",
    "Brightens and evens skin tone with 15% Vitamin C.":
      "Освітлює та вирівнює тон шкіри завдяки 15% вітаміну C.",
    "Deep hydration for soft, plump skin all day long.":
      "Глибоке зволоження для м'якої та пружної шкіри на весь день.",
    "Gentle foam cleanser that purifies without stripping.":
      "М'яка пінка, яка очищує шкіру без пересушування.",
    "Hydrates and balances skin after every cleanse.":
      "Зволожує та балансує шкіру після кожного очищення.",
    "Lightweight body lotion that deeply hydrates and leaves skin silky smooth.":
      "Легкий лосьйон для тіла, який глибоко зволожує та робить шкіру шовковистою.",
    "Lightweight gel-cream moisturizer for a fresh, dewy, and healthy glow.":
      "Легкий гель-крем для свіжого, сяючого та здорового вигляду шкіри.",
    "Lightweight mineral SPF 50 for everyday protection.":
      "Легкий мінеральний SPF 50 для щоденного захисту.",
    "Lightweight serum that softens and illuminates skin all day.":
      "Легка сироватка, яка пом'якшує шкіру та надає їй сяйва на весь день.",
    "Daily SPF is a non-greasy mineral sunscreen with zinc oxide and niacinamide that offers broad-spectrum SPF 50 protection. Lightweight with a matte finish, it shields skin from UV damage without clogging pores.":
      "Daily SPF — це нежирний мінеральний сонцезахисний крем з оксидом цинку та ніацинамідом, який забезпечує широкоспектральний захист SPF 50. Легка формула з матовим фінішем захищає шкіру від УФ-випромінювання, не забиваючи пори.",
    "Apply Daily SPF generously as the last step of your morning skincare routine. Reapply every 2 hours when exposed to sunlight.":
      "Наносьте Daily SPF щедро як останній крок ранкового догляду. Під час перебування на сонці оновлюйте кожні 2 години.",
    "We offer free delivery on orders over $2,000. Standard delivery takes 3-5 business days. Returns accepted within 14 days of purchase in original condition.":
      "Ми пропонуємо безкоштовну доставку для замовлень понад $2,000. Стандартна доставка займає 3-5 робочих днів. Повернення приймається протягом 14 днів за умови збереження початкового стану.",
    "Daily SPF - Nuvera Webflow Ecommerce Website Template":
      "Щоденний SPF - Nuvera, шаблон інтернет-магазину Webflow",

    "5 Eco-Friendly Skincare Swaps for a Sustainable Routine":
      "5 екологічних замін у догляді за шкірою для сталої рутини",
    "Why Plant-Based Extracts Are Transforming Skincare":
      "Чому рослинні екстракти змінюють догляд за шкірою",
    "Understanding Your Skin Type: A Beginner&#x27;s Guide":
      "Як визначити свій тип шкіри: гід для початківців",
    "The Science Behind Clean Beauty: What Your Skin Actually Needs":
      "Наука про чисту косметику: що насправді потрібно вашій шкірі",
    "Aland Islands": "Аландські острови",
    "Antigua and Barbuda": "Антигуа і Барбуда",
    "Bonaire, Saint Eustatius and Saba": "Бонайре, Сінт-Естатіус і Саба",
    "Bosnia and Herzegovina": "Боснія і Герцеговина",
    "Cabo Verde": "Кабо-Верде",
    "Cocos Islands": "Кокосові острови",
    Curacao: "Кюрасао",
    "Democratic Republic of the Congo": "Демократична Республіка Конго",
    "Hong Kong": "Гонконг",
    "Ivory Coast": "Кот-д’Івуар",
    Macao: "Макао",
    Myanmar: "М’янма",
    "Palestinian Territory": "Палестинська територія",
    Pitcairn: "Піткерн",
    "Republic of the Congo": "Республіка Конго",
    Reunion: "Реюньйон",
    "Saint Barthelemy": "Сен-Бартелемі",
    "Saint Helena": "Острів Святої Єлени",
    "Saint Kitts and Nevis": "Сент-Кіттс і Невіс",
    "Saint Lucia": "Сент-Люсія",
    "Saint Martin": "Сен-Мартен",
    "Saint Pierre and Miquelon": "Сен-П’єр і Мікелон",
    "Saint Vincent and the Grenadines": "Сент-Вінсент і Гренадини",
    "Sao Tome and Principe": "Сан-Томе і Принсіпі",
    "South Georgia and the South Sandwich Islands":
      "Південна Джорджія та Південні Сандвічеві острови",
    "Svalbard and Jan Mayen": "Шпіцберген і Ян-Маєн",
    "Timor Leste": "Східний Тимор",
    "Trinidad and Tobago": "Тринідад і Тобаго",
    Turkey: "Туреччина",
    "Turks and Caicos Islands": "Острови Теркс і Кайкос",
    "United States Minor Outlying Islands": "Зовнішні малі острови США",
    Vatican: "Ватикан",
    "Wallis and Futuna": "Уолліс і Футуна",
    "Western Sahara": "Західна Сахара",
    Yemen: "Ємен",
    Zambia: "Замбія",
    Zimbabwe: "Зімбабве",
  },
};

const supplementalPhraseMaps = {
  ru: {
    "Not Found": "Не найдено",
    "The page you&#x27;re looking for doesn&#x27;t exist or has been moved. Return to Nuvéra&#x27;s homepage to continue browsing our products and content.":
      "Страница, которую вы ищете, не существует или была перемещена. Вернитесь на главную страницу Nuvéra, чтобы продолжить просмотр наших товаров и материалов.",
    "Discover Nuvéra&#x27;s commitment to clean, effective skincare. 50+ products crafted with natural ingredients, eco-friendly packaging, and 98% positive reviews.":
      "Откройте для себя подход Nuvéra к чистому и эффективному уходу за кожей. Более 50 продуктов с натуральными ингредиентами, экологичной упаковкой и 98% положительных отзывов.",
    "Discover the latest skincare tips, clean beauty insights, and expert advice on plant-based ingredients for healthy, balanced skin.":
      "Откройте для себя свежие советы по уходу за кожей, идеи чистой косметики и экспертные рекомендации по растительным ингредиентам для здоровой и сбалансированной кожи.",
    "Browse Nuvéra&#x27;s complete beauty collection. Shop skincare categories including serums, cleansers, moisturizers, SPF, lotions, toner, and more.":
      "Изучите полную beauty-коллекцию Nuvéra. Покупайте средства по категориям: сыворотки, очищение, увлажнение, SPF, лосьоны, тонеры и многое другое.",
    "Complete your purchase securely. Enter shipping and payment details to finalize your order. Multiple shipping options available with secure payment processing.":
      "Безопасно завершите покупку. Введите данные доставки и оплаты, чтобы оформить заказ. Доступно несколько способов доставки и защищённая обработка платежей.",
    "Reset your Nuvéra account password. Enter your email to receive a secure password reset link and regain access to your account.":
      "Сбросьте пароль аккаунта Nuvéra. Введите email, чтобы получить безопасную ссылку для сброса и восстановить доступ к аккаунту.",
    "Learn how Nuvéra collects, uses, and protects your personal information. Read our privacy policy for details on data security, cookies, and your rights.":
      "Узнайте, как Nuvéra собирает, использует и защищает вашу личную информацию. Прочитайте нашу политику конфиденциальности о безопасности данных, cookie и ваших правах.",
    "Sign in to your Nuvéra account to access orders, styling notes, and personalized beauty recommendations. Secure encrypted login.":
      "Войдите в аккаунт Nuvéra, чтобы получить доступ к заказам, заметкам и персональным beauty-рекомендациям. Безопасный зашифрованный вход.",
    "Join Nuvéra Beauty to save favorites, track orders, and get early access to new collections. Sign up for exclusive offers and secure shopping.":
      "Присоединяйтесь к Nuvéra Beauty, чтобы сохранять избранное, отслеживать заказы и получать ранний доступ к новым коллекциям. Регистрируйтесь ради эксклюзивных предложений и безопасных покупок.",
    "View the latest updates, improvements, and fixes for Nuvéra Beauty. Track site enhancements, bug fixes, and new features from launch to present.":
      "Посмотрите последние обновления, улучшения и исправления Nuvéra Beauty. Отслеживайте улучшения сайта, багфиксы и новые функции с запуска по настоящее время.",
    "View license terms, usage rights, and restrictions for the Nuvéra beauty ecommerce template. Includes project files, components, support, and updates.":
      "Просмотрите условия лицензии, права использования и ограничения для beauty eCommerce-шаблона Nuvéra. Включает файлы проекта, компоненты, поддержку и обновления.",
    "Explore Nuvéra&#x27;s brand style guide including color palette, typography scale, and button variants. Complete design system documentation.":
      "Изучите брендовый гайд Nuvéra: палитру цветов, шкалу типографики и варианты кнопок. Полная документация по дизайн-системе.",
    "Cleanser - Nuvera Webflow Ecommerce Website Template":
      "Очищение - Nuvera, шаблон интернет-магазина Webflow",
    "Moisturiser - Nuvera Webflow Ecommerce Website Template":
      "Увлажнение - Nuvera, шаблон интернет-магазина Webflow",
    "Serum - Nuvera Webflow Ecommerce Website Template":
      "Сыворотка - Nuvera, шаблон интернет-магазина Webflow",
    "SPF - Nuvera Webflow Ecommerce Website Template":
      "SPF - Nuvera, шаблон интернет-магазина Webflow",
    "Toner - Nuvera Webflow Ecommerce Website Template":
      "Тонер - Nuvera, шаблон интернет-магазина Webflow",
    "Balancing Toner - Nuvera Webflow Ecommerce Website Template":
      "Балансирующий тонер - Nuvera, шаблон интернет-магазина Webflow",
    "Dew Glow Moisturizer - Nuvera Webflow Ecommerce Website Template":
      "Увлажняющий крем Dew Glow - Nuvera, шаблон интернет-магазина Webflow",
    "Glow Serum - Nuvera Webflow Ecommerce Website Template":
      "Сыворотка Glow - Nuvera, шаблон интернет-магазина Webflow",
    "Hydra Cream - Nuvera Webflow Ecommerce Website Template":
      "Крем Hydra - Nuvera, шаблон интернет-магазина Webflow",
    "Pure Cleanser - Nuvera Webflow Ecommerce Website Template":
      "Очищающее средство Pure - Nuvera, шаблон интернет-магазина Webflow",
    "Rescue Balm - Nuvera Webflow Ecommerce Website Template":
      "Восстанавливающий бальзам - Nuvera, шаблон интернет-магазина Webflow",
    "Soft Skin Body Lotion - Nuvera Webflow Ecommerce Website Template":
      "Лосьон для тела Soft Skin - Nuvera, шаблон интернет-магазина Webflow",
    "Velvet Glow Serum - Nuvera Webflow Ecommerce Website Template":
      "Сыворотка Velvet Glow - Nuvera, шаблон интернет-магазина Webflow",
    "Daily SPF is a lightweight mineral SPF 50 with zinc oxide and niacinamide for broad-spectrum UV protection and a matte finish.":
      "Daily SPF — это лёгкий минеральный SPF 50 с оксидом цинка и ниацинамидом для широкого УФ-защиты и матового финиша.",
    "Balancing Toner is an alcohol-free formula with centella asiatica and rose water that hydrates and preps skin after every cleanse.":
      "Balancing Toner — это безалкогольная формула с центеллой азиатской и розовой водой, которая увлажняет и подготавливает кожу после каждого очищения.",
    "Dew Glow Moisturizer is a lightweight gel-cream with niacinamide and green tea for a fresh, dewy, and healthy glow all day.":
      "Dew Glow Moisturizer — это лёгкий гель-крем с ниацинамидом и зелёным чаем для свежего, сияющего и здорового вида кожи на весь день.",
    "Glow Serum brightens and evens skin tone with 15% Vitamin C, hyaluronic acid, and niacinamide for a visibly radiant glow in 2 weeks.":
      "Glow Serum осветляет и выравнивает тон кожи благодаря 15% витамина C, гиалуроновой кислоте и ниацинамиду, обеспечивая заметное сияние уже через 2 недели.",
    "Hydra Cream delivers 24-hour deep hydration with ceramides, squalane, and shea butter for a soft, plump, and nourished skin barrier":
      "Hydra Cream обеспечивает глубокое увлажнение на 24 часа благодаря церамидам, сквалану и маслу ши, делая кожный барьер мягким, упругим и напитанным.",
    "Pure Cleanser is a gentle sulfate-free foam cleanser that removes impurities and makeup without stripping your skin&#x27;s natural moisture.":
      "Pure Cleanser — это мягкая бессульфатная пенка, которая удаляет загрязнения и макияж, не лишая кожу естественной влаги.",
    "Rescue Balm repairs and soothes sensitive skin with ceramides and centella asiatica for deep moisture and a restored skin barrier.":
      "Rescue Balm восстанавливает и успокаивает чувствительную кожу благодаря церамидам и центелле азиатской, обеспечивая глубокое увлажнение и восстановленный кожный барьер.",
    "Soft Skin Body Lotion deeply hydrates with shea butter, aloe vera, and vitamin E for silky smooth, nourished, and glowing skin all day":
      "Soft Skin Body Lotion глубоко увлажняет благодаря маслу ши, алоэ вера и витамину E, делая кожу шелковистой, напитанной и сияющей на весь день.",
    "Velvet Glow Serum deeply nourishes and hydrates skin for up to 24 hours, restoring your natural glow with lightweight natural extracts.":
      "Velvet Glow Serum глубоко питает и увлажняет кожу до 24 часов, возвращая естественное сияние с помощью лёгких натуральных экстрактов.",
    "Designed for Skin, Built on Trust": "Создано для кожи, построено на доверии",
    "Trusted By Worldwide": "Нам доверяют по всему миру",
    Customers: "Клиенты",
    "We craft science-backed beauty using carefully selected, clinically tested ingredients to deliver powerful, high-performance results that truly make a difference,":
      "Мы создаём уход, основанный на науке, используя тщательно отобранные и клинически протестированные ингредиенты, чтобы давать мощный и заметный результат, который действительно меняет состояние кожи.",
    "without ever compromising on quality, product safety standards, ethical sourcing, sustainability practices, or long-term skin health and confidence":
      "не поступаясь качеством, стандартами безопасности продукции, этичным происхождением ингредиентов, устойчивыми практиками и долгосрочным здоровьем и уверенностью кожи.",
    "Beauty Products Crafted": "Создано beauty-продуктов",
    "Nourish, protect, enhance skin.": "Питайте, защищайте и улучшайте кожу.",
    "Happy Customers": "Довольные клиенты",
    "Hear from happy customers.": "Узнайте мнение довольных клиентов.",
    "Positive Reviews": "Положительные отзывы",
    "Customer Satisfaction": "Удовлетворённость клиентов",
    "Explore Our Simple And Effective 3 - Step Process":
      "Изучите наш простой и эффективный процесс из 3 шагов",
    "Research &amp; Formulation": "Исследование и формула",
    "Research and dermatology meet natural extracts to safely address skin.":
      "Исследования и дерматология соединяются с натуральными экстрактами, чтобы бережно решать потребности кожи.",
    "Testing &amp; Refinement": "Тестирование и доработка",
    "Each product is rigorously tested for safety, performance, and quality results.":
      "Каждый продукт проходит строгую проверку на безопасность, эффективность и качество результата.",
    "Clean &amp; Ethical Production": "Чистое и этичное производство",
    "Our products are manufactured in certified facilities under strict quality.":
      "Наши продукты производятся на сертифицированных площадках при строгом контроле качества.",
    "Packaging With Purpose": "Упаковка со смыслом",
    "Eco-conscious materials and design create premium, sustainable products.":
      "Экологичные материалы и продуманный дизайн создают премиальные и устойчивые продукты.",
    "Why Your Skin Deserves": "Почему ваша кожа заслуживает",
    "Only The Best Care": "только лучшего ухода",
    Proven: "Доказанная",
    Effectiveness: "эффективность",
    "Every product is carefully crafted to meet the highest quality standards.":
      "Каждый продукт тщательно создаётся в соответствии с самыми высокими стандартами качества.",
    "Eco-Friendly": "Экологичная",
    Packaging: "упаковка",
    "Eco-friendly materials designed to care for the planet as much as your skin.":
      "Экологичные материалы, созданные заботиться о планете так же, как и о вашей коже.",
    "100% Natural": "100% натурально",
    "100% You": "100% вы",
    "✓ No Harsh Chemicals": "✓ Без агрессивных химикатов",
    "✓ Plant-Based Goodness": "✓ Польза растительных ингредиентов",
    "✓ Ethically Sourced": "✓ Этичное происхождение",
    "Our Latest News And Articles": "Наши последние новости и статьи",
    "FORGOT PASSWORD?": "ЗАБЫЛИ ПАРОЛЬ?",
    "Early access to new collections and exclusive offers.":
      "Ранний доступ к новым коллекциям и эксклюзивным предложениям.",
    "Check your inbox — we&#x27;ve sent a password reset link.":
      "Проверьте почту — мы отправили ссылку для сброса пароля.",
    "Remember your password?": "Вспомнили пароль?",
    "Last updated: March 29, 2026": "Последнее обновление: 29 марта 2026",
    "1. Introduction": "1. Введение",
    "2. Information We Collect": "2. Какие данные мы собираем",
    "3. How We Use Your Information": "3. Как мы используем вашу информацию",
    "4. Sharing Your Information": "4. Передача вашей информации",
    "5. Cookies": "5. Cookie",
    "6. Data Security": "6. Безопасность данных",
    "7. Your Rights": "7. Ваши права",
    "8. Third-Party Links": "8. Ссылки на сторонние сайты",
    "9. Changes to This Policy": "9. Изменения этой политики",
    "10. Contact Us": "10. Свяжитесь с нами",
    "Welcome to Beauty (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.":
      "Добро пожаловать в Beauty (\"мы\", \"наш\", \"нас\"). Мы обязуемся защищать вашу личную информацию и право на конфиденциальность. Эта политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем ваши данные при посещении сайта или покупке у нас.",
    "We may collect personal information that you provide directly to us, including your name, email address, shipping address, phone number, and payment information when you place an order. We also automatically collect certain information when you visit our website, such as your IP address, browser type, referring URLs, and pages viewed.":
      "Мы можем собирать личную информацию, которую вы предоставляете нам напрямую, включая имя, email, адрес доставки, номер телефона и платёжные данные при оформлении заказа. Мы также автоматически собираем некоторые данные при посещении сайта, например IP-адрес, тип браузера, URL-источники перехода и просмотренные страницы.",
    "We use the information we collect to process your orders and payments, deliver products to you, send transactional emails such as order confirmations, respond to your inquiries and customer service requests, send marketing communications (only if you have opted in), and improve our website and product offerings.":
      "Мы используем собранную информацию для обработки заказов и платежей, доставки товаров, отправки транзакционных писем, таких как подтверждения заказа, ответов на ваши обращения и запросы в поддержку, рассылки маркетинговых сообщений (только если вы согласились) и улучшения сайта и продуктовых предложений.",
    "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, processing payments, and delivering orders. These parties are obligated to keep your information confidential and secure.":
      "Мы не продаём, не обмениваем и не сдаём вашу личную информацию третьим лицам. Мы можем делиться данными с надёжными сервис-провайдерами, которые помогают нам поддерживать сайт, обрабатывать платежи и доставлять заказы. Эти стороны обязаны хранить вашу информацию в тайне и безопасности.",
    "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain features on our website.":
      "Мы используем cookie и аналогичные технологии отслеживания, чтобы улучшить ваш опыт просмотра, анализировать трафик сайта и персонализировать контент. Вы можете управлять настройками cookie через параметры браузера. Отключение cookie может повлиять на работу некоторых функций сайта.",
    "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. All payment transactions are encrypted using SSL technology. However, no method of transmission over the Internet is 100% secure.":
      "Мы применяем стандартные для отрасли меры безопасности, чтобы защитить вашу личную информацию от несанкционированного доступа, раскрытия, изменения или уничтожения. Все платёжные транзакции шифруются с помощью SSL. Однако ни один способ передачи данных через интернет не является на 100% безопасным.",
    "You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving marketing emails by clicking the unsubscribe link in any email we send. To exercise your rights, please contact us at the details below.":
      "Вы имеете право в любое время получить доступ к своей личной информации, обновить её или удалить. Вы также можете отказаться от маркетинговых писем, перейдя по ссылке отписки в любом нашем письме. Чтобы воспользоваться своими правами, свяжитесь с нами по контактам ниже.",
    "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.":
      "Наш сайт может содержать ссылки на сторонние сайты. Мы не несём ответственности за их практики конфиденциальности или содержимое. Рекомендуем ознакомиться с политикой конфиденциальности каждого стороннего сайта, который вы посещаете.",
    "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically to stay informed about how we protect your information.":
      "Мы можем время от времени обновлять эту политику конфиденциальности. Любые изменения будут опубликованы на этой странице с обновлённой датой вступления в силу. Мы рекомендуем периодически просматривать эту страницу, чтобы быть в курсе того, как мы защищаем вашу информацию.",
    "If you have any questions or concerns about this Privacy Policy, please contact us at: Email: support@beauty.com | Address: Beauty, Dhaka, Bangladesh.":
      "Если у вас есть вопросы или опасения по поводу этой политики конфиденциальности, свяжитесь с нами: Email: support@beauty.com | Адрес: Beauty, Дакка, Бангладеш.",
    "Rescue Balm is a rich, fast-absorbing cream enriched with ceramides, panthenol, and centella asiatica that repairs the skin barrier, reduces redness, and deeply restores moisture. Dermatologist-tested and gentle enough for daily use on sensitive skin.":
      "Rescue Balm — это насыщенный быстро впитывающийся крем с церамидами, пантенолом и центеллой азиатской, который восстанавливает кожный барьер, уменьшает покраснение и глубоко возвращает влагу. Протестирован дерматологами и достаточно мягкий для ежедневного использования на чувствительной коже.",
    "Apply a generous amount of Rescue Balm onto clean skin morning and evening. Gently pat into face and neck until fully absorbed. Follow with SPF in the morning.":
      "Наносите щедрое количество Rescue Balm на чистую кожу утром и вечером. Мягко распределите по лицу и шее до полного впитывания. Утром завершайте уход SPF.",
  },
  ua: {
    "Not Found": "Не знайдено",
    "The page you&#x27;re looking for doesn&#x27;t exist or has been moved. Return to Nuvéra&#x27;s homepage to continue browsing our products and content.":
      "Сторінка, яку ви шукаєте, не існує або була переміщена. Поверніться на головну сторінку Nuvéra, щоб продовжити перегляд наших товарів і матеріалів.",
    "Discover Nuvéra&#x27;s commitment to clean, effective skincare. 50+ products crafted with natural ingredients, eco-friendly packaging, and 98% positive reviews.":
      "Відкрийте для себе підхід Nuvéra до чистого й ефективного догляду за шкірою. Понад 50 продуктів із натуральними інгредієнтами, екологічною упаковкою та 98% позитивних відгуків.",
    "Discover the latest skincare tips, clean beauty insights, and expert advice on plant-based ingredients for healthy, balanced skin.":
      "Дізнавайтеся про свіжі поради з догляду за шкірою, ідеї clean beauty та експертні рекомендації щодо рослинних інгредієнтів для здорової й збалансованої шкіри.",
    "Browse Nuvéra&#x27;s complete beauty collection. Shop skincare categories including serums, cleansers, moisturizers, SPF, lotions, toner, and more.":
      "Перегляньте повну beauty-колекцію Nuvéra. Купуйте засоби за категоріями: сироватки, очищення, зволоження, SPF, лосьйони, тонери та багато іншого.",
    "Complete your purchase securely. Enter shipping and payment details to finalize your order. Multiple shipping options available with secure payment processing.":
      "Безпечно завершіть покупку. Введіть дані доставки й оплати, щоб оформити замовлення. Доступно кілька способів доставки та захищена обробка платежів.",
    "Reset your Nuvéra account password. Enter your email to receive a secure password reset link and regain access to your account.":
      "Скиньте пароль акаунта Nuvéra. Введіть email, щоб отримати безпечне посилання для скидання та відновити доступ до акаунта.",
    "Learn how Nuvéra collects, uses, and protects your personal information. Read our privacy policy for details on data security, cookies, and your rights.":
      "Дізнайтеся, як Nuvéra збирає, використовує та захищає вашу особисту інформацію. Прочитайте нашу політику конфіденційності про безпеку даних, cookie та ваші права.",
    "Sign in to your Nuvéra account to access orders, styling notes, and personalized beauty recommendations. Secure encrypted login.":
      "Увійдіть до акаунта Nuvéra, щоб отримати доступ до замовлень, нотаток і персоналізованих beauty-рекомендацій. Безпечний зашифрований вхід.",
    "Join Nuvéra Beauty to save favorites, track orders, and get early access to new collections. Sign up for exclusive offers and secure shopping.":
      "Приєднуйтеся до Nuvéra Beauty, щоб зберігати обране, відстежувати замовлення та отримувати ранній доступ до нових колекцій. Реєструйтеся заради ексклюзивних пропозицій і безпечних покупок.",
    "View the latest updates, improvements, and fixes for Nuvéra Beauty. Track site enhancements, bug fixes, and new features from launch to present.":
      "Перегляньте останні оновлення, покращення та виправлення Nuvéra Beauty. Відстежуйте покращення сайту, багфікси та нові функції від запуску до сьогодні.",
    "View license terms, usage rights, and restrictions for the Nuvéra beauty ecommerce template. Includes project files, components, support, and updates.":
      "Перегляньте умови ліцензії, права використання та обмеження для beauty eCommerce-шаблону Nuvéra. Містить файли проєкту, компоненти, підтримку та оновлення.",
    "Explore Nuvéra&#x27;s brand style guide including color palette, typography scale, and button variants. Complete design system documentation.":
      "Ознайомтеся з бренд-гайдом Nuvéra: палітрою кольорів, шкалою типографіки та варіантами кнопок. Повна документація дизайн-системи.",
    "Cleanser - Nuvera Webflow Ecommerce Website Template":
      "Очищення - Nuvera, шаблон інтернет-магазину Webflow",
    "Moisturiser - Nuvera Webflow Ecommerce Website Template":
      "Зволоження - Nuvera, шаблон інтернет-магазину Webflow",
    "Serum - Nuvera Webflow Ecommerce Website Template":
      "Сироватка - Nuvera, шаблон інтернет-магазину Webflow",
    "SPF - Nuvera Webflow Ecommerce Website Template":
      "SPF - Nuvera, шаблон інтернет-магазину Webflow",
    "Toner - Nuvera Webflow Ecommerce Website Template":
      "Тонер - Nuvera, шаблон інтернет-магазину Webflow",
    "Balancing Toner - Nuvera Webflow Ecommerce Website Template":
      "Балансувальний тонер - Nuvera, шаблон інтернет-магазину Webflow",
    "Dew Glow Moisturizer - Nuvera Webflow Ecommerce Website Template":
      "Зволожувальний крем Dew Glow - Nuvera, шаблон інтернет-магазину Webflow",
    "Glow Serum - Nuvera Webflow Ecommerce Website Template":
      "Сироватка Glow - Nuvera, шаблон інтернет-магазину Webflow",
    "Hydra Cream - Nuvera Webflow Ecommerce Website Template":
      "Крем Hydra - Nuvera, шаблон інтернет-магазину Webflow",
    "Pure Cleanser - Nuvera Webflow Ecommerce Website Template":
      "Очищувальний засіб Pure - Nuvera, шаблон інтернет-магазину Webflow",
    "Rescue Balm - Nuvera Webflow Ecommerce Website Template":
      "Відновлювальний бальзам - Nuvera, шаблон інтернет-магазину Webflow",
    "Soft Skin Body Lotion - Nuvera Webflow Ecommerce Website Template":
      "Лосьйон для тіла Soft Skin - Nuvera, шаблон інтернет-магазину Webflow",
    "Velvet Glow Serum - Nuvera Webflow Ecommerce Website Template":
      "Сироватка Velvet Glow - Nuvera, шаблон інтернет-магазину Webflow",
    "Daily SPF is a lightweight mineral SPF 50 with zinc oxide and niacinamide for broad-spectrum UV protection and a matte finish.":
      "Daily SPF — це легкий мінеральний SPF 50 з оксидом цинку та ніацинамідом для широкого захисту від УФ-випромінювання та матового фінішу.",
    "Balancing Toner is an alcohol-free formula with centella asiatica and rose water that hydrates and preps skin after every cleanse.":
      "Balancing Toner — це безалкогольна формула з центелою азійською та трояндовою водою, яка зволожує та готує шкіру після кожного очищення.",
    "Dew Glow Moisturizer is a lightweight gel-cream with niacinamide and green tea for a fresh, dewy, and healthy glow all day.":
      "Dew Glow Moisturizer — це легкий гель-крем із ніацинамідом і зеленим чаєм для свіжого, сяйливого та здорового вигляду шкіри впродовж усього дня.",
    "Glow Serum brightens and evens skin tone with 15% Vitamin C, hyaluronic acid, and niacinamide for a visibly radiant glow in 2 weeks.":
      "Glow Serum освітлює та вирівнює тон шкіри завдяки 15% вітаміну C, гіалуроновій кислоті та ніацинаміду, забезпечуючи помітне сяйво вже за 2 тижні.",
    "Hydra Cream delivers 24-hour deep hydration with ceramides, squalane, and shea butter for a soft, plump, and nourished skin barrier":
      "Hydra Cream забезпечує глибоке зволоження на 24 години завдяки церамідам, сквалану та маслу ши, роблячи шкірний бар’єр м’яким, пружним і насиченим.",
    "Pure Cleanser is a gentle sulfate-free foam cleanser that removes impurities and makeup without stripping your skin&#x27;s natural moisture.":
      "Pure Cleanser — це м’яка безсульфатна пінка, яка видаляє забруднення та макіяж, не позбавляючи шкіру природної вологи.",
    "Rescue Balm repairs and soothes sensitive skin with ceramides and centella asiatica for deep moisture and a restored skin barrier.":
      "Rescue Balm відновлює та заспокоює чутливу шкіру завдяки церамідам і центелі азійській, забезпечуючи глибоке зволоження та відновлений шкірний бар’єр.",
    "Soft Skin Body Lotion deeply hydrates with shea butter, aloe vera, and vitamin E for silky smooth, nourished, and glowing skin all day":
      "Soft Skin Body Lotion глибоко зволожує завдяки маслу ши, алое вера та вітаміну E, роблячи шкіру шовковистою, насиченою та сяйливою впродовж усього дня.",
    "Velvet Glow Serum deeply nourishes and hydrates skin for up to 24 hours, restoring your natural glow with lightweight natural extracts.":
      "Velvet Glow Serum глибоко живить і зволожує шкіру до 24 годин, повертаючи природне сяйво завдяки легким натуральним екстрактам.",
    "Designed for Skin, Built on Trust": "Створено для шкіри, побудовано на довірі",
    "Trusted By Worldwide": "Нам довіряють у всьому світі",
    Customers: "Клієнти",
    "We craft science-backed beauty using carefully selected, clinically tested ingredients to deliver powerful, high-performance results that truly make a difference,":
      "Ми створюємо догляд, заснований на науці, використовуючи ретельно відібрані та клінічно протестовані інгредієнти, щоб давати потужний і помітний результат, який справді змінює стан шкіри.",
    "without ever compromising on quality, product safety standards, ethical sourcing, sustainability practices, or long-term skin health and confidence":
      "не поступаючись якістю, стандартами безпеки продукції, етичним походженням інгредієнтів, сталими практиками та довгостроковим здоров’ям і впевненістю шкіри.",
    "Beauty Products Crafted": "Створено beauty-продуктів",
    "Nourish, protect, enhance skin.": "Живіть, захищайте та покращуйте шкіру.",
    "Happy Customers": "Щасливі клієнти",
    "Hear from happy customers.": "Дізнайтеся думку задоволених клієнтів.",
    "Positive Reviews": "Позитивні відгуки",
    "Customer Satisfaction": "Задоволеність клієнтів",
    "Explore Our Simple And Effective 3 - Step Process":
      "Ознайомтеся з нашим простим і ефективним процесом із 3 кроків",
    "Research &amp; Formulation": "Дослідження та формула",
    "Research and dermatology meet natural extracts to safely address skin.":
      "Дослідження та дерматологія поєднуються з натуральними екстрактами, щоб дбайливо вирішувати потреби шкіри.",
    "Testing &amp; Refinement": "Тестування та вдосконалення",
    "Each product is rigorously tested for safety, performance, and quality results.":
      "Кожен продукт проходить суворе тестування на безпеку, ефективність і якість результату.",
    "Clean &amp; Ethical Production": "Чисте та етичне виробництво",
    "Our products are manufactured in certified facilities under strict quality.":
      "Наші продукти виробляються на сертифікованих майданчиках із суворим контролем якості.",
    "Packaging With Purpose": "Упаковка зі змістом",
    "Eco-conscious materials and design create premium, sustainable products.":
      "Екологічні матеріали та продуманий дизайн створюють преміальні й сталі продукти.",
    "Why Your Skin Deserves": "Чому ваша шкіра заслуговує",
    "Only The Best Care": "лише найкращого догляду",
    Proven: "Доведена",
    Effectiveness: "ефективність",
    "Every product is carefully crafted to meet the highest quality standards.":
      "Кожен продукт ретельно створюється відповідно до найвищих стандартів якості.",
    "Eco-Friendly": "Екологічна",
    Packaging: "упаковка",
    "Eco-friendly materials designed to care for the planet as much as your skin.":
      "Екологічні матеріали, створені дбати про планету так само, як і про вашу шкіру.",
    "100% Natural": "100% натурально",
    "100% You": "100% ви",
    "✓ No Harsh Chemicals": "✓ Без агресивних хімікатів",
    "✓ Plant-Based Goodness": "✓ Користь рослинних інгредієнтів",
    "✓ Ethically Sourced": "✓ Етичне походження",
    "Our Latest News And Articles": "Наші останні новини та статті",
    "FORGOT PASSWORD?": "ЗАБУЛИ ПАРОЛЬ?",
    "Early access to new collections and exclusive offers.":
      "Ранній доступ до нових колекцій та ексклюзивних пропозицій.",
    "Check your inbox — we&#x27;ve sent a password reset link.":
      "Перевірте пошту — ми надіслали посилання для скидання пароля.",
    "Remember your password?": "Пам’ятаєте пароль?",
    "Last updated: March 29, 2026": "Останнє оновлення: 29 березня 2026",
    "1. Introduction": "1. Вступ",
    "2. Information We Collect": "2. Які дані ми збираємо",
    "3. How We Use Your Information": "3. Як ми використовуємо вашу інформацію",
    "4. Sharing Your Information": "4. Передача вашої інформації",
    "5. Cookies": "5. Cookie",
    "6. Data Security": "6. Безпека даних",
    "7. Your Rights": "7. Ваші права",
    "8. Third-Party Links": "8. Посилання на сторонні сайти",
    "9. Changes to This Policy": "9. Зміни до цієї політики",
    "10. Contact Us": "10. Зв’яжіться з нами",
    "Welcome to Beauty (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.":
      "Ласкаво просимо до Beauty (\"ми\", \"наш\", \"нас\"). Ми зобов’язуємося захищати вашу особисту інформацію та право на конфіденційність. Ця політика конфіденційності пояснює, як ми збираємо, використовуємо, розкриваємо та захищаємо ваші дані під час відвідування сайту або покупки у нас.",
    "We may collect personal information that you provide directly to us, including your name, email address, shipping address, phone number, and payment information when you place an order. We also automatically collect certain information when you visit our website, such as your IP address, browser type, referring URLs, and pages viewed.":
      "Ми можемо збирати особисту інформацію, яку ви надаєте нам безпосередньо, зокрема ім’я, email, адресу доставки, номер телефону та платіжні дані під час оформлення замовлення. Ми також автоматично збираємо певну інформацію під час відвідування сайту, наприклад IP-адресу, тип браузера, URL-джерела переходу та переглянуті сторінки.",
    "We use the information we collect to process your orders and payments, deliver products to you, send transactional emails such as order confirmations, respond to your inquiries and customer service requests, send marketing communications (only if you have opted in), and improve our website and product offerings.":
      "Ми використовуємо зібрану інформацію для обробки замовлень і платежів, доставки товарів, надсилання транзакційних листів, таких як підтвердження замовлення, відповідей на ваші звернення й запити до підтримки, надсилання маркетингових повідомлень (лише якщо ви погодилися) та покращення сайту й продуктових пропозицій.",
    "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, processing payments, and delivering orders. These parties are obligated to keep your information confidential and secure.":
      "Ми не продаємо, не обмінюємо й не здаємо вашу особисту інформацію третім сторонам. Ми можемо ділитися даними з надійними сервіс-провайдерами, які допомагають нам підтримувати сайт, обробляти платежі та доставляти замовлення. Ці сторони зобов’язані зберігати вашу інформацію конфіденційною та захищеною.",
    "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain features on our website.":
      "Ми використовуємо cookie та подібні технології відстеження, щоб покращити ваш досвід перегляду, аналізувати трафік сайту та персоналізувати контент. Ви можете керувати налаштуваннями cookie через параметри браузера. Вимкнення cookie може вплинути на роботу деяких функцій сайту.",
    "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. All payment transactions are encrypted using SSL technology. However, no method of transmission over the Internet is 100% secure.":
      "Ми застосовуємо стандартні для галузі заходи безпеки, щоб захистити вашу особисту інформацію від несанкціонованого доступу, розкриття, зміни чи знищення. Усі платіжні транзакції шифруються за допомогою SSL. Однак жоден спосіб передачі даних через інтернет не є на 100% безпечним.",
    "You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving marketing emails by clicking the unsubscribe link in any email we send. To exercise your rights, please contact us at the details below.":
      "Ви маєте право в будь-який час отримати доступ до своєї особистої інформації, оновити її або видалити. Ви також можете відмовитися від маркетингових листів, натиснувши посилання відписки в будь-якому нашому листі. Щоб скористатися своїми правами, зв’яжіться з нами за контактами нижче.",
    "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.":
      "Наш сайт може містити посилання на сторонні сайти. Ми не несемо відповідальності за їхні практики конфіденційності чи вміст. Радимо ознайомитися з політикою конфіденційності кожного стороннього сайту, який ви відвідуєте.",
    "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically to stay informed about how we protect your information.":
      "Ми можемо час від часу оновлювати цю політику конфіденційності. Усі зміни будуть опубліковані на цій сторінці з оновленою датою набрання чинності. Ми рекомендуємо періодично переглядати цю сторінку, щоб бути в курсі того, як ми захищаємо вашу інформацію.",
    "If you have any questions or concerns about this Privacy Policy, please contact us at: Email: support@beauty.com | Address: Beauty, Dhaka, Bangladesh.":
      "Якщо у вас є запитання чи занепокоєння щодо цієї політики конфіденційності, зв’яжіться з нами: Email: support@beauty.com | Адреса: Beauty, Дакка, Бангладеш.",
    "Rescue Balm is a rich, fast-absorbing cream enriched with ceramides, panthenol, and centella asiatica that repairs the skin barrier, reduces redness, and deeply restores moisture. Dermatologist-tested and gentle enough for daily use on sensitive skin.":
      "Rescue Balm — це насичений крем, що швидко вбирається, збагачений церамідами, пантенолом і центелою азійською, який відновлює шкірний бар’єр, зменшує почервоніння та глибоко повертає вологу. Протестований дерматологами й достатньо м’який для щоденного використання на чутливій шкірі.",
    "Apply a generous amount of Rescue Balm onto clean skin morning and evening. Gently pat into face and neck until fully absorbed. Follow with SPF in the morning.":
      "Наносьте щедру кількість Rescue Balm на чисту шкіру вранці та ввечері. М’яко розподіліть по обличчю та шиї до повного вбирання. Вранці завершуйте догляд SPF.",
  },
};

Object.assign(phraseMaps.ru, supplementalPhraseMaps.ru);
Object.assign(phraseMaps.ua, supplementalPhraseMaps.ua);

const supplementalPhraseMapsPhase2 = {
  ru: {
    "5. Cookie": "5. Файлы cookie",
    "Beauty Products Crafted": "Создано продуктов",
    "Email:": "Эл. почта:",
    "Why Plant-Based Extracts Are Transforming Skincare - Nuvera Webflow Ecommerce Website Template":
      "Почему растительные экстракты меняют уход за кожей - Nuvera, шаблон интернет-магазина Webflow",
    "March 25, 2026": "25 марта 2026",
    "Why Plant-Based Extracts Work So Well": "Почему растительные экстракты работают так хорошо",
    "Unlike isolated synthetic molecules, plant extracts often deliver multiple benefits simultaneously through synergistic action — meaning the whole extract performs better than any single isolated compound within it.":
      "В отличие от изолированных синтетических молекул, растительные экстракты часто дают несколько эффектов одновременно благодаря синергии — то есть весь экстракт работает лучше, чем любой отдельный выделенный компонент внутри него.",
    "Green Tea Extract (EGCG)": "Экстракт зелёного чая (EGCG)",
    "One of the most clinically studied plant ingredients in skincare, green tea extract is rich in epigallocatechin gallate (EGCG) — a polyphenol with exceptional antioxidant activity.":
      "Один из самых клинически изученных растительных ингредиентов в уходе за кожей, экстракт зелёного чая богат эпигаллокатехин галлатом (EGCG) — полифенолом с выдающейся антиоксидантной активностью.",
    "• Neutralises UV-induced free radicals that accelerate skin ageing":
      "• Нейтрализует свободные радикалы, вызванные УФ-излучением, которые ускоряют старение кожи",
    "• Reduces inflammation and calms reactive, redness-prone skin":
      "• Уменьшает воспаление и успокаивает реактивную кожу, склонную к покраснению",
    "• Inhibits enzymes that break down collagen and elastin":
      "• Подавляет ферменты, разрушающие коллаген и эластин",
    "• Regulates sebum production in oily skin types":
      "• Регулирует выработку себума у жирной кожи",
    "Rosehip Oil": "Масло шиповника",
    "Cold-pressed from the seeds of wild rose plants, rosehip oil is one of nature's most nutrient-dense facial oils. It's exceptionally rich in trans-retinoic acid (a natural form of vitamin A), vitamin C, and linoleic acid.":
      "Масло шиповника, полученное холодным отжимом из семян дикой розы, — одно из самых насыщенных питательными веществами масел для лица. Оно особенно богато транс-ретиноевой кислотой (натуральной формой витамина A), витамином C и линолевой кислотой.",
    "• Evens skin tone and fades hyperpigmentation":
      "• Выравнивает тон кожи и уменьшает гиперпигментацию",
    "• Improves skin texture and elasticity with consistent use":
      "• Улучшает текстуру и упругость кожи при регулярном использовании",
    "• Deeply nourishes dry, mature, or compromised skin barriers":
      "• Глубоко питает сухую, зрелую или ослабленную кожу",
    "• Non-comedogenic — suitable even for acne-prone skin":
      "• Некомедогенно — подходит даже коже, склонной к акне",
    "Centella Asiatica (Cica)": "Центелла азиатская (Cica)",
    "Also known as tiger grass or gotu kola, centella asiatica has been used in traditional Asian medicine for centuries to heal wounds and calm irritated skin. Modern research confirms its remarkable skin benefits.":
      "Центелла азиатская, также известная как тигровая трава или готу кола, веками использовалась в традиционной азиатской медицине для заживления ран и успокоения раздражённой кожи. Современные исследования подтверждают её выдающуюся пользу для кожи.",
    "• Stimulates collagen and elastin synthesis":
      "• Стимулирует синтез коллагена и эластина",
    "• Strengthens and repairs a damaged skin barrier":
      "• Укрепляет и восстанавливает повреждённый кожный барьер",
    "• Reduces redness, sensitivity, and reactive inflammation":
      "• Снижает покраснение, чувствительность и реактивное воспаление",
    "• Ideal for post-procedure recovery and sensitive skin care":
      "• Идеально подходит для восстановления после процедур и ухода за чувствительной кожей",
    "Bakuchiol — The Natural Retinol Alternative":
      "Бакучиол — натуральная альтернатива ретинолу",
    "Derived from the seeds of the babchi plant, bakuchiol is the most exciting plant-based ingredient to emerge in recent years. Multiple peer-reviewed studies now show that bakuchiol delivers retinol-comparable anti-ageing results — without the irritation, photosensitivity, or peeling that synthetic retinoids often cause.":
      "Получаемый из семян растения бабчи, бакучиол — один из самых интересных растительных ингредиентов последних лет. Несколько рецензируемых исследований показывают, что бакучиол даёт антивозрастной эффект, сопоставимый с ретинолом, — без раздражения, фоточувствительности и шелушения, которые часто вызывают синтетические ретиноиды.",
    "• Improves firmness and skin elasticity":
      "• Повышает плотность и эластичность кожи",
    "• Reduces the appearance of fine lines and wrinkles":
      "• Уменьшает видимость тонких линий и морщин",
    "• Promotes cellular turnover and fades post-inflammatory hyperpigmentation":
      "• Стимулирует обновление клеток и уменьшает поствоспалительную гиперпигментацию",
    "• Safe for use during pregnancy (unlike retinol)":
      "• Безопасен для использования во время беременности (в отличие от ретинола)",
    "• Suitable for morning and evening application":
      "• Подходит для утреннего и вечернего применения",
    "The Future Is Rooted in Nature": "Будущее уходит корнями в природу",
    "For thousands of years, before laboratories and synthetic chemistry existed, plants were the original skincare. Ancient Egyptians used aloe vera and castor oil. Ayurvedic traditions prescribed turmeric and neem. Traditional Chinese medicine relied on ginseng and licorice root. Modern dermatology is finally validating what these traditions always knew — and the results are remarkable.":
      "Тысячелетиями, ещё до появления лабораторий и синтетической химии, растения были основой ухода за кожей. Древние египтяне использовали алоэ вера и касторовое масло. Аюрведические традиции предписывали куркуму и ним. Традиционная китайская медицина опиралась на женьшень и корень солодки. Современная дерматология наконец подтверждает то, что эти традиции знали всегда, — и результаты впечатляют.",
    "Plants contain complex biochemical compounds — polyphenols, flavonoids, terpenes, alkaloids, and essential fatty acids — that have evolved over millions of years to protect themselves from environmental damage, UV radiation, and microbial attack. When applied to human skin, many of these compounds perform remarkably similar protective and restorative functions.":
      "Растения содержат сложные биохимические соединения — полифенолы, флавоноиды, терпены, алкалоиды и незаменимые жирные кислоты, — которые миллионы лет развивались для защиты от вреда окружающей среды, УФ-излучения и микробных атак. На коже человека многие из этих соединений выполняют схожие защитные и восстанавливающие функции.",
    "Plant-based skincare is not a step backward — it's a sophisticated, science-backed evolution of how we care for our skin. As clinical research continues to validate centuries of botanical wisdom, the gap between nature and science grows smaller. The best formulas of tomorrow will be those that harness the power of plants with the precision of modern dermatology — delivering real results, responsibly sourced, and kind to every skin type.":
      "Уход за кожей на растительной основе — это не шаг назад, а сложная и научно подтверждённая эволюция того, как мы заботимся о коже. Пока клинические исследования продолжают подтверждать вековую ботаническую мудрость, разрыв между природой и наукой становится всё меньше. Лучшие формулы будущего будут сочетать силу растений с точностью современной дерматологии — давая реальный результат, ответственное происхождение ингредиентов и мягкость для любого типа кожи.",
    "The Science Behind Clean Beauty: What Your Skin Actually Needs - Nuvera Webflow Ecommerce Website Template":
      "Наука о чистой косметике: что действительно нужно вашей коже - Nuvera, шаблон интернет-магазина Webflow",
    "March 10, 2026": "10 марта 2026",
    "What Does \"Clean Beauty\" Actually Mean?": "Что на самом деле означает «чистая косметика»?",
    "Key Ingredients Driving the Clean Beauty Revolution":
      "Ключевые ингредиенты, движущие революцию чистой косметики",
    "Here are the powerhouse ingredients leading the clean skincare movement:":
      "Вот ключевые ингредиенты, которые ведут движение чистого ухода за кожей:",
    "Hyaluronic Acid (plant-fermented)": "Гиалуроновая кислота (растительная ферментация)",
    "Niacinamide (Vitamin B3)": "Ниацинамид (витамин B3)",
    "Plant-Based Peptides": "Растительные пептиды",
    "Vitamin C (L-Ascorbic Acid)": "Витамин C (L-аскорбиновая кислота)",
    "Why Your Skin Absorbs More Than You Think":
      "Почему ваша кожа впитывает больше, чем вы думаете",
    "Building Your Clean Skincare Routine":
      "Как построить чистую рутину ухода за кожей",
    "A simple, effective clean routine follows this structure:":
      "Простая и эффективная clean-рутина строится так:",
    Cleanse: "Очищение",
    Tone: "Тонизация",
    Treat: "Активный уход",
    Moisturise: "Увлажнение",
    Protect: "Защита",
    "The Bottom Line": "Главный вывод",
    "Understanding Your Skin Type: A Beginner's Guide - Nuvera Webflow Ecommerce Website Template":
      "Как понять свой тип кожи: руководство для начинающих - Nuvera, шаблон интернет-магазина Webflow",
    "March 20, 2026": "20 марта 2026",
    "The Five Primary Skin Types": "Пять основных типов кожи",
    "Normal Skin": "Нормальная кожа",
    "Dry Skin": "Сухая кожа",
    "Oily Skin": "Жирная кожа",
    "Combination Skin": "Комбинированная кожа",
    "Sensitive Skin": "Чувствительная кожа",
    "How to Identify Your Skin Type: The Bare-Face Test":
      "Как определить свой тип кожи: тест с чистым лицом",
  },
  ua: {
    "5. Cookie": "5. Файли cookie",
    "Beauty Products Crafted": "Створено продуктів",
    "Email:": "Ел. пошта:",
    "Why Plant-Based Extracts Are Transforming Skincare - Nuvera Webflow Ecommerce Website Template":
      "Чому рослинні екстракти змінюють догляд за шкірою - Nuvera, шаблон інтернет-магазину Webflow",
    "March 25, 2026": "25 березня 2026",
    "Why Plant-Based Extracts Work So Well": "Чому рослинні екстракти працюють так добре",
    "Green Tea Extract (EGCG)": "Екстракт зеленого чаю (EGCG)",
    "Rosehip Oil": "Олія шипшини",
    "Centella Asiatica (Cica)": "Центела азійська (Cica)",
    "Bakuchiol — The Natural Retinol Alternative":
      "Бакучіол — натуральна альтернатива ретинолу",
    "The Future Is Rooted in Nature": "Майбутнє вкорінене в природі",
    "The Science Behind Clean Beauty: What Your Skin Actually Needs - Nuvera Webflow Ecommerce Website Template":
      "Наука про чисту косметику: що насправді потрібно вашій шкірі - Nuvera, шаблон інтернет-магазину Webflow",
    "March 10, 2026": "10 березня 2026",
    "What Does \"Clean Beauty\" Actually Mean?": "Що насправді означає «чиста косметика»?",
    "Key Ingredients Driving the Clean Beauty Revolution":
      "Ключові інгредієнти, що рухають революцію чистої косметики",
    "Here are the powerhouse ingredients leading the clean skincare movement:":
      "Ось ключові інгредієнти, які ведуть рух clean skincare:",
    "Hyaluronic Acid (plant-fermented)": "Гіалуронова кислота (рослинна ферментація)",
    "Niacinamide (Vitamin B3)": "Ніацинамід (вітамін B3)",
    "Plant-Based Peptides": "Рослинні пептиди",
    "Vitamin C (L-Ascorbic Acid)": "Вітамін C (L-аскорбінова кислота)",
    "Why Your Skin Absorbs More Than You Think":
      "Чому ваша шкіра вбирає більше, ніж ви думаєте",
    "Building Your Clean Skincare Routine":
      "Як побудувати clean-рутину догляду за шкірою",
    "A simple, effective clean routine follows this structure:":
      "Проста й ефективна clean-рутина будується так:",
    Cleanse: "Очищення",
    Tone: "Тонізація",
    Treat: "Активний догляд",
    Moisturise: "Зволоження",
    Protect: "Захист",
    "The Bottom Line": "Головний висновок",
    "Understanding Your Skin Type: A Beginner's Guide - Nuvera Webflow Ecommerce Website Template":
      "Як зрозуміти свій тип шкіри: гід для початківців - Nuvera, шаблон інтернет-магазину Webflow",
    "March 20, 2026": "20 березня 2026",
    "The Five Primary Skin Types": "П’ять основних типів шкіри",
    "Normal Skin": "Нормальна шкіра",
    "Dry Skin": "Суха шкіра",
    "Oily Skin": "Жирна шкіра",
    "Combination Skin": "Комбінована шкіра",
    "Sensitive Skin": "Чутлива шкіра",
    "How to Identify Your Skin Type: The Bare-Face Test":
      "Як визначити свій тип шкіри: тест із чистим обличчям",
  },
};

Object.assign(phraseMaps.ru, supplementalPhraseMapsPhase2.ru);
Object.assign(phraseMaps.ua, supplementalPhraseMapsPhase2.ua);

function getRegionMaps(locale) {
  const language = localeMap[locale];
  if (!language || typeof Intl.DisplayNames !== "function") {
    return null;
  }

  const regionCodes = [
    "AF","AX","AL","DZ","AS","AD","AO","AI","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BR","IO","VG","BN","BG","BF","BI","CV","KH","CM","CA","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","SZ","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","XK","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","KP","MK","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","KR","SS","ES","LK","SD","SR","SJ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","VI","UG","UA","AE","GB","US","UM","UY","UZ","VU","VA","VE","VN","WF"
  ];

  const englishNames = new Intl.DisplayNames(["en"], { type: "region" });
  const localizedNames = new Intl.DisplayNames([language], { type: "region" });
  const byEnglishName = new Map();

  for (const region of regionCodes) {
    const englishName = englishNames.of(region);
    const localizedName = localizedNames.of(region);
    if (englishName && localizedName) {
      byEnglishName.set(englishName, localizedName);
    }
  }

  return byEnglishName;
}

const regionMaps = {
  ru: getRegionMaps("ru"),
  ua: getRegionMaps("ua"),
};

function translateCountryName(locale, value) {
  const regionMap = regionMaps[locale];
  if (!regionMap) return value;
  return regionMap.get(value) ?? value;
}

function translatePhrase(locale, value) {
  if (!locale || locale === "us" || !value) return value;

  const direct = phraseMaps[locale]?.[value];
  if (direct) return direct;

  const trimmedColon = value.endsWith(":") ? value.slice(0, -1) : null;
  if (trimmedColon) {
    const translatedBase = translatePhrase(locale, trimmedColon);
    if (translatedBase !== trimmedColon) return `${translatedBase}:`;
  }

  const trimmedRequired = value.endsWith(" *") ? value.slice(0, -2) : null;
  if (trimmedRequired) {
    const translatedBase = translatePhrase(locale, trimmedRequired);
    if (translatedBase !== trimmedRequired) return `${translatedBase} *`;
  }

  const localizedCountry = translateCountryName(locale, value);
  if (localizedCountry !== value) return localizedCountry;

  return value;
}

module.exports = {
  translatePhrase,
};
