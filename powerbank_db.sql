-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Okt 20. 11:46
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `powerbank_db`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `powerbanks`
--

CREATE TABLE `powerbanks` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `brand` varchar(256) NOT NULL,
  `battery_time` int(17) NOT NULL,
  `charge_duration` int(17) NOT NULL,
  `cost` int(17) NOT NULL,
  `available` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `powerbanks`
--

INSERT INTO `powerbanks` (`id`, `name`, `brand`, `battery_time`, `charge_duration`, `cost`, `available`) VALUES
(1, 'PowerMax 10000', 'Anker', 24, 5, 15000, 1),
(2, 'TurboCharge 20000', 'Xiaomi', 36, 6, 18000, 1),
(3, 'SlimPower 5000', 'Samsung', 12, 3, 8000, 0),
(4, 'EcoCharge 15000', 'Baseus', 30, 4, 13500, 1),
(5, 'UltraCharge Pro', 'Huawei', 40, 7, 22000, 1),
(6, 'QuickPower Mini', 'Sony', 10, 2, 6000, 0),
(7, 'PowerGo 12000', 'Romoss', 26, 4, 11000, 1),
(8, 'VoltMate 18000', 'Realme', 34, 6, 16500, 1),
(9, 'EnergyBox X', 'Lenovo', 28, 5, 14000, 0),
(10, 'MegaCharge Xtreme', 'Zendure', 48, 8, 25000, 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `powerbanks`
--
ALTER TABLE `powerbanks`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `powerbanks`
--
ALTER TABLE `powerbanks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
