-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-09-2020 a las 21:48:46
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `facturas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

DROP TABLE IF EXISTS `facturas`;
CREATE TABLE IF NOT EXISTS `facturas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(255) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `vendor_name` varchar(255) DEFAULT NULL,
  `remittance_address` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`Id`, `invoice_number`, `total`, `currency`, `invoice_date`, `due_date`, `vendor_name`, `remittance_address`, `estado`) VALUES
(1, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE'),
(2, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE'),
(3, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE'),
(4, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE'),
(5, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE'),
(6, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE'),
(7, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE'),
(8, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE'),
(9, '12345', '199.99', 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc.', '123 ABC St. Charlotte, NC 28209', 'PENDIENTE');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
