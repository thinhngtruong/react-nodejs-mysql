SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `complete` tinyint(4) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- ----------------------------
-- Records of tasks
-- ----------------------------
BEGIN;
INSERT INTO `tasks` VALUES (3, 'Learn ReactJS', 0, 1);
INSERT INTO `tasks` VALUES (4, 'Learn Svelte', 0, 1);
INSERT INTO `tasks` VALUES (5, 'Pay Bills', 0, 1);
INSERT INTO `tasks` VALUES (6, 'Learn NodeJS Express', 0, 1);
INSERT INTO `tasks` VALUES (7, 'Final Project', 0, 1);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `rfToken` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'admin', '$2a$10$UU0s7801gpMCKKbLM/fPvubaNqwODVhtaAalWkk00Mdb5rnAzADuS', 'r71zICswfuaUCGJF3CR2frfTwtT3C7r9');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
