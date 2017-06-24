-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-06-2017 a las 19:48:32
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organizaciones`
--

CREATE TABLE `organizaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `organizaciones`
--

INSERT INTO `organizaciones` (`id`, `nombre`) VALUES
(1, 'cype'),
(5, 'sigma');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `alias` varchar(20) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL,
  `contrasena` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`alias`, `nombre`, `apellidos`, `contrasena`) VALUES
('asd', 'asd', 'asd', 'asd'),
('cargador', 'yuy', 'yuyy', 'cargador'),
('dasd', 'dasd', 'asda', 'asdas'),
('erte', 'erte', 'ert', 'ertert'),
('faas', '', '', 'ds'),
('fauuas', '', '', 'ds'),
('fran', 'fran', NULL, 'fran'),
('gafas', '', '', 'fadas'),
('guille', 'guille', '', 'guille'),
('hueco', 'dasd', 'asda', 'hueco'),
('huesca', 'huesc', 'huesc', 'huesca'),
('marcelo', 'marcelo', 'marcelo', 'marcelo'),
('tania', 'tania', 'tania', 'tania'),
('teresa', NULL, NULL, 'teresa'),
('werwerw', 'dasd', 'asda', 'asdas'),
('YUYUY', NULL, NULL, 'YUYUY'),
('yuyyyyyy', '', '', 'ds');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_organizaciones`
--

CREATE TABLE `usuarios_organizaciones` (
  `usuarios_alias` varchar(20) NOT NULL,
  `organizaciones_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios_organizaciones`
--

INSERT INTO `usuarios_organizaciones` (`usuarios_alias`, `organizaciones_id`) VALUES
('fran', 1),
('marcelo', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `organizaciones`
--
ALTER TABLE `organizaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre_UNIQUE` (`nombre`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`alias`);

--
-- Indices de la tabla `usuarios_organizaciones`
--
ALTER TABLE `usuarios_organizaciones`
  ADD PRIMARY KEY (`usuarios_alias`,`organizaciones_id`),
  ADD KEY `fk_usuarios_has_organizaciones_organizaciones1_idx` (`organizaciones_id`),
  ADD KEY `fk_usuarios_has_organizaciones_usuarios_idx` (`usuarios_alias`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `organizaciones`
--
ALTER TABLE `organizaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios_organizaciones`
--
ALTER TABLE `usuarios_organizaciones`
  ADD CONSTRAINT `fk_usuarios_has_organizaciones_organizaciones1` FOREIGN KEY (`organizaciones_id`) REFERENCES `organizaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuarios_has_organizaciones_usuarios` FOREIGN KEY (`usuarios_alias`) REFERENCES `usuarios` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
