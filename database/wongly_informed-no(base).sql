-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2022 at 09:15 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wongly_informed-no`
--

-- --------------------------------------------------------

--
-- Table structure for table `catagory`
--

CREATE TABLE `catagory` (
  `ID` int(4) NOT NULL,
  `Name` varchar(32) NOT NULL,
  `about` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catagory`
--

INSERT INTO `catagory` (`ID`, `Name`, `about`) VALUES
(1, 'historie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie semper dui posuere feugiat. Nullam tristique massa vel at.'),
(2, 'test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dictum neque. Aliquam pellentesque vehicula molestie tincidunt.');

-- --------------------------------------------------------

--
-- Table structure for table `qn`
--

CREATE TABLE `qn` (
  `theme` varchar(3) NOT NULL,
  `qnID` int(8) NOT NULL,
  `qn` varchar(128) NOT NULL,
  `img` varchar(32) NOT NULL,
  `srcimg` varchar(256) NOT NULL,
  `altimg` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `qn`
--

INSERT INTO `qn` (`theme`, `qnID`, `qn`, `img`, `srcimg`, `altimg`) VALUES
('kri', 1, 'Det fins mange type poteter for eksempel: søt potet, vanlig potet, skabb potet og Hitler potet. og vi kann ikke glemme Måne pote', 'krg.edf', 'www.igotitfromhere.com', 'beskriv bilde la di da'),
('kri', 2, 'er noe søte poteter som kommer ut av menneskenes kropp.Du kan høre mere om søt potet på HVA ER EGENTLIG POTETER OG HVA ER BAKRUN', 'kri.dbs', 'lnl.no/raevbilder', 'bilde av noe'),
('kri', 3, 'VANLIG POTET: er den mest kjente poteten i hele verden.', 'kri.gwe', 'kjersti.blogspot.com/hva_er_en_eple', 'beskrivende alt tekst'),
('kri', 4, 'SKABB POTET: er den mest giftige poteten i hele verden og kommer fra skabb reven.', 'kri.jfk', 'bilder.no/bilde', 'alt tekstttttt la di da'),
('kri', 5, 'POTET: en potet, oftest funnet i matbutikken', 'kri.bil', 'et_eneste_bilde.com', 'dfsioødfhbgujsdhuifb jesdihubvjijlxf hujf'),
('kri', 6, 'MÅNE POTET: er en potet dyrket på månen. Den er veldig vanskelig å finne men ikke umulig. Oppfinneren av måne poteten heter BOB ', 'kri.kri', 'hvor_fra.onga/bonga', 'beskriv beskriv beskrivende'),
('kri', 7, 'GULROT POTET: En gul avlang poteter, ofte brukt til å styre traktorer med', 'kri.dfg', 'bilde.kjilde/stedet', 'beskrivende alt for absulut ingen'),
('kri', 8, 'MENNESKE POTET: En potet som ser ut som tre personer syd samenn in i rompa på hverandre', 'kri.tru', 'mrk.mo', 'lammooooooo XD'),
('kri', 9, 'Verdens først potet er faktisk livsfarlige den har levd for lenge til og spises.', 'kri.iml', 'i_make_lithograms.com/or_smth', 'funny'),
('kri', 10, 'VERDENS SJELDNESTE POTET: Den heter Stalin poteten denne typen er veldig ukjent og sta i Stalin og lin i Stalin har sin betydnin', 'kri.var', 'kjilde.net', 'æøå'),
('kri', 11, 'HVA KAN DEN GJØRE? Poteter har også en tendens til og explodere i hånda di hvis du skulle være så uheldig og varme den opp til m', 'kri.æøå', 'kjildær.æøå', 'æøåæøæøøåæøåøæøåæøåøæ'),
('tes', 12, 'test', 'tes.tes', 'wwwww.www.www', 'lfgdlgldf');

-- --------------------------------------------------------

--
-- Table structure for table `qn-ans`
--

CREATE TABLE `qn-ans` (
  `qnID` int(8) NOT NULL,
  `trufal` tinyint(1) NOT NULL,
  `fact` varchar(512) NOT NULL,
  `srcfact` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `qn-ans`
--

INSERT INTO `qn-ans` (`qnID`, `trufal`, `fact`, `srcfact`) VALUES
(1, 1, 'faktaaaa', 'www.sorse.com'),
(2, 1, 'faktaaaa', 'www.sorse.com'),
(3, 1, 'faktaaaa', 'www.sorse.com'),
(4, 1, 'faktaaaa', 'www.sorse.com'),
(5, 1, 'faktaaaa', 'www.sorse.com'),
(6, 1, 'faktaaaa', 'www.sorse.com'),
(7, 1, 'faktaaaa', 'www.sorse.com'),
(8, 1, 'faktaaaa', 'www.sorse.com'),
(9, 1, 'faktaaaa', 'www.sorse.com'),
(10, 1, 'faktaaaa', 'www.sorse.com'),
(11, 1, 'faktaaaa', 'www.sorse.com'),
(12, 0, 'fax', 'wwww.ww.ww');

-- --------------------------------------------------------

--
-- Table structure for table `theme`
--

CREATE TABLE `theme` (
  `CatID` int(4) NOT NULL,
  `Name` varchar(32) NOT NULL,
  `qn` varchar(4) NOT NULL,
  `about` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `theme`
--

INSERT INTO `theme` (`CatID`, `Name`, `qn`, `about`) VALUES
(1, 'krig', 'kri', 'cap 360 lollll'),
(2, 'test', 'tes', 'cap 360 lollll');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catagory`
--
ALTER TABLE `catagory`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `qn`
--
ALTER TABLE `qn`
  ADD PRIMARY KEY (`qnID`);

--
-- Indexes for table `qn-ans`
--
ALTER TABLE `qn-ans`
  ADD KEY `qnID` (`qnID`);

--
-- Indexes for table `theme`
--
ALTER TABLE `theme`
  ADD KEY `catagory` (`CatID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catagory`
--
ALTER TABLE `catagory`
  MODIFY `ID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `qn`
--
ALTER TABLE `qn`
  MODIFY `qnID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `qn-ans`
--
ALTER TABLE `qn-ans`
  ADD CONSTRAINT `qnID` FOREIGN KEY (`qnID`) REFERENCES `qn` (`qnID`);

--
-- Constraints for table `theme`
--
ALTER TABLE `theme`
  ADD CONSTRAINT `catagory` FOREIGN KEY (`CatID`) REFERENCES `catagory` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
