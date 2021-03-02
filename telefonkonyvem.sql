-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Feb 28. 21:38
-- Kiszolgáló verziója: 10.4.11-MariaDB
-- PHP verzió: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `gyakorlo`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `telefonkonyvem`
--

CREATE TABLE `telefonkonyvem` (
  `ID` int(11) NOT NULL,
  `nev` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `tel` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `kep` varchar(50) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `telefonkonyvem`
--

INSERT INTO `telefonkonyvem` (`ID`, `nev`, `tel`, `kep`) VALUES
(2, 'Valaki Vagyok', '03-30-1234-567', ''),
(3, 'Hár Piroska', '03-20-1234-567', 'kep.jpg'),
(4, 'Mot Oszkár', '03-20-63528', 'kep.jpg');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `telefonkonyvem`
--
ALTER TABLE `telefonkonyvem`
  ADD PRIMARY KEY (`ID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `telefonkonyvem`
--
ALTER TABLE `telefonkonyvem`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
