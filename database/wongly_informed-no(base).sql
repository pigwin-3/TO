-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2022 at 02:09 PM
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
  `Name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catagory`
--

INSERT INTO `catagory` (`ID`, `Name`) VALUES
(1, 'historie');

-- --------------------------------------------------------

--
-- Table structure for table `qn-ans-kri`
--

CREATE TABLE `qn-ans-kri` (
  `qnID` int(4) NOT NULL,
  `fact` varchar(2048) NOT NULL,
  `srcfact` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `qn-kri`
--

CREATE TABLE `qn-kri` (
  `qnID` int(4) NOT NULL,
  `qn` varchar(1024) NOT NULL,
  `img` varchar(32) NOT NULL,
  `srcimg` varchar(256) NOT NULL,
  `altimg` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `theme`
--

CREATE TABLE `theme` (
  `CatID` int(4) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `qn` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `theme`
--

INSERT INTO `theme` (`CatID`, `Name`, `qn`) VALUES
(1, 'krig', 'kri');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catagory`
--
ALTER TABLE `catagory`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `qn-ans-kri`
--
ALTER TABLE `qn-ans-kri`
  ADD KEY `qnID` (`qnID`);

--
-- Indexes for table `qn-kri`
--
ALTER TABLE `qn-kri`
  ADD PRIMARY KEY (`qnID`);

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
  MODIFY `ID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `qn-kri`
--
ALTER TABLE `qn-kri`
  MODIFY `qnID` int(4) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `qn-ans-kri`
--
ALTER TABLE `qn-ans-kri`
  ADD CONSTRAINT `qnID` FOREIGN KEY (`qnID`) REFERENCES `qn-kri` (`qnID`);

--
-- Constraints for table `theme`
--
ALTER TABLE `theme`
  ADD CONSTRAINT `catagory` FOREIGN KEY (`CatID`) REFERENCES `catagory` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
