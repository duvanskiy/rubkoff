-- phpMyAdmin SQL Dump
-- version 4.5.3.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Янв 28 2016 г., 08:13
-- Версия сервера: 5.5.46-0ubuntu0.14.04.2
-- Версия PHP: 7.0.1-dev

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `rubkoff`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `price` float NOT NULL,
  `space` float NOT NULL,
  `id_img` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `space`, `id_img`) VALUES
(1, 'П128', 2773920, 295.84, 1),
(2, 'П124', 2738270, 347.7, 2),
(3, 'П115', 1585270, 206.9, 3),
(4, 'П121', 2150320, 235.1, 4),
(5, 'П94', 1465830, 129.7, 5),
(6, 'П97', 2319910, 254.8, 6),
(7, 'П27', 1038760, 93.34, 7),
(8, 'П93', 1803630, 148, 8),
(9, 'П122', 1633380, 169.15, 9),
(10, 'П112', 1381890, 63, 10);

-- --------------------------------------------------------

--
-- Структура таблицы `product_img`
--

CREATE TABLE `product_img` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `src` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `product_img`
--

INSERT INTO `product_img` (`id`, `id_product`, `src`) VALUES
(1, 1, 'http://rubkoff.ru/uploads/projects/p128/385_0.jpg'),
(2, 2, 'http://rubkoff.ru/uploads/projects/p124/385_0.jpg'),
(3, 3, 'http://rubkoff.ru/uploads/projects/p115/385_0.jpg'),
(4, 4, 'http://rubkoff.ru/uploads/projects/p121/385_0.jpg'),
(5, 5, 'http://rubkoff.ru/uploads/projects/p94/385_0.jpg'),
(6, 6, 'http://rubkoff.ru/uploads/projects/p27/385_0.jpg'),
(7, 7, 'http://rubkoff.ru/uploads/projects/p27/385_0.jpg'),
(8, 8, 'http://rubkoff.ru/uploads/projects/p93/385_0.jpg'),
(9, 9, 'http://rubkoff.ru/uploads/projects/p122/385_0.jpg'),
(10, 10, 'http://rubkoff.ru/uploads/projects/p112/385_0.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `product_property`
--

CREATE TABLE `product_property` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_property` int(11) NOT NULL,
  `id_property_value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `product_property`
--

INSERT INTO `product_property` (`id`, `id_product`, `id_property`, `id_property_value`) VALUES
(5, 1, 2, 5),
(6, 2, 2, 4),
(7, 2, 2, 5),
(8, 3, 2, 5),
(9, 4, 2, 5),
(10, 5, 2, 5),
(11, 6, 2, 4),
(12, 7, 2, 5),
(13, 8, 2, 5),
(14, 9, 2, 5),
(15, 10, 2, 4),
(18, 1, 1, 2),
(20, 1, 4, 6),
(21, 2, 1, 2),
(22, 2, 4, 8),
(25, 3, 1, 2),
(26, 3, 4, 6),
(27, 4, 1, 2),
(29, 4, 4, 6),
(30, 5, 4, 8),
(31, 5, 1, 2),
(33, 6, 1, 2),
(35, 6, 4, 6),
(36, 7, 4, 8),
(38, 7, 1, 2),
(39, 8, 1, 2),
(41, 8, 4, 6),
(42, 9, 1, 2),
(43, 9, 4, 6),
(45, 10, 1, 1),
(47, 10, 4, 7);

-- --------------------------------------------------------

--
-- Структура таблицы `property`
--

CREATE TABLE `property` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `property`
--

INSERT INTO `property` (`id`, `name`) VALUES
(1, 'level'),
(2, 'material'),
(3, 'space'),
(4, 'type'),
(5, 'price');

-- --------------------------------------------------------

--
-- Структура таблицы `property_value`
--

CREATE TABLE `property_value` (
  `id` int(11) NOT NULL,
  `value` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `property_value`
--

INSERT INTO `property_value` (`id`, `value`) VALUES
(1, 'Одноэтажные'),
(2, 'Двухэтажные'),
(3, 'Трехэтажные'),
(4, 'Бревна'),
(5, 'Бруса'),
(6, 'Дом'),
(7, 'Баня'),
(8, 'Дом-баня');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `space` (`space`),
  ADD KEY `price` (`price`);

--
-- Индексы таблицы `product_img`
--
ALTER TABLE `product_img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Индексы таблицы `product_property`
--
ALTER TABLE `product_property`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`,`id_property`),
  ADD KEY `id_property_value` (`id_property_value`),
  ADD KEY `id_property` (`id_property`);

--
-- Индексы таблицы `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `property_value`
--
ALTER TABLE `property_value`
  ADD PRIMARY KEY (`id`),
  ADD KEY `value` (`value`(255));

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT для таблицы `product_img`
--
ALTER TABLE `product_img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT для таблицы `product_property`
--
ALTER TABLE `product_property`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT для таблицы `property`
--
ALTER TABLE `property`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `property_value`
--
ALTER TABLE `property_value`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `product_img`
--
ALTER TABLE `product_img`
  ADD CONSTRAINT `product_img_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);

--
-- Ограничения внешнего ключа таблицы `product_property`
--
ALTER TABLE `product_property`
  ADD CONSTRAINT `product_property_ibfk_1` FOREIGN KEY (`id_property`) REFERENCES `property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_property_ibfk_2` FOREIGN KEY (`id_property_value`) REFERENCES `property_value` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_property_ibfk_3` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
