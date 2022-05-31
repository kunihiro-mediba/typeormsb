CREATE TABLE `user` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,

    `name` varchar(255) NOT NULL,

    `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user_post` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,
    `user_id` bigint unsigned NOT NULL,

    `title` varchar(255) NOT NULL,

    `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY `user_id` (`user_id`) REFERENCES `user` (`id`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`id`, `name`) VALUES
(1, 'foo'), (2, 'bar');

INSERT INTO `user_post` (`id`, `user_id`, `title`) VALUES
(1, 1, 'Hello'), (2, 2, 'Good-bye');
