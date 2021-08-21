-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-08-2021 a las 22:34:35
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `marcposasy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detail_sales`
--

DROP TABLE IF EXISTS `detail_sales`;
CREATE TABLE IF NOT EXISTS `detail_sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sale_id` int(11) NOT NULL,
  `service` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `renew` tinyint(1) DEFAULT '0',
  `value` double DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sale_id` (`sale_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

DROP TABLE IF EXISTS `sales`;
CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_client` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `total` double NOT NULL,
  `cost` double NOT NULL,
  `date` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `name_client`, `total`, `cost`, `date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(43, NULL, 35000, 0, '2021-08-14 00:00:00', '2021-08-16 19:48:08', '2021-08-16 19:48:08', NULL),
(44, NULL, 50000, 20000, '2021-08-14 00:00:00', '2021-08-16 19:48:40', '2021-08-21 20:53:37', '2021-08-21 17:43:12'),
(45, NULL, 280000, 50000, '2021-08-14 00:00:00', '2021-08-16 19:49:05', '2021-08-21 17:40:05', '2021-08-21 17:40:05'),
(46, NULL, 9000, 0, '2021-08-15 00:00:00', '2021-08-16 19:49:31', '2021-08-21 17:21:39', '2021-08-21 17:21:39'),
(47, NULL, 120000, 50000, '2021-08-15 00:00:00', '2021-08-16 19:49:51', '2021-08-21 17:18:36', '2021-08-21 17:18:36'),
(48, NULL, 800000, 560000, '2021-08-17 00:00:00', '2021-08-21 17:53:20', '2021-08-21 22:18:48', '2021-08-21 18:09:03'),
(49, NULL, 70000, 20000, '2021-08-17 00:00:00', '2021-08-21 22:19:30', '2021-08-21 22:19:30', NULL),
(50, NULL, 380000, 268000, '2021-08-18 00:00:00', '2021-08-21 22:21:31', '2021-08-21 22:21:31', NULL),
(51, NULL, 45000, 0, '2021-08-19 00:00:00', '2021-08-21 22:22:36', '2021-08-21 22:22:36', NULL),
(52, NULL, 35000, 0, '2021-08-19 00:00:00', '2021-08-21 22:22:58', '2021-08-21 22:22:58', NULL),
(53, NULL, 70000, 15000, '2021-08-19 00:00:00', '2021-08-21 22:23:35', '2021-08-21 22:23:35', NULL),
(54, NULL, 30000, 0, '2021-08-19 00:00:00', '2021-08-21 22:24:02', '2021-08-21 22:24:02', NULL),
(55, NULL, 20000, 0, '2021-08-19 00:00:00', '2021-08-21 22:24:33', '2021-08-21 22:24:33', NULL),
(56, NULL, 70000, 40000, '2021-08-20 00:00:00', '2021-08-21 22:26:39', '2021-08-21 22:26:39', NULL),
(57, NULL, 48000, 20000, '2021-08-20 00:00:00', '2021-08-21 22:27:35', '2021-08-21 22:27:35', NULL),
(58, NULL, 10000, 0, '2021-08-20 00:00:00', '2021-08-21 22:28:04', '2021-08-21 22:28:04', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `password` blob NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `remember_token` blob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `status`, `created_at`, `updated_at`, `remember_token`) VALUES
(1, 'Miguel Angel', 'cerquera199627@hotmail.com', 0x243279243132246a5339784c706e45716e4f4477494774763969764a4f5a34423549414e75647576734a70326861624f466f5135333459504d562e53, 1, '2021-07-20 16:34:59', '2021-07-20 16:35:01', 0x243279243132246a5339784c706e45716e4f4477494774763969764a4f5a34423549414e75647576734a70326861624f466f5135333459504d562e53);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detail_sales`
--
ALTER TABLE `detail_sales`
  ADD CONSTRAINT `fk-detail_sales-sales` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
