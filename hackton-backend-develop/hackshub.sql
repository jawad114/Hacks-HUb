-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2024 at 01:11 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hackshub`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `event_title` text NOT NULL,
  `event_description` text NOT NULL,
  `creator_id` int(10) UNSIGNED NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `location` text NOT NULL,
  `guidelines` text NOT NULL,
  `participation_type` enum('individual','team','both') NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `event_title`, `event_description`, `creator_id`, `start_date`, `end_date`, `location`, `guidelines`, `participation_type`, `category_id`, `created_at`, `updated_at`) VALUES
(6, 'six Rubr Hackathon', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\n', 43, '2020-01-02 00:00:00', '2020-02-02 00:00:00', 'Remote', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\n', 'team', 1, '2024-02-24 11:36:52', '2024-02-24 11:36:52');

-- --------------------------------------------------------

--
-- Table structure for table `event_categories`
--

CREATE TABLE `event_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_categories`
--

INSERT INTO `event_categories` (`id`, `category_name`) VALUES
(6, 'Corporate Hackaton'),
(5, 'Global Hackaton'),
(3, 'Innovate Hackaton'),
(4, 'Student Hackaton'),
(1, 'Summer Hackaton'),
(2, 'Winner Hackaton');

-- --------------------------------------------------------

--
-- Table structure for table `event_participants`
--

CREATE TABLE `event_participants` (
  `id` int(10) UNSIGNED NOT NULL,
  `event_id` int(10) UNSIGNED DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_participants`
--

INSERT INTO `event_participants` (`id`, `event_id`, `user_id`) VALUES
(4, 6, 44);

-- --------------------------------------------------------

--
-- Table structure for table `event_team`
--

CREATE TABLE `event_team` (
  `id` int(10) UNSIGNED NOT NULL,
  `event_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `role_type` enum('organizer','judge') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_team`
--

INSERT INTO `event_team` (`id`, `event_id`, `user_id`, `role_type`) VALUES
(2, 6, 45, 'judge');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20191217170254_01-user.js', 1, '2024-02-19 14:52:36'),
(2, '20191217170301_02-event_categories.js', 1, '2024-02-19 14:52:36'),
(3, '20191217171230_03-events.js', 1, '2024-02-19 14:52:40'),
(4, '20200114172910_04-event_participants.js', 1, '2024-02-19 14:52:43'),
(5, '20200114214722_04-event-team.js.js', 1, '2024-02-19 14:52:45'),
(6, '20200117140220_08-project_entries.js', 2, '2024-02-19 15:03:21'),
(7, '20200120133700_project_grading.js', 3, '2024-02-19 15:11:18'),
(8, '20200121122331_09-add-comments-column.js', 4, '2024-02-19 15:12:46'),
(9, '20200122141440_11-add-average-column.js', 5, '2024-02-19 15:20:05'),
(10, '20200128093128_12-participant-teams.js', 5, '2024-02-19 15:20:07'),
(11, '20200128095045_13-participant-team-members.js', 5, '2024-02-19 15:20:10'),
(12, '20200130230908_confirm-email.js', 6, '2024-02-19 15:24:34'),
(26, '20200131081920_images.js', 7, '2024-02-19 17:18:55');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `participant_teams`
--

CREATE TABLE `participant_teams` (
  `id` int(10) UNSIGNED NOT NULL,
  `team_name` text NOT NULL,
  `event_id` int(10) UNSIGNED NOT NULL,
  `team_lead` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `participant_team_members`
--

CREATE TABLE `participant_team_members` (
  `id` int(10) UNSIGNED NOT NULL,
  `team_member` int(10) UNSIGNED NOT NULL,
  `team_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `project_entries`
--

CREATE TABLE `project_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `project_title` text NOT NULL,
  `participant_or_team_name` text NOT NULL,
  `event_id` int(10) UNSIGNED NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `git_url` varchar(255) DEFAULT NULL,
  `project_writeups` text DEFAULT NULL,
  `submitted_by` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project_entries`
--

INSERT INTO `project_entries` (`id`, `project_title`, `participant_or_team_name`, `event_id`, `video_url`, `git_url`, `project_writeups`, `submitted_by`, `created_at`, `updated_at`) VALUES
(1, 'The Road Not Taken is six rubrics', 'Furahi Day', 6, NULL, NULL, 'Two roads diverged in a yellow wood,And sorry I could not travel both And be one traveler, long I stood And looked down one as far as I could To where it bent in the undergrowth', 44, '2024-02-24 11:42:25', '2024-02-24 11:42:25');

-- --------------------------------------------------------

--
-- Table structure for table `project_grading`
--

CREATE TABLE `project_grading` (
  `id` int(10) UNSIGNED NOT NULL,
  `project_event_id` int(10) UNSIGNED NOT NULL,
  `project_id` int(10) UNSIGNED NOT NULL,
  `judge_id` int(10) UNSIGNED NOT NULL,
  `product_design` int(11) DEFAULT 0,
  `functionality` int(11) DEFAULT 0,
  `innovation` int(11) DEFAULT 0,
  `product_fit` int(11) DEFAULT 0,
  `extensibility` int(11) DEFAULT 0,
  `presentation` int(11) DEFAULT 0,
  `judge_comments` text DEFAULT NULL,
  `average_rating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project_grading`
--

INSERT INTO `project_grading` (`id`, `project_event_id`, `project_id`, `judge_id`, `product_design`, `functionality`, `innovation`, `product_fit`, `extensibility`, `presentation`, `judge_comments`, `average_rating`) VALUES
(1, 6, 1, 45, 6, 15, 34, 43, 4, 3, 'Awesome job on this project', 17.5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `region` varchar(20) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `verified` tinyint(1) DEFAULT 0,
  `image_url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `bio`, `email`, `fullname`, `verified`, `image_url`) VALUES
(43, NULL, '$2b$15$vCm7RiDxgNbs4uImp9s8KuCaR71K.Hel/8cHbvh19aWRq3ZcAqojS', NULL, 'jawadshayhrr@hacktonapi.com', NULL, 0, NULL),
(44, NULL, '$2b$15$WhZmKpVboYJ2rKVTuJpbGuJoMnHAL.//cPvjMbtV.hzHqA0VsMkHy', NULL, 'jawadshayhfrr@hacktonapi.com', NULL, 0, NULL),
(45, NULL, '$2b$15$T8tixvXLuPiE.Uclb3fqyOkEqgeAKrLE7f/oNN.4NCPAgsCqbuPIe', NULL, 'r@hacktonapi.com', NULL, 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `events_event_title_unique` (`event_title`) USING HASH,
  ADD KEY `events_creator_id_foreign` (`creator_id`),
  ADD KEY `events_category_id_foreign` (`category_id`);

--
-- Indexes for table `event_categories`
--
ALTER TABLE `event_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `event_categories_category_name_unique` (`category_name`);

--
-- Indexes for table `event_participants`
--
ALTER TABLE `event_participants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `event_participants_event_id_user_id_unique` (`event_id`,`user_id`),
  ADD KEY `event_participants_user_id_foreign` (`user_id`);

--
-- Indexes for table `event_team`
--
ALTER TABLE `event_team`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `event_team_event_id_user_id_unique` (`event_id`,`user_id`),
  ADD KEY `event_team_user_id_foreign` (`user_id`);

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `participant_teams`
--
ALTER TABLE `participant_teams`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `participant_teams_team_name_unique` (`team_name`) USING HASH,
  ADD KEY `participant_teams_event_id_foreign` (`event_id`),
  ADD KEY `participant_teams_team_lead_foreign` (`team_lead`);

--
-- Indexes for table `participant_team_members`
--
ALTER TABLE `participant_team_members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `participant_team_members_team_member_foreign` (`team_member`),
  ADD KEY `participant_team_members_team_id_foreign` (`team_id`);

--
-- Indexes for table `project_entries`
--
ALTER TABLE `project_entries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `project_entries_project_title_unique` (`project_title`) USING HASH,
  ADD KEY `project_entries_event_id_foreign` (`event_id`),
  ADD KEY `project_entries_submitted_by_foreign` (`submitted_by`);

--
-- Indexes for table `project_grading`
--
ALTER TABLE `project_grading`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `project_grading_project_id_judge_id_unique` (`project_id`,`judge_id`),
  ADD KEY `project_grading_project_event_id_foreign` (`project_event_id`),
  ADD KEY `project_grading_judge_id_foreign` (`judge_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `event_categories`
--
ALTER TABLE `event_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `event_participants`
--
ALTER TABLE `event_participants`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `event_team`
--
ALTER TABLE `event_team`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `participant_teams`
--
ALTER TABLE `participant_teams`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `participant_team_members`
--
ALTER TABLE `participant_team_members`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_entries`
--
ALTER TABLE `project_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_grading`
--
ALTER TABLE `project_grading`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `event_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `events_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `event_participants`
--
ALTER TABLE `event_participants`
  ADD CONSTRAINT `event_participants_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `event_participants_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `event_team`
--
ALTER TABLE `event_team`
  ADD CONSTRAINT `event_team_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `event_team_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `participant_teams`
--
ALTER TABLE `participant_teams`
  ADD CONSTRAINT `participant_teams_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `participant_teams_team_lead_foreign` FOREIGN KEY (`team_lead`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `participant_team_members`
--
ALTER TABLE `participant_team_members`
  ADD CONSTRAINT `participant_team_members_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `participant_teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `participant_team_members_team_member_foreign` FOREIGN KEY (`team_member`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_entries`
--
ALTER TABLE `project_entries`
  ADD CONSTRAINT `project_entries_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_entries_submitted_by_foreign` FOREIGN KEY (`submitted_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_grading`
--
ALTER TABLE `project_grading`
  ADD CONSTRAINT `project_grading_judge_id_foreign` FOREIGN KEY (`judge_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_grading_project_event_id_foreign` FOREIGN KEY (`project_event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_grading_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `project_entries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
