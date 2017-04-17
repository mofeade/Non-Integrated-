-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 17, 2017 at 03:12 AM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fitstamp`
--

-- --------------------------------------------------------

--
-- Table structure for table `maincontent`
--

CREATE TABLE `maincontent` (
  `id` smallint(6) NOT NULL,
  `content` varchar(30) NOT NULL,
  `contentImage` text NOT NULL,
  `contentName` varchar(30) NOT NULL,
  `contentDetails` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `maincontent`
--

INSERT INTO `maincontent` (`id`, `content`, `contentImage`, `contentName`, `contentDetails`) VALUES
(0, 'F55', 'Aerobics ', 'Cardio Workout', 'Fit Stamp provides you access to find aerobics centres near your postal code'),
(1, 'F56', 'Basketball - Football - Swimming', 'Sports Workout', 'Fit stamp provides you with various locations where different sports can be played by a customer, depending on what they feel like'),
(2, 'R58', 'Yoga - Boxing - Martial Arts', 'Gymnastics Workouts', 'Fit Stamp gives you the ability to access various gymnasium locations in order to gain access to them and be involved actively in gymnastics');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `maincontent`
--
ALTER TABLE `maincontent`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
